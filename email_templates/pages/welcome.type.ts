import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class WelcomeType {
  @Field()
  userName: string;
  @Field()
  userEmail: string;
}
