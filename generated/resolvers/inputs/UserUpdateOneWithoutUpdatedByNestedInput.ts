import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUpdatedByInput } from "../inputs/UserCreateOrConnectWithoutUpdatedByInput";
import { UserCreateWithoutUpdatedByInput } from "../inputs/UserCreateWithoutUpdatedByInput";
import { UserUpdateToOneWithWhereWithoutUpdatedByInput } from "../inputs/UserUpdateToOneWithWhereWithoutUpdatedByInput";
import { UserUpsertWithoutUpdatedByInput } from "../inputs/UserUpsertWithoutUpdatedByInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutUpdatedByNestedInput", {})
export class UserUpdateOneWithoutUpdatedByNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUpdatedByInput, {
    nullable: true
  })
  create?: UserCreateWithoutUpdatedByInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUpdatedByInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUpdatedByInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutUpdatedByInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutUpdatedByInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  disconnect?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  delete?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutUpdatedByInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutUpdatedByInput | undefined;
}
