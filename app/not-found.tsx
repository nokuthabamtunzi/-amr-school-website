'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { User, Lock, UploadCloud, Images, Newspaper, FileText, MessageSquareText, LogOut } from 'lucide-react';

const supabaseClient =
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
      })
    : null;

function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon: any }) {
  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-black text-slate-900">{value}</p>
        </div>
        <div className="rounded-2xl bg-sky-100 p-3 text-sky-600"><Icon size={20} /></div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [galleryCount, setGalleryCount] = useState('0');
  const [newsCount, setNewsCount] = useState('0');
  const [applicationCount, setApplicationCount] = useState('0');
  const [messageCount, setMessageCount] = useState('0');

  useEffect(() => {
    const loadSession = async () => {
      if (!supabaseClient) return;
      const { data } = await supabaseClient.auth.getSession();
      setSession(data.session);
    };
    loadSession();
  }, []);

  useEffect(() => {
    const loadStats = async () => {
      if (!supabaseClient) return;
      const [galleryRes, newsRes, appRes, msgRes] = await Promise.all([
        supabaseClient.from('gallery').select('*', { count: 'exact', head: true }),
        supabaseClient.from('news').select('*', { count: 'exact', head: true }),
        supabaseClient.from('applications').select('*', { count: 'exact', head: true }),
        supabaseClient.from('messages').select('*', { count: 'exact', head: true }),
      ]);
      setGalleryCount(String(galleryRes.count || 0));
      setNewsCount(String(newsRes.count || 0));
      setApplicationCount(String(appRes.count || 0));
      setMessageCount(String(msgRes.count || 0));
    };
    if (session) loadStats();
  }, [session]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabaseClient) {
      alert('Supabase env vars missing. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
      return;
    }
    setLoading(true);
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      alert(error.message);
      return;
    }
    setSession(data.session);
  };

  const handleLogout = async () => {
    if (!supabaseClient) return;
    await supabaseClient.auth.signOut();
    setSession(null);
  };

  const uploadPhotos = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!supabaseClient) {
      setMessage('Supabase is not configured yet.');
      return;
    }
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    setMessage('Uploading photos...');

    try {
      for (const file of Array.from(files)) {
        const path = `amr-${Date.now()}-${file.name}`;
        const { error: uploadError } = await supabaseClient.storage.from('amr-gallery').upload(path, file, { cacheControl: '3600', upsert: false });
        if (uploadError) throw uploadError;
        const publicUrl = supabaseClient.storage.from('amr-gallery').getPublicUrl(path).data.publicUrl;
        const { error: dbError } = await supabaseClient.from('gallery').insert({ title: file.name, category: 'AMR', image_url: publicUrl, is_hero: false });
        if (dbError) throw dbError;
      }
      setMessage('Photos uploaded successfully.');
    } catch (error: any) {
      setMessage(error.message || 'Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    if (!supabaseClient) {
      alert('Supabase is not configured yet.');
      return;
    }
    const file = e.target.files?.[0];
    if (!file) return;
    const path = `${key}-${Date.now()}-${file.name}`;
    const { error } = await supabaseClient.storage.from('amr-logos').upload(path, file, { upsert: true, cacheControl: '3600' });
    if (error) {
      alert(error.message);
      return;
    }
    const publicUrl = supabaseClient.storage.from('amr-logos').getPublicUrl(path).data.publicUrl;
    const { error: dbError } = await supabaseClient.from('site_settings').upsert({ key, value: publicUrl }, { onConflict: 'key' });
    if (dbError) {
      alert(dbError.message);
      return;
    }
    alert('Logo uploaded.');
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-sky-50 p-4">
        <div className="mx-auto max-w-md rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-sky-100">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">AMR Admin</p>
          <h1 className="mt-3 text-3xl font-black text-slate-900">School dashboard</h1>
          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"><User size={16} /> Email</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full rounded-xl border border-slate-200 p-3" placeholder="admin@amr.school" required />
            </label>
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"><Lock size={16} /> Password</span>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full rounded-xl border border-slate-200 p-3" placeholder="••••••••" required />
            </label>
            <button type="submit" disabled={loading} className="w-full rounded-full bg-sky-500 px-5 py-3 font-semibold text-white disabled:opacity-60">{loading ? 'Signing in...' : 'Login'}</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Dashboard</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">AMR School Admin</h1>
        </div>
        <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700">
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Photos" value={galleryCount} icon={Images} />
        <StatCard label="News" value={newsCount} icon={Newspaper} />
        <StatCard label="Applications" value={applicationCount} icon={FileText} />
        <StatCard label="Messages" value={messageCount} icon={MessageSquareText} />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Gallery Manager</h2>
          <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-sky-200 bg-sky-50 p-8 text-center">
            <UploadCloud className="text-sky-600" size={36} />
            <span className="mt-3 text-sm font-semibold text-slate-700">Drag or tap to upload multiple photos</span>
            <input type="file" className="hidden" multiple onChange={uploadPhotos} />
          </label>
          {message ? <p className="mt-4 text-sm text-slate-600">{message}</p> : null}
          {uploading ? <p className="mt-3 text-sm text-sky-600">Uploading...</p> : null}
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Logo Manager</h2>
          <div className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-slate-700">School Logo 1<input type="file" className="mt-2 block w-full" onChange={(e) => handleLogoUpload(e, 'logo1')} /></label>
            <label className="block text-sm font-medium text-slate-700">School Logo 2<input type="file" className="mt-2 block w-full" onChange={(e) => handleLogoUpload(e, 'logo2')} /></label>
            <label className="block text-sm font-medium text-slate-700">My Branding Logo<input type="file" className="mt-2 block w-full" onChange={(e) => handleLogoUpload(e, 'branding')} /></label>
          </div>
        </div>
      </div>
    </div>
  );
}
