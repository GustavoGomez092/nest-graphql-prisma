import * as z from "zod"
import * as imports from "../../prisma/null"

export const UserModel = z.object({
  id: z.string(),
  email: z.string().email({ message: "please enter a valid email" }),
  /**
   * @TypeGraphQL.omit(output: true)
   */
  password: z.string(),
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
  /**
   * @TypeGraphQL.omit(output: true)
   */
  lastLogin: z.date(),
  isAdmin: z.boolean(),
  isActive: z.boolean(),
  /**
   * @TypeGraphQL.omit(output: true)
   */
  dateJoined: z.date(),
})
