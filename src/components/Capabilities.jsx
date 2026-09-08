import React, { useState } from 'react';
import { capabilities } from '../data/capabilities';
import { Workflow, PhoneCall, Bot, Sparkles, Brain, TrendingUp, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Workflow,
  PhoneCall,
  Bot,
  Sparkles,
  Brain,
  TrendingUp,
};

export const Capabilities = () => {
  const [selectedCapability, setSelectedCapability] = useState(null);

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-white dark:bg-dark-950 relative border-b border-slate-200/80 dark:border-dark-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Eyebrow & Title (Ken signature style) */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[2.5px] text-slate-400 dark:text-slate-500 block mb-3">
            Capabilities
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 font-normal tracking-tight mb-4">
            What I bring to the table.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            End-to-end GTM systems designed to eliminate product adoption friction, qualify high-intent buyers 24/7, and accelerate pipeline velocity.
          </p>
        </div>

        {/* 6 Grid Cards with Ken's numbered index header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = iconMap[cap.iconName] || Workflow;
            const isSelected = selectedCapability === cap.id;
            const number = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={cap.id}
                onClick={() => setSelectedCapability(isSelected ? null : cap.id)}
                className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? 'bg-amber-50/50 dark:bg-dark-900 border-gold-500/80 shadow-[0_0_25px_rgba(245,158,11,0.12)]'
                    : 'bg-slate-50/70 dark:bg-dark-900/60 border-slate-200 dark:border-dark-800 hover:border-gold-500/30 dark:hover:border-dark-700 hover:bg-white dark:hover:bg-dark-900 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top row: Number + Tagline */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xl font-bold text-slate-400 dark:text-slate-600 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                      {number}
                    </span>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 text-slate-700 dark:text-slate-300 shadow-sm">
                      {cap.tagline}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-dark-950 border border-slate-200 dark:border-dark-700 flex items-center justify-center text-gold-500 dark:text-gold-400 shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-editorial text-xl sm:text-2xl text-slate-900 dark:text-slate-100 font-medium group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                      {cap.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-sans">
                    {cap.description}
                  </p>

                  {/* Deliverables Checklist (Amber/Gold checkmarks - NO GREEN) */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-200 dark:border-dark-800">
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                      Key Deliverables:
                    </span>
                    {cap.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 dark:text-gold-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Highlight Footer */}
                <div className="pt-4 border-t border-slate-200 dark:border-dark-800/80">
                  <span className="text-[11px] font-mono text-gold-600 dark:text-gold-400/80 block truncate font-medium">
                    {cap.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
