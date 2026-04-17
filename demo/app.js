const voices = {
  leilani: {
    id: "leilani",
    name: "Chris K. Aloha",
    role: "Community Resilience Guide",
    location: "Maui",
    tags: ["resilience", "energy", "planning"],
    summary:
      "I work on projects that help schools and communities think about solar, storage, and long-term resilience.",
    whatIDo:
      "I look at how energy choices affect cost, reliability, and community goals. Some days I am in spreadsheets. Some days I am talking story with partners about what a site really needs.",
    howIGotHere:
      "In high school I liked math, but I did not know energy planning was even a job. A teacher connected classwork to local projects, and that changed what I could imagine.",
    favoriteThing:
      "I like that the work is technical and community-facing at the same time. It helps me think about what future resilience can look like here at home.",
    tryNow:
      "Pay attention to where measurement, cost, and tradeoffs show up in class. Those habits matter more than having your whole future figured out.",
    wishIKnew:
      "You do not have to sound like an expert to ask a smart question. Curiosity is a real skill.",
    runtime: "52s"
  },
  keoni: {
    id: "keoni",
    name: "Maya N. Lei",
    role: "Coastal Data Explorer",
    location: "Oʻahu",
    tags: ["reef monitoring", "data", "field science"],
    summary:
      "I help teams collect and interpret environmental data so communities can make better decisions.",
    whatIDo:
      "I work with data from field observations, sensors, and reports. My job is part science, part communication, and part making sure information is useful to real people.",
    howIGotHere:
      "I started with school science projects and community volunteer work. I learned that caring about place could become a career path.",
    favoriteThing:
      "I love that the data is not abstract. It helps people make better decisions about places they actually know and care about.",
    tryNow:
      "Practice observing carefully and writing down what you notice. Clear notes matter more than you might think.",
    wishIKnew:
      "Environmental work includes tech, communication, logistics, and community relationships, not only field biology.",
    runtime: "1m 05s"
  },
  malia: {
    id: "malia",
    name: "Kai P. Blossom",
    role: "Storytelling Studio Lead",
    location: "Hilo",
    tags: ["storytelling", "public information", "design"],
    summary:
      "I make videos and digital explainers that help local organizations communicate clearly with the communities they serve.",
    whatIDo:
      "I translate big issues into stories people can understand and trust. That means interviewing, designing, editing, and thinking about the audience the whole time.",
    howIGotHere:
      "I liked writing and media in school, but I did not realize those skills could support public service until I saw examples from local organizations.",
    favoriteThing:
      "My favorite part is making something clearer for people. Good communication can help a community act instead of just react.",
    tryNow:
      "Pick one issue you care about and explain it clearly for one specific audience. That is already real communication work.",
    wishIKnew:
      "Creative work is not extra. It can be core infrastructure for how communities learn and act.",
    runtime: "47s"
  },
  noa: {
    id: "noa",
    name: "Jordan L. Fern",
    role: "Systems Safety Mentor",
    location: "Oʻahu",
    tags: ["cybersecurity", "systems", "defense-tech"],
    summary:
      "I work on cyber and infrastructure problems where attention to systems, risk, and communication all matter.",
    whatIDo:
      "I help teams identify weak points, protect systems, and explain technical risk in ways decision-makers can actually use.",
    howIGotHere:
      "I started with coding classes and robotics, but what kept me in the field was realizing that systems work can also be public-interest work.",
    favoriteThing:
      "I like that the work combines logic with responsibility. You are protecting real people, not just solving abstract puzzles.",
    tryNow:
      "If you like puzzles, systems, or debugging, pay attention to how you break problems apart and explain them clearly. That transfer matters.",
    wishIKnew:
      "Cyber is not only for people who already see themselves as hardcore programmers. Communication and teamwork matter here too.",
    runtime: "58s"
  }
};

const sectorCatalog = {
  cleanEnergy: {
    label: "Local Growth Sector: Clean Energy",
    keywords: ["algebra", "geometry", "solar", "energy", "slope", "area", "battery", "resilience", "cost"],
    subjectBias: ["math", "stem"],
    defaultSignals: ["algebra", "solar", "cost modeling"],
    skillSignals: ["quantitative reasoning", "tradeoff analysis", "community resilience"],
    whyTitle: "Math becomes resilience planning.",
    buildWhyBody: (title) =>
      `"${title}" is more than an academic exercise. In Hawaiʻi, the same habits show up in solar layout planning, energy auditing, battery sizing, and the cost models behind resilience projects.`,
    whyImpact:
      "The translation is not only about a job title. It helps you see where analysis, design, and care for place can overlap in a future that serves home.",
    localValueTokens: [
      "Hawaiʻi growth area",
      "clean energy and resilience work",
      "community projects and sector partnerships"
    ],
    pathways: [
      {
        name: "Clean Energy Planner",
        fit: "Explore this if you like math, design, and resilience-minded problem-solving",
        community: "Supports household savings, grid resilience, and local energy independence.",
        nextStep: (title) => `Use "${title}" as a prompt to sketch where measurement or tradeoffs would matter in a real solar project.`
      },
      {
        name: "Construction Technology",
        fit: "Explore this if you like applied problem-solving and seeing ideas become physical systems",
        community: "Connects classroom math to local building, retrofitting, and infrastructure work.",
        nextStep: () => "Ask which local trades or design roles use estimating, measurement, and site planning every week."
      },
      {
        name: "Operations and Data Roles",
        fit: "Explore this if you like systems, logistics, and keeping projects running well",
        community: "Supports project coordination, energy operations, and public utility planning.",
        nextStep: () => "Track the variables that would change the cost or feasibility of a small energy project on your island."
      }
    ],
    voices: ["leilani", "noa"],
    steps: {
      now: [
        "Save the clean energy pathway and note one question you still have.",
        "Watch one Local Voices intro about how math or systems thinking shows up on the job."
      ],
      week: [
        "Ask a counselor or teacher about local STEM, sustainability, or engineering clubs.",
        "Bring one question about resilience, design, or energy tradeoffs to class."
      ],
      next: [
        "Create a mini project comparing two energy-use scenarios for a classroom, school, or household.",
        "Attend a school, campus, or community event related to sustainability, engineering, or infrastructure."
      ]
    }
  },
  environment: {
    label: "Local Growth Sector: Environmental Monitoring",
    keywords: ["marine", "biology", "reef", "ecology", "lab", "field", "watershed", "data", "monitoring"],
    subjectBias: ["science", "biology"],
    defaultSignals: ["marine", "field data", "observation"],
    skillSignals: ["observation", "pattern recognition", "care for place"],
    whyTitle: "Science becomes place-based stewardship.",
    buildWhyBody: (title) =>
      `"${title}" teaches more than lab procedure. In Hawaiʻi, these same habits show up in reef monitoring, watershed stewardship, public health labs, and community-based conservation work.`,
    whyImpact:
      "You can connect analysis, fieldwork, and care for place instead of seeing science as something only done somewhere else.",
    localValueTokens: [
      "place-based stewardship",
      "local monitoring and health pathways",
      "field, lab, and community science options"
    ],
    pathways: [
      {
        name: "Environmental Monitoring",
        fit: "Explore this if you like data, fieldwork, ecology, or advocacy for place",
        community: "Supports reef health, watershed protection, and community stewardship efforts.",
        nextStep: () => "List the kinds of observations a local monitoring team would need to collect over time."
      },
      {
        name: "Healthcare Diagnostics",
        fit: "Explore this if you are detail-oriented and interested in how careful science supports people",
        community: "Builds habits used in patient testing, diagnostics, and quality control.",
        nextStep: () => "Identify which parts of the assignment require precision, documentation, and careful interpretation."
      },
      {
        name: "Agri-Tech and Sensors",
        fit: "Explore this if you want science plus practical systems that can help local food futures",
        community: "Supports local food systems, sensor deployment, and environmental tracking.",
        nextStep: () => "Brainstorm where a sensor-based monitoring system could help a farm, fishpond, or coastal site."
      }
    ],
    voices: ["keoni", "malia"],
    steps: {
      now: [
        "Save a pathway that combines science with care for community.",
        "Write down one part of the assignment that felt meaningful beyond the classroom."
      ],
      week: [
        "Ask about clubs, internships, or projects related to science, health, or the environment.",
        "Draft a question for a local professional about how they first explored this kind of work."
      ],
      next: [
        "Build a simple observation log for a local environmental question you care about.",
        "Visit a campus lab, community event, or environmental organization if your school offers a connection."
      ]
    }
  },
  communications: {
    label: "Local Growth Sector: Community Communications",
    keywords: ["story", "storytelling", "english", "media", "campaign", "public", "video", "design", "writing"],
    subjectBias: ["english", "media", "social studies"],
    defaultSignals: ["storytelling", "public audience", "communication"],
    skillSignals: ["audience awareness", "translation", "community storytelling"],
    whyTitle: "Communication becomes civic and creative infrastructure.",
    buildWhyBody: (title) =>
      `"${title}" is not just about presentation. In Hawaiʻi, storytelling supports public information, nonprofit outreach, education, cultural interpretation, and digital experiences that help communities understand important issues.`,
    whyImpact:
      "You can see creative work as useful, local, and community-serving instead of secondary to so-called real careers.",
    localValueTokens: [
      "communication as community infrastructure",
      "portfolio and project-based entry points",
      "school, nonprofit, and public storytelling work"
    ],
    pathways: [
      {
        name: "Community Communications",
        fit: "Explore this if you like messaging, design, and helping people understand something clearly",
        community: "Helps schools, nonprofits, and public agencies communicate clearly and responsibly.",
        nextStep: () => "Compare how two local organizations explain a public issue to different audiences."
      },
      {
        name: "Creative Technology",
        fit: "Explore this if you are drawn to media plus tools and want to shape digital experiences",
        community: "Connects visual storytelling with UX, product education, and digital content production.",
        nextStep: () => "Sketch how an app, site, or campaign page would explain your project more clearly."
      },
      {
        name: "Education and Outreach Design",
        fit: "Explore this if you want people-centered impact through education or outreach",
        community: "Supports museums, schools, and public-interest campaigns that depend on accessible communication.",
        nextStep: () => "Revise one part of your project for a younger student, family audience, or community event."
      }
    ],
    voices: ["malia", "leilani"],
    steps: {
      now: [
        "Choose one pathway where communication is a form of service.",
        "Watch a professional intro about how storytelling helps people take action."
      ],
      week: [
        "Ask a teacher what local issues would benefit from better digital explanation.",
        "Try one prompt starter to ask how creative careers connect with community impact."
      ],
      next: [
        "Build a mini portfolio piece that shows one public-interest communication skill.",
        "Join or help start a media, yearbook, design, or civic storytelling project at school."
      ]
    }
  },
  defenseTech: {
    label: "Local Growth Sector: Defense-Tech and Cyber",
    keywords: ["coding", "computer", "cyber", "robot", "robotics", "network", "software", "engineering", "algorithm"],
    subjectBias: ["computer science", "engineering", "stem"],
    defaultSignals: ["systems", "debugging", "cyber"],
    skillSignals: ["systems thinking", "debugging", "risk awareness"],
    whyTitle: "Code becomes systems responsibility.",
    buildWhyBody: (title) =>
      `"${title}" is not only about getting the code to run. In Hawaiʻi, the same habits show up in cybersecurity, infrastructure protection, defense-tech operations, and digital systems that communities rely on every day.`,
    whyImpact:
      "You can see technical problem-solving as a local public-interest pathway, not only as a ticket to leave.",
    localValueTokens: [
      "technical public-interest work",
      "systems and infrastructure pathways",
      "projects, certificates, and college options"
    ],
    pathways: [
      {
        name: "Cyber Operations",
        fit: "Explore this if you like systems, debugging, or spotting weak points in a process",
        community: "Supports digital safety, infrastructure resilience, and operational trust.",
        nextStep: () => "Write down the steps in a system you use every day and identify where failure or risk could show up."
      },
      {
        name: "Software and Automation",
        fit: "Explore this if you like building tools that make work clearer or faster",
        community: "Connects coding to education, logistics, public service, and local business needs.",
        nextStep: () => "Turn one repetitive school task into a tiny product idea or workflow improvement."
      },
      {
        name: "Infrastructure and Mission Systems",
        fit: "Explore this if you like applied engineering and high-stakes coordination",
        community: "Supports operations where technical systems and human communication have to work together.",
        nextStep: () => "Ask which local roles combine technical skills with communication and operational judgment."
      }
    ],
    voices: ["noa", "leilani"],
    steps: {
      now: [
        "Save the cyber or systems pathway and one question you want to ask.",
        "Watch a Local Voices intro about how technical work protects real people."
      ],
      week: [
        "Ask about coding, robotics, or engineering clubs at school.",
        "Draft one question about how a technical skill can serve Hawaiʻi directly."
      ],
      next: [
        "Build a tiny tool, automation, or debugging walkthrough that solves a real student problem.",
        "Attend a workshop, club meeting, or campus event related to computing or engineering."
      ]
    }
  },
  general: {
    label: "Local Growth Sector: Community Problem Solving",
    keywords: [],
    subjectBias: [],
    defaultSignals: ["problem solving", "community impact", "curiosity"],
    skillSignals: ["curiosity", "translation", "adaptability"],
    whyTitle: "Schoolwork becomes a clue about who you are becoming.",
    buildWhyBody: (title) =>
      `"${title}" can still be translated into real strengths. Hōʻike looks for the habits inside the assignment, like research, collaboration, analysis, or communication, and connects them to ways you can contribute in Hawaiʻi.`,
    whyImpact:
      "Even when the pathway is not obvious yet, you can start with strengths, values, and small actions instead of waiting until your future feels fully decided.",
    localValueTokens: [
      "multiple ways in",
      "college, certificate, apprenticeship, or community route",
      "aligned with Hawaiʻi's 55 by '25 attainment goal"
    ],
    pathways: [
      {
        name: "Community Innovation",
        fit: "Explore this if you like solving problems that affect real people",
        community: "Supports local organizations, schools, and small teams that need practical thinkers.",
        nextStep: () => "Name one local issue this assignment made you think about and how you might learn more."
      },
      {
        name: "Education and Outreach",
        fit: "Explore this if you like helping others understand something clearly",
        community: "Shows up in classrooms, nonprofits, museums, and community programs.",
        nextStep: () => "Explain the assignment to a younger student or family member and notice what comes naturally."
      },
      {
        name: "Project and Team Support",
        fit: "Explore this if you like organizing, coordinating, and keeping things moving",
        community: "Supports almost every local sector, even if your exact role changes over time.",
        nextStep: () => "List the skills in this assignment that would help a team succeed, not just help one student earn a grade."
      }
    ],
    voices: ["malia", "keoni"],
    steps: {
      now: [
        "Pick one pathway that sounds interesting, even if it is only a maybe.",
        "Choose one prompt starter so curiosity turns into a question."
      ],
      week: [
        "Talk to a counselor, teacher, or trusted adult about what parts of the assignment felt most natural.",
        "Save one Local Voices profile that made a future feel more visible."
      ],
      next: [
        "Try a mini project or volunteer experience connected to an issue you care about.",
        "Track which types of problems, stories, or systems you keep coming back to."
      ]
    }
  }
};

