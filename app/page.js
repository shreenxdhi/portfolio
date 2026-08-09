'use client';

import { useState, useCallback, useEffect } from 'react';
import LenisProvider from './components/LenisProvider';
import AmbientLighting from './components/AmbientLighting';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsGrid from './components/SkillsGrid';
import ProjectsGrid from './components/ProjectsGrid';
import RTLWaveformInspector from './components/RTLWaveformInspector';
import LogicGateSandbox from './components/LogicGateSandbox';
import Education from './components/Education';
import Contact from './components/Contact';
import CommandPalette from './components/CommandPalette';
import TerminalOverlay from './components/TerminalOverlay';

export default function Home() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [theme, setTheme] = useState('bottega');

  const handleOpenPalette = useCallback(() => setIsPaletteOpen(true), []);
  const handleClosePalette = useCallback(() => setIsPaletteOpen(false), []);

  const handleOpenTerminal = useCallback(() => setIsTerminalOpen(true), []);
  const handleCloseTerminal = useCallback(() => setIsTerminalOpen(false), []);

  const handleOpenRTL = useCallback(() => {
    const el = document.querySelector('#rtl-inspector');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    if (typeof window !== 'undefined' && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  // Sync theme background with document body class
  useEffect(() => {
    document.body.className = `min-h-screen theme-${theme} text-[#FFFFFF] selection:bg-[#2DD4BF] selection:text-[#032317] transition-colors duration-500`;
  }, [theme]);

  // Automatically clean # hash fragments from URL bar on load & hashchange
  useEffect(() => {
    const cleanHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    };
    cleanHash();
    window.addEventListener('hashchange', cleanHash);
    return () => window.removeEventListener('hashchange', cleanHash);
  }, []);

  return (
    <LenisProvider>
      <AmbientLighting theme={theme} />
      
      {/* Command Palette Overlay */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={handleClosePalette}
        onOpenRTL={handleOpenRTL}
        onOpenPalette={handleOpenPalette}
      />

      {/* Terminal Overlay */}
      <TerminalOverlay
        isOpen={isTerminalOpen}
        onClose={handleCloseTerminal}
      />

      {/* Navigation Toolbar */}
      <Navbar
        onOpenPalette={handleOpenPalette}
        onOpenTerminal={handleOpenTerminal}
        activeTheme={theme}
        onSelectTheme={setTheme}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <SkillsGrid />
        <ProjectsGrid />
        
        {/* Creative RTL Waveform Simulator */}
        <RTLWaveformInspector />
        
        {/* Digital Logic Gate Sandbox */}
        <LogicGateSandbox />

        <Education />
        <Contact />
      </main>
    </LenisProvider>
  );
}
