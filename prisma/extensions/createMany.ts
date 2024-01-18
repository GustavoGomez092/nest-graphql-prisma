import { Request } from 'express';
import { jwtExtractor } from './utils/jwtExtractor';

export const createManyEnhancer = async (req: Request, { model, operation, args, query }) => {
  const user = await jwtExtractor(req);

  if (Array.isArray(args.data)) {
    args.data.forEach((item) => {
      item.createdById = user.user;
      item.updatedById = user.user;
    });
  } else {
    args.data.createdById = user.user;
    args.data.updatedById = user.user;
  }

  return query(args);
};
