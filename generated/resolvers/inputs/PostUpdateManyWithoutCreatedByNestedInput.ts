import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCreatedByInputEnvelope } from "../inputs/PostCreateManyCreatedByInputEnvelope";
import { PostCreateOrConnectWithoutCreatedByInput } from "../inputs/PostCreateOrConnectWithoutCreatedByInput";
import { PostCreateWithoutCreatedByInput } from "../inputs/PostCreateWithoutCreatedByInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/PostUpdateManyWithWhereWithoutCreatedByInput";
import { PostUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/PostUpdateWithWhereUniqueWithoutCreatedByInput";
import { PostUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/PostUpsertWithWhereUniqueWithoutCreatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutCreatedByNestedInput", {})
export class PostUpdateManyWithoutCreatedByNestedInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: PostCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutCreatedByInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyCreatedByInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyCreatedByInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
