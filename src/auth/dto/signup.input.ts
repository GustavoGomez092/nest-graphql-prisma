import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SignupInput {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  confirmPassword: string;
}