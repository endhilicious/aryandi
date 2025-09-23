import { Project, Skill, Experience, PersonalInfo } from '#/types';

export const personalInfo: PersonalInfo = {
  name: "Muh. Aryandi",
  title: "Frontend Lead Engineer",
  bio: "I'm a passionate Frontend Engineer with a strong background in programming and deep enthusiasm for the fundamentals of JavaScript and TypeScript. I specialize in HTML/CSS slicing, have solid UI/UX sensibilities (Figma), and build with React, Next.js, Gatsby, and Storybook. I care deeply about quality and reliability, using Jest, Mocha, and RTL to ensure robust components. I enjoy leading, mentoring, and collaborating across teams, including in remote environments.",
  avatar: "/images/Aryandi-photo1.png",
  contact: {
    email: "muhammadaryandi90@gmail.com",
    phone: "+62 812-3456-7890",
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
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with admin dashboard, payment integration, and inventory management. Built with modern technologies and responsive design.",
    image: "/images/Picture.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/aryandi/ecommerce-platform",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop interface, and team management features.",
    image: "/images/Picture2.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/aryandi/task-manager",
    featured: true
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, interactive maps, and 7-day weather predictions.",
    image: "/images/Picture3.png",
    technologies: ["Vue.js", "Express.js", "OpenWeather API", "Chart.js"],
    liveUrl: "https://weather-dashboard.vercel.app",
    githubUrl: "https://github.com/aryandi/weather-dashboard",
    featured: false
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.",
    image: "/images/Picture4.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://aryandi.dev",
    githubUrl: "https://github.com/aryandi/portfolio",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Visi Prima Nusantara",
    position: "Frontend Lead / Scrum Master",
    duration: "Jul 2023 - Present",
    description: "Led frontend initiatives and Scrum adoption (JIRA workflows, roles, ceremonies) for 30+ IT members; transitioned project management from Trello to JIRA and established iterative guidelines across sprints.",
    technologies: ["React", "Next.js", "TypeScript", "JIRA", "Scrum"]
  },
  {
    id: "2",
    company: "Keller Williams Realty, Inc.",
    position: "Frontend Engineer",
    duration: "Feb 2019 - Jun 2023",
    description: "Handled 600+ JIRA tickets; collaborated with 200+ devs; increased test coverage via unit/E2E; refactored multiple repos from JS to TS; built common Listings components/utilities repo used across features.",
    technologies: ["React", "TypeScript", "Jest", "RTL", "Mocha"]
  },
  {
    id: "3",
    company: "INMAGINE",
    position: "Frontend Developer",
    duration: "May 2021 - Nov 2022",
    description: "Contributed to frontend features and performance improvements across product surfaces.",
    technologies: ["React", "TypeScript", "Next.js"]
  },
  {
    id: "4",
    company: "PT Docotel Teknologi Celebes",
    position: "Frontend Engineer",
    duration: "Nov 2018 - Mar 2019",
    description: "Delivered frontend interfaces for internal and client applications.",
    technologies: ["React", "JavaScript", "Bootstrap"]
  },
  {
    id: "5",
    company: "Developer Circles from Facebook",
    position: "Community Lead",
    duration: "Jun 2019 - Jun 2023",
    description: "Led community programs, talks, and developer upskilling initiatives in Makassar region.",
    technologies: ["Community", "Leadership", "Workshops"]
  }
];

export const specializingIn: string[] = [
  // Row 1
  "Javascript",
  "HTML CSS",
  "Nextjs",
  "Typescript",
  "Ionic",
  // Row 2
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
