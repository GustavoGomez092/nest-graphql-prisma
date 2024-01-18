import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutUpdaterInput } from "../inputs/UserUpdateWithoutUpdaterInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutUpdaterInput", {})
export class UserUpdateToOneWithWhereWithoutUpdaterInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUpdaterInput, {
    nullable: false
  })
  data!: UserUpdateWithoutUpdaterInput;
}
