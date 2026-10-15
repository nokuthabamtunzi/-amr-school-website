import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, GraduationCap, Sparkles, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-slate-600">{description}</p> : null}
    </div>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600">
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600">
      {children}
    </Link>
  );
}

export const features = [
  { icon: GraduationCap, title: 'Qualified Teachers', text: 'Dedicated professionals who inspire confidence, curiosity and academic growth.' },
  { icon: Heart, title: 'Safe & Caring', text: 'A warm school culture built on respect, care and supportive relationships.' },
  { icon: Sparkles, title: 'Modern Learning', text: 'Creative teaching methods, active learning and purposeful classroom experiences.' },
  { icon: BookOpen, title: 'Arts & Sports', text: 'Balanced development through movement, music, performance and creative expression.' },
  { icon: CheckCircle2, title: 'Values-Based', text: 'Christian principles and character education guide how we learn and serve.' },
  { icon: CheckCircle2, title: 'Day School', text: 'Focused learning in a nurturing day-school environment with no boarding.' },
];
