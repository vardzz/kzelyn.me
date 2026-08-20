'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', num: '01', title: 'INTRODUCTION' },
  { id: 'about', num: '02', title: 'ABOUT ME' },
  { id: 'work', num: '03', title: 'WORK' },
  { id: 'skills', num: '04', title: 'SKILLS' },
  { id: 'contact', num: '05', title: 'CONTACT' },
];

export function Navbar() {
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
    // Only run intersection observer on mobile (where we scroll vertically)
    if (window.innerWidth >= 1024) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(s => s.id === entry.target.id);
            if (section) setActive(section);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="flex lg:hidden fixed bottom-0 left-0 w-full items-center justify-between z-50 bg-background/90 backdrop-blur-md border-t border-[#DCC3B6]/50 py-4 px-6 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        {/* Decorative Grid Background */}
        <div className="absolute left-0 top-0 w-[50%] h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#B9664B 2.5px, transparent 2.5px)', backgroundSize: '16px 16px' }}></div>
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="border-2 border-[#C99886]/40 text-[#C99886] rounded-md px-3 py-1 font-bebas text-3xl leading-none bg-background/50 transition-all">{active.num}</div>
          <span className="font-montserrat font-bold text-[11px] tracking-[2px] text-[#444] pt-1 transition-all uppercase">{active.title}</span>
        </div>
        
        <button className="border-2 border-[#C99886]/40 text-[#C99886] rounded-full w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity relative z-10 bg-background/50">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </nav>
    </>
  );
}
