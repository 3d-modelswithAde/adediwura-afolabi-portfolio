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
    <section id="capabilities" className="py-24 bg-dark-950 relative border-b border-dark-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title (Ken signature style) */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-3">
            Capabilities
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-100 font-normal tracking-tight mb-4">
            What I bring to the table.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            End-to-end intelligent systems designed to remove operational bottlenecks, qualify high-value customers 24/7, and eliminate repetitive human friction.
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
                    ? 'bg-dark-900 border-gold-500/80 shadow-[0_0_25px_rgba(245,158,11,0.12)]'
                    : 'bg-dark-900/60 border-dark-800 hover:border-dark-700 hover:bg-dark-900'
                }`}
              >
                <div>
                  {/* Top row: Number + Tagline */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xl font-bold text-slate-600 group-hover:text-gold-400 transition-colors">
                      {number}
                    </span>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-dark-800 border border-dark-700 text-slate-300">
                      {cap.tagline}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-dark-950 border border-dark-700 flex items-center justify-center text-gold-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-editorial text-xl sm:text-2xl text-slate-100 font-medium group-hover:text-gold-300 transition-colors">
                      {cap.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                    {cap.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-dark-800">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                      Key Deliverables:
                    </span>
                    {cap.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Highlight Footer */}
                <div className="pt-4 border-t border-dark-800/80">
                  <span className="text-[11px] font-mono text-gold-400/80 block truncate">
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
