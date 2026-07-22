export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: string;
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  badgeColor?: 'cyan' | 'purple' | 'orange';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gradeBadge?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; status: 'cyan' | 'purple' | 'orange' }[];
}

export const personalData = {
  name: "DWI SURYOKO",
  tagline: "// SYSTEM STATUS: ONLINE",
  role: "// WordPress Backend & Full Stack Engineer",
  yearsExperience: "10+",
  location: "Yogyakarta, Indonesia",
  phone: "+62-821-3841-7627",
  email: "dwi.suryoko15@gmail.com",
  github: "https://github.com/dwieyoko",
  linkedin: "https://www.linkedin.com/in/dwi-s-b86036110/",
  summary: "Highly skilled and detail-oriented Backend WordPress & Full Stack Developer with 10 years of experience building robust, scalable, and secure web applications. Specialized in custom plugin & theme development, database optimization, REST API integration, and performance tuning.",
};

export const experiences: Experience[] = [
  {
    company: "MapSteps UG",
    role: "WordPress Backend Developer",
    period: "2024 - 2026",
    location: "Germany / Remote",
    description: [
      "Maintained and improved custom WordPress plugins and child themes.",
      "Resolved high-priority security vulnerabilities and performed code refactoring.",
      "Implemented automated data sync workflows between WordPress REST API endpoints and external databases."
    ],
    technologies: ["PHP 8.2", "WordPress REST API", "MySQL", "JavaScript", "AJAX", "Git", "GitHub", "GitLab"],
    badgeColor: "cyan"
  },
  {
    company: "Born Digital",
    role: "WordPress Backend Developer",
    period: "2019 - 2024",
    location: "Indonesia",
    description: [
      "Engineered high-performance gamification web platforms using custom WordPress CMS architectures.",
      "Developed interactive custom gaming mechanics, user engagement scoring, and reward reward systems.",
      "Optimized complex database queries handling high-traffic gaming leaderboards under heavy concurrent loads.",
      "Collaborated closely with UI/UX engineers to deliver seamless interactive front-end experiences."
    ],
    technologies: ["PHP", "WordPress", "Node.js", "MySQL", "WordPress REST API", "Firebase", "Git", "GitHub"],
    badgeColor: "purple"
  },
  {
    company: "MadeIndonesia",
    role: "WordPress Backend Developer",
    period: "2015 - 2019",
    location: "Indonesia",
    description: [
      "Architected and deployed custom company profile platforms and bespoke client themes from scratch.",
      "Integrated third-party payment gateways, CRM tools, and mailing services (Mailjet).",
      "Ensured mobile responsiveness, cross-browser consistency, and tight security hardening.",
      "Managed client deployments, server migrations, and version control workflows on WP Engine & Vercel."
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "jQuery", "Bootstrap", "MySQL"],
    badgeColor: "orange"
  }
];

export const projects: Project[] = [
  {
    id: "mapsteps-directory",
    number: "01",
    title: "MapSteps Enterprise Directory System",
    subtitle: "High-Performance WordPress Directory & Sync Engine",
    description: "Enterprise multi-directory architecture for WordPress featuring asynchronous AJAX search filtering, real-time organization sync, and custom REST API endpoints handling thousands of geo-located entries.",
    tags: ["WordPress", "PHP", "REST API", "AJAX", "MySQL", "Tailwind CSS"],
    icon: "🗺️",
    featured: true,
    demoUrl: "https://mapsteps.com",
    githubUrl: "#"
  },
  {
    id: "gamification-engine",
    number: "02",
    title: "Gamification Platform & Reward Engine",
    subtitle: "Real-time Scoring & Gaming Mechanics CMS",
    description: "Scalable gamification engine allowing users to participate in interactive challenges, earn achievement badges, and track global leaderboard rankings with optimized database caching.",
    tags: ["WordPress", "PHP", "Node.js", "WebSocket", "MySQL", "Gutenberg Blocks"],
    icon: "🎮",
    featured: true,
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "agentic-ai-workflow",
    number: "03",
    title: "Agentic AI Code Automation Suite",
    subtitle: "AI-Driven Development & Automation Workflows",
    description: "Custom automated agentic workflow integrations leveraging AI models to streamline legacy code refactoring, automated unit test generation, and database schema migrations.",
    tags: ["Agentic AI", "TypeScript", "Node.js", "SolidJS", "PostgreSQL"],
    icon: "🤖",
    featured: true,
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "custom-gutenberg-suite",
    number: "04",
    title: "Bespoke Gutenberg Block Framework",
    subtitle: "Modular React & Solid UI Blocks for Enterprise CMS",
    description: "Comprehensive suite of custom Gutenberg blocks and dynamic site components giving content creators granular control over layout, performance, and responsive styling.",
    tags: ["JavaScript", "SolidJS", "PHP", "Tailwind CSS", "WordPress"],
    icon: "🧩",
    featured: false,
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Technologies",
    skills: [
      { name: "WordPress Custom Themes", status: "cyan" },
      { name: "Custom Plugin Development", status: "cyan" },
      { name: "WordPress REST API", status: "cyan" },
      { name: "Custom Gutenberg Blocks", status: "cyan" },
      { name: "Database Optimization", status: "cyan" },
      { name: "CPT & Meta Fields", status: "cyan" }
    ]
  },
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "PHP 8.x", status: "purple" },
      { name: "JavaScript (ES6+)", status: "purple" },
      { name: "SolidJS", status: "purple" },
      { name: "Node.js", status: "purple" },
      { name: "Tailwind CSS", status: "purple" },
      { name: "AJAX & Fetch", status: "purple" },
      { name: "jQuery", status: "purple" },
      { name: "HTML5 / CSS3 / SCSS", status: "purple" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Agentic AI Development", status: "orange" },
      { name: "Git & GitHub", status: "orange" },
      { name: "MySQL & PostgreSQL", status: "orange" },
      { name: "WP Engine", status: "orange" },
      { name: "Vercel", status: "orange" },
      { name: "Firebase", status: "orange" },
      { name: "Mailjet API", status: "orange" }
    ]
  },
  {
    title: "Specializations",
    skills: [
      { name: "Custom Backend Architecture", status: "cyan" },
      { name: "API Security & Rate Limiting", status: "purple" },
      { name: "Query Performance Tuning", status: "orange" },
      { name: "Gamification Mechanics", status: "cyan" }
    ]
  }
];

export const educations: Education[] = [
  {
    degree: "Associate Degree in Informatics Management",
    institution: "Technology Digital Indonesia University",
    period: "2010 - 2014",
    description: "Focused on web application programming, database design, software engineering lifecycle, and system administration.",
    gradeBadge: "Graduated with Honors"
  }
];
