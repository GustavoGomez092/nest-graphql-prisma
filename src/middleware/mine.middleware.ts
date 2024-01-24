import {  NextFn } from 'type-graphql';
import { Ctx } from 'src/app.types';
import { isMobile } from 'src/common/utils';
import { Request } from 'express'

export const mineMiddleware = async ({ root, args, context, info }:{root, args, context:Ctx, info}, next: NextFn): Promise<void> => {

  const authService = context.authService

  try {
    const token = getTokens(context.req)

    const user = await authService.getTokenInfo({ token: token.jwt });


    // inject the user id into the createdById where clause
    args.where = {...args.where, ...{ "createdById": {"equals": user.userId }}}

    return next();

  } catch (error) {
    console.log(error);
    return next();
  }


};

const getTokens = (req: Request): { jwt: string, refresh: string } => {
  const credsSource = isMobile(req) ? req.headers : req.signedCookies
  const { jwt, refresh } = credsSource
  return { jwt, refresh }
}
