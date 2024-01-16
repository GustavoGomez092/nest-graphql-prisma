import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostCreatedInput } from "../inputs/UserCreateWithoutPostCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateOrConnectWithoutPostCreatedInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutPostCreatedInput {
  @Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(_type => UserCreateWithoutPostCreatedInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostCreatedInput;
}
