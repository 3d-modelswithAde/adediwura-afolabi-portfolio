import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

export const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Stack', href: '#stack' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Systems', href: '#projects' },
    { name: 'Experience', href: '#evolution' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-dark-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-dark-800/80 shadow-sm dark:shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo / Brand (Ken style) */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-dark-700 flex items-center justify-center text-slate-900 dark:text-slate-100 font-editorial font-bold text-lg group-hover:border-gold-500/50 transition-colors shadow-sm">
              AA
            </div>
            <div>
              <span className="font-editorial text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100 block group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                Adediwura Afolabi
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono block">
                AI Product Builder
              </span>
            </div>
          </a>

          {/* Availability Badge (Amber / Gold - NO GREEN) */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/90 dark:bg-dark-900/80 border border-amber-500/30 text-xs text-amber-600 dark:text-gold-400 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 dark:bg-gold-400"></span>
            </span>
            Available to work globally
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-dark-750 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-gold-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-dark-950 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-white transition-all shadow-sm"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-dark-750 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-dark-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-dark-800 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-dark-900 border border-amber-500/30 text-xs text-amber-600 dark:text-gold-400 font-mono w-max">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 dark:bg-gold-400"></span>
            </span>
            Available to work globally
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-dark-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-dark-950 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-white transition-all shadow-sm"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
