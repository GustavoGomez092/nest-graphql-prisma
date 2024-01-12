import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  password = "password",
  firstName = "firstName",
  lastName = "lastName",
  lastLogin = "lastLogin",
  isAdmin = "isAdmin",
  isActive = "isActive",
  dateJoined = "dateJoined"
}
registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
