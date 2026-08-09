'use client';

import SectionReveal from './SectionReveal';
import GlassPanel from './GlassPanel';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative text-[#FFFFFF] pt-36 pb-24 px-6 sm:px-12 border-b border-white/15 min-h-[92vh] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <GlassPanel mode="dark" className="p-8 sm:p-14 lg:p-20 !rounded-sm flex flex-col justify-between">
          <div>
            <SectionReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                <p className="eyebrow-label text-[#2DD4BF]">
                  RTL Design &amp; Verification · Digital IC Design
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h1 className="font-serif-title text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-none tracking-tight mb-8 text-[#FFFFFF]">
                Shreenidhi <span className="italic font-normal text-[#2DD4BF]">V.</span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="eyebrow-label text-[#FFFFFF] text-xs sm:text-sm mb-6 tracking-widest border-l-2 border-[#2DD4BF] pl-4">
                RTL Design &amp; Verification | Digital IC Design | FPGA → ASIC
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="font-sans-body text-base sm:text-lg lg:text-xl text-[#E2E8F0] leading-relaxed max-w-3xl mb-12">
                Electronics &amp; Communication Engineering student, focused on RTL design and functional
                verification — carrying projects from testbench to tapeout (RTL → synthesis → physical
                design → GDSII) using open-source Sky130 tooling.
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.4}>
            <div className="flex flex-wrap gap-4 items-center pt-8 border-t border-white/15">
              <a href="#projects" className="btn-editorial-dark">
                View Projects
                <ArrowUpRight size={16} />
              </a>
              <a href="mailto:shreenidhiv17@gmail.com" className="btn-editorial-dark">
                Contact
              </a>
            </div>
          </SectionReveal>
        </GlassPanel>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex justify-between items-center text-xs font-mono text-[#CBD5E1]">
        <span className="tracking-widest">VLSI ARCHITECTURE &amp; DIGITAL IC DESIGN</span>
        <a href="#about" className="flex items-center gap-1.5 text-[#FFFFFF] hover:text-[#2DD4BF] no-underline transition-colors font-semibold">
          SCROLL <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
