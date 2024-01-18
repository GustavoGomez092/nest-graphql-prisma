import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutUpdatedByInput } from "../inputs/PostUpdateWithoutUpdatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutUpdatedByInput", {})
export class PostUpdateWithWhereUniqueWithoutUpdatedByInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutUpdatedByInput, {
    nullable: false
  })
  data!: PostUpdateWithoutUpdatedByInput;
}
