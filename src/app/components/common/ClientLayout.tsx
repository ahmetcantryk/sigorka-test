'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import OverlayLoader from './OverlayLoader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   setLoading(true);
  //   const handleLoad = () => setLoading(false);
  //   if (document.readyState === 'complete') {
  //     setTimeout(() => setLoading(false), 200);
  //   } else {
  //     window.addEventListener('load', handleLoad);
  //   }
  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* <OverlayLoader visible={loading} /> */}
      {children}
      <div
        id="backToTopButton"
        style={{ display: showBackToTop ? 'block' : 'none' }}
        onClick={handleBackToTop}
      >
        <Image
          src="/images/arrow.svg"
          alt="Başa kaydırın"
          width={28}
          height={28}
          className="img-fluid"
          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
        />
      </div>
    </>
  );
} 