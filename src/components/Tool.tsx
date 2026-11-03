'use client';

export function Tool() {
  const capabilities = [
    {
      title: 'Market Research & Insights',
      description: 'Uncovering consumer needs and market patterns through qualitative surveys, interview synthesis, and competitive benchmarking.',
      tag: 'Strategic Focus',
      tagColor: 'bg-sage-soft',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <path d="M11 8v6M8 11h6" />
        </svg>
      ),
    },
    {
      title: 'Brand Positioning & Narrative',
      description: 'Developing consistent voice, messaging frameworks, and distinct brand identities that resonate with specific audience segments.',
      tag: 'Identity',
      tagColor: 'bg-rose-soft',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: 'Campaign & Content Strategy',
      description: 'Orchestrating end-to-end promotional calendars, cross-channel social initiatives, and structured content distribution.',
      tag: 'Execution',
      tagColor: 'bg-sage-soft',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      title: 'Digital Marketing & Growth',
      description: 'Designing audience acquisition journeys, targeted social ads, email nurture flows, and conversion-focused touchpoints.',
      tag: 'Growth',
      tagColor: 'bg-rose-soft',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ];

  const tools = [
    'Google Analytics',
    'Meta Business Suite',
    'Figma',
    'Canva',
    'Notion',
    'Microsoft Excel / Sheets',
    'Qualitative Research',
    'Social Analytics',
  ];

  return (
    <section 
      id="toolkit" 
      className="py-20 sm:py-28 lg:py-36 px-6 sm:px-12 bg-bone/40 border-t border-line/60"
      aria-label="Capabilities and Toolkit"
    >
      <div className="max-w-[1120px] mx-auto">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-[1px] bg-oak/60" aria-hidden="true" />
          <p className="text-[12px] font-medium tracking-[0.18em] uppercase text-oak">
            Capabilities &amp; Toolkit
          </p>
        </div>

        {/* Section Heading: 44px / 30px, DM Sans 300, line-height 1.15. Max 1 signature word */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-light leading-[1.15] tracking-[-0.01em] text-espresso max-w-[680px]">
            The quiet discipline behind every strategic <span className="signature">initiative</span>.
          </h2>
          <p className="text-[16px] text-oak max-w-[360px] leading-relaxed">
            Combining structured marketing frameworks with creative empathy to deliver tangible, measurable growth.
          </p>
        </div>

        {/* 4 Cards Grid - 24px radius, hairline border, soft shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {capabilities.map((item, index) => (
            <div 
              key={index}
              className="p-8 sm:p-10 rounded-[28px] bg-paper border border-line shadow-[0_8px_30px_rgba(62,31,22,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(62,31,22,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-espresso p-2.5 rounded-2xl bg-bone/70 border border-line/50">
                    {item.icon}
                  </div>
                  {/* Tag: Pill, sage-soft or rose-soft, espresso text, 12px uppercase 0.12em */}
                  <span className={`text-[12px] uppercase tracking-[0.12em] font-medium text-espresso px-3 py-1 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-[20px] sm:text-[22px] font-normal text-espresso mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-espresso/80 leading-[1.7]">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-line/40 flex items-center gap-2 text-[13px] text-oak">
                <span className="w-1.5 h-1.5 rounded-full bg-rust/70" />
                <span>Strategic Delivery</span>
              </div>
            </div>
          ))}
        </div>

        {/* Toolkit Pills Strip */}
        <div className="p-8 sm:p-10 rounded-[28px] bg-paper border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-[12px] uppercase tracking-[0.18em] font-medium text-oak block mb-1">
              Software &amp; Methodologies
            </span>
            <p className="text-[15px] text-espresso font-normal">
              Platforms I leverage daily to analyze, execute, and deliver results.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 max-w-[560px]">
            {tools.map((tool, idx) => (
              <span 
                key={idx}
                className="text-[12px] font-medium text-espresso bg-bone/80 border border-line/60 px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:bg-rose-soft"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
