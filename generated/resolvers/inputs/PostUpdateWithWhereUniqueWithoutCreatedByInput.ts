import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutCreatedByInput } from "../inputs/PostUpdateWithoutCreatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostUpdateWithWhereUniqueWithoutCreatedByInput", {
  isAbstract: true
})
export class PostUpdateWithWhereUniqueWithoutCreatedByInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostUpdateWithoutCreatedByInput, {
    nullable: false
  })
  data!: PostUpdateWithoutCreatedByInput;
}
