import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutPostCreatedInput } from "../inputs/UserUpdateWithoutPostCreatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@InputType("UserUpdateToOneWithWhereWithoutPostCreatedInput", {
  isAbstract: true
})
export class UserUpdateToOneWithWhereWithoutPostCreatedInput {
  @Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @Field(_type => UserUpdateWithoutPostCreatedInput, {
    nullable: false
  })
  data!: UserUpdateWithoutPostCreatedInput;
}
