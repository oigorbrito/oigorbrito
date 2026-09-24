<div align="center">

# Igor Brito

### Backend & AI Systems Engineer

Building **backend platforms, RAG systems, AI-agent infrastructure, governance, evaluation, and reliable execution paths**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Igor%20Brito-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/euigorbrito/)
[![GitHub](https://img.shields.io/badge/GitHub-oigorbrito-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/oigorbrito)

`C# / .NET` · `Python` · `Rust` · `PostgreSQL` · `FastAPI` · `RAG` · `Agentic Systems`

</div>

---

## What I build

I work across conventional backend engineering and AI systems, with a recurring focus on:

- **AI control planes & agent governance** — selection, policy, budgets, recovery, evidence, acceptance, and promotion.
- **RAG & AI-backed products** — retrieval, provenance, factual validation, privacy boundaries, and provider integration.
- **Reliable backend systems** — PostgreSQL, APIs, queues, concurrency, idempotency, multi-tenancy, and operational tooling.
- **Evidence-driven engineering** — reproducible experiments, explicit failure classes, benchmark fidelity, and fail-closed decisions.

My professional background includes backend development with **C# / ASP.NET Core**, while my independent engineering work extends into **Python, Rust, distributed systems, developer tooling, and AI infrastructure**.

---

## Featured engineering work

<table>
<tr>
<td width="50%" valign="top">

### 🧠 [MetaO](https://github.com/oigorbrito/metaO)

**Meta-orchestrator / AI control plane**

Framework-neutral control plane for selecting, governing, supervising, and independently accepting work from pluggable agent orchestrators.

**Engineering focus**

- runtime selection & qualification
- policy / budget boundaries
- failover & recovery
- durable state
- evidence normalization
- independent acceptance
- benchmark ingestion
- Python + Rust migration work

**Status:** post-MVP operational baseline

</td>
<td width="50%" valign="top">

### ⚖️ [Rpy](https://github.com/oigorbrito/rpy)

**RAG platform for legal-process analysis**

Backend system built with **FastAPI, PostgreSQL 16 and pgvector**, designed around tenant isolation, provenance, concurrency, privacy and reproducible operations.

**Engineering focus**

- hybrid lexical + vector retrieval
- PostgreSQL-backed job queue
- `FOR UPDATE SKIP LOCKED`
- fencing, retry & reclaim
- claim-level provenance
- confidential provider-free path
- Docker / CI / backup & restore
- API, runtime & supply-chain hardening

**Status:** offline path qualified and reproducible

</td>
</tr>

<tr>
<td width="50%" valign="top">

### 🛡️ [SMAG](https://github.com/oigorbrito/smag)

**Supervised Machine Agent Governance**

Governance layer for AI coding executors. The executor writes code; SMAG supervises permissions, isolated work, checks, evidence, acceptance, and promotion.

**Engineering focus**

- installable CLI
- executor discovery
- governed routing
- isolated staging
- policy enforcement
- explicit PASS / BLOCKED / FAILED outcomes
- evidence-backed acceptance
- OpenCode / mini-SWE / SWE-agent scopes

**Status:** installable governed execution product

</td>
<td width="50%" valign="top">

### 🧪 CodePro

**Evidence-driven software-agent chassis**

Executor-agnostic experimental platform for testing software-agent mechanisms through falsifiable hypotheses and reproducible evidence.

**Engineering focus**

- task characterization
- progress / stagnation assessment
- bounded routing
- recovery decisions
- patch verification
- context & handoff accounting
- benchmark fidelity
- executor cost / capability studies

**Status:** active experimental chassis · private repository

</td>
</tr>
</table>

---

## The engineering pattern behind the projects

A recurring rule across my systems is that **activity is not evidence of correctness**:

```text
IMPLEMENTED != EXECUTED
EXECUTED    != VERIFIED
VERIFIED    != ACCEPTED
ACCEPTED    != PROMOTED
```

That separation shapes architecture, CI, experiments, release qualification, agent governance, and operational decisions.

For agent systems, the pattern typically becomes:

```text
Request
  ↓
Policy / Scope / Budget
  ↓
Executor or Orchestrator
  ↓
Isolated Execution
  ↓
Verification
  ↓
Evidence
  ↓
Independent Acceptance
  ↓
Promote / Replan / Block
```

---

## More projects

| Project | What it demonstrates |
|---|---|
| **Podium7** | Evidence-driven automotive knowledge engineering, multi-source reconciliation, identity contracts, provenance, review, and controlled export. |
| **BPT2 / Bom Pra Ti** | Backend + public web product engineering, PostgreSQL, HTTP integration, recommendation/search experiments, accessibility, and architecture studies. |
| **[SMAG-ReX](https://github.com/oigorbrito/smag-rex)** | Runtime qualification and experimentation derived from the SWE-ReX ecosystem, with explicit upstream, compatibility, and release boundaries. |

---

## Stack

<table>
<tr>
<td valign="top"><strong>Backend</strong><br><br>
<code>C#</code> <code>ASP.NET Core</code><br>
<code>Python</code> <code>FastAPI</code><br>
<code>Rust</code>
</td>

<td valign="top"><strong>Data</strong><br><br>
<code>PostgreSQL</code><br>
<code>pgvector</code><br>
<code>Prisma</code>
</td>

<td valign="top"><strong>AI Engineering</strong><br><br>
<code>RAG</code> <code>LLMs</code><br>
<code>Agentic Systems</code><br>
<code>AI Governance</code><br>
<code>Evaluation</code> <code>MCP</code>
</td>

<td valign="top"><strong>Platform</strong><br><br>
<code>Docker</code><br>
<code>GitHub Actions</code><br>
<code>CI/CD</code><br>
<code>REST APIs</code>
</td>
</tr>
</table>

---

## Current technical focus

`AI Systems` · `Backend Engineering` · `Agentic Infrastructure` · `RAG` · `Distributed Systems` · `Evaluation` · `Reliability` · `Developer Tooling`

---

<div align="center">

### Contact

[LinkedIn](https://www.linkedin.com/in/euigorbrito/) · [GitHub](https://github.com/oigorbrito)

<sub>Building systems where “the agent said it finished” is not considered a verification strategy.</sub>

</div>
