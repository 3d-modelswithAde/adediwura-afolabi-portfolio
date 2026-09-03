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
    <section id="capabilities" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            Core Capabilities
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-100 font-normal tracking-tight mb-4">
            What I Build
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            Practical AI systems designed to remove operational bottlenecks, automate high-value customer interactions, and turn complex operations into seamless digital experiences.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const Icon = iconMap[cap.iconName] || Workflow;
            const isSelected = selectedCapability === cap.id;

            return (
              <div
                key={cap.id}
                onClick={() => setSelectedCapability(isSelected ? null : cap.id)}
                className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-dark-900 border-gold-500/80 shadow-[0_0_25px_rgba(245,158,11,0.12)]'
                    : 'bg-dark-900/60 border-dark-800 hover:border-dark-700 hover:bg-dark-900'
                }`}
              >
                <div>
                  {/* Icon & Tagline */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-dark-950 border border-dark-700 flex items-center justify-center text-gold-400 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-dark-800 border border-dark-700 text-slate-300">
                      {cap.tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial text-2xl text-slate-100 mb-3 font-medium">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                    {cap.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-dark-800">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                      Key Deliverables:
                    </span>
                    {cap.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
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
