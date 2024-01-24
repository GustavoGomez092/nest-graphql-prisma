import { Request } from 'express';
import { getTokens } from './utils/extractToken';
import { AuthService } from 'src/auth/auth.service';

export const updateManyEnhancer = async (req: Request, { model, operation, args, query }, authService:AuthService) => {
  const token = getTokens(req)

  try {
    
  const user = await authService.getTokenInfo({ token: token.jwt });

  if (Array.isArray(args.data)) {
    args.data.forEach((item) => {
      item.updatedById = user.userId;
    });
  } else {
    args.data.updatedById = user.userId;
  }
  } catch (error) {
    
  }


  return query(args);
};
