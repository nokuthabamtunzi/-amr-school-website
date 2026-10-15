import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap, Heart, Sparkles } from 'lucide-react';

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-6">
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
  { icon: Heart, title: 'Safe & Caring', text: 'Warm relationships, pastoral care and a protective environment for every child.' },
  { icon: Sparkles, title: 'Modern Learning', text: 'Creative teaching, active learning and engaging classroom experiences.' },
  { icon: BookOpen, title: 'Arts & Sports', text: 'Balanced development through music, movement, performance and play.' },
  { icon: CheckCircle2, title: 'Values-Based', text: 'Christian principles and character education guide how we learn and serve.' },
  { icon: CheckCircle2, title: 'Day School Focus', text: 'A child-centred day-school model with no boarding and strong family connection.' },
];

export const siteData = {
  heroSlides: [
    { title: 'AMR Primary School with ECD', subtitle: 'A Great Place to Grow & Learn', image: '/images/amr/amr-hero-1.svg' },
    { title: 'Where confident learners begin', subtitle: 'Nurturing curiosity, character and academic excellence', image: '/images/amr/amr-hero-2.svg' },
    { title: 'Joyful learning every day', subtitle: 'A strong community of learners, teachers and families', image: '/images/amr/amr-hero-3.svg' },
  ],
  stats: [
    { label: 'Learners', value: '300+' },
    { label: 'Established', value: 'Since 2017' },
    { label: 'Pass Rate', value: '93%' },
    { label: 'School Type', value: 'ECD + Primary' },
  ],
  academics: [
    { title: 'ECD', text: 'Toddler, A & B: purposeful play-based learning, phonics, numeracy, social development and readiness for school.' },
    { title: 'Infant', text: 'Grades 1-2: strong foundations in literacy, numeracy, science, guided reading and active learning.' },
    { title: 'Junior', text: 'Grades 3-7: a well-rounded curriculum that develops critical thinking and academic confidence.' },
  ],
  values: [
    { title: 'Mission', text: 'To provide a nurturing Christian environment where every child flourishes academically, socially and spiritually.' },
    { title: 'Vision', text: 'To prepare well-rounded, confident learners who are ready to serve their communities with excellence.' },
    { title: 'Values', text: 'Respect, integrity, discipline, compassion, responsibility and a love for learning.' },
  ],
  testimonials: [
    { quote: 'AMR has given our child the confidence to learn, play and grow in a safe and caring environment.', author: 'Parent of Grade 3 learner' },
    { quote: 'The teachers are warm, professional and truly invested in every child. We see growth every term.', author: 'Parent of ECD learner' },
    { quote: 'The school balances excellent academics with character-building values and a joy-filled culture.', author: 'Parent of Grade 6 learner' },
  ],
  gallery: [
    { title: 'Campus', category: 'Campus', image: '/images/amr/campus-1.svg' },
    { title: 'Classroom', category: 'Classes', image: '/images/amr/class-1.svg' },
    { title: 'ECD Learning', category: 'ECD', image: '/images/amr/ecd-1.svg' },
    { title: 'School Community', category: 'AMR', image: '/images/amr/students-1.svg' },
  ],
  news: [
    { slug: 'kindergarten-readiness-week', title: 'Kindergarten Readiness Week', excerpt: 'ECD learners explored confidence, phonics and play-based learning through an exciting week of discovery.', category: 'ECD', date: '2026-09-10', image: '/images/amr/ecd-1.svg' },
    { slug: 'sports-and-arts-competition', title: 'Sports and Arts Festival', excerpt: 'Our learners celebrated movement, creativity and teamwork in an unforgettable school festival.', category: 'Campus Life', date: '2026-09-03', image: '/images/amr/students-1.svg' },
    { slug: 'parents-open-day', title: 'Parents Open Day', excerpt: 'Families visited classrooms and saw how active, child-led learning supports every learner’s growth.', category: 'Community', date: '2026-08-27', image: '/images/amr/campus-1.svg' },
  ],
  leadership: [
    { name: 'Mrs. A. Moyo', role: 'Principal' },
    { name: 'Mr. T. Ndlovu', role: 'Deputy Head' },
    { name: 'Mrs. R. Chikomba', role: 'ECD Coordinator' },
  ],
  staff: [
    { name: 'Mrs. S. Mutasa', role: 'Early Childhood Teacher' },
    { name: 'Mr. P. Chihora', role: 'Primary Teacher' },
    { name: 'Mrs. M. Moyo', role: 'Learning Support' },
    { name: 'Mr. B. Kudzai', role: 'ICT & Digital Learning' },
  ],
  admissionsSteps: [
    'Book a school visit or request an application pack.',
    'Complete the online application form and submit required documents.',
    'Meet with the school team for guidance and placement discussion.',
    'Complete enrolment and welcome your child into the AMR community.',
  ],
  campusFeatures: [
    { title: 'Sports', description: 'Physical education, athletics and team activities that build confidence and teamwork.' },
    { title: 'Library', description: 'A calm reading space that encourages literacy, imagination and independent discovery.' },
    { title: 'Playground', description: 'Safe outdoor play and free movement spaces designed for healthy child development.' },
    { title: 'ECD Outdoor Area', description: 'A vibrant, child-friendly environment for exploration, sensory play and learning.' },
  ],
};
