import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutUpdated_byInput } from "../inputs/PostUpdateWithoutUpdated_byInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostUpdateWithWhereUniqueWithoutUpdated_byInput", {
  isAbstract: true
})
export class PostUpdateWithWhereUniqueWithoutUpdated_byInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostUpdateWithoutUpdated_byInput, {
    nullable: false
  })
  data!: PostUpdateWithoutUpdated_byInput;
}
