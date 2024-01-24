import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IToken } from '../auth.types'
import { TokenAuth } from './token.abstract'

@Injectable()
export class EmailTokenStrategy extends TokenAuth implements IToken {
  secret: string
  expiration: string

  constructor (
    private readonly configService: ConfigService<any>
  ) {
    super()
    this.secret = this.configService.get('EMAIL_SECRET', '')
    this.expiration = this.configService.get('EMAIL_PASSWORD_REQUEST_EXP', '')
  }
}
