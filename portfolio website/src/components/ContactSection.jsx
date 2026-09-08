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
            <div className="space-y-3 mb-10">
              {/* Direct Email with Copy Action */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-dark-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white dark:bg-dark-950 border border-slate-200 dark:border-dark-700 flex items-center justify-center text-gold-500 dark:text-gold-400 shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 block">Email Address</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">{email}</span>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-dark-850 hover:bg-slate-100 dark:hover:bg-dark-800 border border-slate-200 dark:border-dark-700 text-xs font-mono text-gold-600 dark:text-gold-400 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 dark:text-gold-400" />
                      <span className="text-gold-600 dark:text-gold-400">Copied!</span>
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
                className="p-4 rounded-xl bg-dark-900/60 border border-dark-800 hover:border-gold-500/30 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-dark-850 border border-dark-700 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">LinkedIn</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">linkedin.com/in/adediwura-afolabi</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 transition-colors" />
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-dark-900/60 border border-dark-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-dark-850 border border-dark-700 flex items-center justify-center text-gold-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block">Location & Timezone</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">Lagos, Nigeria · West Africa Time (WAT / UTC+1)</span>
                </div>
              </div>
            </div>

            {/* Invariant guarantee pill */}
            <div className="p-4 rounded-xl bg-dark-900/40 border border-gold-500/20 text-xs text-slate-300 font-mono">
              ⚡ Guaranteed response within 24 hours with an actionable systems breakdown.
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Scoping Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-dark-900/70 border border-dark-800 shadow-2xl backdrop-blur-sm">
              <h3 className="font-editorial text-2xl text-slate-100 mb-2 font-medium">
                Scope Your GTM System or AI Launch
              </h3>
              <p className="text-sm text-slate-400 mb-6 font-sans">
                Select your primary objective and describe the operational or conversion challenge you are solving.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection Pills */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-400 block mb-2.5">
                    What GTM system or workflow are you looking to build?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setSelectedService(srv)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                          selectedService === srv
                            ? 'bg-gold-500/20 border-gold-500 text-gold-300 font-semibold'
                            : 'bg-dark-950 border-dark-750 text-slate-400 hover:border-dark-600'
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
                    <label className="text-xs font-mono uppercase text-slate-400 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-dark-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-slate-400 block mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-dark-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Company / Brand */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-400 block mb-1.5">
                    Company or Organization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Health or GText Homes"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-dark-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                {/* Problem Description */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-400 block mb-1.5">
                    Describe the Process or Bottleneck *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="e.g. We get 50 inquiries a day through WhatsApp and web forms. Our team takes 6 hours to respond, and we are losing deals outside business hours..."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-dark-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-slate-100 text-dark-950 font-semibold text-sm hover:bg-white transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
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
