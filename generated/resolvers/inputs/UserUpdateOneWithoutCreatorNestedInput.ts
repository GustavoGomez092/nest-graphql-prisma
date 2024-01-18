import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatorInput } from "../inputs/UserCreateOrConnectWithoutCreatorInput";
import { UserCreateWithoutCreatorInput } from "../inputs/UserCreateWithoutCreatorInput";
import { UserUpdateToOneWithWhereWithoutCreatorInput } from "../inputs/UserUpdateToOneWithWhereWithoutCreatorInput";
import { UserUpsertWithoutCreatorInput } from "../inputs/UserUpsertWithoutCreatorInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutCreatorNestedInput", {})
export class UserUpdateOneWithoutCreatorNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatorInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatorInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCreatorInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  disconnect?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  delete?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutCreatorInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutCreatorInput | undefined;
}
