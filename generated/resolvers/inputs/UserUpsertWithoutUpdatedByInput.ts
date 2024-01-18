import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUpdatedByInput } from "../inputs/UserCreateWithoutUpdatedByInput";
import { UserUpdateWithoutUpdatedByInput } from "../inputs/UserUpdateWithoutUpdatedByInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutUpdatedByInput", {})
export class UserUpsertWithoutUpdatedByInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutUpdatedByInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUpdatedByInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUpdatedByInput, {
    nullable: false
  })
  create!: UserCreateWithoutUpdatedByInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
