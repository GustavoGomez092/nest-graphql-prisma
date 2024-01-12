import { Injectable } from '@nestjs/common';
import { CreateOneUserArgs, CreateOneUserResolver } from 'generated';
import { GraphQLResolveInfo } from 'graphql';
import { Ctx } from 'src/app.types';

@Injectable()
export class CreateOneUser extends CreateOneUserResolver {
  async handle(ctx: Ctx, info: GraphQLResolveInfo, args: CreateOneUserArgs) {
    console.log('----------Before create one user----------');
    return super.createOneUser(ctx, info, args);
  }
}
