'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store';
import { logout } from '@/lib/auth';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (user && user.role !== 'admin') {
      router.push('/dashboard/client');
    }
  }, [user, router]);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      toast.success('Logged out successfully');
      router.push('/');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Shipments</h3>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-secondary">$0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Pending Invoices</h3>
            <p className="text-3xl font-bold text-accent">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Registered Clients</h3>
            <p className="text-3xl font-bold text-purple-600">0</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/dashboard/admin/shipments" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-primary mb-2">Manage Shipments</h3>
            <p className="text-gray-600">Create, track, and update shipments</p>
          </Link>
          <Link href="/dashboard/admin/invoices" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-primary mb-2">Financial Hub</h3>
            <p className="text-gray-600">Manage invoices and revenue</p>
          </Link>
          <Link href="/dashboard/admin/clients" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-primary mb-2">Client Management</h3>
            <p className="text-gray-600">Onboard and manage clients</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
