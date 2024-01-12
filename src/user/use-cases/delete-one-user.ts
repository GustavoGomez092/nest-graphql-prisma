import { Injectable } from '@nestjs/common';
import { DeleteOneUserArgs, DeleteOneUserResolver } from 'generated';
import { GraphQLResolveInfo } from 'graphql';
import { Ctx } from 'src/app.types';

@Injectable()
export class DeleteOneUser extends DeleteOneUserResolver {
  async deleteOneUser (ctx: Ctx, info: GraphQLResolveInfo, args: DeleteOneUserArgs) {
    console.log('----------Before DeleteOneUser----------');
    console.log('insert your custom business logic here');
    return super.deleteOneUser(ctx, info, args);
  }
}

