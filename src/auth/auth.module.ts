import { Module } from '@nestjs/common';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';
import { signIn } from './use-cases/signin';
import { signUp } from './use-cases/signup';
import { MailModule } from 'src/mail/mail.module';
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
    UserModule,
    MailModule,
  ],
  providers: [signIn, signUp, AuthResolver],
  exports: [signIn, signUp],
})
export class AuthModule {}
