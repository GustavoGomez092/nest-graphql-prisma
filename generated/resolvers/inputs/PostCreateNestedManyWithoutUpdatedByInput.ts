import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUpdatedByInputEnvelope } from "../inputs/PostCreateManyUpdatedByInputEnvelope";
import { PostCreateOrConnectWithoutUpdatedByInput } from "../inputs/PostCreateOrConnectWithoutUpdatedByInput";
import { PostCreateWithoutUpdatedByInput } from "../inputs/PostCreateWithoutUpdatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutUpdatedByInput", {})
export class PostCreateNestedManyWithoutUpdatedByInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutUpdatedByInput], {
    nullable: true
  })
  create?: PostCreateWithoutUpdatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutUpdatedByInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUpdatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyUpdatedByInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyUpdatedByInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
