import { Args, Context, Info, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { GraphQLResolveInfo } from "graphql";
import { Public } from "./decorators/public.decorator";
import { JWTTokenInput } from "./dto/token.input";

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
  ) {}
  
  @Public()
  @Mutation(() => JWTTokenInput)
  async signIn(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args('email') email: string, @Args('password') password: string): Promise<JWTTokenInput> {
    return this.authService.signIn(email, password);
  }
}
