export interface Project {
  id: string;
  name: string;
  icon: string;
  subtitle: string;
  category: 'Control Plane' | 'RAG & Data' | 'Governance' | 'Experimental Chassis' | 'Domain Engineering' | 'Product Engineering';
  description: string;
  githubUrl?: string;
  status: string;
  badgeColor: string;
  engineeringFocus: string[];
  architectureHighlights: {
    title: string;
    description: string;
    badge?: string;
  }[];
  techStack: string[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  metrics?: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export type PipelineStage = 
  | 'request'
  | 'policy'
  | 'executor'
  | 'isolated_exec'
  | 'verification'
  | 'evidence'
  | 'acceptance'
  | 'outcome';

export interface SimulationStep {
  stage: PipelineStage;
  label: string;
  status: 'pending' | 'running' | 'passed' | 'warning' | 'failed';
  title: string;
  logLines: string[];
  details: Record<string, string | number | boolean>;
}

export interface SimulationScenario {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  targetSystem: 'MetaO' | 'Rpy' | 'SMAG' | 'CodePro';
  initialInput: string;
  finalDecision: 'PROMOTED' | 'BLOCKED' | 'REPLAN';
  decisionReason: string;
  steps: SimulationStep[];
  evidenceDigest: string;
}
