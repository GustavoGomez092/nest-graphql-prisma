import { Request } from 'express';
import { getTokens } from './utils/extractToken';
import { AuthService } from 'src/auth/auth.service';

export const updateEnhancer = async (req: Request, { model, operation, args, query },authService:AuthService) => {

  if (args.where.id) return query(args);

  try {
    const token = getTokens(req)
    const user = await authService.getTokenInfo({ token: token.jwt });
    args.data.updatedBy = { connect: { id: user.userId } };
  } catch (error) {
    throw new Error(error);
  }
  return query(args);
};
