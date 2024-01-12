import { Args, Context, Info, Mutation, Resolver } from '@nestjs/graphql';
import { CreateOneUserArgs, User, UserCrudResolver } from 'generated';
import { GraphQLResolveInfo } from 'graphql';
import { CreateOneUser } from './use-cases/create-one-user';
import { Ctx } from 'src/app.types';

@Resolver(User)
export class UserResolver extends UserCrudResolver {

    constructor(
        private readonly createOneUserUseCase: CreateOneUser,
    ) {
        super();
    }

    @Mutation(() => User)
    async createOneUser(@Context() ctx: Ctx, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneUserArgs) {
        return this.createOneUserUseCase.handle(ctx, info, args);
    }
}
