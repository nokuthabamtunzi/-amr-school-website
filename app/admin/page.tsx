'use client';

import { useState } from 'react';
import { School, MapPin, Mail, Phone, MessageSquareText } from 'lucide-react';
import { ADDRESS, GOOGLE_MAP_EMBED_URL, GOOGLE_ACCOUNT_EMAIL, SCHOOL_EMAIL, SCHOOL_PHONE, WHATSAPP_NUMBER } from '../../config/site';
import { supabase } from '../../lib/supabaseClient';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) {
      setStatus('Supabase is not configured yet. Add your project URL and anon key.');
      return;
    }

    const { error } = await supabase.from('messages').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    });

    if (error) {
      setStatus(`Failed to send: ${error.message}`);
      return;
    }

    setStatus('Message sent successfully.');
    setForm({ name: '', email: '', phone: '', message: '' });
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] bg-sky-50 p-8 ring-1 ring-sky-100">
          <h1 className="text-4xl font-black text-slate-900">Contact AMR</h1>
          <div className="mt-8 space-y-6 text-slate-700">
            <div className="flex gap-4"><MapPin className="mt-1 text-sky-600" /><span>{ADDRESS}</span></div>
            <div className="flex gap-4"><Mail className="mt-1 text-sky-600" /><a href={`mailto:${SCHOOL_EMAIL}`}>{SCHOOL_EMAIL}</a></div>
            <div className="flex gap-4"><Phone className="mt-1 text-sky-600" /><a href={`tel:${SCHOOL_PHONE}`}>{SCHOOL_PHONE}</a></div>
            <div className="flex gap-4"><MessageSquareText className="mt-1 text-sky-600" /><span>{GOOGLE_ACCOUNT_EMAIL}</span></div>
            <div className="flex gap-4"><School className="mt-1 text-sky-600" /><a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\s+/g, '')}`}>WhatsApp</a></div>
          </div>
          <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\s+/g, '')}`} className="mt-8 inline-flex rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white">Chat on WhatsApp</a>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Send a message</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Name</span><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700"><span>Email</span><input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="w-full rounded-xl border border-slate-200 p-3" required /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2"><span>Phone</span><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-xl border border-slate-200 p-3" /></label>
            <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2"><span>Message</span><textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full rounded-xl border border-slate-200 p-3" required /></label>
          </div>
          <button type="submit" className="mt-6 rounded-full bg-sky-500 px-5 py-3 font-semibold text-white">Send message</button>
          {status ? <p className="mt-4 text-sm text-slate-600">{status}</p> : null}
        </form>
      </div>

      <div className="mt-16 overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-slate-200">
        <iframe src={GOOGLE_MAP_EMBED_URL} className="h-[420px] w-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  );
}
