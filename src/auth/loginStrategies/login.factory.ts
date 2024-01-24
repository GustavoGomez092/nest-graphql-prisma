import { Injectable } from '@nestjs/common'
import { AuthTypes, ILogin } from '../auth.types'
import { EmailAndPasswordAuthStrategy } from './emailAndPassword.strategy'

@Injectable()
export class LoginFactory {
  constructor (
    private readonly emailAndPasswordStrategy: EmailAndPasswordAuthStrategy,
  ) {}

  public getLoginStrategy (AuthType: AuthTypes): ILogin {
    if (AuthType === AuthTypes.EMAIL_AND_PASSWORD) {
      return this.emailAndPasswordStrategy
    } else {
      throw new Error(`The Provided Auth type "${String(AuthType)}" is not valid`)
    }
  }
}
