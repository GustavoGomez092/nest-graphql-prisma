import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCreatedByInputEnvelope } from "../inputs/PostCreateManyCreatedByInputEnvelope";
import { PostCreateOrConnectWithoutCreatedByInput } from "../inputs/PostCreateOrConnectWithoutCreatedByInput";
import { PostCreateWithoutCreatedByInput } from "../inputs/PostCreateWithoutCreatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutCreatedByInput", {})
export class PostCreateNestedManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: PostCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutCreatedByInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyCreatedByInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyCreatedByInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
