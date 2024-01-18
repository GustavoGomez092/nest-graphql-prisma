import { Request } from 'express';
import { jwtExtractor } from './utils/jwtExtractor';

export const updateManyEnhancer = async (req: Request, { model, operation, args, query }) => {
  const user = await jwtExtractor(req);

  if (Array.isArray(args.data)) {
    args.data.forEach((item) => {
      item.updatedById = user.user;
    });
  } else {
    args.data.updatedById = user.user;
  }

  return query(args);
};
