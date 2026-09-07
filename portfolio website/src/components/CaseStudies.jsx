import React, { useState } from 'react';
import { projects } from '../data/projects';
import { 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Layers, 
  AlertTriangle, 
  ShieldCheck, 
  PhoneCall, 
  Calendar, 
  TrendingUp, 
  Workflow,
  Sparkles,
  Terminal
} from 'lucide-react';

export const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  const categories = ['All', 'Enterprise Automation', 'Voice AI', 'Operations & Data', 'Digital Growth'];

  const categoryMap = {
    'intake-agent': 'Enterprise Automation',
    'voice-agent': 'Voice AI',
    'community-birthday': 'Operations & Data',
    'social-media-growth': 'Digital Growth'
  };

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => categoryMap[p.id] === activeCategory);

  const activeProject = projects.find((p) => p.id === activeProjectId) || filteredProjects[0] || projects[0];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-slate-50/50 dark:bg-dark-900/40 border-b border-slate-200/80 dark:border-dark-800/80 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Eyebrow & Title (Ken signature layout) */}
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[2.5px] text-slate-400 dark:text-slate-500 block mb-3">
            Featured Work
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 font-normal tracking-tight mb-4">
            Systems that ship.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Every build follows an engineering standard: <strong className="text-slate-800 dark:text-slate-200">Problem → Systems Thinking → Build → Architecture → Measurable Outcome</strong>.
          </p>
        </div>

        {/* Category Filter Pills (Ken signature filter bar) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => {
            const isCatActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  const matched = projects.find(p => cat === 'All' || categoryMap[p.id] === cat);
                  if (matched) setActiveProjectId(matched.id);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
                  isCatActive
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-dark-950 font-semibold border-slate-900 dark:border-white shadow-sm'
                    : 'bg-white dark:bg-dark-900/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-dark-800 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-dark-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {filteredProjects.map((proj) => {
            const isActive = proj.id === activeProject.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProjectId(proj.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2.5 border ${
                  isActive
                    ? 'bg-amber-50 dark:bg-dark-850 text-amber-800 dark:text-gold-300 border-gold-500/50 shadow-sm ring-1 ring-gold-500/30'
                    : 'bg-white dark:bg-dark-950/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-dark-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span>{proj.title}</span>
                {proj.isProduction && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-gold-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Deep Dive Case Study Card */}
        <div className="rounded-2xl bg-white dark:bg-dark-950 border border-slate-200 dark:border-dark-800 shadow-xl p-6 sm:p-10 transition-all">
          
          {/* Top Bar: Client & Status Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-dark-800/80 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs font-mono text-gold-600 dark:text-gold-400 uppercase tracking-wider font-semibold">
                  {activeProject.client}
                </span>
                <span className="text-slate-400 dark:text-slate-600">·</span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {activeProject.type}
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-slate-900 dark:text-slate-100 font-medium">
                {activeProject.title}
              </h3>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono border bg-amber-50 dark:bg-gold-950/40 text-amber-800 dark:text-gold-300 border-amber-300/60 dark:border-gold-500/30">
                ● {activeProject.badge}
              </span>
            </div>
          </div>

          {/* Problem & Thinking Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* The Operational Problem */}
            <div className="p-6 rounded-xl bg-slate-50/70 dark:bg-dark-900/60 border border-slate-200 dark:border-dark-800/90">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-500 dark:text-rose-400 mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>The Friction & Problem</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {activeProject.problem}
              </p>
            </div>

            {/* The Systems Thinking & Architecture */}
            <div className="p-6 rounded-xl bg-slate-50/70 dark:bg-dark-900/60 border border-gold-500/30 dark:border-gold-500/20">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-600 dark:text-gold-400 mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Systems Thinking & Solution</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {activeProject.thinking}
              </p>
            </div>
          </div>

          {/* Execution Blueprint: Multi-Step Architecture */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Execution Graph & Invariants
              </span>
              <span className="text-[11px] font-mono text-gold-600 dark:text-gold-400/80">
                {activeProject.architecture.length} Sequential Pipeline Stages
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {activeProject.architecture.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-slate-50/80 dark:bg-dark-900/80 border border-slate-200 dark:border-dark-800 hover:border-slate-300 dark:hover:border-dark-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-gold-600 dark:text-gold-400 font-semibold">
                      STEP {step.step}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-white dark:bg-dark-950 border border-slate-200 dark:border-dark-800">
                      {step.actor}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {step.desc}
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/80 dark:border-dark-850">
                    → {step.details}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Verified Outcome Footer */}
          <div className="pt-6 border-t border-slate-200 dark:border-dark-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-500 block mb-2">
                Technologies Orchestrated:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-dark-700 text-xs font-mono text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:max-w-md p-4 rounded-xl bg-amber-50/80 dark:bg-gold-950/20 border border-amber-200 dark:border-gold-500/30">
              <span className="text-[11px] font-mono uppercase text-amber-800 dark:text-gold-400 block mb-1 font-semibold">
                Verified Outcome & Impact:
              </span>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-sans">
                {activeProject.outcome}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
