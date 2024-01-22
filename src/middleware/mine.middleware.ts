import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { getPrismaFromContext } from 'generated/helpers';
import { jwtConstants } from 'src/auth/constants';
import { MiddlewareFn, NextFn } from 'type-graphql';

export const mineMiddleware = async ({ root, args, context, info }, next: NextFn): Promise<void> => {
  const prisma: PrismaClient = getPrismaFromContext(context);

  try {
    const JWT = new JwtService({ secret: jwtConstants.secret });
    const user = await JWT.verifyAsync(extractTokenFromHeader(context.req.headers));

    let result = await next();
  
    if(Array.isArray(result)) {
      const filtered = result.filter((x) => {
        return x.createdById === user.user
      });

      result = filtered;
    } else if (result.createdById !== user.user) {
      result = null;
    }

    return result;

  } catch (error) {
    console.log(error);
    return next();
  }


};

const extractTokenFromHeader = (request): string => {
  const [type, token] = request.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
};
