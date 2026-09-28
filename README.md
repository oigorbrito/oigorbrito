<div align="center">

# Igor Brito

### Backend & AI Systems Engineer

Building **reliable backend products and AI systems** with an emphasis on evidence, provenance, controlled execution, and operational clarity.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Igor%20Brito-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/euigorbrito/)
[![GitHub](https://img.shields.io/badge/GitHub-oigorbrito-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/oigorbrito)

`C# / .NET` · `Python` · `PostgreSQL` · `FastAPI` · `RAG` · `AI Systems` · `Evaluation`

</div>

---

## What I build

My project work spans conventional backend/product engineering and AI systems:

- **Backend & product systems** — APIs, domain boundaries, PostgreSQL, queues, concurrency, authentication, idempotency, integrations, CI and operational tooling.
- **RAG & knowledge systems** — hybrid retrieval, provenance, privacy boundaries, canonical identity and reproducible ingestion.
- **AI-agent infrastructure** — supervision, runtime qualification, policy/budget boundaries, evidence and independent acceptance.
- **Evidence-driven engineering** — controlled comparisons, explicit failure classes, benchmark fidelity and claims limited to executed evidence.

A recurring rule across the projects is simple:

```text
IMPLEMENTED != EXECUTED
EXECUTED    != VERIFIED
VERIFIED    != ACCEPTED
ACCEPTED    != PROMOTED
```

---

## Featured engineering work

<table>
<tr>
<td width="50%" valign="top">

### 🚗 BPT2 + Podium7

**Automotive marketplace + knowledge platform**

Two bounded systems working together: **Podium7** produces reconciled automotive knowledge and provenance; **BPT2** consumes versioned contracts into its canonical catalog and marketplace.

**BPT2 engineering**

- .NET 10 / ABP 10.6 modular monolith
- PostgreSQL 17 + Next.js public web
- OIDC Authorization Code + PKCE
- Seller / Buyer / Listing / Lead workflows
- optimistic concurrency and ownership boundaries
- durable PostgreSQL work queues with `FOR UPDATE SKIP LOCKED`
- idempotent retry / delivery / webhook paths

**Podium7 integration**

- multi-source reconciliation and provenance
- producer-owned external identity
- versioned feed contracts
- real `Podium7 -> HTTP -> BPT2 -> PostgreSQL` integration path
- repository-topology decisions evaluated with measured evidence

**Status:** BPT2 post-MVP operational baseline · private source

</td>
<td width="50%" valign="top">

### 🧪 [CodePro](https://github.com/oigorbrito/codepro)

**Evidence-driven software-agent chassis**

Executor-agnostic engineering chassis for testing software-agent mechanisms through explicit contracts, falsifiable hypotheses and reproducible evidence.

**Engineering focus**

- deterministic task characterization
- progress / stagnation assessment
- bounded routing and escalation
- execution telemetry
- explicit scope / authority / budget contracts
- executor qualification separate from availability
- patch verification and evidence persistence
- independent acceptance
- preregistered experimental protocols

**Status:** active empirical chassis · real-task executor validation is the next evidence boundary

</td>
</tr>

<tr>
<td width="50%" valign="top">

### ⚖️ [Rpy](https://github.com/oigorbrito/rpy)

**RAG backend for legal-process analysis**

Backend system built with **FastAPI, PostgreSQL 16 and pgvector**, designed around tenant isolation, provenance, concurrency, privacy and reproducible operations.

**Engineering focus**

- hybrid lexical + vector retrieval
- PostgreSQL-backed job queue
- `FOR UPDATE SKIP LOCKED`
- fencing, retry and reclaim
- claim/source provenance
- confidential provider-free execution path
- Docker / CI / backup & restore
- API and runtime hardening

**Status:** offline path qualified and reproducible

</td>
<td width="50%" valign="top">

### 🧠 [MetaO](https://github.com/oigorbrito/metaO)

**Meta-orchestrator / AI control plane**

Framework-neutral control plane for selecting, governing, supervising and independently accepting work from pluggable agent orchestrators.

**Engineering focus**

- runtime admission, selection and qualification
- policy / budget boundaries
- durable mission state
- fencing, restart and recovery
- framework adapters
- evidence normalization
- independent acceptance
- runtime certification / revocation

**Status:** post-MVP operational baseline

</td>
</tr>
</table>

---

## Additional engineering

| Project | What it demonstrates |
|---|---|
| **[RJ](https://github.com/oigorbrito/RJ)** | .NET 10 / C# 14, ASP.NET Core, modular monolith boundaries, architecture tests, deterministic build and legal RAG work. |
| **SMAG** | Installable governance layer for coding executors: permissions, isolated work, explicit outcomes, evidence and acceptance. Private source. |
| **[NDV](https://github.com/oigorbrito/NDV)** | Research program on minimum-sufficient capability composition and the verified-success / cost / latency frontier. Research-only by design. |
| **NaIA** | Product/research track around intent, planning, policy, tools, execution and persisted evidence. Private source. |
| **MEDVI** | Full-stack product work with Next.js, PostgreSQL/Prisma, authentication, payments, security hardening and tested failure paths. Private source. |

---

## Engineering approach

I try to keep architecture subordinate to evidence rather than the other way around:

```text
problem
  ↓
explicit hypothesis / invariant
  ↓
smallest useful implementation
  ↓
execution
  ↓
verification
  ↓
evidence
  ↓
keep / change / remove
```

For AI systems, executor output is treated as an observation, not as acceptance authority. For conventional backend systems, the same discipline appears in ownership boundaries, idempotency, concurrency tests, migration gates and explicit external-side-effect semantics.

---

## Stack

<table>
<tr>
<td valign="top"><strong>Backend</strong><br><br>
<code>C#</code> <code>.NET</code> <code>ASP.NET Core</code><br>
<code>ABP</code><br>
<code>Python</code> <code>FastAPI</code><br>
<code>TypeScript</code> <code>Next.js</code>
</td>

<td valign="top"><strong>Data</strong><br><br>
<code>PostgreSQL</code><br>
<code>pgvector</code><br>
<code>EF Core</code> <code>Prisma</code><br>
<code>SQL</code>
</td>

<td valign="top"><strong>AI Engineering</strong><br><br>
<code>RAG</code> <code>LLMs</code><br>
<code>Agent Systems</code><br>
<code>Governance</code><br>
<code>Evaluation</code> <code>Benchmarks</code>
</td>

<td valign="top"><strong>Platform</strong><br><br>
<code>Docker</code><br>
<code>GitHub Actions</code><br>
<code>CI/CD</code><br>
<code>Linux</code> <code>Git</code>
</td>
</tr>
</table>

---

## Current technical focus

`Backend Engineering` · `AI Systems` · `RAG` · `Agent Infrastructure` · `Distributed Systems` · `Evaluation` · `Reliability`

---

<div align="center">

### Contact

[LinkedIn](https://www.linkedin.com/in/euigorbrito/) · [GitHub](https://github.com/oigorbrito)

<sub>Building systems where “the agent said it finished” is not considered a verification strategy.</sub>

</div>
