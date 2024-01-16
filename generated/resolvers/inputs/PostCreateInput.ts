import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutPostCreatedInput } from "../inputs/UserCreateNestedOneWithoutPostCreatedInput";
import { UserCreateNestedOneWithoutPostUpdatedInput } from "../inputs/UserCreateNestedOneWithoutPostUpdatedInput";

@TypeGraphQL.InputType("PostCreateInput", {})
export class PostCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  published?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostCreatedInput, {
    nullable: false
  })
  createdBy!: UserCreateNestedOneWithoutPostCreatedInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostUpdatedInput, {
    nullable: false
  })
  updated_by!: UserCreateNestedOneWithoutPostUpdatedInput;
}
