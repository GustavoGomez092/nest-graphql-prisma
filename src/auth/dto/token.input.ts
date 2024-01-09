import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class JWTTokenInput {
  @Field()
  access_token: string;
}