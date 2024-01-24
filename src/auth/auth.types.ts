import { PrismaClient } from '@prisma/client/extension'
import { User } from 'generated'
import * as jwt from 'jsonwebtoken'

export enum AuthStrategies {
  JWT_COOKIE = 'jwt-cookie'
}

export enum CookieNames {
  JWT = 'jwt',
  REFRESH = 'refresh'
}

export interface ICookies {
  jwt: string
  refresh: string
}

export interface Payload {
  version: number | undefined
  userId: string
}

export type IPayload = Payload & jwt.JwtPayload

export enum JWTErrorTypes {
  EXPIRED = 'TokenExpiredError',
  TOKEN_ERROR = 'JsonWebTokenError',
  NOT_ACTIVE = 'NotBeforeError'
}

export enum AuthTypes {
  EMAIL_AND_PASSWORD = 'emailAndPassword',
}

export enum TokenType {
  JWT = 'JWT_TOKEN',
  REFRESH = 'REFRESH_TOKEN',
  MOBILE = 'MOBILE_TOKEN',
  EMAIL = 'EMAIL_TOKEN'
}

export interface Credentials {
  email: string
  password: string
  token: string
}

export type LoginArgs = {
  authType: AuthTypes
} & Credentials
export interface ILogin {
  login: (args: Credentials, prisma:PrismaClient) => Promise<User>
}

export interface ValidateTokenArgs {
  token: string
  tokenType?: TokenType
}

export interface GenerateTokenArgs {
  user: User
  tokenType?: TokenType
}

export interface IToken {
  validateToken: (token: string) => IPayload
  generateToken: (user: User) => string
  getTokenInfo: (token: string) => IPayload
}

export const cookieOptions = { httpOnly: true, signed: true, secure: process.env.NODE_ENV === 'production' }
