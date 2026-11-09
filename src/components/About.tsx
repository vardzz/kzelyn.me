'use client';

import Image from 'next/image';

export function About() {
  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 lg:py-36 px-[4.5vw] w-full bg-[#F3EFE9] text-[#171513] select-none"
      aria-label="About Kzelyn"
    >
      <div className="max-w-[1240px] mx-auto w-full">
        {/* Visually hidden heading for screen readers & SEO */}
        <h2 className="sr-only">About Kzelyn Artillo — Biography &amp; Ethos</h2>

        {/* Vogue Magazine Bento Grid (Based on the Reference Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: 7 Columns on Desktop                       */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            
            {/* CARD 1: Wordmark Feature Card (Deep Luxury #171513) */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-[#171513] text-[#F3EFE9] flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
              {/* Top metadata tags */}
              <div className="flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-[#A9A39B] font-sans">
                <span>VERSION 1.0 — BIOGRAPHY</span>
                <span>WORDMARK</span>
              </div>

              {/* Dominant editorial serif wordmark */}
              <div className="my-6 sm:my-8">
                <span className="block font-serif text-[72px] sm:text-[96px] lg:text-[112px] font-[300] tracking-[-0.04em] leading-none text-[#F3EFE9]">
                  kzelyn
                </span>
              </div>

              {/* Supporting narrative micro-copy */}
              <p className="font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#A9A39B] max-w-[460px]">
                A marketing graduate passionate about turning creative intuition into measurable brand affinity through strategic research, artful storytelling, and empathetic communication.
              </p>
            </div>

            {/* CARD 3: Strategic Philosophy & Insight Card (#FFFFFF) */}
            <div className="p-8 sm:p-9 rounded-[32px] bg-[#FFFFFF] border border-[#A9A39B]/30 text-[#171513] flex flex-col justify-between transition-all duration-300 hover:shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="block font-serif text-[56px] sm:text-[68px] font-[350] leading-none text-[#171513] tracking-tight">
                    100%
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#77716A] font-medium block mt-1">
                    Human-Centric Strategy
                  </span>
                </div>

                {/* Decorative editorial icons */}
                <div className="flex items-center gap-2.5 text-[#171513]">
                  <span className="text-[18px]" aria-hidden="true">✦</span>
                  <div className="w-8 h-8 rounded-full border border-[#A9A39B]/50 flex items-center justify-center text-[12px] text-[#77716A]" aria-hidden="true">
                    ◎
                  </div>
                </div>
              </div>

              <p className="font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#77716A]">
                Strategy built on active listening and empirical research. When a brand genuinely understands its audience, customer loyalty and organic conversion happen naturally.
              </p>
            </div>

            {/* BOTTOM SUBGRID: Split Metrics (5A: Stat, 5B: Iconic Floral Asterisk) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6">
              
              {/* CARD 5A: Total Campaigns / Initiatives (7 Cols) */}
              <div className="sm:col-span-7 p-7 rounded-[28px] bg-[#EAE5DD] border border-[#A9A39B]/30 flex flex-col justify-between transition-all duration-300 hover:shadow-xs">
                <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#77716A] font-medium">
                  Campaigns &amp; Initiatives
                </span>
                <div className="mt-4 sm:mt-6">
                  <span className="font-serif text-[48px] sm:text-[56px] font-[350] leading-none text-[#171513]">
                    10+
                  </span>
                  <p className="font-sans text-[12px] text-[#77716A] mt-1">
                    From brand identity to audience research
                  </p>
                </div>
              </div>

              {/* CARD 5B: Iconic Floral Starburst Asterisk (5 Cols) */}
              <div className="sm:col-span-5 p-7 rounded-[28px] bg-[#171513] text-[#F3EFE9] flex items-center justify-center group overflow-hidden transition-all duration-300 hover:shadow-md min-h-[140px]">
                {/* 8-Petal Geometric Floral Starburst SVG (matching the reference motif) */}
                <svg 
                  className="w-16 h-16 sm:w-20 sm:h-20 text-[#AE6965] group-hover:text-[#F3EFE9] group-hover:rotate-45 transition-all duration-700 ease-out" 
                  viewBox="0 0 100 100" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <g transform="translate(50, 50)">
                    {/* 8 Elliptical Petals radiating from center */}
                    <ellipse cx="0" cy="-28" rx="7" ry="18" />
                    <ellipse cx="0" cy="28" rx="7" ry="18" />
                    <ellipse cx="-28" cy="0" rx="18" ry="7" />
                    <ellipse cx="28" cy="0" rx="18" ry="7" />
                    <g transform="rotate(45)">
                      <ellipse cx="0" cy="-28" rx="7" ry="18" />
                      <ellipse cx="0" cy="28" rx="7" ry="18" />
                      <ellipse cx="-28" cy="0" rx="18" ry="7" />
                      <ellipse cx="28" cy="0" rx="18" ry="7" />
                    </g>
                    <circle cx="0" cy="0" r="5" fill="#171513" />
                  </g>
                </svg>
              </div>

            </div>

            {/* CARD 5C: Wide Pill Card (Expertise & Disciplines) */}
            <div className="rounded-full bg-[#FFFFFF] border border-[#A9A39B]/30 px-6 sm:px-8 py-4.5 flex items-center justify-between transition-all duration-300 hover:border-[#171513]/40">
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#171513] text-[#F3EFE9] flex items-center justify-center text-[13px]" aria-hidden="true">
                  ✦
                </div>
                <div>
                  <span className="font-sans text-[13px] font-medium text-[#171513] block">
                    Strategic Brand Architecture
                  </span>
                  <span className="font-sans text-[11.5px] text-[#77716A] block">
                    Consumer Research &amp; Visual Storytelling
                  </span>
                </div>
              </div>

              <span className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-[#77716A] hidden sm:block">
                BSBA &apos;26
              </span>
            </div>

          </div>


          {/* ======================================================== */}
          {/* RIGHT COLUMN: 5 Columns on Desktop                      */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            
            {/* CARD 2: Editorial Portrait Card */}
            <div className="rounded-[32px] overflow-hidden relative aspect-[4/4.6] sm:aspect-[4/4.8] lg:h-[350px] bg-[#EAE5DD] border border-[#A9A39B]/30 group transition-all duration-300 hover:shadow-md">
              <Image
                src="/kz-pic.png"
                alt="Kzelyn Artillo - Editorial Portrait"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/40 via-transparent to-transparent pointer-events-none" />

              {/* Top Corner Pill Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F3EFE9]/90 backdrop-blur-md font-sans text-[10.5px] tracking-[0.16em] uppercase text-[#171513] font-medium border border-white/40">
                  PORTFOLIO / ISSUE 01
                </span>
              </div>

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between text-[#F3EFE9]">
                <span className="font-sans text-[12px] tracking-[0.1em] uppercase font-medium">
                  Kzelyn Artillo
                </span>
                <span className="font-serif italic text-[14px]">
                  marketer.
                </span>
              </div>
            </div>

            {/* CARD 4: Terracotta / Rust Focal Showcase Card (#AE6965) */}
            {/* Matching the red cap feature card from the reference image */}
            <div className="p-8 sm:p-9 rounded-[32px] bg-[#AE6965] text-[#FFFFFF] flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-lg min-h-[300px]">
              {/* Background ambient badge glow */}
              <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />

              {/* Top tag */}
              <div className="flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-white/80 font-sans">
                <span>THE GUIDING PRINCIPLE</span>
                <span>CREED</span>
              </div>

              {/* Large quote */}
              <blockquote className="my-6 font-serif text-[21px] sm:text-[24px] font-[350] leading-[1.3] text-[#FFFFFF]">
                &ldquo;Good marketing feels like a thoughtful recommendation from a trusted friend—never intrusive, always relevant.&rdquo;
              </blockquote>

              {/* Brand stamp footer */}
              <div className="pt-4 border-t border-white/25 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-white/80 font-sans">
                <span>KZELYN ARTILLO</span>
                <span className="font-serif text-[17px] font-light lowercase tracking-wider text-white">
                  artillo ✻
                </span>
              </div>
            </div>

            {/* CARD 6: Audience Impact / Helpful Metric Card (#171513) */}
            <div className="p-8 sm:p-9 rounded-[32px] bg-[#171513] text-[#F3EFE9] flex flex-col justify-between transition-all duration-300 hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#A9A39B] font-medium block">
                    Audience &amp; Brand Reach
                  </span>
                  <span className="font-serif text-[52px] sm:text-[62px] font-[350] leading-none text-[#F3EFE9] block mt-2">
                    2.4M+
                  </span>
                </div>

                {/* Arrow up-right circular link */}
                <a
                  href="#work"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#FFFFFF] text-[#F3EFE9] hover:text-[#171513] border border-white/10 flex items-center justify-center text-[16px] transition-all duration-300 group shadow-xs"
                  aria-label="Explore Projects"
                >
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                </a>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="font-sans text-[12.5px] text-[#A9A39B] mb-3">
                  Cumulative reach &amp; engagement across curated social media campaigns and strategic brand initiatives.
                </p>

                {/* Minimalist Segmented Indicator Bar (Direct reference match) */}
                <div className="flex items-center gap-1.5 w-full">
                  <div className="h-[2px] flex-1 bg-[#F3EFE9] rounded-full" />
                  <div className="h-[2px] flex-1 bg-white/20 rounded-full" />
                  <div className="h-[2px] flex-1 bg-white/20 rounded-full" />
                  <div className="h-[2px] flex-1 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}