'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Disable Lenis smooth scroll on touch devices to enable native 120Hz butter-smooth mobile scrolling
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);

    if (isTouchDevice) {
      return; // Use native mobile scroll for 100% fluid performance
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    let reqId;
    function raf(time) {
      lenis.raf(time);
      reqId = requestAnimationFrame(raf);
    }

    reqId = requestAnimationFrame(raf);

    return () => {
      if (reqId) cancelAnimationFrame(reqId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
