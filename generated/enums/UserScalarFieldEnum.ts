import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  password = "password",
  name = "name",
  role = "role",
  verified = "verified",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
