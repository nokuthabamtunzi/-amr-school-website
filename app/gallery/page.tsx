import Image from 'next/image';
import { notFound } from 'next/navigation';
import { siteData } from '../../../lib/site-data';

export function generateStaticParams() {
  return siteData.news.map((item) => ({ slug: item.slug }));
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const post = siteData.news.find((item) => item.slug === params.slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 md:px-8">
      <div className="overflow-hidden rounded-[2rem] shadow-md">
        <div className="relative h-80 w-full">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" />
        </div>
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">{post.category}</p>
      <h1 className="mt-3 text-4xl font-black text-slate-900">{post.title}</h1>
      <p className="mt-4 text-slate-600">{post.excerpt}</p>
      <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
        <p>At AMR, we believe school life should be rich with wonder, celebration and learning by doing. Our events and classroom activities give learners opportunities to succeed beyond the classroom.</p>
        <p>Through carefully planned experiences, children are encouraged to develop communication, teamwork, confidence and creative expression while continuing to grow academically. This approach supports a joyful and balanced school experience from ECD through Primary.</p>
      </div>
    </article>
  );
}
