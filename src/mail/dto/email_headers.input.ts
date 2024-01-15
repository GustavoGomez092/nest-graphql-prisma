import { ISendMailOptions } from '@nestjs-modules/mailer';
import { Field, ObjectType } from '@nestjs/graphql';
import { WelcomeType } from '../../../email_templates/pages/welcome.type';

@ObjectType()
export class EmailHeaders {
  @Field()
  to: ISendMailOptions['to'];
  @Field()
  from?: ISendMailOptions['from'];
  @Field()
  subject: ISendMailOptions['subject'];
  @Field()
  template: ISendMailOptions['template'];
  @Field()
  context: ISendMailOptions['context'] | WelcomeType;
}
