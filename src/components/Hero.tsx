'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[100dvh] bg-paper text-espresso overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 lg:pt-24 pb-8 sm:pb-10 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 select-none"
      aria-label="Hero Introduction"
    >
      {/* 1. Giant Backdrop Typography: K Z E L Y N */}
      <div 
        className="absolute top-[10%] sm:top-[9%] lg:top-[7%] left-0 right-0 w-full flex justify-between items-baseline px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 font-serif text-[17vw] sm:text-[18vw] lg:text-[18vw] xl:text-[230px] font-normal leading-none tracking-normal text-espresso pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span>K</span>
        <span>Z</span>
        <span>E</span>
        <span>L</span>
        <span>Y</span>
        <span>N</span>
      </div>

      {/* 2. Foreground Portrait Cutout: /public/kzelyn-image.png */}
      <div 
        className="pointer-events-none z-10 lg:absolute lg:bottom-0 lg:left-[59%] lg:-translate-x-1/2 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[580px] xl:max-w-[650px] 2xl:max-w-[700px] mx-auto mt-6 lg:mt-0 flex items-end justify-center"
      >
        <Image
          src="/kzelyn-image.png"
          alt="Kzelyn Artillo"
          width={1198}
          height={1313}
          priority
          className="w-full h-auto max-h-[75vh] sm:max-h-[78vh] lg:max-h-[82vh] object-contain object-bottom select-none drop-shadow-sm"
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 580px, 700px"
        />
      </div>

      {/* 3. Main Content Container (Left Column & Right Column) */}
      <div className="relative z-20 w-full flex-1 flex flex-col justify-between mt-auto pt-6 lg:pt-16">
        
        {/* Middle/Lower Row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end flex-1 pb-4 lg:pb-8">
          
          {/* Left Column: Eyebrow, Headline, Paragraph, Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center max-w-[500px]">
            
            {/* Eyebrow Label with Horizontal Hairline */}
            <div className="flex items-center gap-4 mb-5">
              <p className="text-[10.5px] sm:text-[11.5px] font-medium tracking-[0.16em] uppercase text-oak">
                BSBA Marketing Management Graduate
              </p>
              <span className="h-[1px] w-20 sm:w-28 bg-line" aria-hidden="true" />
            </div>

            {/* Headline matching mockup typography */}
            <h1 className="font-serif text-[40px] sm:text-[48px] lg:text-[52px] xl:text-[58px] font-normal leading-[1.08] text-espresso tracking-[-0.01em] mb-5">
              Hello, I&apos;m <strong className="font-bold text-espresso">Kzelyn.</strong><br />
              Crafting brands with<br />
              purpose &amp; care.
            </h1>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14.5px] font-normal leading-[1.7] text-espresso/70 max-w-[390px] mb-7">
              A marketing graduate passionate about turning creative ideas into real impact through strategy, design, and meaningful connections.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 bg-espresso hover:bg-rust text-paper rounded-full px-6 sm:px-7 py-3 text-[12.5px] sm:text-[13px] font-medium tracking-[0.03em] transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <span>Explore My Work</span>
                <span className="text-[13px] leading-none">↗</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center bg-transparent hover:bg-rose-soft/40 text-espresso border border-line hover:border-espresso rounded-full px-6 sm:px-7 py-3 text-[12.5px] sm:text-[13px] font-medium transition-all duration-300"
              >
                About Me
              </a>
            </div>

            {/* Scroll to Explore (Desktop view) */}
            <div className="hidden sm:flex items-center gap-3 text-[11.5px] text-espresso/70 tracking-[0.04em]">
              <a
                href="#about"
                className="w-7 h-7 rounded-full border border-line flex items-center justify-center text-espresso hover:border-espresso transition-colors cursor-pointer"
                aria-label="Scroll down to explore"
              >
                <span className="text-[11px] leading-none">↓</span>
              </a>
              <span>Scroll to explore</span>
              <span className="h-[1px] w-28 sm:w-36 bg-line/80" aria-hidden="true" />
            </div>

          </div>

          {/* Center Column Spacer on Desktop */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* Right Column: "01 / 04" Widget */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-end items-end pb-8 z-20">
            <div className="border-l border-line pl-4 sm:pl-5 space-y-2.5 max-w-[185px] text-left">
              <div className="flex items-center gap-2 text-[13px] tracking-[0.1em] font-medium text-espresso">
                <span>01</span>
                <span className="text-line">/</span>
                <span className="text-oak">04</span>
              </div>
              <div className="w-12 h-[1px] bg-line/70" aria-hidden="true" />
              <p className="text-[12px] sm:text-[12.5px] text-espresso/70 leading-[1.65]">
                Turning ideas into strategies, and strategies into something greater.
              </p>
            </div>
          </div>

        </div>

        {/* Mobile scroll-to-explore at the bottom */}
        <div className="sm:hidden flex items-center justify-center gap-3 text-[11.5px] text-espresso/70 tracking-[0.04em] pt-4 z-20">
          <a
            href="#about"
            className="w-7 h-7 rounded-full border border-line flex items-center justify-center text-espresso"
            aria-label="Scroll down to explore"
          >
            <span className="text-[11px] leading-none">↓</span>
          </a>
          <span>Scroll to explore</span>
          <span className="h-[1px] w-20 bg-line/80" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
