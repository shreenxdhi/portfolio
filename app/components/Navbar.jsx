'use client';

import { useState, useEffect } from 'react';
import GlassPanel from './GlassPanel';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // State to easily switch between Option 1 (lowercase + dot) and Option 2 (terminal sv_)
  const [logoStyle, setLogoStyle] = useState('option1'); // 'option1' | 'option2'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'ABOUT' },
    { href: '#stack', label: 'STACK' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#education', label: 'EDUCATION' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4">
        <GlassPanel
          mode="dark"
          className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between !rounded-sm transition-all duration-300 ${
            scrolled ? '!bg-[rgba(2,23,15,0.95)] shadow-xl border-white/25' : ''
          }`}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            {logoStyle === 'option1' ? (
              /* OPTION 1: Lightweight Lowercase Font + Glowing Animated Status Dot */
              <a
                href="#hero"
                className="flex items-center gap-2.5 no-underline group"
                aria-label="Home"
              >
                <span className="font-sans text-base sm:text-lg font-light tracking-tight text-[#FFFFFF] group-hover:text-[#2DD4BF] transition-colors">
                  shreenidhi<span className="text-[#2DD4BF] font-semibold">.</span>
                </span>
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2DD4BF]" />
                </span>
              </a>
            ) : (
              /* OPTION 2: Terminal Style Logo (sv_) with Blinking Underscore Animation */
              <a
                href="#hero"
                className="font-mono text-base sm:text-lg font-bold tracking-widest text-[#FFFFFF] no-underline flex items-center group"
                aria-label="Home"
              >
                <span className="text-[#FFFFFF] group-hover:text-[#2DD4BF] transition-colors">sv</span>
                <span className="text-[#2DD4BF] animate-blink ml-0.5 font-extrabold">_</span>
              </a>
            )}
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="eyebrow-label text-[#E2E8F0] opacity-85 hover:opacity-100 editorial-link"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer text-[#FFFFFF]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </GlassPanel>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#02170f]/98 backdrop-blur-2xl flex flex-col justify-center px-8 py-16">
          <div className="space-y-6">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMobile}
                className="block font-serif-title text-3xl text-[#FFFFFF] no-underline hover:italic"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
