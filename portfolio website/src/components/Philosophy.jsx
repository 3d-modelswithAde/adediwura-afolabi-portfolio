import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap, Rocket, MapPin, Layers, Target, GraduationCap } from 'lucide-react';

export const Philosophy = () => {
  const manifestoText = "I build business automations the way engineers design physical control systems. Every webhook has a contract, every model has a schema, every failure has a fallback. I don't just build scripts. I build the operational infrastructure that businesses run on.";
  const words = manifestoText.split(' ');

  const [activeWordIndex, setActiveWordIndex] = useState(-1);

  useEffect(() => {
    // Subtle illuminated typewriter reveal effect matching scraped site
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => {
        if (prev < words.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 45);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-slate-50/60 dark:bg-dark-900/40 border-y border-slate-200/80 dark:border-dark-800/80 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        
        {/* Ken Signature 2-Column Wide Split Layout (1fr sticky left, 2fr expansive right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Sticky Column */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div>
              {/* Subtle fading eyebrow - not bright yellow */}
              <span className="text-xs font-mono uppercase tracking-[3px] text-slate-400 dark:text-slate-500 block mb-4 transition-opacity">
                Philosophy
              </span>
              <h2 className="font-editorial text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-slate-100 leading-[1.1] mb-6">
                Thinking<br className="hidden sm:inline" /> in systems.
              </h2>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-4">
                I don't automate to impress, I build to deliver. I value quality architecture, deterministic execution, and measurable conversion over clever prompt tricks and fragile scripts. The systems that survive in production are the ones engineered with fail-safes from day one.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Before writing automations, I operated on the frontlines of Social Media Management and Customer Acquisition. That experience taught me what many developers miss: technology is worthless if it doesn't align with human psychology, reduce buyer friction, and produce undeniable commercial outcomes.
              </p>
            </div>

            {/* 4-Box Quick Facts with understated, subtle symbols */}
            <div className="grid grid-cols-2 gap-3.5 pt-6 border-t border-slate-200/80 dark:border-dark-800">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-dark-950/60 border border-slate-200 dark:border-dark-800 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-dark-800 flex items-center justify-center shrink-0 text-slate-400 dark:text-slate-500">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-[1.5px] uppercase text-slate-400 dark:text-slate-500">
                    Based in
                  </p>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    Lagos, Nigeria (WAT)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-dark-950/60 border border-slate-200 dark:border-dark-800 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-dark-800 flex items-center justify-center shrink-0 text-slate-400 dark:text-slate-500">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-[1.5px] uppercase text-slate-400 dark:text-slate-500">
                    Stack
                  </p>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    AI & Systems
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-dark-950/60 border border-slate-200 dark:border-dark-800 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-dark-800 flex items-center justify-center shrink-0 text-slate-400 dark:text-slate-500">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-[1.5px] uppercase text-slate-400 dark:text-slate-500">
                    Focus
                  </p>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    Voice AI & Intake
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-dark-950/60 border border-slate-200 dark:border-dark-800 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-dark-800 flex items-center justify-center shrink-0 text-slate-400 dark:text-slate-500">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-[1.5px] uppercase text-slate-400 dark:text-slate-500">
                    Education
                  </p>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    Mechatronics Eng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Big Architectural Statement + 3 Pillars */}
          <div className="space-y-12">
            
            {/* Animated Architectural Statement (Word-by-word reveal matching Ken's site) */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-dark-950/90 border border-slate-200/90 dark:border-dark-800 shadow-xl relative overflow-hidden group">
              <p className="font-editorial text-[clamp(1.25rem,2.2vw,1.75rem)] font-normal leading-[1.6] tracking-tight text-slate-900 dark:text-slate-100">
                {words.map((word, idx) => (
                  <span
                    key={idx}
                    className={`inline-block mr-[0.26em] transition-all duration-300 ${
                      idx <= activeWordIndex
                        ? 'opacity-100 text-slate-900 dark:text-slate-100'
                        : 'opacity-30 text-slate-400 dark:text-slate-600'
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>

            {/* 3 Pillars Grid (Clean, subtle icons, subtitles removed, NO greens) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              
              {/* Pillar 1: Clean Architecture */}
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-950 border border-slate-200 dark:border-dark-800 hover:border-gold-500/30 dark:hover:border-gold-500/30 transition-all group shadow-sm hover:shadow-md">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-dark-750 flex items-center justify-center text-slate-500 dark:text-slate-400 mb-4 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-editorial text-lg text-slate-900 dark:text-slate-100 font-semibold mb-2">
                  Clean Architecture
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  Workflows are engineered with invariants: CRM records are created before AI execution, tracking IDs are dual-mapped, and schemas are strictly validated. Systems that are easy to extend and resilient to failure.
                </p>
              </div>

              {/* Pillar 2: Performance First (NO GREEN, subtle warm tone) */}
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-950 border border-slate-200 dark:border-dark-800 hover:border-gold-500/30 dark:hover:border-gold-500/30 transition-all group shadow-sm hover:shadow-md">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-dark-750 flex items-center justify-center text-slate-500 dark:text-slate-400 mb-4 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-editorial text-lg text-slate-900 dark:text-slate-100 font-semibold mb-2">
                  Performance First
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  Speed and accuracy are baseline requirements. Commercial pricing is locked to immutable deterministic matrices, sensitivity triggers are quarantined immediately, and telephony response times remain sub-second.
                </p>
              </div>

              {/* Pillar 3: Ship It */}
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-950 border border-slate-200 dark:border-dark-800 hover:border-gold-500/30 dark:hover:border-gold-500/30 transition-all group shadow-sm hover:shadow-md">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-dark-750 flex items-center justify-center text-slate-500 dark:text-slate-400 mb-4 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                  <Rocket className="w-4 h-4" />
                </div>
                <h3 className="font-editorial text-lg text-slate-900 dark:text-slate-100 font-semibold mb-2">
                  Ship It
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  No endless theoretical research or ungrounded prototypes. Systems are built, tested with standardized automated suites, and deployed to live production schedules in West Africa Time (WAT).
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
