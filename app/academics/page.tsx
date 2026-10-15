import { SectionTitle } from '../../lib/site-data';
import Image from 'next/image';
import { siteData } from '../../lib/site-data';
import { MOTTO } from '../../config/site';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle eyebrow="About us" title="A nurturing school rooted in faith, care and excellence" description="AMR Primary School with ECD is a values-led day school committed to helping each child grow with confidence, joy and purpose." />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] bg-sky-50 p-8 ring-1 ring-sky-100">
          <h3 className="text-2xl font-bold text-slate-900">Our story</h3>
          <p className="mt-4 text-slate-700">AMR Primary School with ECD was founded to provide a safe and inspiring place for children to begin their learning journey. We believe every child deserves a school environment that values both achievement and character.</p>
          <p className="mt-4 text-slate-700">From the first steps in ECD through the foundation years in primary school, we help learners grow in confidence, kindness and academic strength.</p>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-lg">
          <div className="relative h-[360px] w-full">
            <Image src="/images/amr/campus-1.svg" alt="AMR campus" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {siteData.values.map((value) => (
          <div key={value.title} className="rounded-[1.75rem] border border-sky-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">{value.title}</h3>
            <p className="mt-3 text-slate-600">{value.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <SectionTitle eyebrow="School values" title={MOTTO} description="Our shared values shape the culture of the school and the way our learners grow." />
      </div>

      <div className="mt-16">
        <SectionTitle eyebrow="Leadership" title="Our leadership team" description="A dedicated school leadership team supports strong teaching, pastoral care and school growth." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {siteData.leadership.map((person) => (
            <div key={person.name} className="rounded-[1.6rem] bg-sky-50 p-6 text-center ring-1 ring-sky-100">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-200 text-2xl font-bold text-sky-700">{person.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{person.name}</h3>
              <p className="text-slate-600">{person.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <SectionTitle eyebrow="Our team" title="Dedicated ECD & Primary staff" description="Our teachers are warm, skilled and committed to building bright futures for every learner." />
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {siteData.staff.map((person) => (
            <div key={person.name} className="rounded-[1.6rem] border border-slate-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-slate-700">{person.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}</div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{person.name}</h3>
              <p className="text-sm text-slate-600">{person.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] bg-slate-900 p-8 text-white">
        <h3 className="text-2xl font-bold">Our School Song</h3>
        <p className="mt-4 max-w-3xl text-slate-200">AMR, AMR, we sing your praise<br />With joyful hearts and hopeful minds<br />We learn with courage, love and grace<br />And grow to serve in all we do.</p>
      </div>
    </div>
  );
}
