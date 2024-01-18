import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUpdatedByInput } from "../inputs/PostCreateManyUpdatedByInput";

@TypeGraphQL.InputType("PostCreateManyUpdatedByInputEnvelope", {})
export class PostCreateManyUpdatedByInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyUpdatedByInput], {
    nullable: false
  })
  data!: PostCreateManyUpdatedByInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
