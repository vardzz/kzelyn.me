export function About() {
  return (
    <section id="about" className="flex flex-col lg:flex-row w-full lg:w-screen shrink-0 lg:h-screen pt-20 lg:pt-0 px-6 lg:px-40 items-center justify-between z-10 relative overflow-hidden lg:overflow-visible">
      
      {/* Left Column (Text & Stats) */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-full lg:max-w-[600px] text-left z-20 mt-10 lg:mt-0">
        <div className="font-montserrat text-[#B9664B] font-bold text-[12px] lg:text-[14px] tracking-[2px] mb-4 lg:mb-6 uppercase">
          About Me
        </div>
        
        <h2 className="font-inter font-bold text-[40px] sm:text-[50px] lg:text-[65px] leading-[1.1] text-primary-dark mb-6 lg:mb-8 tracking-[-1px]">
          More than ideas,<br />I create impact.
        </h2>
        
        <p className="font-inter text-[15px] lg:text-base leading-[1.7] text-[#444] mb-12 lg:mb-16 max-w-[480px]">
          I'm a marketer who loves turning ideas into meaningful connections. From market research to campaign execution, I enjoy the challenge of solving problems and driving results.
        </p>
        
        {/* Stats */}
        <div className="flex items-start gap-8 lg:gap-16">
          <div>
            <div className="font-inter font-bold text-[32px] lg:text-[40px] text-primary-dark leading-none mb-2">1+</div>
            <div className="font-inter text-[13px] lg:text-[14px] text-[#666] leading-[1.4]">Projects<br/>Completed</div>
          </div>
          <div>
            <div className="font-inter font-bold text-[32px] lg:text-[40px] text-primary-dark leading-none mb-2">10+</div>
            <div className="font-inter text-[13px] lg:text-[14px] text-[#666] leading-[1.4]">Campaigns<br/>Supported</div>
          </div>
          <div>
            <div className="font-inter font-bold text-[32px] lg:text-[40px] text-primary-dark leading-none mb-2">100%</div>
            <div className="font-inter text-[13px] lg:text-[14px] text-[#666] leading-[1.4]">Passion for<br/>Marketing</div>
          </div>
        </div>
      </div>

      {/* Right Column (Image & Badge) */}
      <div className="w-full lg:flex-1 relative mt-20 lg:mt-0 flex justify-center lg:justify-end items-center h-full pb-24 lg:pb-0">
        
        <div className="relative w-[300px] h-[450px] lg:w-[420px] lg:h-[600px]">
          {/* Pill Image Container */}
          <div className="w-full h-full rounded-[200px] overflow-hidden bg-white/50 border border-white/40 shadow-xl relative z-10">
            {/* Using a placeholder unsplash image that matches the notebook/laptop vibe */}
            <img 
              src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1000&auto=format&fit=crop" 
              alt="Notebook and Laptop" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute top-[40%] -left-[40px] lg:-left-[60px] w-[110px] h-[110px] lg:w-[140px] lg:h-[140px] bg-[#E0BAA9] rounded-full flex items-center justify-center shadow-lg z-20">
            {/* Rotating Text */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full p-2" style={{ animation: 'spin 15s linear infinite' }}>
              <path id="curve" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text className="text-[12px] font-montserrat font-bold tracking-[2px] uppercase fill-primary-dark">
                <textPath href="#curve" startOffset="0%">
                  CREATE • GROW • THRIVE • 
                </textPath>
              </text>
            </svg>
            {/* Center Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-dark">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" />
              </svg>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
