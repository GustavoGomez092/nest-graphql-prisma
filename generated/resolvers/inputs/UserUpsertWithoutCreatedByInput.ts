import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedByInput } from "../inputs/UserCreateWithoutCreatedByInput";
import { UserUpdateWithoutCreatedByInput } from "../inputs/UserUpdateWithoutCreatedByInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutCreatedByInput", {})
export class UserUpsertWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedByInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedByInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedByInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
