import Link from 'next/link';

export function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex justify-between items-center py-6 px-20 z-50 sticky top-0 w-full backdrop-blur-md bg-background/80 border-b border-white/20">
        <div className="flex items-center gap-3 font-inter font-bold text-xl text-primary-dark">
          <span className="text-[32px] font-extrabold tracking-[-2px]">K</span>
          <span>Kzelyn Artilo</span>
        </div>
        <div className="flex gap-10 items-center">
          <Link href="#work" className="font-inter font-semibold text-[15px] text-primary-dark hover:opacity-70 transition-opacity">Work</Link>
          <Link href="#about" className="font-inter font-semibold text-[15px] text-primary-dark hover:opacity-70 transition-opacity">About</Link>
          <Link href="#skills" className="font-inter font-semibold text-[15px] text-primary-dark hover:opacity-70 transition-opacity">Skills</Link>
          <Link href="#contact" className="font-inter font-semibold text-[15px] text-primary-dark hover:opacity-70 transition-opacity">Contact</Link>
          <button className="bg-primary-dark text-white py-3 px-6 rounded-full font-inter font-semibold text-sm flex items-center gap-2 cursor-pointer border-none transition-all hover:-translate-y-0.5 hover:bg-[#333]">
            Let's Connect
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex lg:hidden fixed bottom-0 left-0 w-full items-center justify-between z-50 bg-background/90 backdrop-blur-md border-t border-[#DCC3B6]/50 py-4 px-6 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        {/* Decorative Grid Background */}
        <div className="absolute left-0 top-0 w-[50%] h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#B9664B 2.5px, transparent 2.5px)', backgroundSize: '16px 16px' }}></div>
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="border-2 border-[#C99886]/40 text-[#C99886] rounded-md px-3 py-1 font-bebas text-3xl leading-none bg-background/50">01</div>
          <span className="font-montserrat font-bold text-[11px] tracking-[2px] text-[#444] pt-1">INTRODUCTION</span>
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
