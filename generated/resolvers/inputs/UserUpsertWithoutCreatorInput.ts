import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatorInput } from "../inputs/UserCreateWithoutCreatorInput";
import { UserUpdateWithoutCreatorInput } from "../inputs/UserUpdateWithoutCreatorInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutCreatorInput", {})
export class UserUpsertWithoutCreatorInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
