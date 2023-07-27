# foxor.io

Landing page and possible future web application for foxor.io

## Local development

Run `npm install` to install node dependencies

[Docker](https://www.docker.com/) needs to be installed to run Supabase locally.

Run `npx supabase start` to initialize the Supabase local development Docker container. This runs all Supabase services locally with seed data found in the `/supabase/seed.sql` file and migrations in the `/supabase/migrations/*` files.

The following environment variables are required to initialize the Supabase client in Next.js

| Name                            | Description                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | URL of the Supabase API gateway. In development mode this can be found by running `npx supabase status` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key for the Supabase API. In development mode this can be found by running `npx supabase status`   |

In development mode, these can be added via command line or a `.env.local` file in the root of the directory. In production, these are set in the Vercel dashboard.

Reference [Supabase Local Development](https://supabase.com/docs/guides/cli/local-development) for more info.

## Code Formatting

Formatting is handled by [Prettier](https://prettier.io/). Run `npm run beautify` to format the entire project. Formatting on paste and save are enabled by default if you are using VS Code.

## Deployment

The website is hosted by Vercel. Builds and deployments are automatically started any time a commit is merged into the `main` branch in Github.

## Username requirements

Usernames must meet the following requirements:

- At least one character
- Less than 40 characters
- Only alphanumeric/underscore characters

Usernames are case sensitive, but must be case-sensitively unique. For example, if I have a username "MrBeast", the following usernames are invalid:

- "mrbeast"
- "mrBeast"
- "MRBEAST"
