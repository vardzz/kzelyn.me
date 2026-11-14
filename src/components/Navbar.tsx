'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [ready, setReady] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Initial 3-second opening delay matching hero portrait spotlight
  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      const sections = ['hero', 'about', 'skills', 'achievements', 'connect'];
      const scrollPosition = currentScrollY + 200;

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

      // Footer scroll hide/reveal behavior:
      // When in the footer section, disappear; only appear when scrolling upward.
      const footer = document.getElementById('footer') || document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isInFooter = footerRect.top < window.innerHeight;

        if (isInFooter) {
          const isScrollingUp = currentScrollY < lastScrollY.current;
          if (isScrollingUp) {
            setHidden(false);
          } else {
            setHidden(true);
          }
        } else {
          setHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero', id: 'hero' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
    { label: 'CONTACT', href: '#connect', id: 'connect' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        if (targetId === 'achievements') {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (targetId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        window.history.pushState(null, '', href);
        setActiveSection(targetId);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 transform ${
        !ready || hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      } ${
        scrolled 
          ? 'bg-[#F3EFE9]/90 backdrop-blur-md py-4' 
          : 'bg-transparent py-6'
      } px-[4.5vw]`}
    >
      <div className="w-full flex items-center justify-between">
        
        {/* Left Section: 52px Logo + Nav Links */}
        <div className="flex items-center gap-8 lg:gap-11">
          
          {/* Logo Badge (/kz-logo.png) */}
          <Link 
            href="#hero" 
            className="flex items-center group"
            aria-label="Kzelyn Home"
          >
            <div className="w-[52px] h-[52px] flex items-center justify-center select-none transition-transform duration-300 group-hover:scale-105 relative">
              <Image
                src="/kz-logo.png"
                alt="Kzelyn Artillo Logo"
                width={52}
                height={52}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links (Inter 13px, gap 40-44px) */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-11 text-[13px] tracking-[0.01em] font-medium text-[#171513]" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
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
            onClick={(e) => handleNavClick(e, '#connect')}
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
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, link.href);
              }}
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
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleNavClick(e, '#connect');
            }}
            className="text-center text-[13px] tracking-[0.04em] font-medium text-[#FFFFFF] bg-[#171513] py-3 rounded-full mt-2"
          >
            LET&apos;S TALK ↗
          </a>
        </div>
      )}
    </header>
  );
}
