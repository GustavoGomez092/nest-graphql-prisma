import { ArgsType, Field, registerEnumType } from 'type-graphql'
import { AuthTypes } from '../auth.types'



registerEnumType(
  AuthTypes,
  {
    name: 'AuthTypes',
    description: 'Authentication types used to grant access to users',
    valuesConfig: {
      EMAIL_AND_PASSWORD: {
        description: 'Default value for Auth types'
      }
    }
  }
)

@ArgsType()
export class LoginArgs {
  @Field(() => AuthTypes)
  authType: AuthTypes = AuthTypes.EMAIL_AND_PASSWORD

  @Field()
  email: string


  @Field()
  password: string


  @Field()
  token: string
}
