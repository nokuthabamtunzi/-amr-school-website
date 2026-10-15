import Link from 'next/link';
import { Menu, MessageCircleMore } from 'lucide-react';
import { SCHOOL_LOGO_PATHS, WHATSAPP_NUMBER } from '../config/site';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Campus Life', href: '/campus' },
  { label: 'News & Events', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <img src={SCHOOL_LOGO_PATHS.logo1} alt="School logo 1" className="h-12 w-12 rounded-lg object-contain ring-1 ring-sky-100" />
          <img src={SCHOOL_LOGO_PATHS.logo2} alt="School logo 2" className="h-12 w-12 rounded-lg object-contain ring-1 ring-sky-100" />
          <Link href="/" className="leading-tight">
            <span className="block text-lg font-black text-slate-900">AMR Primary</span>
            <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">ECD & Primary</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-sky-600">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/admissions" className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200 transition hover:bg-sky-600">Apply Now</Link>
        </div>

        <button className="inline-flex rounded-full bg-sky-100 p-2 text-sky-700 lg:hidden" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>

      <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\s+/g, '')}`} className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 p-3 text-white shadow-xl shadow-emerald-200">
        <MessageCircleMore size={18} />
      </a>
    </header>
  );
}
