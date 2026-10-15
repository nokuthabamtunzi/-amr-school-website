'use client';

import { useState } from 'react';
import { SectionTitle, siteData } from '../../lib/site-data';
import { supabase } from '../../lib/supabaseClient';

export default function AdmissionsPage() {
  const [form, setForm] = useState({
    student_name: '',
    dob: '',
    grade: '',
    gender: '',
    previous_school: '',
    parent_name: '',
    phone: '',
    email: '',
    address: '',
  });
  const [status, setStatus] = useState('');
  const [uploading, setUploading] = useState(false);

  function updateField(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) {
      setStatus('Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
      return;
    }

    setStatus('Submitting...');
    const { error } = await supabase.from('applications').insert({
      student_name: form.student_name,
      dob: form.dob || null,
      grade: form.grade,
      gender: form.gender,
      previous_school: form.previous_school,
      parent_name: form.parent_name,
      phone: form.phone,
      email: form.email,
      address: form.address,
      document_url: '',
    });

    if (error) {
      setStatus(`Submission failed: ${error.message}`);
      return;
    }

    setStatus('Application submitted successfully.');
    setForm({
      student_name: '',
      dob: '',
      grade: '',
      gender: '',
      previous_school: '',
      parent_name: '',
      phone: '',
      email: '',
      address: '',
    });
  }

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file || !supabase) return;
    setUploading(true);
    const fileName = `${Date.now()}-${file.name}`;
    const path = `applications/${fileName}`;
    const { error: uploadError } = await supabase.storage.from('amr-logos').upload(path, file, { upsert: true, cacheControl: '3600' });
    if (uploadError) {
      setStatus(`Document upload failed: ${uploadError.message}`);
      setUploading(false);
      return;
    }
    const publicUrl = supabase.storage.from('amr-logos').getPublicUrl(path).data.publicUrl;
    setStatus(`Document uploaded. Public URL ready: ${publicUrl}`);
    setUploading(false);
  }

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

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-2xl font-bold text-slate-900">Online application form</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Student name</span><input value={form.student_name} onChange={(e) => updateField('student_name', e.target.value)} className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>DOB</span><input value={form.dob} onChange={(e) => updateField('dob', e.target.value)} type="date" className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Grade applying</span><select value={form.grade} onChange={(e) => updateField('grade', e.target.value)} className="w-full rounded-xl border border-slate-200 p-3" required><option value="">Select</option><option>ECD Toddler</option><option>ECD A</option><option>ECD B</option><option>Grade 1</option><option>Grade 2</option><option>Grade 3</option><option>Grade 4</option><option>Grade 5</option><option>Grade 6</option><option>Grade 7</option></select></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Gender</span><select value={form.gender} onChange={(e) => updateField('gender', e.target.value)} className="w-full rounded-xl border border-slate-200 p-3" required><option value="">Select</option><option>Female</option><option>Male</option></select></label>
            <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2"><span>Previous school / ECD</span><input value={form.previous_school} onChange={(e) => updateField('previous_school', e.target.value)} className="w-full rounded-xl border border-slate-200 p-3" /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Parent name</span><input value={form.parent_name} onChange={(e) => updateField('parent_name', e.target.value)} className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Phone</span><input value={form.phone} onChange={(e) => updateField('phone', e.target.value)} className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Email</span><input value={form.email} onChange={(e) => updateField('email', e.target.value)} type="email" className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2"><span>Address</span><textarea value={form.address} onChange={(e) => updateField('address', e.target.value)} rows={4} className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2"><span>Upload birth certificate / results</span><input type="file" onChange={handleFileUpload} className="w-full rounded-xl border border-slate-200 p-3" /></label>
          </div>
          <div className="mt-6">
            <button type="submit" disabled={uploading} className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white disabled:opacity-60">{uploading ? 'Uploading...' : 'Submit Application'}</button>
          </div>
          {status ? <p className="mt-4 text-sm text-slate-600">{status}</p> : null}
        </form>
      </div>
    </div>
  );
}
