import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IToken } from '../auth.types'
import { TokenAuth } from './token.abstract'

@Injectable()
export class JwtTokenStrategy extends TokenAuth implements IToken {
  secret: string
  expiration: string

  constructor (
    private readonly configService: ConfigService<any>
  ) {
    super()
    this.secret = this.configService.get('JWT_SECRET', '')
    this.expiration = this.configService.get('JWT_EXP', '')
  }
}
