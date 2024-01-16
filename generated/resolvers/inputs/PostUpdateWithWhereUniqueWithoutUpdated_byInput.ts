import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutUpdated_byInput } from "../inputs/PostUpdateWithoutUpdated_byInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutUpdated_byInput", {})
export class PostUpdateWithWhereUniqueWithoutUpdated_byInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutUpdated_byInput, {
    nullable: false
  })
  data!: PostUpdateWithoutUpdated_byInput;
}
