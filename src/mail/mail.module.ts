import * as path from 'path';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { SendEmail } from './use-cases/send';
import { SMTPMailConstants } from './constants';
import { handlebarsAdapter } from './adapters/handlebars.adapter';
import { ConfigModule } from '@nestjs/config';

const { SMTPServer, SMTPPort, SMTPUser, SMTPPassword, mailFrom, nameFrom } = SMTPMailConstants;

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: SMTPServer,
          port: SMTPPort,
          secure: false,
          auth: {
            user: SMTPUser,
            pass: SMTPPassword,
          },
        },
        defaults: {
          from: {
            name: nameFrom,
            address: mailFrom,
          },
        },
        // preview: process.env.NODE_ENV !== 'production',
        template: {
          dir: path.join(__dirname, '../../../../email_templates/pages/'),
          adapter: handlebarsAdapter,
          options: {
            strict: true,
          },
        },
        options: {
          partials: {
            dir: path.join(__dirname, '../../../../email_templates/partials/'),
            options: {
              strict: true,
            },
          },
        },
      }),
    }),
  ],
  providers: [SendEmail],
  exports: [SendEmail],
})
export class MailModule {}
