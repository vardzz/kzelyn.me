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
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Toolkit', href: '#toolkit', id: 'toolkit' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Connect', href: '#connect', id: 'connect' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-8 sm:px-16 md:px-20 lg:px-28 xl:px-36 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
      <nav 
        className={`pointer-events-auto flex items-center justify-between gap-6 sm:gap-10 px-5 sm:px-7 py-3 rounded-full transition-all duration-300 border border-line ${
          scrolled 
            ? 'bg-paper/90 backdrop-blur-md shadow-[0_8px_30px_rgba(62,31,22,0.06)]' 
            : 'bg-paper/75 backdrop-blur-sm'
        } max-w-[1120px] w-full`}
        aria-label="Main Navigation"
      >
        {/* Signature Wordmark */}
        <Link 
          href="#hero" 
          className="signature text-[20px] sm:text-[22px] text-espresso hover:text-rust transition-colors duration-300"
        >
          Kzelyn
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-[14px] text-espresso">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className="relative py-1 transition-colors duration-200 hover:text-rust flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                {isActive && (
                  <span 
                    className="w-1.5 h-1.5 rounded-full bg-rust absolute -bottom-1 left-1/2 -translate-x-1/2" 
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA / Resume Button (Secondary style: transparent with 1px espresso border, hover fill rose-soft) */}
        <div className="hidden md:flex items-center">
          <a
            href="#connect"
            className="text-[13px] font-medium text-espresso border border-espresso/30 hover:border-espresso px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-rose-soft"
          >
            Get in touch
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
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-paper/95 backdrop-blur-xl border border-line rounded-3xl p-6 shadow-[0_14px_40px_rgba(62,31,22,0.1)] flex flex-col gap-4 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] text-espresso py-2 border-b border-line/40 flex items-center justify-between"
            >
              <span>{link.label}</span>
              {activeSection === link.id && (
                <span className="w-2 h-2 rounded-full bg-rust" />
              )}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center text-[14px] text-espresso bg-rose-soft py-3 rounded-full mt-2 font-medium"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
