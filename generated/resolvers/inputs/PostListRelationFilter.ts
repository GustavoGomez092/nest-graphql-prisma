import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostWhereInput } from "../inputs/PostWhereInput";

@InputType("PostListRelationFilter", {
  isAbstract: true
})
export class PostListRelationFilter {
  @Field(_type => PostWhereInput, {
    nullable: true
  })
  every?: PostWhereInput | undefined;

  @Field(_type => PostWhereInput, {
    nullable: true
  })
  some?: PostWhereInput | undefined;

  @Field(_type => PostWhereInput, {
    nullable: true
  })
  none?: PostWhereInput | undefined;
}
