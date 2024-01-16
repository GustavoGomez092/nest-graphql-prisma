import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCreatedByInput } from "../inputs/PostCreateWithoutCreatedByInput";
import { PostUpdateWithoutCreatedByInput } from "../inputs/PostUpdateWithoutCreatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutCreatedByInput", {})
export class PostUpsertWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCreatedByInput, {
    nullable: false
  })
  update!: PostUpdateWithoutCreatedByInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: PostCreateWithoutCreatedByInput;
}
