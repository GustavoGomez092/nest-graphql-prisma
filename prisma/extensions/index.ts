import { upsertEnhancer } from './upsert';
import { updateManyEnhancer } from './updateMany';
import { updateEnhancer } from './update';
import { createManyEnhancer } from './createMany';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { createEnhancer } from './create';
import { createSoftDeleteExtension } from 'prisma-extension-soft-delete';
import { AuthService } from 'src/auth/auth.service';


export const prismaEnhancer = (prisma: PrismaClient, req: Request, models, authService:AuthService) => {
  
  const modded = prisma.$extends(
    createSoftDeleteExtension({
      models
      }),
  )
  return modded.$extends(
    {
      query: {
        $allModels: {
          async create(data) {
            return createEnhancer(req, data, authService);
          },
          async createMany(data) {
            return createManyEnhancer(req, data, authService);
          },
          async update(data) {
            return updateEnhancer(req, data, authService);
          },
          async updateMany(data) {
            return updateManyEnhancer(req, data, authService);
          },
          async upsert(data) {
            return upsertEnhancer(req, data, authService);
          },
        },
      },
    }
    );
};
