import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCreatedByInputEnvelope } from "../inputs/PostCreateManyCreatedByInputEnvelope";
import { PostCreateOrConnectWithoutCreatedByInput } from "../inputs/PostCreateOrConnectWithoutCreatedByInput";
import { PostCreateWithoutCreatedByInput } from "../inputs/PostCreateWithoutCreatedByInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostCreateNestedManyWithoutCreatedByInput", {
  isAbstract: true
})
export class PostCreateNestedManyWithoutCreatedByInput {
  @Field(_type => [PostCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: PostCreateWithoutCreatedByInput[] | undefined;

  @Field(_type => [PostCreateOrConnectWithoutCreatedByInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput[] | undefined;

  @Field(_type => PostCreateManyCreatedByInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyCreatedByInputEnvelope | undefined;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
