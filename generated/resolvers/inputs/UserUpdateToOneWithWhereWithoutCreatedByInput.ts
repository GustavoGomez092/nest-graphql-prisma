import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutCreatedByInput } from "../inputs/UserUpdateWithoutCreatedByInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutCreatedByInput", {})
export class UserUpdateToOneWithWhereWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedByInput, {
    nullable: false
  })
  data!: UserUpdateWithoutCreatedByInput;
}
