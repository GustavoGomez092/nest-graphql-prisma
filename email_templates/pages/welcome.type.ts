import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WelcomeType {
  @Field()
  userName: string;
  @Field()
  userEmail: string;
}
