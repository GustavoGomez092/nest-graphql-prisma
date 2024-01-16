import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUpdated_byInput } from "../inputs/PostCreateManyUpdated_byInput";

@InputType("PostCreateManyUpdated_byInputEnvelope", {
  isAbstract: true
})
export class PostCreateManyUpdated_byInputEnvelope {
  @Field(_type => [PostCreateManyUpdated_byInput], {
    nullable: false
  })
  data!: PostCreateManyUpdated_byInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
