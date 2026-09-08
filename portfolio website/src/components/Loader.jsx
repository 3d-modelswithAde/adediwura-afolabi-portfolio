import React, { useState, useEffect } from 'react';

export const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const onCompleteRef = React.useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const startTime = Date.now();
    const duration = 900; // Snappy smooth load

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setIsFading(true);
        setTimeout(() => {
          if (onCompleteRef.current) onCompleteRef.current();
        }, 400);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Circumference of r=52 circle = 2 * PI * 52 ≈ 326.72
  const circumference = 326.72;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white dark:bg-dark-950 flex flex-col items-center justify-center gap-6 transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        {/* Animated Circular Progress Gauge (Ken Oyedokun Signature) */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" className="transform -rotate-90">
            {/* Background Track */}
            <circle
              cx="70"
              cy="70"
              r="52"
              className="stroke-slate-200 dark:stroke-dark-800"
              strokeWidth="2"
              fill="none"
            />
            {/* Progress Bar (Gold / Amber Palette) */}
            <circle
              cx="70"
              cy="70"
              r="52"
              className="stroke-amber-500 dark:stroke-gold-400 transition-[stroke-dashoffset] duration-100 ease-out"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>

          {/* Center Brand Monogram */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-gold-500/30 flex items-center justify-center text-slate-900 dark:text-slate-100 font-editorial font-bold text-lg shadow-sm">
              AA
            </div>
          </div>
        </div>

        {/* Tabular Percentage Counter */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
            {progress}
            <span className="text-amber-500 dark:text-gold-400 text-lg font-normal ml-0.5">%</span>
          </span>
          <span className="text-[10px] font-mono tracking-[3px] uppercase text-slate-400 dark:text-slate-500">
            Initializing GTM Systems
          </span>
        </div>
      </div>
    </div>
  );
};
