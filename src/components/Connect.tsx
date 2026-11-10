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
      className="pt-16 sm:pt-20 lg:pt-24 pb-28 sm:pb-36 lg:pb-44 px-[4.5vw] w-full bg-[#F3EFE9] text-[#171513] select-none"
      aria-label="Connect and Contact"
    >
      <div className="max-w-[1240px] mx-auto w-full">
        
        {/* Section Eyebrow & Editorial Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[#A9A39B]/30">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#171513]" aria-hidden="true" />
              <p className="font-sans text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#77716A]">
                04 / 04 — CONTACT &amp; INQUIRIES
              </p>
            </div>
            <h2 className="font-serif text-[32px] sm:text-[42px] lg:text-[48px] font-[350] leading-[1.12] tracking-[-0.02em] text-[#171513] max-w-[700px]">
              Let&apos;s build something <span className="italic font-normal">thoughtful</span> and resonant together.
            </h2>
          </div>

          <div className="hidden md:flex flex-col items-end text-right font-sans text-[12px] tracking-[0.14em] text-[#77716A] uppercase">
            <span>DIRECT INQUIRIES</span>
            <span className="text-[#171513] font-medium">AVAILABLE FOR ROLES</span>
          </div>
        </div>

        {/* 2-Column Minimalist Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Dossier, Direct Channels & Status (5 cols) */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Editorial Introduction */}
            <div>
              <p className="font-sans text-[15px] sm:text-[15.5px] text-[#77716A] leading-[1.7] mb-6">
                Whether you have an open marketing role, an upcoming brand campaign, or simply want to exchange ideas on consumer strategy, my inbox is always open.
              </p>

              {/* Status Indicator Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#A9A39B]/30 text-[12px] font-sans font-medium text-[#171513] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
                <span>Open for Full-time Roles &amp; Projects</span>
              </div>
            </div>

            {/* Direct Contact Dossier Card */}
            <div className="p-7 sm:p-8 rounded-[30px] bg-[#FFFFFF] border border-[#A9A39B]/30 space-y-6 shadow-xs">
              
              {/* Direct Email */}
              <div className="flex items-start justify-between gap-4 group">
                <a 
                  href="mailto:kzelynartillo@gmail.com"
                  className="flex items-start gap-3.5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F3EFE9] border border-[#A9A39B]/30 flex items-center justify-center text-[#171513] shrink-0 group-hover:bg-[#171513] group-hover:text-[#FFFFFF] transition-all duration-300">
                    <span className="text-[14px]">✉</span>
                  </div>
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#77716A] block font-medium">
                      Direct Email
                    </span>
                    <span className="font-sans text-[14px] sm:text-[14.5px] text-[#171513] group-hover:underline underline-offset-4 font-medium transition-colors">
                      kzelynartillo@gmail.com
                    </span>
                  </div>
                </a>

                {/* Quick Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  className="text-[11px] font-sans text-[#77716A] hover:text-[#171513] uppercase tracking-[0.1em] border border-[#A9A39B]/30 hover:border-[#171513] px-2.5 py-1 rounded-full transition-all cursor-pointer shrink-0 mt-1"
                  aria-label="Copy email address"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/kzelynartillo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 group transition-colors pt-2"
              >
                <div className="w-10 h-10 rounded-full bg-[#F3EFE9] border border-[#A9A39B]/30 flex items-center justify-center text-[#171513] shrink-0 group-hover:bg-[#171513] group-hover:text-[#FFFFFF] transition-all duration-300">
                  <span className="text-[13px] font-serif font-bold">in</span>
                </div>
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#77716A] block font-medium">
                    Professional Network
                  </span>
                  <span className="font-sans text-[14px] sm:text-[14.5px] text-[#171513] group-hover:underline underline-offset-4 font-medium flex items-center gap-1 transition-colors">
                    <span>linkedin.com/in/kzelynartillo</span>
                    <span className="text-[12px]">↗</span>
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/ursweetiekz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 group transition-colors pt-2"
              >
                <div className="w-10 h-10 rounded-full bg-[#F3EFE9] border border-[#A9A39B]/30 flex items-center justify-center text-[#171513] shrink-0 group-hover:bg-[#171513] group-hover:text-[#FFFFFF] transition-all duration-300">
                  <span className="text-[14px]">◎</span>
                </div>
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#77716A] block font-medium">
                    Social &amp; Editorial
                  </span>
                  <span className="font-sans text-[14px] sm:text-[14.5px] text-[#171513] group-hover:underline underline-offset-4 font-medium flex items-center gap-1 transition-colors">
                    <span>@ursweetiekz</span>
                    <span className="text-[12px]">↗</span>
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#A9A39B]/20">
                <div className="w-10 h-10 rounded-full bg-[#F3EFE9] border border-[#A9A39B]/30 flex items-center justify-center text-[#171513] shrink-0">
                  <span className="text-[14px]">✦</span>
                </div>
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#77716A] block font-medium">
                    Location &amp; Work Mode
                  </span>
                  <span className="font-sans text-[13.5px] text-[#171513] font-medium block">
                    Manila, Philippines · Open to Remote &amp; Global Roles
                  </span>
                </div>
              </div>

            </div>

            {/* Reassurance Footer Quote Card */}
            <div className="p-6 rounded-[24px] bg-[#EAE5DD] border border-[#A9A39B]/30">
              <p className="font-serif italic text-[14px] text-[#171513]/90 leading-relaxed mb-2">
                &ldquo;Rooted in consumer empathy, driven by practical metrics. Inquiries receive a prompt response within 24 hours.&rdquo;
              </p>
              <span className="font-sans text-[11px] tracking-[0.14em] uppercase text-[#77716A] font-medium block">
                KZELYN ARTILLO · COMMITMENT TO RIGOR
              </span>
            </div>

          </div>


          {/* ======================================================== */}
          {/* RIGHT COLUMN: Clean Minimalist Inquiry Form (7 cols)    */}
          {/* ======================================================== */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-11 lg:p-12 rounded-[32px] sm:rounded-[36px] bg-[#FFFFFF] border border-[#A9A39B]/30 shadow-xs transition-all duration-300">
              
              {formSubmitted ? (
                /* Success State */
                <div className="py-14 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#171513] text-[#FFFFFF] flex items-center justify-center mx-auto text-[20px] shadow-sm">
                    ✓
                  </div>
                  <h3 className="font-serif text-[26px] font-[350] text-[#171513]">
                    Message Delivered
                  </h3>
                  <p className="font-sans text-[14.5px] text-[#77716A] max-w-[420px] mx-auto leading-relaxed">
                    Thank you for reaching out. I have received your note and will review your project vision promptly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="font-sans text-[12.5px] text-[#171513] underline underline-offset-4 hover:text-[#77716A] transition-colors pt-3 cursor-pointer uppercase tracking-wider font-medium"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                /* The Minimalist Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-7">
                  
                  {/* Topic Pill Selector */}
                  <div>
                    <label className="block font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-[#77716A] mb-3">
                      Inquiry Topic / Area of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => {
                        const isSelected = formData.topic === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({ ...formData, topic: t })}
                            className={`px-4 py-2 rounded-full font-sans text-[12.5px] font-medium transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#171513] text-[#FFFFFF] shadow-xs'
                                : 'bg-[#F3EFE9] hover:bg-[#EAE5DD] text-[#77716A] hover:text-[#171513] border border-[#A9A39B]/30'
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name Input (Floating Minimal Field) */}
                  <div className="relative pt-2">
                    <label 
                      htmlFor="name" 
                      className="block font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-[#77716A] mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pb-3 pt-1 border-b border-[#A9A39B]/40 focus:border-[#171513] text-[15px] font-sans text-[#171513] placeholder:text-[#A9A39B]/60 bg-transparent transition-colors outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative pt-2">
                    <label 
                      htmlFor="email" 
                      className="block font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-[#77716A] mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. maya@agency.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pb-3 pt-1 border-b border-[#A9A39B]/40 focus:border-[#171513] text-[15px] font-sans text-[#171513] placeholder:text-[#A9A39B]/60 bg-transparent transition-colors outline-none"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative pt-2">
                    <label 
                      htmlFor="message" 
                      className="block font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-[#77716A] mb-1.5"
                    >
                      Project Vision or Note
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell me about your brand, team, or the goals you're looking to achieve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pb-3 pt-1 border-b border-[#A9A39B]/40 focus:border-[#171513] text-[15px] font-sans text-[#171513] placeholder:text-[#A9A39B]/60 bg-transparent transition-colors outline-none resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button (Primary token button matching design.md) */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 bg-[#000000] hover:bg-[#1a1817] text-[#FFFFFF] rounded-full h-[48px] px-8 font-sans text-[13.5px] font-medium tracking-normal transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer"
                    >
                      <span>Send Message</span>
                      <span className="text-[14px] leading-none">↗</span>
                    </button>

                    <span className="font-sans text-[11.5px] text-[#A9A39B] hidden sm:block">
                      Usually responds within 24h
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}