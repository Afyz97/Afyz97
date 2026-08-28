<h1 align="center">Amir Nadzim</h1>
<p align="center">Full-Stack Engineer · Enterprise Web Systems · AI Engineering</p>

<p align="center"><em>Show what I can build, not who I built it for.</em></p>

---

## About

I design and build **integrated organisational platforms** — systems where membership,
finance, programmes, commerce, documents and communications stop being separate
spreadsheets and become one coherent application.

Most of my work is private (client and organisation systems), so this profile describes
projects by **system type, architecture and capability** rather than by name.

```text
FOCUS AREAS

Enterprise Web Platforms   Modular monoliths, role-based access, multi-interface delivery
Commerce & Payments        Storefronts, POS, inventory, invoicing, gateway integration
Process Automation         Workflow engines, background jobs, document generation
AI Engineering             Agent orchestration, skills, MCP integrations, dev automation
Security Governance        ISMS documentation, IT audit tooling, risk registers
```

---

## Selected Systems & Architectures

### Organisation Management System

> A comprehensive digital ecosystem designed to manage the operational, administrative,
> financial, membership, programme and public-facing functions of an organisation
> through an integrated web platform.

```text
┌────────────────────────────────────────────┐
│  Organisation Management System            │
├────────────────────────────────────────────┤
│ TYPE                                       │
│ Integrated Enterprise Web Platform         │
│                                            │
│ INTERFACES                                 │
│ Web · Portal · PWA · Admin                 │
│                                            │
│ CAPABILITIES                               │
│ Membership                                 │
│ Programmes                                 │
│ Finance                                    │
│ Commerce                                   │
│ Payments                                   │
│ Filing                                     │
│ Meetings                                   │
│ Reporting                                  │
│                                            │
│ ARCHITECTURE                               │
│ Modular · Role-Based · API-Ready           │
└────────────────────────────────────────────┘
```

**Architecture**

```text
                     USERS
                       │
         ┌─────────────┼─────────────┐
         ↓             ↓             ↓
    Public Web       Portal         PWA
         │             │             │
         └─────────────┼─────────────┘
                       ↓
                Application Core
                       │
    ┌──────────────────┼──────────────────┐
    ↓                  ↓                  ↓
Membership         Programmes          Finance
    │                  │                  │
    ├─────────┬────────┼─────────┬────────┤
    ↓         ↓        ↓         ↓        ↓
 Access    Meetings   Shop    Donations  Funds
                       │
                       ↓
                Payment Services
```

**Module map**

```text
Organisation Management System
│
├── Public Website
├── Member / User Portal
├── Progressive Web Application
├── Administration Dashboard
│
├── Membership Management
├── User & Access Management
├── Committee Management
├── Programme / Activity Management
├── Finance Management
├── Fund Management
├── Donation Management
├── E-Commerce
├── Meetings
├── Document / Filing Management
├── Payment Gateway Integration
├── Reporting
├── Notifications
└── System Configuration
```

**Stack**

```text
Architecture   Laravel modular monolith
Frontend       Bootstrap · JavaScript · PWA
Database       MySQL
Integrations   Payment gateways · Email · Notifications · PDF generation · Background jobs
Security       Role-based access control · Permissions · Authentication · Audit logging
```

<details>
<summary><strong>Case study — the same system, told as a problem</strong></summary>

**Problem**

Organisations often operate membership, finance, programmes, documentation and
communications through disconnected processes: parallel spreadsheets, manual receipts,
chat-based approvals, and no single source of truth for who a member is or what they owe.

**Solution**

An integrated digital ecosystem combining public-facing services, internal administration
and member self-service through a unified architecture and one identity model.

**Interfaces**

```text
Public Website
Member Portal
Progressive Web Application
Administration Dashboard
```

**Core capabilities**

```text
Membership          Users              Roles & Permissions
Programmes          Finance            Payments
Donations           Commerce           Meetings
Documents           Reporting          Notifications
```

**Engineering focus**

```text
Modular Architecture         Payment Integration
Database Design              Progressive Web App
Business Process Automation  Background Processing
Role-Based Access            Auditability
                             Responsive UI
```

**Representative data model** (sample values only — no production data)

```text
User Name:   Alex Morgan
Member ID:   MEM-2026-001
Programme:   Leadership Workshop
Fund:        Community Fund
Amount:      RM 100.00
```

</details>

---

### Other Systems

| System | Type | Notable engineering |
|---|---|---|
| **Academic Administration System** | Institutional workflow platform | Multi-role approval chains, structured record management, generated documents |
| **Postgraduate Management Platform** | Research administration | Supervision tracking, milestone workflows, submission and review cycles |
| **Multi-Type Event Management Platform** | Event & registration system | Configurable event types, registration flows, capacity and attendance handling |
| **Commerce & Operations Platform** | E-commerce + operations | Catalogue, cart, order lifecycle, fulfilment, gateway integration |
| **POS & Inventory Management System** | Retail operations | Stock movement, variants, reconciliation, receipt and shift handling |
| **Finance Management Platform** | Financial operations | Ledgers, fund segregation, invoicing and quotations, reconciliation, reporting |
| **Payment Integration Platform** | Payment services layer | Gateway abstraction, webhook handling, idempotency, retries, reconciliation |
| **Administrative Workflow System** | Internal process automation | Form → approval → document → archive pipelines with audit trails |
| **AI Development Framework** | AI engineering workspace | Agent orchestration, shared skills, MCP integrations, automated workflows |
| **Information Security Management Toolkit** | Governance & compliance | ISMS documentation, control mapping, risk register, audit evidence tracking |

---

## Project Workspace

```text
PROJECT WORKSPACE

📁 enterprise-systems/
│
├── Organisation Management System
├── Academic Administration System
└── Administrative Workflow Platform

📁 commerce/
│
├── E-Commerce Platform
├── POS System
├── Inventory Management
├── Invoice & Quotation Management
└── Payment Integration Platform

📁 events/
│
├── Multi-Type Event Management Platform
├── Registration Management
└── PWA Event Experience

📁 ai-engineering/
│
├── AI Development Framework
├── Agent Orchestration
├── Shared Agent Skills
└── Development Automation

📁 governance/
│
├── ISMS Documentation Framework
├── IT Audit Toolkit
├── Risk Management
└── Security Governance
```

---

## AI Development Framework

An engineering workspace rather than a single application — a structured way to make
AI assistance repeatable across projects instead of ad-hoc per prompt.

```text
AI Development Framework
│
├── Orchestrator
├── Specialised Agents
├── Skills
├── Plugins
├── MCP Integrations
├── Shared Context
├── Development Standards
├── Project Profiles
├── Automated Workflows
└── Knowledge Management
```

---

## Toolbox

```text
Languages     PHP · JavaScript · SQL · Bash
Frameworks    Laravel · Livewire · Bootstrap · Tailwind
Data          MySQL · MariaDB · Redis
Delivery      Git · Composer · npm · Vite · Queues & schedulers
Practices     Modular architecture · RBAC · Audit logging · Background processing · PWA
```

---

<sub>Private systems on this profile are described generically by architecture and capability.
No client, organisation, institution, production domain or operational data is disclosed.
See <a href="docs/PRIVACY-REVIEW.md">docs/PRIVACY-REVIEW.md</a>.</sub>
