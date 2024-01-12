import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN"
}
registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
