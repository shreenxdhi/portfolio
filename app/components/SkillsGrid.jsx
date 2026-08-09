'use client';

import SectionReveal from './SectionReveal';
import GlassPanel from './GlassPanel';

const groups = [
  {
    label: 'HDLs & Verification',
    badges: ['Verilog', 'SystemVerilog', 'GTKWave', 'Icarus Verilog'],
  },
  {
    label: 'EDA Tools & Flows',
    badges: ['Vivado', 'Yosys', 'OpenROAD', 'LibreLane', 'Sky130 PDK'],
  },
  {
    label: 'Protocols & Concepts',
    badges: ['UART', 'SPI', 'I2C', 'AXI4', 'FSM Design', 'Computer Architecture'],
  },
  {
    label: 'Programming & Platforms',
    badges: ['C', 'C++', 'Python', 'MATLAB', 'Linux', 'Git'],
  },
];

export default function SkillsGrid() {
  return (
    <section id="stack" className="relative text-[#FFFFFF] py-24 sm:py-32 px-6 sm:px-12 border-b border-white/15">
      <div className="max-w-7xl mx-auto">

        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF]" />
            <p className="eyebrow-label text-[#2DD4BF]">
              02 / TECH STACK
            </p>
          </div>
          <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] mb-12">
            Tools &amp; <span className="italic font-normal text-[#2DD4BF]">Infrastructure</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group, gi) => (
            <SectionReveal key={group.label} delay={gi * 0.1}>
              <GlassPanel mode="dark" className="p-8 !rounded-sm h-full flex flex-col justify-between">
                <div>
                  <p className="eyebrow-label text-[#2DD4BF] mb-6 pb-3 border-b border-white/15">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {group.badges.map((badge) => (
                      <span
                        key={badge}
                        className="font-sans-body text-xs font-bold uppercase tracking-wider px-4 py-2.5 bg-white/10 border border-white/25 text-[#FFFFFF] rounded-xs shadow-sm transition-all duration-200 hover:bg-[#FFFFFF] hover:text-[#032317] hover:border-[#FFFFFF]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassPanel>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
