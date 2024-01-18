import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutUpdatedByNestedInput } from "../inputs/PostUpdateManyWithoutUpdatedByNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutCreatedByNestedInput } from "../inputs/UserUpdateOneWithoutCreatedByNestedInput";
import { UserUpdateOneWithoutCreatorNestedInput } from "../inputs/UserUpdateOneWithoutCreatorNestedInput";
import { UserUpdateOneWithoutUpdatedByNestedInput } from "../inputs/UserUpdateOneWithoutUpdatedByNestedInput";
import { UserUpdateOneWithoutUpdaterNestedInput } from "../inputs/UserUpdateOneWithoutUpdaterNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutPostCreatedInput", {})
export class UserUpdateWithoutPostCreatedInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  verified?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  archived?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutCreatorNestedInput, {
    nullable: true
  })
  createdBy?: UserUpdateOneWithoutCreatorNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutUpdaterNestedInput, {
    nullable: true
  })
  updatedBy?: UserUpdateOneWithoutUpdaterNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutUpdatedByNestedInput, {
    nullable: true
  })
  postUpdated?: PostUpdateManyWithoutUpdatedByNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutCreatedByNestedInput, {
    nullable: true
  })
  creator?: UserUpdateOneWithoutCreatedByNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutUpdatedByNestedInput, {
    nullable: true
  })
  updater?: UserUpdateOneWithoutUpdatedByNestedInput | undefined;
}
