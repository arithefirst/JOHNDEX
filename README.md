<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="static/logo/johndex_dark.svg" height="120px">
    <source media="(prefers-color-scheme: light)" srcset="static/logo/johndex.svg" height="120px">
    <img src="static/logo/johndex.svg" alt="JOHNDEX Logo" height="120px">
  </picture>
</p>

<p align="center">The greatest database of Johns in history</p>

---

## Setup Guide

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [Bun](https://bun.sh/) or npm
- PostgreSQL database (we use [Neon](https://neon.tech/))
- [Clerk](https://clerk.dev/) account for authentication

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/arithefirst/johndex.git
   cd johndex
   ```

2. Install dependencies
   ```bash
   bun install
   # OR
   npm install
   ```

### Environment Setup

1. Copy the example environment file

   ```bash
   cp .env.example .env
   ```

2. Configure your environment variables:
   - Create a database on [Neon](https://neon.tech/) and add your connection string to [`DATABASE_URL`](drizzle.config.ts)
   - Create a project on [Clerk](https://clerk.dev/) and add your API keys:
     - Add `PUBLIC_CLERK_PUBLISHABLE_KEY` from your Clerk dashboard
     - Add `CLERK_SECRET_KEY` from your Clerk dashboard

### Database Setup

Run the database migrations:

```bash
bun db:migrate

# OR

npm run db:migrate
```

For development with a UI to explore your database:

```bash
bun db:studio

# OR

npm run db:studio
```

### Development

Start the development server:

```bash
bun dev

# OR

npm run dev
```

### Production Build

Build for production:

```bash
bun build

# OR

npm run build
```

Preview the production build:

```bash
bun preview

# OR

npm run preview
```
