import { JwtService } from '@nestjs/jwt';
import { AuthResolver } from './auth/auth.resolver';
// import { signIn } from './auth/use-cases/signin';
// import { signUp } from './auth/use-cases/signup';
import { CreateOneUser } from './user/use-cases/create-one-user';
import { UserResolver } from './user/user.resolver';
import { AuthService } from './auth/auth.service';
import { LoginFactory } from './auth/loginStrategies/login.factory';
import { Logger } from '@nestjs/common';
import { TokenFactory } from './auth/tokenStrategies/token.factory';
import { EmailAndPasswordAuthStrategy } from './auth/loginStrategies/emailAndPassword.strategy';
import { EmailTokenStrategy } from './auth/tokenStrategies/email.token.strategy';
import { MobileTokenStrategy } from './auth/tokenStrategies/mobile.token.strategy';
import { JwtTokenStrategy } from './auth/tokenStrategies/jwt.token.strategy';
import { RefreshTokenStrategy } from './auth/tokenStrategies/refresh.token.strategy';
import { ConfigService } from '@nestjs/config';

// #import-area#

export const useCases = [
  CreateOneUser,
  UserResolver,
  AuthService,
  LoginFactory,
  Logger,
  TokenFactory,
  EmailAndPasswordAuthStrategy,
  EmailTokenStrategy,
  MobileTokenStrategy,
  JwtTokenStrategy,
  RefreshTokenStrategy,
  ConfigService,
  AuthResolver,
];
