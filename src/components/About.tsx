'use client';

import Image from 'next/image';

export function About() {
  return (
    <section 
      id="about" 
      className="py-28 sm:py-36 lg:py-44 px-[4.5vw] w-full bg-[#F3EFE9] text-[#171513] select-none"
      aria-label="About Kzelyn Artillo"
    >
      {/* Visually hidden heading for screen readers & SEO */}
      <h2 className="sr-only">About Kzelyn Artillo — Biography &amp; Ethos</h2>

      {/* Aesthetic Bento Box Container: Centered, Vertical Magazine Rectangle Silhouette */}
      <div className="max-w-[1040px] mx-auto w-full">
        
        {/* The Bento Grid: Exact Top and Bottom Alignment (930px on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: 7 Columns (Total Height = 930px on Desktop) */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            
            {/* CARD 1: Wordmark Feature Card (360px on desktop) */}
            <div className="lg:h-[360px] p-8 sm:p-10 rounded-[30px] sm:rounded-[34px] bg-[#171513] text-[#F3EFE9] flex flex-col justify-between transition-all duration-300 hover:shadow-xl border border-white/5">
              {/* Top metadata tags */}
              <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-[#A9A39B] font-sans">
                <span>VERSION 1.0 — ARCHIVE</span>
                <span>BIOGRAPHY</span>
              </div>

              {/* Dominant editorial serif wordmark */}
              <div className="my-auto py-2">
                <span className="block font-serif text-[72px] sm:text-[96px] lg:text-[108px] font-[300] tracking-[-0.04em] leading-none text-[#F3EFE9]">
                  biography
                </span>
                <span className="block font-sans text-[11px] tracking-[0.16em] uppercase text-[#A9A39B] mt-2 font-medium">
                  Strategic Marketing &amp; Brand Insights
                </span>
              </div>

              {/* Accurate professional narrative */}
              <p className="font-sans text-[13px] sm:text-[13.5px] leading-relaxed text-[#A9A39B] max-w-[440px]">
                A marketing strategist blending consumer research, audience persona mapping, and creative empathy to transform brand concepts into enduring customer connections.
              </p>
            </div>

            {/* CARD 2: Real Metric & Strategic Insight Card (240px on desktop) */}
            <div className="lg:h-[240px] p-7 sm:p-8 rounded-[30px] sm:rounded-[34px] bg-[#FFFFFF] border border-[#A9A39B]/30 text-[#171513] flex flex-col justify-between transition-all duration-300 hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-[52px] sm:text-[62px] font-[350] leading-none text-[#171513] tracking-tight">
                      +45%
                    </span>
                    <span className="font-sans text-[13px] text-[#77716A] font-medium">
                      Organic Reach
                    </span>
                  </div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#77716A] font-medium block mt-1">
                    Omnichannel Campaign Performance
                  </span>
                </div>

                {/* Decorative editorial icons */}
                <div className="flex items-center gap-2 text-[#171513]">
                  <span className="text-[17px]" aria-hidden="true">✦</span>
                  <div className="w-7 h-7 rounded-full border border-[#A9A39B]/50 flex items-center justify-center text-[11px] text-[#77716A]" aria-hidden="true">
                    ◎
                  </div>
                </div>
              </div>

              <p className="font-sans text-[13px] sm:text-[13.5px] leading-relaxed text-[#77716A]">
                Achieved a 28% engagement uplift through qualitative audience surveying, tailored content distribution schedules, and community-first brand storytelling.
              </p>
            </div>

            {/* CARD 3: Split Subgrid (190px on desktop) */}
            <div className="lg:h-[190px] grid grid-cols-1 sm:grid-cols-12 gap-5">
              
              {/* CARD 3A: Total Campaigns Led / Supported (7 Cols) */}
              <div className="sm:col-span-7 p-6 sm:p-7 rounded-[28px] bg-[#EAE5DD] border border-[#A9A39B]/30 flex flex-col justify-between transition-all duration-300 hover:shadow-xs">
                <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#77716A] font-medium">
                  Campaigns &amp; Decks
                </span>
                <div className="mt-2">
                  <span className="font-serif text-[44px] sm:text-[50px] font-[350] leading-none text-[#171513]">
                    10+
                  </span>
                  <p className="font-sans text-[12px] text-[#77716A] mt-1">
                    End-to-end strategy, research &amp; execution
                  </p>
                </div>
              </div>

              {/* CARD 3B: Iconic Floral Starburst Asterisk (5 Cols) */}
              <div className="sm:col-span-5 p-6 rounded-[28px] bg-[#171513] text-[#F3EFE9] flex items-center justify-center group overflow-hidden transition-all duration-300 hover:shadow-md border border-white/5 min-h-[140px] sm:min-h-0">
                {/* 8-Petal Geometric Floral Starburst SVG (matching the reference motif) */}
                <svg 
                  className="w-14 h-14 sm:w-16 sm:h-16 text-[#AE6965] group-hover:text-[#F3EFE9] group-hover:rotate-45 transition-all duration-700 ease-out" 
                  viewBox="0 0 100 100" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <g transform="translate(50, 50)">
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

            {/* CARD 4: Wide Pill Card (80px on desktop) */}
            <div className="lg:h-[80px] rounded-full bg-[#FFFFFF] border border-[#A9A39B]/30 px-6 sm:px-8 py-3.5 flex items-center justify-between transition-all duration-300 hover:border-[#171513]/40 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#171513] text-[#F3EFE9] flex items-center justify-center text-[12px]" aria-hidden="true">
                  ✦
                </div>
                <div>
                  <span className="font-sans text-[12.5px] sm:text-[13px] font-medium text-[#171513] block">
                    Strategic Brand Architecture
                  </span>
                  <span className="font-sans text-[11px] text-[#77716A] block">
                    Persona Research · GTM Strategy · Visual Voice
                  </span>
                </div>
              </div>

              <span className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-[#77716A] hidden sm:block">
                BSBA &apos;26
              </span>
            </div>

          </div>


          {/* ======================================================== */}
          {/* RIGHT COLUMN: 5 Columns (Total Height = 930px on Desktop) */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* CARD A: Editorial Portrait Card (360px on desktop - EXACTLY matches Card 1) */}
            <div className="lg:h-[360px] rounded-[30px] sm:rounded-[34px] overflow-hidden relative aspect-[4/4.5] sm:aspect-auto bg-[#EAE5DD] border border-[#A9A39B]/30 group transition-all duration-300 hover:shadow-xl">
              <Image
                src="/kz-pic.png"
                alt="Kzelyn Artillo - Marketer"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 450px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/50 via-transparent to-transparent pointer-events-none" />

              {/* Top Corner Pill Tag */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#F3EFE9]/90 backdrop-blur-md font-sans text-[10.5px] tracking-[0.16em] uppercase text-[#171513] font-medium border border-white/50 shadow-xs">
                  PORTFOLIO / ISSUE 01
                </span>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-5 left-6 right-6 z-10 flex items-center justify-between text-[#F3EFE9]">
                <div>
                  <span className="font-sans text-[12.5px] tracking-[0.1em] uppercase font-medium block">
                    Creative Strategist
                  </span>
                  <span className="font-sans text-[11px] text-[#A9A39B] block">
                    Marketing Management &middot; CMMS
                  </span>
                </div>
                <span className="font-serif italic text-[15px]">
                  editorial.
                </span>
              </div>
            </div>

            {/* CARD B: Terracotta Guiding Principle Card (330px on desktop) */}
            {/* Matching the red cap feature card from the reference image */}
            <div className="lg:h-[330px] p-8 sm:p-9 rounded-[30px] sm:rounded-[34px] bg-[#AE6965] text-[#FFFFFF] flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-xl">
              {/* Subtle ambient luxury light bloom */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />

              {/* Top metadata */}
              <div className="flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-white/80 font-sans">
                <span>THE GUIDING PRINCIPLE</span>
                <span>CREED</span>
              </div>

              {/* Real personal guiding quote */}
              <blockquote className="my-auto py-3 font-serif text-[20px] sm:text-[23px] font-[350] leading-[1.32] text-[#FFFFFF]">
                &ldquo;Good marketing feels like a thoughtful recommendation from a trusted friend—never intrusive, always relevant.&rdquo;
              </blockquote>

              {/* Brand stamp footer */}
              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-white/80 font-sans">
                <span>CORE ETHOS</span>
                <span className="font-serif text-[17px] font-light lowercase tracking-wider text-white">
                  artillo ✻
                </span>
              </div>
            </div>

            {/* CARD C: Audience Impact & Survey Research Card (200px on desktop - EXACTLY aligns bottom with Card 4!) */}
            <div className="lg:h-[200px] p-7 sm:p-8 rounded-[30px] sm:rounded-[34px] bg-[#171513] text-[#F3EFE9] flex flex-col justify-between transition-all duration-300 hover:shadow-xl border border-white/5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#A9A39B] font-medium block">
                    Consumer Research Scope
                  </span>
                  <div className="flex items-baseline gap-2.5 mt-1.5">
                    <span className="font-serif text-[48px] sm:text-[56px] font-[350] leading-none text-[#F3EFE9]">
                      200+
                    </span>
                    <span className="font-sans text-[12.5px] text-[#A9A39B]">
                      Responses Synthesized
                    </span>
                  </div>
                </div>

                {/* Arrow up-right circular link */}
                <a
                  href="#achievements"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFFFFF] text-[#F3EFE9] hover:text-[#171513] border border-white/10 flex items-center justify-center text-[15px] transition-all duration-300 group shadow-xs shrink-0"
                  aria-label="View Academic Achievements"
                >
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                </a>
              </div>

              <div className="mt-2 pt-3.5 border-t border-white/10">
                <p className="font-sans text-[11.5px] sm:text-[12px] text-[#A9A39B] mb-2.5 leading-normal">
                  Informed competitive benchmarking &amp; customer persona mapping for data-driven campaign rollouts.
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