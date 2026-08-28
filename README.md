<p align="center">
  <img src="assets/header.svg" width="100%" alt="AMIR OS — Software × Systems × Automation × AI">
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/-HOME-0E151D?style=for-the-badge&labelColor=38BDF8" alt="Home"></a>
  <a href="#systems"><img src="https://img.shields.io/badge/-SYSTEMS-0E151D?style=for-the-badge&labelColor=0EA5E9" alt="Systems"></a>
  <a href="#ai-lab"><img src="https://img.shields.io/badge/-AI%20LAB-0E151D?style=for-the-badge&labelColor=A78BFA" alt="AI Lab"></a>
  <a href="#stack"><img src="https://img.shields.io/badge/-STACK-0E151D?style=for-the-badge&labelColor=34D399" alt="Stack"></a>
  <a href="#architecture"><img src="https://img.shields.io/badge/-ARCHITECTURE-0E151D?style=for-the-badge&labelColor=818CF8" alt="Architecture"></a>
  <a href="#activity"><img src="https://img.shields.io/badge/-ACTIVITY-0E151D?style=for-the-badge&labelColor=F472B6" alt="Activity"></a>
  <a href="#roadmap"><img src="https://img.shields.io/badge/-ROADMAP-0E151D?style=for-the-badge&labelColor=FBBF24" alt="Roadmap"></a>
  <a href="#connect"><img src="https://img.shields.io/badge/-CONNECT-0E151D?style=for-the-badge&labelColor=7DD3FC" alt="Connect"></a>
</p>

<p align="center">
  <img src="assets/boot.svg" width="100%" alt="Boot sequence — modules and services loading, all subsystems ready">
</p>

<p align="center">
  <img src="assets/whoami.svg" width="100%" alt="whoami — full-stack engineer, systems designer, enterprise web and AI engineering">
</p>

> I build **integrated organisational platforms** — systems where membership, finance,
> programmes, commerce, documents and communications stop being separate spreadsheets
> and become one coherent application.
>
> Most of my work is private, so everything here is described by **system type,
> architecture and capability** rather than by owner.

---

## Status

<p align="center">
  <img src="assets/dashboard.svg" width="100%" alt="System status — Laravel core, AI agents, automation, PWA delivery and data reporting active; security and ISMS exploring">
</p>

<p align="center">
  <img src="assets/generated/focus.svg" width="100%" alt="Current focus, generated from data/profile.json">
</p>

| Subsystem | State | What it means in practice |
|---|:--:|---|
| **Laravel core** | 🟢 `ACTIVE` | Modular monolith, domain-separated modules, service + repository boundaries |
| **AI agents** | 🟢 `ACTIVE` | Orchestrated agents with shared skills, standards and MCP integrations |
| **Automation** | 🟢 `ACTIVE` | Queues, scheduled jobs, document pipelines, CI workflows |
| **PWA delivery** | 🟢 `ACTIVE` | Installable, offline-aware member-facing interfaces |
| **Data / reporting** | 🟢 `ACTIVE` | Schema design, reporting queries, exports |
| **Security / ISMS** | 🟡 `EXPLORING` | Control mapping, audit evidence, risk registers |

<sub>The focus panel above is generated from <a href="data/profile.json">data/profile.json</a> by a GitHub Action — edit the JSON, the widget follows.</sub>

---

## Systems

<p align="center">
  <img src="assets/apps.svg" width="100%" alt="Application launcher — six installed systems shown by capability">
</p>

<sub>🔒 Every system below is a real build described generically. Organisation, client, domain and repository identities are deliberately withheld.</sub>

<details>
<summary><b>▸ Organisation Management System</b> — <i>integrated enterprise web platform</i></summary>

<br>

An integrated digital ecosystem covering the operational, administrative, financial,
membership, programme and public-facing functions of an organisation.

| | |
|---|---|
| **Type** | Integrated enterprise web platform |
| **Interfaces** | Public Website · Member Portal · PWA · Admin Console |
| **Architecture** | Modular monolith · Role-based · API-ready · Event-driven jobs |
| **Scale** | 14 functional modules across 4 interfaces |

