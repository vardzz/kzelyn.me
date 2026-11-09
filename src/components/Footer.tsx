'use client';

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
    <footer className="w-full bg-[#F3EFE9] text-[#F3EFE9] px-[3vw] sm:px-[4vw] pb-10 sm:pb-14 pt-4 select-none">
      {/* Outer Luxury Obsidian Card (Floating Bento Frame with Generous Curves) */}
      <div className="max-w-[1360px] mx-auto w-full bg-[#121110] rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] pt-12 sm:pt-16 lg:pt-20 px-7 sm:px-12 lg:px-16 overflow-hidden relative border border-white/[0.06] shadow-2xl flex flex-col justify-between min-h-[640px] sm:min-h-[720px] lg:min-h-[820px]">
        
        {/* ======================================================== */}
        {/* 1. TOP HEADER & MULTI-COLUMN NAVIGATION                 */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 z-20 relative">
          
          {/* Brand Identity & Mission (Left 5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between items-start">
            <div>
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-3.5 mb-4 group cursor-pointer" onClick={scrollToTop}>
                <div className="w-9 h-9 rounded-full bg-[#FFFFFF] text-[#121110] flex items-center justify-center font-serif text-[20px] font-normal leading-none shadow-xs">
                  <span className="translate-y-[-0.5px]">K</span>
                </div>
                <span className="font-serif text-[22px] sm:text-[24px] tracking-tight font-normal text-[#FFFFFF]">
                  Kzelyn Artillo
                </span>
              </div>

              {/* Tagline / Subtitle */}
              <p className="font-sans text-[13px] sm:text-[13.5px] leading-relaxed text-[#A9A39B] max-w-[340px] mb-6">
                BSBA Marketing Management Graduate. Turning creative intuition into measurable brand affinity through strategic research, artful storytelling, and empathetic communication.
              </p>

              {/* Quick Social Badges */}
              <div className="flex items-center gap-3 text-[12px] font-sans">
                <a 
                  href="https://linkedin.com/in/kzelynartillo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.07] hover:bg-white/[0.14] text-[#A9A39B] hover:text-[#FFFFFF] border border-white/[0.08] transition-all duration-300"
                >
                  LinkedIn ↗
                </a>
                <a 
                  href="mailto:kzelynartillo@gmail.com"
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.07] hover:bg-white/[0.14] text-[#A9A39B] hover:text-[#FFFFFF] border border-white/[0.08] transition-all duration-300"
                >
                  Email ↗
                </a>
                <a 
                  href="https://instagram.com/ursweetiekz"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.07] hover:bg-white/[0.14] text-[#A9A39B] hover:text-[#FFFFFF] border border-white/[0.08] transition-all duration-300"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>

          {/* Nav Link Columns (Right 7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-[13px] font-sans">
            
            {/* Column 1: Index / Navigation */}
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

            {/* Column 2: Disciplines / Expertise */}
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

            {/* Column 3: Connect & Inquiry */}
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
        <div className="z-20 relative pt-14 sm:pt-20 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#77716A] font-sans border-t border-white/[0.08] mt-12 sm:mt-16">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Kzelyn Artillo. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Editorial Portfolio · Issue 2026</span>
            <button 
              onClick={scrollToTop}
              className="text-[#A9A39B] hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5 cursor-pointer uppercase tracking-wider text-[11px] font-medium"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>


        {/* ======================================================== */}
        {/* 3. ETHEREAL SAND & STARLIGHT VISUAL (Reference Artwork) */}
        {/* ======================================================== */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" 
          aria-hidden="true"
        >
          {/* Central Starlight/Sand Conical Glow rising behind the wordmark */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[850px] h-[55%] bg-gradient-to-t from-[#EAE5DD]/20 via-[#D1A9A5]/10 to-transparent blur-3xl rounded-t-full" />
          
          {/* Subtle Stippled Particle Horizon SVG */}
          <svg 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-[320px] sm:h-[400px] opacity-25" 
            viewBox="0 0 1000 400" 
            fill="none"
          >
            <defs>
              <radialGradient id="sandGlow" cx="50%" cy="100%" r="60%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#EAE5DD" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#121110" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path 
              d="M 150 400 Q 350 240 500 120 Q 650 240 850 400 Z" 
              fill="url(#sandGlow)" 
            />
            {/* Secondary peak */}
            <path 
              d="M 500 400 Q 620 280 720 220 Q 820 310 920 400 Z" 
              fill="url(#sandGlow)" 
              opacity="0.6"
            />
          </svg>
        </div>


        {/* ======================================================== */}
        {/* 4. OVERSIZED CROPPED WORDMARK: @ursweetiekz             */}
        {/* ======================================================== */}
        <div className="relative z-10 w-full pt-6 sm:pt-10 flex justify-center items-end overflow-hidden -mb-3 sm:-mb-5 lg:-mb-8">
          <span className="font-serif text-[14.5vw] xl:text-[200px] 2xl:text-[225px] font-[350] tracking-[-0.04em] leading-[0.82] text-[#FFFFFF] select-none text-center whitespace-nowrap block drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]">
            @ursweetiekz
          </span>
        </div>

      </div>
    </footer>
  );
}