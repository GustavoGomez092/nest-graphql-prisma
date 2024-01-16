import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountPostCreatedArgs } from "./args/UserCountPostCreatedArgs";
import { UserCountPostUpdatedArgs } from "./args/UserCountPostUpdatedArgs";

@ObjectType("UserCount", {
  isAbstract: true
})
export class UserCount {
  PostCreated!: number;
  PostUpdated!: number;

  @Field(_type => Int, {
    name: "PostCreated",
    nullable: false
  })
  getPostCreated(@Root() root: UserCount, @Args() args: UserCountPostCreatedArgs): number {
    return root.PostCreated;
  }

  @Field(_type => Int, {
    name: "PostUpdated",
    nullable: false
  })
  getPostUpdated(@Root() root: UserCount, @Args() args: UserCountPostUpdatedArgs): number {
    return root.PostUpdated;
  }
}
