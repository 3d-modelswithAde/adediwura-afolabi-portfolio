import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-dark-950 border-t border-slate-200 dark:border-dark-850 text-slate-500 dark:text-slate-400 font-sans text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="flex items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-dark-850">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400 font-editorial font-bold text-sm shadow-sm">
              AA
            </div>
            <div>
              <span className="font-editorial text-sm font-semibold text-slate-900 dark:text-slate-200 block">
                Adediwura Afolabi
              </span>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                Engineering Mindset · GTM Execution · AI-Automated Velocity
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-dark-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex items-center justify-between text-slate-500 text-[11px] font-mono">
          <p>© {new Date().getFullYear()} Adediwura Afolabi.</p>
        </div>

      </div>
    </footer>
  );
};