const assignments = [
  {
    id: "solar",
    sectorId: "cleanEnergy",
    translationSource: "Preset example",
    title: "Algebra for Solar Design",
    className: "Algebra II",
    summary: "Use slope, area, and cost assumptions to compare rooftop solar layouts.",
    whyTitle: "Math becomes resilience planning.",
    whyBody:
      "This assignment is not only about formulas. In Hawaiʻi, algebra shows up in solar layout planning, battery sizing, energy auditing, and the cost models that shape household and community resilience projects.",
    whyImpact:
      "When you can explain where the math lives outside class, you can start to see what kinds of problems you enjoy solving and how those strengths could help the communities that raised you.",
    pathways: sectorCatalog.cleanEnergy.pathways.map((pathway) => ({
      ...pathway,
      nextStep: pathway.nextStep("Algebra for Solar Design")
    })),
    voices: ["leilani", "keoni"],
    steps: sectorCatalog.cleanEnergy.steps
  },
  {
    id: "reef",
    sectorId: "environment",
    translationSource: "Preset example",
    title: "Marine Biology Data Lab",
    className: "Biology",
    summary: "Interpret reef health indicators and propose a monitoring plan.",
    whyTitle: "Science becomes place-based stewardship.",
    whyBody:
      "A reef data lab teaches more than lab procedure. In Hawaiʻi, those same habits show up in environmental monitoring, public health labs, agriculture technology, and community-based conservation work.",
    whyImpact:
      "You can connect analysis, fieldwork, and care for place instead of seeing science as a distant profession or something only done somewhere else.",
    pathways: sectorCatalog.environment.pathways.map((pathway) => ({
      ...pathway,
      nextStep: pathway.nextStep("Marine Biology Data Lab")
    })),
    voices: ["malia", "keoni"],
    steps: sectorCatalog.environment.steps
  },
  {
    id: "media",
    sectorId: "communications",
    translationSource: "Preset example",
    title: "Digital Storytelling for Public Information",
    className: "English / Digital Media",
    summary: "Create a short campaign explaining a community issue to a public audience.",
    whyTitle: "Communication becomes civic and creative infrastructure.",
    whyBody:
      "A media assignment is not just about presentation. In Hawaiʻi, storytelling supports public information, nonprofit outreach, education, tourism ethics, and digital careers that help communities understand important issues.",
    whyImpact:
      "You can see creative work as useful, local, and community-serving instead of secondary to 'real' careers.",
    pathways: sectorCatalog.communications.pathways.map((pathway) => ({
      ...pathway,
      nextStep: pathway.nextStep("Digital Storytelling for Public Information")
    })),
    voices: ["malia", "leilani"],
    steps: sectorCatalog.communications.steps
  }
];

const interestCatalog = [
  "drawing and design",
  "gaming",
  "sports",
  "music",
  "coding",
  "helping people",
  "fixing things",
  "storytelling",
  "being outdoors",
  "working with animals",
  "leadership",
  "community service"
];

const routeCatalog = {
  cleanEnergy: [
    "Start with a school club, makerspace, or campus event focused on sustainability or engineering.",
    "Explore trade, apprenticeship, or technician routes alongside community college or university options.",
    "Volunteer on school or community resilience projects to build local experience before choosing a degree path."
  ],
  environment: [
    "Begin with volunteer projects, mālama ʻāina workdays, fishpond programs, or science clubs.",
    "Look at certificates, field technician roles, community college pathways, and university study as parallel options.",
    "Build credibility through observation logs, citizen science, or community stewardship work even before formal training."
  ],
  communications: [
    "Start with media clubs, yearbook, social media projects, or helping a local group communicate clearly.",
    "A portfolio, freelance work, internships, certificates, and entrepreneurship can all matter alongside college.",
    "Creative careers can grow from self-taught practice, community work, paid gigs, or formal study."
  ],
  defenseTech: [
    "Begin with coding clubs, robotics, cybersecurity challenges, or small tool-building projects.",
    "Certificates, military or public-service pathways, community college, apprenticeships, and university routes can all lead in.",
    "Employers often care about projects, reliability, teamwork, and problem-solving as much as one single academic route."
  ],
  general: [
    "Start where you already show curiosity: a club, service project, hobby, family responsibility, or part-time role.",
    "Community college, university, certificates, apprenticeships, paid training, entrepreneurship, and volunteering can all be valid routes.",
    "You do not need one perfect pipeline right away. Real pathways can stay flexible while you keep learning what fits."
  ]
};

