
import React, { useEffect } from 'react';
import { Home, Zap, Settings } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/router';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();

  useEffect(() => {
    // redirect if not authenticated (client-side fallback)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace('/');
      }
    });
  }, [router]);

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-[#0A0A0A] p-6 flex-shrink-0">
        <nav className="flex flex-col gap-4">
          <a
            href="/dashboard"
            className={`flex items-center gap-2 font-medium ${
              router.pathname === '/dashboard' ? 'text-blue-400' : 'hover:text-blue-400'
            }`}
          >
            <Home className="w-5 h-5" /> Overview
          </a>
          <a
            href="/dashboard/recoveries"
            className={`flex items-center gap-2 font-medium ${
              router.pathname === '/dashboard/recoveries' ? 'text-blue-400' : 'hover:text-blue-400'
            }`}
          >
            <Zap className="w-5 h-5" /> Recoveries
          </a>
          <a
            href="/settings"
            className={`flex items-center gap-2 font-medium ${
              router.pathname === '/settings' ? 'text-blue-400' : 'hover:text-blue-400'
            }`}
          >
            <Settings className="w-5 h-5" /> Settings
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
