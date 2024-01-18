import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUpdaterInput } from "../inputs/UserCreateOrConnectWithoutUpdaterInput";
import { UserCreateWithoutUpdaterInput } from "../inputs/UserCreateWithoutUpdaterInput";
import { UserUpdateToOneWithWhereWithoutUpdaterInput } from "../inputs/UserUpdateToOneWithWhereWithoutUpdaterInput";
import { UserUpsertWithoutUpdaterInput } from "../inputs/UserUpsertWithoutUpdaterInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutUpdaterNestedInput", {})
export class UserUpdateOneWithoutUpdaterNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUpdaterInput, {
    nullable: true
  })
  create?: UserCreateWithoutUpdaterInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUpdaterInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUpdaterInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutUpdaterInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutUpdaterInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutUpdaterInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutUpdaterInput | undefined;
}
