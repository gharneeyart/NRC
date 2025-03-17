'use client'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Use usePathname from next/navigation
import { useSearchStore } from '@/store/useSearchStore';

export default function ClientSideWrapper({ children }) {
  const pathname = usePathname();
  const resetAll = useSearchStore((state) => state.resetAll);

  useEffect(() => {
    if (pathname === '/') {
      resetAll(); // Reset all states when navigating to the home page
    }
  }, [pathname, resetAll]);

  return (
    <div>
      {children}
    </div>
  );
}