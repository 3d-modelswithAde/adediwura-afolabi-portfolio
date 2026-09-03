import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Cpu, Bot, Workflow, Sparkles, Layers, CheckCircle2, MessageSquare, Database, ArrowUpRight } from 'lucide-react';

export const Hero = () => {
  const [activeWorkflowStage, setActiveWorkflowStage] = useState(1);

  const workflowStages = [
    {
      id: 0,
      label: '01. Input',
      subtext: 'Inbound Ingestion',
      icon: MessageSquare,
      headline: 'Multi-Channel Inbound Ingestion',
      description: 'Customer communications arrive from customer forms, incoming phone calls, WhatsApp messages, or support emails.',
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
      headline: 'Real-Time Voice, Email & Slack Dispatch',
      description: 'The system triggers instantaneous multi-channel actions: customer quote delivery, Slack Block Kit advisor alerts, and master ledger logging.',
      technicalSpec: 'ElevenLabs Voice Synthesis · Gmail API · Slack Block Kit · Google Sheets Ledger',
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

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Subtle architectural ambient glows - NO slop, strict restrained luxury */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Positioning Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900 border border-gold-500/30 mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs font-mono text-gold-300 tracking-wider uppercase">
              Engineering Mindset · Creative Execution · AI-Powered Thinking
            </span>
          </div>

          {/* Primary Headline in Lora Serif */}
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-100 leading-[1.15] mb-6">
            Building AI-Powered Products, <br className="hidden sm:inline" />
            <span className="text-gold-400 italic font-medium">Automations & Voice Experiences.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            I build practical AI solutions that help businesses automate workflows, improve customer experiences, and turn operational friction into intelligent digital products.
          </p>

          {/* Core Philosophy Badge */}
          <div className="p-4 rounded-xl bg-dark-900/90 border border-dark-700/80 max-w-xl mx-auto mb-10 shadow-lg">
            <p className="text-sm text-slate-300 font-mono flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400 inline-block animate-pulse"></span>
              <strong className="text-slate-100 font-sans">Core Invariant:</strong> "I don't just use AI tools. I build practical, deterministic systems."
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gold-500 text-dark-950 font-semibold text-base hover:bg-gold-400 transition-all hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] active:scale-95"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-200 border border-dark-700 hover:border-slate-500 font-medium text-base transition-all active:scale-95"
            >
              Let's Work Together
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* ── Interactive 5-Stage AI Workflow Architecture ── */}
        <div className="mt-6">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
              Interactive System Demonstration
            </span>
            <h3 className="font-editorial text-2xl text-slate-100 font-normal">
              How Practical AI Architecture Works
            </h3>
            <p className="text-sm text-slate-400 max-w-lg mx-auto mt-1">
              Click any stage of the pipeline below to inspect the technical mechanisms and business invariants.
            </p>
          </div>

          {/* Pipeline Stage Bar */}
          <div className="bg-dark-900/90 rounded-2xl border border-dark-700 p-3 sm:p-4 shadow-2xl backdrop-blur-sm max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {workflowStages.map((stage) => {
                const IconComponent = stage.icon;
                const isActive = activeWorkflowStage === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveWorkflowStage(stage.id)}
                    className={`p-3 sm:p-4 rounded-xl text-left transition-all duration-200 border relative ${
                      isActive
                        ? 'bg-dark-800 border-gold-500/80 shadow-[0_0_20px_rgba(245,158,11,0.15)] ring-1 ring-gold-500/50'
                        : 'bg-dark-950/60 border-dark-800 hover:border-dark-700 hover:bg-dark-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-semibold tracking-wider uppercase ${
                        isActive ? 'text-gold-400' : 'text-slate-500'
                      }`}>
                        {stage.label}
                      </span>
                      <IconComponent className={`w-4 h-4 ${
                        isActive ? 'text-gold-400' : 'text-slate-500'
                      }`} />
                    </div>
                    <div className="text-xs font-semibold text-slate-200 truncate">
                      {stage.subtext}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Inspector Detail Card */}
            <div className="mt-4 p-5 sm:p-6 rounded-xl bg-dark-950 border border-dark-800 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-dark-800">
                <div>
                  <span className="text-xs font-mono text-gold-400 uppercase tracking-wider block mb-1">
                    Inspecting Phase {workflowStages[activeWorkflowStage].label}
                  </span>
                  <h4 className="font-editorial text-xl sm:text-2xl text-slate-100 font-medium">
                    {workflowStages[activeWorkflowStage].headline}
                  </h4>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-dark-900 border border-dark-700 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-gold-400" />
                  <span>Step {activeWorkflowStage + 1} of 5 in Execution Graph</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
                <div className="md:col-span-1">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    The Logic
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {workflowStages[activeWorkflowStage].description}
                  </p>
                </div>

                <div className="md:col-span-1">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    Technical Specifications
                  </span>
                  <div className="p-2.5 rounded-lg bg-dark-900 border border-dark-800 text-xs font-mono text-gold-300">
                    {workflowStages[activeWorkflowStage].technicalSpec}
                  </div>
                </div>

                <div className="md:col-span-1">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    Business Value Created
                  </span>
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs text-emerald-300">
                    ✓ {workflowStages[activeWorkflowStage].businessImpact}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
