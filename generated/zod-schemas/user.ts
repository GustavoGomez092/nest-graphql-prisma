import * as z from "zod"
import * as imports from "../../prisma/null"
import { Role } from "@prisma/client"
import { CompletePost, RelatedPostModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  email: z.string().email({ message: "please enter a valid email" }),
  /**
   * @TypeGraphQL.omit(output: true)
   */
  password: z.string(),
  name: z.string().nullish(),
  role: z.nativeEnum(Role),
  emailVerified: z.boolean(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  signupType: z.string(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  tokenVersion: z.number().int(),
  /**
   * @TypeGraphQL.omit(output: true)
   */
  lastSigned: z.number().int(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  lastSignedMobile: z.number().int(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  passwordRecoveryVersion: z.number().int(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  createdAt: z.date(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  updatedAt: z.date(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  deleted: z.boolean(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  createdBy?: CompleteUser | null
  updatedBy?: CompleteUser | null
  postCreated: CompletePost[]
  postUpdated: CompletePost[]
  creator?: CompleteUser | null
  updater?: CompleteUser | null
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  createdBy: RelatedUserModel.nullish(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  updatedBy: RelatedUserModel.nullish(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  postCreated: RelatedPostModel.array(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  postUpdated: RelatedPostModel.array(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  creator: RelatedUserModel.nullish(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  updater: RelatedUserModel.nullish(),
}))
