import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostUpdatedInput } from "../inputs/UserCreateOrConnectWithoutPostUpdatedInput";
import { UserCreateWithoutPostUpdatedInput } from "../inputs/UserCreateWithoutPostUpdatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateNestedOneWithoutPostUpdatedInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutPostUpdatedInput {
  @Field(_type => UserCreateWithoutPostUpdatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostUpdatedInput | undefined;

  @Field(_type => UserCreateOrConnectWithoutPostUpdatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostUpdatedInput | undefined;

  @Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
