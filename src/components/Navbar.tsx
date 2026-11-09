'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
      <nav 
        className={`pointer-events-auto flex items-center justify-between gap-6 px-5 sm:px-8 py-3 rounded-full transition-all duration-300 border border-line ${
          scrolled 
            ? 'bg-paper/90 backdrop-blur-md shadow-[0_8px_30px_rgba(62,31,22,0.06)]' 
            : 'bg-paper/80 backdrop-blur-sm'
        } max-w-[1240px] w-full`}
        aria-label="Main Navigation"
      >
        {/* Left: 'K' Circle Badge + Hairline rule */}
        <Link 
          href="#hero" 
          className="flex items-center gap-3 group"
          aria-label="Kzelyn Home"
        >
          <div className="w-8 h-8 rounded-full bg-espresso text-paper flex items-center justify-center font-serif text-[15px] font-semibold transition-transform duration-300 group-hover:scale-105">
            K
          </div>
          <span className="hidden sm:block w-8 h-[1px] bg-line group-hover:w-12 transition-all duration-300" />
        </Link>

        {/* Center: Desktop Links (PORTFOLIO, ABOUT, PROJECTS, CONTACT) */}
        <div className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.14em] font-medium text-espresso/90">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className="relative py-1 transition-colors duration-200 hover:text-rust"
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
        </div>

        {/* Right CTA Button: LET'S TALK ↗ */}
        <div className="hidden md:flex items-center">
          <a
            href="#connect"
            className="text-[12px] font-medium tracking-[0.08em] text-espresso border border-espresso/30 hover:border-espresso px-4 py-2 rounded-full transition-all duration-300 hover:bg-rose-soft/40 flex items-center gap-1.5"
          >
            <span>LET&apos;S TALK</span>
            <span className="text-[13px]">↗</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-espresso p-1.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-rust"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-6 right-6 bg-paper/95 backdrop-blur-xl border border-line rounded-3xl p-6 shadow-[0_14px_40px_rgba(62,31,22,0.1)] flex flex-col gap-4 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] tracking-[0.14em] font-medium text-espresso py-2 border-b border-line/40 flex items-center justify-between"
            >
              <span>{link.label}</span>
              {activeSection === link.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-rust" />
              )}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center text-[12px] tracking-[0.1em] font-medium text-espresso bg-rose-soft py-3 rounded-full mt-2"
          >
            LET&apos;S TALK ↗
          </a>
        </div>
      )}
    </header>
  );
}
