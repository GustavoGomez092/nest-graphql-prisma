import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@ObjectType("Post", {
  isAbstract: true
})
export class Post {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: false
  })
  title!: string;

  @Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  @Field(_type => Boolean, {
    nullable: false
  })
  published!: boolean;

  createdBy?: User;

  createdById?: string;

  updated_by?: User;

  updatedById?: string;

  createdAt?: Date;

  updatedAt?: Date;
}
