'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 px-6 sm:px-12 max-w-[1120px] mx-auto min-h-[90vh] flex flex-col justify-center"
      aria-label="Introduction"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column (Text & Actions) - 7 cols */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[1px] bg-oak/60" aria-hidden="true" />
            <p className="text-[12px] font-medium tracking-[0.18em] uppercase text-oak">
              Marketing Management · Brand Strategy
            </p>
          </div>

          {/* Hero Heading: 72px/40px, DM Sans 300, line-height 1.05, tracking -0.02em */}
          {/* Signature font rule: Max 1 signature moment (name) */}
          <h1 className="text-[40px] sm:text-[54px] lg:text-[72px] font-light leading-[1.05] tracking-[-0.02em] text-espresso mb-8">
            Hello, I&apos;m <span className="signature">Kzelyn</span>.<br />
            Crafting brands with purpose &amp; care.
          </h1>

          {/* Body description: 16-17px, line height 1.75, max width 640px */}
          <p className="text-[16px] sm:text-[17px] font-normal leading-[1.75] text-espresso/85 max-w-[540px] mb-10">
            A marketing graduate passionate about turning audience insights into quiet, meaningful connections. From strategic research to campaign execution, I build work that endures.
          </p>

          {/* Buttons: EXACTLY 1 Primary button per viewport + 1 Secondary button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* Primary: bg-rose, text-espresso, pill, padding 14px 32px, DM Sans 500 14px. Hover: bg-rust, text-paper */}
            <a
              href="#work"
              className="inline-flex items-center justify-center bg-rose hover:bg-rust text-espresso hover:text-paper rounded-full px-8 py-3.5 text-[14px] font-medium tracking-[0.04em] transition-all duration-300 shadow-[0_8px_30px_rgba(62,31,22,0.06)] hover:shadow-[0_14px_40px_rgba(62,31,22,0.1)] active:scale-[0.99]"
            >
              Explore Selected Work
            </a>

            {/* Secondary: transparent, 1px espresso border, espresso text, pill. Hover: fill rose-soft */}
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-transparent hover:bg-rose-soft text-espresso border border-espresso/30 hover:border-espresso/60 rounded-full px-7 py-3.5 text-[14px] font-normal transition-all duration-300"
            >
              Read Background
            </a>
          </div>

          {/* Minimal Quick Meta */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-line/60 text-[13px] text-oak">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage" />
              <span>Available for full-time &amp; freelance</span>
            </div>
            <div className="hidden sm:block text-line">·</div>
            <div className="hidden sm:block">Based in the Philippines</div>
          </div>

        </div>

        {/* Right Column (Editorial Visual) - 5 cols */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          
          {/* Subtle warm wash backdrop */}
          <div className="relative w-full max-w-[380px] lg:max-w-[420px]">
            
            {/* Card Container with 24-32px radius, hairline border, soft shadow */}
            <div className="relative rounded-[28px] overflow-hidden bg-bone/70 border border-line p-3 sm:p-4 shadow-[0_8px_30px_rgba(62,31,22,0.06)] transition-all duration-500 hover:shadow-[0_14px_40px_rgba(62,31,22,0.1)] group">
              <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden bg-rose-soft/40">
                <Image
                  src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1000&auto=format&fit=crop"
                  alt="Minimal workspace with notebook and coffee in warm natural lighting"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                />
                {/* Very subtle warm overlay to sit inside the palette */}
                <div className="absolute inset-0 bg-[#3E1F16]/[0.04] pointer-events-none" />
              </div>

              {/* Editorial bottom caption */}
              <div className="pt-4 pb-2 px-3 flex items-center justify-between text-[13px] text-oak">
                <span>Lookbook &amp; Strategy</span>
                <span className="text-[12px] uppercase tracking-[0.12em] px-2.5 py-0.5 rounded-full bg-sage-soft text-espresso font-medium">
                  Edition 2026
                </span>
              </div>
            </div>

            {/* Quiet accent badge behind */}
            <div 
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-rose-soft/50 -z-10 blur-xl pointer-events-none"
              aria-hidden="true" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}
