import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUpdatedByInputEnvelope } from "../inputs/PostCreateManyUpdatedByInputEnvelope";
import { PostCreateOrConnectWithoutUpdatedByInput } from "../inputs/PostCreateOrConnectWithoutUpdatedByInput";
import { PostCreateWithoutUpdatedByInput } from "../inputs/PostCreateWithoutUpdatedByInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutUpdatedByInput } from "../inputs/PostUpdateManyWithWhereWithoutUpdatedByInput";
import { PostUpdateWithWhereUniqueWithoutUpdatedByInput } from "../inputs/PostUpdateWithWhereUniqueWithoutUpdatedByInput";
import { PostUpsertWithWhereUniqueWithoutUpdatedByInput } from "../inputs/PostUpsertWithWhereUniqueWithoutUpdatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutUpdatedByNestedInput", {})
export class PostUpdateManyWithoutUpdatedByNestedInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutUpdatedByInput], {
    nullable: true
  })
  create?: PostCreateWithoutUpdatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutUpdatedByInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUpdatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutUpdatedByInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutUpdatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyUpdatedByInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyUpdatedByInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutUpdatedByInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutUpdatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutUpdatedByInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutUpdatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
