# AMR Primary School with ECD

This repository contains a premium school website concept built with Next.js, TypeScript, Tailwind CSS, Framer Motion and Supabase.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Project structure

- `/app` – pages and application layout
- `/components` – reusable UI pieces
- `/config` – editable config file for contact and school settings
- `/lib` – Supabase and site data helpers
- `/public/images` – placeholder image and logo files
- `/supabase.sql` – database schema

## Replace placeholder images
Add your own AMR school photos and logos to `/public/images/` and keep the same names so the site can update immediately.

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import it into Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.
