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
      headline: 'Multi-Channel Inbound Ingestion',
      description: 'Customer communications arrive via web lead forms, inbound telephony, WhatsApp messages, or support emails.',
      technicalSpec: 'Twilio SIP / Webhook listener · REST API endpoint · Idempotency UUID generation',
      businessImpact: 'Zero lost inquiries, no manual copying across inboxes, sub-second capture.'
    },
    {
      id: 1,
      label: '02. AI Reasoning',
      subtext: 'Extraction & Safety',
      icon: Bot,
      headline: 'Structured AI Extraction & Sensitivity Quarantine',
      description: 'LLMs extract unstructured inquiry details into strict JSON schemas while deterministic safety filters flag chargeback or legal risks.',
      technicalSpec: 'OpenAI / Claude JSON Mode · Strict System Prompts · Regex Sensitivity Filters',
      businessImpact: 'Zero-hallucination structured data; high-risk inquiries quarantined to human review.'
    },
    {
      id: 2,
      label: '03. Automation',
      subtext: 'Deterministic Logic',
      icon: Workflow,
      headline: 'n8n Pipeline & CRM Fail-Safe Invariants',
      description: 'The CRM Ticket is generated first before any downstream actions to guarantee no lead loss. Multi-branch routing moves inquiries seamlessly.',
      technicalSpec: 'n8n Orchestration · HubSpot CRM API · Dual-ID tracking (inq_<uuid> + TRK-XXXX)',
      businessImpact: '100% auditability; inquiries never get dropped even if third-party tools fail.'
    },
    {
      id: 3,
      label: '04. Action',
      subtext: 'Multi-Channel Dispatch',
      icon: Cpu,
      headline: 'Real-Time Voice, Email & Telegram Dispatch',
      description: 'The system triggers instantaneous multi-channel actions: customer quote delivery, sales rep Telegram alerts, and master ledger logging.',
      technicalSpec: 'ElevenLabs Voice Synthesis · Twilio Call Dispatch · Telegram Bot API · Google Sheets Ledger',
      businessImpact: 'Triage turnaround reduced from 4 hours to under 45 seconds.'
    },
    {
      id: 4,
      label: '05. Result',
      subtext: 'Business Revenue',
      icon: CheckCircle2,
      headline: 'Measurable Commercial Outcomes',
      description: 'Higher lead conversion, faster response times, and hours of repetitive manual administrative friction completely eliminated.',
      technicalSpec: 'Real-Time Telemetry · Conversion Tracking · 25-Column Audit Trails',
      businessImpact: 'Closed deals, protected customer goodwill, and scalable operations.'
    }
  ];

  const marqueeTechnologies = [
    'n8n Orchestration',
    'ElevenLabs Voice AI',
    'Twilio Telephony',
    'OpenAI & Claude LLMs',
    'HubSpot CRM API',
    'Python',
    'Google Workspace API',
    'Telegram Bot API',
    'React 19',
    'Tailwind CSS',
    'SolidWorks CAD',
    'MATLAB',
    'Docker & Linux',
    'Deterministic State Machines'
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Availability Status Badge (Ken style) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900 border border-emerald-500/30 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-emerald-400 tracking-wider">
              Available for AI Systems, Automation & Voice Engineering
            </span>
          </div>

          {/* Large Two-Tone Headline (Ken style) */}
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-slate-100 leading-[1.08] mb-6">
            Engineering systems. <br />
            <span className="text-slate-400 italic font-medium">Automating at scale.</span>
          </h1>

          {/* Bio / Positioning Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            AI Product Builder & Automation Developer. Mechatronics-trained, systems-minded, conversion-focused. Turning operational friction into autonomous, zero-hallucination pipelines.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-100 text-dark-950 font-semibold text-base hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
            >
              View Systems
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-dark-900/80 text-slate-200 border border-dark-700 font-semibold text-base hover:bg-dark-850 hover:text-gold-400 hover:border-gold-500/30 transition-all active:scale-95"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Metric Counter Tickers (Ken signature layout) */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-16 py-6 px-4 rounded-2xl bg-dark-900/60 border border-dark-800/80 backdrop-blur-sm">
            <div className="text-center">
              <div className="font-editorial text-3xl sm:text-4xl font-semibold text-slate-100 mb-1">
                10<span className="text-gold-400">+</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-sans">
                Systems Shipped
              </div>
            </div>
            <div className="text-center border-x border-dark-800">
              <div className="font-editorial text-3xl sm:text-4xl font-semibold text-slate-100 mb-1">
                250<span className="text-emerald-400">+</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-sans">
                Commercial Orders
              </div>
            </div>
            <div className="text-center">
              <div className="font-editorial text-3xl sm:text-4xl font-semibold text-slate-100 mb-1">
                99.9<span className="text-gold-400">%</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-sans">
                Workflow Uptime
              </div>
            </div>
          </div>

        </div>

        {/* Infinite Tech Marquee Ribbon (Ken signature ticker) */}
        <div className="mb-20 overflow-hidden relative py-4 border-y border-dark-800/80 bg-dark-900/40">
          <div className="flex gap-8 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
            {[...marqueeTechnologies, ...marqueeTechnologies].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60"></span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive 5-Stage System Flow Inspector */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-dark-900/90 border border-dark-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-dark-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                Live Interactive System Architecture
              </span>
              <h2 className="font-editorial text-xl sm:text-2xl text-slate-100 font-normal">
                How My Autonomous Workflows Execute
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-dark-850 px-3 py-1.5 rounded-lg border border-dark-700">
              <Terminal className="w-3.5 h-3.5 text-gold-400" />
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
                      ? 'bg-dark-850 border-gold-500/60 shadow-[0_0_20px_rgba(245,158,11,0.15)] ring-1 ring-gold-500/30'
                      : 'bg-dark-950/60 border-dark-800 hover:border-dark-700 hover:bg-dark-900'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-slate-500'}`} />
                    <span className="text-[10px] font-mono text-slate-500">
                      STEP {stage.id + 1}
                    </span>
                  </div>
                  <span className={`text-xs font-semibold block mb-0.5 ${isActive ? 'text-slate-100' : 'text-slate-300'}`}>
                    {stage.label.split('. ')[1]}
                  </span>
                  <span className="text-[10px] text-slate-400 truncate w-full">
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
              <div className="rounded-xl bg-dark-950 border border-dark-800 p-6 transition-all animate-in fade-in duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-gold-400">
                        STAGE {activeWorkflowStage + 1} OF 5
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-xs font-mono text-slate-400">
                        {current.subtext}
                      </span>
                    </div>
                    <h3 className="font-editorial text-lg sm:text-xl text-slate-100 mb-2">
                      {current.headline}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {current.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-dark-800/80">
                      <div>
                        <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                          Technical Specification:
                        </span>
                        <p className="text-xs text-slate-300 font-mono">
                          {current.technicalSpec}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase text-emerald-400 block mb-1">
                          Commercial Impact:
                        </span>
                        <p className="text-xs text-slate-300">
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
