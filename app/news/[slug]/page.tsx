import Link from 'next/link';
import Image from 'next/image';
import { SectionTitle } from '../../lib/site-data';
import { siteData } from '../../lib/site-data';

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle eyebrow="News & events" title="Community stories and school highlights" description="Read updates from AMR and discover the events and moments that make our school community memorable." />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {siteData.news.map((item) => (
          <article key={item.slug} className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-slate-200">
            <div className="relative h-52 w-full">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-600">{item.category}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.excerpt}</p>
              <Link href={`/news/${item.slug}`} className="mt-4 inline-flex text-sm font-semibold text-sky-600">Read article</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
