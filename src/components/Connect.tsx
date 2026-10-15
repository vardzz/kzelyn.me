import React from 'react';

export function Connect() {
  return (
    <section id="contact" className="flex flex-col lg:flex-row w-screen shrink-0 h-[100dvh] px-6 lg:px-28 xl:px-36 lg:pb-14 items-start lg:items-center justify-start lg:justify-between z-10 relative overflow-y-auto lg:overflow-hidden snap-center bg-[#151515] text-white">
      
      {/* Abstract Sphere Graphic */}
      <div className="absolute right-[-30%] top-[30%] lg:right-[-10%] lg:top-[10%] w-[120vw] h-[120vw] lg:w-[60vw] lg:h-[60vw] rounded-full bg-[radial-gradient(circle_at_40%_40%,#C88E75_0%,#8A4E38_50%,#3A1F16_100%)] opacity-95 z-0 pointer-events-none"></div>

      {/* Grid Pattern Bottom Right */}
      <div className="absolute bottom-10 right-10 w-[150px] h-[100px] opacity-[0.15] pointer-events-none z-0 hidden sm:block" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

      <div className="flex flex-col lg:flex-row w-full min-h-full lg:min-h-0 lg:h-auto items-start lg:items-center pt-16 pb-32 lg:py-0 max-w-[1400px] mx-auto justify-start lg:justify-between z-10 relative gap-8 lg:gap-16">
        
        {/* Left Column (Heading & Bio on Desktop) */}
        <div className="flex-1 flex flex-col justify-center max-w-full lg:max-w-[560px] mt-4 lg:mt-0">
          <div className="mb-8 lg:mb-8">
            <p className="font-montserrat text-[#C95F3B] font-bold text-[12px] lg:text-[14px] tracking-[2px] uppercase mb-2 lg:mb-4">
              Let's Connect
            </p>
            <h2 className="font-inter font-bold text-[40px] sm:text-[50px] lg:text-[52px] xl:text-[60px] leading-[1.08] text-white tracking-[-1px] mb-4 lg:mb-6">
              Let's create<br />something<br className="hidden lg:block"/> amazing together.
            </h2>
            <p className="font-inter text-[15px] lg:text-[17px] text-white/80 leading-[1.6] max-w-[420px] mb-6">
              I'm always excited to learn, collaborate, and contribute to impactful ideas and marketing strategies.
            </p>

            {/* Desktop Status Pill */}
            <div className="hidden lg:inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 text-white/90 text-[13px] font-medium backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C95F3B] animate-pulse"></span>
              Open for Marketing Roles & Collaborations
            </div>
          </div>

          {/* Mobile Only: Glass Card sits inside left column for mobile scroll order */}
          <div className="w-full max-w-[400px] bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-[20px] p-6 shadow-2xl relative z-20 lg:hidden">
            <h3 className="font-inter font-semibold text-[16px] text-white mb-4">Get in touch</h3>
            <div className="w-8 h-[1px] bg-white/20 mb-6"></div>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M2 4l10 8 10-8"></path>
                  </svg>
                </div>
                <span className="font-inter text-[14px] text-white/90">kzelynartillo@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="font-inter text-[14px] text-white/90">Philippines</span>
              </div>

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

            <div className="absolute right-[0px] bottom-[-60px] rotate-[-5deg] z-30 pointer-events-none mix-blend-screen text-right">
              <span className="font-great-vibes text-[28px] text-white/90 leading-tight block pr-4">
                I'd love to<br/>hear from you!
              </span>
              <svg width="80" height="30" viewBox="0 0 100 40" fill="none" stroke="white" strokeWidth="1" className="absolute -bottom-4 right-0 opacity-80">
                <path d="M10 20 Q 30 10, 50 25 T 90 15" />
                <path d="M60 25 Q 75 40, 85 20" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: Desktop Dedicated Glass Card */}
        <div className="hidden lg:flex flex-1 justify-end items-center z-20">
          <div className="w-full max-w-[440px] bg-white/[0.07] backdrop-blur-2xl border border-white/15 rounded-[28px] p-8 lg:p-9 shadow-[0_25px_50px_rgba(0,0,0,0.3)] relative">
            <h3 className="font-inter font-bold text-[20px] text-white mb-2">Get in touch</h3>
            <p className="font-inter text-[13px] text-white/60 mb-5">Feel free to reach out directly via email or LinkedIn.</p>
            <div className="w-10 h-[1.5px] bg-[#C95F3B] mb-6"></div>
            
            <div className="flex flex-col gap-5">
              {/* Email */}
              <a 
                href="mailto:kzelynartillo@gmail.com" 
                className="flex items-center gap-4 group hover:bg-white/[0.04] p-2.5 -mx-2.5 rounded-xl transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#C95F3B]/30 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M2 4l10 8 10-8"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-montserrat text-[11px] font-semibold text-white/50 uppercase tracking-wider">Email</div>
                  <span className="font-inter text-[14px] text-white/95 group-hover:text-white transition-colors">kzelynartillo@gmail.com</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-2.5 -mx-2.5">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="font-montserrat text-[11px] font-semibold text-white/50 uppercase tracking-wider">Location</div>
                  <span className="font-inter text-[14px] text-white/95">Philippines</span>
                </div>
              </div>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/kzelynartillo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group hover:bg-white/[0.04] p-2.5 -mx-2.5 rounded-xl transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0077B5]/30 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <div className="font-montserrat text-[11px] font-semibold text-white/50 uppercase tracking-wider">LinkedIn</div>
                  <span className="font-inter text-[14px] text-white/95 group-hover:text-white transition-colors">linkedin.com/in/kzelynartillo</span>
                </div>
              </a>
            </div>

            {/* Cursive Text Tag */}
            <div className="absolute right-[-20px] bottom-[-32px] rotate-[-5deg] z-30 pointer-events-none text-right">
              <span className="font-great-vibes text-[32px] text-white/95 leading-tight block pr-2 drop-shadow-md">
                I'd love to hear from you!
              </span>
            </div>
          </div>
        </div>
        
        {/* Spacer for mobile navbar */}
        <div className="h-40 lg:h-0 w-full flex-shrink-0"></div>
      </div>
    </section>
  );
}
