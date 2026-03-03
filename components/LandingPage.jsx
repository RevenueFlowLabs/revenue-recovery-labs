import React from 'react';
import { Activity, ArrowRight, Shield, Zap, Check } from 'lucide-react';

export default function RevenueRecovery() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Activity className="text-blue-500 w-8 h-8" />
          <span className="text-2xl font-bold">Revenue Recovery Labs</span>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition">
          Sign In
        </button>
      </nav>

      <main className="max-w-5xl mx-auto text-center pt-20 px-4">
        <h1 className="text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Recover failed payments <br /> on autopilot.
        </h1>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
          AI-powered recovery messages sent via SMS and Email the moment a payment fails.
        </p>
        <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto hover:bg-gray-200">
          Start Recovering <ArrowRight size={20} />
        </button>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="p-8 bg-[#0A0A0A] border border-gray-900 rounded-2xl text-left">
            <Zap className="text-yellow-500 mb-4" />
            <h3 className="font-bold text-lg">Instant Dunning</h3>
            <p className="text-gray-500 text-sm">Automated retries and alerts for failed charges.</p>
          </div>
          <div className="p-8 bg-[#0A0A0A] border border-gray-900 rounded-2xl text-left">
            <Shield className="text-blue-500 mb-4" />
            <h3 className="font-bold text-lg">Secure Integration</h3>
            <p className="text-gray-500 text-sm">Seamlessly connects to your Supabase backend.</p>
          </div>
          <div className="p-8 bg-[#0A0A0A] border border-gray-900 rounded-2xl text-left">
            <Check className="text-green-500 mb-4" />
            <h3 className="font-bold text-lg">High ROI</h3>
            <p className="text-gray-500 text-sm">Recover lost revenue with minimal effort.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
