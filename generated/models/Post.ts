import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Post", {})
export class Post {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  published!: boolean;

  createdBy?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdById!: string;

  updatedBy?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  updatedById!: string;

  createdAt?: Date;

  updatedAt?: Date;

  deleted?: boolean;
}
