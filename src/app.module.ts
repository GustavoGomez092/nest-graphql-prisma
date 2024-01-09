
import { Module, Provider } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { crudResolvers } from '../generated';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


const prisma = new PrismaClient({
    log: ['query'],
});


@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
            playground: false,
            context: ({ req }) => ({ req, prisma }),
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
        }),
        UserModule,
        AuthModule,
    ],
    providers: [...crudResolvers] as unknown as Provider<any>[],
})
export class AppModule {}
