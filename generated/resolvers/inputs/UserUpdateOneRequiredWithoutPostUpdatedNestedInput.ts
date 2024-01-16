import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostUpdatedInput } from "../inputs/UserCreateOrConnectWithoutPostUpdatedInput";
import { UserCreateWithoutPostUpdatedInput } from "../inputs/UserCreateWithoutPostUpdatedInput";
import { UserUpdateToOneWithWhereWithoutPostUpdatedInput } from "../inputs/UserUpdateToOneWithWhereWithoutPostUpdatedInput";
import { UserUpsertWithoutPostUpdatedInput } from "../inputs/UserUpsertWithoutPostUpdatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPostUpdatedNestedInput", {})
export class UserUpdateOneRequiredWithoutPostUpdatedNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostUpdatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostUpdatedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostUpdatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostUpdatedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPostUpdatedInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostUpdatedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutPostUpdatedInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutPostUpdatedInput | undefined;
}
