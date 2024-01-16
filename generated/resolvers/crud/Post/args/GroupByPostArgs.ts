import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostOrderByWithAggregationInput } from "../../../inputs/PostOrderByWithAggregationInput";
import { PostScalarWhereWithAggregatesInput } from "../../../inputs/PostScalarWhereWithAggregatesInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostScalarFieldEnum } from "../../../../enums/PostScalarFieldEnum";

@ArgsType()
export class GroupByPostArgs {
  @Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @Field(_type => [PostOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostOrderByWithAggregationInput[] | undefined;

  @Field(_type => [PostScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "content" | "published" | "createdById" | "updatedById" | "createdAt" | "updatedAt">;

  @Field(_type => PostScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
