import { prismaEnhancer } from './../prisma/extensions/index';
import { Module, Provider } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { crudResolvers } from '../generated';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import applyResolver from './enhanced.resolvers';
import { MailModule } from './mail/mail.module';
import { useCases } from './use-cases';
import { getModels } from './common/getModels';
import { authChecker } from './auth/auth.checker';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

const originalPrisma = new PrismaClient({
  // log: process.env.NODE_ENV === 'production' ? [] : ['query'],
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
    TypeGraphQLModule.forRootAsync({
      driver: NewDriver,
      imports: [AuthModule],
      inject: [AuthService],
      useFactory: async (authService:AuthService) => ({
        emitSchemaFile: 'schema.gql',
        context: async ({ req, res }) => {
          const prisma = prismaEnhancer(originalPrisma, req, await getModels());
          return { req, res, prisma, authService};
        },
        authChecker,
      }),
    }),
    MailModule,
  ],
  providers: [...useCases, ...crudResolvers] as unknown as Provider<any>[],
})
export class AppModule {}
