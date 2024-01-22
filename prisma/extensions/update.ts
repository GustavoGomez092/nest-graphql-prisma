import { Request } from 'express';
import { jwtExtractor } from './utils/jwtExtractor';

export const updateEnhancer = async (req: Request, { model, operation, args, query }) => {
  const user = await jwtExtractor(req);
  args.data.updatedBy = { connect: { id: user.user } };
  return query(args);
};
