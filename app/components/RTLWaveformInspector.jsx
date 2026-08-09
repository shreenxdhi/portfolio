'use client';

import { useState, useEffect } from 'react';
import SectionReveal from './SectionReveal';
import GlassPanel from './GlassPanel';
import { Play, Pause, RotateCcw, CheckCircle2, Cpu, Code, Activity, Terminal, Coffee, Zap, ShieldAlert, Clock } from 'lucide-react';

const funnyModules = [
  {
    id: 'caffeine',
    filename: 'caffeine_fsm.v',
    title: 'Caffeine-to-Verilog Accelerator',
    specs: 'Sky130 HD · 250mg Espresso Dose · 400 MHz Overclocked · Zero Bugs',
    desc: 'Specialized Hardware Compute Engine converting caffeine molecules into synthesizable Verilog code at 400MHz with zero timing violations.',
    code: `module caffeine_accelerator #(
  parameter CAFFEINE_DOSE_MG = 250
)(
  input  wire       clk,
  input  wire       rst_n,
  input  wire [7:0] espresso_in,   // Concentration level
  input  wire       start_brewing,
  output reg  [9:0] brain_freq_mhz,
  output reg        bugs_found,
  output reg        synthesis_pass
);

  typedef enum logic [1:0] {
    NO_COFFEE   = 2'b00,
    BREWING     = 2'b01,
    OVERCLOCKED = 2'b10,
    TAPE_OUT    = 2'b11
  } state_t;

  state_t state;

  always @(posedge clk or negedge rst_n) begin
    if (!rst_n) begin
      state <= NO_COFFEE; brain_freq_mhz <= 10'd50;
      bugs_found <= 1'b1; synthesis_pass <= 1'b0;
    end else case (state)
      NO_COFFEE:   if (start_brewing) state <= BREWING;
      BREWING:     begin
                     brain_freq_mhz <= 10'd100;
                     state <= OVERCLOCKED;
                   end
      OVERCLOCKED: begin
                     brain_freq_mhz <= 10'd400; // Overclocked!
                     bugs_found <= 1'b0;        // All bugs annihilated
                     synthesis_pass <= 1 me;
                     state <= TAPE_OUT;
                   end
      TAPE_OUT:    synthesis_pass <= 1'b1;
    endcase
  end
endmodule`,
    signals: [
      { name: 'CLK', type: 'clock' },
      { name: 'RST_N', type: 'level_high' },
      { name: 'ESPRESSO_IN[7:0]', type: 'bus', values: ['0x00', '0xFA', '0xFF', '0xFF', '0xFF'] },
      { name: 'START_BREWING', type: 'pulse_early' },
      { name: 'BRAIN_FREQ[MHz]', type: 'bus', values: ['50', '100', '400', '400', '400'] },
      { name: 'BUGS_FOUND', type: 'pulse_early_high' },
      { name: 'SYNTHESIS_PASS', type: 'pulse_late' },
    ],
  },
  {
    id: 'bug_annihilator',
    filename: 'bug_annihilator.sv',
    title: 'Zero-Slack Bug Destruction Pipeline',
    specs: 'Synthesizable SystemVerilog · 0xDEADBEEF Annihilator · +0.87ns Slack',
    desc: 'Hardware assertion pipeline that detects lint warnings, isolates race conditions, and forces all synthesizable bugs to zero at clock edge.',
    code: `module bug_annihilator #(
  parameter MAX_BUGS = 64
)(
  input  logic        aclk,
  input  logic        aresetn,
  input  logic [7:0]  lint_errors,
  input  logic        scan_enable,
  output logic        race_condition_fixed,
  output logic [15:0] timing_slack_ps,
  output logic        all_tests_passed
);

  typedef enum logic [1:0] { IDLE, SCANNING, ELIMINATING, CLEAN } fsm_t;
  fsm_t state;

  always_ff @(posedge aclk or negedge aresetn) begin
    if (!aresetn) begin
      state <= IDLE; race_condition_fixed <= 1'b0;
      timing_slack_ps <= 16'd0; all_tests_passed <= 1'b0;
    end else case (state)
      IDLE:        if (scan_enable) state <= SCANNING;
      SCANNING:    if (lint_errors > 0) state <= ELIMINATING;
                   else state <= CLEAN;
      ELIMINATING: begin
                     race_condition_fixed <= 1'b1;
                     timing_slack_ps <= 16'd870; // +0.87ns setup slack
                     state <= CLEAN;
                   end
      CLEAN:       all_tests_passed <= 1'b1;
    endcase
  end
endmodule`,
    signals: [
      { name: 'ACLK', type: 'clock' },
      { name: 'ARESETN', type: 'level_high' },
      { name: 'LINT_ERRORS[7:0]', type: 'bus', values: ['0x12', '0x04', '0x01', '0x00', '0x00'] },
      { name: 'SCAN_ENABLE', type: 'pulse_early' },
      { name: 'RACE_FIXED', type: 'pulse_mid' },
      { name: 'TIMING_SLACK[ps]', type: 'bus', values: ['+0', '+200', '+500', '+870', '+870'] },
      { name: 'ALL_PASSED', type: 'pulse_late' },
    ],
  },
  {
    id: 'procrastination',
    filename: 'procrastination_counter.v',
    title: 'Hardware Deadline Clutch Unit',
    specs: 'FPGA Spartan-3 · Emergency Overclock · 1-Hour Tapeout Mode',
    desc: 'Dedicated state machine tracking meme scrolling time vs panic build time, automatically triggering hyper-focus mode 1 hour before git push.',
    code: `module procrastination_counter (
  input  wire       clk,
  input  wire       rst_n,
  input  wire [7:0] deadline_hours_left,
  input  wire       meme_scroll_active,
  output reg  [7:0] panic_level,
  output reg        clutch_mode_active,
  output reg        git_push_success
);

  always @(posedge clk or negedge rst_n) begin
    if (!rst_n) begin
      panic_level <= 8'd0; clutch_mode_active <= 1'b0; git_push_success <= 1'b0;
    end else if (deadline_hours_left <= 8'd1) begin
      panic_level <= 8'd100;      // MAXIMUM PANIC
      clutch_mode_active <= 1'b1;  // Hyper focus engaged
      git_push_success <= 1'b1;    // 100% Clutch Commit!
    end else if (meme_scroll_active) begin
      panic_level <= panic_level + 1;
    end
  end
endmodule`,
    signals: [
      { name: 'CLK', type: 'clock' },
      { name: 'RST_N', type: 'level_high' },
      { name: 'HOURS_LEFT', type: 'bus', values: ['24', '12', '4', '1', '0'] },
      { name: 'MEME_SCROLL', type: 'pulse_early_high' },
      { name: 'PANIC_LEVEL', type: 'bus', values: ['10', '35', '60', '100', '100'] },
      { name: 'CLUTCH_ACTIVE', type: 'pulse_late' },
      { name: 'GIT_PUSH_SUCCESS', type: 'pulse_late' },
    ],
  },
  {
    id: 'overclock',
    filename: 'neural_overclock.sv',
    title: 'Silicon Neural Synthesizer (400MHz)',
    specs: 'Sky130 HD PDK · Superconducting Neural Clock Generator',
    desc: 'Hardware clock generator accelerating mental logic gates from 50MHz to 400MHz during overnight ASIC synthesis sessions.',
    code: `module neural_overclock (
  input  logic       clk_in,
  input  logic       rst_n,
  input  logic [7:0] caffeine_voltage,
  output logic [9:0] target_freq_mhz,
  output logic       lock_detect,
  output logic       tape_out_ready
);

  always_ff @(posedge clk_in or negedge rst_n) begin
    if (!rst_n) begin
      target_freq_mhz <= 10'd50; lock_detect <= 1'b0; tape_out_ready <= 1'b0;
    end else if (caffeine_voltage > 8'hC0) begin
      target_freq_mhz <= 10'd400; // Superconducting Mode!
      lock_detect <= 1'b1;
      tape_out_ready <= 1'b1;
    end
  end
endmodule`,
    signals: [
      { name: 'CLK_IN', type: 'clock' },
      { name: 'RST_N', type: 'level_high' },
      { name: 'VOLTAGE[7:0]', type: 'bus', values: ['0x10', '0x80', '0xC0', '0xFF', '0xFF'] },
      { name: 'TARGET_FREQ', type: 'bus', values: ['50MHz', '100MHz', '400MHz', '400MHz', '400MHz'] },
      { name: 'LOCK_DETECT', type: 'pulse_mid' },
      { name: 'TAPE_OUT_READY', type: 'pulse_late' },
    ],
  },
];

