import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  ShieldCheck, 
  AlertOctagon, 
  CheckCircle2, 
  PhoneCall, 
  Terminal, 
  Cpu, 
  ArrowRight,
  Sparkles,
  MessageSquare
} from 'lucide-react';

export const InteractiveSimulator = () => {
  const [selectedScenario, setSelectedScenario] = useState('quote');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const scenarios = {
    quote: {
      title: 'Auto Intake: Standard Quote',
      client: 'Marcus Vance Automotive',
      description: 'Standard repair inquiry requesting brake service for a family SUV.',
      rawInput: 'Customer: "Hi, I drive a 2022 Toyota RAV4. My front brakes are squealing and grinding. How much will it cost to replace the front pads, and can I book this Friday?"',
      steps: [
        {
          name: 'HubSpot Ticket Created',
          type: 'crm',
          status: 'success',
          log: 'GENERATED: inq_7a4f91e (Internal UUID) · Customer Tracking: TRK-20260903-4819. Ticket created in HubSpot before AI execution.'
        },
        {
          name: 'Sensitivity Scan',
          type: 'security',
          status: 'success',
          log: 'PASSED: 0 quarantine triggers detected (No chargebacks, legal threats, or dispute keywords).'
        },
        {
          name: 'AI Extraction',
          type: 'ai',
          status: 'success',
          log: 'EXTRACTED JSON: { "year": 2022, "make": "Toyota", "model": "RAV4", "service_code": "BRAKE_FRONT_PADS", "tier": 2 }'
        },
        {
          name: 'Deterministic Pricing',
          type: 'pricing',
          status: 'success',
          log: 'TABLE LOOKUP: Tier 2 Compact SUV × BRAKE_FRONT_PADS = $280.00 (Zero LLM hallucination; exact rate matrix).'
        },
        {
          name: 'Dispatch & Ledger',
          type: 'dispatch',
          status: 'success',
          log: 'DISPATCHED: Automated email quote sent to customer. Slack alert posted to #service-advisors. Row appended to 25-col Google Sheets audit log.'
        }
      ]
    },
    quarantine: {
      title: 'Auto Intake: Dispute Quarantine',
      client: 'Marcus Vance Automotive',
      description: 'Customer alleging damage and threatening legal action. Demonstrates fail-safe quarantine.',
      rawInput: 'Customer: "Your technician stripped my oil drain plug last Thursday and now my engine is leaking oil. If you don\'t refund my entire service and pay for repairs, my attorney is filing a complaint tomorrow morning."',
      steps: [
        {
          name: 'HubSpot Ticket Created',
          type: 'crm',
          status: 'success',
          log: 'GENERATED: inq_d812c04 · Tracking: TRK-20260903-8821. Record safely anchored in CRM.'
        },
        {
          name: 'Sensitivity Scan',
          type: 'security',
          status: 'warning',
          log: 'TRIGGERED: Flags detected: ["attorney", "refund", "complaint", "damaged"]. Sensitivity level: CRITICAL.'
        },
        {
          name: 'Auto-Reply Suppression',
          type: 'fail-safe',
          status: 'warning',
          log: 'ENFORCED: Automated customer email response strictly blocked to prevent accidental liability admission.'
        },
        {
          name: 'Emergency Slack Alert',
          type: 'dispatch',
          status: 'warning',
          log: 'ESCALATED: Inquiry routed directly to #manual-review Slack channel. Urgent SMS alert triggered for General Manager.'
        },
        {
          name: 'Audit Trail Locked',
          type: 'audit',
          status: 'success',
          log: 'LOGGED: Flagged row written to Google Sheets with status: "AWAITING_LEGAL_EXECUTIVE_REVIEW".'
        }
      ]
    },
    voice: {
      title: 'Voice AI: Luxury Real Estate Inbound',
      client: 'GText Homes Luxury Portfolio',
      description: 'Late-night inquiry (10:45 PM WAT) from a diaspora buyer looking for high-ticket property.',
      rawInput: 'Caller: "Hello, I am calling from London. I am interested in your Jasper Smart City development. Looking for a 4-bedroom detached duplex, budget is roughly 180 to 200 million Naira. When can we do a virtual walkthrough?"',
      steps: [
        {
          name: 'Twilio SIP Ingestion',
          type: 'telephony',
          status: 'success',
          log: 'CONNECTED: Caller +44 7911 *** 42. Sub-second audio bridge established via Twilio SIP trunk.'
        },
        {
          name: 'ElevenLabs Voice Agent',
          type: 'voice',
          status: 'success',
          log: 'SYNTHESIS: Low-latency natural voice conversational agent engages caller with estate context.'
        },
        {
          name: 'Real-Time Intent Qualification',
          type: 'ai',
          status: 'success',
          log: 'PARSED: Unit: 4-Bedroom Duplex · Location: Jasper Smart City · Budget Ceiling: ₦200,000,000 · Timeline: Immediate Walkthrough.'
        },
        {
          name: 'Lead Categorization',
          type: 'scoring',
          status: 'success',
          log: 'DISPOSITION: Category "TIER-1 HIGH VALUE PROSPECT". Recorded call audio & timestamped transcript.'
        },
        {
          name: 'Instant Advisor Notification',
          type: 'dispatch',
          status: 'success',
          log: 'ALERT DISPATCHED: Priority Telegram alert pushed to Senior Luxury Advisor with 1-click VIP callback link.'
        }
      ]
    }
  };

  const activeData = scenarios[selectedScenario];

  const runSimulation = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step <= activeData.steps.length) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 850);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStepIndex(0);
  };

  return (
    <section id="simulator" className="py-24 bg-dark-950 relative border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            Interactive System Proof
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-100 font-normal tracking-tight mb-4">
            Test My Automation Logic
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Don't just take my word for it. Run real test scenarios through my deterministic pipeline logic and watch how the systems respond.
          </p>
        </div>

        {/* Simulator Frame */}
        <div className="max-w-5xl mx-auto bg-dark-900 rounded-3xl border border-dark-700 shadow-2xl overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="bg-dark-950/80 px-6 py-4 border-b border-dark-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-gold-400" />
                runtime_simulator.sh — Deterministic Execution Engine
              </span>
            </div>

            {/* Scenario Switches */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(scenarios).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedScenario(key);
                    resetSimulation();
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedScenario === key
                      ? 'bg-gold-500 text-dark-950 font-bold'
                      : 'bg-dark-850 text-slate-300 hover:bg-dark-800 border border-dark-700'
                  }`}
                >
                  {scenarios[key].title.split(':')[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Main Simulator Content Area */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Input Preview Box */}
            <div className="p-5 rounded-xl bg-dark-950 border border-dark-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
                  Inbound Customer Payload ({activeData.client})
                </span>
                <span className="text-[11px] font-mono text-slate-500">Raw Input Stream</span>
              </div>
              <p className="text-sm text-slate-200 font-mono leading-relaxed bg-dark-900/70 p-3.5 rounded-lg border border-dark-800/80">
                {activeData.rawInput}
              </p>
            </div>

            {/* Run Button & Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  isRunning
                    ? 'bg-dark-800 text-slate-500 cursor-not-allowed border border-dark-700'
                    : 'bg-gold-500 text-dark-950 hover:bg-gold-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] active:scale-95'
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
                {isRunning ? 'Processing Pipeline...' : 'Run Pipeline Execution'}
              </button>

              <button
                onClick={resetSimulation}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-300 border border-dark-700 text-sm font-medium transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>

            {/* Interactive Step Execution Log */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Execution Steps ({currentStepIndex}/{activeData.steps.length} completed)
              </span>

              <div className="space-y-2.5">
                {activeData.steps.map((st, idx) => {
                  const isVisible = currentStepIndex > idx;
                  const isCurrentlyExecuting = currentStepIndex === idx && isRunning;

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-all duration-300 font-mono text-xs ${
                        isVisible
                          ? st.status === 'warning'
                            ? 'bg-rose-950/20 border-rose-500/30 text-rose-200'
                            : 'bg-dark-950 border-dark-700 text-slate-300'
                          : isCurrentlyExecuting
                          ? 'bg-gold-950/20 border-gold-500/40 text-gold-300 animate-pulse'
                          : 'bg-dark-950/40 border-dark-800/40 text-slate-600 opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2 font-semibold">
                          {isVisible ? (
                            st.status === 'warning' ? (
                              <AlertOctagon className="w-4 h-4 text-rose-400" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            )
                          ) : (
                            <span className="w-4 h-4 rounded-full border border-slate-700 inline-block"></span>
                          )}
                          <span className={isVisible ? 'text-slate-100' : 'text-slate-500'}>
                            Step 0{idx + 1}: {st.name}
                          </span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-dark-900 border border-dark-800 uppercase tracking-wider text-slate-400">
                          {st.type}
                        </span>
                      </div>

                      {isVisible && (
                        <p className="pl-6 text-[11px] leading-relaxed text-slate-300 font-sans">
                          {st.log}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
