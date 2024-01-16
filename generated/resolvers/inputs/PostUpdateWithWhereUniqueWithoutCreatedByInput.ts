import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutCreatedByInput } from "../inputs/PostUpdateWithoutCreatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutCreatedByInput", {})
export class PostUpdateWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCreatedByInput, {
    nullable: false
  })
  data!: PostUpdateWithoutCreatedByInput;
}
