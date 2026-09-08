import React from 'react';

const SKILLS = [
  'n8n Orchestration',
  'ElevenLabs Voice AI',
  'Twilio Telephony',
  'OpenAI & Claude LLMs',
  'HubSpot CRM API',
  'GTM Positioning',
  'Product Positioning',
  'Product Market Fit'
];

export const SkillsMarquee = ({ className = '' }) => {
  // Duplicating the skills array 6 times (48 items)
  // translateX(0) -> translateX(-50%) shifts by exactly half (24 items = 3 full sets)
  // Loops with 100% mathematical seamlessness matching oyedokunken.vercel.app
  const marqueeItems = [
    ...SKILLS,
    ...SKILLS,
    ...SKILLS,
    ...SKILLS,
    ...SKILLS,
    ...SKILLS
  ];

  return (
    <div className={`py-5 sm:py-6 border-y border-slate-200/80 dark:border-white/[0.08] overflow-hidden bg-slate-50/70 dark:bg-dark-900/50 relative select-none transition-colors duration-300 ${className}`}>
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-slate-100/90 dark:from-dark-900/90 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-slate-100/90 dark:from-dark-900/90 to-transparent z-10" />

      {/* Seamless infinite marquee ticker matching oyedokunken.vercel.app */}
      <div className="flex whitespace-nowrap animate-marquee will-change-transform">
        {marqueeItems.map((skill, index) => (
          <span key={index} className="inline-flex items-center">
            <span className="text-[13px] font-semibold tracking-[2px] uppercase text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-default select-none">
              {skill}
            </span>
            <span className="mx-5 inline-flex items-center justify-center text-slate-400/60 dark:text-slate-500/60 flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                <path d="M7 0L8.47 5.18L13.66 3.73L9.9 7L13.66 10.27L8.47 8.82L7 14L5.53 8.82L0.34 10.27L4.1 7L0.34 3.73L5.53 5.18L7 0Z" fill="currentColor" />
              </svg>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
