Prisma + Simple Auth Setup

Summary
- Schema: `prisma/schema.prisma` (SQLite) with a `User` model.
- API routes (app router):
  - `POST /api/auth/register` - create user, set JWT cookie
  - `POST /api/auth/login` - authenticate, set JWT cookie
  - `GET /api/auth/me` - return current user from JWT cookie

Environment
- Add to `.env` at project root:

  DATABASE_URL="file:./dev.db"
  JWT_SECRET="your_long_random_secret_here"

Commands to run locally

1. Install dependencies

```bash
npm install
```

2. Initialize Prisma and create the SQLite file/migrate

```bash
npx prisma migrate dev --name init
```

3. Start the dev server

```bash
npm run dev
```

Notes
- If you prefer Postgres, change `prisma/schema.prisma` datasource provider and `DATABASE_URL` accordingly.
- `JWT_SECRET` must be set in production and be a secure random string.
