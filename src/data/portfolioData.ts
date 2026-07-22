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
    id: "asml-discovery",
    number: "01",
    title: "ASML Discovery Onboarding Platform",
    subtitle: "Enterprise Gamified Onboarding System",
    description: "Interactive knowledge onboarding system designed for ASML. Integrates immersive visual map navigation, custom gamification mechanics, and SAML SSO authentication to guide new hires through the company's complex value streams, tech stacks, and organizational workflows.",
    tags: ["WordPress", "PHP", "JavaScript", "Gamification", "SAML SSO", "SCSS", "Firebase"],
    icon: "🌐",
    featured: true,
    demoUrl: "https://asml-discovery.com/",
    githubUrl: "#"
  },
  {
    id: "online-patient-registration-system",
    number: "02",
    title: "Online patient Registration for a Clinic",
    subtitle: "Online patient Registration System",
    description: "Online patient Registration system allowing users to create an appointment and  with optimized database caching.",
    tags: ["PHP", "Tailwind CSS"],
    icon: "📋",
    featured: true,
    demoUrl: "https://adyaksa.periksadokter.com/",
    githubUrl: "#"
  },
  {
    id: "agcga-website",
    number: "03",
    title: "AGCGA Website",
    subtitle: "Governmental Association Website",
    description: "Custom website for governmental association with interactive event calendar, member directory, and resource management system.",
    tags: ["Elementor", "PHP", "WordPress", "iMIS Integration"],
    icon: "🏛️",
    featured: true,
    demoUrl: "https://www.agcga.org/",
    githubUrl: "#"
  },
  {
    id: "afss-buyer-guide",
    number: "04",
    title: "AFSS Society Buyer Guide",
    subtitle: "Governmental Association Buyer Guide",
    description: "Custom buyer guide for governmental association.",
    tags: ["PHP", "Tailwind CSS", "WordPress", "Impexium Integration"],
    icon: "🧩",
    featured: true,
    demoUrl: "https://www.afssociety.org/corporate-members-buyer-guide/",
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
