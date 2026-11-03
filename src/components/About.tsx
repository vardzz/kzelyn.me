'use client';

import Image from 'next/image';

export function About() {
  const highlights = [
    { number: '01+', label: 'Major Campaigns Led', detail: 'End-to-end execution & strategic oversight' },
    { number: '10+', label: 'Initiatives Supported', detail: 'From audience research to content calendars' },
    { number: '100%', label: 'Commitment to Growth', detail: 'Rooted in empathy, driven by results' },
  ];

  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 lg:py-36 px-6 sm:px-12 max-w-[1120px] mx-auto border-t border-line/60"
      aria-label="About Me"
    >
      {/* Section Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-6 h-[1px] bg-oak/60" aria-hidden="true" />
        <p className="text-[12px] font-medium tracking-[0.18em] uppercase text-oak">
          About Me
        </p>
      </div>

      {/* Section Heading: 44px / 30px, DM Sans 300, line-height 1.15. Max 1 signature word */}
      <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-light leading-[1.15] tracking-[-0.01em] text-espresso mb-12 lg:mb-16 max-w-[760px]">
        More than creative concepts, I build work that creates lasting <span className="signature">connection</span>.
      </h2>

      {/* Editorial 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
        
        {/* Left Column: Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-[16px] sm:text-[17px] font-normal leading-[1.75] text-espresso/90 max-w-[640px]">
          <p>
            I believe strong marketing doesn&apos;t come from shouting louder—it comes from understanding people deeper. When a brand genuinely listens to its audience, loyalty and conversion happen naturally.
          </p>
          <p>
            As a fresh graduate in Marketing Management, I bring a curious mind and an analytical rigor to creative storytelling. Whether conducting qualitative audience surveys, crafting cross-platform content strategies, or refining brand positioning, I focus on the intersection of human empathy and practical metrics.
          </p>
          <p className="text-oak">
            Outside of marketing decks and analytics, you&apos;ll often find me curating visual inspirations, exploring typography, or exploring how small boutique brands build fierce customer affinity.
          </p>

          {/* Core Philosophy Quote Card */}
          <div className="mt-8 p-6 sm:p-8 rounded-[24px] bg-bone/60 border border-line">
            <p className="text-[15px] sm:text-[16px] italic leading-[1.6] text-espresso/90 mb-3">
              &ldquo;Good marketing feels like a thoughtful recommendation from a trusted friend—never intrusive, always relevant.&rdquo;
            </p>
            <span className="text-[12px] uppercase tracking-[0.18em] font-medium text-oak">
              Personal Guiding Principle
            </span>
          </div>
        </div>

        {/* Right Column: Visual Portrait Card (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[28px] overflow-hidden bg-bone border border-line p-3 sm:p-4 shadow-[0_8px_30px_rgba(62,31,22,0.06)]">
            <div className="relative aspect-[3/4] rounded-[22px] overflow-hidden bg-rose-soft/30">
              <Image
                src="/kz-pic.png"
                alt="Kzelyn Artillo - Marketer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              <div className="absolute inset-0 bg-[#3E1F16]/[0.05] pointer-events-none" />
            </div>

            <div className="pt-4 pb-1 px-3 flex items-center justify-between text-[13px] text-oak">
              <span>Kzelyn Artillo</span>
              <span className="text-[12px] uppercase tracking-[0.14em] text-rust font-medium">
                Marketer
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Stats / Milestones Grid: 3 cards on --bone with 24px radius */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {highlights.map((item, idx) => (
          <div 
            key={idx}
            className="p-8 rounded-[24px] bg-bone/70 border border-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(62,31,22,0.08)]"
          >
            <div className="text-[36px] sm:text-[44px] font-light text-espresso leading-none mb-3">
              {item.number}
            </div>
            <div className="text-[14px] font-medium text-espresso mb-1">
              {item.label}
            </div>
            <div className="text-[13px] text-oak leading-relaxed">
              {item.detail}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
