import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NarrativeCallout } from './components/NarrativeCallout';
import { Capabilities } from './components/Capabilities';
import { CaseStudies } from './components/CaseStudies';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { CareerEvolution } from './components/CareerEvolution';
import { EngineeringMindset } from './components/EngineeringMindset';
import { ProcessWorkflow } from './components/ProcessWorkflow';
import { TechStackGrid } from './components/TechStackGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-gold-500/20 selection:text-gold-400">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <NarrativeCallout />
        <Capabilities />
        <CaseStudies />
        <InteractiveSimulator />
        <CareerEvolution />
        <EngineeringMindset />
        <ProcessWorkflow />
        <TechStackGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
