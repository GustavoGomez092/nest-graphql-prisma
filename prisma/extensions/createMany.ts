import { Request } from 'express';
import { getTokens } from './utils/extractToken';
import { AuthService } from 'src/auth/auth.service';

export const createManyEnhancer = async (req: Request, { model, operation, args, query }, authService:AuthService) => {


  try {
    const token = getTokens(req)
    const user = await authService.getTokenInfo({ token: token.jwt });

    if (Array.isArray(args.data)) {
      args.data.forEach((item) => {
        item.createdById = user.userId;
        item.updatedById = user.userId;
      });
    } else {
      args.data.createdById = user.userId;
      args.data.updatedById = user.userId;
    }

  } catch (error) {
    throw new Error(error);
  }



  return query(args);
};
