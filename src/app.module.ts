
import { Module, Provider } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { crudResolvers } from '../generated';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
//    #import-area# 
import { UserModule } from './user/user.module';

const prisma = new PrismaClient({
    log: ['query'],
    errorFormat: 'minimal'
});

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
            playground: false,
            context: ({ req }) => ({ req, prisma }),
            plugins: [
                process.env.NODE_ENV === 'production'
                ? ApolloServerPluginLandingPageDisabled()
                : ApolloServerPluginLandingPageLocalDefault()
            ],
        }),
        AuthModule,  
        UserModule,
    ],
    providers: [...crudResolvers] as unknown as Provider<any>[],
})
export class AppModule {}
