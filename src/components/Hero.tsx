'use client';

import React from 'react';

export function Hero() {
  return (
    <section 
      id="hero" 
      className="flex flex-col lg:flex-row w-screen shrink-0 min-h-[100dvh] lg:h-[100dvh] pt-12 lg:pt-0 pb-32 lg:pb-0 px-6 sm:px-12 lg:px-20 xl:px-28 z-10 relative overflow-y-auto lg:overflow-visible snap-center justify-between items-center"
    >
      <div className="flex flex-col lg:flex-row w-full flex-1 lg:h-full items-center justify-between gap-10 lg:gap-8 max-w-[1440px] mx-auto relative my-auto">
        
        {/* Left Column (Text & Buttons) */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-full lg:max-w-[580px] xl:max-w-[620px] text-left z-20 pt-4 lg:pt-0">
          
          {/* Greeting */}
          <div className="flex items-center justify-start gap-3 lg:gap-4 font-montserrat text-[#B9664B] font-bold text-[11px] lg:text-[13px] tracking-[2.5px] mb-3 lg:mb-4">
            HELLO, I'M <div className="h-[1px] w-[36px] lg:w-[48px] bg-[#B9664B]/40"></div>
          </div>
          
          {/* Main Title */}
          <h1 className="font-bebas text-[78px] sm:text-[105px] lg:text-[135px] xl:text-[155px] leading-[0.84] text-primary-dark mb-4 lg:mb-6 tracking-[-1px]">
            KZELYN<br />ARTILLO
          </h1>
          
          {/* Tagline */}
          <h2 className="font-montserrat font-bold text-[12px] sm:text-[14px] lg:text-[15px] xl:text-[16px] text-[#B9664B] tracking-[1.5px] leading-[1.6] mb-4 lg:mb-6 max-w-[420px] lg:max-w-none uppercase">
            MARKETING-DRIVEN. PEOPLE-FOCUSED.<br className="hidden sm:block" /> RESULTS-ORIENTED.
          </h2>
          
          {/* Description */}
          <p className="font-inter text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.7] text-[#444] mb-8 lg:mb-10 max-w-[480px]">
            A fresh graduate in Marketing Management with a passion for building brands, connecting with people, and creating impact through strategic ideas.
          </p>
          
          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            {/* View My Work */}
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 'work' }));
                }
              }}
              className="bg-primary-dark text-white py-3.5 px-7 rounded-full font-inter font-semibold text-[14.5px] flex items-center justify-center gap-3 cursor-pointer border-none transition-all hover:bg-[#333] hover:-translate-y-0.5 shadow-sm active:translate-y-0"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Download Resume Pill */}
            <a 
              href="#" 
              className="border border-black/15 bg-white/40 hover:bg-white/80 text-primary-dark py-3.5 px-6 rounded-full font-inter font-semibold text-[14.5px] flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5 shadow-sm backdrop-blur-xs"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
          </div>
          
        </div>

        {/* Right Column (Visuals & Floating Cards) */}
        <div className="w-full lg:flex-1 relative flex flex-col items-center justify-center lg:block min-h-[440px] sm:min-h-[480px] lg:min-h-0 lg:h-full mt-4 lg:mt-0">
          
          {/* Desktop Circular Outline in Background */}
          <div className="hidden lg:block absolute top-[10%] right-[-10%] w-[580px] h-[580px] xl:w-[640px] xl:h-[640px] rounded-full border border-white/70 pointer-events-none z-0"></div>

          {/* Goal-Driven Card */}
          <div className="relative lg:absolute lg:top-[14%] lg:left-[6%] xl:left-[8%] bg-surface border border-white/60 p-[22px] lg:p-[26px] rounded-[24px] w-[220px] lg:w-[240px] shadow-[0_15px_35px_rgba(0,0,0,0.06)] z-10 -translate-x-[30px] sm:-translate-x-[40px] lg:translate-x-0 mb-4 lg:mb-0 text-left transition-transform hover:scale-105">
            <div className="bg-[#EDDFD5] w-[42px] h-[42px] rounded-xl flex items-center justify-center mb-3.5 text-[#B9664B]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <path d="M7 17V13M12 17V9M17 17V5"/>
              </svg>
            </div>
            <h3 className="font-inter font-bold text-[15px] lg:text-[16px] text-primary-dark mb-1.5">Goal-Driven</h3>
            <p className="font-inter text-[12px] lg:text-[13px] leading-[1.6] text-[#666]">Turning insights into impactful marketing strategies.</p>
          </div>
          
          {/* People First Card */}
          <div className="relative lg:absolute lg:top-[42%] lg:left-[20%] xl:left-[24%] bg-[#1E1D1C] text-white p-[22px] lg:p-[26px] rounded-[24px] w-[230px] lg:w-[250px] shadow-[0_22px_45px_rgba(0,0,0,0.18)] z-20 translate-x-[25px] sm:translate-x-[35px] lg:translate-x-0 mb-6 lg:mb-0 text-left transition-transform hover:scale-105">
            <div className="bg-white/95 w-[40px] h-[40px] rounded-xl flex items-center justify-center mb-3.5 text-primary-dark shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="font-inter font-bold text-[15px] lg:text-[16px] text-white mb-2">People First</h3>
            <p className="font-inter text-[12px] lg:text-[12.5px] leading-[1.65] text-[#AAA]">
              Understanding audiences.<br/>
              Building relationships.<br/>
              Driving loyalty.
            </p>
          </div>
          
          {/* Script Text: Strategy builds connection. */}
          <div className="relative lg:absolute lg:top-[18%] lg:right-[3%] xl:right-[5%] -rotate-[5deg] z-10 flex flex-col items-start select-none mt-4 lg:mt-0">
            <div className="font-great-vibes text-[50px] sm:text-[56px] lg:text-[62px] xl:text-[72px] text-primary-dark leading-[0.95]">
              Strategy
            </div>
            <div className="font-great-vibes text-[50px] sm:text-[56px] lg:text-[62px] xl:text-[72px] text-primary-dark leading-[0.95] ml-8 sm:ml-10 lg:ml-12">
              builds
            </div>
            <div className="font-great-vibes text-[50px] sm:text-[56px] lg:text-[62px] xl:text-[72px] text-primary-dark leading-[0.95] ml-14 sm:ml-18 lg:ml-20">
              connection.
            </div>
            {/* Terracotta underline accent */}
            <div className="ml-16 sm:ml-20 lg:ml-24 mt-1.5 w-[85px] lg:w-[110px] h-[3px] bg-[#C06B52] rounded-full rotate-[3deg]"></div>
          </div>
          
        </div>

      </div>

      {/* Mobile Bottom Spacer so content is never covered by fixed navbar */}
      <div className="h-28 lg:hidden w-full flex-shrink-0"></div>

      {/* Bottom Bar Details (Desktop Reference) */}
      <div className="hidden lg:flex w-full items-center justify-between max-w-[1440px] mx-auto absolute bottom-8 left-0 right-0 px-6 sm:px-12 lg:px-20 xl:px-28 pointer-events-none z-20">
        {/* Left: Scroll to Explore */}
        <div className="flex items-center gap-3">
          <div className="w-[1.5px] h-6 bg-[#B9664B]"></div>
          <span className="font-montserrat text-[10px] font-bold tracking-[3px] text-[#888] uppercase">
            SCROLL TO EXPLORE
          </span>
        </div>

        {/* Right: 01 — 03 Page Indicator */}
        <div className="flex items-center gap-3 font-montserrat text-[12px] font-semibold text-[#888]">
          <span>01</span>
          <div className="w-7 h-[1px] bg-[#888]/50"></div>
          <span>03</span>
        </div>
      </div>
      
    </section>
  );
}
