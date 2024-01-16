import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class SignupInput {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  confirmPassword: string;
}
