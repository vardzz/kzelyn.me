'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalScroller({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      const getScrollAmount = () => {
        let sw = wrapperRef.current ? wrapperRef.current.scrollWidth : 0;
        return -(sw - window.innerWidth);
      };

      const tween = gsap.to(wrapperRef.current, {
        x: () => -(wrapperRef.current ? wrapperRef.current.scrollWidth - window.innerWidth : 0),
        ease: "none"
      });

      const sectionCount = wrapperRef.current ? wrapperRef.current.children.length : 5;

      const st = ScrollTrigger.create({
        id: 'horizontal-scroll-trigger',
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${wrapperRef.current ? wrapperRef.current.scrollWidth - window.innerWidth : 3000}`,
        pin: true,
        animation: tween,
        scrub: 1, 
        invalidateOnRefresh: true,
        snap: {
          snapTo: (progress) => {
            const step = 1 / (sectionCount - 1);
            return Math.round(progress / step) * step;
          },
          duration: { min: 0.2, max: 0.5 },
          ease: "power1.inOut"
        },
        onUpdate: (self) => {
          const activeIndex = Math.min(
            sectionCount - 1,
            Math.max(0, Math.round(self.progress * (sectionCount - 1)))
          );
          window.dispatchEvent(new CustomEvent('activeSectionChange', { detail: activeIndex }));
        }
      });

      return () => {
        st.kill();
        tween.kill();
      };
    });
    
  }, { scope: containerRef });

  useEffect(() => {
    // Enable trackpad horizontal swipe & keyboard navigation on desktop
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 2) {
        window.scrollBy({ top: e.deltaX * 1.5, behavior: 'auto' });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth < 1024) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        window.scrollBy({ top: window.innerWidth * 0.8, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        window.scrollBy({ top: -window.innerWidth * 0.8, behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="lg:h-screen lg:w-screen lg:overflow-hidden relative z-0">
      <div 
        id="horizontal-scroller"
        ref={wrapperRef} 
        // We preserve native snap scrolling on mobile.
        // On desktop (lg:), we switch to a wider flex container that GSAP will physically move left/right.
        className="flex flex-row w-screen h-[100dvh] overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar lg:overflow-visible lg:snap-none lg:w-fit"
      >
        {children}
      </div>
    </div>
  );
}
