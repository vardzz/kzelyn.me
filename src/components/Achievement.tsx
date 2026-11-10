'use client';

import Image from 'next/image';

export function Achievement() {
  return (
    <section 
      id="achievements" 
      className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center scroll-mt-20 lg:scroll-mt-24 py-12 sm:py-16 lg:py-20 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-[#F3EFE9] text-[#171513] overflow-hidden"
      aria-label="Achievements"
    >
      <div className="max-w-[1360px] mx-auto w-full relative my-auto">
        
        {/* ================= TOP BAR ================= */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 lg:mb-12">
          {/* Left: ACHIEVEMENTS + Hairline */}
          <div className="flex items-center gap-5 sm:gap-6 flex-1 pr-6">
            <span className="font-sans font-medium text-[11px] sm:text-[12px] tracking-[0.24em] text-[#171513] uppercase select-none shrink-0">
              ACHIEVEMENTS
            </span>
            <div className="h-[1px] bg-[#A9A39B]/55 w-32 sm:w-52 md:w-72 max-w-full" aria-hidden="true" />
          </div>

          {/* Right: ✦ ACADEMIC EXCELLENCE */}
          <div className="flex items-center gap-3 shrink-0">
            <svg 
              className="w-3.5 h-3.5 text-[#171513] fill-current" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
            <span className="font-sans font-medium text-[11px] sm:text-[12px] tracking-[0.24em] text-[#171513] uppercase select-none">
              ACADEMIC EXCELLENCE
            </span>
          </div>
        </div>

        {/* ================= MAIN 3-COLUMN EDITORIAL GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* ========== LEFT COLUMN ========== */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch z-10">
            <div>
              {/* Eyebrow */}
              <p className="font-serif italic text-[20px] sm:text-[22px] lg:text-[24px] font-normal text-[#171513] leading-none mb-2.5">
                A Testament to
              </p>

              {/* Main Headline */}
              <h2 className="font-serif text-[38px] sm:text-[44px] lg:text-[48px] xl:text-[54px] font-normal leading-[1.04] tracking-[-0.02em] text-[#171513]">
                Academic<br />Excellence
              </h2>

              {/* Divider Hairline */}
              <div className="w-full max-w-[260px] h-[1px] bg-[#A9A39B]/45 my-5 sm:my-6" aria-hidden="true" />

              {/* Narrative Copy */}
              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#4A453F] leading-[1.7] max-w-[330px]">
                Among a distinguished pool of students, I achieved a spot in the prestigious list of honorees, recognized for my academic performance and dedication.
              </p>
            </div>

            {/* Bottom: 01 / 01 Counter + Horizontal Line */}
            <div className="flex items-center pt-6 sm:pt-8 lg:pt-10">
              <div className="flex items-baseline shrink-0">
                <span className="font-serif italic text-[34px] sm:text-[38px] font-normal text-[#171513] leading-none">
                  01
                </span>
                <span className="font-serif text-[14px] sm:text-[15px] text-[#77716A] font-normal ml-1.5">
                  / 01
                </span>
              </div>
              <div className="h-[1px] bg-[#A9A39B]/55 flex-1 ml-5 sm:ml-7" aria-hidden="true" />
            </div>
          </div>

          {/* ========== CENTER COLUMN: DOCUMENT SHOWCASE & AURA ========== */}
          <div className="lg:col-span-4 flex items-center justify-center relative py-4 lg:py-0">
            
            {/* Concentric Circular Rings in Background */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 flex items-center justify-center" 
              aria-hidden="true"
            >
              {/* Inner Circle */}
              <div className="w-[380px] h-[380px] sm:w-[430px] sm:h-[430px] lg:w-[460px] lg:h-[460px] rounded-full border border-[#A9A39B]/35 absolute" />
              {/* Outer Circle */}
              <div className="w-[530px] h-[530px] sm:w-[590px] sm:h-[590px] lg:w-[630px] lg:h-[630px] rounded-full border border-[#A9A39B]/25 absolute" />
            </div>

            {/* Document Frame */}
            <div className="relative w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[370px] xl:max-w-[385px] bg-[#FBF9F4] rounded-[2px] shadow-[0_20px_55px_rgba(23,21,19,0.13),0_6px_18px_rgba(23,21,19,0.06)] border border-[#171513]/15 p-[2px] sm:p-[3px] transition-transform duration-500 hover:scale-[1.015]">
              <Image
                src="/CMMS-pic.png"
                alt="List of Honorees - Center for Professional Advancement and Continuing Education, Inc."
                width={1149}
                height={1369}
                priority
                className="w-full h-auto object-cover rounded-[1px] block"
              />
            </div>
          </div>

          {/* ========== RIGHT COLUMN ========== */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch z-10 lg:pl-4 xl:pl-6">
            
            {/* Top Block with Left Vertical Hairline */}
            <div className="border-l border-[#A9A39B]/55 pl-5 sm:pl-6">
              <span className="font-sans font-medium text-[10px] sm:text-[11px] tracking-[0.24em] text-[#77716A] uppercase mb-3 block select-none">
                LIST OF HONOREES
              </span>

              <h3 className="font-serif text-[21px] sm:text-[23px] lg:text-[25px] font-normal leading-[1.22] text-[#171513] mb-3.5">
                Center for Professional<br />
                Advancement and<br />
                Continuing Education, Inc.
              </h3>

              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#4A453F] leading-[1.7] max-w-[330px]">
                Recognized for outstanding academic performance, a reflection of hard work, discipline, and commitment to excellence.
              </p>
            </div>

            {/* Bottom Block: Star, Hairline, Tag & Subtitle */}
            <div className="pt-6 sm:pt-8 lg:pt-10">
              {/* Star + Hairline extending rightwards */}
              <div className="flex items-center gap-4 mb-3">
                <svg 
                  className="w-3.5 h-3.5 text-[#171513] fill-current shrink-0" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
                </svg>
                <div className="h-[1px] bg-[#A9A39B]/55 flex-1" aria-hidden="true" />
              </div>

              {/* Tag */}
              <span className="font-sans font-medium text-[10px] sm:text-[11px] tracking-[0.24em] text-[#77716A] uppercase mb-1 block select-none">
                RECOGNITION
              </span>

              {/* Subtitle */}
              <p className="font-serif italic text-[16px] sm:text-[18px] lg:text-[19px] font-normal text-[#171513] pb-1">
                A Milestone in My Academic Journey
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Achievement;
