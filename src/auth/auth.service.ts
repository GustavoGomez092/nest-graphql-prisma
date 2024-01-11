import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWTTokenInput } from './dto/token.input';
import { z } from 'zod';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) {}



  async signIn(email: string, password: string): Promise<JWTTokenInput> {

    const schema = z.object({
      email: z.string().email(),
      password: z.string(),
    }).required();
    

    const validated = schema.safeParse({ email, password });

    if (!validated.success) {
      const formattedErrors = validated.error.issues;
      throw new BadRequestException(formattedErrors);
    }

    if (password !== 'password') {
      throw new UnauthorizedException();
    }
    
    const payload = { email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
