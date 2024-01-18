import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutUpdatedByInput } from "../inputs/PostCreateNestedManyWithoutUpdatedByInput";
import { UserCreateNestedOneWithoutCreatedByInput } from "../inputs/UserCreateNestedOneWithoutCreatedByInput";
import { UserCreateNestedOneWithoutCreatorInput } from "../inputs/UserCreateNestedOneWithoutCreatorInput";
import { UserCreateNestedOneWithoutUpdatedByInput } from "../inputs/UserCreateNestedOneWithoutUpdatedByInput";
import { UserCreateNestedOneWithoutUpdaterInput } from "../inputs/UserCreateNestedOneWithoutUpdaterInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutPostCreatedInput", {})
export class UserCreateWithoutPostCreatedInput {
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
  verified?: boolean | undefined;
}
