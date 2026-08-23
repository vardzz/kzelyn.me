'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalScroller({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // We strictly isolate GSAP to desktop breakpoints (1024px and up)
    // to preserve the native horizontal scrolling behavior on mobile.
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      // Use a more robust calculation pattern for React/Next.js
      const getScrollAmount = () => {
        let scrollWidth = wrapperRef.current ? wrapperRef.current.scrollWidth : 0;
        return -(scrollWidth - window.innerWidth);
      };

      const tween = gsap.to(wrapperRef.current, {
        x: getScrollAmount,
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        // Make the scroll distance equal to the total width of the content for natural scrolling speed
        end: () => `+=${wrapperRef.current ? wrapperRef.current.scrollWidth : 3000}`,
        pin: true,
        animation: tween,
        scrub: 1, 
        invalidateOnRefresh: true,
      });

      return () => {
        if (tween) tween.kill();
      };
    });
    
  }, { scope: containerRef });

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
