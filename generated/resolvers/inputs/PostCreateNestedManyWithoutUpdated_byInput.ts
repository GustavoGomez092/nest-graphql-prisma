import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUpdated_byInputEnvelope } from "../inputs/PostCreateManyUpdated_byInputEnvelope";
import { PostCreateOrConnectWithoutUpdated_byInput } from "../inputs/PostCreateOrConnectWithoutUpdated_byInput";
import { PostCreateWithoutUpdated_byInput } from "../inputs/PostCreateWithoutUpdated_byInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostCreateNestedManyWithoutUpdated_byInput", {
  isAbstract: true
})
export class PostCreateNestedManyWithoutUpdated_byInput {
  @Field(_type => [PostCreateWithoutUpdated_byInput], {
    nullable: true
  })
  create?: PostCreateWithoutUpdated_byInput[] | undefined;

  @Field(_type => [PostCreateOrConnectWithoutUpdated_byInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUpdated_byInput[] | undefined;

  @Field(_type => PostCreateManyUpdated_byInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyUpdated_byInputEnvelope | undefined;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
