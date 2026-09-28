export interface StackCategory {
  title: string;
  badge: string;
  color: string;
  items: {
    name: string;
    level: string;
    details: string;
  }[];
}

export const STACK_DATA: StackCategory[] = [
  {
    title: 'Backend Systems',
    badge: 'Applied Work',
    color: 'emerald',
    items: [
      { name: 'C# / .NET', level: 'Applied', details: 'ASP.NET Core, .NET 10, ABP, modular boundaries, architecture tests, APIs and domain workflows' },
      { name: 'Python', level: 'Applied', details: 'FastAPI, RAG services, control-plane/runtime tooling, evaluation and data-processing paths' },
      { name: 'TypeScript / Next.js', level: 'Applied', details: 'Public web/product surfaces, API integration, validation, auth and frontend/backend boundaries' },
      { name: 'Rust', level: 'Systems Work', details: 'Used in MetaO architecture and migration experiments where a systems-level boundary is useful' }
    ]
  },
  {
    title: 'Data & Persistence',
    badge: 'Concurrency & Provenance',
    color: 'cyan',
    items: [
      { name: 'PostgreSQL', level: 'Core', details: 'Transactional workflows, FOR UPDATE SKIP LOCKED queues, optimistic concurrency, migrations and durable state' },
      { name: 'pgvector', level: 'RAG', details: 'Vector retrieval combined with lexical search in legal-process analysis' },
      { name: 'EF Core / ABP', level: '.NET Data', details: 'Module-owned persistence and reproducible fresh-database/migration gates in BPT2' },
      { name: 'Prisma', level: 'Product Data', details: 'TypeScript product data modeling and migrations in full-stack work such as MEDVI' }
    ]
  },
  {
    title: 'AI Engineering',
    badge: 'Evidence & Control',
    color: 'amber',
    items: [
      { name: 'RAG Systems', level: 'Applied', details: 'Retrieval, provenance, privacy boundaries, provider-free paths and reproducible evaluation' },
      { name: 'Agent Infrastructure', level: 'Research + Product', details: 'Executor supervision, runtime qualification, policy/budget boundaries and controlled execution' },
      { name: 'Evaluation', level: 'Empirical', details: 'Falsifiable hypotheses, frozen workloads, benchmark fidelity, run provenance and explicit failure classes' },
      { name: 'Knowledge Systems', level: 'Applied', details: 'Multi-source reconciliation, canonical identity, provenance and controlled producer/consumer contracts' }
    ]
  },
  {
    title: 'Platform & Operations',
    badge: 'Reproducibility',
    color: 'purple',
    items: [
      { name: 'Docker', level: 'Environment', details: 'Reproducible local/runtime environments and isolated validation paths where required' },
      { name: 'GitHub Actions', level: 'CI', details: 'Test matrices, path-scoped workflows, exact-head validation and evidence-preserving gates' },
      { name: 'Git', level: 'Engineering Workflow', details: 'Branch/PR workflows, clean-revision execution contracts, repository topology studies and controlled promotion' },
      { name: 'Operational Tooling', level: 'Reliability', details: 'Doctor commands, structured evidence, backup/restore paths, retry/recovery and explicit readiness boundaries' }
    ]
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    title: 'Claim Scope <= Evidence Scope',
    equation: 'IMPLEMENTED != EXECUTED != VERIFIED != ACCEPTED != PROMOTED',
    description: 'A feature, benchmark, workflow, or agent result is described only at the evidence level actually exercised. Local success is not silently promoted into production or external-validity claims.',
    tag: 'Core Rule'
  },
  {
    title: 'Execution Authority != Acceptance Authority',
    equation: 'EXECUTOR_DONE != SYSTEM_ACCEPTED',
    description: 'In agent systems, executors provide work and observations; verification and acceptance remain separate boundaries whenever the risk justifies that separation.',
    tag: 'Governance'
  },
  {
    title: 'Reuse Before Custom Infrastructure',
    equation: 'REUSE -> ADAPT -> WRAP -> FORK -> BUILD',
    description: 'Existing platform, framework, and open-source capabilities are evaluated before adding custom infrastructure. A new layer is expected to pay for its own operational and maintenance cost.',
    tag: 'Engineering Economy'
  },
  {
    title: 'Architecture Is Reopenable',
    equation: 'DECISION + NEW_EVIDENCE -> REASSESS',
    description: 'Repository topology, runtime selection, routing, decomposition, and other architecture choices are treated as bounded decisions under current evidence rather than permanent truths.',
    tag: 'Empirical Engineering'
  }
];
