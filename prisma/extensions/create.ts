import { Request } from 'express';
import { getTokens } from './utils/extractToken';
import * as argon2 from 'argon2';
import { z } from 'zod';
import { AuthService } from 'src/auth/auth.service';

export const createEnhancer = async (req: Request, { model, operation, args, query}, authService:AuthService) => {


  if (req.body?.operationName === 'SignUp') {
    return query(args);
  } else {
    if(model === 'User') {
      if (!args?.data?.password.includes('$argon2') ) {
        try {
          await verifyPassword(args.data.password);
          const hash = await argon2.hash(args.data.password);
          args.data.password = hash;
        } catch (err) {
          throw new Error(err);
        }
      }
    }

    try {
      const token = getTokens(req)
      const user = await authService.getTokenInfo({ token: token.jwt });

      args.data.createdBy = { connect: { id: user.userId } };
      args.data.updatedBy = { connect: { id: user.userId } };
    } catch (error) {
      throw new Error(error);
    }

    return query(args);
  }
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
