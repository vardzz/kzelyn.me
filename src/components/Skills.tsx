'use client';

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'PHP', 'JavaScript', 'TypeScript', 'Python', 'C#'],
    },
    {
      category: 'Web Development',
      skills: ['React', 'Next.js', 'Laravel', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['VS Code', 'Git', 'Docker', 'MySQL', 'phpMyAdmin', 'Postman'],
    },
    {
      category: 'Design & Productivity',
      skills: ['Figma', 'Canva', 'Notion', 'Microsoft Office', 'Adobe Photoshop'],
    },
  ];

  return (
    <section 
      id="skills" 
      className="relative w-full py-12 sm:py-16 lg:py-20 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-[#F3EFE9] text-[#171513] overflow-hidden scroll-mt-20 lg:scroll-mt-24"
      aria-label="Skills & Technical Proficiency"
    >
      <div className="max-w-[1360px] mx-auto w-full relative">
        
        {/* ================= TOP BAR ================= */}
        <div className="flex items-center justify-between mb-10 sm:mb-12 lg:mb-16">
          {/* Left: SKILLS + Hairline */}
          <div className="flex items-center gap-5 sm:gap-6 flex-1 pr-6">
            <span className="font-sans font-medium text-[11px] sm:text-[12px] tracking-[0.24em] text-[#171513] uppercase select-none shrink-0">
              SKILLS
            </span>
            <div className="h-[1px] bg-[#A9A39B]/55 w-32 sm:w-52 md:w-72 max-w-full" aria-hidden="true" />
          </div>

          {/* Right: ✦ TECHNICAL PROFICIENCY */}
          <div className="flex items-center gap-3 shrink-0">
            <svg 
              className="w-3.5 h-3.5 text-[#171513] fill-current" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
            <span className="font-sans font-medium text-[11px] sm:text-[12px] tracking-[0.24em] text-[#171513] uppercase select-none">
              TECHNICAL PROFICIENCY
            </span>
          </div>
        </div>

        {/* ================= MAIN 2-COLUMN EDITORIAL SPREAD ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-stretch relative">
          
          {/* ========== LEFT COLUMN: GIANT TITLE, WATERMARK & SUMMARY ========== */}
          <div className="lg:col-span-5 flex flex-col justify-between relative z-10 pr-0 lg:pr-6">
            
            {/* Giant Watermark Serif 'S' in Background */}
            <span 
              className="absolute -left-6 sm:left-0 top-[46%] -translate-y-1/2 font-serif text-[380px] sm:text-[460px] lg:text-[520px] xl:text-[580px] font-normal leading-none text-[#171513]/[0.045] select-none pointer-events-none -z-10" 
              aria-hidden="true"
            >
              S
            </span>

            <div>
              {/* Oversized Headline */}
              <h2 className="font-serif text-[68px] sm:text-[88px] lg:text-[104px] xl:text-[118px] font-normal leading-[0.92] tracking-[-0.03em] text-[#171513] select-none uppercase">
                SKILLS
              </h2>

              {/* Narrative Summary */}
              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#4A453F] leading-[1.7] max-w-[340px] mt-6 sm:mt-8">
                A diverse set of technical and creative skills enabling me to build, design, and innovate.
              </p>
            </div>

            {/* Bottom: 03 / 04 Counter + Horizontal Line */}
            <div className="flex items-center pt-10 sm:pt-14 lg:pt-20">
              <div className="flex items-baseline shrink-0">
                <span className="font-serif italic text-[34px] sm:text-[38px] font-normal text-[#171513] leading-none">
                  03
                </span>
                <span className="font-serif text-[14px] sm:text-[15px] text-[#77716A] font-normal ml-1.5">
                  / 04
                </span>
              </div>
              <div className="h-[1px] bg-[#A9A39B]/55 flex-1 ml-5 sm:ml-7" aria-hidden="true" />
            </div>

          </div>

          {/* ========== RIGHT COLUMN: 4 SKILL CATEGORIES WITH DIVIDERS ========== */}
          <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#A9A39B]/55 pt-8 lg:pt-2 pb-2 pl-0 lg:pl-10 xl:pl-14 space-y-8 sm:space-y-10 lg:space-y-11">
            {skillCategories.map((group, idx) => (
              <div key={idx} className="group">
                {/* Category Header + Horizontal Rule */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <h3 className="font-serif italic text-[22px] sm:text-[25px] lg:text-[27px] font-normal text-[#171513] shrink-0 leading-tight">
                    {group.category}
                  </h3>
                  <div className="h-[1px] bg-[#A9A39B]/55 flex-1" aria-hidden="true" />
                </div>

                {/* Skills Inline List */}
                <p className="font-sans text-[13.5px] sm:text-[14px] lg:text-[14.5px] text-[#2D2824] leading-relaxed mt-2.5 sm:mt-3">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx}>
                      <span className="transition-colors duration-200 hover:text-black">
                        {skill}
                      </span>
                      {sIdx < group.skills.length - 1 && (
                        <span className="text-[#A9A39B] mx-2 select-none" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;

