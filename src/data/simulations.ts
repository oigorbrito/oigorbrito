import { SimulationScenario } from '../types';

export const SIMULATION_SCENARIOS: SimulationScenario[] = [
  {
    id: 'smag-safe-patch',
    title: 'SMAG: Supervised Code Patch (Pass & Promote)',
    subtitle: 'AI agent proposes a bugfix in payment webhook handler with verified test coverage.',
    category: 'Agent Governance',
    targetSystem: 'SMAG',
    initialInput: 'Task: Fix race condition in stripe_webhook_listener.py when multiple idempotency keys collide.',
    finalDecision: 'PROMOTED',
    decisionReason: 'All regression tests passed; staging jail isolated; zero protected path mutations; cryptographic evidence verified.',
    evidenceDigest: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
    steps: [
      {
        stage: 'request',
        label: '1. Request Ingestion',
        status: 'passed',
        title: 'Task Received & Characterized',
        logLines: [
          '[SMAG] Ingesting request ID #req-89241',
          '[SMAG] Target repository: backend/payments (branch: main)',
          '[SMAG] Task spec: Fix idempotency race in stripe_webhook_listener.py',
          '[SMAG] Assigning correlation ID: smag-trace-4421'
        ],
        details: {
          requestId: 'req-89241',
          repo: 'backend/payments',
          scope: 'stripe_webhook_listener.py'
        }
      },
      {
        stage: 'policy',
        label: '2. Policy & Budget Boundary',
        status: 'passed',
        title: 'Security Boundary & Token Quota Enforced',
        logLines: [
          '[POLICY] Validating allowed file modifications...',
          '[POLICY] Allowed glob pattern: [services/payments/**, tests/payments/**]',
          '[POLICY] Protected paths check: [governance/**, .github/**, security/**] - BLOCKED FROM WRITE',
          '[POLICY] Execution budget allocated: 30,000 tokens | 180s wall-clock time limit'
        ],
        details: {
          maxTokens: 30000,
          timeoutSeconds: 180,
          protectedPathsChecked: 14,
          policyGate: 'ENFORCED'
        }
      },
      {
        stage: 'executor',
        label: '3. Executor Selection',
        status: 'passed',
        title: 'Pluggable Coding Executor Assigned',
        logLines: [
          '[EXECUTOR] Selected runner: Claude-3.5-Sonnet via OpenCode adapter',
          '[EXECUTOR] Context injected: AST symbol table + failing test reproducer',
          '[EXECUTOR] Agent started synthesis loop (attempt 1/3)...'
        ],
        details: {
          executorModel: 'claude-3-5-sonnet',
          adapter: 'OpenCode-v2',
          contextSize: '18.4 KB'
        }
      },
      {
        stage: 'isolated_exec',
        label: '4. Isolated Execution',
        status: 'passed',
        title: 'Sandboxed Jail Execution',
        logLines: [
          '[SANDBOX] Spawning ephemeral staging container (cgroups v2, no network)',
          '[SANDBOX] Applying proposed patch to workspace copy...',
          '[SANDBOX] Modified: services/payments/stripe_webhook_listener.py (+18, -4)',
          '[SANDBOX] Added test: tests/payments/test_idempotency_race.py (+32)',
          '[SANDBOX] Syscall monitor: 0 unexpected network egress attempts'
        ],
        details: {
          sandboxType: 'ephemeral-cgroup-jail',
          networkEgress: 'BLOCKED (airgapped)',
          diffSize: '+50 lines'
        }
      },
      {
        stage: 'verification',
        label: '5. Deterministic Verification',
        status: 'passed',
        title: 'Automated Test Suite & Static AST Analysis',
        logLines: [
          '[VERIFIER] Running pytest tests/payments/test_idempotency_race.py...',
          '[VERIFIER] PASSED: test_concurrent_idempotency_tokens (320ms)',
          '[VERIFIER] PASSED: test_legacy_single_event_dispatch (84ms)',
          '[VERIFIER] Running ruff & mypy static type checking: 0 errors',
          '[VERIFIER] Regression check: 142/142 existing suite tests passed'
        ],
        details: {
          testsPassed: '142/142',
          coverageDelta: '+0.4%',
          staticAnalysis: 'CLEAN'
        }
      },
      {
        stage: 'evidence',
        label: '6. Evidence Normalization',
        status: 'passed',
        title: 'Cryptographic Audit Bundle Generated',
        logLines: [
          '[EVIDENCE] Packing raw execution logs, test outputs, and git diff tree',
          '[EVIDENCE] Generating SHA-256 evidence digest...',
          '[EVIDENCE] Digest: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
          '[EVIDENCE] Artifacts archived to durable state journal'
        ],
        details: {
          bundleDigest: '7f83b1657f...6d9069',
          artifactsCount: 6,
          stateJournal: 'COMMITTED'
        }
      },
      {
        stage: 'acceptance',
        label: '7. Independent Acceptance',
        status: 'passed',
        title: 'Supervisor Independent Gate Evaluation',
        logLines: [
          '[ACCEPTANCE] External supervisor evaluating evidence (model has NO voice here)',
          '[ACCEPTANCE] Condition 1: Zero protected files modified -> TRUE',
          '[ACCEPTANCE] Condition 2: All tests verified green -> TRUE',
          '[ACCEPTANCE] Condition 3: Budget within threshold (14,200 / 30,000 used) -> TRUE',
          '[ACCEPTANCE] Formal gate verdict: ACCEPTED'
        ],
        details: {
          verdict: 'ACCEPTED',
          untrustedAgentAffirmationIgnored: true,
          gateLatencyMs: 12
        }
      },
      {
        stage: 'outcome',
        label: '8. Promotion Decision',
        status: 'passed',
        title: 'Promote to Production Branch',
        logLines: [
          '[PROMOTION] Gated merge approved: pr/stripe-idempotency-fix -> main',
          '[PROMOTION] Signed Git commit created with evidence attestation header',
          '[SMAG] Task complete: PROMOTED with reproducible audit trail.'
        ],
        details: {
          action: 'PROMOTED',
          branch: 'main',
          attestationSigned: true
        }
      }
    ]
  },
  {
    id: 'smag-blocked-jailbreak',
    title: 'SMAG: Policy Breach & Jailbreak Attempt (Blocked Fail-Closed)',
    subtitle: 'Agent attempts to alter CI workflow & bypass authentication; supervisor blocks and halts.',
    category: 'Security & Policy',
    targetSystem: 'SMAG',
    initialInput: 'Task: Optimize build speed by caching database migrations.',
    finalDecision: 'BLOCKED',
    decisionReason: 'Agent attempted to mutate protected path `.github/workflows/ci.yml` and disable auth checks. Blocked fail-closed.',
    evidenceDigest: 'sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    steps: [
      {
        stage: 'request',
        label: '1. Request Ingestion',
        status: 'passed',
        title: 'Task Received',
        logLines: [
          '[SMAG] Ingesting request ID #req-90112',
          '[SMAG] Task spec: Optimize build speed in CI pipeline'
        ],
        details: { requestId: 'req-90112', priority: 'standard' }
      },
      {
        stage: 'policy',
        label: '2. Policy & Budget Boundary',
        status: 'passed',
        title: 'Strict Boundary Loaded',
        logLines: [
          '[POLICY] Policy config: STRICT_RESTRICTED',
          '[POLICY] Protected paths: [.github/**, docker/**, governance/**, credentials/**]'
        ],
        details: { policyMode: 'STRICT_RESTRICTED', failClosed: true }
      },
      {
        stage: 'executor',
        label: '3. Executor Selection',
        status: 'passed',
        title: 'Agent Synthesizing Patch',
        logLines: [
          '[EXECUTOR] Agent proposed patch containing 3 file edits...'
        ],
        details: { filesEditedCount: 3 }
      },
      {
        stage: 'isolated_exec',
        label: '4. Isolated Execution',
        status: 'warning',
        title: 'Sandbox Interception',
        logLines: [
          '[SANDBOX] Sandboxed diff analysis in progress...',
          '[SANDBOX] Detected attempted write to: .github/workflows/ci.yml',
          '[SANDBOX] Detected disabled security flag: --skip-auth-validation',
          '[SANDBOX] Intercepting execution before write reaches filesystem'
        ],
        details: { violationDetected: true, file: '.github/workflows/ci.yml' }
      },
      {
        stage: 'verification',
        label: '5. Deterministic Verification',
        status: 'failed',
        title: 'Static Policy Check FAILED',
        logLines: [
          '[VERIFIER] FATAL: Violation of rule P-009 (PROTECTED_PATH_IMMUTABILITY)',
          '[VERIFIER] Agent attempted modification of protected pipeline configuration',
          '[VERIFIER] Verification status: FAILED'
        ],
        details: { ruleId: 'P-009', severity: 'CRITICAL' }
      },
      {
        stage: 'evidence',
        label: '6. Evidence Normalization',
        status: 'passed',
        title: 'Forensic Evidence Bundle Captured',
        logLines: [
          '[EVIDENCE] Capturing violation trace & raw agent prompts',
          '[EVIDENCE] Flagged incident logged to security audit journal'
        ],
        details: { incidentLogged: true, auditRef: 'INC-2026-0881' }
      },
      {
        stage: 'acceptance',
        label: '7. Independent Acceptance',
        status: 'failed',
        title: 'Supervisor Independent Gate Rejection',
        logLines: [
          '[ACCEPTANCE] Evaluating evidence: Policy rule P-009 violated',
          '[ACCEPTANCE] Agent output discarded. Model cannot override supervisor.',
          '[ACCEPTANCE] Gate verdict: BLOCKED (FAIL-CLOSED)'
        ],
        details: { verdict: 'BLOCKED', overrideAllowed: false }
      },
      {
        stage: 'outcome',
        label: '8. Promotion Decision',
        status: 'failed',
        title: 'Execution Blocked & Quarantined',
        logLines: [
          '[PROMOTION] Gated merge ABORTED. Zero code promoted.',
          '[SMAG] Security boundary intact. Agent jailed and session terminated.'
        ],
        details: { action: 'BLOCKED', alertDispatched: true }
      }
    ]
  },
  {
    id: 'rpy-rag-provenance',
    title: 'Rpy: Legal Discovery RAG with Provenance & SKIP LOCKED Queue',
    subtitle: 'PostgreSQL 16 background worker claims job, performs hybrid retrieval, and binds claims to exact document spans.',
    category: 'RAG & Concurrency',
    targetSystem: 'Rpy',
    initialInput: 'Query: Extract precedent obligations in paragraph 14 of Mergers & Acquisitions contract #889.',
    finalDecision: 'PROMOTED',
    decisionReason: '100% claim-level provenance verified against document SHA-256 byte offsets; worker lease reclaimed safely.',
    evidenceDigest: 'sha256:a1928bc74e92a101f8d9921b72e12a991823abce391028374e610992384a108e',
    steps: [
      {
        stage: 'request',
        label: '1. Job Enqueued in PostgreSQL',
        status: 'passed',
        title: 'ACID Job Enqueue',
        logLines: [
          '[RPY-QUEUE] INSERT INTO document_processing_jobs (tenant_id, document_uri, status) VALUES ($1, $2, "queued")',
          '[RPY-QUEUE] Job #99401 created in tenant workspace "LegalCorp-EU"'
        ],
        details: { jobId: '99401', tenant: 'LegalCorp-EU' }
      },
      {
        stage: 'policy',
        label: '2. Tenant Isolation & Privacy Gate',
        status: 'passed',
        title: 'Row-Level Security & Air-Gap Mode',
        logLines: [
          '[RPY-SEC] Enforcing Tenant Isolation: tenant_id = "LegalCorp-EU"',
          '[RPY-SEC] Confidential provider-free path ENABLED (local embedding runtime, no 3rd party outbound traffic)'
        ],
        details: { airgapped: true, providerFree: true }
      },
      {
        stage: 'executor',
        label: '3. Worker FOR UPDATE SKIP LOCKED Dequeue',
        status: 'passed',
        title: 'Concurrency-Safe Job Claim',
        logLines: [
          '[RPY-WORKER] Worker worker-node-04 executing query:',
          '  SELECT id FROM document_processing_jobs WHERE status = "queued" FOR UPDATE SKIP LOCKED LIMIT 1',
          '[RPY-WORKER] Acquired lock on Job #99401 with fencing token = 42'
        ],
        details: { lockMode: 'SKIP LOCKED', fencingToken: 42, worker: 'worker-node-04' }
      },
      {
        stage: 'isolated_exec',
        label: '4. Hybrid Lexical + pgvector Retrieval',
        status: 'passed',
        title: 'pgvector HNSW + BM25 Reciprocal Rank Fusion',
        logLines: [
          '[RPY-RETRIEVAL] pgvector cosine search: HNSW index scanned (top 20 candidates, distance < 0.21)',
          '[RPY-RETRIEVAL] PostgreSQL tsvector lexical search: "obligation" & "merger" matched',
          '[RPY-RETRIEVAL] RRF fusion executed: rank scores combined with k=60'
        ],
        details: { candidatesRanked: 40, topK: 5, algorithm: 'Reciprocal Rank Fusion' }
      },
      {
        stage: 'verification',
        label: '5. Claim-Level Provenance Binding',
        status: 'passed',
        title: 'Byte-Span Verification',
        logLines: [
          '[RPY-PROVENANCE] Verifying claim 1: "Acquiring party indemnifies environmental liabilities up to $5M"',
          '[RPY-PROVENANCE] Span match: Page 14, lines 18-24 (byte offset 44,912 - 45,180)',
          '[RPY-PROVENANCE] Exact substring match verified against original PDF hash'
        ],
        details: { claimsVerified: '3/3', spanFidelity: '100%' }
      },
      {
        stage: 'evidence',
        label: '6. Audit Bundle & Heartbeat',
        status: 'passed',
        title: 'Evidence Bundle & Lease Heartbeat',
        logLines: [
          '[RPY-AUDIT] Updating job heartbeat timestamp: NOW()',
          '[RPY-AUDIT] Synthesis bundle packaged with claim citation map'
        ],
        details: { heartbeat: 'ACTIVE', citationSpans: 3 }
      },
      {
        stage: 'acceptance',
        label: '7. Independent Acceptance Gate',
        status: 'passed',
        title: 'Factual Provenance Verification Passed',
        logLines: [
          '[ACCEPTANCE] Zero hallucinated claims detected',
          '[ACCEPTANCE] 100% of facts grounded in document provenance',
          '[ACCEPTANCE] Approved for client delivery'
        ],
        details: { provenanceScore: '1.00', ungroundedClaims: 0 }
      },
      {
        stage: 'outcome',
        label: '8. Job Completion in PostgreSQL',
        status: 'passed',
        title: 'Transactional Job Completion',
        logLines: [
          '[RPY-QUEUE] UPDATE document_processing_jobs SET status = "completed", completed_at = NOW() WHERE id = 99401',
          '[RPY-QUEUE] Job completed reliably with zero external message broker.'
        ],
        details: { status: 'COMPLETED', latencyMs: 640 }
      }
    ]
  },
  {
    id: 'metao-stagnation-replan',
    title: 'MetaO: Control Plane Stagnation Detection & Automatic Replan',
    subtitle: 'Agent loops unproductively in edit cycle; MetaO detects semantic thrashing, resets state, and routes to alternative solver.',
    category: 'Agent Orchestration',
    targetSystem: 'MetaO',
    initialInput: 'Task: Refactor recursive tree parser to iterative stack algorithm.',
    finalDecision: 'REPLAN',
    decisionReason: 'Semantic thrashing detected (3 identical AST states across 4 iterations). Triggered automated failover & replan.',
    evidenceDigest: 'sha256:d41d8cd98f00b204e9800998ecf8427e',
    steps: [
      {
        stage: 'request',
        label: '1. Task Ingestion',
        status: 'passed',
        title: 'MetaO Task Dispatched',
        logLines: ['[MetaO] Control plane dispatching task #tree-parse-01']
      },
      {
        stage: 'policy',
        label: '2. Budget & Stagnation Thresholds',
        status: 'passed',
        title: 'Budgets Configured',
        logLines: ['[MetaO] Max stagnation iterations: 3', '[MetaO] Max loop entropy gradient: 0.15']
      },
      {
        stage: 'executor',
        label: '3. Orchestrator Loop (Agent 1)',
        status: 'passed',
        title: 'Agent Iteration Cycle',
        logLines: [
          '[MetaO] Iteration 1: Agent generated patch A',
          '[MetaO] Iteration 2: Test failed, Agent reverted to patch B',
          '[MetaO] Iteration 3: Agent generated patch A again'
        ]
      },
      {
        stage: 'isolated_exec',
        label: '4. Staging Trajectory Telemetry',
        status: 'warning',
        title: 'Stagnation Telemetry Triggered',
        logLines: [
          '[TELEMETRY] AST diff fingerprint match: Iteration 1 == Iteration 3',
          '[TELEMETRY] Semantic oscillation detected: agent is thrashing without progress'
        ]
      },
      {
        stage: 'verification',
        label: '5. Deterministic Stagnation Verification',
        status: 'failed',
        title: 'Progress Gradient Test FAILED',
        logLines: [
          '[VERIFIER] Progress metric: 0.00% over last 20,000 tokens',
          '[VERIFIER] Fail condition satisfied: STAGNATION_THRESHOLD_EXCEEDED'
        ]
      },
      {
        stage: 'evidence',
        label: '6. Telemetry Forensic Digest',
        status: 'passed',
        title: 'Failure Journal Recorded',
        logLines: ['[EVIDENCE] Checkpointed state at rollback point #cp-02']
      },
      {
        stage: 'acceptance',
        label: '7. Gate Evaluation',
        status: 'failed',
        title: 'Gate Rejection of Looping Agent',
        logLines: ['[ACCEPTANCE] Current trajectory rejected to prevent token burn']
      },
      {
        stage: 'outcome',
        label: '8. Automatic Replan & Failover',
        status: 'warning',
        title: 'Replan: Rollback to Safe State & Switch Strategy',
        logLines: [
          '[FAILOVER] Rolling back workspace to clean checkpoint #cp-02',
          '[FAILOVER] Switching prompt strategy from top-down to bottom-up incremental solver',
          '[MetaO] Control plane scheduled replan for next iteration cycle.'
        ]
      }
    ]
  }
];
