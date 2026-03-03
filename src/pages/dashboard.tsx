import React, { useEffect, useState } from 'react';
import { CreditCard } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import DashboardLayout from '../../components/layout/DashboardLayout';

interface Payment {
  id: string;
  amount: number;
  status: string;
  customer_email: string;
  created_at: string;
}

export default function Dashboard() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPayments() {
      setLoading(true);
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) {
        console.error('Supabase error:', error.message);
      } else {
        setPayments(data as Payment[]);
      }
      setLoading(false);
    }

    loadPayments();
  }, []);

  const totalRecovered = payments
    .filter((p) => p.status === 'recovered')
    .reduce((sum, p) => sum + p.amount, 0);
  const failedCount = payments.filter((p) => p.status === 'failed').length;
  const recoveryRate = payments.length
    ? ((payments.length - failedCount) / payments.length) * 100
    : 0;

  return (
    <DashboardLayout>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Overview</h1>
        <div className="space-x-4">
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-1">
            <CreditCard className="w-4 h-4" /> Connect Stripe
          </button>
          <button className="bg-transparent border border-gray-600 px-4 py-2 rounded hover:bg-gray-800">
            Manual Recovery
          </button>
        </div>
      </header>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#0A0A0A] p-4 rounded-lg">
          <h2 className="text-sm text-gray-400">Total Recovered</h2>
          <p className="text-2xl font-bold">${totalRecovered.toFixed(2)}</p>
        </div>
        <div className="bg-[#0A0A0A] p-4 rounded-lg">
          <h2 className="text-sm text-gray-400">Failed Payments</h2>
          <p className="text-2xl font-bold">{failedCount}</p>
        </div>
        <div className="bg-[#0A0A0A] p-4 rounded-lg">
          <h2 className="text-sm text-gray-400">Recovery Rate</h2>
          <p className="text-2xl font-bold">{recoveryRate.toFixed(1)}%</p>
        </div>
      </div>

      {/* Table of recent failed payments */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Failed Payments</h2>
        {loading ? (
          <p className="text-gray-400">Loading…</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#0A0A0A] rounded-lg">
              <thead>
                <tr className="text-left">
                  <th className="p-3">ID</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p) => (
                  <tr key={p.id} className="border-t border-gray-800">
                    <td className="p-3 text-sm">{p.id}</td>
                    <td className="p-3 text-sm">${p.amount.toFixed(2)}</td>
                    <td className="p-3 text-sm">{p.customer_email}</td>
                    <td className="p-3 text-sm capitalize">{p.status}</td>
                    <td className="p-3 text-sm">{new Date(p.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </DashboardLayout>
  );
}
