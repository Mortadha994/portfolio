// Every word on the site lives here, in both languages.
// Edit this file, not the components.
//
// A bilingual string is { en, fr }. Both are rendered into the HTML and the
// FR/EN button in the nav flips which one is shown, so switching is instant
// and the page stays a single static file.

export type L = { en: string; fr: string };

export const person = {
  name: 'Mohamed Mortadha Hachani',
  role: {
    en: 'Software engineering student · AI & full-stack',
    fr: 'Étudiant ingénieur en informatique · IA & développement fullstack',
  },
  tagline: {
    en: 'I put AI into applications people actually use — a tutor for Tunisian students, a governance platform for enterprise AI tooling, medical triage. I build them end to end: frontend, backend, database, deployment.',
    fr: "J'intègre l'IA dans des applications concrètes — un tuteur pour les élèves tunisiens, une plateforme de gouvernance pour l'outillage IA en entreprise, du triage médical. Je les construis de bout en bout : frontend, backend, base de données, déploiement.",
  },
  location: { en: 'Tunisia', fr: 'Tunisie' },
  email: 'hachanimedmortadha@outlook.com',
  available: {
    en: 'Looking for an internship or a junior role — AI / full-stack / software engineering',
    fr: "À la recherche d'un stage ou d'un poste junior — IA / Fullstack / Ingénierie logicielle",
  },
};

export const links = [
  { label: { en: 'GitHub', fr: 'GitHub' }, href: 'https://github.com/Mortadha994' },
  { label: { en: 'LinkedIn', fr: 'LinkedIn' }, href: 'https://www.linkedin.com/in/hachanimortadha/' },
  { label: { en: 'Email', fr: 'Email' }, href: 'mailto:hachanimedmortadha@outlook.com' },
  { label: { en: 'CV (PDF)', fr: 'CV (PDF)' }, href: '/cv.pdf' },
];

export const stats = [
  { value: '5', label: { en: 'Projects built end to end', fr: 'Projets menés de bout en bout' } },
  {
    value: '5',
    label: {
      en: 'Backend stacks: Python, Java, C#, PHP, JS',
      fr: 'Stacks backend : Python, Java, C#, PHP, JS',
    },
  },
  { value: '3', label: { en: 'Of them with AI at the core', fr: "Dont trois avec l'IA au cœur" } },
];

export const sections = {
  work: {
    label: { en: 'Work', fr: 'Projets' },
    title: { en: "Things I've built", fr: "Ce que j'ai construit" },
  },
  skills: {
    label: { en: 'Skills', fr: 'Compétences' },
    title: { en: 'What I work with', fr: "Ce que j'utilise" },
  },
  path: {
    label: { en: 'Path', fr: 'Parcours' },
    title: { en: 'Where I come from', fr: "D'où je viens" },
  },
  about: {
    label: { en: 'About', fr: 'À propos' },
    title: { en: 'A bit of context', fr: 'Un peu de contexte' },
  },
  contact: {
    label: { en: 'Contact', fr: 'Contact' },
    title: { en: 'Get in touch', fr: 'Me contacter' },
  },
};

export type Shot = { src: string; alt: L; caption: L };

export type Project = {
  name: string;
  kind: L;
  year: string;
  blurb: L;
  problem: L;
  detail: { heading: L; body: L }[];
  stack: string[];
  shots: Shot[];
  href?: string;
  repo?: string;
  featured?: boolean;
  note?: L;
};

