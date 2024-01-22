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
import { customAuthChecker } from './middleware/Auth.middleware';
import { useCases } from './use-cases';
import { getModels } from './utils/getModels';

const originalPrisma = new PrismaClient({
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
      context: async ({ req }) => {
        const prisma = prismaEnhancer(originalPrisma, req, await getModels());
        return { ...req, prisma };
      },
      authChecker: customAuthChecker,
    }),
    MailModule,
  ],
  providers: [...useCases, ...crudResolvers] as unknown as Provider<any>[],
})
export class AppModule {}
