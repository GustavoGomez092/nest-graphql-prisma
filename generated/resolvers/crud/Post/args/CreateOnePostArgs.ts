import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCreateInput } from "../../../inputs/PostCreateInput";

@ArgsType()
export class CreateOnePostArgs {
  @Field(_type => PostCreateInput, {
    nullable: false
  })
  data!: PostCreateInput;
}
