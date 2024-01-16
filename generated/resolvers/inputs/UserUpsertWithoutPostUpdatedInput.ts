import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostUpdatedInput } from "../inputs/UserCreateWithoutPostUpdatedInput";
import { UserUpdateWithoutPostUpdatedInput } from "../inputs/UserUpdateWithoutPostUpdatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutPostUpdatedInput", {})
export class UserUpsertWithoutPostUpdatedInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPostUpdatedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostUpdatedInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostUpdatedInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostUpdatedInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
