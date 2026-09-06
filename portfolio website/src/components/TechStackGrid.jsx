import React from 'react';
import { techStack } from '../data/techStack';
import { Cpu } from 'lucide-react';

export const TechStackGrid = () => {
  return (
    <section id="stack" className="py-24 bg-dark-950 border-b border-dark-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title (Ken signature layout) */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-3">
            Stack
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-100 font-normal tracking-tight mb-4">
            Tools of the trade.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Proficient across workflow orchestration, conversational telephony, AI intelligence, and engineering analysis.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-dark-900/60 border border-dark-800 hover:border-gold-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-editorial text-xl text-slate-100 font-medium group-hover:text-gold-300 transition-colors">
                    {category.category}
                  </h3>
                  <div className="w-8 h-8 rounded-lg bg-dark-850 border border-dark-700 flex items-center justify-center text-slate-400 group-hover:text-gold-400 transition-colors">
                    <Cpu className="w-4 h-4" />
                  </div>
                </div>
                
                <p className="text-xs text-slate-400 mb-6 font-sans">
                  {category.description}
                </p>

                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-dark-950/80 border border-dark-800/90 flex items-center justify-between gap-3 text-xs group-hover:border-dark-750 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                        <span className="font-medium text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 text-right truncate">
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
