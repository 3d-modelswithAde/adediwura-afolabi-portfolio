import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, MessageSquare } from 'lucide-react';

const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState('Voice Agent');
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
    'AI Voice Agent',
    'n8n Workflow Automation',
    'AI Intake & CRM Pipeline',
    'AI Product Marketing (GTM)',
    'Community Operations'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Construct mailto link
    const subject = encodeURIComponent(`[Project Inquiry] ${selectedService} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Hi Adediwura,\n\nMy name is ${formData.name} from ${formData.company || 'my company'}.\n\nService needed: ${selectedService}\n\nOur problem / goal:\n${formData.problem}\n\nPlease reach me at: ${formData.email}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-dark-900/90 border-t border-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Headline & Direct Contact Details */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
              Start a Conversation
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-slate-100 font-normal tracking-tight mb-6">
              Have a Problem That Could Be Automated?
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed mb-8">
              Let's turn it into an intelligent system. Whether you are exploring an AI voice agent for sales, a deterministic intake pipeline, or seeking an AI Product Marketing Manager for your team, I'd love to connect.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              
              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-dark-950 border border-dark-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 truncate">
                  <div className="w-10 h-10 rounded-lg bg-dark-900 border border-dark-700 flex items-center justify-center text-gold-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Direct Email</span>
                    <a href={`mailto:${email}`} className="text-xs sm:text-sm font-mono text-slate-200 hover:text-gold-400 transition-colors truncate block">
                      {email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-dark-900 border border-dark-700 text-xs font-mono text-slate-300 hover:text-white hover:bg-dark-850 flex items-center gap-1.5 shrink-0 transition-all"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-dark-950 border border-dark-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-dark-900 border border-dark-700 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Base & Availability</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-200">
                    Lagos, Nigeria (WAT / UTC+1) · Open to Remote Global Roles
                  </span>
                </div>
              </div>

              {/* LinkedIn Connect */}
              <div className="p-4 rounded-xl bg-dark-950 border border-dark-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-dark-900 border border-dark-700 flex items-center justify-center text-gold-400 shrink-0">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Professional Network</span>
                    <span className="text-xs sm:text-sm font-mono text-slate-200">Adediwura Afolabi</span>
                  </div>
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-dark-900 border border-dark-700 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-dark-950 border border-dark-800 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="font-editorial text-2xl text-slate-100 font-medium mb-1">
                  Scope an Automation or Role
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-sans">
                  Tell me about the operational bottleneck or role you're hiring for.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Service Selection Pills */}
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                    Area of Interest:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => setSelectedService(svc)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          selectedService === svc
                            ? 'bg-gold-500 text-dark-950 font-bold shadow-sm'
                            : 'bg-dark-900 text-slate-300 border border-dark-800 hover:border-dark-700'
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-dark-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-gold-500 font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-dark-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-gold-500 font-sans transition-colors"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Company / Organization (Optional)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. GText Homes / Tech Agency"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-dark-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-gold-500 font-sans transition-colors"
                  />
                </div>

                {/* Problem Description */}
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">
                    Describe the Process, Bottleneck, or Goal
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    placeholder="e.g., We receive 50 inbound inquiries per day and our team takes 6 hours to respond. We want an automated intake or voice agent system that qualifies prospects and logs to our CRM..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-dark-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-gold-500 font-sans transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-950 font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>

                {submitted && (
                  <p className="text-xs text-emerald-400 font-mono text-center mt-2">
                    ✓ Opening your email client with preformatted message details...
                  </p>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
