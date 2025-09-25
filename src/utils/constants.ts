import { Project, Skill, Experience, PersonalInfo } from '#/types';

export const personalInfo: PersonalInfo = {
  name: "Muh. Aryandi",
  title: "Senior Frontend Engineer",
  bio: "I'm a passionate Frontend Engineer with a strong background in programming and deep enthusiasm for the fundamentals of JavaScript and TypeScript. I specialize in HTML/CSS slicing, have solid UI/UX sensibilities (Figma), and build with React, Next.js, Gatsby, and Storybook. I care deeply about quality and reliability, using Jest, Mocha, and RTL to ensure robust components. Beyond core engineering skills, I actively leverage AI to increase productivity: I write precise, goal‑oriented prompts, automate repetitive tasks, and integrate AI into my daily workflow to accelerate delivery and solve both technical and non‑technical problems. I enjoy leading, mentoring, and collaborating across teams, including in remote environments.",
  avatar: "/images/Aryandi-photo1.png",
  contact: {
    email: "muhammadaryandi90@gmail.com",
    phone: "+62 812-3456-7890",
    whatsapp: "+6281234567890",
    location: "Makassar, Sulawesi Selatan, Indonesia",
    linkedin: "https://www.linkedin.com/in/muh-aryandi",
    github: "https://github.com/aryandi37",
    website: "https://aryandi.dev"
  }
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Vue.js", level: 80, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  
  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Jest", level: 85, category: "tools" },
  { name: "Webpack", level: 75, category: "tools" }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Portal Sekolah",
    description: "Comprehensive school management system used by dozens of schools across Indonesia. Features include student management, academic tracking, and administrative tools.",
    image: "/images/project_img/PortalSekolah.png",
    technologies: ["React", "Next.js", "TypeScript", "Redux", "Ionic", "Jest", "Storybook"],
    liveUrl: "https://portal-sekolah.com",
    githubUrl: "https://github.com/aryandi/portal-sekolah",
    featured: true,
    company: "Noble Software / Visiprima",
    role: "Lead Frontend Developer",
    duration: "September 2023 - September 2025",
    gallery: ["/images/project_img/PortalSekolah.png"]
  },
  {
    id: "2",
    title: "Portal Kerja",
    description: "Job search application developed with atomic component architecture for reusability. Features advanced search capabilities and company portal for job posting.",
    image: "/images/project_img/portalKerja.png",
    technologies: ["React", "Next.js", "TypeScript", "Redux", "Jest", "Storybook"],
    liveUrl: "https://portal-kerja.com",
    githubUrl: "https://github.com/aryandi/portal-kerja",
    featured: true,
    company: "Noble Software / Visiprima",
    role: "Lead Frontend Developer",
    duration: "September 2023 - January 2025",
    gallery: ["/images/project_img/portalKerja.png"]
  },
  {
    id: "3",
    title: "Portal Kampus",
    description: "Campus management system for educational institutions with course scheduling, assessment tracking, and collaborative forum features.",
    image: "/images/project_img/portalKampus.png",
    technologies: ["React", "Next.js", "TypeScript", "Redux", "Jest", "Storybook"],
    liveUrl: "https://portal-kampus.com",
    githubUrl: "https://github.com/aryandi/portal-kampus",
    featured: true,
    company: "Noble Software / Visiprima",
    role: "Lead Frontend Developer & Scrum Master",
    duration: "January 2024 - January 2025",
    gallery: ["/images/project_img/portalKampus.png"]
  },
  {
    id: "4",
    title: "Feature Flag Management System",
    description: "Comprehensive dashboard for controlling feature visibility across multiple environments with JIRA integration and detailed audit trails.",
    image: "/images/project_img/feature-flag.png",
    technologies: ["React", "Next.js", "TypeScript", "Redux", "Jest", "Storybook"],
    liveUrl: "https://feature-flags.com",
    githubUrl: "https://github.com/aryandi/feature-flags",
    featured: false,
    company: "Noble Software / Visiprima",
    role: "Lead Frontend Developer",
    duration: "September 2023 - September 2025",
    gallery: ["/images/project_img/feature-flag.png"]
  },
  {
    id: "5",
    title: "Subscription Flag Features (V2)",
    description: "Four-tier subscription management system with dynamic feature control, comprehensive audit trails, and playground simulation for testing.",
    image: "/images/project_img/subscription-flag.png",
    technologies: ["React", "Next.js", "TypeScript", "Redux", "Jest", "Storybook"],
    liveUrl: "https://subscription-flags.com",
    githubUrl: "https://github.com/aryandi/subscription-flags",
    featured: false,
    company: "Noble Software / Visiprima",
    role: "Lead Frontend Developer",
    duration: "2025",
    gallery: ["/images/project_img/subscription-flag.png"]
  },
  {
    id: "6",
    title: "Scrum Master Volunteer",
    description: "Complete transformation of project management from Trello to JIRA with Scrum methodology implementation and team training programs.",
    image: "/images/project_img/scrum-master-jira-after-1.png",
    technologies: ["JIRA", "Trello", "Scrum", "Agile", "Team Training"],
    liveUrl: "https://scrum-master.com",
    githubUrl: "https://github.com/aryandi/scrum-master",
    featured: false,
    company: "VPN",
    role: "Scrum Master Volunteer",
    duration: "September 2023 - September 2025",
    gallery: [
      "/images/project_img/scrum-master-trello-before-1.png",
      "/images/project_img/scrum-master-trello-before-2.png",
      "/images/project_img/scrum-master-jira-after-1.png",
      "/images/project_img/scrum-master-jira-after-2.png",
      "/images/project_img/retro-action-items.png"
    ]
  },
  {
    id: "7",
    title: "Keller Williams Realty - Real-React UI Kit",
    description: "Comprehensive React UI component library for KW Command features with design system documentation and private package hosting via Gemfury.",
    image: "/images/project_img/eal-react-ui-kit-1.1.png",
    technologies: ["React", "TypeScript", "Jest", "RTL", "Mocha", "Storybook"],
    liveUrl: "https://real-react-ui-kit.com",
    githubUrl: "https://github.com/aryandi/real-react-ui-kit",
    featured: false,
    company: "Keller Williams Realty",
    role: "Frontend Developer",
    duration: "February 2019 - February 2023",
    gallery: [
      "/images/project_img/eal-react-ui-kit-1.1.png",
      "/images/project_img/eal-react-ui-kit-1.2.png"
    ]
  },
  {
    id: "8",
    title: "KW Command Applet Features",
    description: "Comprehensive suite of real estate management tools including listing management, contact management, market analysis, and neighborhood insights.",
    image: "/images/project_img/ListingsCommonApplet.png",
    technologies: ["React", "Next.js", "TypeScript", "Redux", "Jest", "Storybook"],
    liveUrl: "https://kw-command-applets.com",
    githubUrl: "https://github.com/aryandi/kw-command-applets",
    featured: false,
    company: "Keller Williams Realty",
    role: "Frontend Developer",
    duration: "2019 - 2023",
    gallery: [
      "/images/project_img/ListingsCommonApplet.png",
      "/images/project_img/ListingsApplet.png",
      "/images/project_img/MarketSnapshotLandingpage.png",
      "/images/project_img/ContactApplet.png"
    ]
  },
  {
    id: "9",
    title: "KW Additional Applet Features",
    description: "Content creation and marketing tools including landing page editor, email template design, and guide creation for real estate professionals.",
    image: "/images/project_img/ConsumerApplet.png",
    technologies: ["React", "Next.js", "TypeScript", "Redux", "GrapeJS", "Figma"],
    liveUrl: "https://kw-additional-applets.com",
    githubUrl: "https://github.com/aryandi/kw-additional-applets",
    featured: false,
    company: "Keller Williams Realty",
    role: "Frontend Developer",
    duration: "2022 - 2023",
    gallery: [
      "/images/project_img/ConsumerApplet.png",
      "/images/project_img/EmailEditorApplet.png",
      "/images/project_img/DesignApplet.png",
      "/images/project_img/KellerGuidesApplet.png"
    ]
  },
  {
    id: "10",
    title: "KW Analytics & Marketing Applets",
    description: "Business intelligence and marketing tools including performance tracking, advertising management, and referral systems for real estate professionals.",
    image: "/images/project_img/ReportsApplet.png",
    technologies: ["React", "Next.js", "TypeScript", "Redux", "Jest", "Figma"],
    liveUrl: "https://kw-analytics-applets.com",
    githubUrl: "https://github.com/aryandi/kw-analytics-applets",
    featured: false,
    company: "Keller Williams Realty",
    role: "Frontend Developer",
    duration: "2022 - 2023",
    gallery: [
      "/images/project_img/ReportsApplet.png",
      "/images/project_img/CampaignApplet.png",
      "/images/project_img/ReferralsApplet.png"
    ]
  },
  {
    id: "11",
    title: "INMAGINE (123RF & Pixlr)",
    description: "AI-powered content creation platform with image editing, background removal, and stock photo management for creative professionals.",
    image: "/images/project_img/ToolsPage1.png",
    technologies: ["React", "Next.js", "JavaScript", "Redux", "Jest", "SASS"],
    liveUrl: "https://inmagine.com",
    githubUrl: "https://github.com/aryandi/inmagine",
    featured: false,
    company: "INMAGINE",
    role: "Frontend Developer",
    duration: "2021 - 2022",
    gallery: [
      "/images/project_img/ToolsPage1.png",
      "/images/project_img/ToolsPage2.png",
      "/images/project_img/ToolsPage3.png",
      "/images/project_img/123rfPlusandFreeImagesPage.png",
      "/images/project_img/PixlrAppletStockPhotosPage.png"
    ]
  },
  {
    id: "12",
    title: "Gense Technology",
    description: "Medical mobile application with AI integration for patient data analysis and health monitoring using React Native and Ionic.",
    image: "/images/project_img/GenseTechnology1.png",
    technologies: ["React Native", "Ionic", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://gense-technology.com",
    githubUrl: "https://github.com/aryandi/gense-technology",
    featured: false,
    company: "Gense Technology",
    role: "Frontend Developer",
    duration: "2022",
    gallery: [
      "/images/project_img/GenseTechnology1.png",
      "/images/project_img/GenseTechnology2.png",
      "/images/project_img/GenseTechnology3.png"
    ]
  },
  {
    id: "13",
    title: "Docotel Technology Celebes",
    description: "System informasi projects including Docoblast email marketing platform and e-proc tender services platform for business process optimization.",
    image: "/images/project_img/dtc-docoblast.png",
    technologies: ["React", "Next.js", "JavaScript", "Redux", "Jest", "SASS"],
    liveUrl: "https://docotel-technology.com",
    githubUrl: "https://github.com/aryandi/docotel-technology",
    featured: false,
    company: "Docotel Technology Celebes",
    role: "Frontend Developer",
    duration: "2018",
    gallery: [
      "/images/project_img/dtc-docoblast.png",
      "/images/project_img/dtc-eproc.png"
    ]
  },
  {
    id: "14",
    title: "AIDU Education",
    description: "Online examination platform using PWA technology for educational institutions with student assessment and evaluation system.",
    image: "/images/project_img/aidu-exam.png",
    technologies: ["PHP", "CodeIgniter", "MySQL", "Bootstrap", "PWA"],
    liveUrl: "https://aidu-education.com",
    githubUrl: "https://github.com/aryandi/aidu-education",
    featured: false,
    company: "AIDU Education",
    role: "Fullstack Developer",
    duration: "2016 - 2017",
    gallery: ["/images/project_img/aidu-exam.png"]
  },
  {
    id: "15",
    title: "Freelance Projects",
    description: "Multiple business applications including credit simulation platform, motorcycle rental system, and e-commerce POS solutions.",
    image: "/images/project_img/kredit-makassar.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "JavaScript"],
    liveUrl: "https://freelance-projects.com",
    githubUrl: "https://github.com/aryandi/freelance-projects",
    featured: false,
    company: "Freelance",
    role: "Fullstack Developer",
    duration: "2021 - present",
    gallery: [
      "/images/project_img/kredit-makassar.png",
      "/images/project_img/rental-motor-makassar-1.png",
      "/images/project_img/rental-motor-makassar-2.png",
      "/images/project_img/kita-tolong-1.png",
      "/images/project_img/kita-tolong-2.png"
    ],
    imageCaptions: [
      {
        src: "/images/project_img/kredit-makassar.png",
        title: "Kredit Makassar - Credit Simulation Platform",
        description: "Credit calculator, application form, monthly installment breakdown, and planning tools."
      },
      {
        src: "/images/project_img/rental-motor-makassar-1.png",
        title: "Rental Motor Makassar - Motorcycle Rental Platform",
        description: "Motorcycle listing with models/pricing and day-based availability management."
      },
      {
        src: "/images/project_img/rental-motor-makassar-2.png",
        title: "Rental Motor Makassar - Dashboard Management",
        description: "Rental dashboard for bookings, renter management, and transaction tracking."
      },
      {
        src: "/images/project_img/kita-tolong-1.png",
        title: "Kita Tolong - E‑Commerce and POS Platform",
        description: "Business website + POS with stock management and cashier features."
      },
      {
        src: "/images/project_img/kita-tolong-2.png",
        title: "Kita Tolong - Problem/Solution",
        description: "Problem mapping and solution page; same functional scope as the first image."
      }
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Visi Prima Nusantara",
    position: "Scrum Master Freelance",
    duration: "Sep 2023 - Sep 2025",
    description: "Led frontend initiatives and Scrum adoption (JIRA workflows, roles, ceremonies) for 30+ IT members; transitioned project management from Trello to JIRA and established iterative guidelines across sprints.",
    technologies: ["React", "Next.js", "TypeScript", "JIRA", "Scrum"]
  },
  {
    id: "2",
    company: "Noble Software",
    position: "Lead Frontend Engineer",
    duration: "Sep 2023 - Sep 2025",
    description: "Handled 600+ JIRA tickets; collaborated with 200+ devs; increased test coverage via unit/E2E; refactored multiple repos from JS to TS; built common Listings components/utilities repo used across features.",
    technologies: ["React", "TypeScript", "Jest", "RTL", "Mocha"]
  },
  {
    id: "3",
    company: "Keller Williams Realty, Inc.",
    position: "Frontend Engineer",
    duration: "Feb 2019 - Mar 2023",
    description: "Handled 600+ JIRA tickets; collaborated with 200+ devs; increased test coverage via unit/E2E; refactored multiple repos from JS to TS; built common Listings components/utilities repo used across features.",
    technologies: ["React", "TypeScript", "Jest", "RTL", "Mocha"]
  },
  {
    id: "4",
    company: "INMAGINE (123rf & pixlr)",
    position: "Frontend Engineer",
    duration: "2020 (1 year)",
    description: "Contributed to frontend features and performance improvements across product surfaces including 123RF and Pixlr platforms.",
    technologies: ["React", "TypeScript", "Next.js", "JavaScript"]
  },
  {
    id: "5",
    company: "Gense Technology",
    position: "Frontend Engineer",
    duration: "2020 (3 months)",
    description: "Developed medical mobile application with AI integration for patient data analysis and health monitoring using React Native and Ionic.",
    technologies: ["React Native", "Ionic", "JavaScript", "Tailwind CSS"]
  },
  {
    id: "6",
    company: "PT Docotel Teknologi Celebes",
    position: "Frontend Engineer",
    duration: "Oct 2018 - Feb 2019",
    description: "Delivered frontend interfaces for internal and client applications including Docoblast and e-proc systems.",
    technologies: ["React", "JavaScript", "Bootstrap", "CodeIgniter"]
  },
  {
    id: "7",
    company: "AIDU Education (PT. Indonesia Peduli Pendidikan)",
    position: "Fullstack Developer",
    duration: "2017-2018 (2 years)",
    description: "Developed comprehensive online examination platform using PWA technology for educational institutions and student assessment.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "Bootstrap", "PWA"]
  },
  {
    id: "8",
    company: "Freelance",
    position: "Fullstack Developer",
    duration: "2018 - 2023",
    description: "Developed multiple business applications including credit simulation platform, motorcycle rental system, and e-commerce POS solutions.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "JavaScript"]
  }
];

export const specializingIn: string[] = [
  // Row 1,
  "Prompt Engineering",
  "Javascript",
  "HTML CSS",
  "Nextjs",
  "Typescript",
  // Row 2
  "Ionic",
  "Redux",
  "Storybook",
  "Gatsby",
  "React Testing Library",
  "React Native",
  // Row 3
  "React Query",
  "Material UI",
  "React",
  "GraphQL",
  "Jest",
  // Row 4
  "Figma",
  "Tailwind",
  "Bootstrap",
  "Jquery",
  "Firebase",
  // Row 5
  "Supabase",
  "MySQL",
  "Codeigniter",
  "AWS",
  "Docker",
  // Row 6
  "Jira",
  "Semantic HTML",
  "Vue",
  "Trello"
];

export const languages: string[] = [
  "English (Limited Working)",
  "Bahasa Indonesia (Limited Working)"
];

export const certifications: string[] = [
  "Progressive Web Apps Training"
];

export const honorsAwards: string[] = [
  "2nd winner Website Competition – Inception 1",
  "3rd winner Makassar Telkom",
  "Juarayya Hackathon Festival 2018 – 3rd winner",
  "Top 32 Best Talent – Indonesia NEXT 2018",
  "Favorite 32 best finalist – Indonesia NEXT 2018"
];

// Additional profile data
export const teaching: string[] = [
  "Teaching Assistant of Web Programming Courses (2017 - 2023)",
  "Teaching Assistant of Data Structures/Algorithms (2020 - 2023)",
  "Teaching Assistant of Human & Computer Interaction (UI/UX) (2019)",
  "ReactJS Fundamentals Workshops & Bootcamps (2019 - 2023)",
  "Tutor of Math and English for High School Students (2016 - 2018)"
];

export const organizations: string[] = [
  "Facebook Developer Circle Lead Makassar",
  "Community Leader and Local Program Manager (2019 - 2023)",
  "Google Developer Group Makassar — Co‑Founder (2020 - 2023)",
  "Makassar Programmer Community — Program Organizer",
  "Google Developer Student Club Chapter Hasanuddin University (2017 - 2018)",
  "Co‑Lead Makassar RMTF (2017 - 2018)",
  "Coordinator Website Division, Informatics Student Organization (2016 - 2018)"
];

export const speakerActivities: string[] = [
  "Guest Speaker for Facebook Developer Circle Makassar (2021 - 2023)",
  "Google Developer Group DevFest/DevTalk Speaker (2022 - 2023)",
  "ReactJS Fundamentals & Best Website Programming Training",
  "Makassar Digital Valley — React Workshops (2019)",
  "Introduction to Progressive Web Apps — Makassar Programmer Community (2018)"
];

export const certificationsDetailed: string[] = [
  "Evidence-Based Approach (EBA) — Minamata, Japan (2023)",
  "APIE (Asia Pacific Internet Engineering) — Keio Univ., Japan (2023)",
  "Microsoft Office Specialist Excel (2013)",
  "Microsoft Office Specialist PowerPoint (2013)",
  "Querying Microsoft SQL Server (2012/2013)",
  "Google Ads Fundamental (2014)"
];
