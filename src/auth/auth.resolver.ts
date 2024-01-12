import { signUp } from './use-cases/signup';
import { signIn } from './use-cases/signin';
import { Args, Context, Info, Mutation, Resolver } from "@nestjs/graphql";
import { GraphQLResolveInfo } from "graphql";
import { Public } from "./decorators/public.decorator";
import { JWTTokenInput } from "./dto/token.input";
import { User } from "generated";
import { SignupInput } from './dto/signup.input';
import { SignInInput } from './dto/signin.input';
import { Ctx } from 'src/app.types';

@Resolver()
export class AuthResolver {
  constructor(
    private signInUseCase: signIn,
    private signUpUseCase: signUp
  ) {}
  
  @Public()
  @Mutation(() => JWTTokenInput)
  async signIn(@Context() ctx: Ctx, @Info() info: GraphQLResolveInfo, @Args('input') input:SignInInput): Promise<JWTTokenInput> {
    return this.signInUseCase.handle(ctx, info, input);
  }

  @Public()
  @Mutation(() => User)
  async signUp(
    @Context() ctx: Ctx,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: SignupInput,
    ): Promise<User> {
    return this.signUpUseCase.handle(ctx, info, input);
  }
}
