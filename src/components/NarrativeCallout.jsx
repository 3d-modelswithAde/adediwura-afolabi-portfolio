import React from 'react';
import { ArrowRight, Compass, Wrench, Megaphone, Cpu } from 'lucide-react';

export const NarrativeCallout = () => {
  return (
    <section className="py-20 bg-dark-900/50 border-y border-dark-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            The Strategic Bridge
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-slate-100 font-normal max-w-2xl mx-auto">
            Why Frontline Marketing Made Me a Better AI System Builder
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          {/* Pillar 1: Engineering Mindset */}
          <div className="p-7 rounded-2xl bg-dark-950 border border-dark-800 hover:border-gold-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center text-gold-400 mb-5 group-hover:scale-105 transition-transform">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl text-slate-100 mb-2">
              Engineering Mindset
            </h3>
            <p className="text-xs font-mono text-gold-400/90 mb-3 uppercase tracking-wider">
              Systems & Mechanics
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              My Mechatronics Engineering foundation trained me in first-principles decomposition: breaking complex machines down into deterministic inputs, state machines, sensors, and fail-safe feedback loops.
            </p>
          </div>

          {/* Pillar 2: Creative Execution */}
          <div className="p-7 rounded-2xl bg-dark-950 border border-dark-800 hover:border-gold-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center text-gold-400 mb-5 group-hover:scale-105 transition-transform">
              <Megaphone className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl text-slate-100 mb-2">
              Creative Execution
            </h3>
            <p className="text-xs font-mono text-gold-400/90 mb-3 uppercase tracking-wider">
              Human Attention & Trust
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Operating on the frontlines of Social Media and Content Strategy taught me how businesses capture attention, address objections, and drive real revenue. Technology fails if people don't use it.
            </p>
          </div>

          {/* Pillar 3: AI-Powered Thinking */}
          <div className="p-7 rounded-2xl bg-dark-950 border border-dark-800 hover:border-gold-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center text-gold-400 mb-5 group-hover:scale-105 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl text-slate-100 mb-2">
              AI-Powered Thinking
            </h3>
            <p className="text-xs font-mono text-gold-400/90 mb-3 uppercase tracking-wider">
              Autonomous Systems
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Today, I merge both disciplines: using LLMs, voice AI agents, and n8n automations to eliminate friction, automate triage, and deliver intelligent systems that work 24/7 without fatigue.
            </p>
          </div>

        </div>

        {/* Narrative Statement Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 border border-gold-500/20 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl">
            <blockquote className="font-editorial text-xl sm:text-2xl text-slate-100 italic leading-snug mb-4">
              "I started by helping businesses use digital platforms to reach and convert customers. Now I'm building the intelligent backend systems that help businesses automate, communicate, and operate."
            </blockquote>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Many developers build complex AI models that don't solve commercial problems. Many marketers run campaigns that break down due to manual operational bottlenecks. My work lives at the exact intersection: <strong className="text-slate-200">building automated revenue engines that respect human psychology and maintain engineering rigor.</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