export const projects: Project[] = [
  {
    name: 'Fahem',
    kind: { en: 'Personal project', fr: 'Projet personnel' },
    year: '2026',
    featured: true,
    blurb: {
      en: 'An AI tutor that solves algorithmique homework in exactly the syntax a Tunisian student has been taught — grounded in the real curriculum, not in generic AI knowledge.',
      fr: "Un tuteur IA qui résout les exercices d'algorithmique dans exactement la syntaxe qu'un élève tunisien a apprise — ancré dans le programme réel, pas dans les connaissances génériques d'une IA.",
    },
    problem: {
      en: 'I teach algorithmique to six groups of students. I watched them paste exercises into chatbots and get back answers in whatever Python the model liked — a for loop, a helper function, an f-string. All correct Python. All useless to someone marked against the notation in their own textbook, who has not been taught any of it yet.',
      fr: "J'enseigne l'algorithmique à six groupes d'élèves. Je les ai vus coller leurs exercices dans des chatbots et récupérer des réponses dans le Python que le modèle préférait — une boucle for, une fonction, une f-string. Du Python correct. Inutile pour quelqu'un noté sur la notation de son propre manuel, et à qui on n'a encore rien enseigné de tout cela.",
    },
    detail: [
      {
        heading: { en: "Grounded in the student's own chapter", fr: "Ancré dans le chapitre de l'élève" },
        body: {
          en: 'Fahem retrieves the chapter the student is actually working through and constrains the answer to the syntax that chapter contains — Lire and Ecrire, ← for assignment, div and mod, the Objet | Nature/type declaration table. If a problem genuinely needs something the chapter has not covered, it says so instead of inventing it.',
          fr: "Fahem récupère le chapitre que l'élève travaille réellement et contraint la réponse à la syntaxe de ce chapitre — Lire et Ecrire, ← pour l'affectation, div et mod, le tableau de déclaration Objet | Nature/type. Si un exercice exige vraiment une notion non couverte, il le dit au lieu de l'inventer.",
        },
      },
      {
        heading: { en: 'A verdict you can check', fr: 'Un verdict vérifiable' },
        body: {
          en: 'A mechanical syntax checker puts a verdict under every answer — syntaxe du chapitre respectée, or the exact offending lines. A grounding strip opens to show the pinned syntax tables and the retrieved excerpts the answer was built on, so nothing has to be taken on faith.',
          fr: "Un vérificateur syntaxique mécanique place un verdict sous chaque réponse — syntaxe du chapitre respectée, ou les lignes exactes en faute. Un bandeau d'ancrage s'ouvre sur les tableaux de syntaxe épinglés et les extraits retrouvés qui ont servi à construire la réponse : rien n'est à croire sur parole.",
        },
      },
      {
        heading: { en: 'Three ways to ask', fr: 'Trois façons de demander' },
        body: {
          en: 'La solution gives the worked answer. Mode guidé walks four steps — comprendre, indice, squelette, solution — and stops where the student still has work to do. Ma réponse takes what the student wrote and corrects it line by line, naming the rule behind each correction.',
          fr: "La solution donne la réponse rédigée. Le mode guidé déroule quatre étapes — comprendre, indice, squelette, solution — et s'arrête là où l'élève a encore du travail. Ma réponse reprend ce que l'élève a écrit et le corrige ligne par ligne, en nommant la règle derrière chaque correction.",
        },
      },
      {
        heading: {
          en: 'Built for how students actually work',
          fr: 'Pensé pour la façon dont les élèves travaillent',
        },
        body: {
          en: 'Photograph the exercise or paste a screenshot and it reads the statement out of the image. Answers stream as they are written. Every model call queues for Groq, so a student hitting a busy service sees their place in line instead of an error.',
          fr: "Photographiez l'exercice ou collez une capture : Fahem lit l'énoncé dans l'image. Les réponses s'affichent au fil de leur écriture. Chaque appel au modèle passe par une file d'attente vers Groq : un élève qui tombe sur un service saturé voit sa place dans la file plutôt qu'une erreur.",
        },
      },
    ],
    stack: ['FastAPI', 'Python', 'RAG / Qdrant', 'Groq', 'React', 'TypeScript', 'Vite', 'PostgreSQL', 'Redis', 'Docker'],
    shots: [
      {
        src: '/shots/fahem-hero.webp',
        alt: { en: 'The Fahem landing page', fr: "La page d'accueil de Fahem" },
        caption: { en: 'Landing — try it before any account', fr: 'Accueil — essayer avant tout compte' },
      },
      {
        src: '/shots/fahem-guided.webp',
        alt: {
          en: 'Guided mode walking through an exercise in four steps',
          fr: 'Le mode guidé déroulant un exercice en quatre étapes',
        },
        caption: {
          en: 'Mode guidé — four steps, not one answer',
          fr: 'Mode guidé — quatre étapes, pas une réponse',
        },
      },
      {
        src: '/shots/fahem-dark.webp',
        alt: { en: 'Feature cards in dark mode', fr: 'Les cartes de fonctionnalités en thème sombre' },
        caption: { en: 'Dark theme, following the OS by default', fr: "Thème sombre, aligné sur l'OS par défaut" },
      },
      {
        src: '/shots/fahem-signin.webp',
        alt: { en: 'The sign-in screen', fr: "L'écran de connexion" },
        caption: { en: 'Google or email, with verification', fr: 'Google ou email, avec vérification' },
      },
    ],
    repo: 'https://github.com/Mortadha994/fahem',
  },
  {
    name: 'MCP Hub',
    kind: { en: 'Internship · Sagemcom', fr: 'Stage · Sagemcom' },
    year: '2026',
    featured: true,
    blurb: {
      en: 'A catalog, governance layer and runtime gateway for enterprise MCP servers — one governed source of truth in place of ad-hoc mcpServers JSON scattered across wiki pages.',
      fr: "Un catalogue, une couche de gouvernance et une passerelle d'exécution pour les serveurs MCP en entreprise — une source de vérité gouvernée à la place de bouts de JSON mcpServers éparpillés sur des pages wiki.",
    },
    problem: {
      en: 'An MCP server is only useful to an agent once it is discoverable, vetted, and reachable over a transport the agent can speak. Doing that by hand — copying command/args/env blocks, tracking who approved what, remembering which endpoints are safe — does not scale past a handful of servers.',
      fr: "Un serveur MCP n'est utile à un agent qu'une fois découvrable, validé, et joignable via un transport que l'agent parle. Le faire à la main — recopier des blocs command/args/env, suivre qui a approuvé quoi, se souvenir des endpoints sûrs — ne passe pas l'échelle de quelques serveurs.",
    },
    detail: [
      {
        heading: { en: 'A catalog with provenance', fr: 'Un catalogue avec provenance' },
        body: {
          en: 'Every MCP is a database record: identity, provenance, documentation, governance ratings, and a cached tool manifest. Local servers are stdio processes the Hub spawns from an allowlisted interpreter; external ones are HTTPS endpoints reached over SSE or streamable HTTP.',
          fr: "Chaque MCP est un enregistrement en base : identité, provenance, documentation, notations de gouvernance et manifeste d'outils mis en cache. Les serveurs locaux sont des processus stdio lancés depuis un interpréteur autorisé ; les externes sont des endpoints HTTPS joints en SSE ou streamable HTTP.",
        },
      },
      {
        heading: { en: 'Governance that leaves a trail', fr: 'Une gouvernance qui laisse une trace' },
        body: {
          en: 'Each MCP moves through an explicit lifecycle — draft, under review, approved, published — against an append-only audit log recording who changed what, with before and after snapshots. Gated servers take consumer access requests a platform admin approves or rejects.',
          fr: "Chaque MCP suit un cycle de vie explicite — brouillon, en revue, approuvé, publié — adossé à un journal d'audit en ajout seul qui enregistre qui a changé quoi, avec instantanés avant et après. Les serveurs restreints reçoivent des demandes d'accès qu'un administrateur approuve ou rejette.",
        },
      },
      {
        heading: { en: 'A runtime gateway, two shapes', fr: "Une passerelle d'exécution, deux formes" },
        body: {
          en: 'Approved servers reach agents as OpenAPI HTTP tools through MCPO: either one process per MCP, each with its own port, PID and health status, or all of them behind a shared daemon whose config is regenerated atomically and hot-reloaded on every activation.',
          fr: "Les serveurs approuvés atteignent les agents comme des outils HTTP OpenAPI via MCPO : soit un processus par MCP, chacun avec son port, son PID et son état de santé, soit tous derrière un démon partagé dont la configuration est régénérée atomiquement et rechargée à chaud à chaque activation.",
        },
      },
      {
        heading: {
          en: 'One identity seam, two auth modes',
          fr: "Une couture d'identité, deux modes d'authentification",
        },
        body: {
          en: 'Production callers carry a JWT; local dev reads a role from a header. Both resolve through a single seam, so every role check is written once and holds in both — and the role is always read from the linked user profile, never trusted from the token itself.',
          fr: "En production l'appelant porte un JWT ; en développement local le rôle vient d'un en-tête. Les deux passent par une même couture : chaque contrôle de rôle est écrit une fois et vaut dans les deux cas — et le rôle est toujours lu depuis le profil utilisateur lié, jamais tiré du token.",
        },
      },
    ],
    stack: ['Django 6', 'DRF', 'Angular 22', 'TypeScript', 'PostgreSQL', 'Docker', 'MCPO', 'OpenAPI', 'JWT'],
    shots: [
      {
        src: '/shots/mcp-hub-home.webp',
        alt: { en: 'The MCP Hub dashboard', fr: 'Le tableau de bord de MCP Hub' },
        caption: {
          en: 'Dashboard — the governed estate at a glance',
          fr: "Tableau de bord — le parc gouverné d'un coup d'œil",
        },
      },
      {
        src: '/shots/mcp-hub-catalog.webp',
        alt: {
          en: 'The MCP Hub catalog listing servers with their lifecycle state',
          fr: 'Le catalogue listant les serveurs avec leur état de cycle de vie',
        },
        caption: {
          en: 'Catalog — filtered by category, local vs. hosted',
          fr: 'Catalogue — filtré par catégorie, local ou hébergé',
        },
      },
      {
        src: '/shots/mcp-hub-admin.webp',
        alt: { en: 'The admin view for managing MCP servers', fr: "La vue d'administration des serveurs MCP" },
        caption: { en: 'Admin — lifecycle transitions and bridges', fr: 'Admin — transitions de cycle de vie et bridges' },
      },
      {
        src: '/shots/mcp-hub-users.webp',
        alt: { en: 'The user administration view', fr: 'La vue de gestion des utilisateurs' },
        caption: { en: 'Users — three roles, one permission model', fr: 'Utilisateurs — trois rôles, un modèle de permissions' },
      },
    ],
    note: {
      en: 'Screenshots are from the internship environment, with server names redacted. The repository is private.',
      fr: "Captures issues de l'environnement de stage, noms de serveurs masqués. Le dépôt est privé.",
    },
  },
  {
    name: 'ProManager',
    kind: { en: 'Personal project', fr: 'Projet personnel' },
    year: '2026',
    featured: true,
    blurb: {
      en: 'A project-management platform where the AI does the staffing work — reading a CV into a skill profile, generating a realistic task breakdown, and explaining which member should take what and why.',
      fr: "Une plateforme de gestion de projets où l'IA fait le travail d'affectation — lire un CV pour en tirer un profil de compétences, générer un découpage de tâches réaliste, et expliquer qui doit prendre quoi et pourquoi.",
    },
    problem: {
      en: 'Assigning work well means knowing who can actually do it and who is already buried. That knowledge lives in CVs nobody re-reads and in a board nobody aggregates, so tasks get handed to whoever is nearest rather than whoever fits.',
      fr: "Bien répartir le travail suppose de savoir qui sait vraiment faire et qui est déjà noyé. Ce savoir dort dans des CV que personne ne relit et sur un tableau que personne n'agrège : les tâches finissent chez le plus proche plutôt que chez le plus adapté.",
    },
    detail: [
      {
        heading: { en: 'A CV becomes a skill profile', fr: 'Un CV devient un profil de compétences' },
        body: {
          en: 'Upload a PDF résumé and the AI service extracts its skills with PyMuPDF and Llama 3.3. The user reviews the suggestions as removable chips, adds their own, and saves the final list — which then feeds every assignment decision the platform makes.',
          fr: "Déposez un CV en PDF et le service IA en extrait les compétences avec PyMuPDF et Llama 3.3. L'utilisateur relit les suggestions sous forme d'étiquettes supprimables, ajoute les siennes et enregistre la liste finale — qui alimente ensuite chaque décision d'affectation.",
        },
      },
      {
        heading: { en: 'Assignment with a reason attached', fr: 'Une affectation motivée' },
        body: {
          en: 'Task generation produces a realistic breakdown and names who should take each item, justified against recorded skills and current workload. A separate risk pass flags bottlenecks, overloaded members and likely delays, with recommendations rather than just a score.',
          fr: "La génération de tâches produit un découpage réaliste et désigne qui doit prendre chaque élément, en le justifiant par les compétences enregistrées et la charge en cours. Une passe de risque distincte signale goulots, membres surchargés et retards probables, avec des recommandations plutôt qu'un simple score.",
        },
      },
      {
        heading: { en: 'A board that moves in real time', fr: 'Un tableau qui bouge en temps réel' },
        body: {
          en: 'Drag-and-drop Kanban on the Angular CDK, grouped by sprint or backlog, with per-column scrolling and approval actions. A STOMP WebSocket pushes project refresh events, so a card moved by one member lands on everyone else’s board.',
          fr: "Kanban en glisser-déposer sur le CDK Angular, groupé par sprint ou backlog, avec défilement par colonne et actions d'approbation. Un WebSocket STOMP diffuse les événements de rafraîchissement : une carte déplacée par un membre arrive sur le tableau des autres.",
        },
      },
      {
        heading: { en: 'Four roles and a control center', fr: 'Quatre rôles et un centre de contrôle' },
        body: {
          en: 'Owner, admin, member and viewer gate every action through route guards on the front and authorization services on the back, all behind Spring Security and JWT. An admin control center covers users, projects, tasks, logs and system-level actions.',
          fr: "Owner, admin, membre et viewer filtrent chaque action via des gardes de routes côté front et des services d'autorisation côté back, le tout derrière Spring Security et JWT. Un centre de contrôle couvre utilisateurs, projets, tâches, journaux et actions système.",
        },
      },
      {
        heading: { en: 'Model output treated as untrusted', fr: 'La sortie du modèle traitée comme non fiable' },
        body: {
          en: 'The FastAPI service parses and normalizes every response into Pydantic models with strict JSON handling, and falls back to a second model under load — so a malformed or slow generation degrades the feature instead of the board.',
          fr: "Le service FastAPI analyse et normalise chaque réponse en modèles Pydantic avec un JSON strict, et bascule sur un second modèle en charge — une génération malformée ou lente dégrade la fonctionnalité, pas le tableau.",
        },
      },
    ],
    stack: [
      'Java',
      'Spring Boot 3',
      'Spring Security',
      'JPA / Hibernate',
      'Angular 17',
      'TypeScript',
      'FastAPI',
      'Groq / Llama 3.3',
      'PyMuPDF',
      'PostgreSQL',
      'STOMP / WebSocket',
      'Docker',
      'nginx',
    ],
    shots: [
      {
        src: '/shots/pm-kanban.webp',
        alt: {
          en: 'The Kanban board with four columns, priority badges and workload counters',
          fr: 'Le tableau Kanban à quatre colonnes, avec priorités et compteurs de charge',
        },
        caption: {
          en: 'Kanban — four columns, priorities, workload counters',
          fr: 'Kanban — quatre colonnes, priorités, charge',
        },
      },
      {
        src: '/shots/pm-profile.webp',
        alt: {
          en: 'The AI CV analyser, offering to extract skills from an uploaded PDF résumé',
          fr: "L'analyseur de CV par IA, proposant d'extraire les compétences d'un PDF",
        },
        caption: {
          en: 'Analyseur de CV — a PDF becomes a skill profile',
          fr: 'Analyseur de CV — un PDF devient un profil',
        },
      },
      {
        src: '/shots/pm-dashboard.webp',
        alt: {
          en: 'The admin dashboard with project, task and team counters',
          fr: 'Le tableau de bord admin : projets, tâches, équipe',
        },
        caption: {
          en: 'Dashboard — projects, tasks and seats at a glance',
          fr: "Tableau de bord — projets, tâches et sièges d'un coup d'œil",
        },
      },
      {
        src: '/shots/pm-login.webp',
        alt: { en: 'The ProManager sign-in screen', fr: "L'écran de connexion de ProManager" },
        caption: { en: 'Sign-in, with demo access spelled out', fr: 'Connexion, avec accès démo indiqué' },
      },
    ],
    repo: 'https://github.com/Mortadha994/project-manager',
  },
  {
    name: 'PlatformeMed',
    kind: { en: 'Personal project', fr: 'Projet personnel' },
    year: '2026',
    blurb: {
      en: 'A telemedicine platform where the AI does the triage — reading a patient’s symptoms in plain French to route them to the right specialist, at the right urgency, before a human ever reads the request.',
      fr: "Une plateforme de télémédecine où l'IA fait le triage — lire les symptômes du patient en français courant pour l'orienter vers le bon spécialiste, au bon niveau d'urgence, avant qu'un humain ne lise la demande.",
    },
    problem: {
      en: 'A patient describing symptoms does not know which specialist they need, or how urgent it is. Getting that wrong wastes an appointment slot at best and delays a critical case at worst — and the triage happens before anyone qualified has looked at it.',
      fr: "Un patient qui décrit ses symptômes ignore quel spécialiste il lui faut, et à quel degré d'urgence. Se tromper gaspille un créneau au mieux, retarde un cas critique au pire — et ce triage se fait avant qu'une personne qualifiée n'ait rien regardé.",
    },
    detail: [
      {
        heading: { en: 'Triage before booking', fr: 'Le triage avant la réservation' },
        body: {
          en: 'Symptoms typed in natural language are interpreted, matched to a speciality, and graded across four urgency levels from low to critical. The booking flow then offers the slots that fit, instead of a blank calendar and a guess.',
          fr: "Les symptômes saisis en langage naturel sont interprétés, rattachés à une spécialité et gradués sur quatre niveaux d'urgence, de faible à critique. Le parcours de réservation propose alors les créneaux adaptés, au lieu d'un calendrier vide et d'une supposition.",
        },
      },
      {
        heading: { en: 'Three spaces, one codebase', fr: 'Trois espaces, une base de code' },
        body: {
          en: 'Patients get a digital record, prescriptions, uploaded analyses and charted vitals — glycaemia, blood pressure, weight. Doctors get the day’s appointments, critical alerts, consultation write-ups and availability slots. Admins get platform statistics and system alerts.',
          fr: "Les patients disposent d'un dossier numérique, d'ordonnances, d'analyses déposées et de constantes tracées — glycémie, tension, poids. Les médecins ont les rendez-vous du jour, les alertes critiques, les comptes-rendus et leurs disponibilités. Les administrateurs ont les statistiques et les alertes système.",
        },
      },
      {
        heading: { en: 'Diagnostic support, not diagnosis', fr: 'Aide au diagnostic, pas diagnostic' },
        body: {
          en: 'For the doctor, the model synthesises the patient’s history into differential diagnoses — framed as input to a clinician’s judgement rather than a verdict, which is the only defensible shape for this in a medical setting.',
          fr: "Pour le médecin, le modèle synthétise l'historique du patient en diagnostics différentiels — présentés comme une entrée du jugement clinique et non comme un verdict, seule forme défendable en contexte médical.",
        },
      },
      {
        heading: {
          en: 'Isolation as a first-class concern',
          fr: "L'isolation comme exigence de premier plan",
        },
        body: {
          en: 'A role middleware gates every space, uploads are validated strictly, and patient data is isolated per account — the part of a medical app where a mistake is not a bug but a breach.',
          fr: "Un middleware de rôle filtre chaque espace, les dépôts de fichiers sont validés strictement et les données patient sont isolées par compte — la partie d'une application médicale où une erreur n'est pas un bug mais une fuite.",
        },
      },
    ],
    stack: ['PHP 8.3', 'Laravel', 'Blade', 'Alpine.js', 'Tailwind', 'MySQL', 'Groq / Llama 3.3', 'Vite'],
    shots: [
      {
        src: '/shots/med-patient.webp',
        alt: {
          en: 'The patient dashboard, with the next appointment, the AI assistant and recorded vitals',
          fr: 'Le tableau de bord patient : prochain rendez-vous, assistant IA et constantes',
        },
        caption: {
          en: 'Espace patient — next appointment, vitals, agenda',
          fr: 'Espace patient — rendez-vous, constantes, agenda',
        },
      },
      {
        src: '/shots/med-ai.webp',
        alt: {
          en: 'The AI orientation screen with symptoms described in free text',
          fr: "L'écran d'orientation IA avec des symptômes décrits en texte libre",
        },
        caption: {
          en: 'Orientation IA — symptoms in, speciality and urgency out',
          fr: 'Orientation IA — symptômes en entrée, spécialité et urgence en sortie',
        },
      },
      {
        src: '/shots/med-doctor.webp',
        alt: {
          en: 'The doctor dashboard showing the day’s schedule and critical alerts',
          fr: 'Le tableau de bord médecin : planning du jour et alertes critiques',
        },
        caption: {
          en: 'Espace médecin — the day’s plan and critical alerts',
          fr: 'Espace médecin — planning du jour et alertes critiques',
        },
      },
      {
        src: '/shots/med-suivi.webp',
        alt: {
          en: 'Health tracking with blood pressure and glycaemia charts against critical thresholds',
          fr: 'Suivi santé : courbes de tension et de glycémie face aux seuils critiques',
        },
        caption: {
          en: 'Suivi santé — constants charted against thresholds',
          fr: 'Suivi santé — constantes tracées face aux seuils',
        },
      },
    ],
    repo: 'https://github.com/Mortadha994/Atelier_medical',
  },
  {
    name: 'DigiRH',
    kind: { en: 'Final-year project (PFE) · STB', fr: "Projet de fin d'études (PFE) · STB" },
    year: '2025',
    featured: true,
    blurb: {
      en: 'A ground-up rewrite of the HR app used by 300+ staff at Société Tunisienne de Banque — Flutter on .NET Core 8, replacing a dated portal with one app for accounts, requests, meetings, chat and wellbeing.',
      fr: "La refonte complète de l'application RH utilisée par plus de 300 collaborateurs de la Société Tunisienne de Banque — Flutter sur .NET Core 8, remplaçant un portail vieillissant par une seule application : comptes, demandes, réunions, messagerie et bien-être.",
    },
    problem: {
      en: 'The bank already had DigiRH; the problem was that people avoided it. The ergonomics were dated, mobile access was limited, nothing arrived in real time, and the data handling was not good enough for a bank. An HR tool nobody opens is not an HR tool.',
      fr: "La banque avait déjà DigiRH ; le problème, c'est que personne ne l'ouvrait. Ergonomie dépassée, accessibilité mobile limitée, aucune notification en temps réel et une sécurité des données insuffisante pour une banque. Un outil RH que personne n'ouvre n'est pas un outil RH.",
    },
    detail: [
      {
        heading: { en: 'One app instead of a portal', fr: "Une application plutôt qu'un portail" },
        body: {
          en: 'Accounts, cards and credit — with repayment charted against the outstanding balance — sit beside leave, advance, authorisation and training requests, a shared calendar, company news and internal polls. Each is a .NET entity with its own controller, surfaced through one bottom-nav app on Web, Android and iOS from a single Flutter codebase.',
          fr: "Comptes, cartes et crédits — avec le remboursement tracé face à l'encours — côtoient les demandes de congé, d'avance, d'autorisation et de formation, un calendrier partagé, les actualités et les sondages internes. Chacun est une entité .NET avec son contrôleur, exposée dans une seule application à navigation basse sur Web, Android et iOS depuis une unique base Flutter.",
        },
      },
      {
        heading: { en: 'Real time was the point', fr: "Le temps réel était l'objectif" },
        body: {
          en: 'The old app had no live notifications at all. Two SignalR hubs now push chat and notifications to the device; if the recipient is offline the notification is persisted and delivered when they return, and an unread one stays unread rather than being silently dropped.',
          fr: "L'ancienne application n'avait aucune notification en direct. Deux hubs SignalR poussent désormais messages et notifications sur l'appareil ; si le destinataire est hors ligne, la notification est conservée puis délivrée à son retour, et une non lue reste non lue au lieu d'être perdue.",
        },
      },
      {
        heading: { en: 'Wellbeing that reaches a manager', fr: 'Un bien-être qui remonte au manager' },
        body: {
          en: 'Employees answer periodic polls that produce a wellbeing score with an alert level and a message. Managers see aggregated team scores — so a dip surfaces to someone who can act on it, instead of a survey result nobody reads.',
          fr: "Les collaborateurs répondent à des sondages périodiques qui produisent un score de bien-être avec un niveau d'alerte et un message. Les managers voient les scores agrégés de leur équipe — une baisse remonte donc à quelqu'un qui peut agir, au lieu d'un résultat que personne ne lit.",
        },
      },
      {
        heading: { en: 'Modelled before it was built', fr: "Modélisé avant d'être codé" },
        body: {
          en: 'Four Scrum sprints, each opening with use-case refinement, class, sequence and activity diagrams before any code. The notification flow was drawn as an activity diagram down to the offline branch — which is why that case works rather than being discovered in testing.',
          fr: "Quatre sprints Scrum, chacun ouvert par un raffinement des cas d'utilisation et des diagrammes de classes, de séquence et d'activité avant toute ligne de code. Le flux de notification a été dessiné jusqu'à la branche hors ligne — c'est pourquoi ce cas fonctionne au lieu d'être découvert en test.",
        },
      },
    ],
    stack: [
      'Flutter',
      'Dart',
      'Cubit / BLoC',
      'C#',
      '.NET Core 8',
      'Entity Framework',
      'SQL Server',
      'SignalR',
      'JWT',
      'Swagger',
      'Scrum',
    ],
    shots: [
      {
        src: '/shots/digirh-home.webp',
        alt: {
          en: 'The DigiRH home screen showing an account balance and the request shortcuts',
          fr: "L'écran d'accueil de DigiRH : solde du compte et raccourcis de demandes",
        },
        caption: {
          en: 'Home — account, balance, and every request one tap away',
          fr: 'Accueil — compte, solde et chaque demande à un geste',
        },
      },
      {
        src: '/shots/digirh-screens.webp',
        alt: {
          en: 'The calendar, main menu and credit breakdown screens side by side',
          fr: 'Le calendrier, le menu principal et la répartition du crédit côte à côte',
        },
        caption: {
          en: 'Calendar, menu and credit — one Flutter codebase, three platforms',
          fr: 'Calendrier, menu et crédit — une base Flutter, trois plateformes',
        },
      },
      {
        src: '/shots/digirh-before.webp',
        alt: {
          en: 'The previous DigiRH app the project replaced',
          fr: "L'ancienne application DigiRH remplacée par le projet",
        },
        caption: {
          en: 'What it replaced — the app staff were avoiding',
          fr: "Ce qu'elle remplace — l'application que le personnel évitait",
        },
      },
    ],
    note: {
      en: 'Built in a team of three, with Med Amin Zouaoui. Repositories are private.',
      fr: 'Réalisé en équipe de trois, avec Med Amin Zouaoui. Les dépôts sont privés.',
    },
  },
];

