import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostCreatedInput } from "../inputs/UserCreateOrConnectWithoutPostCreatedInput";
import { UserCreateWithoutPostCreatedInput } from "../inputs/UserCreateWithoutPostCreatedInput";
import { UserUpdateToOneWithWhereWithoutPostCreatedInput } from "../inputs/UserUpdateToOneWithWhereWithoutPostCreatedInput";
import { UserUpsertWithoutPostCreatedInput } from "../inputs/UserUpsertWithoutPostCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateOneRequiredWithoutPostCreatedNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutPostCreatedNestedInput {
  @Field(_type => UserCreateWithoutPostCreatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostCreatedInput | undefined;

  @Field(_type => UserCreateOrConnectWithoutPostCreatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostCreatedInput | undefined;

  @Field(_type => UserUpsertWithoutPostCreatedInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostCreatedInput | undefined;

  @Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @Field(_type => UserUpdateToOneWithWhereWithoutPostCreatedInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutPostCreatedInput | undefined;
}
