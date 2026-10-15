# AMR Primary School with ECD

This project is a premium, mobile-first school website for AMR Primary School with ECD in Zimbabwe. It is built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion and Supabase.

## Add your AMR photos
Place your real school images into the folder:

- `/public/images/amr/`

Suggested placeholders to replace later:
- `amr-hero-1.svg`
- `amr-hero-2.svg`
- `amr-hero-3.svg`
- `campus-1.svg`
- `class-1.svg`
- `ecd-1.svg`
- `students-1.svg`

You can later replace these with `.jpg` or `.png` files, keeping the same file names.

## Add school logos
Place your school logos in:

- `/public/images/logos/`

Suggested files:
- `logo-1.svg`
- `logo-2.svg`
- `my-branding-logo.svg`

These are referenced in `/config/site.ts` and appear in the navbar and footer.

## Edit school details in one place
Open `/config/site.ts` and update:

- `SITE_NAME`
- `MOTTO`
- `SCHOOL_EMAIL`
- `SCHOOL_PHONE`
- `WHATSAPP_NUMBER`
- `ADDRESS`
- `GOOGLE_MAP_EMBED_URL`
- `FACEBOOK_URL`
- `GOOGLE_ACCOUNT_EMAIL`
- `SCHOOL_LOGO_PATHS`

This makes it easy to update all contact and branding details across the site.

## Supabase setup
1. Create a Supabase project.
2. Run the SQL in `/supabase.sql` in the Supabase SQL editor.
3. Create public storage buckets:
   - `amr-gallery`
   - `amr-logos`
4. Add your environment variables in `.env.local` from `.env.example`.

## Local development
```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Admin login
Visit `/admin` and log in with a Supabase Auth email/password user. The admin dashboard is prepared for upload workflows for gallery photos and school logos.

## Deploy to Vercel
1. Push the repo to GitHub.
2. Import the repo into Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy.

## Notes
- This project intentionally avoids secondary school or boarding references.
- The site is designed for ECD + Primary learners and uses a premium sky-blue and white visual theme.
