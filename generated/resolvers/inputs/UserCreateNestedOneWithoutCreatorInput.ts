import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatorInput } from "../inputs/UserCreateOrConnectWithoutCreatorInput";
import { UserCreateWithoutCreatorInput } from "../inputs/UserCreateWithoutCreatorInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCreatorInput", {})
export class UserCreateNestedOneWithoutCreatorInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatorInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatorInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
