import React from 'react';
import { AlertTriangle, CheckCircle, ShieldAlert, ArrowRight, Lock } from 'lucide-react';

export const AxiomBanner: React.FC = () => {
  return (
    <section className="bg-slate-900/90 border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60">
                Core Architectural Axiom
              </span>
              <span className="text-xs text-slate-400 font-mono">Governing Rule</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-mono tracking-tight">
              Activity is not evidence of correctness.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              In conventional systems and AI agents alike, output claims cannot self-certify.
              Every transition between phases requires explicit, tamper-evident boundaries.
            </p>
          </div>

          {/* Axiom Equation Visualizer */}
          <div className="w-full lg:w-auto bg-slate-950/90 border border-slate-800 rounded-xl p-4 font-mono text-xs sm:text-sm shadow-xl">
            <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
              <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                IMPLEMENTED
              </span>
              <span className="text-amber-400 font-bold">!=</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                EXECUTED
              </span>
              <span className="text-amber-400 font-bold">!=</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                VERIFIED
              </span>
              <span className="text-amber-400 font-bold">!=</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                ACCEPTED
              </span>
              <span className="text-cyan-400 font-bold">!=</span>
              <span className="px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800 font-bold">
                PROMOTED
              </span>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-center text-[11px] text-slate-400 italic">
              "Building systems where 'the agent said it finished' is not considered a verification strategy."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
