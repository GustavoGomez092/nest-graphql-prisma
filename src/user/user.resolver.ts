import { CreateOneUserArgs, User, UserCrudResolver } from 'generated';
import { GraphQLResolveInfo } from 'graphql';
import { CreateOneUser } from './use-cases/create-one-user';
import { Ctx as Context } from 'src/app.types';
import { Args, Authorized, Ctx, Info, Mutation, Resolver } from 'type-graphql';
//         #import-area#

@Resolver(User)
export class UserResolver extends UserCrudResolver {
  constructor(
    private readonly createOneUserUseCase: CreateOneUser,
    //        #constructor-area#
  ) {
    super();
  }
  @Authorized()
  @Mutation(() => User)
  async createOneUser(@Ctx() ctx: Context, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneUserArgs) {
    return this.createOneUserUseCase.handle(ctx, info, args);
  }
  // #methods-area#
}
