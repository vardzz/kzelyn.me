'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full h-[100svh] min-h-[928px] bg-[#F3EFE9] text-[#171513] overflow-hidden select-none"
      aria-label="Hero Section"
    >
      {/* 1. Oversized Typography: KZELYN (Single Horizontal Line across the upper portion) */}
      <div 
        className="absolute top-[11vh] left-0 right-0 w-full px-[4.5vw] flex justify-between items-baseline font-serif text-[19vw] 2xl:text-[310px] font-normal leading-[0.95] tracking-[-0.075em] text-[#171513] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span>K</span>
        <span>Z</span>
        <span>E</span>
        <span>L</span>
        <span>Y</span>
        <span>N</span>
      </div>

      {/* 2. Portrait Cutout: /kzelyn-image.png (Enlarged, completely blocks the letter 'L', bottom: 0) */}
      <div 
        className="pointer-events-none z-10 absolute bottom-0 left-[58%] -translate-x-1/2 w-[57vw] max-w-[960px] min-w-[540px] h-[94vh] max-h-[890px] flex items-end justify-center"
      >
        <Image
          src="/kzelyn-image.png"
          alt="Kzelyn Artillo"
          width={1198}
          height={1313}
          priority
          className="w-full h-full object-contain object-bottom select-none"
          sizes="(max-width: 1024px) 80vw, 960px"
        />
      </div>

      {/* 3. Left-Side Introduction (Positioned at 44-46% viewport height, left: 4.5vw) */}
      <div className="absolute top-[45vh] left-[4.5vw] z-20 w-[550px] max-w-[550px] flex flex-col items-start text-left">
        
        {/* Small Introductory Label with Horizontal Line */}
        <div className="flex items-center gap-4 mb-3.5">
          <p className="font-sans text-[12px] font-medium tracking-[0.04em] uppercase text-[#171513] whitespace-nowrap">
            BSBA MARKETING MANAGEMENT GRADUATE
          </p>
          <span className="h-[1px] w-24 sm:w-32 bg-[#A9A39B]" aria-hidden="true" />
        </div>

        {/* Main Headline: Bodoni Moda, 64px, line-height 1.04, bold on Kzelyn */}
        <h1 className="font-serif text-[46px] sm:text-[54px] lg:text-[60px] xl:text-[64px] font-normal leading-[1.04] text-[#171513] tracking-[-0.035em] mb-0">
          Hello, I&apos;m <strong className="font-bold text-[#171513]">Kzelyn.</strong><br />
          Crafting brands with<br />
          purpose &amp; care.
        </h1>

        {/* Supporting Description: Inter, 16px, line-height 1.6, color #77716A, max-width 390px, mt-5 */}
        <p className="font-sans text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#77716A] max-w-[390px] mt-5 mb-0">
          A marketing graduate passionate about turning creative ideas into real impact through strategy, design, and meaningful connections.
        </p>

        {/* Call-to-Action Buttons: mt-[22px], gap-6 */}
        <div className="flex items-center gap-6 mt-[22px]">
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
      <div className="absolute bottom-[4.5vh] left-[4.5vw] z-20 flex items-center gap-3.5 text-[#77716A] tracking-normal">
        <a
          href="#about"
          className="w-[36px] h-[38px] rounded-[11px] border border-[#A9A39B] flex items-center justify-center text-[#171513] hover:border-[#171513] transition-colors cursor-pointer"
          aria-label="Scroll to explore"
        >
          <span className="text-[18px] leading-none">↓</span>
        </a>
        <span className="font-sans text-[13px] text-[#77716A] whitespace-nowrap">Scroll to explore</span>
        <span className="h-[1px] w-28 sm:w-40 bg-[#A9A39B]" aria-hidden="true" />
      </div>

      {/* 5. Right-Side Information Indicator (Middle-Right of the Hero) */}
      <div className="hidden lg:flex absolute top-[53%] -translate-y-1/2 right-[4.5vw] z-20 flex-col items-start text-left">
        <div className="border-l border-[#A9A39B] pl-6 space-y-2.5 max-w-[190px]">
          <div className="flex items-center gap-2.5 font-sans text-[18px] font-normal text-[#171513]">
            <span className="w-6 h-[1px] bg-[#A9A39B]" aria-hidden="true" />
            <span>01</span>
            <span className="text-[#A9A39B]">/</span>
            <span className="text-[#77716A]">04</span>
          </div>
          <p className="font-sans text-[14px] text-[#77716A] leading-[1.6] max-w-[170px]">
            Turning ideas into strategies, and strategies into something greater.
          </p>
        </div>
      </div>

    </section>
  );
}
