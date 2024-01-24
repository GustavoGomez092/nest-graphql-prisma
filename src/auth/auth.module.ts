import { Logger, Module } from '@nestjs/common'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { EmailAndPasswordAuthStrategy } from './loginStrategies/emailAndPassword.strategy'
import { LoginFactory } from './loginStrategies/login.factory'
import { EmailTokenStrategy } from './tokenStrategies/email.token.strategy'
import { JwtTokenStrategy } from './tokenStrategies/jwt.token.strategy'
import { MobileTokenStrategy } from './tokenStrategies/mobile.token.strategy'
import { RefreshTokenStrategy } from './tokenStrategies/refresh.token.strategy'
import { TokenFactory } from './tokenStrategies/token.factory'
import { ConfigService } from '@nestjs/config'
import { UserModule } from 'src/user/user.module'
import { MailModule } from 'src/mail/mail.module'

@Module({
  imports: [
    MailModule,
    UserModule
  ],
  providers: [
    AuthResolver,
    AuthService,
    Logger,
    LoginFactory,
    EmailAndPasswordAuthStrategy,
    TokenFactory,
    MobileTokenStrategy,
    RefreshTokenStrategy,
    JwtTokenStrategy,
    EmailTokenStrategy,
    ConfigService,
  ],
  exports: [AuthService, TokenFactory]
})
export class AuthModule {}
