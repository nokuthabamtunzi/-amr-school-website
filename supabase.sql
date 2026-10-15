-- Supabase schema for AMR Primary School website

create extension if not exists pgcrypto;

create table if not exists site_settings (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  value text,
  updated_at timestamptz default now()
);

create table if not exists gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'AMR',
  image_url text not null,
  is_hero boolean not null default false,
  created_at timestamptz default now()
);

create table if not exists news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  image_url text,
  category text,
  date date default current_date
);

create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  student_name text not null,
  dob date,
  grade text,
  gender text,
  previous_school text,
  parent_name text,
  phone text,
  email text,
  address text,
  document_url text,
  created_at timestamptz default now()
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  message text not null,
  created_at timestamptz default now()
);

create index if not exists gallery_category_idx on gallery(category);
create index if not exists gallery_hero_idx on gallery(is_hero);
create index if not exists news_category_idx on news(category);
create index if not exists applications_created_idx on applications(created_at);
create index if not exists messages_created_idx on messages(created_at);

-- Optional seed settings
insert into site_settings (key, value)
values
  ('SITE_NAME', 'AMR Primary School with ECD'),
  ('MOTTO', 'Growing with Grace, Learning with Joy'),
  ('SCHOOL_EMAIL', 'info@amrprimary.example'),
  ('SCHOOL_PHONE', '+263 77 000 0000'),
  ('WHATSAPP_NUMBER', '+263770000000'),
  ('ADDRESS', 'AMR Road, Harare, Zimbabwe'),
  ('GOOGLE_MAP_EMBED_URL', 'https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED'),
  ('FACEBOOK_URL', 'https://facebook.com/yourpage'),
  ('GOOGLE_ACCOUNT_EMAIL', 'google-account@example.com'),
  ('logo1', '/images/logos/logo-1.svg'),
  ('logo2', '/images/logos/logo-2.svg'),
  ('branding', '/images/logos/my-branding-logo.svg')
on conflict (key) do nothing;

-- Storage buckets
-- amr-gallery (public)
-- amr-logos (public)
