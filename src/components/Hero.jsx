import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Cpu, Bot, Workflow, CheckCircle2, MessageSquare, Terminal } from 'lucide-react';

export const Hero = () => {
  const [activeWorkflowStage, setActiveWorkflowStage] = useState(1);

  const workflowStages = [
    {
      id: 0,
      label: '01. Input',
      subtext: 'Inbound Ingestion',
      icon: MessageSquare,
      headline: 'Multi-Touch Customer & Lead Ingestion',
      description: 'Inbound prospect signals arrive via product lead forms, inbound telephony, WhatsApp messages, or support emails.',
      technicalSpec: '⚡ Twilio SIP / Webhook listener ⇄ REST API endpoint ⨉ Lead UUID generation & event telemetry',
      businessImpact: 'Zero lost inquiries, consolidated attribution, sub-second capture across all channels.'
    },
    {
      id: 1,
      label: '02. AI Reasoning',
      subtext: 'Extraction & Safety',
      icon: Bot,
      headline: 'Autonomous ICP Qualification & Intent Parsing',
      description: 'LLMs extract unstructured inquiry details into strict JSON schemas while deterministic safety filters flag chargeback or legal risks.',
      technicalSpec: '⚙️ OpenAI / Claude [JSON Mode] ⇄ Strict ICP Prompts ⨉ Regex Sensitivity Filters',
      businessImpact: 'Zero-hallucination structured lead data; high-risk inquiries quarantined to human review.'
    },
    {
      id: 2,
      label: '03. Automation',
      subtext: 'Deterministic Logic',
      icon: Workflow,
      headline: 'Lifecycle Sync & CRM Pipeline Invariants',
      description: 'The CRM Ticket and Deal record are generated first before any downstream actions to guarantee no lead loss.',
      technicalSpec: '⨀ n8n Orchestration ⇄ HubSpot CRM API ⇄ Dual-ID tracking (lead_<uuid> + TRK-XXXX)',
      businessImpact: '100% GTM auditability; inquiries never get dropped even if third-party tools fail.'
    },
    {
      id: 3,
      label: '04. Action',
      subtext: 'Multi-Channel Dispatch',
      icon: Cpu,
      headline: 'Hyper-Personalized Product Nurture & Voice Dispatch',
      description: 'The system triggers instantaneous multi-channel actions: customer quote delivery, sales rep Telegram alerts, and master ledger logging.',
      technicalSpec: '🎙️ ElevenLabs Voice Synthesis ⇄ Twilio Call Dispatch ⇄ Telegram Bot API ⇄ Google Sheets Ledger',
      businessImpact: 'Lead response and triage turnaround reduced from 4 hours to under 45 seconds.'
    },
    {
      id: 4,
      label: '05. Result',
      subtext: 'Business Revenue',
      icon: CheckCircle2,
      headline: 'Measurable Commercial & GTM Outcomes',
      description: 'Higher lead conversion, faster response times, and hours of repetitive manual administrative friction completely eliminated.',
      technicalSpec: '📈 Real-Time Telemetry ⇄ Multi-Touch Conversion Tracking ⇄ 25-Column Audit Trails',
      businessImpact: 'Accelerated deal closing, protected customer goodwill, and scalable operations.'
    }
  ];

  const marqueeTechnologies = [
    'n8n Orchestration',
    'ElevenLabs Voice AI',
    'Twilio Telephony',
    'OpenAI & Claude LLMs',
    'HubSpot CRM API',
    'GTM Positioning',
    'Python',
    'Google Workspace API',
    'Telegram Bot API',
    'React 19',
    'Tailwind CSS',
    'SolidWorks CAD',
    'MATLAB',
    'Product-Market Fit Loops',
    'Deterministic State Machines'
  ];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-white dark:bg-dark-950 bg-grid-pattern transition-colors duration-300">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gold-500/5 dark:bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
        
        {/* Top Split Hero Grid (Ken Signature 2-Column Wide Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-24">
          
          {/* Left Column (7 cols): Copy, CTAs, and Metric Counters */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Availability Status Badge (Ken style, Amber/Gold - NO GREEN) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-dark-900 border border-amber-500/30 text-amber-600 dark:text-gold-400 text-xs font-mono shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 dark:bg-gold-400"></span>
              </span>
              <span>Available to work globally</span>
            </div>

            {/* Giant Editorial Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[4.25rem] font-normal tracking-tight text-slate-900 dark:text-slate-100 leading-[1.06]">
              Engineering GTM systems. <br />
              <span className="text-slate-500 dark:text-slate-400 italic font-medium">
                Automating product velocity.
              </span>
            </h1>

            {/* Bio / Positioning Subheadline */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              AI Product Marketing Manager & Automation Strategist. Mechatronics-trained, systems-minded, conversion-focused. Turning GTM friction, lead qualification, and product onboarding into autonomous, zero-hallucination pipelines.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-dark-950 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-white transition-all hover:shadow-lg active:scale-95"
              >
                View GTM Systems
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white dark:bg-dark-900/80 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-dark-700 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-dark-850 hover:text-gold-600 dark:hover:text-gold-400 hover:border-gold-500/40 transition-all active:scale-95 shadow-sm"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Metric Counter Tickers (Ken signature layout, NO GREEN) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-dark-800 max-w-lg">
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-0.5">
                  10<span className="text-gold-500 dark:text-gold-400">+</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  GTM Systems Shipped
                </div>
              </div>
              <div className="border-x border-slate-200 dark:border-dark-800 px-4">
                <div className="font-editorial text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-0.5">
                  250<span className="text-gold-500 dark:text-gold-400">+</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  Direct Customer Conversions
                </div>
              </div>
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-0.5">
                  99.9<span className="text-gold-500 dark:text-gold-400">%</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  Pipeline Execution Reliability
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): High-Impact Identity Portrait Card (Ken signature feature) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl border border-slate-200 dark:border-dark-750 overflow-hidden shadow-2xl group bg-slate-100 dark:bg-dark-900">
              <img
                src="/profile.jpeg"
                alt="Adediwura Afolabi"
                className="w-full h-full object-cover object-center filter grayscale contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-dark-950/80 backdrop-blur-md border border-white/10 text-white shadow-xl">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-editorial text-base font-semibold text-white">
                    Adediwura Afolabi
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gold-400 border border-white/10">
                    I work with your time zone
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-2">
                  AI Product Marketing Manager
                </p>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-gold-400/90">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-400"></span>
                  </span>
                  Available to work globally
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Infinite Tech Marquee Ribbon (Full-Width Ticker) */}
        <div className="mb-20 overflow-hidden relative py-4 border-y border-slate-200/80 dark:border-dark-800/80 bg-slate-100/50 dark:bg-dark-900/40 rounded-xl">
          <div className="flex gap-8 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
            {[...marqueeTechnologies, ...marqueeTechnologies].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/80 dark:bg-gold-400/60"></span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive 5-Stage System Flow Inspector (Full Max-W-7xl Layout) */}
        <div className="w-full rounded-2xl bg-white dark:bg-dark-900/90 border border-slate-200/90 dark:border-dark-700/80 p-6 sm:p-8 shadow-xl backdrop-blur-xl transition-colors duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-dark-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-[2px] text-slate-400 dark:text-slate-500 block mb-1">
                Live Interactive System Architecture
              </span>
              <h2 className="font-editorial text-xl sm:text-2xl text-slate-900 dark:text-slate-100 font-normal">
                How Autonomous GTM Pipelines Execute
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-dark-850 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-dark-700">
              <Terminal className="w-3.5 h-3.5 text-gold-500 dark:text-gold-400" />
              Click stages to inspect telemetry
            </div>
          </div>

          {/* Step Pill Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
            {workflowStages.map((stage) => {
              const Icon = stage.icon;
              const isActive = activeWorkflowStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveWorkflowStage(stage.id)}
                  className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all relative ${
                    isActive
                      ? 'bg-slate-50 dark:bg-dark-850 border-gold-500/60 shadow-[0_0_20px_rgba(245,158,11,0.15)] ring-1 ring-gold-500/30'
                      : 'bg-white dark:bg-dark-950/60 border-slate-200 dark:border-dark-800 hover:border-slate-300 dark:hover:border-dark-700 hover:bg-slate-50 dark:hover:bg-dark-900'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-gold-500 dark:text-gold-400' : 'text-slate-400 dark:text-slate-500'}`} />
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                      STEP {stage.id + 1}
                    </span>
                  </div>
                  <span className={`text-xs font-semibold block mb-0.5 ${isActive ? 'text-slate-900 dark:text-slate-100' : 'text-slate-700 dark:text-slate-300'}`}>
                    {stage.label.split('. ')[1]}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate w-full">
                    {stage.subtext}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Inspector Detail Card */}
          {(() => {
            const current = workflowStages[activeWorkflowStage];
            const CurrentIcon = current.icon;
            return (
              <div className="rounded-xl bg-slate-50/70 dark:bg-dark-950 border border-slate-200 dark:border-dark-800 p-6 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-gold-500/30 flex items-center justify-center text-gold-500 dark:text-gold-400 shrink-0 shadow-sm">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-gold-600 dark:text-gold-400 font-semibold">
                        STAGE {activeWorkflowStage + 1} OF 5
                      </span>
                      <span className="text-slate-400 dark:text-slate-600">·</span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {current.subtext}
                      </span>
                    </div>
                    <h3 className="font-editorial text-lg sm:text-xl text-slate-900 dark:text-slate-100 mb-2">
                      {current.headline}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4 font-sans">
                      {current.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-dark-800/80">
                      <div>
                        <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 block mb-1">
                          Technical Specification:
                        </span>
                        <p className="text-xs text-slate-800 dark:text-slate-300 font-mono">
                          {current.technicalSpec}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase text-gold-600 dark:text-gold-400 block mb-1 font-semibold">
                          Commercial Impact:
                        </span>
                        <p className="text-xs text-slate-800 dark:text-slate-300 font-sans">
                          {current.businessImpact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

      </div>
    </section>
  );
};
