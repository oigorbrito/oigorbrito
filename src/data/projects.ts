import { Project } from '../types';

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'automotive-platform',
    name: 'BPT2 + Podium7',
    icon: '🚗',
    subtitle: 'Automotive marketplace + knowledge platform',
    category: 'Domain Engineering',
    description: 'Two bounded systems working together: Podium7 produces reconciled automotive knowledge and provenance; BPT2 consumes versioned contracts into its canonical catalog, buyer/seller workflows, and public marketplace.',
    status: 'BPT2 post-MVP operational baseline · private source',
    badgeColor: 'teal',
    engineeringFocus: [
      '.NET 10 / ABP 10.6 modular monolith',
      'PostgreSQL 17 + Next.js public web',
      'OIDC Authorization Code + PKCE',
      'optimistic concurrency and ownership boundaries',
      'durable PostgreSQL work queues with FOR UPDATE SKIP LOCKED',
      'idempotent retry, delivery, and webhook paths',
      'multi-source reconciliation and provenance',
      'versioned Podium7 -> BPT2 ingestion contracts'
    ],
    architectureHighlights: [
      {
        title: 'Producer / Consumer Authority Boundary',
        description: 'Podium7 owns external automotive knowledge, reconciliation, and provenance. BPT2 owns its canonical internal vehicle identity and publication decisions.',
        badge: 'Bounded Systems'
      },
      {
        title: 'Real Cross-System Integration',
        description: 'The integration path has been exercised as Podium7 publisher -> HTTP -> BPT2 ingestion -> PostgreSQL with explicit auth, retry, replay, redirect, and contract-failure semantics.',
        badge: 'HTTP / PostgreSQL'
      },
      {
        title: 'Durable Product Workflows',
        description: 'Saved-search detection and delivery use PostgreSQL-backed coordination, explicit retry/idempotency semantics, and a provider-neutral external delivery boundary.',
        badge: 'Reliability'
      },
      {
        title: 'Measured Topology Decisions',
        description: 'Monorepo vs multi-repository options were evaluated through controlled studies; repository migration remained unselected where recurring benefit did not yet justify its cost.',
        badge: 'Evidence-Driven'
      }
    ],
    techStack: ['C# / .NET 10', 'ABP 10.6', 'PostgreSQL 17', 'Next.js', 'Python', 'OIDC']
  },
  {
    id: 'codepro',
    name: 'CodePro',
    icon: '🧪',
    subtitle: 'Evidence-driven software-agent chassis',
    category: 'Experimental Chassis',
    description: 'Executor-agnostic software-engineering chassis developed through explicit contracts, falsifiable hypotheses, and reproducible evidence.',
    githubUrl: 'https://github.com/oigorbrito/codepro',
    status: 'active empirical chassis · real-task executor validation is the next evidence boundary',
    badgeColor: 'purple',
    engineeringFocus: [
      'deterministic task characterization',
      'progress / stagnation assessment',
      'bounded routing and escalation',
      'execution telemetry',
      'explicit request / scope / authority / budget contracts',
      'executor qualification separate from availability',
      'patch verification and non-overwriting evidence',
      'independent acceptance and preregistered experiments'
    ],
    architectureHighlights: [
      {
        title: 'Minimum Sufficient Architecture',
        description: 'New mechanisms are expected to justify their own complexity through observed need and evidence rather than feature accumulation.',
        badge: 'Economy'
      },
      {
        title: 'Qualification Before Binding',
        description: 'An available executor is not automatically a qualified executor. Binding requires explicit evidence for the requested capability and exact executor/adapter identity.',
        badge: 'Fail-Closed'
      },
      {
        title: 'Observation != Task Success',
        description: 'Low-level command outcomes remain observations. Verification, acceptance, and promotion are separate authority boundaries.',
        badge: 'Authority'
      },
      {
        title: 'Experimental Protocol',
        description: 'Study specification, workload, treatment, measurement, analysis, validity, failure attribution, and provenance are frozen before decision-bearing comparisons.',
        badge: 'Empirical'
      }
    ],
    techStack: ['Python', 'TypeScript', 'CLI Tooling', 'Telemetry', 'Git', 'Benchmark Harnesses']
  },
  {
    id: 'rpy',
    name: 'Rpy',
    icon: '⚖️',
    subtitle: 'RAG backend for legal-process analysis',
    category: 'RAG & Data',
    description: 'FastAPI and PostgreSQL/pgvector backend designed around tenant isolation, provenance, concurrency, privacy, and reproducible operations.',
    githubUrl: 'https://github.com/oigorbrito/rpy',
    status: 'offline path qualified and reproducible',
    badgeColor: 'cyan',
    engineeringFocus: [
      'hybrid lexical + vector retrieval',
      'PostgreSQL-backed job queue',
      'FOR UPDATE SKIP LOCKED',
      'fencing, retry and reclaim',
      'claim/source provenance',
      'confidential provider-free execution path',
      'Docker / CI / backup & restore',
      'API and runtime hardening'
    ],
    architectureHighlights: [
      {
        title: 'PostgreSQL-Backed Coordination',
        description: 'Background work uses PostgreSQL locking and durable state instead of requiring a separate broker for the qualified offline path.',
        badge: 'Concurrency'
      },
      {
        title: 'Hybrid Retrieval',
        description: 'Lexical and vector retrieval paths are combined while retaining provenance needed to inspect the source material behind generated output.',
        badge: 'pgvector'
      },
      {
        title: 'Confidential Provider-Free Path',
        description: 'The qualified offline path avoids external model and embedding providers for confidential-process handling.',
        badge: 'Privacy'
      }
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL 16', 'pgvector', 'Docker', 'SQL']
  },
  {
    id: 'metao',
    name: 'MetaO',
    icon: '🧠',
    subtitle: 'Meta-orchestrator / AI control plane',
    category: 'Control Plane',
    description: 'Framework-neutral control plane for selecting, governing, supervising, and independently accepting work from pluggable agent orchestrators.',
    githubUrl: 'https://github.com/oigorbrito/metaO',
    status: 'post-MVP operational baseline',
    badgeColor: 'emerald',
    engineeringFocus: [
      'runtime admission, selection and qualification',
      'policy / budget boundaries',
      'durable mission state',
      'fencing, restart and recovery',
      'runtime certification and revocation',
      'framework adapters',
      'evidence normalization',
      'independent acceptance'
    ],
    architectureHighlights: [
      {
        title: 'Framework-Neutral Core Boundary',
        description: 'Agent/orchestrator SDKs sit behind adapters so core policy, budget, recovery, and acceptance authority are not owned by a specific framework.',
        badge: 'Control Plane'
      },
      {
        title: 'Orchestrator Success != Acceptance',
        description: 'A runtime reaching terminal success is not sufficient for mission acceptance; MetaO retains an independent acceptance boundary.',
        badge: 'Authority'
      },
      {
        title: 'Runtime Lifecycle',
        description: 'Admission, health, certification, revocation, recovery, and durable mission state are treated as explicit control-plane concerns.',
        badge: 'Reliability'
      }
    ],
    techStack: ['Python', 'Rust', 'SQLite', 'CLI Tooling', 'Adapters', 'Distributed Systems']
  }
];

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'rj',
    name: 'RJ',
    icon: '🔷',
    subtitle: '.NET legal RAG service',
    category: 'Domain Engineering',
    description: '.NET 10 / C# 14 service with ASP.NET Core, modular-monolith boundaries, architecture tests, deterministic builds, and legal RAG work.',
    githubUrl: 'https://github.com/oigorbrito/RJ',
    status: 'public engineering project',
    badgeColor: 'blue',
    engineeringFocus: [
      '.NET 10 / C# 14',
      'ASP.NET Core',
      'modular-monolith dependency rules',
      'architecture tests',
      'warnings as errors and deterministic builds',
      'RAG evaluation work'
    ],
    architectureHighlights: [
      {
        title: 'Executable Architecture Boundaries',
        description: 'Domain, application, infrastructure, API, and architecture-test projects make dependency direction explicit and testable.',
        badge: '.NET'
      }
    ],
    techStack: ['C# 14', '.NET 10', 'ASP.NET Core', 'Architecture Tests', 'RAG']
  },
  {
    id: 'smag',
    name: 'SMAG',
    icon: '🛡️',
    subtitle: 'Supervised Machine Agent Governance',
    category: 'Governance',
    description: 'Installable governance layer for coding executors. The executor performs coding work; SMAG controls permissions, isolated staging, checks, evidence, acceptance, and promotion.',
    status: 'installable governed execution product · private source',
    badgeColor: 'amber',
    engineeringFocus: [
      'installable CLI',
      'executor discovery and explicit scopes',
      'isolated staging',
      'policy enforcement',
      'explicit PASS / BLOCKED / failure outcomes',
      'evidence-backed acceptance',
      'governed GitHub operations'
    ],
    architectureHighlights: [
      {
        title: 'Executor / Supervisor Separation',
        description: 'Coding executors do not own the final authority to accept or promote their own work.',
        badge: 'Governance'
      }
    ],
    techStack: ['Node.js', 'CLI Tooling', 'Git', 'External Executors', 'CI/CD']
  },
  {
    id: 'ndv',
    name: 'NDV',
    icon: '📐',
    subtitle: 'Minimum-sufficient composition research',
    category: 'Experimental Chassis',
    description: 'Research program testing whether adaptive selection of the minimum sufficient capability set improves verified success relative to total cost and latency.',
    githubUrl: 'https://github.com/oigorbrito/NDV',
    status: 'research only · no runtime architecture approved',
    badgeColor: 'purple',
    engineeringFocus: [
      'verified-success / total-cost / latency frontier',
      'TOTAL_SYSTEM_TOKENS / VERIFIED_SOLVED_TASK',
      'reuse -> adapt -> wrap -> fork -> build',
      'holdout-confirmed evidence before promotion',
      'NO_BUILD / REUSE_ONLY / INCONCLUSIVE allowed outcomes'
    ],
    architectureHighlights: [
      {
        title: 'Research Before Architecture',
        description: 'The repository explicitly allows experiments to conclude that a new runtime, router, orchestrator, memory system, or controller should not be built.',
        badge: 'Falsification'
      }
    ],
    techStack: ['Research Harnesses', 'AI Evaluation', 'Cost Accounting', 'CI']
  },
  {
    id: 'medvi',
    name: 'MEDVI',
    icon: '🏥',
    subtitle: 'Full-stack health product engineering',
    category: 'Domain Engineering',
    description: 'Product work spanning Next.js, PostgreSQL/Prisma, authentication, payments, security controls, and tested failure paths.',
    status: 'active private product',
    badgeColor: 'teal',
    engineeringFocus: [
      'Next.js product surfaces',
      'PostgreSQL / Prisma',
      'authentication and rate limiting',
      'Stripe payment flows and webhook recovery',
      'security headers / CSP',
      'tested failure and recovery paths'
    ],
    architectureHighlights: [
      {
        title: 'Product Failure Paths',
        description: 'Recent work includes payment webhook recovery, rate-limit hardening, identity canonicalization, and security-policy regression tests.',
        badge: 'Product Engineering'
      }
    ],
    techStack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Security']
  }
];
