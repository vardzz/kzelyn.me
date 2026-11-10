'use client';

import Image from 'next/image';

export function Achievement() {
  return (
    <section 
      id="achievements" 
      className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-28 sm:pb-36 lg:pb-44 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-[#F3EFE9] text-[#171513] overflow-hidden scroll-mt-0"
      aria-label="Achievements"
    >
      <div className="max-w-[1360px] mx-auto w-full relative">
        
        {/* ================= TOP BAR ================= */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 lg:mb-12">
          {/* Left: ACHIEVEMENTS + Hairline */}
          <div className="flex items-center gap-5 sm:gap-6 flex-1 pr-6">
            <span className="font-sans font-medium text-[11px] sm:text-[12px] tracking-[0.24em] text-[#171513] uppercase select-none shrink-0">
              ACHIEVEMENTS
            </span>
            <div className="h-[1px] bg-[#A9A39B]/55 w-32 sm:w-52 md:w-72 max-w-full" aria-hidden="true" />
          </div>

          {/* Right: ✦ CMMS CERTIFICATION */}
          <div className="flex items-center gap-3 shrink-0">
            <svg 
              className="w-3.5 h-3.5 text-[#171513] fill-current" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
            <span className="font-sans font-medium text-[11px] sm:text-[12px] tracking-[0.24em] text-[#171513] uppercase select-none">
              CMMS CERTIFICATION
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
              <h2 className="font-serif text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[50px] font-normal leading-[1.05] tracking-[-0.02em] text-[#171513]">
                Certified Marketing<br />Specialist
              </h2>

              {/* Divider Hairline */}
              <div className="w-full max-w-[260px] h-[1px] bg-[#A9A39B]/45 my-5 sm:my-6" aria-hidden="true" />

              {/* Narrative Copy */}
              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#4A453F] leading-[1.7] max-w-[330px]">
                Officially passed the Certified Marketing Management Specialist (CMMS) examination, demonstrating proven expertise in strategic brand planning, consumer analytics, and marketing management.
              </p>
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

            {/* Document Frame (Clickable Link to Official Announcement) */}
            <a
              href="https://www.facebook.com/share/1CnJRVNJTv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Official CMMS Examination Passers Announcement on Facebook (opens in new tab)"
              className="group relative w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[370px] xl:max-w-[385px] bg-[#FBF9F4] rounded-[2px] shadow-[0_20px_55px_rgba(23,21,19,0.13),0_6px_18px_rgba(23,21,19,0.06)] border border-[#171513]/15 p-[2px] sm:p-[3px] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_26px_65px_rgba(23,21,19,0.18),0_8px_24px_rgba(23,21,19,0.08)] block cursor-pointer"
            >
              <Image
                src="/CMMS-pic.png"
                alt="Official Examination Passers - Certified Marketing Management Specialist (CMMS), CPACE"
                width={1149}
                height={1369}
                priority
                className="w-full h-auto object-cover rounded-[1px] block transition-opacity duration-300 group-hover:opacity-95"
              />

              {/* Discreet hover indicator */}
              <div 
                className="absolute top-3 right-3 bg-[#171513]/85 text-[#F3EFE9] text-[10px] font-sans font-medium tracking-widest uppercase px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 shadow-md pointer-events-none backdrop-blur-xs"
                aria-hidden="true"
              >
                <span>View Post</span>
                <span className="text-[11px] leading-none">↗</span>
              </div>
            </a>
          </div>

          {/* ========== RIGHT COLUMN ========== */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch z-10 lg:pl-4 xl:pl-6">
            
            {/* Top Block with Left Vertical Hairline */}
            <div className="border-l border-[#A9A39B]/55 pl-5 sm:pl-6">
              <span className="font-sans font-medium text-[10px] sm:text-[11px] tracking-[0.24em] text-[#77716A] uppercase mb-3 block select-none">
                EXAMINATION PASSER
              </span>

              <h3 className="font-serif text-[21px] sm:text-[23px] lg:text-[25px] font-normal leading-[1.22] text-[#171513] mb-3.5">
                Center for Professional<br />
                Advancement and<br />
                Continuing Education, Inc.
              </h3>

              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#4A453F] leading-[1.7] max-w-[330px]">
                Officially accredited as a certified passer of the CMMS examination (Batch 23), reflecting rigorous competencies, industry knowledge, and commitment to marketing excellence.
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
                CREDENTIAL
              </span>

              {/* Subtitle */}
              <p className="font-serif italic text-[16px] sm:text-[18px] lg:text-[19px] font-normal text-[#171513] pb-1">
                A Milestone in My Marketing Career
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Achievement;
