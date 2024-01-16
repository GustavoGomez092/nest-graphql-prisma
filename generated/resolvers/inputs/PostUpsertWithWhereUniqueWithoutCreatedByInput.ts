import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCreatedByInput } from "../inputs/PostCreateWithoutCreatedByInput";
import { PostUpdateWithoutCreatedByInput } from "../inputs/PostUpdateWithoutCreatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostUpsertWithWhereUniqueWithoutCreatedByInput", {
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutCreatedByInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostUpdateWithoutCreatedByInput, {
    nullable: false
  })
  update!: PostUpdateWithoutCreatedByInput;

  @Field(_type => PostCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: PostCreateWithoutCreatedByInput;
}
