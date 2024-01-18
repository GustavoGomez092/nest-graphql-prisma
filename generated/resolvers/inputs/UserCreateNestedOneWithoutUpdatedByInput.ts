import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUpdatedByInput } from "../inputs/UserCreateOrConnectWithoutUpdatedByInput";
import { UserCreateWithoutUpdatedByInput } from "../inputs/UserCreateWithoutUpdatedByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutUpdatedByInput", {})
export class UserCreateNestedOneWithoutUpdatedByInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUpdatedByInput, {
    nullable: true
  })
  create?: UserCreateWithoutUpdatedByInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUpdatedByInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUpdatedByInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