export default function RTLWaveformInspector() {
  const [selectedModule, setSelectedModule] = useState(funnyModules[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCycle((prev) => (prev + 1) % 16);
    }, 400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="rtl-inspector" className="relative bg-[#02170f] text-[#FFFFFF] py-20 px-6 sm:px-12 border-b border-white/15">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <SectionReveal>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Cpu size={18} className="text-[#2DD4BF]" />
                <p className="eyebrow-label text-[#2DD4BF]">CREATIVE LIVE HDL SIMULATOR</p>
              </div>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#FFFFFF]">
                Creative RTL &amp; <span className="italic font-normal text-[#2DD4BF]">Live Waveform Simulator</span>
              </h2>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xs text-xs font-mono text-[#FFFFFF] hover:bg-[#2DD4BF] hover:text-[#02170f] transition-all cursor-pointer"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                {isPlaying ? 'PAUSE SIM' : 'PLAY SIM'}
              </button>
              <button
                onClick={() => setCycle(0)}
                className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/15 rounded-xs text-xs font-mono text-[#E2E8F0] hover:bg-white/15 transition-all cursor-pointer"
                title="Reset Clock Cycles"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>
        </SectionReveal>

        {/* Funny Module Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {funnyModules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => {
                setSelectedModule(mod);
                setCycle(0);
              }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xs font-mono text-xs whitespace-nowrap transition-all cursor-pointer border ${
                selectedModule.id === mod.id
                  ? 'bg-[#2DD4BF] text-[#02170f] font-bold border-[#2DD4BF] shadow-lg'
                  : 'bg-white/5 text-[#E2E8F0] border-white/15 hover:bg-white/10'
              }`}
            >
              {mod.id === 'caffeine' && <Coffee size={14} />}
              {mod.id === 'bug_annihilator' && <ShieldAlert size={14} />}
              {mod.id === 'procrastination' && <Clock size={14} />}
              {mod.id === 'overclock' && <Zap size={14} />}
              {mod.filename}
            </button>
          ))}
        </div>

        {/* Main Grid: Code + Waveform */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Code Viewer Panel */}
          <div className="lg:col-span-6 flex flex-col">
            <GlassPanel mode="dark" className="p-6 !rounded-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/15">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#2DD4BF]">
                    <Code size={16} />
                    <span>{selectedModule.filename}</span>
                  </div>
                  <span className="text-[0.68rem] font-mono text-[#CBD5E1]">Synthesizable HDL</span>
                </div>

                <h3 className="font-serif-title text-xl font-bold text-[#FFFFFF] mb-2">
                  {selectedModule.title}
                </h3>
                <p className="text-xs font-mono text-[#2DD4BF] mb-4">
                  {selectedModule.specs}
                </p>
                <p className="text-xs text-[#E2E8F0] leading-relaxed mb-6">
                  {selectedModule.desc}
                </p>

                {/* Verilog Code Block */}
                <div className="p-4 bg-black/60 rounded border border-white/15 font-mono text-xs leading-relaxed text-[#E2E8F0] overflow-x-auto max-h-[340px]">
                  <pre>{selectedModule.code}</pre>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-[#2DD4BF]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  Assertions: 100% Passed
                </span>
                <span>CLK: Active</span>
              </div>
            </GlassPanel>
          </div>

          {/* Right: Waveform Simulation Canvas */}
          <div className="lg:col-span-6 flex flex-col">
            <GlassPanel mode="dark" className="p-6 !rounded-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/15">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#2DD4BF]">
                    <Activity size={16} />
                    <span>Signal Waveform Trace</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#E2E8F0]">
                    <span>CYCLE:</span>
                    <span className="px-2 py-0.5 bg-[#2DD4BF]/20 text-[#2DD4BF] font-bold rounded">
                      #{cycle}
                    </span>
                  </div>
                </div>

                {/* Waveforms Canvas */}
                <div className="space-y-4 py-2 font-mono text-xs">
                  {selectedModule.signals.map((sig, idx) => (
                    <div key={sig.name} className="flex items-center gap-4">
                      {/* Signal Label */}
                      <span className="w-36 flex-shrink-0 text-[0.72rem] text-[#CBD5E1] truncate font-semibold">
                        {sig.name}
                      </span>

                      {/* Signal Waveform Line */}
                      <div className="flex-1 h-8 bg-black/50 border border-white/10 rounded px-2 flex items-center overflow-hidden">
                        {sig.type === 'clock' ? (
                          <svg className="w-full h-5" viewBox="0 0 320 20" preserveAspectRatio="none">
                            <path
                              d="M0,15 L20,15 L20,5 L40,5 L40,15 L60,15 L60,5 L80,5 L80,15 L100,15 L100,5 L120,5 L120,15 L140,15 L140,5 L160,5 L160,15 L180,15 L180,5 L200,5 L200,15 L220,15 L220,5 L240,5 L240,15 L260,15 L260,5 L280,5 L280,15 L300,15 L300,5 L320,5"
                              stroke="#2DD4BF"
                              strokeWidth="2"
                              fill="none"
                            />
                          </svg>
                        ) : sig.type === 'bus' ? (
                          <div className="w-full flex items-center justify-between text-[0.7rem] text-[#2DD4BF] font-bold px-1">
                            <span>[{sig.values[cycle % sig.values.length]}]</span>
                            <span className="text-[0.65rem] text-[#CBD5E1]">BUS 0x{cycle.toString(16).toUpperCase()}</span>
                          </div>
                        ) : (
                          <div className="w-full flex items-center">
                            <div
                              className={`h-2 rounded transition-all duration-300 ${
                                (cycle + idx) % 3 === 0 ? 'w-full bg-[#2DD4BF]' : 'w-1/4 bg-[#2DD4BF]/40'
                              }`}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Bar */}
              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-[#CBD5E1]">
                <span>TIMING: CLOSED (+0.87ns)</span>
                <span className="text-[#2DD4BF] font-semibold">SIMULATION ACTIVE</span>
              </div>
            </GlassPanel>
          </div>

        </div>

      </div>
    </section>
  );
}
