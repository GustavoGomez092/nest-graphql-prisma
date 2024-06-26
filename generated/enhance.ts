import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Post: crudResolvers.PostCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Post: {
    aggregatePost: actionResolvers.AggregatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    createOnePost: actionResolvers.CreateOnePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    deleteOnePost: actionResolvers.DeleteOnePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    findFirstPostOrThrow: actionResolvers.FindFirstPostOrThrowResolver,
    posts: actionResolvers.FindManyPostResolver,
    post: actionResolvers.FindUniquePostResolver,
    getPost: actionResolvers.FindUniquePostOrThrowResolver,
    groupByPost: actionResolvers.GroupByPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    updateOnePost: actionResolvers.UpdateOnePostResolver,
    upsertOnePost: actionResolvers.UpsertOnePostResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Post: ["aggregatePost", "createManyPost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "findFirstPostOrThrow", "posts", "post", "getPost", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  CreateOnePostArgs: ["data"],
  DeleteManyPostArgs: ["where"],
  DeleteOnePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPostOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePostArgs: ["where"],
  FindUniquePostOrThrowArgs: ["where"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPostArgs: ["data", "where"],
  UpdateOnePostArgs: ["data", "where"],
  UpsertOnePostArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "name", "role", "emailVerified", "createdById", "updatedById"],
  Post: ["id", "title", "content", "published", "createdById", "updatedById"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePost: ["_count", "_min", "_max"],
  PostGroupBy: ["id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["postCreated", "postUpdated"],
  UserCountAggregate: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted", "_all"],
  UserAvgAggregate: ["tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion"],
  UserSumAggregate: ["tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion"],
  UserMinAggregate: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted"],
  UserMaxAggregate: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted"],
  PostCountAggregate: ["id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted", "_all"],
  PostMinAggregate: ["id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted"],
  PostMaxAggregate: ["id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted", "createdBy", "updatedBy", "postCreated", "postUpdated", "creator", "updater"],
  UserOrderByWithRelationInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted", "createdBy", "updatedBy", "postCreated", "postUpdated", "creator", "updater"],
  UserWhereUniqueInput: ["id", "email", "createdById", "updatedById", "AND", "OR", "NOT", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy", "postCreated", "postUpdated", "creator", "updater"],
  UserOrderByWithAggregationInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy"],
  PostOrderByWithRelationInput: ["id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy"],
  PostWhereUniqueInput: ["id", "AND", "OR", "NOT", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy"],
  PostOrderByWithAggregationInput: ["id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted", "_count", "_max", "_min"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted"],
  UserCreateInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy", "postCreated", "postUpdated", "creator", "updater"],
  UserUpdateInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy", "postCreated", "postUpdated", "creator", "updater"],
  UserCreateManyInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted"],
  UserUpdateManyMutationInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted"],
  PostCreateInput: ["id", "title", "content", "published", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy"],
  PostUpdateInput: ["id", "title", "content", "published", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy"],
  PostCreateManyInput: ["id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted"],
  PostUpdateManyMutationInput: ["id", "title", "content", "published", "createdAt", "updatedAt", "deleted"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  BoolFilter: ["equals", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserNullableRelationFilter: ["is", "isNot"],
  PostListRelationFilter: ["every", "some", "none"],
  SortOrderInput: ["sort", "nulls"],
  PostOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted"],
  UserAvgOrderByAggregateInput: ["tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion"],
  UserMaxOrderByAggregateInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted"],
  UserMinOrderByAggregateInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "createdById", "updatedById", "deleted"],
  UserSumOrderByAggregateInput: ["tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  PostCountOrderByAggregateInput: ["id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted"],
  PostMaxOrderByAggregateInput: ["id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted"],
  PostMinOrderByAggregateInput: ["id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted"],
  UserCreateNestedOneWithoutCreatorInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutUpdaterInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutCreatedByInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedManyWithoutUpdatedByInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedOneWithoutCreatedByInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutUpdatedByInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutCreatorNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneWithoutUpdaterNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  PostUpdateManyWithoutCreatedByNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutUpdatedByNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateOneWithoutCreatedByNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneWithoutUpdatedByNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutPostCreatedInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutPostUpdatedInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutPostCreatedNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneWithoutPostUpdatedNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserCreateWithoutCreatorInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy", "postCreated", "postUpdated", "updater"],
  UserCreateOrConnectWithoutCreatorInput: ["where", "create"],
  UserCreateWithoutUpdaterInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy", "postCreated", "postUpdated", "creator"],
  UserCreateOrConnectWithoutUpdaterInput: ["where", "create"],
  PostCreateWithoutCreatedByInput: ["id", "title", "content", "published", "createdAt", "updatedAt", "deleted", "updatedBy"],
  PostCreateOrConnectWithoutCreatedByInput: ["where", "create"],
  PostCreateManyCreatedByInputEnvelope: ["data", "skipDuplicates"],
  PostCreateWithoutUpdatedByInput: ["id", "title", "content", "published", "createdAt", "updatedAt", "deleted", "createdBy"],
  PostCreateOrConnectWithoutUpdatedByInput: ["where", "create"],
  PostCreateManyUpdatedByInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutCreatedByInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "updatedBy", "postCreated", "postUpdated", "creator", "updater"],
  UserCreateOrConnectWithoutCreatedByInput: ["where", "create"],
  UserCreateWithoutUpdatedByInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "postCreated", "postUpdated", "creator", "updater"],
  UserCreateOrConnectWithoutUpdatedByInput: ["where", "create"],
  UserUpsertWithoutCreatorInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutCreatorInput: ["where", "data"],
  UserUpdateWithoutCreatorInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy", "postCreated", "postUpdated", "updater"],
  UserUpsertWithoutUpdaterInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutUpdaterInput: ["where", "data"],
  UserUpdateWithoutUpdaterInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy", "postCreated", "postUpdated", "creator"],
  PostUpsertWithWhereUniqueWithoutCreatedByInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutCreatedByInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutCreatedByInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "content", "published", "createdById", "updatedById", "createdAt", "updatedAt", "deleted"],
  PostUpsertWithWhereUniqueWithoutUpdatedByInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutUpdatedByInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutUpdatedByInput: ["where", "data"],
  UserUpsertWithoutCreatedByInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutCreatedByInput: ["where", "data"],
  UserUpdateWithoutCreatedByInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "updatedBy", "postCreated", "postUpdated", "creator", "updater"],
  UserUpsertWithoutUpdatedByInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutUpdatedByInput: ["where", "data"],
  UserUpdateWithoutUpdatedByInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "postCreated", "postUpdated", "creator", "updater"],
  UserCreateWithoutPostCreatedInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy", "postUpdated", "creator", "updater"],
  UserCreateOrConnectWithoutPostCreatedInput: ["where", "create"],
  UserCreateWithoutPostUpdatedInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy", "postCreated", "creator", "updater"],
  UserCreateOrConnectWithoutPostUpdatedInput: ["where", "create"],
  UserUpsertWithoutPostCreatedInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutPostCreatedInput: ["where", "data"],
  UserUpdateWithoutPostCreatedInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy", "postUpdated", "creator", "updater"],
  UserUpsertWithoutPostUpdatedInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutPostUpdatedInput: ["where", "data"],
  UserUpdateWithoutPostUpdatedInput: ["id", "email", "password", "name", "role", "emailVerified", "signupType", "tokenVersion", "lastSigned", "lastSignedMobile", "passwordRecoveryVersion", "createdAt", "updatedAt", "deleted", "createdBy", "updatedBy", "postCreated", "creator", "updater"],
  PostCreateManyCreatedByInput: ["id", "title", "content", "published", "updatedById", "createdAt", "updatedAt", "deleted"],
  PostCreateManyUpdatedByInput: ["id", "title", "content", "published", "createdById", "createdAt", "updatedAt", "deleted"],
  PostUpdateWithoutCreatedByInput: ["id", "title", "content", "published", "createdAt", "updatedAt", "deleted", "updatedBy"],
  PostUpdateWithoutUpdatedByInput: ["id", "title", "content", "published", "createdAt", "updatedAt", "deleted", "createdBy"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

