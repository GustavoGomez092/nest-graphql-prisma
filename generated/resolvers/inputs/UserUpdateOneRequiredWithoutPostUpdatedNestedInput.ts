import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostUpdatedInput } from "../inputs/UserCreateOrConnectWithoutPostUpdatedInput";
import { UserCreateWithoutPostUpdatedInput } from "../inputs/UserCreateWithoutPostUpdatedInput";
import { UserUpdateToOneWithWhereWithoutPostUpdatedInput } from "../inputs/UserUpdateToOneWithWhereWithoutPostUpdatedInput";
import { UserUpsertWithoutPostUpdatedInput } from "../inputs/UserUpsertWithoutPostUpdatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateOneRequiredWithoutPostUpdatedNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutPostUpdatedNestedInput {
  @Field(_type => UserCreateWithoutPostUpdatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostUpdatedInput | undefined;

  @Field(_type => UserCreateOrConnectWithoutPostUpdatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostUpdatedInput | undefined;

  @Field(_type => UserUpsertWithoutPostUpdatedInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostUpdatedInput | undefined;

  @Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @Field(_type => UserUpdateToOneWithWhereWithoutPostUpdatedInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutPostUpdatedInput | undefined;
}
