import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("UserMinAggregate", {
  isAbstract: true
})
export class UserMinAggregate {
  @Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  firstName!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  lastName!: string | null;

  @Field(_type => Date, {
    nullable: true
  })
  lastLogin!: Date | null;

  @Field(_type => Boolean, {
    nullable: true
  })
  isAdmin!: boolean | null;

  @Field(_type => Boolean, {
    nullable: true
  })
  isActive!: boolean | null;

  @Field(_type => Date, {
    nullable: true
  })
  dateJoined!: Date | null;
}