const cohorts = [
  {
    name: "PueoPod",
    icon: "🦉",
    iconLabel: "Pueo owl class icon",
    accent: "night-study, pattern spotting, and calm leadership",
    handles: ["CuriousPueo", "BoldPueo", "CalmPueo", "BrightPueo", "SteadyPueo", "SwiftPueo"]
  },
  {
    name: "HonuHui",
    icon: "🐢",
    iconLabel: "Honu turtle class icon",
    accent: "steady care, place-based learning, and long-view thinking",
    handles: ["SteadyHonu", "CuriousHonu", "BraveHonu", "KindHonu", "SunnyHonu", "OceanHonu"]
  },
  {
    name: "PopokiPod",
    icon: "🐱",
    iconLabel: "Popoki cat class icon",
    accent: "creative problem-solving, curiosity, and playful confidence",
    handles: ["CleverPopoki", "CalmPopoki", "BrightPopoki", "SwiftPopoki", "KindPopoki", "BoldPopoki"]
  },
  {
    name: "MangoGrove",
    icon: "🌺",
    iconLabel: "MangoGrove blossom icon",
    accent: "creative energy, expression, and community color",
    handles: ["SunnyMango", "KindMango", "BraveMango", "FreshMango", "GoldenMango", "LivelyMango"]
  }
];

const allHandles = cohorts.flatMap((cohort) => cohort.handles);
const handleProfiles = {
  CuriousPueo: ["being outdoors", "community service", "storytelling"],
  BoldPueo: ["sports", "leadership", "helping people"],
  CalmPueo: ["music", "working with animals", "being outdoors"],
  BrightPueo: ["coding", "gaming", "fixing things"],
  SteadyPueo: ["helping people", "community service", "leadership"],
  SwiftPueo: ["sports", "coding", "being outdoors"],
  SteadyHonu: ["being outdoors", "community service", "working with animals"],
  CuriousHonu: ["science", "being outdoors", "storytelling"],
  BraveHonu: ["leadership", "helping people", "community service"],
  KindHonu: ["working with animals", "helping people", "music"],
  SunnyHonu: ["farming", "being outdoors", "community service"],
  OceanHonu: ["science", "being outdoors", "animals"],
  CleverPopoki: ["drawing and design", "storytelling", "coding"],
  CalmPopoki: ["music", "storytelling", "helping people"],
  BrightPopoki: ["coding", "gaming", "fixing things"],
  SwiftPopoki: ["sports", "leadership", "gaming"],
  KindPopoki: ["working with animals", "helping people", "community service"],
  BoldPopoki: ["drawing and design", "leadership", "storytelling"],
  SunnyMango: ["drawing and design", "music", "community service"],
  KindMango: ["helping people", "storytelling", "working with animals"],
  BraveMango: ["sports", "leadership", "community service"],
  FreshMango: ["being outdoors", "working with animals", "helping people"],
  GoldenMango: ["coding", "drawing and design", "storytelling"],
  LivelyMango: ["music", "gaming", "sports"]
};

const assignmentList = document.getElementById("assignment-list");
const pathwayList = document.getElementById("pathway-list");
const professionalWhy = document.getElementById("professional-why");
const translationLog = document.getElementById("translation-log");
const voicesList = document.getElementById("voices-list");
const stepsPanel = document.getElementById("steps-panel");
const promptList = document.getElementById("prompt-list");
const interestList = document.getElementById("interest-list");
const pathwayRoutes = document.getElementById("pathway-routes");
const questionBox = document.getElementById("question-box");
const questionStatus = document.getElementById("question-status");
const studentHandle = document.getElementById("student-handle");
const studentCohort = document.getElementById("student-cohort");
const cohortSelect = document.getElementById("cohort-select");
const starterInterestProfile = document.getElementById("starter-interest-profile");
const teacherClassBadge = document.getElementById("teacher-class-badge");
const dialog = document.getElementById("voice-dialog");
const dialogContent = document.getElementById("dialog-content");
const titleInput = document.getElementById("assignment-title-input");
const subjectInput = document.getElementById("assignment-subject-input");
const runTranslationButton = document.getElementById("run-translation");
const translationStatus = document.getElementById("translation-status");
const stepsProgressCount = document.getElementById("steps-progress-count");
const stepsProgressDetail = document.getElementById("steps-progress-detail");
const stepsContext = document.getElementById("steps-context");
const studentViewButton = document.getElementById("student-view-button");
const instructorViewButton = document.getElementById("instructor-view-button");
const explainerViewButton = document.getElementById("explainer-view-button");
const viewModeDescription = document.getElementById("view-mode-description");
const stepsProgressFill = document.getElementById("steps-progress-fill");
const savedPathwaysCount = document.getElementById("saved-pathways-count");
const savedPathwaysDetail = document.getElementById("saved-pathways-detail");
const teacherClassAlias = document.getElementById("teacher-class-alias");
const teacherSaveTotal = document.getElementById("teacher-save-total");
const teacherSaveTotalDetail = document.getElementById("teacher-save-total-detail");
const teacherPendingCount = document.getElementById("teacher-pending-count");
const teacherPendingDetail = document.getElementById("teacher-pending-detail");
const teacherVoteList = document.getElementById("teacher-vote-list");
const teacherTopVoice = document.getElementById("teacher-top-voice");
const teacherTopVoiceDetail = document.getElementById("teacher-top-voice-detail");
const teacherQuestionQueue = document.getElementById("teacher-question-queue");
const toast = document.getElementById("toast");
const explainerArchitectureTab = document.getElementById("explainer-architecture-tab");
const explainerReasoningTab = document.getElementById("explainer-reasoning-tab");
const explainerResearchTab = document.getElementById("explainer-research-tab");
const explainerArchitecturePanel = document.getElementById("explainer-architecture-panel");
const explainerReasoningPanel = document.getElementById("explainer-reasoning-panel");
const explainerResearchPanel = document.getElementById("explainer-research-panel");

const STORAGE_KEY = "hoike-demo-state-v1";
const TRANSLATION_DELAY_MS = 700;
const DEFAULT_QUESTION_STATUS = "School staff review questions before replies.";

function loadPersistedState() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (_error) {
    return {};
  }
}

const persistedState = loadPersistedState();
const normalizedPersistedViewMode =
  persistedState.viewMode === "classroom" ? "student" : persistedState.viewMode;
const initialCohortName =
  persistedState.selectedCohortName && cohorts.some((cohort) => cohort.name === persistedState.selectedCohortName)
    ? persistedState.selectedCohortName
    : cohorts[0].name;

let selectedAssignment = persistedState.customAssignment
  ? enrichAssignment(persistedState.customAssignment)
  : enrichAssignment(
      assignments.find((assignment) => assignment.id === persistedState.selectedAssignmentId) || assignments[0]
    );
let currentViewMode = normalizedPersistedViewMode || "student";
const completedSteps = new Set(persistedState.completedSteps || []);
let selectedCohortName = initialCohortName;
const cohortSavedPathways = persistedState.cohortSavedPathways || {};
const classroomVotes = new Map(persistedState.classroomVotes || []);
const handleVotes = new Set(persistedState.handleVotes || []);
const selectedPathways = new Map(persistedState.selectedPathways || []);
const selectedVoices = new Map(persistedState.selectedVoices || []);
const submittedQuestions = persistedState.submittedQuestions || [];
const selectedInterests = new Set(persistedState.selectedInterests || []);
let pathwayFeedbackMode = "";
let pathwayFeedbackTimer;
const teacherInviteRequests = new Set(persistedState.teacherInviteRequests || []);
const teacherPromptPreviews = new Set(persistedState.teacherPromptPreviews || []);
const currentCohort = cohorts.find((cohort) => cohort.name === selectedCohortName) || cohorts[0];
let currentHandle =
  persistedState.studentHandle && currentCohort.handles.includes(persistedState.studentHandle)
    ? persistedState.studentHandle
    : currentCohort.handles[0];
let openStepsSection = "Do Now";

if (!persistedState.selectedInterests?.length) {
  (handleProfiles[currentHandle] || []).forEach((interest) => selectedInterests.add(interest));
}

const cohortBaseline = {
  PueoPod: {
    saved: 8,
    pending: 0,
    votes: {
      leilani: 6,
      keoni: 8,
      malia: 3,
      noa: 2
    }
  },
  HonuHui: {
    saved: 6,
    pending: 0,
    votes: {
      leilani: 4,
      keoni: 7,
      malia: 2,
      noa: 2
    }
  },
  PopokiPod: {
    saved: 7,
    pending: 0,
    votes: {
      leilani: 2,
      keoni: 2,
      malia: 6,
      noa: 5
    }
  },
  MangoGrove: {
    saved: 5,
    pending: 0,
    votes: {
      leilani: 2,
      keoni: 3,
      malia: 7,
      noa: 4
    }
  }
};

function getCohortForHandle(handle) {
  return cohorts.find((cohort) => cohort.handles.includes(handle)) || cohorts[0];
}

function getCurrentCohort() {
  return cohorts.find((cohort) => cohort.name === selectedCohortName) || cohorts[0];
}

function getCohortBadgeMarkup(cohort = getCurrentCohort(), options = {}) {
  const { showName = true, showAccent = true } = options;
  return `
    <span class="cohort-badge-icon" aria-hidden="true">${cohort.icon}</span>
    <div class="cohort-badge-copy">
      ${showName ? `<span class="cohort-badge-name">${cohort.name}</span>` : ""}
      ${showAccent ? `<small>${cohort.accent}</small>` : ""}
    </div>
  `;
}

function getSavedPathwaysForCurrentCohort() {
  return new Set(cohortSavedPathways[selectedCohortName] || []);
}

function hasSavedPathway(pathwayKey) {
  return getSavedPathwaysForCurrentCohort().has(pathwayKey);
}

function setSavedPathway(pathwayKey, shouldSave) {
  const saved = getSavedPathwaysForCurrentCohort();
  if (shouldSave) {
    saved.add(pathwayKey);
  } else {
    saved.delete(pathwayKey);
  }
  cohortSavedPathways[selectedCohortName] = [...saved];
}

function toggleSavedPathway(pathwayKey) {
  const saved = getSavedPathwaysForCurrentCohort();
  const shouldSave = !saved.has(pathwayKey);
  setSavedPathway(pathwayKey, shouldSave);
}

