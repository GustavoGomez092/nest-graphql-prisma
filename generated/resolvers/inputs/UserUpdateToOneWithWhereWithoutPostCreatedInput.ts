import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutPostCreatedInput } from "../inputs/UserUpdateWithoutPostCreatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutPostCreatedInput", {})
export class UserUpdateToOneWithWhereWithoutPostCreatedInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPostCreatedInput, {
    nullable: false
  })
  data!: UserUpdateWithoutPostCreatedInput;
}
