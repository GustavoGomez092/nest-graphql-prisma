import { PrismaClient } from "@prisma/client";

export interface Ctx {
  prisma: PrismaClient;
  req: Request;
}