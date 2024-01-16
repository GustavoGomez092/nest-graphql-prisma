import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum PostScalarFieldEnum {
  id = "id",
  title = "title",
  content = "content",
  published = "published",
  createdById = "createdById",
  updatedById = "updatedById",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
