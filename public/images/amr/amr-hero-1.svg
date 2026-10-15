import Link from 'next/link';
import { ADDRESS, FACEBOOK_URL, GOOGLE_ACCOUNT_EMAIL, SCHOOL_EMAIL, SCHOOL_LOGO_PATHS, SCHOOL_PHONE } from '../config/site';

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-sky-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">AMR Primary School</h3>
            <p className="mt-4 text-slate-600">A caring ECD and primary school where every child is nurtured to grow with confidence, joy and purpose.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">Quick links</h4>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/academics">Academics</Link></li>
              <li><Link href="/admissions">Admissions</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">Contact</h4>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>{ADDRESS}</li>
              <li>{SCHOOL_EMAIL}</li>
              <li>{SCHOOL_PHONE}</li>
              <li>{GOOGLE_ACCOUNT_EMAIL}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">Follow us</h4>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li><a href={FACEBOOK_URL}>Facebook</a></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/news">News & Events</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-sky-100 bg-sky-50 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 text-center md:px-8">
          <img src={SCHOOL_LOGO_PATHS.branding} alt="My branding logo" className="h-20 w-20 opacity-60" />
          <p className="text-sm text-slate-600">Website by Your Brand</p>
        </div>
      </div>
    </footer>
  );
}
