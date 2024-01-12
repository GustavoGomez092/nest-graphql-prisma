import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";

@ObjectType("UserGroupBy", {
  isAbstract: true
})
export class UserGroupBy {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

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
  name!: string | null;

  @Field(_type => Boolean, {
    nullable: false
  })
  isAdmin!: boolean;

  @Field(_type => Boolean, {
    nullable: false
  })
  verified!: boolean;

  @Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(_type => UserCountAggregate, {
    nullable: true
  })
  _count!: UserCountAggregate | null;

  @Field(_type => UserMinAggregate, {
    nullable: true
  })
  _min!: UserMinAggregate | null;

  @Field(_type => UserMaxAggregate, {
    nullable: true
  })
  _max!: UserMaxAggregate | null;
}
