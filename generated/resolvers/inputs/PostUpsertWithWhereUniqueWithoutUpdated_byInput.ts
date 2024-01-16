import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUpdated_byInput } from "../inputs/PostCreateWithoutUpdated_byInput";
import { PostUpdateWithoutUpdated_byInput } from "../inputs/PostUpdateWithoutUpdated_byInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutUpdated_byInput", {})
export class PostUpsertWithWhereUniqueWithoutUpdated_byInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutUpdated_byInput, {
    nullable: false
  })
  update!: PostUpdateWithoutUpdated_byInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutUpdated_byInput, {
    nullable: false
  })
  create!: PostCreateWithoutUpdated_byInput;
}
