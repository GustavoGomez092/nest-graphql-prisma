import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostCreatedInput } from "../inputs/UserCreateOrConnectWithoutPostCreatedInput";
import { UserCreateWithoutPostCreatedInput } from "../inputs/UserCreateWithoutPostCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPostCreatedInput", {})
export class UserCreateNestedOneWithoutPostCreatedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostCreatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostCreatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
