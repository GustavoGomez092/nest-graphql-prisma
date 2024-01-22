import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';

export const customAuthChecker = async ({ root, args, context, info }, roles:[]): Promise<boolean> => {

  if (!context.req.headers.authorization) return false;
  const JWT = new JwtService({ secret: process.env.JWT_SECRET });
  const token = extractTokenFromHeader(context.req.headers);
  if (!token) {
    return false;
  }

  try {
    const verified = await JWT.verifyAsync(token);

    if (!verified) return false;
  } catch {
    return false;
  }

  // no roles required if only authenticated
  if (!roles.length) return true;

  try {
    // verify role on request
    const user = await JWT.verifyAsync(token);
    const foundRole = roles.find((x)=>x === user.role);
    if (!foundRole) return false;
  } catch (error) {
    return false;
  }

  return true;
};

const extractTokenFromHeader = (request): string | undefined => {
  const [type, token] = request.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
};
