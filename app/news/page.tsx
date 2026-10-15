import { SectionTitle, siteData } from '../../lib/site-data';

export default function CampusPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle eyebrow="Campus life" title="A vibrant, child-centred campus" description="From play and sport to reading and creativity, our campus is designed for healthy, happy learners." />

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {siteData.campusFeatures.map((feature) => (
          <div key={feature.title} className="rounded-[1.6rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
            <p className="mt-3 text-slate-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] bg-sky-50 p-8 ring-1 ring-sky-100"><h3 className="text-2xl font-bold text-slate-900">Sports & clubs</h3><p className="mt-4 text-slate-700">Learners take part in sports, movement activities and enrichment programmes that build teamwork, health and resilience.</p></div>
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white"><h3 className="text-2xl font-bold">Library & reading</h3><p className="mt-4 text-slate-200">Our reading culture supports literacy, imagination and independent thinking, with resources designed for growing minds.</p></div>
      </div>
    </div>
  );
}
