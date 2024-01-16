import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostUpdatedInput } from "../inputs/UserCreateWithoutPostUpdatedInput";
import { UserUpdateWithoutPostUpdatedInput } from "../inputs/UserUpdateWithoutPostUpdatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@InputType("UserUpsertWithoutPostUpdatedInput", {
  isAbstract: true
})
export class UserUpsertWithoutPostUpdatedInput {
  @Field(_type => UserUpdateWithoutPostUpdatedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostUpdatedInput;

  @Field(_type => UserCreateWithoutPostUpdatedInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostUpdatedInput;

  @Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
