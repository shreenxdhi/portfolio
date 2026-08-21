'use client';

import SectionReveal from './SectionReveal';
import GlassPanel from './GlassPanel';
import { ArrowUpRight, Globe } from 'lucide-react';

const projects = [
  {
    num: '01',
    category: 'RTL / GDSII TAPEOUT',
    title: 'QVision — Hardware-Accelerated QR Engine',
    stack: ['Verilog', 'FPGA (Spartan-3)', 'Reed-Solomon ECC', 'LibreLane', 'Sky130', 'VGA'],
    desc: 'RTL modules — UART receiver, Reed-Solomon ECC decoder, dual-port framebuffer controller with 640×480 @ 60Hz VGA output — for a real-time FPGA-deployed QR decoding pipeline, carried through a complete RTL-to-GDSII flow to a taped-out layout.',
    link: 'https://github.com/shreenxdhi/QVision',
  },
  {
    num: '02',
    category: 'HARDWARE ACCELERATOR',
    title: 'Streaming Image Processing Accelerator',
    stack: ['Verilog', 'SystemVerilog', 'Yosys', 'OpenROAD', 'Sky130'],
    desc: 'Pipelined Sobel edge-detection accelerator verified against a Python/OpenCV golden model with zero pixel mismatches across 222,720 pixels. Synthesized to Sky130 HD (79,968 cells), closed timing in OpenROAD at 33MHz with 0.87ns setup slack.',
    link: 'https://github.com/shreenxdhi/Image-Processing-Hardware',
  },
  {
    num: '03',
    category: 'PERIPHERAL IP',
    title: 'UART Controller',
    stack: ['Verilog', 'SystemVerilog', 'Icarus Verilog', 'Vivado'],
    desc: 'Synthesizable, parameterized full-duplex UART controller with configurable baud-rate generation (115,200 baud). Verified with SystemVerilog testbenches, taken through the Vivado implementation flow to a Basys3 FPGA bitstream.',
    link: 'https://github.com/shreenxdhi/UART-Controller',
  },
  {
    num: '04',
    category: 'INTERCONNECT & BUS',
    title: 'DMA Controller',
    stack: ['SystemVerilog', 'AXI4'],
    desc: 'Dual-channel AXI4 DMA controller with a self-checking SystemVerilog testbench, built around a full study of the AXI4 protocol\'s five channels.',
    link: 'https://github.com/shreenxdhi/DMA-Controller',
  },
  {
    num: '05',
    category: 'FULL-STACK & AI',
    title: 'Student Enrollment Portal',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'JWT Auth', 'Groq (Llama 3)'],
    desc: 'Full-stack university academic records system with JWT-based auth, student/course/enrollment CRUD, and an AI-powered Academic Advisor chat interface (Llama 3 via Groq) for policy queries. Deployed frontend on Vercel, backend on Render.',
    link: 'https://github.com/shreenxdhi/student-enrollment-frontend',
    liveLink: 'https://student-enrollment-frontend.vercel.app',
  },
  {
    num: '06',
    category: 'EMBEDDED AUTOMOTIVE',
    title: 'Smart Vehicle ECU System',
    stack: ['Embedded C', 'CAN Protocol', 'Python (test automation)', 'GCC'],
    desc: 'Software simulation of a four-ECU automotive network (Airbag, Obstacle, Anti-Theft, Fuel) over a software-emulated CAN bus with ID-based arbitration. Includes UART/I2C comparison stubs and a 20-case automated test suite driven by Python and CSV vectors; compiles clean under GCC -Wall -Wextra.',
    link: 'https://github.com/shreenxdhi/smart-vehicle-ecu-system',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative text-[#FFFFFF] py-20 sm:py-32 px-4 sm:px-12 border-b border-white/15 scroll-mt-28">
      <div className="max-w-7xl mx-auto">

        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5B8DEF]" />
            <p className="eyebrow-label text-[#5B8DEF]">
              03 / FEATURED PROJECTS
            </p>
          </div>
          <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] mb-12">
            Featured Projects &amp; <span className="italic font-normal text-[#5B8DEF]">Architectures</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.08}>
              <GlassPanel mode="dark" className="p-8 sm:p-10 !rounded-sm flex flex-col justify-between h-full border border-white/20">
                
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/15">
                    <span className="eyebrow-label text-[#5B8DEF] font-bold text-[0.7rem]">{project.category}</span>
                    <span className="font-serif-title text-xl font-bold text-[#CBD5E1]/60">{project.num}</span>
                  </div>

                  <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#FFFFFF] mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="font-sans-body text-base text-[#F1F5F9] font-medium leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-8 pt-4 border-t border-white/15">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-sans-body text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/10 border border-white/20 text-[#FFFFFF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link font-sans-body text-xs font-bold uppercase tracking-widest text-[#FFFFFF]"
                    >
                      View on GitHub
                      <ArrowUpRight size={14} />
                    </a>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-link font-sans-body text-xs font-bold uppercase tracking-widest text-[#5B8DEF]"
                      >
                        Live Demo
                        <Globe size={14} />
                      </a>
                    )}
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
