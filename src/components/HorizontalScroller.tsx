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
      
      const getScrollAmount = () => {
        if (!wrapperRef.current) return 0;
        let wrapperWidth = wrapperRef.current.scrollWidth;
        return -(wrapperWidth - window.innerWidth);
      };

      const tween = gsap.to(wrapperRef.current, {
        x: getScrollAmount,
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1, // Smooth scrubbing, takes 1 second to "catch up"
        invalidateOnRefresh: true,
      });

      return () => {
        // matchMedia handles reverting automatically
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
