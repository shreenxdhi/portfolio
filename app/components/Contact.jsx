'use client';

import { useState } from 'react';
import SectionReveal from './SectionReveal';
import GlassPanel from './GlassPanel';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shreenidhiv17@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative text-[#FFFFFF] py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">

        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF]" />
            <p className="eyebrow-label text-[#2DD4BF]">
              05 / CONTACT
            </p>
          </div>
          <h2 className="font-serif-title text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFFFF] mb-12">
            Initiate <span className="italic font-normal text-[#2DD4BF]">Connection</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Direct Links */}
          <SectionReveal delay={0.1}>
            <GlassPanel mode="dark" className="p-8 sm:p-12 !rounded-sm flex flex-col justify-between h-full">
              <div className="space-y-8">
                <div>
                  <p className="eyebrow-label text-[#2DD4BF] mb-2">GITHUB</p>
                  <a
                    href="https://github.com/shreenxdhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif-title text-2xl sm:text-3xl text-[#FFFFFF] editorial-link"
                  >
                    github.com/shreenxdhi
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                <div>
                  <p className="eyebrow-label text-[#2DD4BF] mb-2">LINKEDIN</p>
                  <a
                    href="https://linkedin.com/in/shreenidhiv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif-title text-2xl sm:text-3xl text-[#FFFFFF] editorial-link"
                  >
                    linkedin.com/in/shreenidhiv
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                <div>
                  <p className="eyebrow-label text-[#2DD4BF] mb-2">EMAIL</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <a
                      href="mailto:shreenidhiv17@gmail.com"
                      className="font-serif-title text-2xl sm:text-3xl text-[#FFFFFF] editorial-link"
                    >
                      shreenidhiv17@gmail.com
                      <ArrowUpRight size={20} />
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="px-3.5 py-2 bg-white/10 border border-white/25 rounded-xs text-xs font-mono text-[#FFFFFF] flex items-center gap-1.5 cursor-pointer hover:bg-[#FFFFFF] hover:text-[#032317] transition-all"
                      title="Copy Email"
                    >
                      {copied ? <Check size={14} className="text-[#2DD4BF]" /> : <Copy size={14} />}
                      {copied ? 'COPIED' : 'COPY'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-12 border-t border-white/15 text-xs font-mono text-[#E2E8F0]/80">
                Bengaluru, India · Open for Frontend VLSI Roles
              </div>
            </GlassPanel>
          </SectionReveal>

          {/* Contact Form */}
          <SectionReveal delay={0.2}>
            <GlassPanel mode="dark" className="p-8 sm:p-12 !rounded-sm">
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.target);
                  const name = fd.get('name');
                  const email = fd.get('email');
                  const subject = fd.get('subject') || 'Portfolio Contact';
                  const message = fd.get('message');
                  window.location.href = `mailto:shreenidhiv17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                }}
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-name" className="eyebrow-label text-[#E2E8F0]">NAME</label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    autoComplete="name"
                    className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xs text-sm text-[#FFFFFF] placeholder:text-[#CBD5E1]/60 outline-none transition-colors focus:border-[#2DD4BF] focus:bg-white/15"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-email" className="eyebrow-label text-[#E2E8F0]">EMAIL</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xs text-sm text-[#FFFFFF] placeholder:text-[#CBD5E1]/60 outline-none transition-colors focus:border-[#2DD4BF] focus:bg-white/15"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-subject" className="eyebrow-label text-[#E2E8F0]">SUBJECT</label>
                  <input
                    id="cf-subject"
                    name="subject"
                    type="text"
                    placeholder="RTL Design / Collaboration..."
                    className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xs text-sm text-[#FFFFFF] placeholder:text-[#CBD5E1]/60 outline-none transition-colors focus:border-[#2DD4BF] focus:bg-white/15"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-message" className="eyebrow-label text-[#E2E8F0]">MESSAGE</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    required
                    placeholder="Your message details..."
                    rows={4}
                    className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xs text-sm text-[#FFFFFF] placeholder:text-[#CBD5E1]/60 outline-none transition-colors resize-y min-h-[100px] focus:border-[#2DD4BF] focus:bg-white/15"
                  />
                </div>

                <button type="submit" className="btn-editorial-dark w-full justify-center mt-2">
                  Send Message
                  <ArrowUpRight size={16} />
                </button>
              </form>
            </GlassPanel>
          </SectionReveal>

        </div>

        {/* Footer Bar */}
        <div className="mt-24 pt-8 border-t border-white/15 flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-[#E2E8F0]/70">
          <p>© Shreenidhi V — RTL Design &amp; Verification</p>
          <a href="#hero" className="text-[#FFFFFF] no-underline hover:text-[#2DD4BF] transition-colors">Back to top ↑</a>
        </div>

      </div>
    </section>
  );
}
