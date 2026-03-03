import React, { useEffect, useState } from 'react';
import { CreditCard, DollarSign } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

interface Payment {
  id: string;
  amount: number;
  status: string;
  customer_email: string;
  created_at: string;
}

export default function Billing() {
  const [plan, setPlan] = useState('Basic');
  const [usage, setUsage] = useState(0);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace('/');
      }
    });

    async function loadData() {
      setLoading(true);

      // Example: fetch user profile plan if you have auth
      // const { data: profile } = await supabase.from('profiles').select('plan').single();
      // if (profile?.plan) setPlan(profile.plan);

      // compute usage as number of recovered payments this month
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      const { data, error } = await supabase
        .from('payments')
        .select('id')
        .gte('created_at', startOfMonth.toISOString())
        .eq('status', 'recovered');
      if (!error && data) {
        setUsage(data.length);
      }

      setLoading(false);
    }
    loadData();
  }, [router]);

  const handleManage = async () => {
    const res = await fetch('/api/manage-subscription', { method: 'POST' });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6">
      <header className="flex items-center gap-2 mb-8">
        <CreditCard className="w-6 h-6 text-blue-500" />
        <h1 className="text-2xl font-bold">Billing & Subscription</h1>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold">Current Plan</h2>
        <p className="text-gray-400">{plan}</p>
        <button
          className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-1"
          onClick={handleManage}
        >
          Manage Subscription
        </button>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold">Usage This Month</h2>
        {loading ? (
          <p className="text-gray-400">Loading…</p>
        ) : (
          <p className="text-gray-400">{usage} recovery messages sent</p>
        )}
      </section>

      <section>
        <p className="text-gray-400">View invoices and manage payment methods.</p>
        <DollarSign className="w-12 h-12 text-green-500 mt-4" />
      </section>
    </div>
  );
}
