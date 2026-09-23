// Every word on the site lives here. Edit this file, not the components.

export const person = {
  name: 'Mortadha Hachani', // TODO confirm spelling / preferred form
  role: 'Full-stack & AI engineer',
  tagline:
    'I build things that have to work for real people — an AI tutor for Tunisian students, a governance platform for enterprise AI tooling, a telemedicine triage system. Shipped end to end: retrieval, API, UI, migrations, Docker, deploy.',
  location: 'Tunisia',
  email: 'hachanimedmortadha@outlook.com',
  available: 'Open to internships and junior roles',
};

export const links = [
  { label: 'GitHub', href: 'https://github.com/Mortadha994' },
  { label: 'Email', href: 'mailto:hachanimedmortadha@outlook.com' },
  { label: 'CV (PDF)', href: '/cv.pdf' },
];

// Numbers that sit under the hero. Keep them true or cut them.
export const stats = [
  { value: '5', label: 'Platforms shipped end to end' },
  { value: '5', label: 'Backend stacks worked in' },
  { value: 'FR / EN', label: 'Interfaces built bilingual' },
];

export type Shot = { src: string; alt: string; caption: string };

export type Project = {
  name: string;
  kind: string;
  year: string;
  blurb: string;
  problem: string;
  detail: { heading: string; body: string }[];
  stack: string[];
  shots: Shot[];
  href?: string;
  repo?: string;
  featured?: boolean;
  note?: string;
};

