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
          ? 'bg-[#F3EFE9]/95 backdrop-blur-md border-b border-[#A9A39B]/40 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)]' 
          : 'bg-transparent py-6'
      } px-[4.5vw]`}
    >
      <div className="w-full flex items-center justify-between">
        
        {/* Left Section: 52px Logo + Divider + Nav Links */}
        <div className="flex items-center gap-8 lg:gap-11">
          
          {/* Logo Badge (52px x 52px, #000000, Bodoni Moda 38px 'K') */}
          <Link 
            href="#hero" 
            className="flex items-center gap-6 group"
            aria-label="Kzelyn Home"
          >
            <div className="w-[52px] h-[52px] rounded-full bg-[#000000] text-[#FFFFFF] flex items-center justify-center font-serif text-[38px] font-normal leading-none select-none transition-transform duration-300 group-hover:scale-105 shadow-xs">
              <span className="translate-y-[-1px]">K</span>
            </div>
            <span className="hidden sm:block w-20 lg:w-28 h-[1px] bg-[#A9A39B]" aria-hidden="true" />
          </Link>

          {/* Desktop Nav Links (Inter 13px, gap 40-44px) */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-11 text-[13px] tracking-[0.01em] font-medium text-[#171513]" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative py-1 transition-colors duration-200 hover:text-[#77716A]"
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span 
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#171513] transition-all duration-300" 
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right CTA Button: LET'S TALK ↗ (Inter 13px, border 1px solid #77716A, padding 12px 22px) */}
        <div className="flex items-center gap-4">
          <a
            href="#connect"
            className="hidden sm:inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.04em] text-[#171513] border border-[#77716A] px-[22px] py-[10px] rounded-full transition-all duration-300 hover:bg-[#171513] hover:text-[#FFFFFF]"
          >
            <span>LET&apos;S TALK</span>
            <span className="text-[14px] leading-none">↗</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#171513] p-1.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-rust"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
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
        <div className="pointer-events-auto absolute top-full left-6 right-6 mt-3 bg-[#F3EFE9]/98 backdrop-blur-xl border border-[#A9A39B] rounded-2xl p-6 shadow-xl flex flex-col gap-4 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] tracking-[0.08em] font-medium text-[#171513] py-2 border-b border-[#A9A39B]/40 flex items-center justify-between"
            >
              <span>{link.label}</span>
              {activeSection === link.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#171513]" />
              )}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center text-[13px] tracking-[0.04em] font-medium text-[#FFFFFF] bg-[#171513] py-3 rounded-full mt-2"
          >
            LET&apos;S TALK ↗
          </a>
        </div>
      )}
    </header>
  );
}
