import { JwtService } from '@nestjs/jwt';
import { AuthResolver } from './auth/auth.resolver';
import { signIn } from './auth/use-cases/signin';
import { signUp } from './auth/use-cases/signup';
import { CreateOneUser } from './user/use-cases/create-one-user';
import { UserResolver } from './user/user.resolver';
// #import-area#

export const useCases = [CreateOneUser, UserResolver, AuthResolver, signIn, signUp, JwtService];
