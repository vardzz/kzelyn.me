import React from 'react';

export function Connect() {
  return (
    <section id="contact" className="flex flex-col lg:flex-row w-screen shrink-0 h-[100dvh] px-6 lg:px-40 items-start lg:items-center justify-start lg:justify-between z-10 relative overflow-y-auto lg:overflow-hidden snap-center bg-[#151515] text-white">
      
      {/* Abstract Sphere Graphic */}
      <div className="absolute right-[-30%] top-[30%] lg:right-[-10%] lg:top-[10%] w-[120vw] h-[120vw] lg:w-[60vw] lg:h-[60vw] rounded-full bg-[radial-gradient(circle_at_40%_40%,#C88E75_0%,#8A4E38_50%,#3A1F16_100%)] opacity-95 z-0 pointer-events-none"></div>

      {/* Grid Pattern Bottom Right */}
      <div className="absolute bottom-10 right-10 w-[150px] h-[100px] opacity-[0.15] pointer-events-none z-0 hidden sm:block" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

      <div className="flex flex-col lg:flex-row w-full min-h-full lg:items-center pt-16 pb-32 lg:py-0 max-w-[1400px] mx-auto justify-start lg:justify-center z-10 relative">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center max-w-full lg:max-w-[600px] mt-4 lg:mt-0">
          <div className="mb-10 lg:mb-12">
            <p className="font-montserrat text-[#C95F3B] font-bold text-[12px] lg:text-[14px] tracking-[2px] uppercase mb-4">
              Let's Connect
            </p>
            <h2 className="font-inter font-bold text-[40px] sm:text-[50px] lg:text-[60px] leading-[1.1] text-white tracking-[-1px] mb-6">
              Let's create<br />something<br className="hidden lg:block"/> amazing together.
            </h2>
            <p className="font-inter text-[15px] lg:text-[16px] text-white/80 leading-[1.6] max-w-[320px]">
              I'm always excited to learn, collaborate, and contribute to impactful ideas.
            </p>
          </div>

          {/* Glass Card */}
          <div className="w-full max-w-[400px] bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-[20px] p-6 lg:p-8 shadow-2xl relative z-20">
            <h3 className="font-inter font-semibold text-[16px] text-white mb-4">Get in touch</h3>
            <div className="w-8 h-[1px] bg-white/20 mb-6"></div>
            
            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M2 4l10 8 10-8"></path>
                  </svg>
                </div>
                <span className="font-inter text-[14px] text-white/90">kzelynartillo@gmail.com</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="font-inter text-[14px] text-white/90">Philippines</span>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <span className="font-inter text-[14px] text-white/90">linkedin.com/in/kzelynartillo</span>
              </div>
            </div>

            {/* Cursive Text Overlay */}
            <div className="absolute right-[0px] lg:right-[-40px] bottom-[-60px] lg:bottom-[-40px] rotate-[-5deg] z-30 pointer-events-none mix-blend-screen text-right">
              <span className="font-great-vibes text-[28px] lg:text-[34px] text-white/90 leading-tight block pr-4">
                I'd love to<br/>hear from you!
              </span>
              <svg width="80" height="30" viewBox="0 0 100 40" fill="none" stroke="white" strokeWidth="1" className="absolute -bottom-4 right-0 opacity-80">
                <path d="M10 20 Q 30 10, 50 25 T 90 15" />
                <path d="M60 25 Q 75 40, 85 20" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column / Spacer for desktop balance */}
        <div className="flex-1 hidden lg:flex"></div>
        
        {/* Spacer for mobile navbar */}
        <div className="h-40 lg:h-0 w-full flex-shrink-0"></div>
      </div>
    </section>
  );
}
