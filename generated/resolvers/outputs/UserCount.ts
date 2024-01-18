import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountPostCreatedArgs } from "./args/UserCountPostCreatedArgs";
import { UserCountPostUpdatedArgs } from "./args/UserCountPostUpdatedArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  postCreated!: number;
  postUpdated!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "postCreated",
    nullable: false
  })
  getPostCreated(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostCreatedArgs): number {
    return root.postCreated;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "postUpdated",
    nullable: false
  })
  getPostUpdated(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostUpdatedArgs): number {
    return root.postUpdated;
  }
}
