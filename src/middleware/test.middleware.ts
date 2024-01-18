import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { getPrismaFromContext } from 'generated/helpers';
import { jwtConstants } from 'src/auth/constants';
import { MiddlewareFn, NextFn } from 'type-graphql';

export const testMiddleware = async ({ root, args, context, info }, next: NextFn): Promise<void> => {
  const prisma: PrismaClient = getPrismaFromContext(context);

  try {
    const JWT = new JwtService({ secret: jwtConstants.secret });
    const user = await JWT.verifyAsync(extractTokenFromHeader(context.req.headers));
    const { user: id } = user;
  } catch (error) {
    console.log(error);
    return next();
  }

  return next();
};

const extractTokenFromHeader = (request): string => {
  const [type, token] = request.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
};
