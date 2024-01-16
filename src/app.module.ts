import { Module, Provider } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { crudResolvers } from '../generated';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import applyResolver from './enhanced.resolvers';
import { UserResolver } from './user/user.resolver';
import { AuthResolver } from './auth/auth.resolver';
import { CreateOneUser } from './user/use-cases/create-one-user';
import { signIn } from './auth/use-cases/signin';
import { signUp } from './auth/use-cases/signup';
import { JwtService } from '@nestjs/jwt';
import { MailModule } from './mail/mail.module';
import { customAuthChecker } from './middleware/Auth.middleware';
// #import-area#

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'production' ? [] : ['query'],
  errorFormat: 'minimal',
});

applyResolver;

class NewDriver extends ApolloDriver {
  start(options: ApolloDriverConfig): Promise<void> {
    return super.start({
      ...options,
      plugins: [process.env.NODE_ENV === 'production' ? ApolloServerPluginLandingPageDisabled() : ApolloServerPluginLandingPageLocalDefault()],
    });
  }
}

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      driver: NewDriver,
      emitSchemaFile: 'schema.gql',
      context: ({ req }) => ({ ...req, prisma }),
      authChecker: customAuthChecker,
    }),
    MailModule,
  ],
  providers: [CreateOneUser, UserResolver, AuthResolver, signIn, signUp, JwtService, ...crudResolvers] as unknown as Provider<any>[],
})
export class AppModule {}
