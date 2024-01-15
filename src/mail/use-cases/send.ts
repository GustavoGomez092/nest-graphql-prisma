import { BadRequestException, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailHeaders } from '../dto/email_headers.input';

@Injectable()
export class SendEmail {
  constructor(private readonly mailerService: MailerService) {}

  async handle(input: EmailHeaders): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: input.to,
        subject: input.subject,
        template: input.template,
        context: input.context,
      });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
