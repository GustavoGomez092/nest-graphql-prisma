import { Request } from 'express';
import { jwtExtractor } from './utils/jwtExtractor';
import z from 'zod';
import * as argon2 from 'argon2';

export const upsertEnhancer = async (req: Request, { model, operation, args, query }) => {
  const user = await jwtExtractor(req);

  console.log(args);

  if (!args.create.password.includes('$argon2')) {
    try {
      await verifyPassword(args.create.password);
      const hash = await argon2.hash(args.create.password);
      args.create.password = hash;
    } catch (err) {
      throw new Error(err);
    }
  }

  args.create.updatedBy = { connect: { id: user.user } };
  args.create.createdBy = { connect: { id: user.user } };
  args.update.updatedById = user.user;

  console.log(args);

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
