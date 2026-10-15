import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { siteData } from '../lib/site-data';
import { PrimaryButton, SecondaryButton, SectionTitle, features } from '../lib/site-data';
import { MOTTO } from '../config/site';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-sky-100/40" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:px-8 lg:px-12 lg:py-16">
          <div className="relative z-10">
            <p className="mb-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">AMR Primary School with ECD</p>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-slate-900 md:text-6xl">A Great Place to Grow & Learn</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-700">We nurture joyful, confident learners from Early Childhood Development through Grade 7 in a safe, caring and values-rich environment.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/admissions">Apply Now</PrimaryButton>
              <SecondaryButton href="/contact">Visit Us</SecondaryButton>
            </div>
          </div>
          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              {siteData.heroSlides.slice(0, 2).map((slide, index) => (
                <div key={index} className={`overflow-hidden rounded-[2rem] shadow-2xl ${index === 1 ? 'mt-8' : ''}`}>
                  <div className="relative h-64 w-full sm:h-80">
                    <Image src={slide.image} alt={slide.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-sky-100 bg-sky-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-5 md:grid-cols-4 md:px-8">
          {siteData.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-sky-100">
              <div className="text-2xl font-black text-sky-600">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <SectionTitle eyebrow="Our Motto" title={MOTTO} description="Our school community is guided by values that shape how children learn, serve, and grow together." />
          </div>
          <div className="rounded-[2rem] bg-sky-50 p-8 shadow-sm ring-1 ring-sky-100">
            <p className="text-lg leading-8 text-slate-700">At AMR, every child is known, loved and inspired to become a confident learner who is academically strong, socially aware and spiritually grounded.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div className="overflow-hidden rounded-[2rem] shadow-lg">
              <div className="relative h-[460px] w-full">
                <Image src="/images/amr/class-1.svg" alt="AMR classroom" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            <div>
              <SectionTitle eyebrow="Welcome" title="A warm, focused learning community" description="Every day at AMR is shaped by care, academic rigor and a strong commitment to each child’s development." />
              <p className="text-slate-700">Our school is proud to provide a secure and inspiring learning environment for children and families in Zimbabwe. We balance excellent teaching with purposeful play, character development and strong relationships.</p>
              <div className="mt-6 flex items-center gap-3 text-sky-700"><MapPin size={18} /><span>Day school only • ECD to Grade 7 • Zimbabwe</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle eyebrow="Why choose us" title="A premium learning experience for young children" description="We blend strong academics, personal care and a meaningful school culture that helps children thrive." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[1.5rem] border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-2xl bg-sky-100 p-3 text-sky-600"><Icon size={22} /></div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sky-50 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle eyebrow="Academics" title="ECD and Primary learning pathways" description="We are an ECD and Primary school, intentionally designed to support children at every stage of development." />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {siteData.academics.map((program) => (
              <div key={program.title} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-sky-100">
                <h3 className="text-2xl font-bold text-slate-900">{program.title}</h3>
                <p className="mt-3 text-slate-600">{program.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle eyebrow="School life" title="A joyful, values-driven experience" description="From foundation learning to leadership growth, students are encouraged to grow with confidence and kindness." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {siteData.gallery.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative h-64 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-4">
                <p className="text-sm uppercase tracking-[0.18em] text-sky-600">{item.category}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle eyebrow="Latest news" title="What is happening at AMR" description="Our school community enjoys meaningful moments of learning, celebration and growth." />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {siteData.news.map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-slate-200">
                <div className="relative h-52 w-full">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">{item.category}</p>
                  <h3 className="mt-3 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.excerpt}</p>
                  <Link href={`/news/${item.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-600">
                    Read more <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle eyebrow="Parent voice" title="Families trust AMR" description="Our approach helps children feel safe, seen and inspired to do their best." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {siteData.testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="rounded-[1.5rem] border border-sky-100 bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-sky-500"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
              <p className="mt-4 text-lg text-slate-700">“{testimonial.quote}”</p>
              <footer className="mt-5 font-semibold text-slate-900">{testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-sky-500 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-center md:flex-row md:items-center md:justify-between md:text-left md:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-100">Admissions open</p>
            <h2 className="mt-2 text-3xl font-bold">Ready to enrol your child?</h2>
          </div>
          <PrimaryButton href="/admissions">Start your application</PrimaryButton>
        </div>
      </section>
    </>
  );
}
