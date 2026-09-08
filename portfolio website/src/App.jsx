import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { TechStackGrid } from './components/TechStackGrid';
import { Capabilities } from './components/Capabilities';
import { WhyChooseMe } from './components/WhyChooseMe';
import { CaseStudies } from './components/CaseStudies';
import { CareerEvolution } from './components/CareerEvolution';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

export function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-dark-950 dark:text-slate-100 flex flex-col font-sans selection:bg-gold-500/20 selection:text-gold-600 dark:selection:text-gold-400 transition-colors duration-300">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <TechStackGrid />
        <Capabilities />
        <WhyChooseMe />
        <CaseStudies />
        <CareerEvolution />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
