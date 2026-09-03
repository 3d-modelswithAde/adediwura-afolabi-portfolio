import React, { useState } from 'react';
import { projects } from '../data/projects';
import { 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  Cpu, 
  Layers, 
  AlertTriangle, 
  ShieldCheck, 
  PhoneCall, 
  Calendar, 
  TrendingUp, 
  Workflow,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export const CaseStudies = () => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section id="projects" className="py-24 bg-dark-900/60 border-t border-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            Proof of Work & Engineering Rigor
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-100 font-normal tracking-tight mb-4">
            Things I've Built
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Every project follows a strict framework: <strong className="text-slate-200">Problem → Systems Thinking → Build → Architecture → Measurable Outcome</strong>.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {projects.map((proj) => {
            const isActive = proj.id === activeProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProjectId(proj.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2.5 border ${
                  isActive
                    ? 'bg-gold-500 text-dark-950 border-gold-400 font-semibold shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                    : 'bg-dark-950/80 text-slate-300 border-dark-800 hover:border-slate-700 hover:bg-dark-900'
                }`}
              >
                <span>{proj.title}</span>
                {proj.isProduction && (
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-dark-950' : 'bg-emerald-400'}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Project Full Presentation Card */}
        <div className="bg-dark-950 rounded-3xl border border-dark-800 p-6 sm:p-10 lg:p-12 shadow-2xl transition-all">
          
          {/* Top Banner Meta */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-dark-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                  activeProject.badgeColor === 'emerald'
                    ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30'
                    : 'bg-gold-950/60 text-gold-400 border-gold-500/30'
                }`}>
                  {activeProject.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Client / Domain: <strong className="text-slate-200">{activeProject.client}</strong>
                </span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-slate-100 font-normal tracking-tight">
                {activeProject.title}
              </h3>
            </div>
            
            <div className="text-left md:text-right">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                Category
              </span>
              <span className="text-sm font-medium text-slate-300">
                {activeProject.type}
              </span>
            </div>
          </div>

          {/* Core Story: Problem vs Thinking vs Build Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 border-b border-dark-800">
            
            {/* The Problem */}
            <div className="p-6 rounded-2xl bg-dark-900/60 border border-red-950/40">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-400 mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>The Core Business Friction</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {activeProject.problem}
              </p>
            </div>

            {/* The Systems Thinking */}
            <div className="p-6 rounded-2xl bg-dark-900/60 border border-gold-950/40">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-400 mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>The Systems Thinking & Invariants</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {activeProject.thinking}
              </p>
            </div>

          </div>

          {/* Visual Step-by-Step Architecture Workflow Diagram */}
          <div className="py-10 border-b border-dark-800">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                  Architecture Blueprint
                </span>
                <h4 className="font-editorial text-2xl text-slate-100 font-medium">
                  End-to-End Workflow Execution Graph
                </h4>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 px-3 py-1 bg-dark-900 rounded-lg border border-dark-800">
                <Workflow className="w-3.5 h-3.5 text-gold-400" />
                Deterministic Path
              </span>
            </div>

            {/* Horizontal / Grid Flow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeProject.architecture.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-dark-900 border border-dark-800 hover:border-gold-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-7 h-7 rounded-lg bg-dark-950 border border-dark-700 flex items-center justify-center text-xs font-mono font-bold text-gold-400 group-hover:border-gold-400 transition-colors">
                        {step.step}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 bg-dark-950 px-2 py-0.5 rounded border border-dark-800">
                        {step.actor}
                      </span>
                    </div>
                    <h5 className="font-editorial text-lg text-slate-100 mb-2 group-hover:text-gold-300 transition-colors">
                      {step.title}
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-dark-800/70 text-[11px] font-mono text-slate-400 leading-snug">
                    <span className="text-gold-400/80">Mechanism:</span> {step.details}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges & Documented Outcome */}
          <div className="pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2">
                Technologies & Tools Applied
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-dark-900 border border-dark-700 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Documented Outcome Callout */}
            <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 lg:max-w-md">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Documented Outcome
              </span>
              <p className="text-xs sm:text-sm text-emerald-200 font-sans leading-relaxed">
                {activeProject.outcome}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
