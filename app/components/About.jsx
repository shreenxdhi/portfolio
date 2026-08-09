'use client';

import SectionReveal from './SectionReveal';
import GlassPanel from './GlassPanel';
import { Cpu, CheckCircle2, Layers } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative text-[#FFFFFF] py-24 sm:py-32 px-6 sm:px-12 border-b border-white/15">
      <div className="max-w-7xl mx-auto">

        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF]" />
            <p className="eyebrow-label text-[#2DD4BF]">
              01 / ABOUT
            </p>
          </div>
          <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] mb-12">
            Hardware Acceleration &amp; <span className="italic font-normal text-[#2DD4BF]">Digital IC Design</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Main Bio Card */}
          <SectionReveal delay={0.15} className="lg:col-span-7">
            <GlassPanel mode="dark" className="p-8 sm:p-12 !rounded-sm border border-white/20 h-full flex flex-col justify-between">
              <div className="space-y-6 text-base sm:text-lg text-[#F1F5F9] font-medium leading-relaxed">
                <p>
                  Currently building hardware accelerators and digital IC design flows
                  (<span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 border border-white/25 bg-white/10 text-[#2DD4BF]">Verilog/SystemVerilog</span> →{' '}
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 border border-white/25 bg-white/10 text-[#2DD4BF]">Sky130 GDSII</span>).
                </p>
                <p>
                  Deepening expertise in RTL-to-GDSII physical design (synthesis, floorplanning, place-and-route, STA).
                </p>
                <p>
                  Targeting frontend VLSI roles: <strong className="font-bold text-[#FFFFFF]">RTL Design and Design Verification</strong>.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/15 flex items-center justify-between">
                <span className="eyebrow-label text-[#2DD4BF]">LOCATION</span>
                <span className="font-serif-title text-xl font-bold text-[#FFFFFF]">Bengaluru, India</span>
              </div>
            </GlassPanel>
          </SectionReveal>

          {/* Right Column: 3 Feature Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <SectionReveal delay={0.25}>
              <GlassPanel mode="dark" className="p-6 !rounded-sm border border-white/20 flex items-start gap-4">
                <div className="p-3 bg-white/10 text-[#2DD4BF] rounded-xs flex-shrink-0 border border-white/15">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="font-serif-title text-lg font-bold text-[#FFFFFF] mb-1">RTL Design</h3>
                  <p className="text-xs text-[#CBD5E1] font-medium leading-relaxed">
                    Synthesizable FSMs, compute accelerators, and bus interfaces in Verilog &amp; SystemVerilog.
                  </p>
                </div>
              </GlassPanel>
            </SectionReveal>

            <SectionReveal delay={0.35}>
              <GlassPanel mode="dark" className="p-6 !rounded-sm border border-white/20 flex items-start gap-4">
                <div className="p-3 bg-white/10 text-[#2DD4BF] rounded-xs flex-shrink-0 border border-white/15">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="font-serif-title text-lg font-bold text-[#FFFFFF] mb-1">Design Verification</h3>
                  <p className="text-xs text-[#CBD5E1] font-medium leading-relaxed">
                    Self-checking SystemVerilog testbenches, protocol validation, and golden model co-simulation.
                  </p>
                </div>
              </GlassPanel>
            </SectionReveal>

            <SectionReveal delay={0.45}>
              <GlassPanel mode="dark" className="p-6 !rounded-sm border border-white/20 flex items-start gap-4">
                <div className="p-3 bg-white/10 text-[#2DD4BF] rounded-xs flex-shrink-0 border border-white/15">
                  <Layers size={20} />
                </div>
                <div>
                  <h3 className="font-serif-title text-lg font-bold text-[#FFFFFF] mb-1">Physical ASIC Flow</h3>
                  <p className="text-xs text-[#CBD5E1] font-medium leading-relaxed">
                    Synthesis to GDSII layout using Yosys, OpenROAD, and Sky130 open PDK tooling.
                  </p>
                </div>
              </GlassPanel>
            </SectionReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
