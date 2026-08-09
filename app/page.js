'use client';

import LenisProvider from './components/LenisProvider';
import AmbientLighting from './components/AmbientLighting';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsGrid from './components/SkillsGrid';
import ProjectsGrid from './components/ProjectsGrid';
import Education from './components/Education';
import Contact from './components/Contact';

export default function Home() {
  return (
    <LenisProvider>
      <AmbientLighting />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <SkillsGrid />
        <ProjectsGrid />
        <Education />
        <Contact />
      </main>
    </LenisProvider>
  );
}
