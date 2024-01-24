import { upsertEnhancer } from './upsert';
import { updateManyEnhancer } from './updateMany';
import { updateEnhancer } from './update';
import { createManyEnhancer } from './createMany';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { createEnhancer } from './create';
import { createSoftDeleteExtension } from 'prisma-extension-soft-delete';


export const prismaEnhancer = (prisma: PrismaClient, req: Request, models) => {
  
  const modded = prisma.$extends(
    createSoftDeleteExtension({
      models
      }),
  )
  return modded.$extends(
    {
      query: {
        $allModels: {
          // async create(data) {
          //   return createEnhancer(req, data);
          // },
          // async createMany(data) {
          //   return createManyEnhancer(req, data);
          // },
          // async update(data) {
          //   return updateEnhancer(req, data);
          // },
          // async updateMany(data) {
          //   return updateManyEnhancer(req, data);
          // },
          // async upsert(data) {
          //   return upsertEnhancer(req, data);
          // },
        },
      },
    }
    );
};
