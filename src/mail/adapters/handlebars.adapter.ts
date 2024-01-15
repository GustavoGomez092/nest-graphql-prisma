import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export const handlebarsAdapter = new HandlebarsAdapter(/* helpers */ undefined, {
  inlineCssEnabled: true,
  /** See https://www.npmjs.com/package/inline-css#api */
  inlineCssOptions: {
    inline_style_tags: true,
  },
});
