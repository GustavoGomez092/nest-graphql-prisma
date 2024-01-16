import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCreateManyInput } from "../../../inputs/PostCreateManyInput";

@ArgsType()
export class CreateManyPostArgs {
  @Field(_type => [PostCreateManyInput], {
    nullable: false
  })
  data!: PostCreateManyInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
