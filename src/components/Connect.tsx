'use client';

import { useState } from 'react';

export function Connect() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Full-time Opportunity',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section 
      id="connect" 
      className="py-20 sm:py-28 lg:py-36 px-6 sm:px-12 bg-rose-soft/30 border-t border-line/60"
      aria-label="Connect and Contact"
    >
      <div className="max-w-[1120px] mx-auto">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-[1px] bg-oak/60" aria-hidden="true" />
          <p className="text-[12px] font-medium tracking-[0.18em] uppercase text-oak">
            Get In Touch
          </p>
        </div>

        {/* Section Heading: 44px / 30px, DM Sans 300, line-height 1.15. Max 1 signature word */}
        <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-light leading-[1.15] tracking-[-0.01em] text-espresso mb-12 max-w-[700px]">
          Let&apos;s build something <span className="signature">thoughtful</span> and resonant together.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries & Status (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-[16px] sm:text-[17px] text-espresso/85 leading-[1.75]">
              Whether you have a marketing role opening, a collaborative campaign in mind, or simply want to connect over brand strategy, I&apos;d love to hear from you.
            </p>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-paper border border-line text-[13px] font-medium text-espresso shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" aria-hidden="true" />
              <span>Available for Marketing Roles &amp; Projects</span>
            </div>

            {/* Contact Channels Card */}
            <div className="p-8 rounded-[28px] bg-paper border border-line shadow-[0_8px_30px_rgba(62,31,22,0.04)] space-y-6">
              
              {/* Email */}
              <a 
                href="mailto:kzelynartillo@gmail.com"
                className="flex items-start gap-4 group transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-bone/70 border border-line/60 text-espresso group-hover:bg-rose-soft transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <span className="text-[12px] uppercase tracking-[0.14em] text-oak block font-medium">
                    Direct Email
                  </span>
                  <span className="text-[15px] text-espresso group-hover:text-rust transition-colors font-medium">
                    kzelynartillo@gmail.com
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/kzelynartillo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-bone/70 border border-line/60 text-espresso group-hover:bg-rose-soft transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <span className="text-[12px] uppercase tracking-[0.14em] text-oak block font-medium">
                    Professional Network
                  </span>
                  <span className="text-[15px] text-espresso group-hover:text-rust transition-colors font-medium">
                    linkedin.com/in/kzelynartillo
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-bone/70 border border-line/60 text-espresso">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="text-[12px] uppercase tracking-[0.14em] text-oak block font-medium">
                    Location
                  </span>
                  <span className="text-[15px] text-espresso font-medium">
                    Philippines · Open to Remote &amp; Relocation
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Clean Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-[32px] bg-paper border border-line shadow-[0_8px_30px_rgba(62,31,22,0.04)]">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-sage-soft text-espresso flex items-center justify-center mx-auto">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-[22px] font-light text-espresso">
                    Message Received
                  </h3>
                  <p className="text-[15px] text-oak max-w-[420px] mx-auto leading-relaxed">
                    Thank you for reaching out. I will review your note and respond promptly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-[13px] text-rust underline underline-offset-4 hover:text-espresso transition-colors pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-[12px] uppercase tracking-[0.18em] font-medium text-oak mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-[12px] bg-paper border border-line text-[15px] text-espresso placeholder:text-oak/50 transition-all focus:border-rose focus:ring-2 focus:ring-rose/30 focus:outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-[12px] uppercase tracking-[0.18em] font-medium text-oak mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-[12px] bg-paper border border-line text-[15px] text-espresso placeholder:text-oak/50 transition-all focus:border-rose focus:ring-2 focus:ring-rose/30 focus:outline-none"
                    />
                  </div>

                  {/* Topic Select */}
                  <div>
                    <label 
                      htmlFor="topic" 
                      className="block text-[12px] uppercase tracking-[0.18em] font-medium text-oak mb-2"
                    >
                      Subject / Inquiry Type
                    </label>
                    <select
                      id="topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-[12px] bg-paper border border-line text-[15px] text-espresso transition-all focus:border-rose focus:ring-2 focus:ring-rose/30 focus:outline-none"
                    >
                      <option value="Full-time Opportunity">Full-time Marketing Opportunity</option>
                      <option value="Freelance Project">Freelance Brand / Content Project</option>
                      <option value="Consultation">Marketing Strategy Inquiry</option>
                      <option value="Just saying hello">General Connection</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-[12px] uppercase tracking-[0.18em] font-medium text-oak mb-2"
                    >
                      Your Note
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell me about your team, brand, or project vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-[12px] bg-paper border border-line text-[15px] text-espresso placeholder:text-oak/50 transition-all focus:border-rose focus:ring-2 focus:ring-rose/30 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button (Primary token button) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-rose hover:bg-rust text-espresso hover:text-paper rounded-full px-8 py-3.5 text-[14px] font-medium tracking-[0.04em] transition-all duration-300 shadow-[0_8px_30px_rgba(62,31,22,0.06)] cursor-pointer"
                    >
                      Send Message
                    </button>
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
