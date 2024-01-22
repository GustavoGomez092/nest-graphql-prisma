import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostCreatedInput } from "../inputs/UserCreateOrConnectWithoutPostCreatedInput";
import { UserCreateWithoutPostCreatedInput } from "../inputs/UserCreateWithoutPostCreatedInput";
import { UserUpdateToOneWithWhereWithoutPostCreatedInput } from "../inputs/UserUpdateToOneWithWhereWithoutPostCreatedInput";
import { UserUpsertWithoutPostCreatedInput } from "../inputs/UserUpsertWithoutPostCreatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutPostCreatedNestedInput", {})
export class UserUpdateOneWithoutPostCreatedNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostCreatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostCreatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPostCreatedInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostCreatedInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutPostCreatedInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutPostCreatedInput | undefined;
}