export const projects: Project[] = [
  {
    name: 'Fahem',
    kind: 'Personal project',
    year: '2026',
    featured: true,
    blurb:
      'An AI tutor that solves algorithmique homework in exactly the syntax a Tunisian student has been taught — grounded in the real curriculum, not in generic AI knowledge.',
    problem:
      'Ask a general chatbot for a 2ème Info exercise and it answers in whatever Python it likes: a for loop, a helper function, an f-string. All correct Python. All useless to a student who will be marked against the notation in their own textbook, and who has not been taught any of it yet.',
    detail: [
      {
        heading: 'Grounded in the student’s own chapter',
        body: 'Fahem retrieves the chapter the student is actually working through and constrains the answer to the syntax that chapter contains — Lire and Ecrire, ← for assignment, div and mod, the Objet | Nature/type declaration table. If a problem genuinely needs something the chapter has not covered, it says so instead of inventing it.',
      },
      {
        heading: 'A verdict you can check',
        body: 'A mechanical syntax checker puts a verdict under every answer — syntaxe du chapitre respectée, or the exact offending lines. A grounding strip opens to show the pinned syntax tables and the retrieved excerpts the answer was built on, so nothing has to be taken on faith.',
      },
      {
        heading: 'Three ways to ask',
        body: 'La solution gives the worked answer. Mode guidé walks four steps — comprendre, indice, squelette, solution — and stops where the student still has work to do. Ma réponse takes what the student wrote and corrects it line by line, naming the rule behind each correction.',
      },
      {
        heading: 'Built for how students actually work',
        body: 'Photograph the exercise or paste a screenshot and it reads the statement out of the image. Answers stream as they are written. Every model call queues for Groq, so a student hitting a busy service sees their place in line instead of an error.',
      },
    ],
    stack: [
      'FastAPI',
      'Python',
      'RAG / Chroma',
      'Groq',
      'React',
      'TypeScript',
      'Vite',
      'PostgreSQL',
      'Alembic',
      'Docker',
    ],
    shots: [
      {
        src: '/shots/fahem-hero.webp',
        alt: 'The Fahem landing page',
        caption: 'Landing — try it before any account',
      },
      {
        src: '/shots/fahem-guided.webp',
        alt: 'Guided mode walking through an exercise in four steps',
        caption: 'Mode guidé — four steps, not one answer',
      },
      {
        src: '/shots/fahem-dark.webp',
        alt: 'Feature cards in dark mode',
        caption: 'Dark theme, following the OS by default',
      },
      {
        src: '/shots/fahem-signin.webp',
        alt: 'The sign-in screen',
        caption: 'Google or email, with verification',
      },
    ],
    repo: 'https://github.com/Mortadha994/fahem',
  },
  {
    name: 'MCP Hub',
    kind: 'Internship project',
    year: '2026',
    featured: true,
    blurb:
      'A catalog, governance layer and runtime gateway for enterprise MCP servers — one governed source of truth in place of ad-hoc mcpServers JSON scattered across wiki pages.',
    problem:
      'An MCP server is only useful to an agent once it is discoverable, vetted, and reachable over a transport the agent can speak. Doing that by hand — copying command/args/env blocks, tracking who approved what, remembering which endpoints are safe — does not scale past a handful of servers.',
    detail: [
      {
        heading: 'A catalog with provenance',
        body: 'Every MCP is a database record: identity, provenance, documentation, governance ratings, and a cached tool manifest. Local servers are stdio processes the Hub spawns from an allowlisted interpreter; external ones are HTTPS endpoints reached over SSE or streamable HTTP.',
      },
      {
        heading: 'Governance that leaves a trail',
        body: 'Each MCP moves through an explicit lifecycle — draft, under review, approved, published — against an append-only audit log recording who changed what, with before and after snapshots. Gated servers take consumer access requests a platform admin approves or rejects.',
      },
      {
        heading: 'A runtime gateway, two shapes',
        body: 'Approved servers reach agents as OpenAPI HTTP tools through MCPO: either one process per MCP, each with its own port, PID and health status, or all of them behind a shared daemon whose config is regenerated atomically and hot-reloaded on every activation.',
      },
      {
        heading: 'One identity seam, two auth modes',
        body: 'Production callers carry a JWT; local dev reads a role from a header. Both resolve through a single seam, so every role check is written once and holds in both — and the role is always read from the linked user profile, never trusted from the token itself.',
      },
    ],
    stack: [
      'Django 6',
      'DRF',
      'Angular 22',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'MCPO',
      'OpenAPI',
      'JWT',
    ],
    shots: [
      {
        src: '/shots/mcp-hub-home.webp',
        alt: 'The MCP Hub dashboard',
        caption: 'Dashboard — the governed estate at a glance',
      },
      {
        src: '/shots/mcp-hub-catalog.webp',
        alt: 'The MCP Hub catalog listing servers with their lifecycle state',
        caption: 'Catalog — filtered by category, local vs. hosted',
      },
      {
        src: '/shots/mcp-hub-admin.webp',
        alt: 'The admin view for managing MCP servers',
        caption: 'Admin — lifecycle transitions and bridges',
      },
      {
        src: '/shots/mcp-hub-users.webp',
        alt: 'The user administration view',
        caption: 'Users — three roles, one permission model',
      },
    ],
    note: 'Screenshots are from the internship environment, with server names redacted. The repository is private.',
  },
  {
    name: 'ProManager',
    kind: 'Team project',
    year: '2026',
    featured: true,
    blurb:
      'A project-management platform where the AI does the staffing work — reading a CV into a skill profile, generating a realistic task breakdown, and explaining which member should take what and why.',
    problem:
      'Assigning work well means knowing who can actually do it and who is already buried. That knowledge lives in CVs nobody re-reads and in a board nobody aggregates, so tasks get handed to whoever is nearest rather than whoever fits.',
    detail: [
      {
        heading: 'A CV becomes a skill profile',
        body: 'Upload a PDF résumé and the AI service extracts its skills with PyMuPDF and Llama 3.3. The user reviews the suggestions as removable chips, adds their own, and saves the final list — which then feeds every assignment decision the platform makes.',
      },
      {
        heading: 'Assignment with a reason attached',
        body: 'Task generation produces a realistic breakdown and names who should take each item, justified against recorded skills and current workload. A separate risk pass flags bottlenecks, overloaded members and likely delays, with recommendations rather than just a score.',
      },
      {
        heading: 'A board that moves in real time',
        body: 'Drag-and-drop Kanban on the Angular CDK, grouped by sprint or backlog, with per-column scrolling and approval actions. A STOMP WebSocket pushes project refresh events, so a card moved by one member lands on everyone else’s board.',
      },
      {
        heading: 'Four roles and a control center',
        body: 'Owner, admin, member and viewer gate every action through route guards on the front and authorization services on the back, all behind Spring Security and JWT. An admin control center covers users, projects, tasks, logs and system-level actions.',
      },
      {
        heading: 'Model output treated as untrusted',
        body: 'The FastAPI service parses and normalizes every response into Pydantic models with strict JSON handling, and falls back to a second model under load — so a malformed or slow generation degrades the feature instead of the board.',
      },
    ],
    stack: ['Java', 'Spring Boot 3', 'Spring Security', 'JPA / Hibernate', 'Angular 17', 'TypeScript', 'FastAPI', 'Groq / Llama 3.3', 'PyMuPDF', 'PostgreSQL', 'STOMP / WebSocket', 'Docker', 'nginx'],
    shots: [
      {
        src: '/shots/pm-kanban.webp',
        alt: 'The Kanban board with four columns, priority badges and workload counters',
        caption: 'Kanban — four columns, priorities, workload counters',
      },
      {
        src: '/shots/pm-profile.webp',
        alt: 'The AI CV analyser, offering to extract skills from an uploaded PDF résumé',
        caption: 'Analyseur de CV — a PDF becomes a skill profile',
      },
      {
        src: '/shots/pm-dashboard.webp',
        alt: 'The admin dashboard with project, task and team counters',
        caption: 'Dashboard — projects, tasks and seats at a glance',
      },
      {
        src: '/shots/pm-login.webp',
        alt: 'The ProManager sign-in screen',
        caption: 'Sign-in, with demo access spelled out',
      },
    ],
    repo: 'https://github.com/Mortadha994/project-manager',
    note: 'Built with a teammate.',
  },
  {
    name: 'PlatformeMed',
    kind: 'Personal project',
    year: '2026',
    blurb:
      'A telemedicine platform where the AI does the triage — reading a patient’s symptoms in plain French to route them to the right specialist, at the right urgency, before a human ever reads the request.',
    problem:
      'A patient describing symptoms does not know which specialist they need, or how urgent it is. Getting that wrong wastes an appointment slot at best and delays a critical case at worst — and the triage happens before anyone qualified has looked at it.',
    detail: [
      {
        heading: 'Triage before booking',
        body: 'Symptoms typed in natural language are interpreted, matched to a speciality, and graded across four urgency levels from low to critical. The booking flow then offers the slots that fit, instead of a blank calendar and a guess.',
      },
      {
        heading: 'Three spaces, one codebase',
        body: 'Patients get a digital record, prescriptions, uploaded analyses and charted vitals — glycaemia, blood pressure, weight. Doctors get the day’s appointments, critical alerts, consultation write-ups and availability slots. Admins get platform statistics and system alerts.',
      },
      {
        heading: 'Diagnostic support, not diagnosis',
        body: 'For the doctor, the model synthesises the patient’s history into differential diagnoses — framed as input to a clinician’s judgement rather than a verdict, which is the only defensible shape for this in a medical setting.',
      },
      {
        heading: 'Isolation as a first-class concern',
        body: 'A role middleware gates every space, uploads are validated strictly, and patient data is isolated per account — the part of a medical app where a mistake is not a bug but a breach.',
      },
    ],
    stack: ['PHP 8.3', 'Laravel', 'Blade', 'Alpine.js', 'Tailwind', 'MySQL', 'Groq / Llama 3.3', 'Vite'],
    shots: [
      {
        src: '/shots/med-patient.webp',
        alt: 'The patient dashboard, with the next appointment, the AI assistant and recorded vitals',
        caption: 'Espace patient — next appointment, vitals, agenda',
      },
      {
        src: '/shots/med-ai.webp',
        alt: 'The AI orientation screen with symptoms described in free text',
        caption: 'Orientation IA — symptoms in, speciality and urgency out',
      },
      {
        src: '/shots/med-doctor.webp',
        alt: 'The doctor dashboard showing the day’s schedule and critical alerts',
        caption: 'Espace médecin — the day’s plan and critical alerts',
      },
      {
        src: '/shots/med-suivi.webp',
        alt: 'Health tracking with blood pressure and glycaemia charts against critical thresholds',
        caption: 'Suivi santé — constants charted against thresholds',
      },
    ],
    repo: 'https://github.com/Mortadha994/Atelier_medical',
  },
  {
    name: 'Espace Collaborateur',
    kind: 'Graduation project (PFE) · team',
    year: '2025',
    featured: true,
    blurb:
      'A Flutter app that collapses everything an employee needs into one place — accounts and cards, leave and training requests, meetings, internal chat and a wellbeing score — on an ASP.NET Core backend with real-time push.',
    problem:
      'An employee’s working life is scattered across systems that do not talk to each other: one for payroll and cards, another for leave requests, a third for meetings, a mailing list for announcements. Each one is a separate login and a separate habit, so most of them go unused.',
    detail: [
      {
        heading: 'Banking, HR and social in one shell',
        body: 'Accounts, cards and credit details sit beside leave, advance, authorisation and training requests, a shared calendar of meetings and events, and internal polls — each an EF Core entity with its own controller, surfaced through one bottom-nav app rather than one portal per department.',
      },
      {
        heading: 'Real time, not refresh',
        body: 'Two SignalR hubs push chat messages and notifications straight to the device, with local notifications on the Flutter side, so a meeting invitation or a reply lands without the user pulling to refresh.',
      },
      {
        heading: 'A wellbeing score that means something',
        body: 'The wellness module scores and charts how an employee is doing over time with gauges and timelines, rather than filing a survey result away where nobody sees it.',
      },
      {
        heading: 'State kept honest',
        body: 'Cubit holds app state, Dio handles the API layer, and JWTs are decoded client-side to gate what a user can reach — with full password reset, verification codes and profile editing behind it.',
      },
    ],
    stack: ['Flutter', 'Dart', 'Cubit / BLoC', 'C#', 'ASP.NET Core', 'Entity Framework', 'SignalR', 'JWT', 'Dio', 'fl_chart'],
    shots: [],
    note: 'Two private repositories on a teammate’s account; built against a Tunisian bank’s employee systems.',
  },
  // TODO add more here. Same shape.
];

