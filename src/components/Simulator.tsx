import React, { useState, useEffect } from 'react';
import { SIMULATION_SCENARIOS } from '../data/simulations';
import { SimulationScenario, PipelineStage } from '../types';
import { 
  Play, RotateCcw, ChevronRight, Shield, CheckCircle2, 
  XCircle, AlertTriangle, Terminal, FileCode, Check, RefreshCw, Lock, Cpu
} from 'lucide-react';

const STAGE_ORDER: PipelineStage[] = [
  'request',
  'policy',
  'executor',
  'isolated_exec',
  'verification',
  'evidence',
  'acceptance',
  'outcome'
];

export const Simulator: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(SIMULATION_SCENARIOS[0].id);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showEvidenceModal, setShowEvidenceModal] = useState<boolean>(false);

  const scenario: SimulationScenario = 
    SIMULATION_SCENARIOS.find(s => s.id === selectedScenarioId) || SIMULATION_SCENARIOS[0];

  // Auto-run effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      if (currentStepIndex < scenario.steps.length - 1) {
        timer = setTimeout(() => {
          setCurrentStepIndex(prev => prev + 1);
        }, 1200);
      } else {
        setIsRunning(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isRunning, currentStepIndex, scenario.steps.length]);

  const handleSelectScenario = (id: string) => {
    setIsRunning(false);
    setSelectedScenarioId(id);
    setCurrentStepIndex(0);
  };

  const handleStepNext = () => {
    if (currentStepIndex < scenario.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStepIndex(0);
  };

  const handleToggleAutoRun = () => {
    if (currentStepIndex >= scenario.steps.length - 1) {
      setCurrentStepIndex(0);
      setIsRunning(true);
    } else {
      setIsRunning(!isRunning);
    }
  };

  const activeStep = scenario.steps[currentStepIndex];

  return (
    <section id="simulator" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Interactive Execution Engine
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Agent Governance Pipeline
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Simulate how Igor's architecture handles requests: from policy boundary checks to sandboxed execution, deterministic verification, cryptographic evidence hashing, and independent acceptance.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleToggleAutoRun}
            className={`px-3.5 py-2 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer ${
              isRunning
                ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
            }`}
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Pause Auto-Run
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                Auto-Run Pipeline
              </>
            )}
          </button>

          <button
            onClick={handleStepNext}
            disabled={isRunning || currentStepIndex >= scenario.steps.length - 1}
            className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed border border-slate-700 text-slate-200 font-mono text-xs flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Step Forward</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleReset}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            title="Reset Simulation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scenario Picker Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {SIMULATION_SCENARIOS.map((sc) => {
          const isSelected = sc.id === selectedScenarioId;
          return (
            <button
              key={sc.id}
              onClick={() => handleSelectScenario(sc.id)}
              className={`text-left p-3 rounded-lg border transition-all cursor-pointer font-mono ${
                isSelected
                  ? 'bg-cyan-950/40 border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.15)] text-slate-100'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-semibold">
                  {sc.targetSystem}
                </span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    sc.finalDecision === 'PROMOTED'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60'
                      : sc.finalDecision === 'BLOCKED'
                      ? 'bg-red-950 text-red-400 border border-red-800/60'
                      : 'bg-amber-950 text-amber-400 border border-amber-800/60'
                  }`}
                >
                  {sc.finalDecision}
                </span>
              </div>
              <div className="text-xs font-bold truncate text-slate-200">{sc.title.split(':')[0]}</div>
              <div className="text-[11px] text-slate-400 truncate mt-0.5">{sc.title.split(':')[1] || sc.title}</div>
            </button>
          );
        })}
      </div>

      {/* Pipeline Stepper Visualization */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 mb-6 shadow-xl backdrop-blur-sm">
        <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
          <span>PIPELINE SEQUENCE:</span>
          <span>
            Stage {currentStepIndex + 1} of {scenario.steps.length}
          </span>
        </div>

        {/* Stepper Node Graph */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {scenario.steps.map((st, idx) => {
            const isPassed = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;
            const isUpcoming = idx > currentStepIndex;

            let badgeStyle = 'border-slate-800 bg-slate-950 text-slate-500';
            let icon = <span className="text-xs font-mono">{idx + 1}</span>;

            if (isPassed) {
              badgeStyle = st.status === 'failed' 
                ? 'border-red-500/60 bg-red-950/30 text-red-400' 
                : 'border-emerald-500/60 bg-emerald-950/30 text-emerald-400';
              icon = st.status === 'failed' 
                ? <XCircle className="w-3.5 h-3.5" /> 
                : <Check className="w-3.5 h-3.5" />;
            } else if (isCurrent) {
              badgeStyle = isRunning
                ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300 ring-2 ring-cyan-500/30 animate-pulse'
                : 'border-cyan-400 bg-cyan-950/60 text-cyan-300 ring-2 ring-cyan-500/30';
              icon = <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />;
            }

            return (
              <button
                key={st.stage}
                onClick={() => {
                  setIsRunning(false);
                  setCurrentStepIndex(idx);
                }}
                className={`flex flex-col items-center p-2 rounded-lg border text-center transition-all cursor-pointer ${badgeStyle}`}
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center mb-1.5 font-bold">
                  {icon}
                </div>
                <span className="text-[10px] font-mono font-medium line-clamp-1">
                  {st.label.split('. ')[1]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Terminal + Details Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Terminal Live Output (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col font-mono text-xs">
          {/* Terminal Window Header */}
          <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-400 text-xs ml-2 font-mono flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                governor@oigorbrito:~/{scenario.targetSystem.toLowerCase()}-audit.log
              </span>
            </div>
            <div className="text-[11px] text-slate-500">
              SHA: {scenario.evidenceDigest.slice(7, 19)}...
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 space-y-2 min-h-[300px] max-h-[420px] overflow-y-auto bg-black/40 text-slate-300">
            {/* Initial Prompt context */}
            <div className="text-slate-500 pb-2 border-b border-slate-900">
              <span className="text-cyan-400">$ input:</span> {scenario.initialInput}
            </div>

            {/* Render all logs up to current step */}
            {scenario.steps.slice(0, currentStepIndex + 1).map((step, sIdx) => {
              const isCurrent = sIdx === currentStepIndex;
              return (
                <div key={step.stage} className={`pt-1 ${isCurrent ? 'opacity-100' : 'opacity-70'}`}>
                  <div className="text-[11px] text-slate-500 font-bold mb-1 flex items-center gap-1.5">
                    <span className="text-cyan-500">&gt;</span> {step.label}: {step.title}
                  </div>
                  {step.logLines.map((line, lIdx) => (
                    <div
                      key={lIdx}
                      className={`pl-3 font-mono leading-relaxed ${
                        line.includes('FAILED') || line.includes('BLOCKED') || line.includes('FATAL')
                          ? 'text-red-400 font-bold bg-red-950/20 py-0.5 px-1 rounded'
                          : line.includes('PASSED') || line.includes('ACCEPTED') || line.includes('PROMOTED')
                          ? 'text-emerald-400'
                          : line.includes('WARNING') || line.includes('Stagnation')
                          ? 'text-amber-400'
                          : 'text-slate-300'
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              );
            })}

            {/* Blinking cursor at end */}
            <div className="pt-2 flex items-center gap-1 text-cyan-400">
              <span>{'>'}</span>
              <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
            </div>
          </div>

          {/* Terminal Footer Info */}
          <div className="bg-slate-900/80 px-4 py-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-cyan-400" />
              Independent Acceptance Engine active
            </span>
            <button
              onClick={() => setShowEvidenceModal(true)}
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 cursor-pointer"
            >
              Inspect Signed Evidence Bundle
            </button>
          </div>
        </div>

        {/* Stage State & Metrics Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Active Stage Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60 font-semibold">
                ACTIVE PHASE
              </span>
              <span
                className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  activeStep.status === 'passed'
                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/50'
                    : activeStep.status === 'failed'
                    ? 'bg-red-950/60 text-red-400 border border-red-800/50'
                    : 'bg-amber-950/60 text-amber-400 border border-amber-800/50'
                }`}
              >
                {activeStep.status.toUpperCase()}
              </span>
            </div>

            <h3 className="text-base font-bold text-white font-mono">{activeStep.title}</h3>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Stage: {activeStep.label}
            </p>

            {/* Key Value Stage Metadata */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2 font-mono text-xs">
              {Object.entries(activeStep.details).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                  <span className="text-slate-200 font-semibold">{String(val)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome Gate Verdict Card (If pipeline completed) */}
          <div
            className={`border rounded-xl p-5 shadow-xl transition-all ${
              currentStepIndex === scenario.steps.length - 1
                ? scenario.finalDecision === 'PROMOTED'
                  ? 'bg-emerald-950/30 border-emerald-700/60'
                  : scenario.finalDecision === 'BLOCKED'
                  ? 'bg-red-950/30 border-red-700/60'
                  : 'bg-amber-950/30 border-amber-700/60'
                : 'bg-slate-900/60 border-slate-800 opacity-80'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase font-bold tracking-wider text-slate-400">
                Supervisor Gate Decision
              </span>
              <span
                className={`font-mono font-bold text-sm px-2.5 py-0.5 rounded ${
                  scenario.finalDecision === 'PROMOTED'
                    ? 'bg-emerald-500 text-slate-950'
                    : scenario.finalDecision === 'BLOCKED'
                    ? 'bg-red-500 text-slate-950'
                    : 'bg-amber-500 text-slate-950'
                }`}
              >
                {scenario.finalDecision}
              </span>
            </div>

            <p className="text-xs text-slate-300 font-mono leading-relaxed mt-2">
              {scenario.decisionReason}
            </p>

            <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Cryptographic Digest:</span>
              <span className="text-cyan-400 font-mono">
                {scenario.evidenceDigest.slice(0, 18)}...
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Raw Evidence Bundle */}
      {showEvidenceModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileCode className="w-5 h-5 text-cyan-400" />
                <h4 className="text-sm font-bold font-mono text-white">
                  Normalized Evidence Bundle (JSON-LD)
                </h4>
              </div>
              <button
                onClick={() => setShowEvidenceModal(false)}
                className="text-slate-400 hover:text-white font-mono text-xs px-2 py-1 rounded bg-slate-800"
              >
                ✕ Close
              </button>
            </div>

            <pre className="mt-4 p-4 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto max-h-[350px]">
{JSON.stringify(
  {
    schema: 'https://governance.oigorbrito.dev/schemas/evidence-v1.json',
    system: scenario.targetSystem,
    scenarioId: scenario.id,
    timestamp: new Date().toISOString(),
    digest: scenario.evidenceDigest,
    decision: scenario.finalDecision,
    reason: scenario.decisionReason,
    isolation: {
      cgroupV2: true,
      networkEgress: 'BLOCKED',
      readOnlyRoot: true
    },
    verificationTrace: {
      testsTotal: 142,
      regressions: 0,
      provenanceCoverage: '100%'
    }
  },
  null,
  2
)}
            </pre>

            <div className="mt-4 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Tamper-evident attestation verifiable via SMAG CLI</span>
              <button
                onClick={() => setShowEvidenceModal(false)}
                className="px-4 py-1.5 rounded bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
