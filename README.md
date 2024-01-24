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

The useCaseGenerator is a script that helps in creating new use cases for any of the mutation methods available via the API. This allows for the insertion of custom logic to any of the automatically generated Mutations.

Here's a breakdown of what it does:

Introduction and Confirmation: The script starts by introducing itself and asking the user if they want to continue. If the user chooses not to continue, the script exits.

Model Selection: The script prompts the user to select a model to create a use case for. It does this by reading and parsing the Prisma schema file to get all the models.

Mutation Selection: The script then prompts the user to pick one or more mutations for which to create use cases. It only shows mutations for which a use case file does not already exist.

Confirmation and Generation: The script confirms the chosen model and mutations with the user. If the user confirms, the script generates the use case files.

File Generation: The script generates a module file, a resolver file, and use case files for each chosen mutation. It also modifies the resolver and module files to import and use the generated use cases.

Completion: Once all files have been generated, the script informs the user that they're all set.

This script is a powerful tool for rapidly scaffolding use cases for your API, saving you time and ensuring consistency in your codebase.

## .env file

| key                        |                                   value                                    |
| -------------------------- | :------------------------------------------------------------------------: |
| DATABASE_URL               |`postgres://[db-user]:[db-password]@provider:6543/[db-name]?pgbouncer=true` |
| DIRECT_URL(if using pooler)|       `postgres://[db-user]:[db-password]@provider:5432/[db-name]`         |
| COOKIE_SECRET              | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| JWT_SECRET                 | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| REFRESH_JWT_SECRET         | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| JWT_EXP                    |                                     5m                                     |
| REFRESH_JWT_EXP            |                                     30m                                    |
| MOBILE_JWT_SECRET          |                                     90d                                    |
| NODE_ENV                   |                                development                                 |
| SMTP_SERVER                |                             smtp.provider.com                              |
| SMTP_PORT                  |                                    587                                     |
| SMTP_USER                  |                                  smtpuser                                  |
| SMTP_PASSWORD              |                                smtppassword                                |
| MAIL_FROM                  |                              noreply@test.com                              |


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
The mineMiddleware is a custom middleware function used in our application to filter data based on the user who created it. 

Here's a breakdown of what it does:

Initialization: The middleware function receives an object containing root, args, context, and info from the GraphQL resolver, as well as a next function. It initializes the PrismaClient and JwtService instances.

User Verification: It verifies the JWT token extracted from the request headers to authenticate the user.

Data Filtering: The middleware then injects the user id into the createdById where clause of the arguments passed to the resolver. This ensures that the resolver only returns data created by the authenticated user.

Error Handling: If any error occurs during the process, it is caught and logged to the console, and the middleware passes control to the next middleware or resolver in the chain.

The extractTokenFromHeader function is used to extract the JWT token from the authorization header of the request. If the authorization header is not present or does not contain a Bearer token, it returns undefined.

This middleware ensures that users can only access data they have created, providing an additional layer of security and data integrity.