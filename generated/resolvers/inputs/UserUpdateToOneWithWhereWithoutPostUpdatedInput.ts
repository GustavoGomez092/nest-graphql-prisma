import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutPostUpdatedInput } from "../inputs/UserUpdateWithoutPostUpdatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@InputType("UserUpdateToOneWithWhereWithoutPostUpdatedInput", {
  isAbstract: true
})
export class UserUpdateToOneWithWhereWithoutPostUpdatedInput {
  @Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @Field(_type => UserUpdateWithoutPostUpdatedInput, {
    nullable: false
  })
  data!: UserUpdateWithoutPostUpdatedInput;
}