**Capabilities**

![Membership](https://img.shields.io/badge/Membership-0E151D?style=flat-square&labelColor=0B0F14)
![Users & Access](https://img.shields.io/badge/Users%20%26%20Access-0E151D?style=flat-square&labelColor=0B0F14)
![Committees](https://img.shields.io/badge/Committees-0E151D?style=flat-square&labelColor=0B0F14)
![Programmes](https://img.shields.io/badge/Programmes-0E151D?style=flat-square&labelColor=0B0F14)
![Finance](https://img.shields.io/badge/Finance-0E151D?style=flat-square&labelColor=0B0F14)
![Funds](https://img.shields.io/badge/Funds-0E151D?style=flat-square&labelColor=0B0F14)
![Donations](https://img.shields.io/badge/Donations-0E151D?style=flat-square&labelColor=0B0F14)
![E-Commerce](https://img.shields.io/badge/E--Commerce-0E151D?style=flat-square&labelColor=0B0F14)
![Meetings](https://img.shields.io/badge/Meetings-0E151D?style=flat-square&labelColor=0B0F14)
![Filing](https://img.shields.io/badge/Filing-0E151D?style=flat-square&labelColor=0B0F14)
![Payments](https://img.shields.io/badge/Payments-0E151D?style=flat-square&labelColor=0B0F14)
![Reporting](https://img.shields.io/badge/Reporting-0E151D?style=flat-square&labelColor=0B0F14)
![Notifications](https://img.shields.io/badge/Notifications-0E151D?style=flat-square&labelColor=0B0F14)
![Configuration](https://img.shields.io/badge/Configuration-0E151D?style=flat-square&labelColor=0B0F14)

**Problem** — membership, finance, programmes and documentation run as disconnected
processes: parallel spreadsheets, manual receipts, chat-based approvals, no single
source of truth for who a member is or what they owe.

**Solution** — one identity model and one ledger behind four interfaces, so a member
record, a payment and a programme registration are the same data seen from different
angles.

**Engineering focus** — modular architecture · database design · business process
automation · role-based access · payment integration · PWA · background processing ·
auditability · responsive UI.

**Representative data** *(invented sample values — never production data)*

```text
User Name:   Alex Morgan
Member ID:   MEM-2026-001
Programme:   Leadership Workshop
Fund:        Community Fund
Amount:      RM 100.00
```

</details>

<details>
<summary><b>▸ Commerce + Operations Platform</b> — <i>storefront, POS and inventory on one ledger</i></summary>

<br>

| | |
|---|---|
| **Type** | Commerce and operations platform |
| **Interfaces** | Storefront · POS Terminal · Back Office |
| **Architecture** | Shared catalogue · Stock ledger · Gateway abstraction · Idempotent callbacks |

**Capabilities** — catalogue and variants · cart and checkout · order lifecycle and
fulfilment · stock movement and reconciliation · invoicing and quotations · payment
gateway integration · receipts and shift handling.

**Engineering focus** — the hard part is not the storefront, it is keeping one stock
figure honest while a POS terminal, a web order and a manual adjustment all move it.
Movements are recorded as an append-only ledger; gateway callbacks are idempotent so a
retried webhook cannot double-credit an order.

</details>

<details>
<summary><b>▸ AI Development Framework</b> — <i>agent orchestration workspace</i></summary>

<br>

| | |
|---|---|
| **Type** | AI engineering workspace |
| **Interfaces** | CLI · Editor integration · Automation hooks |
| **Architecture** | Orchestrator · Specialised agents · Shared context · Skill and plugin registry |

**Capabilities** — agent orchestration · reusable skills and plugins · MCP integrations ·
project profiles · development standards · automated workflows · knowledge management.

**Engineering focus** — making AI assistance *repeatable* rather than improvised per
prompt: standards live in the framework, not in whoever happens to be typing.
See [AI Lab](#ai-lab) for the pipeline.

</details>

<details>
<summary><b>▸ Event Management Platform</b> — <i>multi-type events, registration and check-in</i></summary>

<br>

| | |
|---|---|
| **Type** | Event and registration system |
| **Interfaces** | Public listing · Registration flow · PWA check-in · Organiser console |
| **Architecture** | Configurable event types · Capacity rules · Stateful registration · Notification pipeline |

**Capabilities** — multi-type event configuration · registration and ticketing flows ·
capacity and waitlist handling · attendance capture · notifications and reminders ·
post-event reporting.

**Engineering focus** — one registration engine that adapts to event types rather than a
new codebase per event; check-in works from a phone on unreliable venue connectivity.

</details>

<details>
<summary><b>▸ Governance + Security Toolkit</b> — <i>ISMS documentation, controls and audit evidence</i></summary>

<br>

| | |
|---|---|
| **Type** | Governance and compliance tooling |
| **Interfaces** | Documentation set · Register views · Audit exports |
| **Architecture** | Control mapping · Risk register · Evidence trail · Review cycles |

**Capabilities** — ISMS documentation framework · control mapping · risk register and
treatment · audit evidence tracking · IT audit checklists · policy review cycles.

**Engineering focus** — turning compliance from a document graveyard into a queryable
structure: controls map to evidence, evidence maps to review dates.

</details>

<details>
<summary><b>▸ Membership + User Portal</b> — <i>one identity across web, portal and app</i></summary>

<br>

| | |
|---|---|
| **Type** | Identity and self-service surface |
| **Interfaces** | Member Portal · PWA · Admin Console |
| **Architecture** | Single identity model · Role and permission matrix · Session and device handling |

**Capabilities** — registration and verification · profile self-service · roles and
permissions · statements and history · notifications · audit logging.

**Engineering focus** — one account model shared across three interfaces, so permissions
are defined once and enforced everywhere rather than re-implemented per surface.

</details>

### Workspace

```text
📁 enterprise-systems/          📁 commerce/
├── Organisation Management     ├── E-Commerce Platform
├── Academic Administration     ├── POS System
├── Membership + User Portal    ├── Inventory Management
└── Administrative Workflow     ├── Invoice + Quotation
                                └── Payment Integration

📁 events/                      📁 ai-engineering/
├── Event Management Platform   ├── AI Development Framework
├── Registration Management     ├── Agent Orchestration
└── PWA Event Experience        ├── Shared Agent Skills
                                └── Development Automation

📁 governance/
├── ISMS Documentation Framework
├── IT Audit Toolkit
├── Risk Management
└── Security Governance
```

---

## Architecture

How a multi-interface organisational platform hangs together.

```mermaid
flowchart TD
    U([Users])
    U --> W[Public Website]
    U --> P[Member Portal]
    U --> A[Progressive Web App]
    U --> D[Admin Console]

    W --> CORE
    P --> CORE
    A --> CORE
    D --> CORE

    CORE{{Application Core<br/>routing · policies · services}}

    CORE --> M[Membership]
    CORE --> PR[Programmes]
    CORE --> F[Finance]
    CORE --> C[Commerce]
    CORE --> G[Governance]

    M --> ACC["Access & Roles"]
    PR --> MT[Meetings]
    F --> FU["Funds & Donations"]
    C --> SH["Shop & Orders"]
    G --> AU[Audit Log]

    FU --> PAY[[Payment Services]]
    SH --> PAY
    PAY --> RECON["Reconciliation & Reporting"]

    CORE --> Q[("Queues & Jobs")]
    Q --> DOC[Documents & PDFs]
    Q --> NOT[Notifications]
```

<details>
<summary><b>▸ Request lifecycle</b> — how one action moves through the system</summary>

<br>

```mermaid
sequenceDiagram
    participant U as User
    participant I as Interface
    participant C as Core
    participant Q as Queue
    participant S as Payment Service

    U->>I: Submit action
    I->>C: Validate + authorise (RBAC)
    C->>C: Apply domain rules
    C-->>I: Immediate response
    C->>Q: Dispatch side effects
    Q->>S: Payment intent
    S-->>Q: Callback (idempotent)
    Q->>C: Reconcile + write audit entry
    Q-->>U: Notification + document
```

The interface never waits on a gateway, a PDF or an email. Everything slow is queued;
everything that changes money or membership writes an audit entry.

</details>

<details>
<summary><b>▸ Design principles</b></summary>

<br>

| Principle | Applied as |
|---|---|
| **One identity** | A member is one record, seen differently by four interfaces |
| **Modular boundaries** | Domain modules with explicit service interfaces, not a shared soup of models |
| **Everything slow is queued** | Payments, documents, notifications and exports run as jobs |
| **Auditable by default** | State changes to money, membership and access are logged, not inferred |
| **Permission once, enforced everywhere** | RBAC evaluated in the core, never re-implemented per surface |
| **Offline-tolerant edges** | PWA surfaces assume the venue Wi-Fi will fail |

</details>

---

## AI Lab

<p align="center">
  <img src="assets/ai-lab.svg" width="100%" alt="AI orchestration — orchestrator dispatching to plan, implement, review and ship agents over a shared context, skills and MCP layer">
</p>

```mermaid
flowchart LR
    O{{Orchestrator}} --> P[Plan]
    O --> I[Implement]
    O --> R[Review]
    O --> S[Ship]
    P --> B[(Shared Layer<br/>context · skills · MCP · standards)]
    I --> B
    R --> B
    S --> B
    B -.feedback.-> O
```

| Layer | Responsibility |
|---|---|
| **Orchestrator** | Intent routing, standards enforcement, task decomposition |
| **Specialised agents** | Plan · implement · review · ship, each with a narrow remit |
| **Skills & plugins** | Reusable procedures instead of re-explaining the same workflow |
| **MCP integrations** | Tool access to real project surfaces |
| **Shared context** | Project profiles and engineering standards every agent inherits |
| **Knowledge management** | Decisions captured where the next session will find them |

<sub>Architecture shown conceptually — no private repositories or client workloads referenced.</sub>

---

## Stack

<p align="center">
  <img src="assets/stack.svg" width="100%" alt="Installed stack grouped into backend, frontend, database, AI engineering, infrastructure and governance">
</p>

**Backend**

![Laravel](https://img.shields.io/badge/Laravel-0B0F14?style=for-the-badge&logo=laravel&logoColor=FF2D20)
![PHP](https://img.shields.io/badge/PHP-0B0F14?style=for-the-badge&logo=php&logoColor=777BB4)
![REST APIs](https://img.shields.io/badge/REST%20APIs-0B0F14?style=for-the-badge&logo=fastapi&logoColor=38BDF8)
![Queues](https://img.shields.io/badge/Queues%20%26%20Jobs-0B0F14?style=for-the-badge&logo=celery&logoColor=34D399)

**Frontend**

![Blade](https://img.shields.io/badge/Blade-0B0F14?style=for-the-badge&logo=laravel&logoColor=FF2D20)
![Livewire](https://img.shields.io/badge/Livewire-0B0F14?style=for-the-badge&logo=livewire&logoColor=FB70A9)
![Bootstrap](https://img.shields.io/badge/Bootstrap-0B0F14?style=for-the-badge&logo=bootstrap&logoColor=7952B3)
![Tailwind](https://img.shields.io/badge/Tailwind-0B0F14?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)
![JavaScript](https://img.shields.io/badge/JavaScript-0B0F14?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![PWA](https://img.shields.io/badge/PWA-0B0F14?style=for-the-badge&logo=pwa&logoColor=5A0FC8)

**Database**

![MySQL](https://img.shields.io/badge/MySQL-0B0F14?style=for-the-badge&logo=mysql&logoColor=4479A1)
![MariaDB](https://img.shields.io/badge/MariaDB-0B0F14?style=for-the-badge&logo=mariadb&logoColor=C0765A)
![Redis](https://img.shields.io/badge/Redis-0B0F14?style=for-the-badge&logo=redis&logoColor=DC382D)

**AI Engineering**

![Agent Orchestration](https://img.shields.io/badge/Agent%20Orchestration-0B0F14?style=for-the-badge&logo=probot&logoColor=A78BFA)
![MCP](https://img.shields.io/badge/MCP%20Integrations-0B0F14?style=for-the-badge&logo=modelcontextprotocol&logoColor=818CF8)
![Skills](https://img.shields.io/badge/Skills%20%26%20Plugins-0B0F14?style=for-the-badge&logo=codemagic&logoColor=C4B5FD)

**Infrastructure**

![Git](https://img.shields.io/badge/Git-0B0F14?style=for-the-badge&logo=git&logoColor=F05032)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-0B0F14?style=for-the-badge&logo=githubactions&logoColor=2088FF)
![Composer](https://img.shields.io/badge/Composer-0B0F14?style=for-the-badge&logo=composer&logoColor=885630)
![npm](https://img.shields.io/badge/npm-0B0F14?style=for-the-badge&logo=npm&logoColor=CB3837)
![Vite](https://img.shields.io/badge/Vite-0B0F14?style=for-the-badge&logo=vite&logoColor=646CFF)

**Governance / Security**

![RBAC](https://img.shields.io/badge/RBAC-0B0F14?style=for-the-badge&logo=auth0&logoColor=FBBF24)
![Audit Logging](https://img.shields.io/badge/Audit%20Logging-0B0F14?style=for-the-badge&logo=datadog&logoColor=FCD34D)
![ISMS](https://img.shields.io/badge/ISMS-0B0F14?style=for-the-badge&logo=owasp&logoColor=FBBF24)

<sub>Stack groups are defined in <a href="data/stack.json">data/stack.json</a>.</sub>

---

## Activity

<p align="center">
  <img src="assets/activity.svg" width="100%" alt="Focus allocation across enterprise systems, AI engineering, commerce, PWA interfaces and governance">
</p>

<p align="center">
  <img src="assets/generated/snake.svg" width="100%" alt="Contribution graph rendered as a snake">
</p>

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Afyz97&show_icons=true&hide_border=true&bg_color=0B0F14&title_color=38BDF8&icon_color=A78BFA&text_color=8FA5B8&ring_color=38BDF8" height="165" alt="GitHub stats">
  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=Afyz97&layout=compact&hide_border=true&bg_color=0B0F14&title_color=38BDF8&text_color=8FA5B8" height="165" alt="Top languages">
</p>

<sub>The focus split above is self-declared, not live telemetry. The panels below it read public GitHub data only — private repositories are never enumerated.</sub>

---

## Roadmap

<details open>
<summary><b>▸ Now building</b></summary>

<br>

- [x] Multi-interface organisational platform architecture
- [x] Payment gateway abstraction with idempotent callbacks
- [x] Reusable agent framework with shared skills and standards
- [ ] Deeper reporting and export layer across modules
- [ ] Formalised ISMS control-to-evidence mapping

</details>

<details>
<summary><b>▸ Next</b></summary>

<br>

- [ ] API-first extraction of core domain modules
- [ ] Automated regression coverage on money and membership paths
- [ ] Agent-assisted code review integrated into CI
- [ ] Offline-first improvements for field / venue use

</details>

---

## Connect

<p align="center">
  <a href="https://github.com/Afyz97"><img src="https://img.shields.io/badge/GitHub-0B0F14?style=for-the-badge&logo=github&logoColor=E6EDF3" alt="GitHub"></a>
  <img src="https://img.shields.io/badge/Open%20to-Systems%20%26%20Platform%20Work-0B0F14?style=for-the-badge&labelColor=38BDF8" alt="Open to systems and platform work">
</p>

<p align="center">
  <sub>Add further contact badges in <a href="docs/CUSTOMIZATION.md">docs/CUSTOMIZATION.md</a> — kept minimal here by design.</sub>
</p>

<p align="center">
  <img src="assets/footer.svg" width="100%" alt="Show what I can build, not who I built it for">
</p>

<p align="center">
  <sub>
    Private systems are described generically by architecture and capability. No client, organisation,
    institution, production domain or operational data is disclosed —
    see <a href="docs/PRIVACY-REVIEW.md">the privacy review</a>.
  </sub>
</p>
