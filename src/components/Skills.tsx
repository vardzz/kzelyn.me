'use client';

export function Skills() {
  const skillCategories = [
    {
      category: 'Administrative & Executive Support',
      skills: [
        'Calendar & Schedule Management',
        'Email & Inbox Management',
        'Document Preparation',
        'Data Entry & Database Management',
        'Project Coordination',
      ],
    },
    {
      category: 'Generative AI & Workflow Automation',
      skills: [
        'Prompt Engineering',
        'AI-Assisted Content Creation & Editing',
        'Automated Research Synthesis',
        'Workflow Optimization',
      ],
    },
    {
      category: 'Digital & Social Media Operations',
      skills: [
        'Social Media Content Strategy',
        'Social Media Management',
        'Copywriting',
        'Search Engine Optimization (SEO)',
        'Market Research',
      ],
    },
    {
      category: 'Tools & Software',
      skills: [
        'Generative AI Tools',
        'HubSpot (Email Marketing)',
        'Microsoft Excel',
        'Google Workspace (Docs, Sheets, Drive)',
        'Professional Communication Platforms',
      ],
    },
    {
      category: 'Interpersonal & Client Relations',
      skills: [
        'Stakeholder Communication',
        'Cross-Functional Collaboration',
        'Time Management',
        'Independent Problem-Solving',
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-28 sm:pb-36 lg:pb-44 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-[#F3EFE9] text-[#171513] overflow-hidden scroll-mt-20 lg:scroll-mt-24"
      aria-label="Skills & Competencies"
    >
      <div className="max-w-[1360px] mx-auto w-full relative">
        
        {/* ================= TOP BAR ================= */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 lg:mb-16">
          {/* Left: SKILLS + Hairline */}
          <div className="flex items-center gap-3 sm:gap-6 flex-1 pr-4 sm:pr-6">
            <span className="font-sans font-medium text-[11px] sm:text-[12px] tracking-[0.24em] text-[#171513] uppercase select-none shrink-0">
              SKILLS
            </span>
            <div className="h-[1px] bg-[#A9A39B]/55 w-16 sm:w-52 md:w-72 max-w-full" aria-hidden="true" />
          </div>

          {/* Right: ✦ SKILLS & COMPETENCIES */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <svg 
              className="w-3.5 h-3.5 text-[#171513] fill-current" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
            <span className="font-sans font-medium text-[10px] sm:text-[12px] tracking-[0.16em] sm:tracking-[0.24em] text-[#171513] uppercase select-none">
              <span className="hidden sm:inline">SKILLS &amp; </span>COMPETENCIES
            </span>
          </div>
        </div>

        {/* ================= MAIN 2-COLUMN EDITORIAL SPREAD ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-stretch relative">
          
          {/* ========== LEFT COLUMN: GIANT TITLE, WATERMARK & SUMMARY ========== */}
          <div className="lg:col-span-5 flex flex-col justify-between relative z-10 pr-0 lg:pr-6">
            
            {/* Giant Watermark Serif 'S' in Background */}
            <span 
              className="absolute -left-6 sm:left-0 top-[46%] -translate-y-1/2 font-serif text-[280px] sm:text-[460px] lg:text-[520px] xl:text-[580px] font-normal leading-none text-[#171513]/[0.045] select-none pointer-events-none -z-10" 
              aria-hidden="true"
            >
              S
            </span>

            <div>
              {/* Oversized Headline */}
              <h2 className="font-serif text-[clamp(52px,13vw,118px)] font-normal leading-[0.92] tracking-[-0.03em] text-[#171513] select-none uppercase">
                SKILLS
              </h2>

              {/* Narrative Summary */}
              <p className="font-sans text-[13px] sm:text-[14.5px] text-[#4A453F] leading-[1.7] max-w-[340px] mt-4 sm:mt-8">
                A strategic blend of executive support, generative AI workflows, digital marketing, and collaborative client relations.
              </p>
            </div>

          </div>

          {/* ========== RIGHT COLUMN: 5 SKILL CATEGORIES WITH DIVIDERS ========== */}
          <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#A9A39B]/55 pt-8 lg:pt-2 pb-2 pl-0 lg:pl-10 xl:pl-14 space-y-7 sm:space-y-8 lg:space-y-9">
            {skillCategories.map((group, idx) => (
              <div key={idx} className="group">
                {/* Category Header + Horizontal Rule */}
                <div className="flex items-center gap-3 sm:gap-6">
                  <h3 className="font-serif italic text-[19px] sm:text-[23px] lg:text-[25px] font-normal text-[#171513] leading-tight min-w-0">
                    {group.category}
                  </h3>
                  <div className="h-[1px] bg-[#A9A39B]/55 flex-1 min-w-[20px]" aria-hidden="true" />
                </div>

                {/* Skills Inline List */}
                <p className="font-sans text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#2D2824] leading-relaxed mt-2 sm:mt-2.5">
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
