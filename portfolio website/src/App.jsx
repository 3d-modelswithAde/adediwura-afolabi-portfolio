import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { TechStackGrid } from './components/TechStackGrid';
import { Capabilities } from './components/Capabilities';
import { WhyChooseMe } from './components/WhyChooseMe';
import { CaseStudies } from './components/CaseStudies';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { CareerEvolution } from './components/CareerEvolution';
import { EngineeringMindset } from './components/EngineeringMindset';
import { Testimonials } from './components/Testimonials';
import { ProcessWorkflow } from './components/ProcessWorkflow';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-gold-500/20 selection:text-gold-400">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <TechStackGrid />
        <Capabilities />
        <WhyChooseMe />
        <CaseStudies />
        <InteractiveSimulator />
        <CareerEvolution />
        <EngineeringMindset />
        <Testimonials />
        <ProcessWorkflow />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
