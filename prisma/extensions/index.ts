import { upsertEnhancer } from './upsert';
import { updateManyEnhancer } from './updateMany';
import { updateEnhancer } from './update';
import { createManyEnhancer } from './createMany';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { createEnhancer } from './create';

export const prismaEnhancer = (prisma: PrismaClient, req: Request) => {
  return prisma.$extends({
    query: {
      $allModels: {
        async create(data) {
          return createEnhancer(req, data);
        },
        async createMany(data) {
          return createManyEnhancer(req, data);
        },
        async update(data) {
          return updateEnhancer(req, data);
        },
        async updateMany(data) {
          return updateManyEnhancer(req, data);
        },
        async upsert(data) {
          return upsertEnhancer(req, data);
        },
      },
    },
  });
};
