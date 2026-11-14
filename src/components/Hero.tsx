'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const nameSpansRef = useRef<HTMLDivElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // 0. Initial Setup: lock scroll & start at top on reload
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      document.body.style.overflow = 'hidden';

      const isDesktop = window.innerWidth >= 768;

      // 1. Initial State: All background & foreground text is strictly invisible
      if (nameSpansRef.current) {
        gsap.set(nameSpansRef.current, { opacity: 0 });
      }
      if (introRef.current) {
        gsap.set(introRef.current, { opacity: 0 });
      }
      if (indicatorRef.current) {
        gsap.set(indicatorRef.current, { opacity: 0 });
      }

      // Portrait starts dead-center on screen as the solitary focal point
      if (portraitRef.current) {
        gsap.set(portraitRef.current, {
          left: '50%',
          opacity: 0,
          scale: 0.88,
          y: 70,
        });
      }

      // Master Reload Timeline
      const tl = gsap.timeline();

      // ========================================================
      // PHASE 1 (0.0s – 3.0s): SPOTLIGHT ON KZELYN PORTRAIT
      // The portrait pops out dynamically with zero text in background
      // ========================================================
      if (portraitRef.current) {
        tl.to(
          portraitRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1.05,
            duration: 1.15,
            ease: 'power3.out',
          },
          0.15
        );

        // Subtle living presence during the 3-second spotlight
        tl.to(
          portraitRef.current,
          {
            scale: 1.03,
            duration: 1.7,
            ease: 'sine.inOut',
          },
          1.3
        );
      }

      // ========================================================
      // PHASE 2 (at 3.0s): CINEMATIC CONTENT REVEAL
      // Portrait slides to resting position & all content enters
      // ========================================================
      // 1. Portrait glides to its editorial resting spot (58% on desktop)
      if (portraitRef.current) {
        tl.to(
          portraitRef.current,
          {
            left: isDesktop ? '58%' : '50%',
            scale: 1.0,
            duration: 1.25,
            ease: 'power3.inOut',
          },
          3.0
        );
      }

      // 2. Oversized "KZELYN" letters reveal behind the portrait
      if (nameSpansRef.current) {
        tl.set(nameSpansRef.current, { opacity: 1 }, 3.0);
        tl.fromTo(
          nameSpansRef.current.children,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.07,
            duration: 1.15,
            ease: 'power3.out',
          },
          3.1
        );
      }

      // 3. Left Introduction column (Headline, Description, CTAs)
      if (introRef.current) {
        tl.set(introRef.current, { opacity: 1 }, 3.0);
        tl.fromTo(
          introRef.current.children,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1.05,
            ease: 'power3.out',
          },
          3.25
        );
      }

      // 4. Right Pagination Indicator
      if (indicatorRef.current) {
        tl.set(indicatorRef.current, { opacity: 1 }, 3.0);
        tl.fromTo(
          indicatorRef.current,
          { x: 25, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power3.out',
          },
          3.45
        );
      }

      // 5. Unlock page scroll once reveal completes
      tl.call(
        () => {
          document.body.style.overflow = '';
        },
        undefined,
        3.6
      );

      // ========================================================
      // PHASE 3: PARALLAX DEPTH ON SCROLL (Active after reveal)
      // ========================================================
      if (containerRef.current) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        });

        if (nameSpansRef.current) {
          scrollTl.to(nameSpansRef.current, { y: -70, opacity: 0.25, ease: 'none' }, 0);
        }
        if (portraitRef.current) {
          scrollTl.to(portraitRef.current, { y: 55, ease: 'none' }, 0);
        }
        if (introRef.current) {
          scrollTl.to(introRef.current, { y: -40, opacity: 0.15, ease: 'none' }, 0);
        }
      }

      return () => {
        document.body.style.overflow = '';
      };
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full h-[100svh] min-h-[580px] max-h-[1100px] bg-[#F3EFE9] text-[#171513] overflow-hidden select-none"
      aria-label="Hero Section"
    >
      {/* 1. Oversized Typography: KZELYN (Single Horizontal Line across the upper portion) */}
      <div 
        ref={nameSpansRef}
        className="absolute top-[72px] sm:top-[76px] lg:top-[80px] xl:top-[84px] left-0 right-0 w-full px-[4.5vw] flex justify-between items-baseline font-serif text-[17.5vw] xl:text-[220px] 2xl:text-[235px] font-[350] leading-none tracking-[-0.05em] text-[#171513] pointer-events-none select-none z-0 opacity-0"
        aria-hidden="true"
      >
        <span>K</span>
        <span>Z</span>
        <span>E</span>
        <span>L</span>
        <span>Y</span>
        <span>N</span>
      </div>

      {/* 2. Portrait Cutout: /kzelyn-image.png (Initially centered as sole focus, then glides to 58%) */}
      <div 
        ref={portraitRef}
        className="pointer-events-none z-10 absolute bottom-0 left-1/2 -translate-x-1/2 h-[97vh] sm:h-[98vh] max-h-[1050px] w-auto flex items-end justify-center select-none opacity-0"
      >
        <Image
          src="/kzelyn-image.png"
          alt="Kzelyn Artillo"
          width={1198}
          height={1313}
          priority
          className="h-full w-auto max-w-none object-contain object-bottom select-none"
          sizes="(max-height: 1050px) 98vh, 1050px"
        />
      </div>

      {/* 3. Left-Side Introduction (Harmonious UI/UX spacing and visual hierarchy) */}
      <div 
        ref={introRef}
        className="absolute top-[clamp(215px,44vh,365px)] left-[4.5vw] right-[4.5vw] md:right-auto z-20 w-auto md:w-[540px] max-w-[560px] flex flex-col items-start text-left opacity-0"
      >
        {/* Small Introductory Label with Horizontal Line */}
        <div className="flex items-center gap-3.5 mb-3.5 lg:mb-4">
          <p className="font-sans text-[11px] sm:text-[11.5px] lg:text-[12px] font-medium tracking-[0.05em] uppercase text-white md:text-[#171513]/90 whitespace-nowrap">
            BSBA MARKETING MANAGEMENT GRADUATE
          </p>
          <span className="h-[1px] w-20 sm:w-32 lg:w-36 bg-white/60 md:bg-[#A9A39B]" aria-hidden="true" />
        </div>

        {/* Main Headline: Exactly 3 lines, Boska Medium Thin (350), medium editorial size */}
        <h1 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] xl:text-[45px] font-[350] leading-[1.14] text-white md:text-[#171513] tracking-[-0.02em] mb-4 lg:mb-5">
          Hello, I&apos;m <strong className="font-[600] text-white md:text-[#171513]">Kz.</strong><br />
          Crafting brands with<br />
          purpose &amp; care.
        </h1>

        {/* Supporting Description: Inter, comfortable medium size */}
        <p className="font-sans text-[14px] sm:text-[14.5px] lg:text-[15px] font-normal leading-[1.65] text-white/85 md:text-[#77716A] max-w-[390px] mb-7 lg:mb-8">
          A marketing graduate passionate about turning creative ideas into real impact through strategy, design, and meaningful connections.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-5">
          {/* Primary CTA */}
          <a
            href="#achievements"
            className="inline-flex items-center justify-center gap-2.5 bg-[#FFFFFF] md:bg-[#000000] text-[#171513] md:text-[#FFFFFF] hover:bg-[#1a1817] hover:text-[#FFFFFF] rounded-full h-[46px] lg:h-[48px] px-[26px] sm:px-[28px] lg:px-[32px] font-sans text-[13px] lg:text-[13.5px] font-medium tracking-normal transition-all duration-300 shadow-xs hover:shadow-sm"
          >
            <span>Explore Achievements</span>
            <span className="text-[14px] leading-none">↗</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#about"
            className="inline-flex items-center justify-center bg-transparent hover:bg-[#000000] text-white md:text-[#171513] hover:text-[#FFFFFF] border border-white/60 md:border-[#77716A] rounded-full h-[46px] lg:h-[48px] px-[28px] sm:px-[30px] lg:px-[34px] font-sans text-[13px] lg:text-[13.5px] font-normal transition-all duration-300"
          >
            About Me
          </a>
        </div>

      </div>

      {/* 5. Right-Side Information Indicator (Middle-Right of the Hero) */}
      <div 
        ref={indicatorRef}
        className="hidden lg:flex absolute top-[52%] -translate-y-1/2 right-[4.5vw] z-20 flex-col items-start text-left opacity-0"
      >
        <div className="border-l border-[#A9A39B] pl-5 max-w-[180px]">
          <p className="font-sans text-[13px] text-[#77716A] leading-[1.6] max-w-[165px]">
            Turning ideas into strategies, and strategies into something greater.
          </p>
        </div>
      </div>

    </section>
  );
}
