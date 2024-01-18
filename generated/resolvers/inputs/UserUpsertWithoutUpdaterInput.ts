import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUpdaterInput } from "../inputs/UserCreateWithoutUpdaterInput";
import { UserUpdateWithoutUpdaterInput } from "../inputs/UserUpdateWithoutUpdaterInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutUpdaterInput", {})
export class UserUpsertWithoutUpdaterInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutUpdaterInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUpdaterInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUpdaterInput, {
    nullable: false
  })
  create!: UserCreateWithoutUpdaterInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
