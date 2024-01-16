import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
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

@InputType("PostUpdateManyWithoutCreatedByNestedInput", {
  isAbstract: true
})
export class PostUpdateManyWithoutCreatedByNestedInput {
  @Field(_type => [PostCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: PostCreateWithoutCreatedByInput[] | undefined;

  @Field(_type => [PostCreateOrConnectWithoutCreatedByInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput[] | undefined;

  @Field(_type => [PostUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @Field(_type => PostCreateManyCreatedByInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyCreatedByInputEnvelope | undefined;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @Field(_type => [PostUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @Field(_type => [PostUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput[] | undefined;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