export const skills = [
  {
    group: { en: 'Languages & frontend', fr: 'Langages & frontend' },
    items: ['TypeScript', 'Angular', 'React', 'Flutter / Dart', 'Astro', 'Tailwind'],
  },
  {
    group: { en: 'Backend', fr: 'Backend' },
    items: ['Spring Boot', 'FastAPI', 'ASP.NET Core (MVC)', 'Django', 'Laravel', 'REST / OpenAPI'],
  },
  {
    group: { en: 'Databases & infra', fr: 'Bases de données & infra' },
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Qdrant', 'Redis', 'Docker', 'nginx'],
  },
  {
    group: { en: 'AI & integration', fr: 'IA & intégration' },
    items: ['LLM APIs (Groq / Llama 3.3)', 'RAG pipelines', 'Applied chatbots', 'MCP', 'Prompt design'],
  },
  {
    group: { en: 'Other', fr: 'Autres' },
    items: ['JWT / RBAC', 'WebSocket (STOMP)', 'SignalR', 'Git / GitHub', 'Scrum'],
  },
];

export type PathEntry = { when: L; what: L; where: string; detail: L };

export const path: PathEntry[] = [
  {
    when: { en: 'Aug 2026', fr: 'Août 2026' },
    what: { en: 'Internship — internal MCP hub', fr: 'Stage — hub MCP interne' },
    where: 'Sagemcom',
    detail: {
      en: 'An internal Model Context Protocol hub wired to an AI agent builder.',
      fr: "Un hub Model Context Protocol interne connecté à un constructeur d'agents IA.",
    },
  },
  {
    when: { en: 'Since 2025', fr: 'Depuis 2025' },
    what: { en: 'Computer engineering degree', fr: 'Cycle ingénieur en informatique' },
    where: 'Iteam University',
    detail: { en: 'In progress.', fr: 'En cours.' },
  },
  {
    when: { en: 'Since 2025', fr: 'Depuis 2025' },
    what: {
      en: 'Algorithmics & programming instructor',
      fr: 'Formateur en algorithmique et programmation',
    },
    where: 'Tuto Academy',
    detail: {
      en: 'Six groups of students, on the Tunisian curriculum. This is where Fahem came from.',
      fr: "Six groupes d'élèves, sur le programme tunisien. C'est de là qu'est né Fahem.",
    },
  },
  {
    when: { en: 'Jan – May 2025', fr: 'Janvier – Mai 2025' },
    what: {
      en: 'Mobile developer — final-year internship',
      fr: "Développeur mobile — stage de fin d'études",
    },
    where: 'Société Tunisienne de Banque',
    detail: {
      en: 'A banking mobile app in Flutter/Dart on an ASP.NET Core backend, with JWT auth, in an agile team of three.',
      fr: "Une application bancaire mobile en Flutter/Dart sur un backend ASP.NET Core, authentification JWT, en équipe agile de trois.",
    },
  },
  {
    when: { en: '2022 – 2025', fr: '2022 – 2025' },
    what: {
      en: 'BSc, Management Information Systems',
      fr: "Licence en systèmes d'information de gestion",
    },
    where: 'FSEG Nabeul',
    detail: { en: 'Université de Carthage.', fr: 'Université de Carthage.' },
  },
  {
    when: { en: 'Jul 2024', fr: 'Juillet 2024' },
    what: { en: 'Web developer — internship', fr: 'Développeur web — stage' },
    where: 'Poulina Group',
    detail: {
      en: 'An e-commerce site in ASP.NET Core MVC: catalogue, basket, orders and authentication.',
      fr: 'Un site e-commerce en ASP.NET Core MVC : catalogue, panier, commandes et authentification.',
    },
  },
];

