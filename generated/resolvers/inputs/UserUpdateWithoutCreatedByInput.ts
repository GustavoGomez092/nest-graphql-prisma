import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutCreatedByNestedInput } from "../inputs/PostUpdateManyWithoutCreatedByNestedInput";
import { PostUpdateManyWithoutUpdatedByNestedInput } from "../inputs/PostUpdateManyWithoutUpdatedByNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutCreatedByNestedInput } from "../inputs/UserUpdateOneWithoutCreatedByNestedInput";
import { UserUpdateOneWithoutUpdatedByNestedInput } from "../inputs/UserUpdateOneWithoutUpdatedByNestedInput";
import { UserUpdateOneWithoutUpdaterNestedInput } from "../inputs/UserUpdateOneWithoutUpdaterNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutCreatedByInput", {})
export class UserUpdateWithoutCreatedByInput {
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
  emailVerified?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  signupType?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  tokenVersion?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  lastSigned?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  lastSignedMobile?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  passwordRecoveryVersion?: IntFieldUpdateOperationsInput | undefined;

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
  deleted?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutUpdaterNestedInput, {
    nullable: true
  })
  updatedBy?: UserUpdateOneWithoutUpdaterNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutCreatedByNestedInput, {
    nullable: true
  })
  postCreated?: PostUpdateManyWithoutCreatedByNestedInput | undefined;

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
