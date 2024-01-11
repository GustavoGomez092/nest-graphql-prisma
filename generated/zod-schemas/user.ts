import * as z from "zod"
import * as imports from "../../prisma/null"

export const UserModel = z.object({
  id: z.number().int(),
  email: z.string().email({ message: "please enter a valid email" }),
  username: z.string().nullish(),
  password: z.string(),
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
  lastLogin: z.date(),
  isSuperuser: z.boolean(),
  isStaff: z.boolean(),
  isActive: z.boolean(),
  dateJoined: z.date(),
  dateOfBirth: z.date().nullish(),
})
