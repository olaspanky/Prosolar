'use client';  // This ensures the component is client-side only

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react'; // Import Suspense

export function Providers({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initPixel = async () => {
      try {
        const ReactPixel = (await import('react-facebook-pixel')).default;
        
        ReactPixel.init('382348839135035'); // Replace with your Facebook Pixel ID
        ReactPixel.pageView();
      } catch (error) {
        console.error('Failed to initialize Facebook Pixel', error);
      }
    };

    initPixel(); // Initialize Facebook Pixel when pathname or searchParams change
  }, [pathname, searchParams]); // Dependency array ensures it's initialized when pathname or searchParams change

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Wrap the children in Suspense */}
      {children}
    </Suspense>
  );
}
