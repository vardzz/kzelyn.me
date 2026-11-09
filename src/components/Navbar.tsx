'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'toolkit', 'work', 'connect'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PORTFOLIO', href: '#hero', id: 'hero' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'PROJECTS', href: '#work', id: 'work' },
    { label: 'CONTACT', href: '#connect', id: 'connect' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-paper/95 backdrop-blur-md border-b border-line/60 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)]' 
          : 'bg-transparent pt-6 sm:pt-7 pb-4'
      } px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20`}
    >
      <div className="w-full flex items-center justify-between">
        
        {/* Left Section: 'K' Circle Badge + Horizontal Line + Navigation Links */}
        <div className="flex items-center gap-6 sm:gap-10">
          
          {/* 'K' Circle Badge + Hairline rule */}
          <Link 
            href="#hero" 
            className="flex items-center gap-3 sm:gap-4 group"
            aria-label="Kzelyn Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-espresso text-paper flex items-center justify-center font-serif text-[17px] sm:text-[18px] font-semibold transition-transform duration-300 group-hover:scale-105 shadow-xs">
              K
            </div>
            <span className="hidden sm:block w-12 sm:w-16 h-[1px] bg-line/80 group-hover:w-20 transition-all duration-300" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[11.5px] tracking-[0.14em] font-medium text-espresso/90" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative py-1 transition-colors duration-200 hover:text-espresso/70"
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span 
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-espresso transition-all duration-300" 
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right CTA Button: LET'S TALK ↗ */}
        <div className="flex items-center gap-4">
          <a
            href="#connect"
            className="hidden sm:inline-flex items-center gap-1.5 text-[11.5px] font-medium tracking-[0.08em] text-espresso border border-espresso/30 hover:border-espresso px-5 py-2 rounded-full transition-all duration-300 hover:bg-espresso hover:text-paper"
          >
            <span>LET&apos;S TALK</span>
            <span className="text-[13px] leading-none">↗</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-espresso p-1.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-rust"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-full left-6 right-6 mt-3 bg-paper/98 backdrop-blur-xl border border-line rounded-2xl p-6 shadow-xl flex flex-col gap-4 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[13px] tracking-[0.14em] font-medium text-espresso py-2 border-b border-line/40 flex items-center justify-between"
            >
              <span>{link.label}</span>
              {activeSection === link.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-espresso" />
              )}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center text-[12px] tracking-[0.1em] font-medium text-paper bg-espresso py-3 rounded-full mt-2"
          >
            LET&apos;S TALK ↗
          </a>
        </div>
      )}
    </header>
  );
}
