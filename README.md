# Typegraphql prisma nestjs boilerplate

NestJS + Prisma2 + Typegraphql Boilerplate

## Install

```bash
git clone https://github.com/GustavoGomez092/nest-graphql-prisma.git
cd nest-graphql-prisma
yarn
```

## Run in development mode

```bash
yarn start:dev
```

## Re-generate client

```bash
yarn prisma generate
```

This command also generates CRUDs for the Prisma models automatically

## Push schema to DB without a migration

```bash
yarn prisma db push
```

## Reset Database + Migrations

```bash
prisma migrate reset
```

## Use Case Generator

```bash
yarn use-case
```

Just follow the prompts of the generator.

## .env file

| key            |                                   value                                    |
| -------------- | :------------------------------------------------------------------------: |
| DATABASE_URL   |       `postgresql://postgres:password@db.provider.co:5432/postgres`        |
| JWT_SECRET     | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| JWT_EXPIRES_IN |                                     1h                                     |
| NODE_ENV       |                                development                                 |
| SMTP_SERVER    |                             smtp.provider.com                              |
| SMTP_PORT      |                                    587                                     |
| SMTP_USER      |                                  smtpuser                                  |
| SMTP_PASSWORD  |                                smtppassword                                |
| MAIL_FROM      |                              noreply@test.com                              |

## Considerations

This template uses [prisma-extension-soft-delete](https://github.com/olivierwilkinson/prisma-extension-soft-delete), a useful tool for implementing soft delete functionality in Prisma. It provides an easy way to mark records as deleted without actually removing them from the database. This can be beneficial for maintaining historical data or for allowing the possibility of data recovery.

However, there are a few considerations to keep in mind:

Database Size: Since records are not actually deleted, the database size could grow over time. This might impact performance and storage costs.

Privacy and Compliance: Depending on the nature of the data and the specific regulations your application needs to comply with, soft deleting records might not be sufficient. For example, GDPR requires certain data to be fully erased under certain conditions.

Complexity: Implementing soft deletes adds an extra layer of complexity to your application. You'll need to ensure that your application correctly handles soft deleted records in all situations.

The Prisma schema must be updated to include the soft delete field for each model in your schema.

```
model User {
  deleted   Boolean  @default(false)
  [other fields]
}
```

Remember to thoroughly test any changes to your database handling and ensure that this module fits your specific needs and use cases

## Enhanced Resolvers
The enhanced.resolvers.ts file is a part of the application that applies middleware and authorization checks to our GraphQL resolvers. It uses the ResolversEnhanceMap and applyResolversEnhanceMap from the generated Prisma client, Authorized and UseMiddleware from TypeGraphQL, and a custom mineMiddleware.

Here's a breakdown of what it does:

Define Enhancements: The resolversEnhanceMap object defines the enhancements (middleware and authorization checks) to apply to each resolver. For example, all User and Post resolvers require authorization, and all Post resolvers also use the mineMiddleware.

Role-Based Authorization: Some resolvers have role-based authorization checks. For example, only users with the ADMIN role can use the createOneUser and createManyUser resolvers.

Apply Enhancements: The applyResolversEnhanceMap function is called with the resolversEnhanceMap object to apply the defined enhancements to the resolvers.

This setup allows us to easily define and apply middleware and authorization checks to our resolvers, enhancing the security and functionality of our application.


## Middlewares

### Custom Authentication Checker
The customAuthChecker is a custom authentication function used in our application to verify the JWT token and user roles. It is written in TypeScript and uses the JwtService from NestJS and Role from Prisma.

Here's a breakdown of what it does:

Token Extraction: It first checks if the authorization header is present in the request. If not, it returns false. It then extracts the token from the authorization header using the extractTokenFromHeader function.

Token Verification: The function then verifies the extracted token using the verifyAsync method of JwtService. If the token is not verified, it returns false.

Role Verification: If roles are provided, the function verifies if the user's role matches any of the provided roles. If not, it returns false.

The extractTokenFromHeader function splits the authorization header into type and token. If the type is 'Bearer', it returns the token; otherwise, it returns undefined.

This function ensures that only authenticated users with the correct roles can access certain parts of the application, providing an additional layer of security.

### Mine Middleware
The mineMiddleware is a custom middleware function used in our application to filter data based on the user who created it. It is written in TypeScript and uses the PrismaClient from Prisma, JwtService from NestJS, and MiddlewareFn and NextFn from TypeGraphQL.

Here's a breakdown of what it does:

Initialization: The middleware function receives an object containing root, args, context, and info from the GraphQL resolver, as well as a next function. It initializes the PrismaClient and JwtService instances.

User Verification: It verifies the JWT token extracted from the request headers to authenticate the user.

Data Filtering: The middleware then calls the next function, which invokes the next middleware or resolver in the chain and returns the result. If the result is an array, it filters the array to only include items created by the authenticated user. If the result is a single object, it checks if the object was created by the authenticated user. If not, it sets the result to null.

Error Handling: If any error occurs during the process, it is caught and can be handled appropriately.

This middleware ensures that users can only access data they have created, providing an additional layer of security and data integrity.