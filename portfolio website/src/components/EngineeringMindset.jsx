import React from 'react';
import { Cog, Wrench, Shield, Compass, Cpu, Layers } from 'lucide-react';

export const EngineeringMindset = () => {
  const engineeringStrengths = [
    {
      title: 'First-Principles Thinking',
      description: 'Breaking operational friction down to core mechanics instead of applying cosmetic AI wrappers.'
    },
    {
      title: 'State Machines & Invariants',
      description: 'Treating business workflows like mechatronic circuits: predictable states, clear transitions, zero lost signals.'
    },
    {
      title: 'Hardware & CAD Rigor',
      description: 'Experience in SolidWorks 3D modeling, mechanical kinematics, and mathematical modeling in MATLAB.'
    },
    {
      title: 'Robotics & Autonomous UAVs',
      description: 'Deep fascination with sensors, avionics, additive manufacturing, and autonomous machine control systems.'
    }
  ];

  return (
    <section id="engineering" className="py-20 bg-dark-950 border-t border-dark-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-900/90 border border-dark-800 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Context */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
                Technical Foundation
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-slate-100 font-normal tracking-tight mb-4">
                The Engineering Side
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mb-4">
                As a <strong className="text-slate-100">Mechatronics Engineering student</strong>, I view digital workflows through the same lens as robotics and physical systems: inputs, sensors, deterministic logic, and fail-safe feedback loops.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                This engineering training ensures that when I build AI automations, they don't break under real-world commercial strain.
              </p>
            </div>

            {/* Right Column: 4 Strengths */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {engineeringStrengths.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-dark-950 border border-dark-800/80 hover:border-dark-700 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-dark-900 border border-dark-700 flex items-center justify-center text-gold-400 mb-3">
                    <Cog className="w-4 h-4" />
                  </div>
                  <h3 className="font-editorial text-lg text-slate-100 mb-1.5 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
