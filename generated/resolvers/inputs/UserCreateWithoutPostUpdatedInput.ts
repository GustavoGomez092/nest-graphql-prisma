import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutCreatedByInput } from "../inputs/PostCreateNestedManyWithoutCreatedByInput";
import { UserCreateNestedOneWithoutCreatedByInput } from "../inputs/UserCreateNestedOneWithoutCreatedByInput";
import { UserCreateNestedOneWithoutCreatorInput } from "../inputs/UserCreateNestedOneWithoutCreatorInput";
import { UserCreateNestedOneWithoutUpdatedByInput } from "../inputs/UserCreateNestedOneWithoutUpdatedByInput";
import { UserCreateNestedOneWithoutUpdaterInput } from "../inputs/UserCreateNestedOneWithoutUpdaterInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutPostUpdatedInput", {})
export class UserCreateWithoutPostUpdatedInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  emailVerified?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lastSigned?: number | undefined;
}
