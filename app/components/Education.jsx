'use client';

import SectionReveal from './SectionReveal';
import GlassPanel from './GlassPanel';
import { GraduationCap, Award, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative text-[#FFFFFF] py-24 sm:py-32 px-6 sm:px-12 border-b border-white/15">
      <div className="max-w-7xl mx-auto">

        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF]" />
            <p className="eyebrow-label text-[#2DD4BF]">
              04 / EDUCATION
            </p>
          </div>
          <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] mb-12">
            Academic <span className="italic font-normal text-[#2DD4BF]">Foundation</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <GlassPanel mode="dark" className="p-8 sm:p-14 !rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/10 rounded-xs text-[#2DD4BF] border border-white/20">
                    <GraduationCap size={26} />
                  </div>
                  <span className="eyebrow-label text-[#2DD4BF]">UNDERGRADUATE DEGREE</span>
                </div>

                <h3 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#FFFFFF] leading-tight">
                  B.E. — Electronics &amp; Communication Engineering
                </h3>

                <p className="font-sans-body text-lg text-[#E2E8F0] font-medium flex items-center gap-2">
                  <MapPin size={16} className="text-[#2DD4BF]" />
                  Bangalore Institute of Technology, Bengaluru
                </p>
              </div>

              {/* Right Column Highlights */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-8 space-y-4">
                <div className="p-4 bg-white/5 border border-white/15 rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#2DD4BF] font-semibold mb-1">
                    <Award size={14} />
                    SPECIALISATION
                  </div>
                  <p className="text-xs text-[#E2E8F0] font-medium">
                    RTL Design, Functional Verification &amp; Digital IC Architecture
                  </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/15 rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#2DD4BF] font-semibold mb-1">
                    ASIC TOOLING
                  </div>
                  <p className="text-xs text-[#E2E8F0] font-medium">
                    Sky130 Open PDK, Yosys, OpenROAD &amp; Vivado
                  </p>
                </div>
              </div>

            </div>
          </GlassPanel>
        </SectionReveal>

      </div>
    </section>
  );
}
