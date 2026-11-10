'use client';

import { useState } from 'react';

export function Connect() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Full-time Opportunity',
    message: '',
  });

  const topics = [
    'Full-time Opportunity',
    'Brand Strategy',
    'Consumer Research',
    'General Inquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('kzelynartillo@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="connect" 
      className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-28 sm:pb-36 lg:pb-44 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-[#F3EFE9] text-[#171513] overflow-hidden scroll-mt-20 lg:scroll-mt-24 select-none"
      aria-label="Connect and Contact"
    >
      <div className="max-w-[1360px] mx-auto w-full relative">
        
        {/* ================= TOP BAR ================= */}
        <div className="flex items-center justify-between mb-10 sm:mb-12 lg:mb-16">
          {/* Left: CONTACT + Hairline */}
          <div className="flex items-center gap-5 sm:gap-6 flex-1 pr-6">
            <span className="font-sans font-medium text-[11px] sm:text-[12px] tracking-[0.24em] text-[#171513] uppercase select-none shrink-0">
              CONTACT
            </span>
            <div className="h-[1px] bg-[#A9A39B]/55 w-32 sm:w-52 md:w-72 max-w-full" aria-hidden="true" />
          </div>

          {/* Right: ✦ GET IN TOUCH */}
          <div className="flex items-center gap-3 shrink-0">
            <svg 
              className="w-3.5 h-3.5 text-[#171513] fill-current" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
            <span className="font-sans font-medium text-[11px] sm:text-[12px] tracking-[0.24em] text-[#171513] uppercase select-none">
              GET IN TOUCH
            </span>
          </div>
        </div>

        {/* ================= MAIN 2-COLUMN EDITORIAL SPREAD ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-stretch relative">
          
          {/* ========== LEFT COLUMN: GIANT TITLE, WATERMARK & CHANNELS ========== */}
          <div className="lg:col-span-5 flex flex-col justify-between relative z-10 pr-0 lg:pr-6">
            
            {/* Giant Watermark Serif 'C' in Background */}
            <span 
              className="absolute -left-6 sm:left-0 top-[46%] -translate-y-1/2 font-serif text-[380px] sm:text-[460px] lg:text-[520px] xl:text-[580px] font-normal leading-none text-[#171513]/[0.045] select-none pointer-events-none -z-10" 
              aria-hidden="true"
            >
              C
            </span>

            <div>
              {/* Oversized Headline */}
              <h2 className="font-serif text-[68px] sm:text-[88px] lg:text-[104px] xl:text-[118px] font-normal leading-[0.92] tracking-[-0.03em] text-[#171513] select-none uppercase">
                CONTACT
              </h2>

              {/* Narrative Summary */}
              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#4A453F] leading-[1.7] max-w-[340px] mt-6 sm:mt-8">
                Available for full-time marketing roles, brand consulting, and creative collaborations. Inquiries receive a prompt response within 24 hours.
              </p>

              {/* Status Indicator Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAE5DD] border border-[#A9A39B]/40 text-[11px] font-sans font-medium text-[#171513] mt-6">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
                <span>Open for Full-time Roles &amp; Projects</span>
              </div>
            </div>

            {/* Direct Channels Section */}
            <div className="pt-10 sm:pt-14 space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between py-2.5 border-b border-[#A9A39B]/35 group">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#77716A] block font-medium">
                    DIRECT EMAIL
                  </span>
                  <a 
                    href="mailto:kzelynartillo@gmail.com"
                    className="font-sans text-[13.5px] sm:text-[14px] text-[#171513] font-medium hover:underline underline-offset-4 transition-colors"
                  >
                    kzelynartillo@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[10px] font-sans text-[#77716A] hover:text-[#171513] uppercase tracking-[0.14em] border border-[#A9A39B]/40 hover:border-[#171513] px-2.5 py-1 rounded-full transition-all cursor-pointer shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* LinkedIn & Instagram Links */}
              <div className="flex items-center justify-between py-2.5 border-b border-[#A9A39B]/35">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#77716A] block font-medium">
                    NETWORKS
                  </span>
                  <div className="flex items-center gap-4 text-[13px] font-sans text-[#171513] font-medium pt-0.5">
                    <a 
                      href="https://linkedin.com/in/kzelynartillo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 flex items-center gap-1"
                    >
                      LinkedIn ↗
                    </a>
                    <span className="text-[#A9A39B]">·</span>
                    <a 
                      href="https://instagram.com/ursweetiekz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 flex items-center gap-1"
                    >
                      Instagram ↗
                    </a>
                  </div>
                </div>
                <span className="text-[11px] text-[#77716A] font-sans tracking-wide">
                  Laguna, PH
                </span>
              </div>
            </div>

          </div>

          {/* ========== RIGHT COLUMN: EDITORIAL FORM SPREAD ========== */}
          <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#A9A39B]/55 pt-8 lg:pt-2 pb-2 pl-0 lg:pl-10 xl:pl-14">
            
            {formSubmitted ? (
              /* Success State */
              <div className="py-16 text-center space-y-4 my-auto">
                <div className="w-12 h-12 rounded-full bg-[#171513] text-[#FFFFFF] flex items-center justify-center mx-auto text-[18px] shadow-sm">
                  ✓
                </div>
                <h3 className="font-serif italic text-[26px] text-[#171513]">
                  Message Delivered
                </h3>
                <p className="font-sans text-[14px] text-[#77716A] max-w-[380px] mx-auto leading-relaxed">
                  Thank you for reaching out. I have received your note and will review your message promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="font-sans text-[11px] text-[#171513] uppercase tracking-[0.18em] underline underline-offset-4 hover:text-[#77716A] transition-colors pt-3 cursor-pointer font-medium"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              /* The Minimalist Editorial Inquiry Form */
              <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8">
                
                {/* 1. Inquiry Topic Row */}
                <div>
                  <div className="flex items-center gap-4 sm:gap-6 mb-3.5">
                    <h3 className="font-serif italic text-[20px] sm:text-[22px] lg:text-[24px] font-normal text-[#171513] shrink-0 leading-tight">
                      Inquiry Topic
                    </h3>
                    <div className="h-[1px] bg-[#A9A39B]/55 flex-1" aria-hidden="true" />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {topics.map((t) => {
                      const isSelected = formData.topic === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, topic: t })}
                          className={`px-3.5 py-1.5 rounded-full font-sans text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-[#171513] text-[#FFFFFF] shadow-xs'
                              : 'bg-transparent hover:bg-[#EAE5DD] text-[#77716A] hover:text-[#171513] border border-[#A9A39B]/40'
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Your Details Row */}
                <div>
                  <div className="flex items-center gap-4 sm:gap-6 mb-4">
                    <h3 className="font-serif italic text-[20px] sm:text-[22px] lg:text-[24px] font-normal text-[#171513] shrink-0 leading-tight">
                      Your Details
                    </h3>
                    <div className="h-[1px] bg-[#A9A39B]/55 flex-1" aria-hidden="true" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
                    <div>
                      <label htmlFor="name" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#77716A] mb-1 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-transparent border-b border-[#A9A39B]/55 py-2 text-[14px] font-sans text-[#171513] placeholder-[#A9A39B] focus:border-[#171513] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#77716A] mb-1 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@studio.com"
                        className="w-full bg-transparent border-b border-[#A9A39B]/55 py-2 text-[14px] font-sans text-[#171513] placeholder-[#A9A39B] focus:border-[#171513] outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Your Message Row */}
                <div>
                  <div className="flex items-center gap-4 sm:gap-6 mb-4">
                    <h3 className="font-serif italic text-[20px] sm:text-[22px] lg:text-[24px] font-normal text-[#171513] shrink-0 leading-tight">
                      Your Message
                    </h3>
                    <div className="h-[1px] bg-[#A9A39B]/55 flex-1" aria-hidden="true" />
                  </div>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your brand vision, open opportunity, or project scope..."
                    className="w-full bg-transparent border-b border-[#A9A39B]/55 py-2 text-[14px] font-sans text-[#171513] placeholder-[#A9A39B] focus:border-[#171513] outline-none transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* 4. Action Row */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-[#77716A] tracking-[0.16em] uppercase">
                    CONFIDENTIAL &amp; DIRECT
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#000000] hover:bg-[#1a1817] text-[#FFFFFF] rounded-full h-[46px] px-8 font-sans text-[12.5px] font-medium tracking-[0.06em] uppercase transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer"
                  >
                    <span>Send Message</span>
                    <span className="text-[13px] leading-none">↗</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Connect;