export const languages = [
  { name: { en: 'Arabic', fr: 'Arabe' }, level: { en: 'Native', fr: 'Langue maternelle' } },
  { name: { en: 'French', fr: 'Français' }, level: { en: 'B1', fr: 'B1' } },
  { name: { en: 'English', fr: 'Anglais' }, level: { en: 'B1', fr: 'B1' } },
];

export const about: L[] = [
  {
    en: "I'm a computer engineering student, working on full-stack development and on putting AI into applications people actually use — chatbots, teaching tools, automation.",
    fr: "Je suis étudiant en cycle ingénieur informatique, orienté développement fullstack et intégration de l'IA dans des applications concrètes — chatbots, outils pédagogiques, automatisation.",
  },
  {
    en: 'I also teach algorithmics and programming to six groups of students on the Tunisian curriculum. That is where Fahem came from: I could see exactly where the existing tools were failing them, because I was the one marking the work.',
    fr: "J'enseigne aussi l'algorithmique et la programmation à six groupes d'élèves sur le programme tunisien. C'est de là qu'est né Fahem : je voyais précisément où les outils existants les desservaient, puisque c'est moi qui corrigeais.",
  },
  {
    en: 'Between internships in mobile and web development and my own projects, what I keep coming back to is building the whole thing — frontend, backend, database, deployment — rather than one slice of it.',
    fr: "Entre mes stages en développement mobile et web et mes projets personnels, ce qui revient toujours, c'est de construire l'ensemble — frontend, backend, base de données, déploiement — plutôt qu'une seule tranche.",
  },
  {
    en: "I'm looking for an internship or a junior role in AI, full-stack or software engineering.",
    fr: "Je suis à la recherche d'un stage ou d'un poste junior en IA, fullstack ou ingénierie logicielle.",
  },
];

export const ui = {
  contactLead: {
    en: 'The fastest way to reach me is email. I read everything.',
    fr: 'Le plus rapide pour me joindre est le mail. Je lis tout.',
  },
  screens: { en: 'screens', fr: 'écrans' },
  auto: { en: 'auto', fr: 'auto' },
  featured: { en: 'Featured', fr: 'À la une' },
  liveSite: { en: 'Live site →', fr: 'Site en ligne →' },
  source: { en: 'Source →', fr: 'Code source →' },
  langsTitle: { en: 'Languages', fr: 'Langues' },
};
