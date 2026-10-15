import { PrimaryButton, SectionTitle } from '../../lib/site-data';
import { siteData } from '../../lib/site-data';
import { supabase } from '../../lib/supabaseClient';

export default function AdmissionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle eyebrow="Admissions" title="A simple, welcoming enrolment process" description="We invite families to apply to AMR Primary School with ECD and begin the journey with a warm and supportive school community." />

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {siteData.admissionsSteps.map((step, index) => (
          <div key={step} className="rounded-[1.5rem] bg-sky-50 p-6 ring-1 ring-sky-100">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 font-bold text-white">{index + 1}</div>
            <p className="text-slate-700">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
          <h3 className="text-2xl font-bold">Fees placeholder</h3>
          <div className="mt-6 space-y-4 text-slate-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-2"><span>ECD</span><span>$150 / month</span></div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2"><span>Primary</span><span>$180 / month</span></div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2"><span>Registration</span><span>One-time fee</span></div>
          </div>
          <div className="mt-8">
            <a href="/downloads/application-form.pdf" className="inline-flex rounded-full bg-white px-5 py-3 font-semibold text-slate-900">Download Form</a>
          </div>
        </div>

        <form action={async (formData) => {
          'use server';
          const data = Object.fromEntries(formData.entries());
          const { error } = await supabase.from('applications').insert({
            student_name: String(data.student_name || ''),
            dob: String(data.dob || null),
            grade: String(data.grade || ''),
            gender: String(data.gender || ''),
            previous_school: String(data.previous_school || ''),
            parent_name: String(data.parent_name || ''),
            phone: String(data.phone || ''),
            email: String(data.email || ''),
            address: String(data.address || ''),
            document_url: String(data.document_url || ''),
          });
          if (error) {
            console.log(error.message);
          }
        }} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-2xl font-bold text-slate-900">Online application form</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Student name</span><input name="student_name" className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>DOB</span><input type="date" name="dob" className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Grade applying</span><select name="grade" className="w-full rounded-xl border border-slate-200 p-3" required><option value="">Select</option><option>ECD Toddler</option><option>ECD A</option><option>ECD B</option><option>Grade 1</option><option>Grade 2</option><option>Grade 3</option><option>Grade 4</option><option>Grade 5</option><option>Grade 6</option><option>Grade 7</option></select></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Gender</span><select name="gender" className="w-full rounded-xl border border-slate-200 p-3" required><option value="">Select</option><option>Female</option><option>Male</option></select></label>
            <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2"><span>Previous school / ECD</span><input name="previous_school" className="w-full rounded-xl border border-slate-200 p-3" /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Parent name</span><input name="parent_name" className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Phone</span><input name="phone" className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Email</span><input type="email" name="email" className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2"><span>Address</span><textarea name="address" rows={4} className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2"><span>Upload birth certificate / results</span><input type="file" name="document_url" className="w-full rounded-xl border border-slate-200 p-3" /></label>
          </div>
          <div className="mt-6"><button type="submit" className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white">Submit Application</button></div>
        </form>
      </div>
    </div>
  );
}
