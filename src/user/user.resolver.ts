import { Args, Context, Info, Mutation, Resolver } from '@nestjs/graphql';
import { CreateOneUserArgs, User, UserCrudResolver } from 'generated';
import { GraphQLResolveInfo } from 'graphql';
import { CreateOneUser } from './use-cases/create-one-user';

@Resolver(User)
export class UserResolver extends UserCrudResolver {

    constructor(
        private readonly createOneUserUseCase: CreateOneUser,
    ) {
        super();
    }

    @Mutation(() => User)
    async createOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneUserArgs) {
        return this.createOneUserUseCase.createOneUser(ctx, info, args);
    }
}
