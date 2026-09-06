import React from 'react';
import { ShieldCheck, Zap, Rocket, MapPin, Layers, Target, GraduationCap } from 'lucide-react';

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-dark-900/40 border-y border-dark-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title (Ken signature style) */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-3">
            Philosophy
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-100 font-normal tracking-tight">
            Thinking in systems.
          </h2>
        </div>

        {/* Top Split: Manifesto Quote + 4-Box Metadata Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          
          {/* Main Manifesto */}
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal mb-6">
              I don't automate to impress, I build to deliver. I value quality architecture, deterministic execution, and measurable conversion over clever prompt tricks and fragile scripts. The systems that survive in production are the ones engineered with fail-safes from day one.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Before writing automations, I operated on the frontlines of Social Media Management and Customer Acquisition. That experience taught me what many developers miss: technology is worthless if it doesn't align with human psychology, reduce buyer friction, and produce undeniable commercial outcomes.
            </p>
          </div>

          {/* Quick-Facts 4-Box Card (Ken signature feature) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 p-4 rounded-2xl bg-dark-950 border border-dark-800 shadow-xl">
            <div className="p-4 rounded-xl bg-dark-900/60 border border-dark-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-gold-400" /> Based in
              </span>
              <span className="text-sm font-semibold text-slate-200">
                Lagos, Nigeria (WAT)
              </span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/60 border border-dark-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1 flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-gold-400" /> Stack
              </span>
              <span className="text-sm font-semibold text-slate-200">
                AI & Systems
              </span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/60 border border-dark-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1 flex items-center gap-1.5">
                <Target className="w-3 h-3 text-gold-400" /> Focus
              </span>
              <span className="text-sm font-semibold text-slate-200">
                Voice AI & Intake
              </span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/60 border border-dark-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1 flex items-center gap-1.5">
                <GraduationCap className="w-3 h-3 text-gold-400" /> Education
              </span>
              <span className="text-sm font-semibold text-slate-200">
                Mechatronics Eng.
              </span>
            </div>
          </div>

        </div>

        {/* Large Architectural Statement Banner (Ken signature manifesto) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 border border-gold-500/20 shadow-2xl mb-14 relative overflow-hidden">
          <div className="max-w-4xl">
            <blockquote className="font-editorial text-xl sm:text-2xl text-slate-100 italic leading-snug mb-4">
              "I build business automations the way engineers design physical control systems. Every webhook has a contract, every model has a schema, every failure has a fallback. I don't just build scripts. I build the operational infrastructure that businesses run on."
            </blockquote>
          </div>
        </div>

        {/* 3 Pillars Grid (Ken signature 3-card layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 sm:p-7 rounded-2xl bg-dark-950 border border-dark-800 hover:border-gold-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center text-gold-400 mb-5 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl text-slate-100 mb-2">
              Clean Architecture
            </h3>
            <p className="text-xs font-mono text-gold-400/90 mb-3 uppercase tracking-wider">
              Deterministic & Resilient
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Workflows are engineered with invariants: CRM records are created before AI execution, tracking IDs are dual-mapped, and schemas are strictly validated. Systems that are easy to extend and resilient to failure.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-dark-950 border border-dark-800 hover:border-emerald-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl text-slate-100 mb-2">
              Performance First
            </h3>
            <p className="text-xs font-mono text-emerald-400/90 mb-3 uppercase tracking-wider">
              Sub-Second & Zero-Hallucination
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Speed and accuracy are baseline requirements. Commercial pricing is locked to immutable deterministic matrices, sensitivity triggers are quarantined immediately, and telephony response times remain sub-second.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-dark-950 border border-dark-800 hover:border-gold-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center text-gold-400 mb-5 group-hover:scale-105 transition-transform">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl text-slate-100 mb-2">
              Ship It
            </h3>
            <p className="text-xs font-mono text-gold-400/90 mb-3 uppercase tracking-wider">
              Concept to Production
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              No endless theoretical research or ungrounded prototypes. Systems are built, tested with standardized automated suites, and deployed to live production schedules in West Africa Time (WAT).
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
