import React from 'react';
import { techStack } from '../data/techStack';
import { Cpu, Check } from 'lucide-react';

export const TechStackGrid = () => {
  return (
    <section id="stack" className="py-24 bg-dark-950 border-t border-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            The Toolkit
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-100 font-normal tracking-tight mb-4">
            Technologies & Systems
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            Strictly technologies backed by real build experience and operational deployment.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-900/60 border border-dark-800 hover:border-dark-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-editorial text-xl text-slate-100 font-medium">
                    {category.category}
                  </h3>
                  <Cpu className="w-4 h-4 text-gold-400" />
                </div>
                
                <p className="text-xs text-slate-400 mb-5 font-sans">
                  {category.description}
                </p>

                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-dark-950 border border-dark-800 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2">
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
