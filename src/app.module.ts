import { Module, Provider } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { CreateOneUserArgs, UserCrudResolver, crudResolvers } from '../generated';
import { setTransformArgsIntoPrismaArgs } from '../generated/helpers';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

const prisma = new PrismaClient({
    log: ['query'],
});

setTransformArgsIntoPrismaArgs((info: GraphQLResolveInfo, args: any, ctx: any) => {
    if (info.fieldName === UserCrudResolver.prototype.createOneUser.name && ctx.req.headers.email) {
        (args as CreateOneUserArgs).data.email = ctx.req.headers.email;
    }
    return args;
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
    ],
    providers: crudResolvers as unknown as Provider<any>[],
})
export class AppModule {}
