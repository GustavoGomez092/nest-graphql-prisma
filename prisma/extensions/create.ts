import { Request } from 'express';
import { jwtExtractor } from './utils/jwtExtractor';
import * as argon2 from 'argon2';
import { z } from 'zod';

export const createEnhancer = async (req: Request, { model, operation, args, query }) => {
  if (req.body?.operationName === 'SignUp') {
    return query(args);
  } else {
    if (!args.data.password.includes('$argon2')) {
      try {
        await verifyPassword(args.data.password);
        const hash = await argon2.hash(args.data.password);
        args.data.password = hash;
      } catch (err) {
        throw new Error(err);
      }
    }
    const user = await jwtExtractor(req);
    args.data.createdBy = { connect: { id: user.user } };
    args.data.updatedBy = { connect: { id: user.user } };
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
