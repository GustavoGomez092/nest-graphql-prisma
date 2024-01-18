import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedByInput } from "../inputs/UserCreateOrConnectWithoutCreatedByInput";
import { UserCreateWithoutCreatedByInput } from "../inputs/UserCreateWithoutCreatedByInput";
import { UserUpdateToOneWithWhereWithoutCreatedByInput } from "../inputs/UserUpdateToOneWithWhereWithoutCreatedByInput";
import { UserUpsertWithoutCreatedByInput } from "../inputs/UserUpsertWithoutCreatedByInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutCreatedByNestedInput", {})
export class UserUpdateOneWithoutCreatedByNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedByInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedByInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCreatedByInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatedByInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutCreatedByInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutCreatedByInput | undefined;
}
