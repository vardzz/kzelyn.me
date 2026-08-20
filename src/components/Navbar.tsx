import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-20 z-10 relative">
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
  );
}
