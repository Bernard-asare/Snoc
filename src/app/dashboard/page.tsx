'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store';

export default function Dashboard() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        router.push('/dashboard/admin');
      } else {
        router.push('/dashboard/client');
      }
    } else {
      router.push('/auth/login');
    }
  }, [user, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting...</p>
    </div>
  );
}
