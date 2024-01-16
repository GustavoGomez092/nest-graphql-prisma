import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutPostUpdatedInput } from "../inputs/UserUpdateWithoutPostUpdatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutPostUpdatedInput", {})
export class UserUpdateToOneWithWhereWithoutPostUpdatedInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPostUpdatedInput, {
    nullable: false
  })
  data!: UserUpdateWithoutPostUpdatedInput;
}
