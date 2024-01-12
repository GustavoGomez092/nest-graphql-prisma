import * as z from "zod"
import * as imports from "../../prisma/null"

export const UserModel = z.object({
  id: z.string(),
  email: z.string().email({ message: "please enter a valid email" }),
  /**
   * @TypeGraphQL.omit(output: true)
   */
  password: z.string(),
  name: z.string().nullish(),
  isAdmin: z.boolean(),
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
