import React from 'react';

export function Tool() {
  const skills = [
    { name: 'Market Research', icon: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> },
    { name: 'Brand Strategy', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
    { name: 'Digital Marketing', icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /> },
    { name: 'Content Creation', icon: <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /> },
    { name: 'Campaign Management', icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /> },
    { name: 'Data Analysis', icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> },
  ];

  return (
    <section id="tool" className="flex flex-col lg:flex-row w-screen shrink-0 h-[100dvh] px-6 lg:px-40 items-center justify-center lg:justify-between z-10 relative overflow-y-auto lg:overflow-hidden snap-center bg-[#151515] text-white">
      
      {/* Decorative Background Line */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-[40%] h-full opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-0 w-[200%] h-[2px] bg-white/20 -rotate-45 transform origin-left"></div>
      </div>

      <div className="flex flex-col lg:flex-row w-full h-full lg:items-center py-20 lg:py-0 max-w-[1400px] mx-auto">
        
        {/* Left Column: Heading and Skills */}
        <div className="flex-1 flex flex-col justify-center max-w-full lg:max-w-[500px] z-20">
          <div className="font-montserrat text-[#B9664B] font-bold text-[12px] lg:text-[14px] tracking-[2px] mb-4 uppercase">
            Skills & Tools
          </div>
          
          <h2 className="font-inter font-bold text-[40px] sm:text-[50px] lg:text-[60px] leading-[1.1] mb-12 tracking-[-1px]">
            The toolkit<br />behind the work.
          </h2>

          <h3 className="font-inter font-semibold text-[16px] lg:text-[18px] mb-6 text-white/80">
            Marketing Skills
          </h3>

          <div className="flex flex-col gap-4 lg:gap-5">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#B9664B] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {skill.icon}
                  </svg>
                </div>
                <span className="font-inter text-[15px] lg:text-[16px] text-white/90 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Tools Grid */}
        <div className="flex-1 flex flex-col justify-center items-start lg:items-end mt-16 lg:mt-0 z-20">
          <div className="w-full lg:w-auto lg:pr-10">
            <h3 className="font-inter font-semibold text-[16px] lg:text-[18px] mb-6 text-white/80 text-left">
              Tools I Use
            </h3>
            <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              
              {/* Canva */}
              <div className="w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] bg-[#F5ECE4] rounded-[24px] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-xl">
                <span className="font-great-vibes text-[24px] lg:text-[36px] text-[#00C4CC] tracking-tighter">Canva</span>
              </div>

              {/* Meta */}
              <div className="w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] bg-[#F5ECE4] rounded-[24px] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-xl">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0668E1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lg:w-[60px] lg:h-[60px]">
                  <path d="M12 12c-2-2-4-2-6-2S2 12 2 12s2 2 4 2 4-2 6-2 2-2 4-2 6 2 6 2-2 2-4 2-4-2-6-2"/>
                </svg>
              </div>

              {/* Google Ads */}
              <div className="w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] bg-[#F5ECE4] rounded-[24px] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-xl">
                <div className="flex items-end gap-1">
                  <div className="w-2 h-4 lg:w-3 lg:h-6 bg-[#F4B400] rounded-sm"></div>
                  <div className="w-2 h-6 lg:w-3 lg:h-10 bg-[#4285F4] rounded-sm"></div>
                  <div className="w-2 h-3 lg:w-3 lg:h-5 bg-[#0F9D58] rounded-sm"></div>
                </div>
              </div>

              {/* Excel */}
              <div className="w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] bg-[#F5ECE4] rounded-[24px] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-xl">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#107C41" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lg:w-[60px] lg:h-[60px]">
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><path d="M9 12l6 6"/><path d="M15 12l-6 6"/>
                </svg>
              </div>

              {/* Notion */}
              <div className="w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] bg-[#F5ECE4] rounded-[24px] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-xl">
                <div className="border-[3px] border-black rounded-lg w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center font-bold text-[20px] lg:text-[28px] text-black">N</div>
              </div>

              {/* CapCut */}
              <div className="w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] bg-[#F5ECE4] rounded-[24px] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-xl">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lg:w-[60px] lg:h-[60px]">
                  <path d="M19 19L5 5M19 5L5 19" />
                  <circle cx="12" cy="12" r="3" fill="black" />
                </svg>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
