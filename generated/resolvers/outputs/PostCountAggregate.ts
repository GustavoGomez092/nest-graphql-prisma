import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("PostCountAggregate", {
  isAbstract: true
})
export class PostCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  title!: number;

  @Field(_type => Int, {
    nullable: false
  })
  content!: number;

  @Field(_type => Int, {
    nullable: false
  })
  published!: number;

  @Field(_type => Int, {
    nullable: false
  })
  createdById!: number;

  @Field(_type => Int, {
    nullable: false
  })
  updatedById!: number;

  @Field(_type => Int, {
    nullable: false
  })
  createdAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  updatedAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
