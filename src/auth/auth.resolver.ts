import { signUp } from './use-cases/signup';
import { signIn } from './use-cases/signin';

import { GraphQLResolveInfo } from 'graphql';
import { JWTTokenInput } from './dto/token.input';
import { User } from 'generated';
import { SignupInput } from './dto/signup.input';
import { SignInInput } from './dto/signin.input';
import { Ctx as Context } from 'src/app.types';
import { Args, Ctx, Info, Mutation, Resolver } from 'type-graphql';

@Resolver()
export class AuthResolver {
  constructor(
    private signInUseCase: signIn,
    private signUpUseCase: signUp,
  ) {}

  @Mutation(() => JWTTokenInput)
  async signIn(@Ctx() ctx: Context, @Info() info: GraphQLResolveInfo, @Args() input: SignInInput): Promise<JWTTokenInput> {
    return this.signInUseCase.handle(ctx, info, input);
  }

  @Mutation(() => User)
  async signUp(@Ctx() ctx: Context, @Info() info: GraphQLResolveInfo, @Args() input: SignupInput): Promise<User> {
    return this.signUpUseCase.handle(ctx, info, input);
  }
}
