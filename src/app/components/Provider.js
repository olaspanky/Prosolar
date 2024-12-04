'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function Providers({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initPixel = async () => {
      try {
        const ReactPixel = (await import('react-facebook-pixel')).default;
        
        ReactPixel.init('382348839135035'); // Replace with your Facebook Pixel ID
        ReactPixel.pageView(); // Track page view event
      } catch (error) {
        console.error('Failed to initialize Facebook Pixel', error);
      }
    };

    initPixel(); // Initialize Facebook Pixel when pathname or searchParams change
  }, [pathname, searchParams]); // Dependency array ensures it's initialized when pathname or searchParams change

  return <>{children}</>;
}
