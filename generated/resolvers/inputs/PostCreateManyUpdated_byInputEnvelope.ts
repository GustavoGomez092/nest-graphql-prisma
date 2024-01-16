import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUpdated_byInput } from "../inputs/PostCreateManyUpdated_byInput";

@TypeGraphQL.InputType("PostCreateManyUpdated_byInputEnvelope", {})
export class PostCreateManyUpdated_byInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyUpdated_byInput], {
    nullable: false
  })
  data!: PostCreateManyUpdated_byInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
