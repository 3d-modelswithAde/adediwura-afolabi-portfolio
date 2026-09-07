import React from 'react';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Adediwura revived our inactive social channels and engineered a frictionless ordering funnel that brought in 250+ paid online orders and reached over 2,000 accounts in the first 3 months alone. She understands customer buying psychology down to the second.",
      author: "Ovie's Kitchen",
      role: "Client · Culinary Brand & Delivery",
      metric: "250+ Paid Orders Generated"
    },
    {
      quote: "Managing member records across 4 disconnected spreadsheets was causing constant tracking headaches and missed birthdays. Adediwura built an autonomous deduplication and digest engine that eliminated 100% of manual effort and delivers structured 7:00 PM WAT digests like clockwork.",
      author: "The Visionary Nation",
      role: "Community Leadership & Operations",
      metric: "100% Elimination of Manual Tracking"
    },
    {
      quote: "Her customer persona audit and on-page Instagram SEO overhaul transformed our account from an unsearchable page into a discovery engine, capturing direct purchase orders from qualified buyers searching for pure honey.",
      author: "Flowery Nectar Honey",
      role: "Client · Artisanal FMCG Brand",
      metric: "Direct Purchase Search Discovery"
    }
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-50/50 dark:bg-dark-900/40 border-b border-slate-200/80 dark:border-dark-800/80 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Eyebrow & Title (Ken signature layout) */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[2.5px] text-slate-400 dark:text-slate-500 block mb-3">
            Testimonials
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 font-normal tracking-tight mb-4">
            Words from people I have built with.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real outcomes from commercial engagements, community operations, and production deployments.
          </p>
        </div>

        {/* 3-Card Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white dark:bg-dark-950 border border-slate-200 dark:border-dark-800/90 hover:border-gold-500/30 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <Quote className="w-8 h-8 text-gold-500/30 dark:text-gold-500/40 mb-5" />
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-dark-850">
                <div className="text-xs font-mono font-semibold text-gold-600 dark:text-gold-400 mb-2">
                  ✓ {item.metric}
                </div>
                <div className="font-editorial text-base font-semibold text-slate-900 dark:text-slate-100">
                  {item.author}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
