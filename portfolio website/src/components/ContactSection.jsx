import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, MessageSquare } from 'lucide-react';

const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState('AI Product Marketing');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    problem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const email = 'adediwura.ainaafolabi@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const services = [
    'AI Product Marketing',
    'AI Voice Qualification Agent',
    'n8n Lead & CRM Automation',
    'Product Onboarding & Lifecycle Systems',
    'Market Intelligence & Research Pipelines'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`[GTM Inquiry] ${selectedService} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Hi Adediwura,\n\nMy name is ${formData.name} from ${formData.company || 'my company'}.\n\nArea of interest: ${selectedService}\n\nOur GTM bottleneck / goal:\n${formData.problem}\n\nPlease reach me at: ${formData.email}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white dark:bg-dark-950 border-t border-slate-200/80 dark:border-dark-800/80 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Headline & Direct Contact Details (Ken style) */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-slate-400 dark:text-slate-500 block mb-3">
              Get in Touch
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 font-normal tracking-tight mb-4">
              Let's scale your product velocity and clarity.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
              Open to AI Product Marketing Manager roles, GTM automation contracts, and ambitious product launches. If you have an operational or conversion bottleneck worth solving, reach out.
            </p>

            {/* Direct Channels */}
            <div className="space-y-3.5 mb-8">
              {/* Direct Email with Copy Action */}
              <div className="p-4 rounded-xl bg-black border border-white/20 hover:border-gold-400/50 flex items-center justify-between gap-4 transition-all shadow-xl shadow-black/50 group">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-dark-900 border border-white/10 flex items-center justify-center text-gold-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block font-medium">Email Address</span>
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">{email}</span>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3.5 py-1.5 rounded-lg bg-dark-900 hover:bg-dark-850 border border-white/20 hover:border-gold-400/60 text-xs font-mono text-gold-400 transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                      <span className="text-gold-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/adediwura-afolabi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-black border border-white/20 hover:border-gold-400/60 flex items-center justify-between transition-all group shadow-xl shadow-black/50"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-dark-900 border border-white/10 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform shrink-0">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-medium">LinkedIn</span>
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">linkedin.com/in/adediwura-afolabi</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-gold-400 transition-colors" />
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-black border border-white/20 flex items-center gap-3.5 shadow-xl shadow-black/50">
                <div className="w-10 h-10 rounded-lg bg-dark-900 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block font-medium">Location & Timezone</span>
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">Lagos, Nigeria · West Africa Time (WAT / UTC+1)</span>
                </div>
              </div>
            </div>

            {/* Invariant guarantee pill */}
            <div className="p-4 rounded-xl bg-black border border-gold-500/40 shadow-xl shadow-black/60 text-xs text-white font-mono flex items-start sm:items-center gap-3">
              <span className="text-gold-400 text-base shrink-0">⚡</span>
              <span className="leading-relaxed text-slate-200">
                <strong className="text-gold-400 font-bold uppercase tracking-wider">Guaranteed response:</strong> within 24 hours with an actionable systems breakdown.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Scoping Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-black border border-white/20 shadow-2xl shadow-black/90 relative overflow-hidden ring-1 ring-white/10">
              {/* Subtle ambient gold glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/10 blur-[100px] pointer-events-none rounded-full" />

              <h3 className="font-editorial text-2xl sm:text-3xl text-white mb-2 font-medium tracking-tight">
                Scope Your GTM System or AI Launch
              </h3>
              <p className="text-sm text-slate-300 mb-7 font-sans leading-relaxed">
                Select your primary objective and describe the operational or conversion challenge you are solving.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Service Selection Pills */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-200 block mb-3 font-semibold">
                    What GTM system or workflow are you looking to build? <span className="text-gold-400">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {services.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setSelectedService(srv)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                          selectedService === srv
                            ? 'bg-gold-400 text-slate-950 font-bold border-gold-400 shadow-[0_0_15px_rgba(251,191,36,0.35)]'
                            : 'bg-black text-slate-200 border-white/20 hover:border-gold-400/60 hover:text-white'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-200 block mb-2 font-semibold">
                      Your Name <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/25 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-200 block mb-2 font-semibold">
                      Your Email <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/25 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Company / Brand */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-200 block mb-2 font-semibold">
                    Company or Organization <span className="text-slate-500 font-normal font-sans">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Health or GText Homes"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/25 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-sans"
                  />
                </div>

                {/* Problem Description */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-200 block mb-2 font-semibold">
                    Describe the Process or Bottleneck <span className="text-gold-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="e.g. We get 50 inquiries a day through WhatsApp and web forms. Our team takes 6 hours to respond, and we are losing deals outside business hours..."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/25 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all resize-none font-sans leading-relaxed"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gold-400 hover:bg-gold-300 active:scale-[0.99] text-slate-950 font-bold text-sm sm:text-base tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(251,191,36,0.45)] flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-gold-500/20"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
