export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row flex-1 pt-10 lg:pt-5 pb-20 lg:pb-10 px-6 lg:px-20 z-10 relative overflow-hidden lg:overflow-visible">
      
      {/* Left Column (Text & Skills) */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start max-w-full lg:max-w-[650px] text-center lg:text-left z-20">
        <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-5 font-montserrat text-[#B9664B] font-bold text-[11px] lg:text-[13px] tracking-[2px] mb-4 lg:mb-6">
          HELLO, I'M <div className="h-[1px] w-[40px] lg:w-[60px] bg-[#B9664B]/30"></div>
        </div>
        
        <h1 className="font-bebas text-[110px] sm:text-[130px] lg:text-[160px] leading-[0.85] text-primary-dark mb-[20px] lg:mb-[30px] tracking-[-1px]">
          KZELYN<br />ARTILLO
        </h1>
        
        <h2 className="font-montserrat font-bold text-[13px] sm:text-[15px] lg:text-[17px] text-[#B9664B] tracking-[1px] lg:tracking-[1.5px] leading-[1.6] mb-[20px] lg:mb-[30px] max-w-[300px] lg:max-w-none">
          MARKETING-DRIVEN. PEOPLE-FOCUSED.<br className="hidden lg:block" /> RESULTS-ORIENTED.
        </h2>
        
        <p className="font-inter text-[14px] lg:text-base leading-[1.6] text-[#444] mb-8 lg:mb-10 max-w-[320px] lg:max-w-[480px]">
          A fresh graduate in Marketing Management with a passion for building brands, connecting with people, and creating impact through strategic ideas.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mb-16 lg:mb-20 w-full lg:w-auto">
          <button className="bg-primary-dark text-white py-4 px-8 rounded-full font-inter font-semibold text-[15px] flex items-center justify-center gap-3 cursor-pointer border-none transition-all hover:-translate-y-0.5 hover:bg-[#333] w-[200px] lg:w-auto">
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
        
        {/* Skills Container (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-5 bg-surface/70 backdrop-blur-md rounded-[20px] py-[30px] px-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white/60 max-w-[650px]">
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
      <div className="w-full lg:flex-1 relative mt-16 lg:mt-0 flex flex-col items-center lg:block min-h-[500px] lg:min-h-0">
        
        {/* Mobile Background Gradient Overlay (optional to enhance the circle) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#E1C1B1_0%,rgba(246,237,229,0)_60%)] -z-10 lg:hidden opacity-80 rounded-full scale-150"></div>

        <div className="relative lg:absolute lg:top-[15%] lg:left-[15%] bg-surface p-[24px] lg:p-[30px] rounded-[24px] w-[220px] lg:w-[250px] shadow-[0_15px_30px_rgba(0,0,0,0.06)] z-10 translate-x-[40px] lg:translate-x-0 mb-10 lg:mb-0 text-left">
          <div className="bg-[#EDDFD5] w-[44px] h-[44px] rounded-xl flex items-center justify-center mb-4 text-[#B9664B]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <path d="M7 17V13M12 17V9M17 17V5"/>
            </svg>
          </div>
          <h3 className="font-inter font-bold text-[15px] lg:text-base mb-2">Goal-Driven</h3>
          <p className="font-inter text-[12px] lg:text-[13px] leading-[1.6] text-[#666]">Turning insights into impactful marketing strategies.</p>
        </div>
        
        <div className="hidden lg:block absolute top-[38%] left-[27%] w-[150px] h-[250px] border-l border-b border-white rounded-bl-[80px] opacity-60 z-0"></div>
        
        <div className="relative lg:absolute lg:bottom-[10%] lg:right-[15%] bg-primary-dark text-white py-8 lg:py-10 px-[24px] lg:px-[30px] rounded-[24px] w-[240px] lg:w-[280px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-10 -translate-x-[40px] lg:translate-x-0 mb-12 lg:mb-0 text-left">
          <div className="bg-white w-[40px] lg:w-[44px] h-[40px] lg:h-[44px] rounded-xl flex items-center justify-center mb-5 text-primary-dark">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3 className="font-inter font-bold text-[15px] lg:text-base mb-2">People First</h3>
          <p className="font-inter text-[12px] lg:text-[13px] leading-[1.6] text-[#AAA]">
            Understanding audiences.<br/>
            Building relationships.<br/>
            Driving loyalty.
          </p>
        </div>
        
        <div className="relative lg:absolute lg:top-[45%] lg:right-[5%] -rotate-[8deg] z-10 flex flex-col items-center lg:items-start translate-x-[50px] lg:translate-x-0 mt-4 lg:mt-0">
          <div className="font-great-vibes text-[48px] lg:text-[65px] text-primary-dark leading-[1.1]">Strategy</div>
          <div className="font-great-vibes text-[48px] lg:text-[65px] text-primary-dark leading-[1.1] ml-5">Creativity</div>
          <div className="font-great-vibes text-[48px] lg:text-[65px] text-primary-dark leading-[1.1] ml-10">Connection.</div>
          <div className="self-end mt-2.5 w-[80px] lg:w-[100px] h-1 bg-[#C06B52] rounded-sm rotate-[5deg]"></div>
        </div>
        
      </div>
    </section>
  );
}
