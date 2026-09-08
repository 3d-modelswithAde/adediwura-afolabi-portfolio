import React, { useState } from 'react';
import { projects } from '../data/projects';
import { 
  AlertTriangle, 
  ShieldCheck, 
  TrendingUp, 
  Maximize2, 
  Minimize2,
  ArrowUpRight,
  Workflow,
  Sparkles
} from 'lucide-react';

export const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [enlargedProjectId, setEnlargedProjectId] = useState(null);

  const categories = ['All', 'Enterprise GTM Automation', 'Voice GTM', 'Lifecycle Operations', 'Digital Growth'];

  const categoryMap = {
    'intake-agent': 'Enterprise GTM Automation',
    'voice-agent': 'Voice GTM',
    'community-birthday': 'Lifecycle Operations',
    'social-media-growth': 'Digital Growth'
  };

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => categoryMap[p.id] === activeCategory);

  const toggleEnlarge = (id) => {
    setEnlargedProjectId(prev => prev === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-slate-50/50 dark:bg-dark-900/40 border-b border-slate-200/80 dark:border-dark-800/80 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header - Exact Format as oyedokunken.vercel.app (Title on Left, Filters on Right) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-slate-400 dark:text-slate-500 block mb-3">
              Projects
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 font-normal tracking-tight mb-3">
              Systems that ship.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Engineering standard: <span className="text-slate-800 dark:text-slate-200 font-medium">Problem → Systems Thinking → Architecture → Measurable Outcome</span>.
            </p>
          </div>

          {/* Category Filter Pills on the Right-Hand Side (Maximized Space) */}
          <div className="flex flex-wrap gap-2 sm:justify-end max-w-xl">
            {categories.map((cat) => {
              const isCatActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    // Reset enlargement if category changes and project is hidden
                    if (enlargedProjectId && cat !== 'All' && categoryMap[enlargedProjectId] !== cat) {
                      setEnlargedProjectId(null);
                    }
                  }}
                  className={`text-[11px] tracking-[1px] uppercase px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                    isCatActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-dark-950 font-semibold border-slate-900 dark:border-white shadow-sm'
                      : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-dark-900/60 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Project Grid with Individual Click-to-Enlarge Full Space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const isEnlarged = enlargedProjectId === project.id;
            return (
              <article
                key={project.id}
                className={`group rounded-2xl bg-white dark:bg-dark-950 border transition-all duration-300 flex flex-col overflow-hidden ${
                  isEnlarged
                    ? 'lg:col-span-2 border-gold-500/60 dark:border-gold-400/50 shadow-2xl ring-1 ring-gold-500/30'
                    : 'border-slate-200/90 dark:border-white/[0.08] shadow-sm hover:shadow-xl hover:border-gold-500/40 dark:hover:border-gold-400/30'
                }`}
              >
                {/* Card Top Header (Clickable to Enlarge / Minimize) */}
                <div 
                  onClick={() => toggleEnlarge(project.id)}
                  className="p-6 sm:p-7 pb-5 border-b border-slate-100 dark:border-white/[0.06] bg-slate-50/50 dark:bg-dark-900/40 flex flex-col gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gold-600 dark:text-gold-400 uppercase tracking-wider font-semibold">
                        {project.client}
                      </span>
                      <span className="text-slate-300 dark:text-slate-700">·</span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
                        {categoryMap[project.id]}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-0.5 rounded-full text-[10px] font-mono border bg-amber-50 dark:bg-gold-950/40 text-amber-800 dark:text-gold-300 border-amber-300/60 dark:border-gold-500/30 flex-shrink-0">
                        ● {project.badge}
                      </span>

                      {/* Enlarge / Minimize Toggle Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleEnlarge(project.id);
                        }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                          isEnlarged
                            ? 'bg-gold-500 text-slate-950 font-semibold border-gold-500 shadow-sm'
                            : 'bg-white dark:bg-dark-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400'
                        }`}
                      >
                        {isEnlarged ? (
                          <>
                            <Minimize2 className="w-3.5 h-3.5" />
                            <span>Minimize View</span>
                          </>
                        ) : (
                          <>
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>Fit Whole Space</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <h3 className={`font-editorial text-slate-900 dark:text-slate-100 font-medium leading-snug ${
                    isEnlarged ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                  }`}>
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Problem vs Systems Thinking (Side-by-Side to Maximize Horizontal Space) */}
                <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* The Friction */}
                    <div className={`p-4 sm:p-5 rounded-xl bg-slate-50/80 dark:bg-dark-900/60 border border-slate-200/80 dark:border-white/[0.06] ${
                      isEnlarged ? 'shadow-inner' : ''
                    }`}>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-rose-500 dark:text-rose-400 mb-2 font-semibold">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>The Friction & Problem</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                        {project.problem}
                      </p>
                    </div>

                    {/* Systems Thinking */}
                    <div className={`p-4 sm:p-5 rounded-xl bg-slate-50/80 dark:bg-dark-900/60 border border-gold-500/20 dark:border-gold-500/20 ${
                      isEnlarged ? 'shadow-inner' : ''
                    }`}>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-gold-600 dark:text-gold-400 mb-2 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Systems Thinking & Solution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                        {project.thinking}
                      </p>
                    </div>
                  </div>

                  {/* Sequential Architecture Pipeline Stages */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-[1.5px] text-slate-400 dark:text-slate-500 font-semibold">
                        Execution Graph ({project.architecture.length} Sequential Pipeline Stages)
                      </span>
                      {!isEnlarged && (
                        <button
                          type="button"
                          onClick={() => toggleEnlarge(project.id)}
                          className="text-[11px] font-mono text-gold-600 dark:text-gold-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>Enlarge to Inspect All Stages</span>
                          <Maximize2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {/* When Enlarged: Render Full Multi-Column Sequential Stage Cards */}
                    {isEnlarged ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-2">
                        {project.architecture.map((step) => (
                          <div
                            key={step.step}
                            className="p-4 rounded-xl bg-slate-50/90 dark:bg-dark-900/90 border border-slate-200/80 dark:border-white/[0.08] flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-mono text-gold-600 dark:text-gold-400 font-bold">
                                  STEP {step.step}
                                </span>
                                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-white dark:bg-dark-950 border border-slate-200 dark:border-white/10">
                                  {step.actor}
                                </span>
                              </div>
                              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1.5">
                                {step.title}
                              </h4>
                              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3 font-sans">
                                {step.desc}
                              </p>
                            </div>
                            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/80 dark:border-white/[0.06]">
                              → {step.details}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* When Compact: Step Pills */
                      <div className="flex flex-wrap gap-1.5">
                        {project.architecture.map((step) => (
                          <div
                            key={step.step}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/70 dark:bg-dark-900 border border-slate-200/70 dark:border-white/[0.06] text-[10px] font-mono text-slate-700 dark:text-slate-300"
                          >
                            <span className="text-gold-600 dark:text-gold-400 font-semibold">{step.step}</span>
                            <span>{step.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Tags matching Ken's tag pills */}
                  <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] tracking-wide uppercase px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-dark-900/50 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Verified Outcome Callout Box */}
                    <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-gold-950/20 border border-amber-200/80 dark:border-gold-500/30 flex items-start gap-3">
                      <TrendingUp className="w-4 h-4 text-amber-600 dark:text-gold-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="text-[10px] font-mono uppercase text-amber-800 dark:text-gold-400 block font-semibold mb-0.5">
                          Verified Commercial Outcome:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Strip for Enlarged View */}
                    {isEnlarged && (
                      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                          Viewing full-width architectural blueprint
                        </span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => toggleEnlarge(project.id)}
                            className="text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 cursor-pointer"
                          >
                            Minimize to Grid
                          </button>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-950 font-semibold bg-gold-400 hover:bg-gold-300 px-3.5 py-1.5 rounded-lg shadow-sm"
                          >
                            <span>Get in Touch</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
