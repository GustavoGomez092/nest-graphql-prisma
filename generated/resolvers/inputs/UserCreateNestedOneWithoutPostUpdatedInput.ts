import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostUpdatedInput } from "../inputs/UserCreateOrConnectWithoutPostUpdatedInput";
import { UserCreateWithoutPostUpdatedInput } from "../inputs/UserCreateWithoutPostUpdatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPostUpdatedInput", {})
export class UserCreateNestedOneWithoutPostUpdatedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostUpdatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostUpdatedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostUpdatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostUpdatedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
