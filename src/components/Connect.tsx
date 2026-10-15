import React from 'react';

export function Connect() {
  return (
    <section id="contact" className="flex flex-col lg:flex-row w-screen shrink-0 h-[100dvh] px-6 lg:px-28 xl:px-36 lg:pb-14 items-start lg:items-center justify-start lg:justify-between z-10 relative overflow-y-auto lg:overflow-hidden snap-center bg-[#151515] text-white">
      
      {/* Abstract Sphere Graphic */}
      <div className="absolute right-[-30%] top-[30%] lg:right-[-10%] lg:top-[10%] w-[120vw] h-[120vw] lg:w-[60vw] lg:h-[60vw] rounded-full bg-[radial-gradient(circle_at_40%_40%,#C88E75_0%,#8A4E38_50%,#3A1F16_100%)] opacity-95 z-0 pointer-events-none"></div>

      {/* Grid Pattern Bottom Right */}
      <div className="absolute bottom-10 right-10 w-[150px] h-[100px] opacity-[0.15] pointer-events-none z-0 hidden sm:block" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

      <div className="flex flex-col lg:flex-row w-full min-h-full lg:items-center pt-16 pb-32 lg:py-0 max-w-[1400px] mx-auto justify-start lg:justify-between z-10 relative">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center max-w-full lg:max-w-[540px] mt-4 lg:mt-0">
          <div className="mb-8 lg:mb-6">
            <p className="font-montserrat text-[#C95F3B] font-bold text-[12px] lg:text-[13px] tracking-[2px] uppercase mb-2 lg:mb-3">
              Let's Connect
            </p>
            <h2 className="font-inter font-bold text-[40px] sm:text-[50px] lg:text-[46px] xl:text-[54px] leading-[1.08] text-white tracking-[-1px] mb-3 lg:mb-4">
              Let's create<br />something<br className="hidden lg:block"/> amazing together.
            </h2>
            <p className="font-inter text-[15px] lg:text-[15px] text-white/80 leading-[1.6] max-w-[360px]">
              I'm always excited to learn, collaborate, and contribute to impactful ideas.
            </p>
          </div>

          {/* Glass Card */}
          <div className="w-full max-w-[420px] bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-[20px] p-6 lg:p-7 shadow-2xl relative z-20">
            <h3 className="font-inter font-semibold text-[16px] text-white mb-3">Get in touch</h3>
            <div className="w-8 h-[1px] bg-white/20 mb-5"></div>
            
            <div className="flex flex-col gap-4">
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
            <div className="absolute right-[0px] lg:right-[-30px] bottom-[-55px] lg:bottom-[-20px] rotate-[-5deg] z-30 pointer-events-none mix-blend-screen text-right">
              <span className="font-great-vibes text-[28px] lg:text-[32px] text-white/90 leading-tight block pr-4">
                I'd love to<br/>hear from you!
              </span>
              <svg width="80" height="30" viewBox="0 0 100 40" fill="none" stroke="white" strokeWidth="1" className="absolute -bottom-4 right-0 opacity-80">
                <path d="M10 20 Q 30 10, 50 25 T 90 15" />
                <path d="M60 25 Q 75 40, 85 20" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column / Desktop Balance Card */}
        <div className="flex-1 hidden lg:flex flex-col items-end justify-center pr-12 z-20">
          <div className="bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-[28px] p-8 max-w-[380px] shadow-2xl relative overflow-hidden">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[12px] font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Work
            </div>

            <h4 className="font-inter font-bold text-[22px] text-white leading-snug mb-3">
              Ready to bring strategic value to your team.
            </h4>
            <p className="font-inter text-[14px] text-white/70 leading-relaxed mb-6">
              Whether you need end-to-end campaign execution, audience research, or brand positioning, let's talk about what we can accomplish.
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10 text-white/60 text-[12px]">
              <span>Marketing Management</span>
              <span>•</span>
              <span>Fresh Perspective</span>
            </div>
          </div>
        </div>
        
        {/* Spacer for mobile navbar */}
        <div className="h-40 lg:h-0 w-full flex-shrink-0"></div>
      </div>
    </section>
  );
}
