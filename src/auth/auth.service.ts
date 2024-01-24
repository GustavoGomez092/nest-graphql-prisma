import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { GenerateTokenArgs, IPayload, LoginArgs, TokenType, ValidateTokenArgs } from './auth.types'
import { User } from 'generated'
import { TokenFactory } from './tokenStrategies/token.factory'
import { LoginFactory } from './loginStrategies/login.factory'
import { PrismaClient } from '@prisma/client/extension'
import { Ctx } from 'src/app.types'
import { GraphQLResolveInfo } from 'graphql'
import { SignupInput } from './dto/signup.input.dto'
import { z } from 'zod'
import * as argon2 from 'argon2';
import { SendEmail } from 'src/mail/use-cases/send'
import path from 'path'
import { WelcomeType } from 'email_templates/pages/welcome.type'
import { CreateOneUser } from 'src/user/use-cases/create-one-user'

@Injectable()
export class AuthService {
  constructor (
    private readonly tokenFactory: TokenFactory,
    private readonly loginFactory: LoginFactory,
    private readonly logger: Logger,
    private readonly sendEmail: SendEmail,
    private readonly createOneUser: CreateOneUser,
  ) {}

  async authenticateUser ({ authType, ...rest }: LoginArgs, prisma:PrismaClient): Promise<User> {
    const authenticator = this.loginFactory.getLoginStrategy(authType)
    const user = await authenticator.login(rest, prisma)
    return user
  }

  async getTokenInfo ({ token, tokenType = TokenType.JWT }: ValidateTokenArgs): Promise<IPayload> {
    try {
      const TokenStrategy = this.tokenFactory.getTokenAuthorizer(tokenType)
      return TokenStrategy.getTokenInfo(token)
    } catch (error) {
      this.logger.error(error.message)
      throw error
    }
  }

  validateToken ({ token, tokenType = TokenType.JWT }: ValidateTokenArgs): IPayload {
    try {
      const TokenStrategy = this.tokenFactory.getTokenAuthorizer(tokenType)
      return TokenStrategy.validateToken(token)
    } catch (error) {
      this.logger.error(error.message)
      throw error
    }
  }

  generateToken ({ user, tokenType = TokenType.JWT }: GenerateTokenArgs): string {
    try {
      const TokenStrategy = this.tokenFactory.getTokenAuthorizer(tokenType)
      return TokenStrategy.generateToken(user)
    } catch (error) {
      this.logger.error(error.message)
      throw error
    }
  }

  async signupHandle(ctx: Ctx, info: GraphQLResolveInfo, input: SignupInput): Promise<User> {
    const schema = z
      .object({
        email: z.string().email(),
        password: z
          .string()
          .min(8)
          .max(20)
          .refine((data) => data === input.confirmPassword, {
            message: 'Passwords do not match',
          }),
        confirmPassword: z.string().min(8).max(20),
        name: z.string(),
      })
      .required();

    const validated = schema.safeParse(input);

    if (!validated.success) {
      const formattedErrors = validated.error.issues;
      throw new BadRequestException(formattedErrors);
    }

    let hash: string;

    try {
      hash = await argon2.hash(input.password);
    } catch (err) {
      throw new BadRequestException(err);
    }

    input.password = hash;


    // create user
    const generatedUser = await this.createOneUser.createOneUser(ctx, info, {
      data: {
        email: input.email,
        password: input.password,
        name: input.name,
      },
    });

    // send welcome email
    try {
      await this.sendEmail.handle({
        to: generatedUser.email,
        subject: 'Welcome to the app',
        template: path.join(__dirname, '../../../email_templates/pages/welcome'),
        context: {
          userName: generatedUser.name,
          userEmail: generatedUser.email,
        } as WelcomeType,
      });
    } catch (error) {
      throw new BadRequestException(`There was an error while sending your welcome email: ${error}`);
    }

    return generatedUser;
  }
}
