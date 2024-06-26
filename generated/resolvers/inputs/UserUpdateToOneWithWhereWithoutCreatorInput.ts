import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutCreatorInput } from "../inputs/UserUpdateWithoutCreatorInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutCreatorInput", {})
export class UserUpdateToOneWithWhereWithoutCreatorInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatorInput, {
    nullable: false
  })
  data!: UserUpdateWithoutCreatorInput;
}
