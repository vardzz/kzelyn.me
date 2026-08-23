'use client';

import { useEffect, useRef } from 'react';

export function HorizontalScroller({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth >= 1024) {
        // If it's primarily a vertical scroll (like a standard mouse wheel)
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          
          // Temporarily disable snapping so the wheel scroll doesn't snap back immediately
          container.style.scrollSnapType = 'none';
          container.scrollLeft += e.deltaY;

          // Re-enable snapping after the user stops scrolling
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            container.style.scrollSnapType = 'x mandatory';
          }, 150);
        }
      }
    };

    // We use { passive: false } to allow e.preventDefault()
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div 
      id="horizontal-scroller"
      ref={containerRef} 
      className="flex flex-row w-screen h-[100dvh] overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar"
    >
      {children}
    </div>
  );
}
