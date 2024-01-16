import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUpdated_byInput } from "../inputs/PostCreateWithoutUpdated_byInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostCreateOrConnectWithoutUpdated_byInput", {
  isAbstract: true
})
export class PostCreateOrConnectWithoutUpdated_byInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostCreateWithoutUpdated_byInput, {
    nullable: false
  })
  create!: PostCreateWithoutUpdated_byInput;
}
