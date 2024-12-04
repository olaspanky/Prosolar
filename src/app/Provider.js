'use client';
import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function PixelTracker() {
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
    initPixel();
  }, [pathname, searchParams]);

  return null;
}

export function Providers({ children }) {
  return (
    <>
      <Suspense fallback={null}>
        <PixelTracker />
      </Suspense>
      {children}
    </>
  );
}