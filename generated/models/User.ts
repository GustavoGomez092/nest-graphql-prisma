import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { Role } from "../enums/Role";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  /**
   * @zod.email({ message: \"please enter a valid email\" })
   */
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: "@zod.email({ message: \"please enter a valid email\" })"
  })
  email!: string;

  password?: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  verified!: boolean;

  createdAt?: Date;

  updatedAt?: Date;

  createdBy?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdById?: string | null;

  updatedBy?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedById?: string | null;

  postCreated?: Post[];

  postUpdated?: Post[];

  deleted?: boolean;

  creator?: User | null;

  updater?: User | null;

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
