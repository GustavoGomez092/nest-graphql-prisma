import { jwtConstants } from 'src/auth/constants';
import { JwtService } from '@nestjs/jwt';

export const customAuthChecker = async ({ root, args, context, info }): Promise<boolean> => {
  if (!context.req.headers.authorization) return false;

  const token = extractTokenFromHeader(context.req.headers);
  if (!token) {
    return false;
  }

  try {
    const JWT = new JwtService({ secret: process.env.JWT_SECRET });
    const verified = await JWT.verifyAsync(token);

    if (!verified) return false;
  } catch {
    return false;
  }
  return true;
};

const extractTokenFromHeader = (request): string | undefined => {
  const [type, token] = request.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
};
