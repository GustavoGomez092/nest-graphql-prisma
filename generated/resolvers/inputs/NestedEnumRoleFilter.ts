import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@InputType("NestedEnumRoleFilter", {
  isAbstract: true
})
export class NestedEnumRoleFilter {
  @Field(_type => Role, {
    nullable: true
  })
  equals?: "USER" | "ADMIN" | undefined;

  @Field(_type => [Role], {
    nullable: true
  })
  in?: Array<"USER" | "ADMIN"> | undefined;

  @Field(_type => [Role], {
    nullable: true
  })
  notIn?: Array<"USER" | "ADMIN"> | undefined;

  @Field(_type => NestedEnumRoleFilter, {
    nullable: true
  })
  not?: NestedEnumRoleFilter | undefined;
}
