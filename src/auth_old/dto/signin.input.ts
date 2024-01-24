import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class SignInInput {
  @Field()
  email: string;
  @Field()
  password: string;
}
