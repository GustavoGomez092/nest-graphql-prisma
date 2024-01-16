import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountPostCreatedArgs } from "./args/UserCountPostCreatedArgs";
import { UserCountPostUpdatedArgs } from "./args/UserCountPostUpdatedArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  PostCreated!: number;
  PostUpdated!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "PostCreated",
    nullable: false
  })
  getPostCreated(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostCreatedArgs): number {
    return root.PostCreated;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "PostUpdated",
    nullable: false
  })
  getPostUpdated(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostUpdatedArgs): number {
    return root.PostUpdated;
  }
}