export const skills = [
  {
    group: 'Backend',
    items: ['Python', 'FastAPI', 'Django', 'Java', 'Spring Boot', 'C#', 'ASP.NET Core', 'PHP', 'Laravel', 'PostgreSQL', 'MySQL', 'REST / OpenAPI'],
  },
  {
    group: 'AI',
    items: ['RAG pipelines', 'Vector search (Chroma)', 'Prompt design', 'LLM APIs (Groq)', 'MCP'],
  },
  {
    group: 'Mobile & real-time',
    items: ['Flutter', 'Dart', 'Cubit / BLoC', 'SignalR', 'Push notifications'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Angular', 'TypeScript', 'Vite', 'Tailwind', 'Blade', 'Alpine.js', 'Astro'],
  },
  {
    group: 'Infra',
    items: ['Docker', 'Compose', 'nginx', 'ngrok', 'Git', 'GitHub Actions', 'Playwright'],
  },
];

export const about = [
  'I like problems where the obvious solution is wrong for the person using it. Fahem started there: the models could already solve the exercises, they just answered in a language the student had not been taught. The engineering was all in the constraint, not the generation.',
  'MCP Hub was the same shape from the other end — the tools worked, but nobody could say which ones were safe to hand an agent, or who had signed off. That became a lifecycle, an audit log, and a gateway.',
  'Most of what I know came from shipping both end to end — retrieval, API, UI, migrations, containers, deploy — and from every part of it breaking at least once.',
];
