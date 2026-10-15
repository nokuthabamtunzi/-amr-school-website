import Image from 'next/image';
import { SectionTitle, siteData } from '../../lib/site-data';

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle eyebrow="Gallery" title="Moments from campus life" description="A glimpse into the learning, play, creativity and community spirit that define AMR." />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {siteData.gallery.map((item) => (
          <div key={item.title} className="group overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-slate-200">
            <div className="relative h-72 w-full overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-4"><p className="text-sm uppercase tracking-[0.18em] text-sky-600">{item.category}</p><h3 className="mt-2 text-xl font-bold text-slate-900">{item.title}</h3></div>
          </div>
        ))}
      </div>
    </div>
  );
}
