import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  password = "password",
  name = "name",
  role = "role",
  emailVerified = "emailVerified",
  signupType = "signupType",
  tokenVersion = "tokenVersion",
  lastSigned = "lastSigned",
  lastSignedMobile = "lastSignedMobile",
  passwordRecoveryVersion = "passwordRecoveryVersion",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  createdById = "createdById",
  updatedById = "updatedById",
  deleted = "deleted"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
