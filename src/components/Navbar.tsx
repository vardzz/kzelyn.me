'use client';

import { useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const sections = [
  { id: 'hero', num: '01', title: 'INTRODUCTION' },
  { id: 'about', num: '02', title: 'ABOUT ME' },
  { id: 'tool', num: '03', title: 'TOOL' },
  { id: 'work', num: '04', title: 'WORK' },
  { id: 'contact', num: '05', title: 'CONNECT' },
];

export function Navbar() {
  const [active, setActive] = useState(sections[0]);

  const scrollToSectionIndex = useCallback((index: number) => {
    if (index < 0 || index >= sections.length) return;
    const targetSection = sections[index];
    setActive(targetSection);

    if (window.innerWidth >= 1024) {
      const st = ScrollTrigger.getById('horizontal-scroll-trigger');
      if (st) {
        const totalDistance = st.end - st.start;
        const targetScroll = st.start + totalDistance * (index / (sections.length - 1));
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetSection.id);
        el?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      }
    } else {
      document.getElementById(targetSection.id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }, []);

  // Listen to desktop GSAP scroll trigger updates
  useEffect(() => {
    const handleActiveChange = (e: Event) => {
      const customEvent = e as CustomEvent<number>;
      const idx = customEvent.detail;
      if (sections[idx] && sections[idx].id !== active.id) {
        setActive(sections[idx]);
      }
    };

    const handleNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const targetId = customEvent.detail;
      const idx = sections.findIndex(s => s.id === targetId);
      if (idx !== -1) {
        scrollToSectionIndex(idx);
      }
    };

    window.addEventListener('activeSectionChange', handleActiveChange);
    window.addEventListener('navigateToSection', handleNavigate);

    return () => {
      window.removeEventListener('activeSectionChange', handleActiveChange);
      window.removeEventListener('navigateToSection', handleNavigate);
    };
  }, [active.id, scrollToSectionIndex]);

  // Mobile IntersectionObserver
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    let observer: IntersectionObserver;

    const initObserver = () => {
      const scroller = document.getElementById('horizontal-scroller');
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const section = sections.find((s) => s.id === entry.target.id);
              if (section) setActive(section);
            }
          });
        },
        { root: scroller, threshold: 0.3 }
      );

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    const timeoutId = setTimeout(initObserver, 300);

    return () => {
      clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, []);

  const currentIndex = sections.findIndex((s) => s.id === active.id);

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      scrollToSectionIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToSectionIndex(currentIndex - 1);
    }
  };

  return (
    <nav className="fixed bottom-0 lg:bottom-6 left-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-auto flex items-center justify-between lg:gap-8 z-50 bg-background/90 backdrop-blur-md border-t lg:border border-[#DCC3B6]/60 py-3 px-6 lg:px-7 lg:rounded-full overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.05)] lg:shadow-[0_10px_35px_rgba(0,0,0,0.1)] transition-all">
      {/* Decorative Grid Pattern */}
      <div
        className="absolute left-0 top-0 w-[50%] h-full opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#B9664B 2.5px, transparent 2.5px)',
          backgroundSize: '16px 16px',
        }}
      ></div>

      {/* Active Section Info */}
      <div className="flex items-center gap-4 relative z-10">
        <div className="border-2 border-[#C99886]/40 text-[#C99886] rounded-md px-3 py-1 font-bebas text-3xl leading-none bg-background/50 transition-all select-none">
          {active.num}
        </div>
        <span className="font-montserrat font-bold text-[11px] lg:text-[12px] tracking-[2px] text-[#444] pt-1 transition-all uppercase select-none">
          {active.title}
        </span>
      </div>

      {/* Navigation Arrow Controls */}
      <div className="flex items-center gap-2 relative z-10">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous Section"
          className={`border-2 border-[#C99886]/40 text-[#C99886] rounded-full w-10 h-10 flex items-center justify-center transition-all bg-background/50 ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:opacity-100 hover:bg-[#C99886]/10 cursor-pointer'
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === sections.length - 1}
          aria-label="Next Section"
          className={`border-2 border-[#C99886]/40 text-[#C99886] rounded-full w-10 h-10 flex items-center justify-center transition-all bg-background/50 ${
            currentIndex === sections.length - 1
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:opacity-100 hover:bg-[#C99886]/10 cursor-pointer'
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
