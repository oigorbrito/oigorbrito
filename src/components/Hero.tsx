import React from 'react';
import { Terminal, Shield, Database, Cpu, ArrowRight, CheckCircle2, GitBranch, Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollToSimulator: () => void;
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSimulator, onScrollToProjects }) => {
  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60 overflow-hidden">
      {/* Background technical grid accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(6,182,212,0.12),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0f172a15_1px,transparent_1px),linear-gradient(to_bottom,#0f172a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto">
        {/* Terminal Breadcrumb & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>sys/runtime: operational</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">oigorbrito</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="hidden sm:inline">Execution Rule:</span>
            <code className="text-cyan-300 bg-slate-900/80 px-2 py-0.5 rounded border border-cyan-900/50">
              FAIL-CLOSED BY DEFAULT
            </code>
          </div>
        </div>

        {/* Main Title & Hero Copy */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Igor Brito
          </h1>
          <h2 className="mt-3 text-xl sm:text-2xl font-mono text-cyan-400 tracking-tight font-medium">
            Backend & AI Systems Engineer
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Building <strong className="text-white font-semibold">backend platforms, RAG systems, AI-agent infrastructure, governance, evaluation</strong>, and reliable execution paths.
          </p>

          <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-3xl">
            My professional background includes high-reliability backend development with <strong className="text-slate-200">C# / ASP.NET Core</strong>, while my independent systems engineering extends into <strong className="text-slate-200">Python, Rust, distributed systems, developer tooling, and AI agent control planes</strong>.
          </p>
        </div>

        {/* Core Tech Stack Badges */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
          {[
            { label: 'C# / .NET', color: 'border-purple-500/30 bg-purple-950/20 text-purple-300' },
            { label: 'Python / FastAPI', color: 'border-blue-500/30 bg-blue-950/20 text-blue-300' },
            { label: 'Rust', color: 'border-amber-500/30 bg-amber-950/20 text-amber-300' },
            { label: 'PostgreSQL 16 + pgvector', color: 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300' },
            { label: 'RAG & Provenance', color: 'border-teal-500/30 bg-teal-950/20 text-teal-300' },
            { label: 'Agentic Control Planes', color: 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300' },
            { label: 'Evaluation & Benchmarks', color: 'border-indigo-500/30 bg-indigo-950/20 text-indigo-300' },
          ].map((item, idx) => (
            <span key={idx} className={`px-2.5 py-1 rounded border ${item.color}`}>
              {item.label}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onScrollToSimulator}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-2 group cursor-pointer"
          >
            <Shield className="w-4 h-4 text-slate-950" />
            Launch Verification Simulator
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onScrollToProjects}
            className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 font-mono text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            Explore Systems (MetaO, Rpy, SMAG)
          </button>

          <a
            href="https://github.com/oigorbrito"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 font-mono text-xs transition-colors flex items-center gap-1.5"
          >
            <GitBranch className="w-3.5 h-3.5" />
            github.com/oigorbrito
          </a>
        </div>

        {/* Live System Status Badges */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5">
                <span>🧠</span> MetaO
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                post-MVP
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-400 font-mono">
              Control plane for selecting & supervising pluggable orchestrators.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5">
                <span>⚖️</span> Rpy
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
                qualified
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-400 font-mono">
              Legal RAG, PostgreSQL 16 pgvector, SKIP LOCKED job queues.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5">
                <span>🛡️</span> SMAG
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-400 border border-amber-800/50">
                installable CLI
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-400 font-mono">
              Supervisor layer for AI coding executors with isolated staging.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5">
                <span>🧪</span> CodePro
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-400 border border-purple-800/50">
                active chassis
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-400 font-mono">
              Falsifiable agent testing chassis with stagnation telemetry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
