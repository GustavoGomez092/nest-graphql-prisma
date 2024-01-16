import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostUpdatedInput } from "../inputs/UserCreateWithoutPostUpdatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutPostUpdatedInput", {})
export class UserCreateOrConnectWithoutPostUpdatedInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostUpdatedInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostUpdatedInput;
}
