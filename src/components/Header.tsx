import React from 'react';
import { Terminal, Github, Linkedin, Mail, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, activeSection, setActiveSection }) => {
  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:border-cyan-400 transition-colors">
              IB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 tracking-tight text-base font-mono">Igor Brito</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/60 font-mono">
                  sys-arch
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Backend & AI Systems Engineer</p>
            </div>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-mono">
          <button
            onClick={() => scrollTo('simulator')}
            className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
              activeSection === 'simulator'
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Verification Simulator
          </button>

          <button
            onClick={() => scrollTo('projects')}
            className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
              activeSection === 'projects'
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            Featured Work
          </button>

          <button
            onClick={() => scrollTo('philosophy')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeSection === 'philosophy'
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            Architecture Rules
          </button>

          <button
            onClick={() => scrollTo('stack')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeSection === 'stack'
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            Stack & Tools
          </button>
        </nav>

        {/* External Links & Contact CTA */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/oigorbrito"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700"
            title="GitHub: oigorbrito"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/euigorbrito/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-slate-400 hover:text-sky-400 hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700"
            title="LinkedIn: Igor Brito"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenContact}
            className="px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all shadow-[0_0_12px_rgba(6,182,212,0.25)] flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-slate-950" />
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};
