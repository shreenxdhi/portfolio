'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code, Mail, ArrowRight, X, Cpu, Terminal, Coffee } from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function CommandPalette({ isOpen, onClose, onOpenRTL, onOpenPalette }) {
  const [query, setQuery] = useState('');

  const commands = [
    {
      category: 'NAVIGATION',
      items: [
        { id: 'nav-hero', label: 'Go to Home / Hero', icon: Terminal, action: () => scrollTo('#hero') },
        { id: 'nav-about', label: 'Go to About', icon: Cpu, action: () => scrollTo('#about') },
        { id: 'nav-stack', label: 'Go to Tech Stack', icon: Code, action: () => scrollTo('#stack') },
        { id: 'nav-projects', label: 'Go to Featured Projects', icon: Code, action: () => scrollTo('#projects') },
        { id: 'nav-simulator', label: 'Launch Live RTL Waveform Simulator', icon: Cpu, action: () => scrollTo('#rtl-inspector') },
        { id: 'nav-education', label: 'Go to Education', icon: Cpu, action: () => scrollTo('#education') },
        { id: 'nav-contact', label: 'Go to Contact', icon: Mail, action: () => scrollTo('#contact') },
      ],
    },
    {
      category: 'CREATIVE RTL ACCELERATORS & TOOLS',
      items: [
        {
          id: 'tool-caffeine',
          label: 'caffeine_fsm.v — 250mg Coffee-to-Verilog Engine',
          icon: Coffee,
          badge: 'FUNNY HDL',
          action: () => {
            onOpenRTL?.();
            onClose();
          },
        },
        {
          id: 'tool-overclock',
          label: 'overclock_brain.sv — 400MHz Overclocked RTL Unit',
          icon: Cpu,
          badge: 'CREATIVE RTL',
          action: () => {
            onOpenRTL?.();
            onClose();
          },
        },
      ],
    },
    {
      category: 'RTL REPOSITORIES',
      items: [
        { id: 'p-qvision', label: 'QVision — Hardware QR Decoder RTL', icon: GithubIcon, action: () => openUrl('https://github.com/shreenxdhi/QVision') },
        { id: 'p-sobel', label: 'Streaming Sobel Image Accelerator', icon: GithubIcon, action: () => openUrl('https://github.com/shreenxdhi/Image-Processing-Hardware') },
        { id: 'p-uart', label: 'UART Controller (115,200 Baud)', icon: GithubIcon, action: () => openUrl('https://github.com/shreenxdhi/UART-Controller') },
        { id: 'p-dma', label: 'AXI4 DMA Controller (5 Channels)', icon: GithubIcon, action: () => openUrl('https://github.com/shreenxdhi/DMA-Controller') },
      ],
    },
    {
      category: 'QUICK ACTIONS',
      items: [
        { id: 'act-email', label: 'Copy Email (shreenidhiv17@gmail.com)', icon: Mail, action: () => copyText('shreenidhiv17@gmail.com') },
        { id: 'act-github', label: 'Open GitHub Profile', icon: GithubIcon, action: () => openUrl('https://github.com/shreenxdhi') },
        { id: 'act-linkedin', label: 'Open LinkedIn Profile', icon: LinkedinIcon, action: () => openUrl('https://linkedin.com/in/shreenidhiv') },
      ],
    },
  ];

  const scrollTo = (id) => {
    onClose();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openUrl = (url) => {
    onClose();
    window.open(url, '_blank');
  };

  const copyText = (text) => {
    onClose();
    navigator.clipboard.writeText(text);
  };

  // Reliable cross-platform (Mac & Windows/Linux) keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        e.stopPropagation();
        if (isOpen) {
          onClose?.();
        } else {
          onOpenPalette?.();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [isOpen]);

  const filteredCommands = commands.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          className="relative w-full max-w-2xl bg-[#0A0E2A] border border-white/25 rounded-md shadow-2xl overflow-hidden text-[#FFFFFF] z-10"
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/15 bg-white/5">
            <Search size={18} className="text-[#5B8DEF]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search (e.g. Caffeine, Verilog, GitHub)..."
              className="w-full bg-transparent text-sm text-[#FFFFFF] placeholder:text-[#94A3B8] outline-none font-sans"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded text-[#94A3B8] hover:text-white bg-white/5 hover:bg-white/10 border-none cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Commands List */}
          <div className="max-h-[380px] overflow-y-auto p-2 space-y-4 font-sans">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-sm text-[#94A3B8]">
                No matching commands or projects found.
              </div>
            ) : (
              filteredCommands.map((category) => (
                <div key={category.category}>
                  <div className="px-3 py-1.5 text-[0.68rem] font-bold font-mono tracking-widest text-[#5B8DEF] uppercase">
                    {category.category}
                  </div>
                  <div className="space-y-1">
                    {category.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={item.action}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded text-left text-sm text-[#E2E8F0] hover:bg-white/10 hover:text-white transition-colors cursor-pointer border-none bg-transparent group"
                        >
                          <div className="flex items-center gap-3">
                            <Icon size={16} className="text-[#5B8DEF] group-hover:scale-110 transition-transform" />
                            <span>{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {item.badge && (
                              <span className="text-[0.62rem] font-mono font-bold px-1.5 py-0.5 rounded bg-[#5B8DEF]/20 text-[#5B8DEF] border border-[#5B8DEF]/40">
                                {item.badge}
                              </span>
                            )}
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#5B8DEF]" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-4 py-2.5 border-t border-white/15 bg-white/5 flex items-center justify-between text-[0.7rem] font-mono text-[#94A3B8]">
            <div className="flex items-center gap-3">
              <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[#FFFFFF]">Ctrl / ⌘ + K</kbd> toggle</span>
              <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[#FFFFFF]">ESC</kbd> close</span>
            </div>
            <span className="text-[#5B8DEF]">RTL Command Palette</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
