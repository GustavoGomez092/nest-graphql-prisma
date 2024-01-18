import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutUpdatedByInput } from "../inputs/UserUpdateWithoutUpdatedByInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutUpdatedByInput", {})
export class UserUpdateToOneWithWhereWithoutUpdatedByInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUpdatedByInput, {
    nullable: false
  })
  data!: UserUpdateWithoutUpdatedByInput;
}
