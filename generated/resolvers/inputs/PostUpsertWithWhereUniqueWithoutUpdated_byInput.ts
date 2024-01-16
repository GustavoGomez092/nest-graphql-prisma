import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUpdated_byInput } from "../inputs/PostCreateWithoutUpdated_byInput";
import { PostUpdateWithoutUpdated_byInput } from "../inputs/PostUpdateWithoutUpdated_byInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostUpsertWithWhereUniqueWithoutUpdated_byInput", {
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutUpdated_byInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostUpdateWithoutUpdated_byInput, {
    nullable: false
  })
  update!: PostUpdateWithoutUpdated_byInput;

  @Field(_type => PostCreateWithoutUpdated_byInput, {
    nullable: false
  })
  create!: PostCreateWithoutUpdated_byInput;
}
