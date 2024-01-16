import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCreatedByInput } from "../inputs/PostCreateManyCreatedByInput";

@TypeGraphQL.InputType("PostCreateManyCreatedByInputEnvelope", {})
export class PostCreateManyCreatedByInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyCreatedByInput], {
    nullable: false
  })
  data!: PostCreateManyCreatedByInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
