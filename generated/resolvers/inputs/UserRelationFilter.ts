import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserWhereInput } from "../inputs/UserWhereInput";

@InputType("UserRelationFilter", {
  isAbstract: true
})
export class UserRelationFilter {
  @Field(_type => UserWhereInput, {
    nullable: true
  })
  is?: UserWhereInput | undefined;

  @Field(_type => UserWhereInput, {
    nullable: true
  })
  isNot?: UserWhereInput | undefined;
}
