'use client';

import { useEffect, useRef } from 'react';

export function HorizontalScroller({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Apply horizontal scroll hijacking only on desktop screens
      if (window.innerWidth >= 1024) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    // We use { passive: false } to allow e.preventDefault()
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="flex flex-col lg:flex-row w-full lg:w-screen lg:h-screen lg:overflow-x-auto lg:overflow-y-hidden hide-scrollbar"
    >
      {children}
    </div>
  );
}
