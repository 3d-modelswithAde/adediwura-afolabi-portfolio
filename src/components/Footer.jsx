import React from 'react';
import { ArrowUp, Heart, Cpu } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-dark-950 border-t border-dark-850 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dark-850">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-dark-900 border border-gold-500/30 flex items-center justify-center text-gold-400 font-editorial font-bold text-sm">
              AA
            </div>
            <div>
              <span className="font-editorial text-sm font-semibold text-slate-200 block">
                Adediwura Afolabi
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                Engineering Mindset · Creative Execution · AI-Powered Thinking
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#capabilities" className="hover:text-gold-400 transition-colors">Capabilities</a>
            <a href="#projects" className="hover:text-gold-400 transition-colors">Case Studies</a>
            <a href="#simulator" className="hover:text-gold-400 transition-colors">Simulator</a>
            <a href="#evolution" className="hover:text-gold-400 transition-colors">Evolution</a>
            <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-dark-900 border border-dark-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <p>© {new Date().getFullYear()} Adediwura Afolabi. Built with React, Tailwind CSS & Lora typography standard.</p>
          <p className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-gold-400" />
            <span>Deterministic Architectures · Zero-Hallucination Operations</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
