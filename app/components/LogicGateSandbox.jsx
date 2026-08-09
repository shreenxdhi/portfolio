'use client';

import { useState } from 'react';
import SectionReveal from './SectionReveal';
import GlassPanel from './GlassPanel';
import { Cpu, Zap, CheckCircle } from 'lucide-react';

const gates = [
  { id: 'AND', name: 'AND Gate', fn: (a, b) => (a && b ? 1 : 0), table: [[0,0,0],[0,1,0],[1,0,0],[1,1,1]] },
  { id: 'OR', name: 'OR Gate', fn: (a, b) => (a || b ? 1 : 0), table: [[0,0,0],[0,1,1],[1,0,1],[1,1,1]] },
  { id: 'XOR', name: 'XOR Gate', fn: (a, b) => (a !== b ? 1 : 0), table: [[0,0,0],[0,1,1],[1,0,1],[1,1,0]] },
  { id: 'NAND', name: 'NAND Gate', fn: (a, b) => (!(a && b) ? 1 : 0), table: [[0,0,1],[0,1,1],[1,0,1],[1,1,0]] },
  { id: 'NOR', name: 'NOR Gate', fn: (a, b) => (!(a || b) ? 1 : 0), table: [[0,0,1],[0,1,0],[1,0,0],[1,1,0]] },
  { id: 'XNOR', name: 'XNOR Gate', fn: (a, b) => (a === b ? 1 : 0), table: [[0,0,1],[0,1,0],[1,0,0],[1,1,1]] },
];

export default function LogicGateSandbox() {
  const [inputA, setInputA] = useState(1);
  const [inputB, setInputB] = useState(0);
  const [selectedGate, setSelectedGate] = useState(gates[0]);

  const outputVal = selectedGate.fn(inputA, inputB);

  return (
    <section id="logic-sandbox" className="relative bg-[#02170f] text-[#FFFFFF] py-20 px-6 sm:px-12 border-b border-white/15">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <Zap size={18} className="text-[#2DD4BF]" />
            <p className="eyebrow-label text-[#2DD4BF]">INTERACTIVE CIRCUIT BUILDER</p>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#FFFFFF] mb-8">
            Digital Logic Gate <span className="italic font-normal text-[#2DD4BF]">Sandbox</span>
          </h2>
        </SectionReveal>

        {/* Gate Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {gates.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGate(g)}
              className={`px-4 py-2 rounded-xs font-mono text-xs font-bold transition-all cursor-pointer border ${
                selectedGate.id === g.id
                  ? 'bg-[#2DD4BF] text-[#02170f] border-[#2DD4BF] shadow-lg'
                  : 'bg-white/5 text-[#E2E8F0] border-white/15 hover:bg-white/10'
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Input Switches & Gate Schematic */}
          <div className="lg:col-span-7 flex flex-col">
            <GlassPanel mode="dark" className="p-6 sm:p-8 !rounded-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                  <span className="font-mono text-xs text-[#2DD4BF] font-bold">LOGIC CIRCUIT DIAGRAM</span>
                  <span className="font-mono text-xs text-[#CBD5E1]">{selectedGate.name}</span>
                </div>

                {/* Input Toggles */}
                <div className="flex items-center justify-around gap-6 mb-8">
                  {/* Switch A */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-mono text-xs text-[#E2E8F0] font-bold">INPUT A</span>
                    <button
                      onClick={() => setInputA(inputA === 1 ? 0 : 1)}
                      className={`w-16 h-10 rounded-full flex items-center p-1 cursor-pointer transition-colors border ${
                        inputA === 1 ? 'bg-[#2DD4BF] border-[#2DD4BF]' : 'bg-black/60 border-white/20'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full bg-white font-mono text-xs font-bold flex items-center justify-center text-[#02170f] transition-transform ${
                          inputA === 1 ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      >
                        {inputA}
                      </div>
                    </button>
                    <span className={`font-mono text-xs ${inputA === 1 ? 'text-[#2DD4BF]' : 'text-slate-400'}`}>
                      LOGIC {inputA}
                    </span>
                  </div>

                  {/* Switch B */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-mono text-xs text-[#E2E8F0] font-bold">INPUT B</span>
                    <button
                      onClick={() => setInputB(inputB === 1 ? 0 : 1)}
                      className={`w-16 h-10 rounded-full flex items-center p-1 cursor-pointer transition-colors border ${
                        inputB === 1 ? 'bg-[#2DD4BF] border-[#2DD4BF]' : 'bg-black/60 border-white/20'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full bg-white font-mono text-xs font-bold flex items-center justify-center text-[#02170f] transition-transform ${
                          inputB === 1 ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      >
                        {inputB}
                      </div>
                    </button>
                    <span className={`font-mono text-xs ${inputB === 1 ? 'text-[#2DD4BF]' : 'text-slate-400'}`}>
                      LOGIC {inputB}
                    </span>
                  </div>
                </div>

                {/* Live Output Signal Reader */}
                <div className="p-6 bg-black/60 rounded border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Cpu size={24} className="text-[#2DD4BF]" />
                    <div>
                      <div className="font-mono text-xs text-[#CBD5E1]">OUTPUT SIGNAL Y</div>
                      <div className="font-mono text-xl font-bold text-[#FFFFFF]">
                        Y = {inputA} {selectedGate.id} {inputB} = <span className="text-[#2DD4BF]">{outputVal}</span>
                      </div>
                    </div>
                  </div>

                  {/* Output LED */}
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`w-6 h-6 rounded-full transition-all duration-300 ${
                        outputVal === 1
                          ? 'bg-[#2DD4BF] shadow-[0_0_15px_#2DD4BF]'
                          : 'bg-red-500/30 border border-red-500/50'
                      }`}
                    />
                    <span className="font-mono text-[0.65rem] text-[#CBD5E1]">
                      {outputVal === 1 ? 'HIGH (1)' : 'LOW (0)'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-[#2DD4BF]">
                <span>Propagation Delay: &lt; 0.1ns</span>
                <span>Synthesizable Logic</span>
              </div>
            </GlassPanel>
          </div>

          {/* Right: Truth Table Panel */}
          <div className="lg:col-span-5 flex flex-col">
            <GlassPanel mode="dark" className="p-6 sm:p-8 !rounded-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                  <span className="font-mono text-xs text-[#2DD4BF] font-bold">TRUTH TABLE</span>
                  <span className="font-mono text-xs text-[#CBD5E1]">Active State Highlighted</span>
                </div>

                <div className="overflow-hidden rounded border border-white/15">
                  <table className="w-full text-center font-mono text-xs">
                    <thead className="bg-white/10 text-[#2DD4BF] uppercase">
                      <tr>
                        <th className="py-2.5 px-3">Input A</th>
                        <th className="py-2.5 px-3">Input B</th>
                        <th className="py-2.5 px-3">Output Y</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {selectedGate.table.map(([a, b, y], idx) => {
                        const isActive = a === inputA && b === inputB;
                        return (
                          <tr
                            key={idx}
                            className={`transition-colors ${
                              isActive ? 'bg-[#2DD4BF]/20 text-[#2DD4BF] font-bold' : 'text-[#E2E8F0]'
                            }`}
                          >
                            <td className="py-3 px-3">{a}</td>
                            <td className="py-3 px-3">{b}</td>
                            <td className="py-3 px-3 font-bold">{y}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center gap-2 text-xs font-mono text-[#2DD4BF]">
                <CheckCircle size={14} />
                <span>Verification State Verified</span>
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
