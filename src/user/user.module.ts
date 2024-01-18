import { Module } from '@nestjs/common';
import { CreateOneUser } from './use-cases/create-one-user';
import { UserResolver } from './user.resolver';
//        #import-area#

@Module({
  providers: [CreateOneUser, UserResolver],
  exports: [CreateOneUser],
})
export class UserModule {}
