import { Injectable } from '@nestjs/common';
import { CreateOneUserArgs, CreateOneUserResolver } from 'generated';
import { GraphQLResolveInfo } from 'graphql';


@Injectable()
export class CreateOneUser extends CreateOneUserResolver {
  async createOneUser (ctx: any, info: GraphQLResolveInfo, args: CreateOneUserArgs) {
    console.log('----------Before create one user----------');
    return super.createOneUser(ctx, info, args);
  }
}

