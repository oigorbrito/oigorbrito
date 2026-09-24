# Igor Brito

### Backend & AI Systems Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Igor%20Brito-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/euigorbrito/)
[![GitHub](https://img.shields.io/badge/GitHub-oigorbrito-181717?logo=github&logoColor=white)](https://github.com/oigorbrito)

I build backend systems and AI infrastructure with a focus on **agentic systems, AI governance, RAG, distributed execution, evaluation, reliability, and evidence-driven software engineering**.

My work spans traditional backend engineering in **C# / ASP.NET Core** and experimental AI systems in **Python and Rust**, with particular attention to explicit contracts, reproducible evidence, safe execution, and operational correctness.

---

## Featured Projects

### [MetaO](https://github.com/oigorbrito/metaO)

**Meta-orchestrator / control plane for pluggable agent orchestrators.**

Designed to select, govern, supervise, and independently accept the work of different AI-agent runtimes without coupling the core to one framework.

**Highlights**
- framework-neutral control plane
- runtime selection and qualification
- policy, budget, failover, and recovery boundaries
- durable execution and state
- evidence normalization and independent acceptance
- benchmark ingestion and empirical qualification
- Python implementation with Rust migration work

```text
Mission
  ↓
Strategy / Selection
  ↓
Policy / Budget
  ↓
Runtime Adapter
  ↓
Orchestrator
  ↓
Evidence
  ↓
Independent Acceptance
```

---

### [Rpy](https://github.com/oigorbrito/rpy)

**RAG service for legal-process consultation and summarization.**

Built with **Python, FastAPI, PostgreSQL 16, and pgvector**, with explicit security, tenancy, concurrency, provenance, and operational constraints.

**Highlights**
- hybrid lexical + vector retrieval
- PostgreSQL-backed durable job queue
- `FOR UPDATE SKIP LOCKED`, fencing, retry, heartbeat, and reclaim
- tenant-scoped authorization
- idempotent external callbacks
- provider-free path for confidential processes
- claim-level provenance and factual validation
- Docker, migrations, CI, backup/restore, and release qualification
- API/runtime/supply-chain hardening

---

### [SMAG](https://github.com/oigorbrito/smag)

**Supervised Machine Agent Governance.**

A governance and control-plane layer for AI coding executors.

SMAG supervises permissions, isolated execution, audit, validation, evidence, and promotion instead of acting as the coding model itself.

```text
Task
  ↓
Policy & Safety
  ↓
AI Coding Executor
  ↓
Isolated Staging
  ↓
Checks & Audit
  ↓
Acceptance
  ↓
Promote / Block
```

**Highlights**
- installable CLI
- governed executor discovery and routing
- isolated staging and promotion
- explicit PASS / BLOCKED / FAILED outcomes
- evidence-backed operational qualification
- integration work across OpenCode, mini-SWE-agent, and SWE-agent scopes

---

### CodePro

**Executor-agnostic software-engineering chassis for controlled AI-agent experiments.**

CodePro explores software-agent mechanisms through explicit hypotheses, controlled treatments, reproducible workloads, and promotion only after independent acceptance.

```text
HYPOTHESIS
    ↓
IMPLEMENTATION
    ↓
EXECUTION
    ↓
VERIFICATION
    ↓
INDEPENDENT ACCEPTANCE
    ↓
PROMOTION
```

**Current areas**
- task characterization
- progress / stagnation detection
- bounded routing and escalation
- recovery decisions
- patch verification
- handoff and context accounting
- executor qualification
- benchmark fidelity
- cost / capability experiments
- retrieval and context-memory experiments

> Currently maintained in a private repository.

---

## Other Engineering Projects

### Podium7
Evidence-driven automotive knowledge system for acquisition, reconciliation, provenance, review, and controlled export of multi-source data.

### BPT2 / Bom Pra Ti
Automotive product platform spanning backend, public web, PostgreSQL, HTTP integrations, recommendation/search experiments, accessibility, and evidence-based architecture decisions.

### [SMAG-ReX](https://github.com/oigorbrito/smag-rex)
Runtime qualification and experimentation work derived from the SWE-ReX ecosystem, with explicit compatibility, release, and upstream-boundary handling.

---

## Engineering Principles

I prefer systems where implementation status, execution evidence, verification, acceptance, and promotion are treated as different states:

```text
IMPLEMENTED != EXECUTED
EXECUTED    != VERIFIED
VERIFIED    != ACCEPTED
ACCEPTED    != PROMOTED
```

That principle shows up repeatedly across my projects in testing, release qualification, runtime governance, benchmark reproduction, and architecture decisions.

---

## Tech Stack

**Backend**  
`C#` · `ASP.NET Core` · `Python` · `FastAPI` · `Rust`

**Data**  
`PostgreSQL` · `pgvector` · `Prisma`

**AI Engineering**  
`RAG` · `LLMs` · `Agentic Systems` · `AI Governance` · `Evaluation` · `MCP`

**Infrastructure & Engineering**  
`Docker` · `GitHub Actions` · `CI/CD` · `REST APIs` · `Testing` · `Observability`

**Frontend**  
`TypeScript` · `Next.js`

---

## Areas of Focus

- Backend Engineering
- AI Engineering
- Agentic Systems
- Coding Agents
- AI Governance
- RAG
- Distributed Systems
- Software Architecture
- Evaluation & Benchmarking
- Reliability Engineering
- Developer Tooling

---

## Contact

- [LinkedIn](https://www.linkedin.com/in/euigorbrito/)
- [GitHub](https://github.com/oigorbrito)