function getPathwayEmoji(pathwayName) {
  const emojiMap = {
    "Clean Energy Planner": "☀️",
    "Construction Technology": "🏗️",
    "Operations and Data Roles": "📊",
    "Environmental Monitoring": "🌊",
    "Healthcare Diagnostics": "🩺",
    "Agri-Tech and Sensors": "🚜",
    "Community Communications": "📣",
    "Creative Technology": "🎨",
    "Education and Outreach Design": "📚",
    "Cyber Operations": "🛡️",
    "Software and Automation": "🤖",
    "Infrastructure and Mission Systems": "🛰️",
    "Community Innovation": "🌱",
    "Education and Outreach": "🤝",
    "Project and Team Support": "🧩"
  };

  return emojiMap[pathwayName] || "✨";
}

function getVoiceAvatar(voiceId) {
  const avatarMap = {
    leilani: "☀️",
    keoni: "🌊",
    malia: "🎨",
    noa: "🛡️"
  };

  return avatarMap[voiceId] || "🌺";
}

function getInterestEmoji(interest) {
  const emojiMap = {
    "being outdoors": "🌿",
    gaming: "🎮",
    storytelling: "📝",
    music: "🎵",
    "fixing things": "🛠️",
    "helping people": "🤝",
    "community service": "🏝️",
    science: "🧪",
    design: "🎨",
    "drawing and design": "🎨",
    coding: "💻",
    sports: "🏄",
    farming: "🚜",
    animals: "🐢",
    "working with animals": "🐢",
    leadership: "🤙"
  };

  return emojiMap[interest] || "✨";
}

function getSubjectEmoji(subject) {
  const normalized = normalize(subject);
  if (normalized.includes("english")) return "📚";
  if (normalized.includes("art")) return "🎨";
  if (normalized.includes("media")) return "🎬";
  if (normalized.includes("computer")) return "💻";
  if (normalized.includes("technology")) return "🧠";
  if (normalized.includes("math")) return "➗";
  if (normalized.includes("science")) return "🧪";
  if (normalized.includes("engineering")) return "🛠️";
  if (normalized.includes("social")) return "🌍";
  if (normalized.includes("history")) return "🏛️";
  if (normalized.includes("community")) return "🤝";
  return "✨";
}

function getHandleInterests(handle = currentHandle) {
  return handleProfiles[handle] || [];
}

function renderStarterInterestProfile() {
  const starterInterests = getHandleInterests();
  starterInterestProfile.innerHTML = `
    <div class="starter-profile-intro">
      <strong>Pick one way in.</strong>
      <p>One interest, activity, or cause is enough to start.</p>
    </div>
    <div class="starter-profile-chips">
      ${starterInterests
        .map(
          (interest) =>
            `<span class="starter-profile-chip">${getInterestEmoji(interest)} ${interest}</span>`
        )
        .join("")}
    </div>
  `;
}

function applyHandleInterestProfile() {
  selectedInterests.clear();
  getHandleInterests().forEach((interest) => selectedInterests.add(interest));
}

