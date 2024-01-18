import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUpdaterInput } from "../inputs/UserCreateOrConnectWithoutUpdaterInput";
import { UserCreateWithoutUpdaterInput } from "../inputs/UserCreateWithoutUpdaterInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutUpdaterInput", {})
export class UserCreateNestedOneWithoutUpdaterInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUpdaterInput, {
    nullable: true
  })
  create?: UserCreateWithoutUpdaterInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUpdaterInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUpdaterInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
