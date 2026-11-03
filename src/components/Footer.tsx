'use client';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 px-6 sm:px-12 border-t border-line/60 bg-paper">
      <div className="max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] text-oak">
        
        {/* Left: Signature Wordmark & Title */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <span className="signature text-[20px] text-espresso">
            Kzelyn Artillo
          </span>
          <span className="hidden sm:inline text-line">|</span>
          <span>Marketing Management · Brand Strategy</span>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-6">
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          <button 
            onClick={scrollToTop}
            className="text-espresso hover:text-rust transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}

