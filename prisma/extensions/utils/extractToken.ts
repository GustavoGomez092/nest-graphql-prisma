import { Request } from 'express';
import { isMobile } from 'src/common/utils';

export const getTokens = (req: Request): { jwt: string, refresh: string } => {
  const credsSource = isMobile(req) ? req.headers : req.signedCookies
  const { jwt, refresh } = credsSource
  return { jwt, refresh }
}
