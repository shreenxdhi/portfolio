'use client';

import { useState } from 'react';
import SectionReveal from './SectionReveal';
import GlassPanel from './GlassPanel';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { getObfuscatedEmail, handleMailTo } from '../utils/email';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(getObfuscatedEmail());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof window !== 'undefined' && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <section id="contact" className="relative text-[#FFFFFF] py-20 sm:py-32 px-4 sm:px-12 scroll-mt-28">
      <div className="max-w-7xl mx-auto">

        <SectionReveal>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#5B8DEF]" />
            <p className="eyebrow-label text-[#5B8DEF] text-xs">
              05 / CONTACT
            </p>
          </div>
          <h2 className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFFFF] mb-8 sm:mb-12">
            Initiate <span className="italic font-normal text-[#5B8DEF]">Connection</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

          {/* Direct Links */}
          <SectionReveal delay={0.1}>
            <GlassPanel mode="dark" className="p-6 sm:p-12 !rounded-sm flex flex-col justify-between h-full">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <p className="eyebrow-label text-[#5B8DEF] mb-1.5 text-xs">GITHUB</p>
                  <a
                    href="https://github.com/shreenxdhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif-title text-lg sm:text-3xl text-[#FFFFFF] editorial-link break-all inline-flex items-center gap-1"
                  >
                    github.com/shreenxdhi
                    <ArrowUpRight size={18} className="shrink-0" />
                  </a>
                </div>

                <div>
                  <p className="eyebrow-label text-[#5B8DEF] mb-1.5 text-xs">LINKEDIN</p>
                  <a
                    href="https://linkedin.com/in/shreenidhiv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif-title text-lg sm:text-3xl text-[#FFFFFF] editorial-link break-all inline-flex items-center gap-1"
                  >
                    linkedin.com/in/shreenidhiv
                    <ArrowUpRight size={18} className="shrink-0" />
                  </a>
                </div>

                <div>
                  <p className="eyebrow-label text-[#5B8DEF] mb-1.5 text-xs">EMAIL</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <button
                      onClick={(e) => handleMailTo(e)}
                      className="font-serif-title text-base sm:text-3xl text-[#FFFFFF] editorial-link break-all inline-flex items-center gap-1 border-none bg-transparent cursor-pointer p-0 text-left"
                    >
                      shreenidhiv17@gmail.com
                      <ArrowUpRight size={18} className="shrink-0" />
                    </button>
                    <button
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 bg-white/10 border border-white/25 rounded-xs text-xs font-mono text-[#FFFFFF] flex items-center gap-1.5 cursor-pointer hover:bg-[#FFFFFF] hover:text-[#0A0E2A] transition-all"
                      title="Copy Email"
                    >
                      {copied ? <Check size={14} className="text-[#5B8DEF]" /> : <Copy size={14} />}
                      {copied ? 'COPIED' : 'COPY'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-8 sm:mt-12 border-t border-white/15 text-xs font-mono text-[#CBD5E1]">
                Bengaluru, India · Open for Hardware &amp; RTL Roles
              </div>
            </GlassPanel>
          </SectionReveal>

          {/* Contact Form */}
          <SectionReveal delay={0.2}>
            <GlassPanel mode="dark" className="p-6 sm:p-12 !rounded-sm">
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.target);
                  const name = fd.get('name');
                  const email = fd.get('email');
                  const subject = fd.get('subject') || 'Portfolio Contact';
                  const message = fd.get('message');
                  handleMailTo(e, subject, `From: ${name} (${email})\n\n${message}`);
                }}
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-name" className="eyebrow-label text-[#E2E8F0] text-xs">NAME</label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    autoComplete="name"
                    className="w-full px-3.5 py-3 bg-white/10 border border-white/20 rounded-xs text-xs sm:text-sm text-[#FFFFFF] placeholder:text-[#CBD5E1]/60 outline-none transition-colors focus:border-[#5B8DEF] focus:bg-white/15"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-email" className="eyebrow-label text-[#E2E8F0] text-xs">EMAIL</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="w-full px-3.5 py-3 bg-white/10 border border-white/20 rounded-xs text-xs sm:text-sm text-[#FFFFFF] placeholder:text-[#CBD5E1]/60 outline-none transition-colors focus:border-[#5B8DEF] focus:bg-white/15"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-subject" className="eyebrow-label text-[#E2E8F0] text-xs">SUBJECT</label>
                  <input
                    id="cf-subject"
                    name="subject"
                    type="text"
                    placeholder="RTL Design / Collaboration..."
                    className="w-full px-3.5 py-3 bg-white/10 border border-white/20 rounded-xs text-xs sm:text-sm text-[#FFFFFF] placeholder:text-[#CBD5E1]/60 outline-none transition-colors focus:border-[#5B8DEF] focus:bg-white/15"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-message" className="eyebrow-label text-[#E2E8F0] text-xs">MESSAGE</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    required
                    placeholder="Your message details..."
                    rows={4}
                    className="w-full px-3.5 py-3 bg-white/10 border border-white/20 rounded-xs text-xs sm:text-sm text-[#FFFFFF] placeholder:text-[#CBD5E1]/60 outline-none transition-colors resize-y min-h-[90px] focus:border-[#5B8DEF] focus:bg-white/15"
                  />
                </div>

                <button type="submit" className="btn-editorial-dark w-full justify-center mt-2 text-xs sm:text-sm">
                  Send Message
                  <ArrowUpRight size={16} />
                </button>
              </form>
            </GlassPanel>
          </SectionReveal>

        </div>

        {/* Footer Bar */}
        <div className="mt-16 pt-6 border-t border-white/15 flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-[#CBD5E1]">
          <p>© Shreenidhi V — RTL Design &amp; Verification</p>
          <button onClick={handleScrollToTop} className="text-[#FFFFFF] no-underline hover:text-[#5B8DEF] transition-colors border-none bg-transparent cursor-pointer">
            Back to top ↑
          </button>
        </div>

      </div>
    </section>
  );
}
