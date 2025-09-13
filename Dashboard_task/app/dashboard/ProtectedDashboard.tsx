'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedDashboard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function check() {
      try {
        const res = await fetch('/api/auth', { credentials: 'include', cache: 'no-store' });
        const data = await res.json();
        if (mounted) {
          if (!data?.user) router.replace('/login');
          else setLoading(false);
        }
      } catch (err) {
        if (mounted) router.replace('/login');
      }
    }
    check();
    return () => {
      mounted = false;
    };
  }, [router]);

  if (loading) return <div>Loading...</div>;

  return <>{children}</>;
}
