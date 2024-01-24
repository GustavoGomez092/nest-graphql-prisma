import { Inject, Injectable } from '@nestjs/common'
import { LoginArgs } from './dto/login.input.dto'
import { AuthService } from './auth.service'
import { CookieNames, cookieOptions, TokenType } from './auth.types'
import { isMobile } from '../common/utils'
import { Args, Ctx, Info, Mutation, Query, Resolver } from 'type-graphql'
import { User } from 'generated'
import { Ctx as Context }  from 'src/app.types'
import { GraphQLResolveInfo } from 'graphql'
import { SignupInput } from './dto/signup.input.dto'

@Resolver()
@Injectable()
export class AuthResolver {
  @Inject() authService: AuthService


  @Query(() => String, { description: 'Query used to login the user, the backend will determine if the request is mobile or desktop' })
  async login (@Args() loginArgs: LoginArgs, @Ctx() { req, res, prisma }: Context): Promise<string> {
    const user = await this.authService.authenticateUser(loginArgs, prisma)

    // Check if the requester is a mobile device not in a browser
    const mobile = isMobile(req)
    const tokenType = mobile ? TokenType.MOBILE : TokenType.REFRESH
    const iat = mobile ? 'lastSignedMobile' : 'lastSigned'

    const token = this.authService.generateToken({ user })
    const refreshToken = this.authService.generateToken({ user, tokenType })

    // Get the new Issued at date
    const newIat = this.authService.validateToken({ token: refreshToken, tokenType })
    // Save the new Iat unix timestamp in the user for refresh token validation
    await prisma.user.update({
      where: { id: newIat.userId },
      data: { [iat]: newIat.iat },
    })

    if (mobile) {
      res.setHeader(CookieNames.JWT, token)
      res.setHeader(CookieNames.REFRESH, refreshToken)
    } else {
      res.cookie(CookieNames.JWT, token, cookieOptions)
      res.cookie(CookieNames.REFRESH, refreshToken, cookieOptions)
    }

    return 'login successful'
  }

  @Mutation(() => User)
  async signUp(@Ctx() ctx: Context, @Info() info: GraphQLResolveInfo, @Args() input: SignupInput): Promise<User> {
    return this.authService.signupHandle(ctx, info, input);
  }
}