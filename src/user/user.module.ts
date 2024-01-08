import { Module } from '@nestjs/common';
import { CreateOneUser } from './use-cases/create-one-user';
import { UserResolver } from './user.resolver';

@Module({
  providers: [CreateOneUser, UserResolver],
})
export class UserModule {}