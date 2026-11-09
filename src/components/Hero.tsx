'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] w-full bg-paper text-espresso overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28"
      aria-label="Hero Introduction"
    >
      {/* 1. Giant Backdrop Typography: K Z E L Y N */}
      <div 
        className="absolute top-[8%] sm:top-[6%] lg:top-[3%] left-0 right-0 w-full flex justify-between items-baseline px-4 sm:px-8 lg:px-14 xl:px-20 font-serif text-[18vw] sm:text-[19vw] lg:text-[18vw] xl:text-[230px] font-normal leading-none tracking-tight text-espresso pointer-events-none select-none z-0 opacity-[0.98]"
        aria-hidden="true"
      >
        <span>K</span>
        <span>Z</span>
        <span>E</span>
        <span>L</span>
        <span>Y</span>
        <span>N</span>
      </div>

      {/* Main Grid / Layout Container */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto flex-1 flex flex-col justify-between pt-4 lg:pt-8">
        
        {/* Top/Middle Section with 3 Elements: Left text, Center Model, Right Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end flex-1 min-h-[580px] lg:min-h-[660px]">
          
          {/* Left Column (Editorial Intro & Actions) - 6 cols */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center z-20 pt-8 sm:pt-12 lg:pt-14 pb-4">
            
            {/* Eyebrow Label with Horizontal Hairline */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[11px] sm:text-[12px] font-medium tracking-[0.16em] uppercase text-espresso/70">
                BSBA Marketing Management Graduate
              </p>
              <span className="h-[1px] w-16 sm:w-24 bg-line" aria-hidden="true" />
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[38px] sm:text-[48px] lg:text-[54px] xl:text-[62px] font-light leading-[1.08] text-espresso tracking-[-0.01em] mb-6">
              Hello, I&apos;m <strong className="font-semibold text-espresso">Kzelyn.</strong><br />
              Crafting brands with<br />
              purpose &amp; care.
            </h1>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-espresso/75 max-w-[420px] mb-8">
              A marketing graduate passionate about turning creative ideas into real impact through strategy, design, and meaningful connections.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 bg-espresso hover:bg-rust text-paper rounded-full px-7 py-3.5 text-[13px] font-medium tracking-[0.03em] transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.99]"
              >
                <span>Explore My Work</span>
                <span className="text-[14px]">↗</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center bg-transparent hover:bg-rose-soft/40 text-espresso border border-espresso/25 hover:border-espresso rounded-full px-7 py-3.5 text-[13px] font-medium transition-all duration-300"
              >
                About Me
              </a>
            </div>

            {/* Bottom Left "Scroll to explore" */}
            <div className="hidden sm:flex items-center gap-3 text-[12px] text-espresso/70 tracking-[0.04em]">
              <a
                href="#about"
                className="w-7 h-7 rounded-full border border-line flex items-center justify-center text-espresso hover:border-espresso transition-colors"
                aria-label="Scroll down to explore"
              >
                <span className="text-[11px] leading-none">↓</span>
              </a>
              <span>Scroll to explore</span>
              <span className="h-[1px] w-24 sm:w-32 bg-line/80" aria-hidden="true" />
            </div>

          </div>

          {/* Center Column Spacer on Desktop */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* Right Column: "01 / 04" Widget - 3 cols */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-center items-end pb-16 z-20">
            <div className="border-l border-line pl-5 space-y-3 max-w-[190px] text-left">
              <div className="flex items-center gap-2 text-[13px] tracking-[0.12em] font-medium text-espresso">
                <span>01</span>
                <span className="text-line">/</span>
                <span className="text-oak">04</span>
              </div>
              <p className="text-[12.5px] text-espresso/70 leading-[1.65]">
                Turning ideas into strategies, and strategies into something greater.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* 2. Foreground Portrait Cutout: kzelyn-image.png */}
      <div 
        className="pointer-events-none z-10 lg:absolute lg:bottom-0 lg:left-[54%] lg:-translate-x-1/2 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[640px] mx-auto mt-6 lg:mt-0 flex justify-center items-end"
      >
        <Image
          src="/kzelyn-image.png"
          alt="Kzelyn Artillo"
          width={1198}
          height={1313}
          priority
          className="w-full h-auto object-contain object-bottom select-none drop-shadow-sm"
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 560px, 640px"
        />
      </div>

      {/* Mobile scroll-to-explore at the bottom */}
      <div className="sm:hidden flex items-center justify-center gap-3 text-[12px] text-espresso/70 tracking-[0.04em] pt-4 z-20">
        <a
          href="#about"
          className="w-7 h-7 rounded-full border border-line flex items-center justify-center text-espresso"
          aria-label="Scroll down to explore"
        >
          <span className="text-[11px] leading-none">↓</span>
        </a>
        <span>Scroll to explore</span>
      </div>

    </section>
  );
}
