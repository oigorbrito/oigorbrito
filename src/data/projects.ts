import { Project } from '../types';

export const FEATURED_PROJECTS: Project[] = [
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
      'runtime selection & qualification',
      'policy / budget boundaries',
      'failover & recovery',
      'durable state',
      'evidence normalization',
      'independent acceptance',
      'benchmark ingestion',
      'Python + Rust migration work'
    ],
    architectureHighlights: [
      {
        title: 'Pluggable Orchestrator Abstraction',
        description: 'Decouples high-level task delegation from concrete orchestration runtimes (LangGraph, CrewAI, AutoGen, or custom loops) behind a qualified interface contract.',
        badge: 'Contract-First'
      },
      {
        title: 'Durable State & Checkpoint Journal',
        description: 'Transactional checkpointing allows seamless recovery and failover if an executor stalls, crashes, or violates token/time budgets.',
        badge: 'Resilience'
      },
      {
        title: 'Python + Rust Migration Core',
        description: 'High-throughput boundary validation and evidence hash normalization migrated to Rust for deterministic zero-copy verification.',
        badge: 'Rust / FFI'
      },
      {
        title: 'Fail-Closed Independent Acceptance',
        description: 'Orchestrators never declare their own success. Acceptance gates execute outside the agent context on immutable audit artifacts.',
        badge: 'Security'
      }
    ],
    techStack: ['Python', 'Rust', 'PostgreSQL', 'FastAPI', 'Docker', 'Distributed Systems'],
    codeSnippet: {
      filename: 'metao/control_plane/governor.py',
      language: 'python',
      code: `class OrchestratorGovernor:
    """Enforces runtime qualifications and independent acceptance gates."""
    
    async def evaluate_execution(
        self,
        task_id: UUID,
        budget: ExecutionBudget,
        evidence: EvidenceBundle
    ) -> AcceptanceDecision:
        # Enforce fail-closed budget boundary
        if evidence.consumed_tokens > budget.max_tokens:
            return AcceptanceDecision.BLOCKED(
                reason="BUDGET_EXCEEDED",
                details={"consumed": evidence.consumed_tokens, "limit": budget.max_tokens}
            )
            
        # Verify deterministic qualification checks
        verification_passed = await self.verifier.validate_cryptographic_trace(evidence)
        if not verification_passed:
            return AcceptanceDecision.BLOCKED(reason="UNVERIFIED_TRACE")
            
        # Independent acceptance decision decoupled from agent output
        return AcceptanceDecision.ACCEPTED(evidence_hash=evidence.compute_digest())`
    },
    metrics: [
      { label: 'Migration Path', value: 'Py → Rust', detail: 'Core validation engine' },
      { label: 'Acceptance Mode', value: 'Fail-Closed', detail: 'Zero self-certification' },
      { label: 'State Durability', value: 'Transactional', detail: 'PostgreSQL state journal' }
    ]
  },
  {
    id: 'rpy',
    name: 'Rpy',
    icon: '⚖️',
    subtitle: 'RAG platform for legal-process analysis',
    category: 'RAG & Data',
    description: 'Backend system built with FastAPI, PostgreSQL 16 and pgvector, designed around tenant isolation, provenance, concurrency, privacy and reproducible operations.',
    githubUrl: 'https://github.com/oigorbrito/rpy',
    status: 'offline path qualified and reproducible',
    badgeColor: 'cyan',
    engineeringFocus: [
      'hybrid lexical + vector retrieval',
      'PostgreSQL-backed job queue',
      'FOR UPDATE SKIP LOCKED',
      'fencing, retry & reclaim',
      'claim-level provenance',
      'confidential provider-free path',
      'Docker / CI / backup & restore',
      'API, runtime & supply-chain hardening'
    ],
    architectureHighlights: [
      {
        title: 'PostgreSQL FOR UPDATE SKIP LOCKED Queue',
        description: 'Zero external queue dependencies: concurrency-safe background processing leveraging ACID guarantees with lease heartbeats and orphaned worker reclamation.',
        badge: 'PostgreSQL 16'
      },
      {
        title: 'Hybrid Lexical + Vector Retrieval',
        description: 'Combines pgvector HNSW indexing with PostgreSQL Full-Text Search (tsvector/tsquery) via reciprocal rank fusion (RRF) for legal document precision.',
        badge: 'pgvector + BM25'
      },
      {
        title: 'Claim-Level Provenance Tracking',
        description: 'Every generated legal synthesis links directly to exact bounding boxes and verbatim paragraph source spans, enabling deterministic fact-checking.',
        badge: 'Auditability'
      },
      {
        title: 'Confidential Provider-Free Path',
        description: 'Air-gapped execution mode supporting local embedding models and offline LLMs without sending sensitive legal transcripts to 3rd-party cloud APIs.',
        badge: 'Privacy'
      }
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL 16', 'pgvector', 'Docker', 'Prisma / SQL'],
    codeSnippet: {
      filename: 'rpy/workers/queue.sql',
      language: 'sql',
      code: `-- Concurrency-safe job dequeuing with fencing token & lease reclaim
WITH next_job AS (
  SELECT id
  FROM document_processing_jobs
  WHERE status = 'queued'
     OR (status = 'processing' AND heartbeat_at < NOW() - INTERVAL '5 minutes')
  ORDER BY priority DESC, created_at ASC
  FOR UPDATE SKIP LOCKED
  LIMIT 1
)
UPDATE document_processing_jobs
SET status = 'processing',
    heartbeat_at = NOW(),
    fencing_token = fencing_token + 1,
    worker_id = $1
WHERE id = (SELECT id FROM next_job)
RETURNING id, tenant_id, document_uri, fencing_token;`
    },
    metrics: [
      { label: 'Job Queue Concurrency', value: 'SKIP LOCKED', detail: 'PostgreSQL native concurrency' },
      { label: 'Retrieval Strategy', value: 'Hybrid RRF', detail: 'Lexical + pgvector HNSW' },
      { label: 'Data Boundary', value: 'Strict Tenant', detail: 'Row-level isolation' }
    ]
  },
  {
    id: 'smag',
    name: 'SMAG',
    icon: '🛡️',
    subtitle: 'Supervised Machine Agent Governance',
    category: 'Governance',
    description: 'Governance layer for AI coding executors. The executor writes code; SMAG supervises permissions, isolated work, checks, evidence, acceptance, and promotion.',
    githubUrl: 'https://github.com/oigorbrito/smag',
    status: 'installable governed execution product',
    badgeColor: 'amber',
    engineeringFocus: [
      'installable CLI',
      'executor discovery',
      'governed routing',
      'isolated staging',
      'policy enforcement',
      'explicit PASS / BLOCKED / FAILED outcomes',
      'evidence-backed acceptance',
      'OpenCode / mini-SWE / SWE-agent scopes'
    ],
    architectureHighlights: [
      {
        title: 'Separation of Executor from Supervisor',
        description: 'The code-generating agent is treated as an untrusted worker running inside an isolated staging jail with strictly monitored file system syscalls.',
        badge: 'Sandbox'
      },
      {
        title: 'Explicit Outcome Tri-State',
        description: 'Replaces ambiguous natural language agent summaries with explicit machine-verified outcomes: PASS, BLOCKED, or FAILED.',
        badge: 'Zero Ambiguity'
      },
      {
        title: 'Evidence-Backed Acceptance Gate',
        description: 'Diff inspection, test suite pass logs, and linter AST changes are packaged into a signed bundle before any code is promoted to main branch.',
        badge: 'Cryptographic'
      },
      {
        title: 'Flexible Executor Scope Adapters',
        description: 'Supports OpenCode, mini-SWE, and SWE-agent workloads via unified routing protocols.',
        badge: 'CLI Tooling'
      }
    ],
    techStack: ['Python', 'CLI Tooling', 'Docker / Cgroups', 'Git Plumbing', 'Bash / Linux'],
    codeSnippet: {
      filename: 'smag/cli/commands/verify.py',
      language: 'python',
      code: `def enforce_promotion_policy(staging_diff: GitDiff, test_results: TestSummary) -> Outcome:
    """Supervises agent modifications before branch promotion."""
    if not test_results.all_passed:
        return Outcome.FAILED(
            code="TEST_REGRESSION",
            failures=test_results.failed_tests
        )
        
    forbidden_mutations = staging_diff.find_files_matching([
        "**/governance/*",
        ".github/workflows/*",
        "*.lock"
    ])
    if forbidden_mutations:
        return Outcome.BLOCKED(
            code="PROTECTED_PATH_VIOLATION",
            files=forbidden_mutations
        )
        
    return Outcome.PASS(evidence_token=sign_diff_hash(staging_diff))`
    },
    metrics: [
      { label: 'Architecture Model', value: 'Untrusted Agent', detail: 'Supervisor-governed execution' },
      { label: 'Interface', value: 'Installable CLI', detail: 'Terminal-first workflow' },
      { label: 'Outcomes', value: 'PASS/BLOCKED/FAIL', detail: 'Zero fuzzy answers' }
    ]
  },
  {
    id: 'codepro',
    name: 'CodePro',
    icon: '🧪',
    subtitle: 'Evidence-driven software-agent chassis',
    category: 'Experimental Chassis',
    description: 'Executor-agnostic experimental platform for testing software-agent mechanisms through falsifiable hypotheses and reproducible evidence.',
    status: 'active experimental chassis · private repository',
    badgeColor: 'purple',
    engineeringFocus: [
      'task characterization',
      'progress / stagnation assessment',
      'bounded routing',
      'recovery decisions',
      'patch verification',
      'context & handoff accounting',
      'benchmark fidelity',
      'executor cost / capability studies'
    ],
    architectureHighlights: [
      {
        title: 'Falsifiable Hypothesis Engine',
        description: 'Agent trajectories are evaluated against explicit hypotheses regarding context window utilization, backtracking efficiency, and test regression rates.',
        badge: 'Scientific Method'
      },
      {
        title: 'Stagnation & Loop Detection',
        description: 'Real-time telemetry detects semantic cycling, repetitive edit loops, and unproductive diff thrashing to abort early and conserve token budgets.',
        badge: 'Cost Control'
      },
      {
        title: 'Benchmark Fidelity Harness',
        description: 'Strict isolation prevents benchmark contamination or leakage when evaluating complex multi-step code generation tasks.',
        badge: 'Evaluation'
      }
    ],
    techStack: ['Python', 'Telemetry', 'AST Analysis', 'Benchmark Harnesses', 'PostgreSQL'],
    codeSnippet: {
      filename: 'codepro/telemetry/stagnation.py',
      language: 'python',
      code: `def calculate_trajectory_entropy(trajectory: List[AgentAction]) -> float:
    """Detects unproductive semantic looping in coding agent loops."""
    recent_diffs = [action.diff_fingerprint for action in trajectory[-5:]]
    if len(set(recent_diffs)) <= 2:
        # Agent is oscillating between two non-working patches
        raise StagnationException(
            reason="SEMANTIC_THRASHING_DETECTED",
            suggested_action="ROLLBACK_AND_REPLAN"
        )
    return compute_progress_gradient(trajectory)`
    },
    metrics: [
      { label: 'Evaluation Model', value: 'Falsifiable', detail: 'Empirical benchmark fidelity' },
      { label: 'Loop Detection', value: 'AST Thrash-Safe', detail: 'Semantic stagnation abort' },
      { label: 'Access Tier', value: 'Private Research', detail: 'Chassis laboratory' }
    ]
  }
];

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'podium7',
    name: 'Podium7',
    icon: '🏎️',
    subtitle: 'Automotive knowledge engineering platform',
    category: 'Domain Engineering',
    description: 'Evidence-driven automotive knowledge engineering, multi-source reconciliation, identity contracts, provenance, review, and controlled export.',
    status: 'operational pipeline',
    badgeColor: 'blue',
    engineeringFocus: [
      'multi-source entity reconciliation',
      'deterministic vehicle identity contracts',
      'provenance tracking across fragmented feeds',
      'human-in-the-loop review queues',
      'controlled export pipelines'
    ],
    architectureHighlights: [
      {
        title: 'Identity Contract Reconciliation',
        description: 'Reconciles conflicting multi-source vehicle specifications into unified canonical representations with conflict resolution trees.',
        badge: 'Entity Matching'
      }
    ],
    techStack: ['C#', 'ASP.NET Core', 'PostgreSQL', 'REST APIs', 'ETL Pipelines']
  },
  {
    id: 'bpt2',
    name: 'BPT2 / Bom Pra Ti',
    icon: '🛍️',
    subtitle: 'Backend + public web product engineering',
    category: 'Domain Engineering',
    description: 'Backend + public web product engineering, PostgreSQL, HTTP integration, recommendation/search experiments, accessibility, and architecture studies.',
    status: 'production architecture study',
    badgeColor: 'teal',
    engineeringFocus: [
      'PostgreSQL data modeling & indexing',
      'HTTP integration & resilient 3rd party APIs',
      'recommendation & hybrid search experiments',
      'accessibility standards (WCAG AAA)',
      'modular architecture decoupling'
    ],
    architectureHighlights: [
      {
        title: 'Resilient HTTP Integration & Indexing',
        description: 'High-availability backend designed for high read concurrency with PostgreSQL full-text search indexing and idempotent webhook ingest.',
        badge: 'Concurrency'
      }
    ],
    techStack: ['C#', '.NET', 'PostgreSQL', 'FastAPI', 'REST APIs', 'Docker']
  },
  {
    id: 'smag-rex',
    name: 'SMAG-ReX',
    icon: '⚡',
    subtitle: 'SWE-ReX runtime qualification & experimentation',
    category: 'Governance',
    description: 'Runtime qualification and experimentation derived from the SWE-ReX ecosystem, with explicit upstream, compatibility, and release boundaries.',
    githubUrl: 'https://github.com/oigorbrito/smag-rex',
    status: 'active qualification testbed',
    badgeColor: 'amber',
    engineeringFocus: [
      'runtime qualification harness',
      'upstream compatibility boundaries',
      'deterministic benchmark replay',
      'release gating'
    ],
    architectureHighlights: [
      {
        title: 'SWE-ReX Upstream Governance',
        description: 'Automated compatibility verification ensuring extensions to the SWE-ReX benchmark adhere to immutable upstream qualification specs.',
        badge: 'Benchmark Replay'
      }
    ],
    techStack: ['Python', 'Docker', 'Linux Sandboxing', 'CI/CD']
  }
];
