import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col font-inter bg-background text-primary-dark">
      {/* Background Elements */}
      <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] rounded-full opacity-90 z-0 bg-[radial-gradient(circle,#E1C1B1_0%,rgba(246,237,229,0)_70%)]"></div>
      <div className="absolute top-[15%] -right-[10%] w-[800px] h-[800px] rounded-full border border-white z-0 opacity-80"></div>
      <div className="absolute bottom-[15%] right-[32%] w-8 h-8 bg-[#B9664B] rounded-full z-10"></div>
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] opacity-40 z-0 bg-[radial-gradient(#C99886_15%,transparent_15%)]" style={{ backgroundSize: '20px 20px' }}></div>

      {/* Navigation */}
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

      {/* Main Content */}
      <main className="flex flex-1 pt-5 pb-10 px-20 z-10 relative">
        
        {/* Left Column (Text & Skills) */}
        <div className="flex-1 flex flex-col justify-center max-w-[650px]">
          <div className="flex items-center gap-5 font-montserrat text-[#B9664B] font-bold text-[13px] tracking-[2px] mb-6">
            HELLO, I'M <div className="h-[1px] w-[60px] bg-[#B9664B]/30"></div>
          </div>
          
          <h1 className="font-bebas text-[160px] leading-[0.85] text-primary-dark mb-[30px] tracking-[-1px]">
            KZELYN<br />ARTILLO
          </h1>
          
          <h2 className="font-montserrat font-bold text-[17px] text-[#B9664B] tracking-[1.5px] leading-[1.6] mb-[30px]">
            MARKETING-DRIVEN. PEOPLE-FOCUSED.<br />RESULTS-ORIENTED.
          </h2>
          
          <p className="font-inter text-base leading-[1.6] text-[#444] mb-10 max-w-[480px]">
            A fresh graduate in Marketing Management with a passion for building brands, connecting with people, and creating impact through strategic ideas.
          </p>
          
          <div className="flex items-center gap-10 mb-20">
            <button className="bg-primary-dark text-white py-4 px-8 rounded-full font-inter font-semibold text-[15px] flex items-center gap-3 cursor-pointer border-none transition-all hover:-translate-y-0.5 hover:bg-[#333]">
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
            <a href="#" className="font-inter font-semibold text-[15px] text-primary-dark flex items-center gap-2.5 border-b-2 border-primary-dark pb-1 transition-opacity hover:opacity-70">
              Download Resume
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
          
          {/* Skills Container */}
          <div className="flex gap-5 bg-surface/70 backdrop-blur-md rounded-[20px] py-[30px] px-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white/60 max-w-[650px]">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#B9664B] flex">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
                  </svg>
                </div>
                <span className="font-montserrat font-bold text-[13px] text-primary-dark tracking-[0.5px]">STRATEGIC</span>
              </div>
              <p className="text-[12px] leading-[1.5] text-[#666]">I turn ideas into strategies that drive real results.</p>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#B9664B] flex">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 11.5v-1a4.5 4.5 0 0 1 4.5-4.5h.5A2.5 2.5 0 0 1 18.5 8.5v3A2.5 2.5 0 0 1 16 14h-.5a4.5 4.5 0 0 1-4.5-4.5v-1z"/>
                    <path d="M16 14v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4"/>
                    <path d="M6 14h2"/>
                    <path d="M4 11h3"/>
                    <path d="M5 8h2"/>
                  </svg>
                </div>
                <span className="font-montserrat font-bold text-[13px] text-primary-dark tracking-[0.5px]">CREATIVE</span>
              </div>
              <p className="text-[12px] leading-[1.5] text-[#666]">I craft campaigns that capture attention and value.</p>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#B9664B] flex">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20V10M12 20V4M6 20v-6"/>
                  </svg>
                </div>
                <span className="font-montserrat font-bold text-[13px] text-primary-dark tracking-[0.5px]">ANALYTICAL</span>
              </div>
              <p className="text-[12px] leading-[1.5] text-[#666]">I use data to understand, adapt, and grow.</p>
            </div>
          </div>
        </div>

        {/* Right Column (Visuals & Floating Cards) */}
        <div className="flex-1 relative">
          
          <div className="absolute top-[15%] left-[15%] bg-surface p-[30px] rounded-[24px] w-[250px] shadow-[0_15px_30px_rgba(0,0,0,0.06)] z-10">
            <div className="bg-[#EDDFD5] w-[44px] h-[44px] rounded-xl flex items-center justify-center mb-4 text-[#B9664B]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <path d="M7 17V13M12 17V9M17 17V5"/>
              </svg>
            </div>
            <h3 className="font-inter font-bold text-base mb-2">Goal-Driven</h3>
            <p className="font-inter text-[13px] leading-[1.6] text-[#666]">Turning insights into impactful marketing strategies.</p>
          </div>
          
          <div className="absolute top-[38%] left-[27%] w-[150px] h-[250px] border-l border-b border-white rounded-bl-[80px] opacity-60 z-0"></div>
          
          <div className="absolute bottom-[10%] right-[15%] bg-primary-dark text-white py-10 px-[30px] rounded-[24px] w-[280px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-10">
            <div className="bg-white w-[44px] h-[44px] rounded-xl flex items-center justify-center mb-5 text-primary-dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="font-inter font-bold text-base mb-2">People First</h3>
            <p className="font-inter text-[13px] leading-[1.6] text-[#AAA]">
              Understanding audiences.<br/>
              Building relationships.<br/>
              Driving loyalty.
            </p>
          </div>
          
          <div className="absolute top-[45%] right-[5%] -rotate-[8deg] z-10 flex flex-col">
            <div className="font-great-vibes text-[65px] text-primary-dark leading-[1.1]">Strategy</div>
            <div className="font-great-vibes text-[65px] text-primary-dark leading-[1.1] ml-5">Creativity</div>
            <div className="font-great-vibes text-[65px] text-primary-dark leading-[1.1] ml-10">Connection.</div>
            <div className="self-end mt-2.5 w-[100px] h-1 bg-[#C06B52] rounded-sm rotate-[5deg]"></div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
