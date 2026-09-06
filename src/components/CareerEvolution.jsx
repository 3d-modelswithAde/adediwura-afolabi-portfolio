import React from 'react';
import { careerEvolution } from '../data/evolution';
import { CheckCircle2 } from 'lucide-react';

export const CareerEvolution = () => {
  return (
    <section id="evolution" className="py-24 bg-dark-900/40 border-b border-dark-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title (Ken signature layout) */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-3">
            Experience
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-100 font-normal tracking-tight mb-4">
            Where I have built things.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            An intentional progression from understanding audience psychology and frontline sales to orchestrating resilient, autonomous business systems.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-dark-700 ml-4 sm:ml-32 space-y-12">
          {careerEvolution.map((phase, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-dark-950 border-2 border-gold-500 flex items-center justify-center text-gold-400 text-xs font-mono font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform">
                {phase.phase}
              </div>

              {/* Timestamp label on left for larger screens */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                <span className="text-xs font-mono uppercase tracking-wider text-gold-400/90 font-semibold block">
                  Phase {phase.phase}
                </span>
                <span className="text-[11px] text-slate-500 font-sans">
                  {phase.era}
                </span>
              </div>

              {/* Content Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-dark-950 border border-dark-800 hover:border-gold-500/30 transition-all shadow-xl">
                
                <div className="sm:hidden mb-2">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                    Phase {phase.phase} · {phase.era}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl text-slate-100 font-medium mb-3">
                  {phase.title}
                </h3>

                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-5">
                  {phase.summary}
                </p>

                {/* Key Learnings List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-dark-800">
                  {phase.learnings.map((learning, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{learning}</span>
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
