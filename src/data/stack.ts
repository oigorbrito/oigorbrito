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
    badge: 'Core Foundation',
    color: 'emerald',
    items: [
      { name: 'C# / .NET', level: 'Production', details: 'ASP.NET Core, resilient microservices, high-throughput APIs, enterprise architecture' },
      { name: 'Python', level: 'Primary AI & Data', details: 'FastAPI, async runtimes, orchestrator control planes, evaluation pipelines' },
      { name: 'Rust', level: 'High Performance', details: 'High-throughput boundary validation, zero-copy evidence hashing, systems-level migration' },
      { name: 'REST APIs', level: 'Standard', details: 'Idempotent endpoints, contract-first OpenAPI schemas, versioned boundaries' }
    ]
  },
  {
    title: 'Data & Persistence',
    badge: 'ACID & Vector',
    color: 'cyan',
    items: [
      { name: 'PostgreSQL 16', level: 'Deep Expertise', details: 'FOR UPDATE SKIP LOCKED queues, complex indexing, partitioning, concurrency & fencing' },
      { name: 'pgvector', level: 'Vector Search', details: 'HNSW indexing, hybrid lexical + vector retrieval, cosine similarity at scale' },
      { name: 'Prisma / ORMs', level: 'Data Modeling', details: 'Type-safe schema definitions, deterministic migrations, connection pooling' },
      { name: 'Backup & Restore', level: 'Reliability', details: 'Point-in-time recovery, WAL archiving, tenant data fencing' }
    ]
  },
  {
    title: 'AI Engineering & Governance',
    badge: 'System Architecture',
    color: 'amber',
    items: [
      { name: 'RAG Systems', level: 'Production Focus', details: 'Claim-level provenance, hybrid lexical+vector retrieval, privacy boundaries, offline paths' },
      { name: 'Agentic Systems', level: 'Infrastructure', details: 'Orchestrators, supervision layers, stagnation detection, bounded loops' },
      { name: 'AI Governance', level: 'Architecture Rule', details: 'Supervisor/executor split, fail-closed policy gates, independent acceptance' },
      { name: 'Evaluation & Benchmarking', level: 'Falsifiable', details: 'Falsifiable hypotheses, benchmark fidelity, SWE-bench & SWE-ReX scopes' },
      { name: 'MCP (Model Context Protocol)', level: 'Tooling', details: 'Safe tool interfaces, bounded context injection, capability sandboxing' }
    ]
  },
  {
    title: 'Platform & Operations',
    badge: 'Infrastructure',
    color: 'purple',
    items: [
      { name: 'Docker', level: 'Containerization', details: 'Reproducible multi-stage builds, isolated execution sandboxes, cgroup resource limits' },
      { name: 'GitHub Actions / CI/CD', level: 'Automation', details: 'Fail-closed verification gates, reproducible test matrices, supply-chain security' },
      { name: 'Linux & Bash Plumb', level: 'Systems', details: 'Process isolation, cgroups, file descriptors, git plumbing commands' },
      { name: 'Operational Tooling', level: 'Observability', details: 'Audit journals, structured telemetry, cryptographic evidence verification' }
    ]
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    title: 'Activity != Evidence of Correctness',
    equation: 'IMPLEMENTED != EXECUTED != VERIFIED != ACCEPTED != PROMOTED',
    description: 'Just because an agent outputted code or claimed completion does not mean it executed; execution does not imply deterministic verification; verification does not imply independent acceptance by an external policy engine; acceptance does not imply safe promotion to production.',
    tag: 'Core Axiom'
  },
  {
    title: 'Supervisor / Executor Separation',
    equation: 'SUPERVISOR(Isolated_Sandbox(EXECUTOR))',
    description: 'Never permit the model that generates code or makes decisions to be the entity that approves its own promotion. The executor is treated as an untrusted worker supervised by an immutable policy runtime.',
    tag: 'Governance'
  },
  {
    title: 'Claim-Level Provenance over Faith',
    equation: 'CITATION ∈ EXACT_SPAN(DOC_HASH)',
    description: 'In RAG and knowledge systems, every factual assertion must trace to an immutable byte span or paragraph bounding box. If provenance cannot be verified, the claim fails closed.',
    tag: 'RAG Architecture'
  },
  {
    title: 'PostgreSQL SKIP LOCKED over Heavy Brokers',
    equation: 'SELECT ... FOR UPDATE SKIP LOCKED',
    description: 'Avoid unnecessary operational complexity. Concurrency-safe job queues with heartbeats, fencing tokens, and orphan reclamation can be implemented with native ACID reliability directly in PostgreSQL.',
    tag: 'Backend Reliability'
  }
];
