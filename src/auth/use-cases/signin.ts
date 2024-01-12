import { SignInInput } from './../dto/signin.input';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JWTTokenInput } from '../dto/token.input';
import { z } from 'zod';
import { JwtService } from '@nestjs/jwt';
import { GraphQLResolveInfo } from 'graphql';
import { Ctx } from 'src/app.types';
import * as argon2 from 'argon2';

@Injectable()
export class signIn {
  constructor(private jwtService: JwtService) {}

  async handle({ prisma }: Ctx, info: GraphQLResolveInfo, input: SignInInput): Promise<JWTTokenInput> {
    try {
      this.validate(input);

      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email: input.email,
        },
      });

      const verified = await argon2.verify(user.password, input.password);

      if (!verified) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const payload = { user: user.id, email: user.email, name: user.name };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      console.log(error.code);
      if (error.code === 'P2025') {
        throw new UnauthorizedException('Invalid credentials');
      }
      throw error;
    }
  }

  private validate(input: SignInInput): void {
    const schema = z
      .object({
        email: z.string().email(),
        password: z.string(),
      })
      .required();

    const validated = schema.safeParse(input);

    if (!validated.success) {
      const formattedErrors = validated.error.issues;
      throw new BadRequestException(formattedErrors);
    }
  }
}
