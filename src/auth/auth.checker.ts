import { Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';
import { isMobile } from 'src/common/utils';
import { AuthChecker } from 'type-graphql';
import { CookieNames, IPayload, JWTErrorTypes, TokenType, cookieOptions } from './auth.types';
import { Request } from 'express'
import { Ctx } from 'src/app.types';


export const authChecker: AuthChecker<object> = async ({ root, args, context, info }:{root, args, context:Ctx, info},roles:string[]):Promise<boolean> =>{

  // get the auth service from the context
  const authService = context.authService;

  const logger = new Logger('AuthChecker')


  const checkIfRefreshable = async ({ name, message }: Error, req: Request, prisma:PrismaClient): Promise<boolean> => {
    if (name === JWTErrorTypes.EXPIRED) {
      return await refreshTokens(req, prisma)
    } else {
      logger.error(message)
      return false
    }
  }

  const getTokens = (req: Request): { jwt: string, refresh: string } => {
    const credsSource = isMobile(req) ? req.headers : req.signedCookies
    const { jwt, refresh } = credsSource
    return { jwt, refresh }
  }

  const check = async ({ root, args, context, info }, roles:string[]): Promise<boolean> => {
    const { jwt, refresh } = getTokens(context.req)

    // Check if both headers come in the request
    if (jwt === undefined || refresh === undefined) {
      logger.error('jwt or refresh cookie missing')
      return false
    }

    let payload: IPayload

    try {
      payload = authService.validateToken({ token: jwt })
    } catch (err) {
      return await checkIfRefreshable(err, context.req, context.prisma)
    }

    // If token did not expire validate the token version
    const user = await context.prisma.user.findUnique({ where: { id: payload.userId } })

    if (user === null) {
      logger.error('User in payload is invalid')
      return false
    }

    if (user.tokenVersion !== payload.version) {
      logger.error('Failed token version validation')
      return false
    }

      // no roles required if only authenticated
  if (!roles.length) return true;

  try {
    // verify role on request
    const foundRole = roles.find((x)=>x === user.role);
    if (!foundRole) return false;
  } catch (error) {
    return false;
  }

    return true
  }

  const refreshTokens = async (req: Request, prisma:PrismaClient): Promise<boolean> => {
    const { refresh } = getTokens(req)
    const mobile = isMobile(req)

    const tokenType = mobile ? TokenType.MOBILE : TokenType.REFRESH
    const iat = mobile ? 'lastSignedMobile' : 'lastSigned'

    let refreshPayload
    // validate refresh token authenticity
    try {
      refreshPayload = authService.validateToken({ token: refresh, tokenType })
    } catch (err) {
      logger.error(`Refresh token: ${String(err.message)}`)
      return false
    }
    const user = await prisma.user.findUnique({ where: { id: refreshPayload.userId } })

    if (user === null) {
      logger.error('User in payload is invalid')
      return false
    }

    // Token version validation
    if (user.tokenVersion !== refreshPayload.version) {
      logger.error('Failed token version validation')
      return false
    }

    // Validate that this is the latest signed token
    if (refreshPayload.iat !== user[iat]) {
      logger.error('Failed IAT validation')
      // If failed IAT validation revoke access to all tokens
      await prisma.user.update({
        where: { id: refreshPayload.userId },
        data: { tokenVersion: user.tokenVersion + 1 },
      })
      return false
    }

    logger.debug('Renewing jwt and refresh token')
    // If the refresh token didn't error out then generate a new token and refresh token
    const newJwt = authService.generateToken({ user })
    const newRefresh = authService.generateToken({ user, tokenType })

    // Get the new Issued at date
    const newIat = authService.validateToken({ token: newRefresh, tokenType })
    // Save the new Iat unix timestamp in the user for refresh token validation
    await prisma.user.update({
      where: { id: newIat.userId },
      data: { [iat]: newIat.iat },
    })

    if (mobile) {
      req.res?.setHeader(CookieNames.JWT, newJwt)
      req.res?.setHeader(CookieNames.REFRESH, newRefresh)
    } else {
      req.res?.cookie(CookieNames.JWT, newJwt, cookieOptions)
      req.res?.cookie(CookieNames.REFRESH, newRefresh, cookieOptions)
    }

    return true
  }

  return check({ root, args, context, info }, roles)

}