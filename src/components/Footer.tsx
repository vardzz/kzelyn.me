'use client';

import Image from 'next/image';
import { WaveFlowerMeadow } from './WaveFlowerMeadow';

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
      <div className="max-w-[1240px] mx-auto px-[4.5vw] w-full z-20 relative pb-4 sm:pb-6">
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
      </div>

      {/* ======================================================== */}
      {/* 3. MINIMALIST CONTRASTING WAVE & BLOOMING MEADOW         */}
      {/* Organic fluid wave using DESIGN.md tokens (#F3EFE9,     */}
      {/* #D1A9A5, #AE6965) with interactive blooming wildflowers */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full overflow-hidden leading-none pt-0 pb-0 mb-0 group">
        {/* Interactive Wildflowers blooming on mouse hover/drag */}
        <WaveFlowerMeadow />

        <svg 
          viewBox="0 0 1440 280" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-[340px] block select-none pointer-events-none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="waveGradBack" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#AE6965" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#D1A9A5" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#AE6965" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="waveGradMid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D1A9A5" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#EAE5DD" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#D1A9A5" stopOpacity="0.6" />
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
            d="M0 110 C 260 190 480 30 740 100 C 1000 170 1220 40 1440 120 L 1440 280 L 0 280 Z" 
            fill="url(#waveGradBack)" 
          />

          {/* Layer 2: Soft Dusty Rose / Champagne Middle Wave */}
          <path 
            d="M0 160 C 320 70 640 210 960 120 C 1200 50 1350 150 1440 130 L 1440 280 L 0 280 Z" 
            fill="url(#waveGradMid)" 
          />

          {/* Layer 3: Contrasting Primary Wave in #F3EFE9 (DESIGN.md Paper Background) */}
          <path 
            d="M0 200 C 260 250 540 130 820 180 C 1100 230 1300 140 1440 170 L 1440 280 L 0 280 Z" 
            fill="url(#waveGradFront)" 
          />

          {/* Minimalist Crest Accent Hairline */}
          <path 
            d="M0 200 C 260 250 540 130 820 180 C 1100 230 1300 140 1440 170" 
            stroke="#AE6965" 
            strokeWidth="1.5" 
            strokeOpacity="0.45" 
            fill="none" 
          />
        </svg>

        {/* Bottom Metadata at Base of Wave */}
        <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 z-30 px-[4.5vw] pointer-events-auto">
          <div className="max-w-[1240px] mx-auto pt-2.5 sm:pt-3 border-t border-[#A9A39B]/35 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11.5px] sm:text-[12px] text-[#4A453F] font-sans">
            <div className="flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} Kzelyn Artillo. All rights reserved.</span>
            </div>

            <div>
              <span>Made by </span>
              <a 
                href="https://www.vardz.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#171513] hover:text-black underline underline-offset-4 decoration-black/30 hover:decoration-black transition-all font-medium"
              >
                vardzz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}