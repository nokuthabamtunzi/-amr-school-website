import { SectionTitle, siteData } from '../../lib/site-data';

export default function AcademicsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle eyebrow="Academics" title="ECD and Primary learning that builds strong foundations" description="AMR is focused on Early Childhood Development and Primary education, preparing children with the confidence and skills they need for life and learning." />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {siteData.academics.map((program) => (
          <div key={program.title} className="rounded-[1.6rem] bg-sky-50 p-6 ring-1 ring-sky-100">
            <h3 className="text-2xl font-bold text-slate-900">{program.title}</h3>
            <p className="mt-3 text-slate-700">{program.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-2xl font-bold text-slate-900">Curriculum</h3>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li>• English Language and Literacy</li>
            <li>• Mathematics and Numeracy</li>
            <li>• Science and Environmental Learning</li>
            <li>• Social Studies and Heritage</li>
            <li>• ICT and Digital Skills</li>
            <li>• Physical Education and Sport</li>
          </ul>
        </div>
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-sm">
          <h3 className="text-2xl font-bold">Results & excellence</h3>
          <p className="mt-5 text-slate-200">Our learners are supported through structured teaching, regular assessment and guided individual progress. We focus on both academic performance and the development of strong character.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div className="rounded-2xl bg-white/10 p-4"><div className="text-3xl font-black">93%</div><div className="text-sm text-slate-200">Pass rate</div></div>
            <div className="rounded-2xl bg-white/10 p-4"><div className="text-3xl font-black">7</div><div className="text-sm text-slate-200">Primary grades</div></div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] bg-sky-50 p-8 ring-1 ring-sky-100">
        <h3 className="text-2xl font-bold text-slate-900">Timetable highlights</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm"><strong>Morning:</strong> Literacy, numeracy, assembly and learning circles.</div>
          <div className="rounded-2xl bg-white p-5 shadow-sm"><strong>Midday:</strong> Physical activity, library and project-based learning.</div>
          <div className="rounded-2xl bg-white p-5 shadow-sm"><strong>Afternoon:</strong> Arts, sport, enrichment and guided study.</div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <a href="https://portal.example.com" className="inline-flex rounded-full bg-sky-500 px-6 py-3 font-semibold text-white">E-Learning Portal</a>
      </div>
    </div>
  );
}
