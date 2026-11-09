'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full h-[100svh] min-h-[750px] max-h-[1050px] bg-[#F3EFE9] text-[#171513] overflow-hidden select-none"
      aria-label="Hero Section"
    >
      {/* 1. Oversized Background Typography: KZELYN (Single Horizontal Line across the upper portion) */}
      <div 
        className="absolute top-[85px] sm:top-[95px] lg:top-[85px] xl:top-[80px] left-0 right-0 w-full px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16 flex justify-between items-baseline font-serif text-[17.5vw] lg:text-[17vw] xl:text-[230px] 2xl:text-[245px] font-normal leading-none tracking-normal text-[#171513] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span>K</span>
        <span>Z</span>
        <span>E</span>
        <span>L</span>
        <span>Y</span>
        <span>N</span>
      </div>

      {/* 2. Portrait Cutout: /kzelyn-image.png (Layered above typography, aligned to bottom) */}
      <div 
        className="pointer-events-none z-10 absolute bottom-0 left-[58%] -translate-x-1/2 w-[52vw] max-w-[780px] min-w-[460px] h-[82vh] lg:h-[86vh] max-h-[820px] flex items-end justify-center"
      >
        <Image
          src="/kzelyn-image.png"
          alt="Kzelyn Artillo"
          width={1198}
          height={1313}
          priority
          className="w-full h-full object-contain object-bottom select-none drop-shadow-xs"
          sizes="(max-width: 1024px) 70vw, 780px"
        />
      </div>

      {/* 3. Left-Side Introduction (Positioned cleanly below the K & Z baseline) */}
      <div className="absolute top-[375px] sm:top-[395px] lg:top-[385px] xl:top-[395px] 2xl:top-[415px] left-6 sm:left-10 md:left-12 lg:left-14 xl:left-16 z-20 max-w-[420px] flex flex-col items-start text-left">
        
        {/* Eyebrow Label with Thin Horizontal Line */}
        <div className="flex items-center gap-3.5 mb-4">
          <p className="text-[11px] sm:text-[11.5px] font-medium tracking-[0.16em] uppercase text-[#77716A]">
            BSBA MARKETING MANAGEMENT GRADUATE
          </p>
          <span className="h-[1px] w-20 sm:w-28 bg-[#A9A39B]" aria-hidden="true" />
        </div>

        {/* Main Headline: 60-68px desktop, tight line-height, bold Kzelyn */}
        <h1 className="font-serif text-[38px] sm:text-[46px] lg:text-[54px] xl:text-[62px] font-normal leading-[1.08] text-[#171513] tracking-[-0.01em] mb-4">
          Hello, I&apos;m <strong className="font-bold text-[#171513]">Kzelyn.</strong><br />
          Crafting brands with<br />
          purpose &amp; care.
        </h1>

        {/* Description Paragraph: max 390px, muted gray */}
        <p className="text-[13.5px] sm:text-[14px] font-normal leading-[1.65] text-[#77716A] max-w-[390px] mb-7">
          A marketing graduate passionate about turning creative ideas into real impact through strategy, design, and meaningful connections.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Primary Button */}
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 bg-[#000000] hover:bg-[#171513] text-[#FFFFFF] rounded-full px-6 sm:px-7 py-3 text-[12.5px] font-medium tracking-[0.03em] transition-all duration-300 shadow-xs hover:shadow-sm"
          >
            <span>Explore My Work</span>
            <span className="text-[13px] leading-none">↗</span>
          </a>

          {/* Secondary Button */}
          <a
            href="#about"
            className="inline-flex items-center justify-center bg-transparent hover:bg-[#EBD8D5]/30 text-[#171513] border border-[#171513] rounded-full px-6 sm:px-7 py-3 text-[12.5px] font-medium transition-all duration-300"
          >
            About Me
          </a>
        </div>

      </div>

      {/* 4. Bottom Scroll Indicator (Bottom Left of the Hero) */}
      <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 md:left-12 lg:left-14 xl:left-16 z-20 flex items-center gap-3 text-[11.5px] text-[#77716A] tracking-[0.04em]">
        <a
          href="#about"
          className="w-[26px] h-[26px] rounded-[6px] border border-[#A9A39B] flex items-center justify-center text-[#171513] hover:border-[#171513] transition-colors cursor-pointer"
          aria-label="Scroll down to explore"
        >
          <span className="text-[11px] leading-none">↓</span>
        </a>
        <span>Scroll to explore</span>
        <span className="h-[1px] w-24 sm:w-36 bg-[#A9A39B]" aria-hidden="true" />
      </div>

      {/* 5. Right-Side Information Indicator (Middle-Right of the Hero) */}
      <div className="hidden lg:flex absolute top-[54%] -translate-y-1/2 right-6 sm:right-10 md:right-12 lg:right-14 xl:right-16 z-20 flex-col items-start text-left">
        <div className="border-l border-[#A9A39B] pl-4 sm:pl-5 space-y-2.5 max-w-[175px]">
          <div className="flex items-center gap-2 text-[13px] tracking-[0.1em] font-medium text-[#171513]">
            <span>01</span>
            <span className="text-[#A9A39B]">/</span>
            <span className="text-[#77716A]">04</span>
            <span className="w-8 h-[1px] bg-[#A9A39B] ml-1" aria-hidden="true" />
          </div>
          <p className="text-[12px] sm:text-[12.5px] text-[#77716A] leading-[1.65]">
            Turning ideas into strategies, and strategies into something greater.
          </p>
        </div>
      </div>

    </section>
  );
}
