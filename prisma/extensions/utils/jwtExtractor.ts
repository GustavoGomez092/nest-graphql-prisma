import { UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../../../src/auth/constants';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

export const jwtExtractor = async (req: Request) => {
  const extractTokenFromHeader = (request): string => {
    const [type, token] = request.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  };

  try {
    const JWT = new JwtService({ secret: process.env.JWT_SECRET });
    const user = await JWT.verifyAsync(extractTokenFromHeader(req.headers));
    return user;
  } catch (error) {
    console.log(error);
    throw new UnauthorizedException('Access denied');
  }
};
