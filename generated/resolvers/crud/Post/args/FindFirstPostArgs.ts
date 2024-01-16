import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostOrderByWithRelationInput } from "../../../inputs/PostOrderByWithRelationInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
import { PostScalarFieldEnum } from "../../../../enums/PostScalarFieldEnum";

@ArgsType()
export class FindFirstPostArgs {
  @Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @Field(_type => [PostOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostOrderByWithRelationInput[] | undefined;

  @Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [PostScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "content" | "published" | "createdById" | "updatedById" | "createdAt" | "updatedAt"> | undefined;
}
