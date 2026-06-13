'use client';

import type { ReactNode } from 'react';
import '../styles/globals.css';
import { useEffect } from 'react';
import { getCurrentUser } from '@/lib/auth';
import { useAuthStore } from '@/lib/store';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }: { children: ReactNode }) {
  const setUser = useAuthStore((state) => state.setUser);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    const unsubscribe = getCurrentUser((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
