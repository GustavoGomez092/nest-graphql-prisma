import * as z from "zod"
import * as imports from "../../prisma/null"
import { CompleteUser, RelatedUserModel } from "./index"

export const PostModel = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string().nullish(),
  published: z.boolean(),
  createdById: z.string(),
  updatedById: z.string(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  createdAt: z.date(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  updatedAt: z.date(),
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  archived: z.boolean(),
})

export interface CompletePost extends z.infer<typeof PostModel> {
  createdBy: CompleteUser
  updatedBy: CompleteUser
}

/**
 * RelatedPostModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPostModel: z.ZodSchema<CompletePost> = z.lazy(() => PostModel.extend({
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  createdBy: RelatedUserModel,
  /**
   * @TypeGraphQL.omit(output: true, input: true)
   */
  updatedBy: RelatedUserModel,
}))
