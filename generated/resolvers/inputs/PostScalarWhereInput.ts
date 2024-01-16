import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("PostScalarWhereInput", {
  isAbstract: true
})
export class PostScalarWhereInput {
  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  AND?: PostScalarWhereInput[] | undefined;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  OR?: PostScalarWhereInput[] | undefined;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  NOT?: PostScalarWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  content?: StringNullableFilter | undefined;

  @Field(_type => BoolFilter, {
    nullable: true
  })
  published?: BoolFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  createdById?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  updatedById?: StringFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
