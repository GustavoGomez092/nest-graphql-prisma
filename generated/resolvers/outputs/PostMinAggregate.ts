import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("PostMinAggregate", {
  isAbstract: true
})
export class PostMinAggregate {
  @Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @Field(_type => Boolean, {
    nullable: true
  })
  published!: boolean | null;

  @Field(_type => String, {
    nullable: true
  })
  createdById!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  updatedById!: string | null;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
