import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUpdated_byInput } from "../inputs/PostCreateWithoutUpdated_byInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutUpdated_byInput", {})
export class PostCreateOrConnectWithoutUpdated_byInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutUpdated_byInput, {
    nullable: false
  })
  create!: PostCreateWithoutUpdated_byInput;
}
