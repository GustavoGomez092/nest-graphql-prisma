import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUpdated_byInputEnvelope } from "../inputs/PostCreateManyUpdated_byInputEnvelope";
import { PostCreateOrConnectWithoutUpdated_byInput } from "../inputs/PostCreateOrConnectWithoutUpdated_byInput";
import { PostCreateWithoutUpdated_byInput } from "../inputs/PostCreateWithoutUpdated_byInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutUpdated_byInput", {})
export class PostCreateNestedManyWithoutUpdated_byInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutUpdated_byInput], {
    nullable: true
  })
  create?: PostCreateWithoutUpdated_byInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutUpdated_byInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUpdated_byInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyUpdated_byInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyUpdated_byInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
