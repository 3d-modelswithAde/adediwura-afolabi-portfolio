import React from 'react';
import { Search, GitFork, LayoutGrid, Hammer, RefreshCw } from 'lucide-react';

export const ProcessWorkflow = () => {
  const steps = [
    {
      step: '01',
      title: 'Understand',
      icon: Search,
      action: 'Diagnose the Real Friction',
      desc: 'Before writing any automation logic or prompting an LLM, I map the exact human friction point, commercial bottleneck, or lost revenue leak.'
    },
    {
      step: '02',
      title: 'Map',
      icon: GitFork,
      action: 'Chart the Data Flow',
      desc: 'I blueprint the entire journey: from raw customer ingestion across WhatsApp, forms, or calls, to CRM states, email dispatches, and notifications.'
    },
    {
      step: '03',
      title: 'Design',
      icon: LayoutGrid,
      action: 'Architect Systems & Invariants',
      desc: 'I establish strict non-negotiable invariants (e.g. CRM Ticket First, zero pricing hallucinations, sensitivity quarantine) to ensure system reliability.'
    },
    {
      step: '04',
      title: 'Build',
      icon: Hammer,
      action: 'Integrate APIs & Models',
      desc: 'I connect n8n workflows, OpenAI/Claude models, ElevenLabs telephony, and CRM endpoints with full error-handling and fallback states.'
    },
    {
      step: '05',
      title: 'Improve',
      icon: RefreshCw,
      action: 'Benchmark & Eliminate Errors',
      desc: 'I run standardized test suites (such as the 8 automotive test cases), monitor real telemetry, and refine prompts until hallucination rates are zero.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-dark-900/60 border-t border-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            Methodology
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-100 font-normal tracking-tight mb-4">
            How I Work
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            A disciplined 5-step engineering framework to turn operational headaches into resilient, automated assets.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark-950 border border-dark-800 hover:border-gold-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-gold-400 bg-dark-900 px-2 py-1 rounded border border-dark-700">
                      {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-slate-500 group-hover:text-gold-400 transition-colors" />
                  </div>
                  <h3 className="font-editorial text-xl text-slate-100 mb-1 font-medium">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-gold-400/90 block mb-3">
                    {item.action}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Callout Quote */}
        <div className="max-w-3xl mx-auto text-center p-6 rounded-2xl bg-dark-950 border border-dark-800">
          <p className="font-editorial text-xl text-slate-200 italic mb-2">
            "I don't automate for the sake of automation."
          </p>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            I look for repetitive, expensive, or inefficient processes where intelligent systems can create meaningful business value.
          </p>
        </div>

      </div>
    </section>
  );
};
