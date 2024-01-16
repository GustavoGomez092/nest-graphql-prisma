import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCreatedByInput } from "../inputs/PostCreateWithoutCreatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostCreateOrConnectWithoutCreatedByInput", {
  isAbstract: true
})
export class PostCreateOrConnectWithoutCreatedByInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: PostCreateWithoutCreatedByInput;
}