function persistState() {
  const state = {
    selectedAssignmentId: selectedAssignment.id === "generated" ? null : selectedAssignment.id,
    customAssignment: selectedAssignment.id === "generated" ? selectedAssignment : null,
    viewMode: currentViewMode,
    completedSteps: [...completedSteps],
    cohortSavedPathways,
    classroomVotes: [...classroomVotes.entries()],
    handleVotes: [...handleVotes],
    selectedPathways: [...selectedPathways.entries()],
    selectedVoices: [...selectedVoices.entries()],
    submittedQuestions,
    selectedInterests: [...selectedInterests],
    teacherInviteRequests: [...teacherInviteRequests],
    teacherPromptPreviews: [...teacherPromptPreviews],
    studentHandle: currentHandle,
    selectedCohortName,
    questionDraft: questionBox.value,
    assignmentTitleInput: titleInput.value,
    assignmentSubjectInput: subjectInput.value
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function makeQuestionId() {
  return `q-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.onclick = null;
  toast.classList.remove("is-actionable");
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
    toast.classList.remove("is-actionable");
    toast.onclick = null;
  }, 2200);
}

function showActionToast(message, onClick) {
  toast.textContent = message;
  toast.classList.add("is-visible", "is-actionable");
  toast.onclick = () => {
    onClick();
    toast.classList.remove("is-visible", "is-actionable");
    toast.onclick = null;
    window.clearTimeout(showToast.timeoutId);
  };
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible", "is-actionable");
    toast.onclick = null;
  }, 6000);
}

function setViewMode(mode) {
  currentViewMode = mode;
  document.body.dataset.viewMode = mode;

  const isStudent = mode === "student";
  const isInstructor = mode === "instructor";
  const isExplainer = mode === "explainer";

  studentViewButton.classList.toggle("is-active", isStudent);
  studentViewButton.setAttribute("aria-pressed", String(isStudent));
  instructorViewButton.classList.toggle("is-active", isInstructor);
  instructorViewButton.setAttribute("aria-pressed", String(isInstructor));
  explainerViewButton.classList.toggle("is-active", isExplainer);
  explainerViewButton.setAttribute("aria-pressed", String(isExplainer));

  if (viewModeDescription) {
    if (isStudent) {
      viewModeDescription.innerHTML = `
        <span>Translate what you are already doing into strengths, pathways, and small next steps.</span>
        <span>Use Local Voices and guided questions to explore safely.</span>
      `;
    } else if (isInstructor) {
      viewModeDescription.innerHTML = `
        <span>See classroom snapshots, invite signals, and moderated questions in one teacher-managed view.</span>
        <span>Track who students want to hear from and what pathways keep surfacing.</span>
      `;
    } else {
      viewModeDescription.innerHTML = `
        <span>See the classroom-facing product, the AI reasoning layer, and the local research behind the prototype.</span>
        <span>Reviewer mode explains why Hōʻike is built this way and how it stays school-safe.</span>
      `;
    }
  }
  if (isInstructor) {
    renderTeacherView(true);
  }
  persistState();
}

function syncIdentitySurfaces() {
  const cohort = getCurrentCohort();
  studentHandle.textContent = currentHandle;
  if (studentCohort) {
    studentCohort.textContent = `Class cohort: ${cohort.name}`;
  }
  teacherClassAlias.textContent = cohort.name;
  cohortSelect.value = cohort.name;
  if (teacherClassBadge) {
    teacherClassBadge.textContent = cohort.icon;
  }
  renderStarterInterestProfile();
}

function getAssignmentKey() {
  return `${selectedAssignment.id}:${selectedAssignment.title}:${selectedAssignment.className}`;
}

function getTeacherActionKey(action, voiceId, cohortName = selectedCohortName) {
  return `${cohortName}::${voiceId}::${action}`;
}

function getStepKey(label, item) {
  return `${getAssignmentKey()}::${label}::${item}`;
}

function getPathwayKey(pathwayName) {
  return `${getAssignmentKey()}::pathway::${pathwayName}`;
}

function getSelectedPathwayName() {
  return selectedPathways.get(getAssignmentKey()) || selectedAssignment.pathways[0]?.name;
}

function getSelectedPathway() {
  return (
    selectedAssignment.pathways.find((pathway) => pathway.name === getSelectedPathwayName()) ||
    selectedAssignment.pathways[0]
  );
}

function getSelectedVoiceId() {
  return selectedVoices.get(getAssignmentKey()) || selectedAssignment.voices[0];
}

function getSelectedVoice() {
  return voices[getSelectedVoiceId()] || voices[selectedAssignment.voices[0]];
}

function classNameToSubject(className) {
  const normalized = className.toLowerCase();
  if (normalized.includes("biology") || normalized.includes("science")) return "Science";
  if (normalized.includes("english") || normalized.includes("media")) return "Art and Media";
  if (normalized.includes("computer") || normalized.includes("tech")) return "Computer Science and Technology";
  if (normalized.includes("engineering")) return "Engineering";
  if (normalized.includes("social") || normalized.includes("history")) return "Social Studies";
  if (normalized.includes("community")) return "Community";
  if (normalized.includes("math") || normalized.includes("algebra") || normalized.includes("geometry")) return "Math";
  return "Other";
}

function getContextualPrompts() {
  const voice = getSelectedVoice();
  const sector = sectorCatalog[selectedAssignment.sectorId] || sectorCatalog.general;
  const sectorLabel = sector.label.replace(/^Local Growth Sector:\s*/i, "");
  return [
    `What should I try in high school if I am curious about ${voice.tags[0]}?`,
    `How does ${sectorLabel} work help Hawaiʻi communities?`,
    `What made you choose this work over other options?`
  ];
}

function getVoiceVoteKey(voiceId, cohortName = selectedCohortName) {
  return `${cohortName}::voice-vote::${voiceId}`;
}

function getHandleVoiceVoteKey(
  voiceId,
  cohortName = selectedCohortName,
  handle = currentHandle
) {
  return `${getVoiceVoteKey(voiceId, cohortName)}::handle::${handle}`;
}

async function requestTranslation(title, subject) {
  await new Promise((resolve) => window.setTimeout(resolve, TRANSLATION_DELAY_MS));
  return buildGeneratedAssignment(title, subject);
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function detectSector(title, subject) {
  const text = normalize(`${title} ${subject}`);
  const normalizedSubject = normalize(subject);

  const rankings = Object.entries(sectorCatalog)
    .filter(([id]) => id !== "general")
    .map(([id, sector]) => {
      let score = 0;
      const matchedKeywords = [];

      sector.keywords.forEach((keyword) => {
        if (text.includes(keyword)) {
          score += keyword.includes(" ") ? 3 : 2;
          matchedKeywords.push(keyword);
        }
      });

      sector.subjectBias.forEach((subjectWord) => {
        if (normalizedSubject.includes(subjectWord)) {
          score += 2;
        }
      });

      return { id, score, matchedKeywords: unique(matchedKeywords) };
    })
    .sort((left, right) => right.score - left.score);

  if (!rankings.length || rankings[0].score === 0) {
    return {
      sectorId: "general",
      matchedKeywords: [],
      rankings: [{ id: "general", score: 0, matchedKeywords: [] }]
    };
  }

  return {
    sectorId: rankings[0].id,
    matchedKeywords: rankings[0].matchedKeywords,
    rankings
  };
}

function buildTranslationLog(assignment) {
  const normalizeSourceLabel = (label) => {
    const normalizedLabel = String(label || "").trim().toLowerCase();

    if (
      !normalizedLabel ||
      normalizedLabel.includes("openai codex-guided") ||
      normalizedLabel.includes("codex-guided activity scan")
    ) {
      return "Hōʻike keyword scan";
    }

    return label;
  };

  if (assignment.translationLog) {
    const sector = sectorCatalog[assignment.sectorId] || sectorCatalog.general;
    return {
      localValueTokens: sector.localValueTokens,
      ...assignment.translationLog,
      sourceLabel: normalizeSourceLabel(assignment.translationLog.sourceLabel || assignment.translationSource)
    };
  }

  const sector = sectorCatalog[assignment.sectorId] || sectorCatalog.general;
  const detection = detectSector(assignment.title, assignment.className);

  return {
    sourceLabel: normalizeSourceLabel(assignment.translationSource || "Preset example"),
    matchedKeywords: detection.matchedKeywords.length ? detection.matchedKeywords : sector.defaultSignals,
    skillSignals: sector.skillSignals,
    sectorLabel: sector.label,
    localValueTokens: sector.localValueTokens,
    alternateSectors: detection.rankings
      .slice(1, 3)
      .map((ranking) => sectorCatalog[ranking.id].label),
    localVoices: assignment.voices.map((voiceId) => voices[voiceId].name),
    identityLine:
      "Hōʻike translates the assignment into strengths, stories, and local contribution instead of forcing a single forever career choice."
  };
}

function enrichAssignment(assignment) {
  return {
    ...assignment,
    translationLog: buildTranslationLog(assignment)
  };
}

function buildGeneratedAssignment(title, subject) {
  const detection = detectSector(title, subject);
  const sector = sectorCatalog[detection.sectorId] || sectorCatalog.general;
  const pathways = sector.pathways.map((pathway) => ({
    ...pathway,
    nextStep: pathway.nextStep(title)
  }));

  return {
    id: "generated",
    sectorId: detection.sectorId,
    translationSource: "Hōʻike keyword scan",
    title,
    className: subject,
    summary: `Generated from a pasted assignment title in the demo flow.`,
    whyTitle: sector.whyTitle,
    whyBody: sector.buildWhyBody(title, subject),
    whyImpact: sector.whyImpact,
    pathways,
    voices: sector.voices,
    steps: sector.steps,
    translationLog: {
      sourceLabel: "Hōʻike keyword scan",
      matchedKeywords: detection.matchedKeywords.length ? detection.matchedKeywords : sector.defaultSignals,
      skillSignals: sector.skillSignals,
      sectorLabel: sector.label,
      localValueTokens: sector.localValueTokens,
      alternateSectors: detection.rankings
        .slice(1, 3)
        .map((ranking) => sectorCatalog[ranking.id].label),
      localVoices: sector.voices.map((voiceId) => voices[voiceId].name),
      identityLine:
        "The assignment becomes a story about what you may enjoy, what strengths are emerging, and how those strengths could help a Hawaiʻi community."
    }
  };
}

function getDisplayWhyHeadline() {
  const headlineMap = {
    "Math becomes resilience planning.": "Today's actions shape resilience.",
    "Science becomes place-based stewardship.": "Today's actions shape stewardship.",
    "Communication becomes civic and creative infrastructure.":
      "Today's actions shape tomorrow's communities.",
    "Code becomes systems responsibility.": "Today's actions shape systems work.",
    "Schoolwork becomes a clue about who you are becoming.": "Today's actions shape tomorrow's you."
  };

  return headlineMap[selectedAssignment.whyTitle] || selectedAssignment.whyTitle;
}

function getDisplayWhyBody() {
  const rawBody =
    selectedAssignment.whyBody ||
    "This activity still points to strengths you can use here at home.";

  if (selectedAssignment.title) {
    const escapedTitle = selectedAssignment.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return rawBody
      .replace(new RegExp(`^"${escapedTitle}"\\s+is\\s+`, "i"), "This activity is ")
      .replace(new RegExp(`^"${escapedTitle}"\\s+teaches\\s+`, "i"), "This activity teaches ")
      .replace(new RegExp(`^"${escapedTitle}"\\s+shows\\s+`, "i"), "This activity shows ");
  }

  return rawBody;
}

function getDisplayWhyBridge() {
  const bridgeMap = {
    cleanEnergy: "That can grow into design, planning, and resilience work here at home.",
    environment: "That can grow into field, lab, and stewardship pathways here at home.",
    communications: "That can grow into public storytelling, outreach, and service here at home.",
    defenseTech: "That can grow into systems, safety, and technical teamwork here at home.",
    general: "That can grow into real local pathways here at home."
  };

  return bridgeMap[selectedAssignment.sectorId] || bridgeMap.general;
}

function getDisplayPathwayFit(pathway) {
  return pathway.fit
    .replace(/^Explore this if you like\s+/i, "")
    .replace(/^Explore this if you are\s+/i, "")
    .replace(/^Explore this if you want\s+/i, "")
    .replace(/^Explore this if\s+/i, "")
    .replace(/^you are\s+/i, "")
    .replace(/^you want\s+/i, "")
    .replace(/^you like\s+/i, "")
    .replace(/\.$/, "");
}

function getCompactRoutes(sectorId) {
  const routeMap = {
    cleanEnergy: ["Clubs or builds", "Certificates or college", "Community projects"],
    environment: ["Science clubs", "Certificates or college", "Stewardship work"],
    communications: ["Media projects", "Portfolio or college", "Community stories"],
    defenseTech: ["Coding or robotics", "Certificates or college", "Projects that ship"],
    general: ["Clubs or service", "Certificates or college", "Flexible ways in"]
  };

  return routeMap[sectorId] || routeMap.general;
}

function getCompactNextStep(stepText) {
  return stepText
    .replace(/^Use ".+?" as a prompt to /, "")
    .replace(/^Ask which /, "Ask which ")
    .replace(/^Track /, "Track ")
    .replace(/^List /, "List ")
    .replace(/^Identify /, "Identify ")
    .replace(/^Brainstorm /, "Brainstorm ")
    .replace(/^Compare /, "Compare ")
    .replace(/^Sketch /, "Sketch ")
    .replace(/^Revise /, "Revise ")
    .replace(/^Write down /, "Write down ")
    .replace(/^Turn /, "Turn ")
    .replace(/^Name /, "Name ")
    .replace(/^Explain /, "Explain ")
    .replace(/\.$/, "");
}

function updateSavedPathwaysSummary() {
  const allSavedNames = [...getSavedPathwaysForCurrentCohort()]
    .map((pathwayKey) => pathwayKey.split("::pathway::")[1])
    .filter(Boolean);

  savedPathwaysCount.textContent = String(allSavedNames.length);
  savedPathwaysDetail.textContent =
    allSavedNames.length === 0
      ? "Save ideas you want to come back to."
      : `Returning to: ${allSavedNames.join(" • ")}`;
  renderTeacherView();
  persistState();
}

function setQuestionStatus(message = DEFAULT_QUESTION_STATUS) {
  questionStatus.textContent = message;
}

function renderAssignments() {
  assignmentList.innerHTML = "";

  assignments.forEach((assignment) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `assignment-button${assignment.id === selectedAssignment.id ? " active" : ""}`;
    button.innerHTML = `
      <div class="assignment-button-top">
        <span class="assignment-icon-badge">${getSubjectEmoji(assignment.className)}</span>
        <strong>${assignment.title}</strong>
      </div>
      <p>${assignment.summary}</p>
    `;
    button.addEventListener("click", () => {
      const currentStepCount = [...completedSteps].filter((key) => key.startsWith(getAssignmentKey())).length;
      if (assignment.id !== selectedAssignment.id && currentStepCount > 0) {
        showToast(
          `Heads up: switching changes the ${currentStepCount} completed step${currentStepCount === 1 ? "" : "s"} shown below`
        );
      }
      selectedAssignment = enrichAssignment(assignment);
      titleInput.value = assignment.title;
      subjectInput.value = classNameToSubject(assignment.className);
      subjectInput.dispatchEvent(new Event("change"));
      renderAll();
      translationStatus.textContent = `"${assignment.title}" ready — hit Translate to map it.`;
      persistState();
    });
    assignmentList.appendChild(button);
  });
}

function renderProfessionalWhy() {
  const log = selectedAssignment.translationLog;
  const displaySourceLabel = log.sourceLabel === "Hōʻike keyword scan" ? "Hōʻike scan" : log.sourceLabel;
  const signalChips = unique([...(log.matchedKeywords || []), ...(log.skillSignals || [])]).slice(0, 2);
  const selectedInterestList = [...selectedInterests];
  const combinedChips = [
    ...signalChips.map((signal) => ({ label: signal, kind: "signal" })),
    ...selectedInterestList.slice(0, 1).map((interest) => ({
      label: `${getInterestEmoji(interest)} ${interest}`,
      kind: "interest"
    }))
  ];

  professionalWhy.innerHTML = `
    <div class="professional-why-content">
      <div class="professional-why-topbar">
        <span class="translation-pill">Live demo</span>
        <span class="translation-pill translation-pill-secondary">${displaySourceLabel}</span>
      </div>
      <div class="professional-why-main-layout">
        <div class="professional-why-shell">
          <h3>${getDisplayWhyHeadline()}</h3>
        </div>
        <div class="professional-why-body-shell">
          <p class="professional-why-body">${getDisplayWhyBody()}</p>
          <div class="professional-why-stat-row">
            <div class="professional-why-stat-cluster">
              <div class="professional-why-stat professional-why-stat-pathways">
                <strong>${selectedAssignment.pathways.length}</strong>
                <span>pathways</span>
              </div>
              <div class="professional-why-stat professional-why-stat-voices">
                <strong>${selectedAssignment.voices.length}</strong>
                <span>voices</span>
              </div>
            </div>
          </div>
        </div>
        <div class="professional-why-detail-stack">
          <p class="professional-why-bridge">${getDisplayWhyBridge()}</p>
          <div class="professional-why-chip-cluster professional-why-chip-strip">
            <span class="signal-label">Signals</span>
            <div class="signal-list professional-why-chip-list">
              ${combinedChips
                .map(
                  (chip) =>
                    `<span class="signal-chip${chip.kind === "interest" ? " signal-chip-interest" : ""}">${chip.label}</span>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderTranslationLog() {
  const log = selectedAssignment.translationLog;
  const localValueTokens = log.localValueTokens || [];
  const alternateSectorLine = log.alternateSectors.length
    ? `<li><strong>Also plausible:</strong> ${log.alternateSectors.join(" • ")}</li>`
    : "";
  const localValueLine = localValueTokens.length
    ? `<li><strong>Local value cues:</strong> ${localValueTokens.join(" • ")}</li>`
    : "";

  translationLog.innerHTML = `
    <span class="log-label">Demo / Judge View: ${log.sourceLabel} — Hōʻike scan log</span>
    <ul class="log-list">
      <li><strong>Scan source:</strong> ${log.sourceLabel}</li>
      <li><strong>Workflow:</strong> read activity → infer strengths → map local sector → surface safer next steps</li>
      <li><strong>Signals read:</strong> ${log.matchedKeywords.join(" • ")}</li>
      <li><strong>Strengths inferred:</strong> ${log.skillSignals.join(" • ")}</li>
      <li><strong>Best fit:</strong> ${log.sectorLabel}</li>
      ${localValueLine}
      ${alternateSectorLine}
      <li><strong>Local voices queued:</strong> ${log.localVoices.join(" • ")}</li>
      <li><strong>What Hōʻike is doing:</strong> ${log.identityLine}</li>
    </ul>
  `;
}

function renderPathways() {
  pathwayList.innerHTML = "";

  const pathways = selectedAssignment.pathways;
  const selectedPathway = getSelectedPathway();
  const pathwayKey = getPathwayKey(selectedPathway.name);
  const isSaved = hasSavedPathway(pathwayKey);
  const localValueTokens = (sectorCatalog[selectedAssignment.sectorId] || sectorCatalog.general).localValueTokens.slice(0, 2);
  const compactRouteChips = getCompactRoutes(selectedAssignment.sectorId).slice(0, 2);
  const selectedIndex = Math.max(
    0,
    pathways.findIndex((pathway) => pathway.name === selectedPathway.name)
  );
  const previousPathway = pathways[(selectedIndex - 1 + pathways.length) % pathways.length];
  const nextPathway = pathways[(selectedIndex + 1) % pathways.length];

  const card = document.createElement("article");
  card.className = `pathway-card pathway-carousel-card${pathwayFeedbackMode ? " is-confirmed" : ""}`;
  card.innerHTML = `
    <div class="pathway-progress-lines">
      ${pathways
        .map(
          (_pathway, index) =>
            `<span class="pathway-progress-line${index === selectedIndex ? " is-active" : ""}"></span>`
        )
        .join("")}
    </div>
    <div class="pathway-carousel-nav">
      <button class="pathway-arrow-button" type="button" aria-label="Previous pathway">←</button>
      <div class="pathway-carousel-title">
        <h3>${getPathwayEmoji(selectedPathway.name)} ${selectedPathway.name}</h3>
      </div>
      <button class="pathway-arrow-button" type="button" aria-label="Next pathway">→</button>
    </div>
    <div class="pathway-main-layout">
      <div class="pathway-copy-stack">
        <p class="pathway-carousel-preview">${getDisplayPathwayFit(selectedPathway)}</p>
        <div class="token-group pathway-chip-row">
          ${localValueTokens.map((token) => `<span class="token-chip">${token}</span>`).join("")}
        </div>
      </div>
      <div class="pathway-bottom-row">
        <div class="pathway-fit-actions pathway-fit-actions-inline">
          <span class="panel-label pathway-inline-label">Also fits</span>
          <div class="pathway-inline-chips">
            ${compactRouteChips.map((item) => `<span class="token-chip pathway-inline-chip">${item}</span>`).join("")}
          </div>
        </div>
        <button class="save-pathway-button${isSaved ? " is-saved" : ""}" type="button">
          ${isSaved ? "Saved" : "Save pathway"}
        </button>
      </div>
    </div>
  `;

  const [previousButton, nextButton] = card.querySelectorAll(".pathway-arrow-button");
  previousButton.addEventListener("click", () => {
    selectedPathways.set(getAssignmentKey(), previousPathway.name);
    renderPathways();
    renderInterestsAndRoutes();
    renderSteps();
    persistState();
  });
  nextButton.addEventListener("click", () => {
    selectedPathways.set(getAssignmentKey(), nextPathway.name);
    renderPathways();
    renderInterestsAndRoutes();
    renderSteps();
    persistState();
  });

  card.querySelector(".save-pathway-button").addEventListener("click", () => {
    toggleSavedPathway(pathwayKey);
    renderPathways();
    updateSavedPathwaysSummary();
    persistState();
  });

  pathwayList.appendChild(card);
}

function renderInterestsAndRoutes() {
  interestList.innerHTML = "";
  pathwayRoutes.innerHTML = "";

  interestCatalog.forEach((interest) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `interest-chip${selectedInterests.has(interest) ? " is-active" : ""}`;
    button.innerHTML = `
      <span class="interest-chip-icon">${getInterestEmoji(interest)}</span>
      <span class="interest-chip-copy">${interest}</span>
    `;
    button.addEventListener("click", () => {
      if (selectedInterests.has(interest)) {
        selectedInterests.delete(interest);
      } else {
        selectedInterests.add(interest);
      }
      renderInterestsAndRoutes();
      renderProfessionalWhy();
      renderSteps();
      translationStatus.textContent = selectedInterests.size
        ? "Interests updated — routes may shift below."
        : "Interests cleared.";
      persistState();
    });
    interestList.appendChild(button);
  });

  const selectedPathway = getSelectedPathway();
  const sectorRoutes = getCompactRoutes(selectedAssignment.sectorId);

  const interestLine = [...selectedInterests].length
    ? `Also fits your interests.`
    : `More ways in.`;

  const summary = document.createElement("div");
  summary.className = "route-summary";
  summary.innerHTML = `<p>💡 ${interestLine}</p>`;
  pathwayRoutes.appendChild(summary);

  const list = document.createElement("div");
  list.className = "route-list";
  sectorRoutes.forEach((route) => {
    const card = document.createElement("article");
    card.className = "route-card";
    card.innerHTML = `<p>${route}</p>`;
    list.appendChild(card);
  });
  pathwayRoutes.appendChild(list);
}

function openVoiceDialog(voice) {
  dialogContent.innerHTML = `
    <div class="dialog-avatar">${getVoiceAvatar(voice.id)}</div>
    <span class="voice-chip">${voice.location} • ${voice.runtime} intro</span>
    <h3>${voice.name}</h3>
    <p><strong>${voice.role}</strong></p>
    <p>${voice.summary}</p>
    <p><strong>What I do:</strong> ${voice.whatIDo}</p>
    <p><strong>How I got here:</strong> ${voice.howIGotHere}</p>
    <p><strong>What I love about this job:</strong> ${voice.favoriteThing}</p>
    <p><strong>What you can try now:</strong> ${voice.tryNow}</p>
    <p><strong>What I wish I knew in high school:</strong> ${voice.wishIKnew}</p>
  `;
  dialog.showModal();
}

function useVoicePrompt(voice) {
  questionBox.value = `Aloha ${voice.name}, I just used Hōʻike on "${selectedAssignment.title}". What should I try in high school if I am curious about ${voice.tags[0]} and want to understand how it could help my community in Hawaiʻi?`;
  setQuestionStatus("Starter loaded. Make it yours.");
  questionBox.focus({ preventScroll: true });
  document.getElementById("step-5")?.scrollIntoView({ behavior: "smooth", block: "center" });
  showToast("Question starter loaded — scroll down to edit and send");
}

function renderVoices() {
  voicesList.innerHTML = "";
  const availableVoiceIds = selectedAssignment.voices;
  const selectedVoice = getSelectedVoice();
  const selectedIndex = Math.max(0, availableVoiceIds.indexOf(selectedVoice.id));
  const previousVoiceId = availableVoiceIds[(selectedIndex - 1 + availableVoiceIds.length) % availableVoiceIds.length];
  const nextVoiceId = availableVoiceIds[(selectedIndex + 1) % availableVoiceIds.length];
  const voteKey = getVoiceVoteKey(selectedVoice.id, selectedCohortName);
  const handleVoteKey = getHandleVoiceVoteKey(selectedVoice.id, selectedCohortName);
  const alreadyVoted = handleVotes.has(handleVoteKey);
  const cohortBaselineVotes = cohortBaseline[selectedCohortName]?.votes?.[selectedVoice.id] || 0;
  const voteCount = cohortBaselineVotes + (classroomVotes.get(voteKey) || 0);

  const card = document.createElement("article");
  card.className = "voice-card voice-carousel-card";
  card.innerHTML = `
    <div class="pathway-progress-lines">
      ${availableVoiceIds
        .map(
          (_voiceId, index) =>
            `<span class="pathway-progress-line${index === selectedIndex ? " is-active" : ""}"></span>`
        )
        .join("")}
    </div>
    <div class="voice-carousel-nav">
      <button class="pathway-arrow-button" type="button" aria-label="Previous local voice">←</button>
      <div class="voice-title-shell">
        <span>${selectedIndex + 1} of ${availableVoiceIds.length}</span>
      </div>
      <button class="pathway-arrow-button" type="button" aria-label="Next local voice">→</button>
    </div>
    <div class="voice-main-stack">
      <div class="voice-profile-card voice-profile-card-featured voice-profile-card-side">
        <span class="voice-avatar">${getVoiceAvatar(selectedVoice.id)}</span>
        <div class="voice-profile-copy">
          <h3>${selectedVoice.name}</h3>
          <p class="voice-role-line">${selectedVoice.role}</p>
          <p class="voice-meta">${selectedVoice.location} • ${selectedVoice.runtime} intro</p>
        </div>
      </div>
      <div class="voice-content-side">
        <div class="voice-quote-shell">
          <p class="voice-quote">"${selectedVoice.favoriteThing}"</p>
        </div>
        <div class="voice-summary-inline voice-summary-inline-stacked">
          <p class="voice-summary">${selectedVoice.summary}</p>
          <div class="voice-inline-meta">
            <div class="token-group voice-tag-row voice-tag-row-inline">
              ${selectedVoice.tags.map((tag) => `<span class="signal-chip">${tag}</span>`).join("")}
            </div>
            <div class="voice-actions voice-actions-inline">
              <button class="voice-action voice-action-primary" type="button" data-action="ask">Use question starter</button>
              <button class="voice-action" type="button" data-action="watch">Watch intro</button>
              <button class="voice-action${alreadyVoted ? " is-voted" : ""}" type="button" data-action="vote" ${
                alreadyVoted ? "disabled" : ""
              }>${alreadyVoted ? "Voted ✓" : "Vote to invite"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="voice-safety-note">✓ School-verified professional · Responses reviewed by educators · ${voteCount} ${selectedCohortName} vote${voteCount === 1 ? "" : "s"}</p>
  `;

  const [previousButton, nextButton] = card.querySelectorAll(".pathway-arrow-button");
  previousButton.addEventListener("click", () => {
    selectedVoices.set(getAssignmentKey(), previousVoiceId);
    renderVoices();
    persistState();
  });
  nextButton.addEventListener("click", () => {
    selectedVoices.set(getAssignmentKey(), nextVoiceId);
    renderVoices();
    persistState();
  });

  card.querySelector('[data-action="watch"]').addEventListener("click", () => openVoiceDialog(selectedVoice));
  card.querySelector('[data-action="ask"]').addEventListener("click", () => useVoicePrompt(selectedVoice));
  card.querySelector('[data-action="vote"]').addEventListener("click", () => {
    handleVotes.add(handleVoteKey);
    classroomVotes.set(voteKey, (classroomVotes.get(voteKey) || 0) + 1);
    renderVoices();
    renderTeacherView();
    showToast(`Vote added for ${selectedVoice.name} — your teacher can see this`);
    persistState();
  });
  voicesList.appendChild(card);
}

function renderTeacherView(force = false) {
  if (!force && currentViewMode !== "instructor") {
    return;
  }
  teacherVoteList.innerHTML = "";
  teacherQuestionQueue.innerHTML = "";
  const currentCohortName = selectedCohortName;

  const rankedVoices = Object.entries(voices)
    .map(([voiceId, voice]) => {
      const baselineVotes = cohortBaseline[currentCohortName]?.votes?.[voiceId] || 0;
      const votes = baselineVotes + (classroomVotes.get(getVoiceVoteKey(voiceId, currentCohortName)) || 0);
      return { voice, votes };
    })
    .sort((left, right) => right.votes - left.votes || left.voice.name.localeCompare(right.voice.name));
  const queueItems = submittedQuestions.filter(
    (item) => item.status === "pending" && item.cohortName === currentCohortName
  );
  const totalSaved = (cohortBaseline[currentCohortName]?.saved || 0) + getSavedPathwaysForCurrentCohort().size;

  teacherSaveTotal.textContent = String(totalSaved);
  teacherSaveTotalDetail.textContent =
    totalSaved === 0
      ? "What this class keeps returning to."
      : `${totalSaved} saves are mapping class interest.`;
  teacherPendingCount.textContent = String((cohortBaseline[currentCohortName]?.pending || 0) + queueItems.length);
  teacherPendingDetail.textContent =
    queueItems.length === 0
      ? "Guided drafts waiting for review."
      : `${queueItems.length} draft${queueItems.length === 1 ? "" : "s"} ready for review.`;

  const topVote = rankedVoices[0];
  if (!topVote || topVote.votes === 0) {
    teacherTopVoice.textContent = "No votes yet";
    teacherTopVoiceDetail.textContent =
      "Who this class most wants to hear from next.";
  } else {
    teacherTopVoice.textContent = topVote.voice.name;
    teacherTopVoiceDetail.innerHTML =
      `<span class="teacher-top-votes">${topVote.votes} ${topVote.votes === 1 ? "vote" : "votes"}</span>${topVote.voice.role} • ${topVote.voice.location}`;
  }

  rankedVoices.forEach(({ voice, votes }) => {
    if (votes < 1) {
      return;
    }
    const card = document.createElement("article");
    card.className = "teacher-vote-card";
    card.innerHTML = `
      <div class="teacher-vote-copy">
        <div class="teacher-vote-head">
          <div class="teacher-vote-identity">
            <span class="teacher-vote-avatar">${getVoiceAvatar(voice.id)}</span>
            <div>
              <h3>${voice.name}</h3>
              <p class="voice-meta">${voice.role}</p>
              <p class="teacher-vote-location">${voice.location}</p>
            </div>
          </div>
          <div class="teacher-vote-meta teacher-vote-meta-inline">
            <strong>${votes}</strong>
            <span>${currentCohortName} votes</span>
          </div>
        </div>
        <p class="teacher-vote-line">${voice.summary}</p>
        <div class="teacher-vote-actions">
          <button class="voice-action teacher-primary-action" type="button">${teacherInviteRequests.has(getTeacherActionKey("invite", voice.id, currentCohortName)) ? "Request sent" : "Invite to talk story"}</button>
          <button class="voice-action teacher-secondary-action" type="button">${teacherPromptPreviews.has(getTeacherActionKey("preview", voice.id, currentCohortName)) ? "Prompts loaded" : "Preview prompts"}</button>
        </div>
      </div>
    `;
    const inviteButton = card.querySelector(".teacher-primary-action");
    const previewButton = card.querySelector(".teacher-secondary-action");
    const inviteKey = getTeacherActionKey("invite", voice.id, currentCohortName);
    const previewKey = getTeacherActionKey("preview", voice.id, currentCohortName);
    if (teacherInviteRequests.has(inviteKey)) {
      inviteButton.disabled = true;
    }
    if (teacherPromptPreviews.has(previewKey)) {
      previewButton.disabled = true;
    }
    inviteButton.addEventListener("click", (event) => {
      teacherInviteRequests.add(inviteKey);
      event.currentTarget.textContent = "Request sent";
      event.currentTarget.disabled = true;
      showToast(`Request prepared for ${voice.name}`);
      persistState();
    });
    previewButton.addEventListener("click", (event) => {
      teacherPromptPreviews.add(previewKey);
      event.currentTarget.textContent = "Prompts loaded";
      event.currentTarget.disabled = true;
      showToast(`Loaded classroom prompt ideas for ${voice.name}`);
      persistState();
    });
    teacherVoteList.appendChild(card);
  });

  if (teacherVoteList.children.length === 0) {
    teacherVoteList.innerHTML = `
      <p class="queue-empty">No vote signals yet for this cohort. When students vote to invite a professional, the signals appear here.</p>
    `;
  }

  if (!queueItems.length) {
    teacherQuestionQueue.innerHTML = `
      <p class="queue-empty">No pending questions yet. When students send guided questions, they appear here for teacher or program review.</p>
    `;
    return;
  }

  queueItems.forEach((item) => {
    const row = document.createElement("article");
    row.className = "queue-item";
    row.innerHTML = `
      <div class="queue-copy">
        <span class="voice-chip">${item.handle}</span>
        <div class="queue-tags">
          <span class="moderation-pill moderation-pill-status">Pending</span>
          <span class="moderation-pill moderation-pill-context">${item.assignmentTitle}</span>
        </div>
        <p>${item.text}</p>
        <div class="queue-actions">
          <button class="voice-action queue-route" type="button">Route to talk story</button>
          <button class="voice-action queue-revise" type="button">Ask to revise</button>
          <button class="voice-action queue-approve" type="button">Approve</button>
        </div>
      </div>
    `;
    row.querySelector(".queue-approve").addEventListener("click", () => {
      const previousStatus = item.status;
      item.status = "approved";
      renderTeacherView();
      persistState();
      showActionToast("Question approved — click to undo", () => {
        item.status = previousStatus;
        renderTeacherView();
        persistState();
        showToast("Approval undone");
      });
    });
    row.querySelector(".queue-revise").addEventListener("click", () => {
      const previousStatus = item.status;
      item.status = "needs-revision";
      renderTeacherView();
      persistState();
      showActionToast("Revision request drafted — click to undo", () => {
        item.status = previousStatus;
        renderTeacherView();
        persistState();
        showToast("Revision request undone");
      });
    });
    row.querySelector(".queue-route").addEventListener("click", () => {
      showToast("Question routed into a classroom talk story workflow");
    });
    teacherQuestionQueue.appendChild(row);
  });
}

function renderPrompts() {
  promptList.innerHTML = "";

  getContextualPrompts().forEach((prompt) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip-button";
    chip.textContent = prompt;
    chip.addEventListener("click", () => {
      questionBox.value = prompt;
      setQuestionStatus("Starter loaded. Make it yours.");
      questionBox.focus({ preventScroll: true });
      document.getElementById("step-5")?.scrollIntoView({ behavior: "smooth", block: "center" });
      showToast("Question starter loaded — scroll down to edit and send");
    });
    promptList.appendChild(chip);
  });
}

function updateStepsProgress(groups) {
  const currentStepKeys = groups.flatMap(([label, items]) =>
    items.map((item) => getStepKey(label, item))
  );
  const completedCount = currentStepKeys.filter((itemKey) => completedSteps.has(itemKey)).length;
  const totalCount = currentStepKeys.length;
  const progressRatio = totalCount === 0 ? 0 : completedCount / totalCount;
  const progressPercent = Math.round(progressRatio * 100);

  stepsProgressCount.textContent = `${completedCount} of ${totalCount}`;
  stepsProgressDetail.textContent = `${progressPercent}%`;
  if (stepsProgressFill) {
    stepsProgressFill.style.width = `${progressPercent}%`;
  }
  persistState();
}

function renderSteps() {
  stepsPanel.innerHTML = "";
  const selectedPathway = getSelectedPathway();
  const pathwaySpecificSteps = [
    `Next: ${getCompactNextStep(selectedPathway.nextStep)}`,
    ...getCompactRoutes(selectedAssignment.sectorId).slice(0, 2)
  ];

  stepsContext.innerHTML = `
    <div class="steps-context-card">
      <span class="panel-label">Linked to your selection</span>
      <strong>${getPathwayEmoji(selectedPathway.name)} ${selectedPathway.name}</strong>
      <p>From your activity and pathway.</p>
    </div>
  `;

  const groups = [
    ["Do Now", selectedAssignment.steps.now],
    ["Try This Week", selectedAssignment.steps.week],
    ["Explore Next", selectedAssignment.steps.next]
  ];

  groups.forEach(([label, items], index) => {
    const section = document.createElement("details");
    section.className = "steps-group";
    section.open = openStepsSection ? openStepsSection === label : index === 0;
    section.innerHTML = `
      <summary class="steps-summary-toggle">
        <span class="steps-label">${label}</span>
      </summary>
      <ul class="steps-checklist"></ul>
    `;

    const checklist = section.querySelector(".steps-checklist");

    items.forEach((item) => {
      const itemKey = getStepKey(label, item);
      const completed = completedSteps.has(itemKey);
      const row = document.createElement("li");
      row.className = "step-item";
      row.dataset.key = itemKey;
      row.innerHTML = `
        <button class="step-toggle${completed ? " is-complete" : ""}" type="button">
          <span class="step-marker">${completed ? "✓" : ""}</span>
          <span class="step-copy">${item}</span>
        </button>
      `;

      const toggleButton = row.querySelector(".step-toggle");
      const marker = row.querySelector(".step-marker");

      toggleButton.addEventListener("click", () => {
        const isNowComplete = !completedSteps.has(itemKey);
        if (isNowComplete) {
          completedSteps.add(itemKey);
        } else {
          completedSteps.delete(itemKey);
        }
        openStepsSection = label;
        toggleButton.classList.toggle("is-complete", isNowComplete);
        marker.textContent = isNowComplete ? "✓" : "";
        updateStepsProgress(groups);
      });

      checklist.appendChild(row);
    });

    stepsPanel.appendChild(section);
  });

  const linkedSection = document.createElement("details");
  linkedSection.className = "steps-group steps-group-linked";
  linkedSection.open = openStepsSection === "From this activity";
  linkedSection.innerHTML = `
    <summary class="steps-summary-toggle">
      <span class="steps-label">From this activity</span>
    </summary>
    <ul class="steps-checklist"></ul>
  `;

  const linkedChecklist = linkedSection.querySelector(".steps-checklist");

  pathwaySpecificSteps.forEach((item) => {
    const row = document.createElement("li");
    row.className = "step-item step-item-linked";
    row.innerHTML = `
      <div class="step-link-row">
        <span class="step-link-dot" aria-hidden="true"></span>
        <span class="step-copy">${item}</span>
      </div>
    `;
    linkedChecklist.appendChild(row);
  });

  stepsPanel.appendChild(linkedSection);

  [...stepsPanel.querySelectorAll(".steps-group")].forEach((section) => {
    section.addEventListener("toggle", () => {
      if (!section.open) return;
      const label = section.querySelector(".steps-label")?.textContent?.trim();
      if (label) {
        openStepsSection = label;
      }
      [...stepsPanel.querySelectorAll(".steps-group")].forEach((sibling) => {
        if (sibling !== section) sibling.open = false;
      });
    });
  });
  updateStepsProgress(groups);
}

function renderAll() {
  const savedScroll = window.scrollY;

  renderAssignments();
  renderProfessionalWhy();
  renderTranslationLog();
  renderPathways();
  renderInterestsAndRoutes();
  updateSavedPathwaysSummary();
  renderVoices();
  renderTeacherView();
  renderPrompts();
  renderSteps();

  requestAnimationFrame(() => {
    window.scrollTo(0, savedScroll);
  });
}

function setExplainerTab(tab) {
  const config = {
    architecture: [explainerArchitectureTab, explainerArchitecturePanel],
    reasoning: [explainerReasoningTab, explainerReasoningPanel],
    research: [explainerResearchTab, explainerResearchPanel]
  };

  Object.entries(config).forEach(([key, [button, panel]]) => {
    const isActive = key === tab;
    button?.classList.toggle("is-active", isActive);
    button?.setAttribute("aria-selected", String(isActive));
    panel?.classList.toggle("is-active", isActive);
    panel?.setAttribute("aria-hidden", String(!isActive));
  });
}

async function runTranslation() {
  const rawTitle = titleInput.value.trim();
  const subject = subjectInput.value;
  const originalButtonLabel = runTranslationButton.textContent;

  if (!rawTitle) {
    translationStatus.textContent = "Paste an activity, assignment, or interest first.";
    titleInput.focus();
    return;
  }

  translationStatus.textContent = "Translating across pathways, voices, and next steps...";
  runTranslationButton.disabled = true;
  runTranslationButton.textContent = "Translating...";
  const loadingLabels = {
    "step-2": "Updating Professional Why",
    "step-3": "Updating Pathways",
    "step-4": "Updating Local Voices",
    "step-5": "Updating Question Starters",
    "step-6": "Updating Small Steps"
  };
  const loadingSections = document.querySelectorAll("#step-2, #step-3, #step-4, #step-5, #step-6");
  loadingSections.forEach((element) => {
    element.classList.add("is-loading");
    element.setAttribute("data-loading-label", loadingLabels[element.id] || "Updating");
  });
  selectedAssignment = await requestTranslation(rawTitle, subject);
  pathwayFeedbackMode = "matched";
  clearTimeout(pathwayFeedbackTimer);
  loadingSections.forEach((element) => {
    element.classList.remove("is-loading");
    element.removeAttribute("data-loading-label");
  });
  renderAll();
  translationStatus.textContent = `"${rawTitle}" now maps to ${selectedAssignment.translationLog.sectorLabel}.`;
  runTranslationButton.disabled = false;
  runTranslationButton.textContent = originalButtonLabel;
  pathwayFeedbackTimer = setTimeout(() => {
    pathwayFeedbackMode = "";
    renderPathways();
  }, 360);
  persistState();
}

document.getElementById("generate-handle").addEventListener("click", () => {
  const button = document.getElementById("generate-handle");
  button.classList.add("is-spinning");
  button.addEventListener("animationend", () => button.classList.remove("is-spinning"), { once: true });

  const cohortHandles = getCurrentCohort().handles;
  const next = cohortHandles[Math.floor(Math.random() * cohortHandles.length)];
  currentHandle = next;
  applyHandleInterestProfile();
  syncIdentitySurfaces();
  renderProfessionalWhy();
  renderInterestsAndRoutes();
  renderSteps();
  renderVoices();
  renderTeacherView();
  persistState();
});

cohortSelect.addEventListener("change", () => {
  selectedCohortName = cohortSelect.value;
  currentHandle = getCurrentCohort().handles[0];
  applyHandleInterestProfile();
  syncIdentitySurfaces();
  updateSavedPathwaysSummary();
  renderProfessionalWhy();
  renderInterestsAndRoutes();
  renderSteps();
  renderVoices();
  renderTeacherView(true);
  showToast(`Switched to ${selectedCohortName} — data and votes updated`);
  persistState();
});

document.getElementById("submit-question").addEventListener("click", () => {
  if (!questionBox.value.trim()) {
    setQuestionStatus("Add or select a question first so you are not sending a blank request.");
    return;
  }

  submittedQuestions.push({
    id: makeQuestionId(),
    handle: currentHandle,
    cohortName: selectedCohortName,
    assignmentKey: getAssignmentKey(),
    assignmentTitle: selectedAssignment.title,
    text: questionBox.value.trim(),
    status: "pending"
  });
  setQuestionStatus("Sent for review.");
  questionBox.value = "";
  renderTeacherView(true);
  persistState();
  showToast("Message sent to moderator");
});
studentViewButton.addEventListener("click", () => setViewMode("student"));
instructorViewButton.addEventListener("click", () => setViewMode("instructor"));
explainerViewButton.addEventListener("click", () => setViewMode("explainer"));
explainerArchitectureTab?.addEventListener("click", () => setExplainerTab("architecture"));
explainerReasoningTab?.addEventListener("click", () => setExplainerTab("reasoning"));
explainerResearchTab?.addEventListener("click", () => setExplainerTab("research"));

runTranslationButton.addEventListener("click", runTranslation);

questionBox.addEventListener("input", () => {
  if (questionStatus.textContent !== DEFAULT_QUESTION_STATUS) {
    setQuestionStatus();
  }
  persistState();
});
subjectInput.addEventListener("change", persistState);
titleInput.addEventListener("input", persistState);

titleInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    runTranslation();
  }
});

dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const inside =
    event.clientX >= bounds.left &&
    event.clientX <= bounds.right &&
    event.clientY >= bounds.top &&
    event.clientY <= bounds.bottom;

  if (!inside) {
    dialog.close();
  }
});

syncIdentitySurfaces();
titleInput.value = persistedState.assignmentTitleInput || selectedAssignment.title;
subjectInput.value = persistedState.assignmentSubjectInput || subjectInput.value;
questionBox.value = persistedState.questionDraft || "";
setViewMode(currentViewMode);
setExplainerTab("architecture");
renderAll();
