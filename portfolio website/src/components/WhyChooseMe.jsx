import React from 'react';
import { Layers, ShieldCheck, HeartHandshake, CheckCircle2, Gauge, Scale } from 'lucide-react';

export const WhyChooseMe = () => {
  const reasons = [
    {
      number: '01',
      title: 'Systems First',
      icon: Layers,
      description: 'I treat business operations like engineering state machines. Every input is typed, every workflow is idempotent, and failure states are addressed upfront rather than patched in panic.'
    },
    {
      number: '02',
      title: 'Ships to Production',
      icon: Gauge,
      description: 'I don’t leave you with fragmented Zapier steps or theoretical Python scripts. I deliver fully orchestrated, active production workflows running on automated cron and webhook schedules.'
    },
    {
      number: '03',
      title: 'Fail-Safe by Design',
      icon: ShieldCheck,
      description: 'The core invariant: customer records are saved in your CRM before AI reasoning executes. If an LLM or third-party service times out, your lead data is never lost.'
    },
    {
      number: '04',
      title: 'Frontline Conversion Empathy',
      icon: HeartHandshake,
      description: 'Because I managed social customer acquisition and generated hundreds of paid orders, I design systems around real human buying behavior, not abstract software logic.'
    },
    {
      number: '05',
      title: 'Full Ownership',
      icon: CheckCircle2,
      description: 'From initial workflow mapping and schema design to telephony SIP integration, automated regression testing, and team training—I own the entire delivery lifecycle.'
    },
    {
      number: '06',
      title: 'Zero Ambiguity',
      icon: Scale,
      description: 'Deterministic pricing, strict JSON schemas, and multi-column audit trails ensure zero hallucinations, zero pricing errors, and full compliance transparency.'
    }
  ];

  return (
    <section id="why-me" className="py-24 lg:py-32 bg-slate-50/50 dark:bg-dark-950 relative border-b border-slate-200/80 dark:border-dark-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Eyebrow & Title (Ken signature layout) */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[2.5px] text-slate-400 dark:text-slate-500 block mb-3">
            Why Work With Me
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 font-normal tracking-tight mb-4">
            Why they keep coming back.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Not empty promises. Patterns forged across multiple real-world deployments, commercial acquisitions, and production systems.
          </p>
        </div>

        {/* 6-Grid Feature Cards (Ken signature numbered layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="p-7 rounded-2xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-dark-800/90 hover:border-gold-500/30 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-slate-400 dark:text-slate-600 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-850 border border-slate-200 dark:border-dark-700 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-editorial text-xl text-slate-900 dark:text-slate-100 mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors font-medium">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
