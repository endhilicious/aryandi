import { Project, Skill, Experience, PersonalInfo } from '#/types';

export const personalInfo: PersonalInfo = {
  name: "Aryandi",
  title: "Full Stack Developer",
  bio: "Passionate full-stack developer with expertise in modern web technologies. Specialized in creating responsive, user-friendly applications using React, Next.js, Node.js, and cloud technologies.",
  avatar: "/images/Aryandi-photo1.png",
  contact: {
    email: "aryandi@example.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    linkedin: "https://linkedin.com/in/aryandi",
    github: "https://github.com/aryandi",
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
    company: "Tech Solutions Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: "Led development of scalable web applications serving 100K+ users. Implemented microservices architecture and mentored junior developers.",
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
  },
  {
    id: "2",
    company: "Digital Agency Co.",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Developed and maintained multiple client projects. Improved application performance by 60% through optimization and integrated third-party APIs.",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe"]
  },
  {
    id: "3",
    company: "StartupXYZ",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    description: "Built responsive user interfaces and collaborated with design team to implement pixel-perfect designs. Contributed to 200% user base growth.",
    technologies: ["React", "TypeScript", "Styled Components", "Redux", "Jest"]
  }
];
