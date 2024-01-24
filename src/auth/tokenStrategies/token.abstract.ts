import { Injectable } from '@nestjs/common'
import { IPayload } from '../auth.types'
import * as jwt from 'jsonwebtoken'
import { User } from 'generated'

@Injectable()
export abstract class TokenAuth {
  abstract readonly secret: string
  abstract readonly expiration: string

  validateToken (token: string): IPayload {
    return jwt.verify(token, this.secret) as IPayload
  }

  getTokenInfo (token: string): IPayload {
    return jwt.decode(token) as IPayload
  }

  generateToken (user: User): string {
    const payload: IPayload = { version: user.tokenVersion, userId: user.id }
    const token = jwt.sign(payload, this.secret, { expiresIn: this.expiration })
    return token
  }
}
