import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUpdatedByInput } from "../inputs/PostCreateWithoutUpdatedByInput";
import { PostUpdateWithoutUpdatedByInput } from "../inputs/PostUpdateWithoutUpdatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutUpdatedByInput", {})
export class PostUpsertWithWhereUniqueWithoutUpdatedByInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutUpdatedByInput, {
    nullable: false
  })
  update!: PostUpdateWithoutUpdatedByInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutUpdatedByInput, {
    nullable: false
  })
  create!: PostCreateWithoutUpdatedByInput;
}
