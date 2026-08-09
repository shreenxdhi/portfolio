'use client';

import SectionReveal from './SectionReveal';
import GlassPanel from './GlassPanel';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    if (typeof window !== 'undefined' && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <GlassPanel mode="dark" className="p-6 sm:p-12 lg:p-16 !rounded-sm border border-white/20">
          <div>
            <SectionReveal delay={0.1}>
              <h1 className="font-serif-title text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#FFFFFF] mb-4 sm:mb-6 leading-[1.05]">
                Shreenidhi <span className="text-[#2DD4BF]">V</span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="font-mono text-[#2DD4BF] text-xs sm:text-base mb-6 font-semibold tracking-wide">
                RTL Design &amp; Verification | Digital IC Design | FPGA → ASIC
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="font-sans-body text-sm sm:text-lg lg:text-xl text-[#E2E8F0] leading-relaxed max-w-3xl mb-8 sm:mb-12">
                Electronics &amp; Communication Engineering student focused on RTL design and functional verification — building hardware accelerators, custom peripheral IPs, and SystemVerilog logic from testbench to Sky130 ASIC tapeout.
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.4}>
            <div className="flex flex-wrap gap-4 items-center pt-6 sm:pt-8 border-t border-white/15">
              <button onClick={(e) => handleScrollTo(e, '#projects')} className="btn-editorial-dark cursor-pointer border-none text-xs sm:text-sm">
                View Projects
                <ArrowUpRight size={16} />
              </button>
              <a href="mailto:shreenidhiv17@gmail.com" className="btn-editorial-dark text-xs sm:text-sm">
                Contact
              </a>
            </div>
          </SectionReveal>
        </GlassPanel>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-6 flex justify-between items-center text-xs font-mono text-[#CBD5E1]">
        <span className="tracking-widest hidden sm:inline">VLSI ARCHITECTURE &amp; DIGITAL IC DESIGN</span>
        <button
          onClick={(e) => handleScrollTo(e, '#about')}
          className="flex items-center gap-1.5 text-[#FFFFFF] hover:text-[#2DD4BF] transition-colors font-semibold border-none bg-transparent cursor-pointer ml-auto sm:ml-0"
        >
          SCROLL <ArrowDown size={14} />
        </button>
      </div>
    </section>
  );
}
