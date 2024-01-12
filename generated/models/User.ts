import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@ObjectType("User", {
  isAbstract: true
})
export class User {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  /**
   * @zod.email({ message: \"please enter a valid email\" })
   */
  @Field(_type => String, {
    nullable: false,
    description: "@zod.email({ message: \"please enter a valid email\" })"
  })
  email!: string;

  password?: string;

  @Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @Field(_type => Boolean, {
    nullable: false
  })
  isAdmin!: boolean;

  @Field(_type => Boolean, {
    nullable: false
  })
  verified!: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}
