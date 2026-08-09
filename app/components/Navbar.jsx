'use client';

import { useState, useEffect, useRef } from 'react';
import GlassPanel from './GlassPanel';
import { Command, ChevronDown, Globe, Palette, Terminal as TermIcon } from 'lucide-react';

const timezones = [
  { label: 'IST', tz: 'Asia/Kolkata', name: 'Bengaluru (IST)' },
  { label: 'PST', tz: 'America/Los_Angeles', name: 'Silicon Valley (PST)' },
  { label: 'EST', tz: 'America/New_York', name: 'New York (EST)' },
  { label: 'GMT', tz: 'Europe/London', name: 'London (GMT)' },
  { label: 'LOCAL', tz: 'LOCAL', name: 'Auto Location' },
];

const themes = [
  { id: 'bottega', name: 'Bottega Green', color: '#2DD4BF' },
  { id: 'cyber', name: 'Cyber Cyan', color: '#38BDF8' },
  { id: 'champagne', name: 'Champagne Gold', color: '#F59E0B' },
  { id: 'tokyo', name: 'Tokyo Night', color: '#A855F7' },
];

export default function Navbar({ onOpenPalette, onOpenTerminal, activeTheme, onSelectTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [timeString, setTimeString] = useState('');
  const [selectedTz, setSelectedTz] = useState(timezones[0]);
  const [tzDropdownOpen, setTzDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [isMac, setIsMac] = useState(true);
  const tzRef = useRef(null);
  const themeRef = useRef(null);

  // Detect OS for ⌘K vs Ctrl+K
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      setIsMac(/Mac|iPod|iPhone|iPad/i.test(navigator.userAgent));
    }
  }, []);

  // Auto-detect browser timezone on initial load
  useEffect(() => {
    try {
      const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (userTz) {
        const match = timezones.find((t) => t.tz === userTz);
        if (match) setSelectedTz(match);
      }
    } catch {}
  }, []);

  // Real-Time Hardware Clock Tracker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let tzToUse = selectedTz.tz;
      if (tzToUse === 'LOCAL') {
        tzToUse = Intl.DateTimeFormat().resolvedOptions().timeZone;
      }
      const options = {
        timeZone: tzToUse,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setTimeString(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [selectedTz]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (tzRef.current && !tzRef.current.contains(e.target)) setTzDropdownOpen(false);
      if (themeRef.current && !themeRef.current.contains(e.target)) setThemeDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'ABOUT' },
    { href: '#stack', label: 'STACK' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#rtl-inspector', label: 'SIMULATOR' },
    { href: '#logic-sandbox', label: 'SANDBOX' },
    { href: '#education', label: 'EDUCATION' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const closeMobile = () => setMobileOpen(false);

  // Smooth scroll handler that strips # hash from URL bar
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMobile();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (typeof window !== 'undefined' && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4">
        <GlassPanel
          mode="dark"
          className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between !rounded-sm transition-all duration-300 ${
            scrolled ? '!bg-[rgba(2,23,15,0.95)] shadow-xl border-white/25' : ''
          }`}
        >
          {/* Left: Minimalist Brand Mark */}
          <button
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 no-underline group border-none bg-transparent cursor-pointer p-0"
            aria-label="Home"
          >
            <span className="font-sans text-base sm:text-lg font-light tracking-tight text-[#FFFFFF] group-hover:text-[#2DD4BF] transition-colors">
              shreenidhi<span className="text-[#2DD4BF] font-semibold">.</span>
            </span>
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2DD4BF]" />
            </span>
          </button>

          {/* Center: Global Clock & Command Palette & Terminal Triggers (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 font-mono text-xs text-[#E2E8F0] border-x border-white/15 px-6 h-9">
            
            {/* Global Timezone Switcher Dropdown */}
            <div className="relative" ref={tzRef}>
              <button
                onClick={() => setTzDropdownOpen(!tzDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/15 border border-white/15 transition-colors cursor-pointer text-[#2DD4BF] font-semibold"
                title="Click to change timezone location"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                <span>{selectedTz.label} {timeString || '15:58:00'}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${tzDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Timezone Dropdown */}
              {tzDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#02170f] border border-white/20 rounded shadow-xl py-1 z-50 text-xs font-mono">
                  <div className="px-3 py-1.5 text-[0.65rem] text-[#94A3B8] uppercase border-b border-white/10 flex items-center gap-1.5">
                    <Globe size={11} className="text-[#2DD4BF]" />
                    <span>Global Timezone</span>
                  </div>
                  {timezones.map((tz) => (
                    <button
                      key={tz.label}
                      onClick={() => {
                        setSelectedTz(tz);
                        setTzDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer border-none bg-transparent ${
                        selectedTz.label === tz.label ? 'text-[#2DD4BF] font-bold bg-white/5' : 'text-[#E2E8F0]'
                      }`}
                    >
                      <span>{tz.name}</span>
                      <span className="text-[0.65rem] opacity-70">{tz.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Palette Switcher Dropdown */}
            <div className="relative" ref={themeRef}>
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 hover:bg-white/15 border border-white/15 transition-colors cursor-pointer text-[#E2E8F0]"
                title="Switch Theme Palette"
              >
                <Palette size={13} className="text-[#2DD4BF]" />
                <ChevronDown size={11} className={`transition-transform duration-200 ${themeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {themeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-[#02170f] border border-white/20 rounded shadow-xl py-1 z-50 text-xs font-mono">
                  <div className="px-3 py-1.5 text-[0.65rem] text-[#94A3B8] uppercase border-b border-white/10 flex items-center gap-1.5">
                    <Palette size={11} className="text-[#2DD4BF]" />
                    <span>Select Theme</span>
                  </div>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        onSelectTheme?.(t.id);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer border-none bg-transparent ${
                        activeTheme === t.id ? 'text-[#2DD4BF] font-bold bg-white/5' : 'text-[#E2E8F0]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: t.color }} />
                        <span>{t.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Terminal Shell Button */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 border border-white/20 hover:bg-[#2DD4BF] hover:text-[#02170f] transition-all cursor-pointer text-[0.7rem] font-bold"
              title="Launch Terminal Shell (~)"
            >
              <TermIcon size={12} />
              <span>~</span>
            </button>

            {/* Command Palette Button */}
            <button
              onClick={onOpenPalette}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 border border-white/20 hover:bg-[#2DD4BF] hover:text-[#02170f] transition-all cursor-pointer text-[0.72rem] font-bold shadow-sm"
              title="Open Command Palette (Cmd + K / Ctrl + K)"
            >
              {isMac ? (
                <>
                  <Command size={12} />
                  <span>K</span>
                </>
              ) : (
                <span>Ctrl + K</span>
              )}
            </button>
          </div>

          {/* Right: Desktop Links */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <button
                key={href}
                onClick={(e) => handleNavClick(e, href)}
                className="eyebrow-label text-[#E2E8F0] opacity-85 hover:opacity-100 editorial-link border-none bg-transparent cursor-pointer p-0"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile Actions & Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-1.5 bg-white/10 rounded border border-white/20 text-[#2DD4BF]"
              aria-label="Open Terminal Shell"
            >
              <TermIcon size={14} />
            </button>
            <button
              onClick={onOpenPalette}
              className="px-2 py-1 bg-white/10 rounded border border-white/20 text-[#2DD4BF] flex items-center gap-1 text-xs font-mono font-bold"
              aria-label="Open Command Palette"
            >
              {isMac ? (
                <>
                  <Command size={13} />
                  <span>K</span>
                </>
              ) : (
                <span>Ctrl+K</span>
              )}
            </button>
            <button
              className="flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer text-[#FFFFFF]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation"
            >
              <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </GlassPanel>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#02170f]/98 backdrop-blur-2xl flex flex-col justify-center px-8 py-16">
          <div className="space-y-6">
            {links.map(({ href, label }) => (
              <button
                key={href}
                onClick={(e) => handleNavClick(e, href)}
                className="block font-serif-title text-3xl text-[#FFFFFF] border-none bg-transparent cursor-pointer text-left w-full hover:italic"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
