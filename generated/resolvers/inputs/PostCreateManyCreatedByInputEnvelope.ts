import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCreatedByInput } from "../inputs/PostCreateManyCreatedByInput";

@InputType("PostCreateManyCreatedByInputEnvelope", {
  isAbstract: true
})
export class PostCreateManyCreatedByInputEnvelope {
  @Field(_type => [PostCreateManyCreatedByInput], {
    nullable: false
  })
  data!: PostCreateManyCreatedByInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
