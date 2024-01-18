import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedByInput } from "../inputs/UserCreateOrConnectWithoutCreatedByInput";
import { UserCreateWithoutCreatedByInput } from "../inputs/UserCreateWithoutCreatedByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCreatedByInput", {})
export class UserCreateNestedOneWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedByInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedByInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
