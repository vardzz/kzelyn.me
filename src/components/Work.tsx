'use client';

import Image from 'next/image';

export function Work() {
  const projects = [
    {
      title: 'Omnichannel Brand Awareness Campaign',
      category: 'Brand Strategy · Digital Campaign',
      tag: 'Brand Strategy',
      tagBg: 'bg-rose-soft',
      metrics: '+45% Organic Reach · 28% Engagement Uplift',
      description: 'An integrated multi-week social and digital campaign designed to build emotional resonance with a younger demographic through genuine storytelling and targeted creative content.',
      deliverables: ['Audience Persona Mapping', 'Content Calendar & Creative Direction', 'Performance Tracking & Reporting'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Consumer Market Research & Positioning',
      category: 'Market Research · Consumer Insights',
      tag: 'Audience Insights',
      tagBg: 'bg-sage-soft',
      metrics: '200+ Survey Responses · 2 Core Personas Defined',
      description: 'A deep-dive research initiative combining qualitative surveys and competitor benchmarking to redefine product messaging and uncover key friction points in the customer journey.',
      deliverables: ['Competitor Matrix & Analysis', 'Qualitative Survey Synthesis', 'Actionable Go-to-Market Deck'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Content Strategy & Editorial Growth Plan',
      category: 'Content Marketing · Community Building',
      tag: 'Content Strategy',
      tagBg: 'bg-bone',
      metrics: '35% Retention Boost · Scalable Content Engine',
      description: 'Established a sustainable content operations framework with branded visual guidelines, narrative templates, and weekly editorial rhythms that consistently drove audience loyalty.',
      deliverables: ['Narrative & Voice Guidelines', 'Monthly Content Playbooks', 'Cross-Channel Distribution Schedule'],
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section 
      id="work" 
      className="py-20 sm:py-28 lg:py-36 px-8 sm:px-16 md:px-20 lg:px-28 xl:px-36 w-full border-t border-line/60"
      aria-label="Selected Work"
    >
      <div className="max-w-[1120px] mx-auto w-full">
      {/* Eyebrow Label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-6 h-[1px] bg-oak/60" aria-hidden="true" />
        <p className="text-[12px] font-medium tracking-[0.18em] uppercase text-oak">
          Selected Work
        </p>
      </div>

      {/* Section Heading: 44px / 30px, DM Sans 300, line-height 1.15. Max 1 signature word */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
        <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-light leading-[1.15] tracking-[-0.01em] text-espresso max-w-[640px]">
          Case studies in research, narrative, and measurable <span className="signature">growth</span>.
        </h2>
        <p className="text-[16px] text-oak max-w-[340px] leading-relaxed">
          Each project represents an intentional balance of quantitative insight and customer-first design.
        </p>
      </div>

      {/* Projects List: Editorial Stacked Cards with 24-32px radius, hairline border, soft shadow */}
      <div className="space-y-12 sm:space-y-16">
        {projects.map((project, index) => (
          <article 
            key={index}
            className="p-8 sm:p-12 rounded-[32px] bg-bone/50 border border-line shadow-[0_8px_30px_rgba(62,31,22,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(62,31,22,0.1)] group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* Left Column: Context & Metrics (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-[12px] uppercase tracking-[0.12em] font-medium text-espresso px-3 py-1 rounded-full ${project.tagBg}`}>
                      {project.tag}
                    </span>
                    <span className="text-[13px] text-oak font-normal">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-[24px] sm:text-[28px] font-light leading-[1.2] text-espresso mb-4 group-hover:text-rust transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="inline-block py-1.5 px-3 rounded-lg bg-paper/80 border border-line/60 text-[13px] font-medium text-rust mb-6">
                    {project.metrics}
                  </div>

                  <p className="text-[15px] sm:text-[16px] text-espresso/85 leading-[1.75] max-w-[540px]">
                    {project.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-6 border-t border-line/60">
                  <span className="text-[12px] uppercase tracking-[0.18em] font-medium text-oak block mb-3">
                    Key Deliverables
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item, dIdx) => (
                      <span 
                        key={dIdx}
                        className="text-[12px] text-espresso/90 bg-paper/90 px-3 py-1 rounded-full border border-line/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Mockup (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-paper border border-line shadow-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-[#3E1F16]/[0.03] pointer-events-none" />
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>

      {/* Quiet signpost at the bottom */}
      <div className="mt-16 text-center">
        <p className="text-[14px] text-oak">
          Interested in more specific case study details or documentation?{' '}
          <a 
            href="#connect" 
            className="text-espresso underline decoration-rose underline-offset-4 hover:decoration-rust transition-colors"
          >
            Let&apos;s start a conversation
          </a>
          .
        </p>
      </div>

      </div>
    </section>
  );
}
