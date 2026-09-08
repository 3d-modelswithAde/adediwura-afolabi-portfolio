import React from 'react';
import { techStack } from '../data/techStack';

// High-fidelity, zero-dependency SVG logos for all tools
const ToolIcon = ({ icon, name }) => {
  switch (icon) {
    case 'openai':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-slate-800 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-200">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.487a4.47 4.47 0 0 1 2.33-1.97v5.676a.79.79 0 0 0 .392.68l5.813 3.354-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.487zm16.597 3.855l-5.833-3.387L15.124 7.79a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.666zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.797V7.465a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.65a4.5 4.5 0 0 1 7.37-3.453l-.142.08L8.7 6.035a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.607 1.5-2.602-1.5z" />
        </svg>
      );
    case 'antigravity':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform duration-200">
          <defs>
            <linearGradient id="agGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <path d="M12 2L2 19.5h20L12 2zm0 4.5l6.5 11h-13L12 6.5z" fill="url(#agGrad)" />
          <circle cx="12" cy="14" r="2.5" fill="#f59e0b" />
        </svg>
      );
    case 'generativeai':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#D97706] dark:fill-[#F59E0B] group-hover:scale-110 transition-transform duration-200">
          <path d="M13.827 2.146l3.52 19.708h-3.125l-.83-4.786H8.227l-.82 4.786H4.292L7.79 2.146h6.037zm-2.07 12.378L10.7 7.73h-.098l-1.047 6.794h2.202z"/>
        </svg>
      );
    case 'aiagents':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform duration-200">
          <circle cx="12" cy="12" r="3" />
          <circle cx="4" cy="6" r="2" />
          <circle cx="20" cy="6" r="2" />
          <circle cx="4" cy="18" r="2" />
          <circle cx="20" cy="18" r="2" />
          <path d="M6 7l4 3.5M18 7l-4 3.5M6 17l4-3.5M18 17l-4-3.5" />
        </svg>
      );
    case 'prompt':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case 'jsonschema':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform duration-200">
          <path d="M8 3H7a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h1" />
          <path d="M16 3h1a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-1" />
          <path d="M10 12h4" />
        </svg>
      );
    case 'n8n':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 group-hover:scale-110 transition-transform duration-200">
          <path d="M3 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" fill="#EA4B71" />
          <path d="M15 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" fill="#EA4B71" />
          <path d="M9 12h6" stroke="#EA4B71" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="5" r="2.5" fill="#FF6D5A" />
          <circle cx="12" cy="19" r="2.5" fill="#FF6D5A" />
          <path d="M12 7.5v9" stroke="#FF6D5A" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      );
    case 'webhooks':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-sky-500 group-hover:scale-110 transition-transform duration-200">
          <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c0-2.21 1.79-4 4-4h1" />
          <path d="M6 7.02h5.99c1.1 0 1.95-.94 2.48-1.9A4 4 0 0 1 22 7c0 2.21-1.79 4-4 4h-1" />
          <polyline points="15 4 18 7 15 10" />
          <polyline points="9 20 6 17 9 14" />
        </svg>
      );
    case 'cron':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-violet-500 group-hover:scale-110 transition-transform duration-200">
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15 15" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="21" y1="12" x2="23" y2="12" />
        </svg>
      );
    case 'retries':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform duration-200">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l6.73-5.19" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'elevenlabs':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-200">
          <path d="M6 3h3.5v18H6zM14.5 3H18v18h-3.5z" />
        </svg>
      );
    case 'twilio':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 group-hover:scale-110 transition-transform duration-200">
          <circle cx="12" cy="12" r="10" fill="#F22F46" />
          <circle cx="9" cy="9" r="1.8" fill="white" />
          <circle cx="15" cy="9" r="1.8" fill="white" />
          <circle cx="9" cy="15" r="1.8" fill="white" />
          <circle cx="15" cy="15" r="1.8" fill="white" />
        </svg>
      );
    case 'convodesign':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-500 group-hover:scale-110 transition-transform duration-200">
          <path d="M2 10v4M6 6v12M10 3v18M14 8v8M18 5v14M22 10v4" />
        </svg>
      );
    case 'hubspot':
      return (
        <svg viewBox="0 0 24 24" fill="#FF7A59" className="w-6 h-6 group-hover:scale-110 transition-transform duration-200">
          <path d="M18.8 7.3a2.7 2.7 0 0 0-2.4-1.5c-.3 0-.6.1-.9.2V3.7a1.7 1.7 0 1 0-1.8 0v2.3a2.7 2.7 0 0 0-1.9 2.5c0 .3.1.6.2.9L8.4 11.7a2.7 2.7 0 0 0-1.4-.4 2.7 2.7 0 1 0 2.7 2.7c0-.3 0-.5-.1-.7l3.6-2.3c.4.3.9.5 1.4.5a2.7 2.7 0 0 0 2.7-2.7c0-.2 0-.4-.1-.6l2.1-1.3c.3.2.6.3 1 .3a1.7 1.7 0 1 0-1.6-1.9z" />
        </svg>
      );
    case 'sheets':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform duration-200">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" fill="#0F9D58" />
          <path d="M14 2v6h6" fill="#0B8043" />
          <rect x="7" y="11" width="10" height="8" rx="0.5" fill="white" fillOpacity="0.9" />
          <line x1="7" y1="13.5" x2="17" y2="13.5" stroke="#0F9D58" strokeWidth="1" />
          <line x1="7" y1="16" x2="17" y2="16" stroke="#0F9D58" strokeWidth="1" />
          <line x1="10.5" y1="11" x2="10.5" y2="19" stroke="#0F9D58" strokeWidth="1" />
          <line x1="13.5" y1="11" x2="13.5" y2="19" stroke="#0F9D58" strokeWidth="1" />
        </svg>
      );
    case 'workspace':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform duration-200">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
      );
    case 'slack':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform duration-200">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
          <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
          <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
          <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
        </svg>
      );
    case 'canva':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform duration-200">
          <circle cx="12" cy="12" r="11" fill="#00C4CC" />
          <path d="M14.5 8.5c-.8-.5-1.9-.7-3.1-.4-2 .5-3.4 2.4-3.4 4.5 0 2.2 1.5 3.9 3.7 3.9 1.4 0 2.5-.5 3.2-1.3l-1-1.1c-.6.6-1.4.9-2.2.9-1.3 0-2.3-.9-2.3-2.3 0-1.4.9-2.7 2.2-3 1-.2 1.9.1 2.4.6l.5-.9z" fill="white" />
        </svg>
      );
    case 'capcut':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-200">
          <path d="M3.5 6.5L12 12 3.5 17.5V6.5zm17 0L12 12l8.5 5.5V6.5z" />
        </svg>
      );
    case 'meta':
      return (
        <svg viewBox="0 0 24 24" fill="#0668E1" className="w-6 h-6 group-hover:scale-110 transition-transform duration-200">
          <path d="M16.96 4.07c-2.07 0-3.9 1.13-4.96 2.82C10.94 5.2 9.11 4.07 7.04 4.07 3.15 4.07 0 7.22 0 11.11c0 5.4 6.77 10.42 11.45 11.23.36.06.74.06 1.1 0 4.68-.81 11.45-5.83 11.45-11.23 0-3.89-3.15-7.04-7.04-7.04zm-9.92 9.6c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6c1.67 0 3.08 1.13 3.49 2.68.04.14.07.28.08.43v.98c-.01.15-.04.29-.08.43-.41 1.55-1.82 2.68-3.49 2.68zm9.92 0c-1.67 0-3.08-1.13-3.49-2.68-.04-.14-.07-.28-.08-.43v-.98c.01-.15.04-.29.08-.43.41-1.55 1.82-2.68 3.49-2.68 2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-200">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.68a6.34 6.34 0 0 0 10.82 4.48 6.27 6.27 0 0 0 1.86-4.48V8.6a8.28 8.28 0 0 0 4.81 1.54V6.69z"/>
        </svg>
      );
    default:
      return (
        <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center text-[10px] font-bold">
          {name.charAt(0)}
        </div>
      );
  }
};

