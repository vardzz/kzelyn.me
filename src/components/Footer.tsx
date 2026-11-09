'use client';

import Image from 'next/image';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Biography', href: '#about' },
    { label: 'Capabilities', href: '#toolkit' },
    { label: 'Selected Work', href: '#work' },
    { label: 'Contact', href: '#connect' },
  ];

  const disciplines = [
    { label: 'Brand Architecture', href: '#toolkit' },
    { label: 'Consumer Insights', href: '#toolkit' },
    { label: 'Campaign Strategy', href: '#toolkit' },
    { label: 'Content Operations', href: '#work' },
  ];

  const connectLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/kzelynartillo', external: true },
    { label: 'Instagram', href: 'https://instagram.com/ursweetiekz', external: true },
    { label: 'Email', href: 'mailto:kzelynartillo@gmail.com', external: false },
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
                <div className="w-9 h-9 rounded-full bg-[#FFFFFF] text-[#121110] flex items-center justify-center font-serif text-[20px] font-normal leading-none shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <span className="translate-y-[-0.5px]">K</span>
                </div>
                <span className="font-serif text-[22px] sm:text-[24px] tracking-tight font-normal text-[#FFFFFF]">
                  Kzelyn Artillo
                </span>
              </div>

              {/* Tagline / Subtitle */}
              <p className="font-sans text-[13px] sm:text-[13.5px] leading-relaxed text-[#A9A39B] max-w-[360px] mb-6">
                BSBA Marketing Management Graduate. Turning creative intuition into measurable brand affinity through strategic research, artful storytelling, and empathetic communication.
              </p>

              {/* Quick Social Badges */}
              <div className="flex flex-wrap items-center gap-2.5 text-[12px] font-sans">
                <a 
                  href="https://linkedin.com/in/kzelynartillo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#A9A39B] hover:text-[#FFFFFF] border border-white/[0.08] transition-all duration-300"
                >
                  LinkedIn ↗
                </a>
                <a 
                  href="mailto:kzelynartillo@gmail.com"
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
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-[13px] font-sans">
            
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
        {/* 2. MID SECTION METADATA & DIVIDER                       */}
        {/* ======================================================== */}
        <div className="pt-12 sm:pt-16 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#77716A] font-sans border-t border-white/[0.08] mt-12 sm:mt-16">
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
      {/* 4. OVERSIZED WORDMARK: @ursweetiekz                     */}
      {/* Pressed against the left, bottom, and right side        */}
      {/* Exact match to Reference Image 1                       */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full overflow-hidden leading-none pt-8 sm:pt-14 pb-0 mb-0">
        <svg 
          viewBox="0 0 1000 135" 
          className="w-full h-auto block select-none pointer-events-none"
          preserveAspectRatio="none"
          aria-label="@ursweetiekz"
        >
          <text 
            x="0" 
            y="120" 
            textLength="1000" 
            lengthAdjust="spacingAndGlyphs" 
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
            fontWeight="600" 
            fontSize="142" 
            letterSpacing="-0.03em" 
            fill="#FFFFFF"
          >
            @ursweetiekz
          </text>
        </svg>
      </div>
    </footer>
  );
}