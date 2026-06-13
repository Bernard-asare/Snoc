'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);

  useEffect(() => {
    if (!loading) {
      if (user) {
        if (user.role === 'admin') {
          router.push('/dashboard/admin');
        } else {
          router.push('/dashboard/client');
        }
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-gray-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Snoc Logistics</h1>
          <p className="text-xl text-gray-300 mb-8">
            Global cargo management from China to Ghana. Track, manage, and optimize your shipments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="bg-gray-700 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">For Clients</h2>
              <p className="text-gray-300 mb-6">Track your shipments in real-time and manage your account.</p>
              <Link href="/auth/login" className="bg-secondary hover:bg-green-600 text-white px-6 py-2 rounded-lg inline-block">
                Client Login
              </Link>
            </div>

            <div className="bg-gray-700 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">For Admin</h2>
              <p className="text-gray-300 mb-6">Manage shipments, invoices, and generate reports.</p>
              <Link href="/auth/login" className="bg-accent hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg inline-block font-semibold">
                Admin Login
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-gray-300">Monitor your cargo from pickup to delivery</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AI Documentation</h3>
              <p className="text-gray-300">Generate customs papers automatically</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Voice Updates</h3>
              <p className="text-gray-300">Receive automated status via TTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
