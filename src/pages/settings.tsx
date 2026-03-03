import React from 'react';
import { Settings, User } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <header className="flex items-center gap-2 mb-8">
        <Settings className="w-6 h-6 text-blue-500" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </header>
      <section>
        <p className="text-gray-400">Manage your account preferences.</p>
        <User className="w-12 h-12 text-yellow-500 mt-4" />
      </section>
    </DashboardLayout>
  );
}
