'use client';

import SectionReveal from './SectionReveal';
import GlassPanel from './GlassPanel';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (typeof window !== 'undefined' && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 px-6 sm:px-12 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <GlassPanel mode="dark" className="p-8 sm:p-12 lg:p-16 !rounded-sm border border-white/20">
          <div>
            <SectionReveal delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-xs mb-8">
                <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
                <span className="eyebrow-label text-[#FFFFFF]">RTL DESIGN &amp; VERIFICATION ENGINEER</span>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <h1 className="font-serif-title text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#FFFFFF] mb-6 leading-[1.05]">
                Shreenidhi <span className="italic font-normal text-[#2DD4BF]">V</span>
              </h1>
              <p className="eyebrow-label text-[#2DD4BF] text-sm sm:text-base mb-8 font-semibold">
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
              <button onClick={(e) => handleScrollTo(e, '#projects')} className="btn-editorial-dark cursor-pointer border-none">
                View Projects
                <ArrowUpRight size={16} />
              </button>
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
        <button
          onClick={(e) => handleScrollTo(e, '#about')}
          className="flex items-center gap-1.5 text-[#FFFFFF] hover:text-[#2DD4BF] transition-colors font-semibold border-none bg-transparent cursor-pointer"
        >
          SCROLL <ArrowDown size={14} />
        </button>
      </div>
    </section>
  );
}
