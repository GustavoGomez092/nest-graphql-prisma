import { Injectable, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common'
import { Credentials, ILogin } from '../auth.types'
import { PrismaClient } from '@prisma/client/extension'
import * as argon2 from 'argon2'

@Injectable()
export class EmailAndPasswordAuthStrategy implements ILogin {
  constructor (
    private readonly logger: Logger
  ) {}

  async login ({ email, password }: Credentials, prisma:PrismaClient): Promise<any> {
    try {
      const user = await prisma.user.findUnique({ where: { email: email } })
      if (user == null) { throw new UnauthorizedException() }

      const validUser = await argon2.verify(user.password, password) 

      if (!validUser) { throw new UnauthorizedException() }
      return user
    } catch (error) {
      this.logger.error(error)
      if (error instanceof UnauthorizedException) {
        throw error
      }
      throw new InternalServerErrorException(error.message)
    }
  }
}
