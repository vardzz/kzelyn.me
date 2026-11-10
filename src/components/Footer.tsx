'use client';

import Image from 'next/image';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Biography', href: '#about' },
    { label: 'Skills & Competencies', href: '#skills' },
    { label: 'CMMS Certification', href: '#achievements' },
    { label: 'Contact', href: '#connect' },
  ];

  const disciplines = [
    { label: 'Brand & Digital Strategy', href: '#skills' },
    { label: 'Social Media Operations', href: '#skills' },
    { label: 'Content & Copywriting', href: '#skills' },
    { label: 'Consumer & Market Research', href: '#skills' },
    { label: 'Executive Coordination', href: '#skills' },
    { label: 'CMMS Certification', href: '#achievements' },
  ];

  const connectLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kzelyn-artillo-cmms-170b30443/', external: true },
    { label: 'Instagram', href: 'https://instagram.com/ursweetiekz', external: true },
    { label: 'Email', href: 'mailto:kzlynrtll15@gmail.com', external: false },
    { label: "Let's Talk", href: '#connect', external: false },
  ];

  return (
    <footer 
      id="footer"
      className="w-full bg-[#121110] text-[#F3EFE9] pt-20 sm:pt-24 lg:pt-32 pb-0 relative overflow-hidden select-none border-t border-white/[0.08]"
      aria-label="Site Footer"
    >
      {/* ======================================================== */}
      {/* 1. TOP HEADER & MULTI-COLUMN NAVIGATION                 */}
      {/* ======================================================== */}
      <div className="max-w-[1240px] mx-auto px-[4.5vw] w-full z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Brand Identity & Mission (Left 5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between items-start">
            <div>
              {/* Brand Logo & Name */}
              <div 
                className="flex items-center gap-3.5 mb-4 group cursor-pointer inline-flex" 
                onClick={scrollToTop}
                role="button"
                tabIndex={0}
                aria-label="Back to top"
              >
                <div className="w-9 h-9 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative shrink-0">
                  <Image
                    src="/kz-logo.png"
                    alt="Kzelyn Artillo Logo"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-serif text-[22px] sm:text-[24px] tracking-tight font-normal text-[#FFFFFF]">
                  Kzelyn Artillo
                </span>
              </div>

              {/* Tagline / Subtitle */}
              <p className="font-sans text-[13px] sm:text-[13.5px] leading-relaxed text-[#A9A39B] max-w-[360px] mb-6">
                BSBA Marketing Management Graduate &amp; Certified Marketing Management Specialist (CMMS). Turning creative intuition into measurable brand affinity through strategic research, artful storytelling, and empathetic communication.
              </p>

              {/* Quick Social Badges */}
              <div className="flex flex-wrap items-center gap-2.5 text-[12px] font-sans">
                <a 
                  href="https://www.linkedin.com/in/kzelyn-artillo-cmms-170b30443/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#A9A39B] hover:text-[#FFFFFF] border border-white/[0.08] transition-all duration-300"
                >
                  LinkedIn ↗
                </a>
                <a 
                  href="mailto:kzlynrtll15@gmail.com"
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#A9A39B] hover:text-[#FFFFFF] border border-white/[0.08] transition-all duration-300"
                >
                  Email ↗
                </a>
                <a 
                  href="https://instagram.com/ursweetiekz"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#A9A39B] hover:text-[#FFFFFF] border border-white/[0.08] transition-all duration-300"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>

          {/* Nav Link Columns (Right 7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 text-[12.5px] sm:text-[13px] font-sans">
            
            {/* Column 1: Navigation Links */}
            <div>
              <span className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#77716A] mb-4">
                NAVIGATION
              </span>
              <ul className="space-y-2.5">
                {navLinks.map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href={item.href} 
                      className="text-[#A9A39B] hover:text-[#FFFFFF] transition-colors duration-200 block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Disciplines & Capabilities */}
            <div>
              <span className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#77716A] mb-4">
                DISCIPLINES
              </span>
              <ul className="space-y-2.5">
                {disciplines.map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href={item.href} 
                      className="text-[#A9A39B] hover:text-[#FFFFFF] transition-colors duration-200 block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Connect & Inquiries */}
            <div>
              <span className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#77716A] mb-4">
                CONNECT
              </span>
              <ul className="space-y-2.5">
                {connectLinks.map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href={item.href} 
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="text-[#A9A39B] hover:text-[#FFFFFF] transition-colors duration-200 flex items-center gap-1"
                    >
                      <span>{item.label}</span>
                      {item.external && <span className="text-[11px]">↗</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* 2. MID SECTION METADATA                                 */}
        {/* ======================================================== */}
        <div className="pt-12 sm:pt-16 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#77716A] font-sans mt-12 sm:mt-16">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Kzelyn Artillo. All rights reserved.</span>
          </div>

          <div>
            <span>Made by </span>
            <a 
              href="https://www.vardz.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F3EFE9] hover:text-[#FFFFFF] underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all font-medium"
            >
              vardzz
            </a>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. ORGANIC UPWARD DRIPPING LIQUID (High-Fashion Fluid)   */}
      {/* Photorealistic rising viscous drips from reference image */}
      {/* ======================================================== */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" 
        aria-hidden="true"
      >
        {/* Ambient Warm Champagne Liquid Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[850px] h-[75%] bg-gradient-to-t from-[#EAE5DD]/30 via-[#D1A9A5]/15 to-transparent blur-3xl rounded-t-full" />
        
        {/* Photorealistic Natural Upward Dripping Liquid Container */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[980px] h-[380px] sm:h-[460px] lg:h-[520px] flex items-end justify-center">
          <Image
            src="/drips-upward-pearl.png"
            alt=""
            width={740}
            height={740}
            priority
            className="w-full h-full object-contain object-bottom opacity-90 drop-shadow-[0_0_35px_rgba(243,239,233,0.3)] transition-opacity duration-700"
          />
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. MINIMALIST CONTRASTING WAVE                           */}
      {/* Organic fluid wave using DESIGN.md tokens (#F3EFE9,     */}
      {/* #D1A9A5, #AE6965) contrasting against dark canvas        */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full overflow-hidden leading-none pt-8 sm:pt-14 pb-0 mb-0">
        <svg 
          viewBox="0 0 1440 140" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 sm:h-32 lg:h-36 block select-none pointer-events-none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="waveGradBack" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#AE6965" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#D1A9A5" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#AE6965" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="waveGradMid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D1A9A5" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#EAE5DD" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D1A9A5" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="waveGradFront" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F3EFE9" />
              <stop offset="35%" stopColor="#EAE5DD" />
              <stop offset="70%" stopColor="#F3EFE9" />
              <stop offset="100%" stopColor="#E5DFD6" />
            </linearGradient>
          </defs>

          {/* Layer 1: Atmospheric Terracotta/Rust Back Wave */}
          <path 
            d="M0 65 C 240 105 480 25 720 60 C 960 95 1200 35 1440 70 L 1440 140 L 0 140 Z" 
            fill="url(#waveGradBack)" 
          />

          {/* Layer 2: Soft Dusty Rose / Champagne Middle Wave */}
          <path 
            d="M0 85 C 320 40 640 110 960 65 C 1200 35 1360 85 1440 75 L 1440 140 L 0 140 Z" 
            fill="url(#waveGradMid)" 
          />

          {/* Layer 3: Contrasting Primary Wave in #F3EFE9 (DESIGN.md Paper Background) */}
          <path 
            d="M0 105 C 280 135 560 72 840 102 C 1120 132 1320 82 1440 96 L 1440 140 L 0 140 Z" 
            fill="url(#waveGradFront)" 
          />

          {/* Minimalist Crest Accent Hairline */}
          <path 
            d="M0 105 C 280 135 560 72 840 102 C 1120 132 1320 82 1440 96" 
            stroke="#AE6965" 
            strokeWidth="1.2" 
            strokeOpacity="0.35"
            fill="none" 
          />
        </svg>
      </div>
    </footer>
  );
}