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
| -------------- | :------------------------------------------------------------------------: | --- | ---------- |
| DATABASE_URL   |       `postgresql://postgres:password@db.provider.co:5432/postgres`        |
| JWT_SECRET     | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| JWT_EXPIRES_IN |                                     1h                                     |
| NODE_ENV       |                                development                                 |     | production |

## Considerations

Even though there is an auth guard on this template, this is a BYOA (bring your own auth) boilerplate. feel free to use this auth guard, modify it to your needs or scrap it all together.
