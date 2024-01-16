import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostCreatedInput } from "../inputs/UserCreateWithoutPostCreatedInput";
import { UserUpdateWithoutPostCreatedInput } from "../inputs/UserUpdateWithoutPostCreatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@InputType("UserUpsertWithoutPostCreatedInput", {
  isAbstract: true
})
export class UserUpsertWithoutPostCreatedInput {
  @Field(_type => UserUpdateWithoutPostCreatedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostCreatedInput;

  @Field(_type => UserCreateWithoutPostCreatedInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostCreatedInput;

  @Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
