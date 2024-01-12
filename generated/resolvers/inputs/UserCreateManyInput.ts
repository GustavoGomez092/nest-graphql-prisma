import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@InputType("UserCreateManyInput", {
  isAbstract: true
})
export class UserCreateManyInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => String, {
    nullable: false
  })
  email!: string;

  @Field(_type => String, {
    nullable: false
  })
  password!: string;

  @Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  verified?: boolean | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
