import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostCreatedInput } from "../inputs/UserCreateWithoutPostCreatedInput";
import { UserUpdateWithoutPostCreatedInput } from "../inputs/UserUpdateWithoutPostCreatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutPostCreatedInput", {})
export class UserUpsertWithoutPostCreatedInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPostCreatedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostCreatedInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostCreatedInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostCreatedInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
