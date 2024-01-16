import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("PostCreateManyCreatedByInput", {
  isAbstract: true
})
export class PostCreateManyCreatedByInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => String, {
    nullable: false
  })
  title!: string;

  @Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  published?: boolean | undefined;

  @Field(_type => String, {
    nullable: false
  })
  updatedById!: string;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}