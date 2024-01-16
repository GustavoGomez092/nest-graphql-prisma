import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUpdated_byInputEnvelope } from "../inputs/PostCreateManyUpdated_byInputEnvelope";
import { PostCreateOrConnectWithoutUpdated_byInput } from "../inputs/PostCreateOrConnectWithoutUpdated_byInput";
import { PostCreateWithoutUpdated_byInput } from "../inputs/PostCreateWithoutUpdated_byInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutUpdated_byInput } from "../inputs/PostUpdateManyWithWhereWithoutUpdated_byInput";
import { PostUpdateWithWhereUniqueWithoutUpdated_byInput } from "../inputs/PostUpdateWithWhereUniqueWithoutUpdated_byInput";
import { PostUpsertWithWhereUniqueWithoutUpdated_byInput } from "../inputs/PostUpsertWithWhereUniqueWithoutUpdated_byInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutUpdated_byNestedInput", {})
export class PostUpdateManyWithoutUpdated_byNestedInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutUpdated_byInput], {
    nullable: true
  })
  create?: PostCreateWithoutUpdated_byInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutUpdated_byInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUpdated_byInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutUpdated_byInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutUpdated_byInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyUpdated_byInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyUpdated_byInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutUpdated_byInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutUpdated_byInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutUpdated_byInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutUpdated_byInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
