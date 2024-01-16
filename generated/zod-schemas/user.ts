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
  verified: z.boolean(),
  /**
   * @TypeGraphQL.omit(output: true)
   */
  createdAt: z.date(),
  /**
   * @TypeGraphQL.omit(output: true)
   */
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  PostCreated: CompletePost[]
  PostUpdated: CompletePost[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  /**
   * @TypeGraphQL.omit(output: true)
   */
  PostCreated: RelatedPostModel.array(),
  /**
   * @TypeGraphQL.omit(output: true)
   */
  PostUpdated: RelatedPostModel.array(),
}))