export const TechStackGrid = () => {
  return (
    <section id="stack" className="py-24 lg:py-32 bg-slate-50/60 dark:bg-dark-950 border-b border-slate-200/80 dark:border-dark-800/80 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header - Exact Format as oyedokunken.vercel.app reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-slate-400 dark:text-slate-500 block mb-3">
              Stack
            </span>
            <h2 className="font-editorial text-4xl lg:text-5xl text-slate-900 dark:text-slate-100 font-normal tracking-tight">
              Tools of the trade.
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm sm:max-w-[280px] sm:text-right">
            Proficient across workflow orchestration, conversational telephony, AI intelligence, and engineering analysis.
          </p>
        </div>

        {/* Minimalist 5-Column Grid with Tool Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
          {techStack.map((category, idx) => (
            <div key={idx} className="space-y-2">
              {/* Category Heading & Subtitle */}
              <div className="px-2 mb-3">
                <p className="text-[10px] tracking-[2px] uppercase text-slate-500 dark:text-slate-400 font-mono font-semibold truncate">
                  {category.category}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5 line-clamp-2">
                  {category.description}
                </p>
              </div>

              {/* Minimalist Tool Cards with Logos */}
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  title={`${skill.name} — ${skill.role}`}
                  className="rounded-xl p-3 flex flex-col items-center gap-2 group cursor-default bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] hover:border-gold-500/40 dark:hover:border-gold-400/30 hover:bg-slate-50/80 dark:hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                >
                  <div className="w-8 h-8 relative flex items-center justify-center">
                    <ToolIcon icon={skill.icon} name={skill.name} />
                  </div>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 font-medium text-center leading-tight transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
