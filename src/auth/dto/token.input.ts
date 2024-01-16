import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class JWTTokenInput {
  @Field()
  access_token: string;
}
