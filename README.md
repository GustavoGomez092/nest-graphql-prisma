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