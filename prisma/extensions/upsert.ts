import { Request } from 'express';
import { getTokens } from './utils/extractToken';
import z from 'zod';
import * as argon2 from 'argon2';
import { AuthService } from 'src/auth/auth.service';

export const upsertEnhancer = async (req: Request, { model, operation, args, query }, authService:AuthService) => {
  const token = getTokens(req)
  try {
    const user = await authService.getTokenInfo({ token: token.jwt });

    args.create.updatedBy = { connect: { id: user.userId } };
    args.create.createdBy = { connect: { id: user.userId } };
    args.update.updatedById = user.userId;
  } catch (error) {
    throw new Error(error);
  }

  if (!args.create.password.includes('$argon2')) {
    try {
      await verifyPassword(args.create.password);
      const hash = await argon2.hash(args.create.password);
      args.create.password = hash;
    } catch (err) {
      throw new Error(err);
    }
  }


  return query(args);
};

const verifyPassword = async (password: string) => {
  try {
    const schema = z.string().min(8).max(20);

    const validated = schema.safeParse(password);

    if (!validated.success) {
      const formattedErrors = validated.error.issues;

      const errors = formattedErrors.map((error) => {
        return error.message.includes('String') ? error.message.replace('String', 'Password') : error.message;
      });

      throw new Error(errors.toString());
    }
  } catch (err) {
    throw new Error(err);
  }
};
