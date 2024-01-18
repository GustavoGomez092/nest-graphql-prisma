import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  password = "password",
  name = "name",
  role = "role",
  verified = "verified",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  createdById = "createdById",
  updatedById = "updatedById",
  archived = "archived"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
