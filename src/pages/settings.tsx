import React, { useEffect } from 'react';
import { Settings, User } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function SettingsPage() {
  const router = useRouter();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.replace('/');
    });
  }, [router]);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6">
      <header className="flex items-center gap-2 mb-8">
        <Settings className="w-6 h-6 text-blue-500" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </header>
      <section>
        <p className="text-gray-400">Manage your account preferences.</p>
        <User className="w-12 h-12 text-yellow-500 mt-4" />
      </section>
    </div>
  );
}
