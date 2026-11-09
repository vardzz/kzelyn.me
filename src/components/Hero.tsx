'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full h-[100svh] min-h-[700px] max-h-[1050px] bg-[#F3EFE9] text-[#171513] overflow-hidden select-none"
      aria-label="Hero Section"
    >
      {/* 1. Oversized Typography: KZELYN (Single Horizontal Line across the upper portion) */}
      <div 
        className="absolute top-[75px] sm:top-[80px] lg:top-[75px] xl:top-[72px] left-0 right-0 w-full px-[4.5vw] flex justify-between items-baseline font-serif text-[18.5vw] xl:text-[235px] 2xl:text-[255px] font-normal leading-none tracking-[-0.075em] text-[#171513] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span>K</span>
        <span>Z</span>
        <span>E</span>
        <span>L</span>
        <span>Y</span>
        <span>N</span>
      </div>

      {/* 2. Portrait Cutout: /kzelyn-image.png (Enlarged and positioned to completely block the letter 'L') */}
      <div 
        className="pointer-events-none z-10 absolute top-[60px] sm:top-[55px] lg:top-[50px] bottom-0 left-[56.5%] sm:left-[57%] lg:left-[57.5%] -translate-x-1/2 w-[58vw] max-w-[960px] min-w-[560px] flex items-end justify-center overflow-visible"
      >
        <Image
          src="/kzelyn-image.png"
          alt="Kzelyn Artillo"
          width={1198}
          height={1313}
          priority
          className="w-full h-auto min-h-[780px] sm:min-h-[860px] lg:min-h-[920px] xl:min-h-[980px] object-contain object-top select-none"
          sizes="(max-width: 1024px) 85vw, 960px"
        />
      </div>

      {/* 3. Left-Side Introduction (Positioned right below the Z baseline, fully visible within 100% viewport zoom) */}
      <div className="absolute top-[320px] sm:top-[330px] lg:top-[335px] xl:top-[345px] left-[4.5vw] z-20 w-[540px] max-w-[560px] flex flex-col items-start text-left">
        
        {/* Small Introductory Label with Horizontal Line */}
        <div className="flex items-center gap-3.5 mb-3">
          <p className="font-sans text-[11px] sm:text-[11.5px] font-medium tracking-[0.04em] uppercase text-[#171513] whitespace-nowrap">
            BSBA MARKETING MANAGEMENT GRADUATE
          </p>
          <span className="h-[1px] w-24 sm:w-36 bg-[#A9A39B]" aria-hidden="true" />
        </div>

        {/* Main Headline: Exactly 3 lines, Bodoni Moda, bold on Kzelyn */}
        <h1 className="font-serif text-[40px] sm:text-[44px] lg:text-[48px] xl:text-[52px] font-normal leading-[1.08] text-[#171513] tracking-[-0.025em] mb-3.5">
          Hello, I&apos;m <strong className="font-bold text-[#171513]">Kzelyn.</strong><br />
          Crafting brands with<br />
          purpose &amp; care.
        </h1>

        {/* Supporting Description: Inter, 15px, line-height 1.6, color #77716A, max-width 390px */}
        <p className="font-sans text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#77716A] max-w-[390px] mb-6">
          A marketing graduate passionate about turning creative ideas into real impact through strategy, design, and meaningful connections.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex items-center gap-5">
          {/* Primary CTA */}
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2.5 bg-[#000000] hover:bg-[#1a1817] text-[#FFFFFF] rounded-full h-[46px] px-[30px] font-sans text-[13px] font-medium tracking-normal transition-all duration-300 shadow-xs hover:shadow-sm"
          >
            <span>Explore My Work</span>
            <span className="text-[14px] leading-none">↗</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#about"
            className="inline-flex items-center justify-center bg-transparent hover:bg-[#000000] text-[#171513] hover:text-[#FFFFFF] border border-[#77716A] rounded-full h-[46px] px-[32px] font-sans text-[13px] font-normal transition-all duration-300"
          >
            About Me
          </a>
        </div>

      </div>

      {/* 4. Scroll Indicator (Bottom Left of the Hero) */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-9 left-[4.5vw] z-20 flex items-center gap-3 text-[#77716A] tracking-normal">
        <a
          href="#about"
          className="w-[34px] h-[36px] rounded-[10px] border border-[#A9A39B] flex items-center justify-center text-[#171513] hover:border-[#171513] transition-colors cursor-pointer"
          aria-label="Scroll to explore"
        >
          <span className="text-[16px] leading-none">↓</span>
        </a>
        <span className="font-sans text-[13px] text-[#77716A] whitespace-nowrap">Scroll to explore</span>
        <span className="h-[1px] w-24 sm:w-36 bg-[#A9A39B]" aria-hidden="true" />
      </div>

      {/* 5. Right-Side Information Indicator (Middle-Right of the Hero) */}
      <div className="hidden lg:flex absolute top-[52%] -translate-y-1/2 right-[4.5vw] z-20 flex-col items-start text-left">
        <div className="border-l border-[#A9A39B] pl-5 space-y-2 max-w-[180px]">
          <div className="flex items-center gap-2 font-sans text-[17px] font-normal text-[#171513]">
            <span className="w-5 h-[1px] bg-[#A9A39B]" aria-hidden="true" />
            <span>01</span>
            <span className="text-[#A9A39B]">/</span>
            <span className="text-[#77716A]">04</span>
          </div>
          <p className="font-sans text-[13px] text-[#77716A] leading-[1.6] max-w-[165px]">
            Turning ideas into strategies, and strategies into something greater.
          </p>
        </div>
      </div>

    </section>
  );
}
