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

    // inject the user id into the createdById where clause
    args.where = {...args.where, ...{ "createdById": {"equals": user.user }}}

    return next();

  } catch (error) {
    console.log(error);
    return next();
  }


};

const extractTokenFromHeader = (request): string => {
  const [type, token] = request.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
};
