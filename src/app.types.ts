import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { AuthService } from "./auth/auth.service";
export interface Ctx {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  authService: AuthService;
}

