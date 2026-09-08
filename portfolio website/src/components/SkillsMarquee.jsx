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

export const SkillsMarquee = () => {
  // Duplicating the array to create a seamless infinite track
  const marqueeItems = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <div className="py-6 sm:py-7 border-y border-slate-200/80 dark:border-dark-800/80 overflow-hidden bg-slate-50/70 dark:bg-dark-900/50 relative backdrop-blur-sm select-none transition-colors duration-300">
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white dark:from-dark-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white dark:from-dark-950 to-transparent z-10" />

      {/* Right-scrolling infinite track */}
      <div className="flex whitespace-nowrap animate-marquee-right">
        {marqueeItems.map((skill, index) => (
          <span key={index} className="inline-flex items-center">
            <span className="text-[12px] sm:text-[13px] font-mono font-semibold tracking-[2px] uppercase text-slate-500 dark:text-slate-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors duration-200 cursor-default">
              {skill}
            </span>
            <span className="mx-5 sm:mx-7 inline-flex items-center justify-center text-gold-500/60 dark:text-gold-400/50 flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                <path d="M7 0L8.47 5.18L13.66 3.73L9.9 7L13.66 10.27L8.47 8.82L7 14L5.53 8.82L0.34 10.27L4.1 7L0.34 3.73L5.53 5.18L7 0Z" fill="currentColor" />
              </svg>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
