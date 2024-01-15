import { CreateOneUser } from 'src/user/use-cases/create-one-user';
import { BadRequestException, Injectable } from '@nestjs/common';
import { z } from 'zod';
import { User } from 'generated';
import { SignupInput } from '../dto/signup.input';
import { GraphQLResolveInfo } from 'graphql';
import { Ctx } from 'src/app.types';
import * as argon2 from 'argon2';
import { SendEmail } from 'src/mail/use-cases/send';
import { WelcomeType } from '../../../email_templates/pages/welcome.type';
import * as path from 'path';

@Injectable()
export class signUp {
  constructor(
    private createOneUser: CreateOneUser,
    private sendEmail: SendEmail,
  ) {}

  async handle(ctx: Ctx, info: GraphQLResolveInfo, input: SignupInput): Promise<User> {
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
        template: path.join(__dirname, '../../../../email_templates/pages/welcome'),
        context: {
          userName: generatedUser.name,
          userEmail: generatedUser.email,
        } as WelcomeType,
      });
    } catch (error) {
      throw new BadRequestException(error);
    }

    return generatedUser;
  }
}
