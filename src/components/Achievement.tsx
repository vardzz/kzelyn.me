'use client';

import Image from 'next/image';

export function Achievement() {
  return (
    <section 
      id="achievements" 
      className="relative w-full py-20 sm:py-24 lg:py-32 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-[#F3EFE9] text-[#171513] overflow-hidden"
      aria-label="Achievements"
    >
      <div className="max-w-[1360px] mx-auto w-full relative">
        
        {/* ================= TOP BAR ================= */}
        <div className="flex items-center justify-between mb-12 sm:mb-16 lg:mb-20">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* ========== LEFT COLUMN ========== */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch z-10">
            <div>
              {/* Eyebrow */}
              <p className="font-serif italic text-[22px] sm:text-[24px] lg:text-[26px] font-normal text-[#171513] leading-none mb-3">
                A Testament to
              </p>

              {/* Main Headline */}
              <h2 className="font-serif text-[42px] sm:text-[50px] lg:text-[56px] xl:text-[62px] font-normal leading-[1.02] tracking-[-0.02em] text-[#171513]">
                Academic<br />Excellence
              </h2>

              {/* Divider Hairline */}
              <div className="w-full max-w-[280px] h-[1px] bg-[#A9A39B]/45 my-7 sm:my-8" aria-hidden="true" />

              {/* Narrative Copy */}
              <p className="font-sans text-[13px] sm:text-[14px] text-[#4A453F] leading-[1.75] max-w-[340px]">
                Among a distinguished pool of students, I achieved a spot in the prestigious list of honorees, recognized for my academic performance and dedication.
              </p>
            </div>

            {/* Bottom: 01 / 01 Counter + Horizontal Line */}
            <div className="flex items-center pt-10 sm:pt-14 lg:pt-20">
              <div className="flex items-baseline shrink-0">
                <span className="font-serif italic text-[38px] sm:text-[44px] font-normal text-[#171513] leading-none">
                  01
                </span>
                <span className="font-serif text-[15px] sm:text-[16px] text-[#77716A] font-normal ml-1.5">
                  / 01
                </span>
              </div>
              <div className="h-[1px] bg-[#A9A39B]/55 flex-1 ml-6 sm:ml-8" aria-hidden="true" />
            </div>
          </div>

          {/* ========== CENTER COLUMN: DOCUMENT SHOWCASE & AURA ========== */}
          <div className="lg:col-span-4 flex items-center justify-center relative py-6 lg:py-0">
            
            {/* Concentric Circular Rings in Background */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 flex items-center justify-center" 
              aria-hidden="true"
            >
              {/* Inner Circle */}
              <div className="w-[440px] h-[440px] sm:w-[500px] sm:h-[500px] lg:w-[530px] lg:h-[530px] rounded-full border border-[#A9A39B]/35 absolute" />
              {/* Outer Circle */}
              <div className="w-[620px] h-[620px] sm:w-[700px] sm:h-[700px] lg:w-[740px] lg:h-[740px] rounded-full border border-[#A9A39B]/25 absolute" />
            </div>

            {/* Document Frame */}
            <div className="relative w-full max-w-[380px] sm:max-w-[430px] lg:max-w-[440px] bg-[#FBF9F4] rounded-[2px] shadow-[0_24px_65px_rgba(23,21,19,0.14),0_6px_20px_rgba(23,21,19,0.06)] border border-[#171513]/15 p-[2px] sm:p-[3px] transition-transform duration-500 hover:scale-[1.015]">
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
            <div className="border-l border-[#A9A39B]/55 pl-6 sm:pl-7">
              <span className="font-sans font-medium text-[10px] sm:text-[11px] tracking-[0.24em] text-[#77716A] uppercase mb-4 block select-none">
                LIST OF HONOREES
              </span>

              <h3 className="font-serif text-[23px] sm:text-[26px] lg:text-[28px] font-normal leading-[1.22] text-[#171513] mb-5">
                Center for Professional<br />
                Advancement and<br />
                Continuing Education, Inc.
              </h3>

              <p className="font-sans text-[13px] sm:text-[14px] text-[#4A453F] leading-[1.75] max-w-[340px]">
                Recognized for outstanding academic performance, a reflection of hard work, discipline, and commitment to excellence.
              </p>
            </div>

            {/* Bottom Block: Star, Hairline, Tag & Subtitle */}
            <div className="pt-10 sm:pt-14 lg:pt-20">
              {/* Star + Hairline extending rightwards */}
              <div className="flex items-center gap-4 mb-4">
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
              <span className="font-sans font-medium text-[10px] sm:text-[11px] tracking-[0.24em] text-[#77716A] uppercase mb-1.5 block select-none">
                RECOGNITION
              </span>

              {/* Subtitle */}
              <p className="font-serif italic text-[17px] sm:text-[19px] lg:text-[20px] font-normal text-[#171513]">
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

