import React from 'react';
import { techStack } from '../data/techStack';
import { Cpu } from 'lucide-react';

export const TechStackGrid = () => {
  return (
    <section id="stack" className="py-24 lg:py-32 bg-white dark:bg-dark-950 border-b border-slate-200/80 dark:border-dark-800/80 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Eyebrow & Title (Ken signature layout) */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[2.5px] text-slate-400 dark:text-slate-500 block mb-3">
            Stack
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 font-normal tracking-tight mb-4">
            Tools of the trade.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Proficient across GTM workflow orchestration, conversational telephony, AI intelligence, and product positioning.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50/70 dark:bg-dark-900/60 border border-slate-200 dark:border-dark-800 hover:border-gold-500/30 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-editorial text-xl text-slate-900 dark:text-slate-100 font-medium group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                    {category.category}
                  </h3>
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-700 flex items-center justify-center text-slate-400 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors shadow-sm">
                    <Cpu className="w-4 h-4" />
                  </div>
                </div>
                
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 font-sans">
                  {category.description}
                </p>

                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-white dark:bg-dark-950/80 border border-slate-200/80 dark:border-dark-800/90 flex items-center justify-between gap-3 text-xs group-hover:border-gold-500/20 dark:group-hover:border-dark-750 transition-colors shadow-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 dark:bg-gold-400"></span>
                        <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 text-right truncate">
                        {skill.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
