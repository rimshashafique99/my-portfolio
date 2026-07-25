import { Project, Technology, Testimonial } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Job Copilot",
    description:
      "An AI-powered job-search assistant that extracts resume content from uploaded PDFs and combines it with job description context in a single structured LLM prompt to generate tailored cover letters, role-fit gap analysis, and CV bullet suggestions. Validates and cleans LLM output against a predictable schema, with every application tracked from a unified dashboard. Covered with component tests (Vitest, React Testing Library) and API tests (Supertest), deployed via a GitHub Actions CI/CD pipeline to Vercel.",
    technologies: ["React.js", "TypeScript", "Grok API", "Tailwind CSS"],
    imageUrl: "/projects/ai-job-copilot.png",
    liveUrl: "https://ai-job-copilot-red.vercel.app",
    repoUrl: "https://github.com/rimshashafique99/ai-job-copilot", // frontend
    backendRepoUrl:
      "https://github.com/rimshashafique99/ai-job-copilot-backend", // add this field to your Project type
    category: "Full Stack",
  },
  {
    id: "2",
    title: "Morphix",
    description:
      "A Next.js character studio where users customize 3D characters choosing avatars, poses, and backgrounds then preview and export high-resolution PNGs straight from the dashboard. Built from a provided design with Framer Motion-driven interactions throughout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/projects/morphix.png",
    liveUrl: "https://morphix-3d.vercel.app/",
    repoUrl: "https://github.com/rimshashafique99/morphix",
    category: "Web",
  },
  {
    id: "6",
    title: "DevNDev",
    description:
      "A multi-page agency website built in Next.js fully responsive, with service, team, and contact pages, an animated technology marquee, and a testimonial carousel. Built for premium design and performance.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    imageUrl: "/projects/devndev.png",
    imageFit: "cover",
    imagePosition: "top center",
    liveUrl: "https://dev-n-dev-work.vercel.app/",
    category: "Web",
  },
  {
    id: "3",
    title: "99min",
    description:
      "A real-time task marketplace built with a layered Node.js/Express backend architecture JWT/OTP authentication, role-based access control, Socket.IO-powered live chat and notifications, cron-based task expiration, and secure Stripe webhook integration that reduced payment processing failures by 15%.",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Stripe",
      "JWT",
    ],
    imageUrl: "/projects/99min.png",
    imageFit: "cover",
    imagePosition: "left center",
    liveUrl: "https://99min-frontend-one.vercel.app/",
    category: "Full Stack",
  },
  {
    id: "4",
    title: "Unflappable",
    description:
      "Backend for an iOS habit-tracking app: engineered dual authentication (email OTP + Apple Sign-In) and a mission engine powering daily missions, streak tracking, and weekly progress reviews. Integrated Firebase Cloud Messaging for push notifications and Apple In-App Purchase with automated Pro/free plan management.",
    technologies: ["Node.js", "Express", "Firebase", "Apple IAP", "JWT"],
    imageUrl: "/projects/unflappable.png",
    imageFit: "contain",
    repoUrl: "https://github.com/rimshashafique99/unflappable_app_backend",
    category: "Backend",
  },
  {
    id: "5",
    title: "TalkType AI",
    description:
      "A full-stack SaaS platform that lets users upload audio and generate multilingual transcripts using the OpenAI Whisper API, with Stripe-powered subscription billing and a smooth upload-to-text workflow.",
    technologies: ["React", "OpenAI Whisper API", "Stripe", "Node.js"],
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop",
    category: "Full Stack",
  },
  {
    id: "7",
    title: "Rent AI",
    description:
      "A multi-tenant property management SaaS built end-to-end with Next.js and Node.js — landlord and tenant dashboards, REST APIs, authentication, and bank account connectivity. Improved booking workflow efficiency by 40% through database query optimization and a dashboard redesign.",
    technologies: ["Next.js", "Node.js", "REST APIs", "PostgreSQL"],
    imageUrl:
      "https://images.unsplash.com/photo-1759162788764-f40075c8857f?q=80&w=2000&auto=format&fit=crop",
    category: "Full Stack",
  },
];

export const TECHNOLOGIES: Technology[] = [
  // Languages
  { name: "JavaScript (ES6+)", category: "Languages", icon: "Code2" },
  { name: "TypeScript", category: "Languages", icon: "Code2" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "Server" },
  { name: "Express.js", category: "Backend", icon: "Server" },
  { name: "REST APIs", category: "Backend", icon: "Zap" },
  { name: "WebSockets (Socket.IO)", category: "Backend", icon: "Zap" },
  { name: "JWT & OAuth", category: "Backend", icon: "Zap" },
  { name: "RBAC", category: "Backend", icon: "Zap" },

  // Frontend
  { name: "React.js", category: "Frontend", icon: "Globe" },
  { name: "Next.js", category: "Frontend", icon: "Globe" },
  { name: "Tailwind CSS", category: "Frontend", icon: "Layers" },
  { name: "shadcn/ui", category: "Frontend", icon: "Box" },
  { name: "Framer Motion", category: "Frontend", icon: "Zap" },
  { name: "Context API", category: "Frontend", icon: "Box" },
  { name: "Zustand", category: "Frontend", icon: "Box" },

  // Databases
  { name: "MongoDB", category: "Databases", icon: "Database" },
  { name: "PostgreSQL", category: "Databases", icon: "Database" },
  { name: "Supabase", category: "Databases", icon: "Database" },

  // AI / LLM Integration
  { name: "OpenAI API", category: "AI & LLM Integration", icon: "Brain" },
  { name: "Grok API", category: "AI & LLM Integration", icon: "Brain" },
  { name: "Whisper API", category: "AI & LLM Integration", icon: "Brain" },
  {
    name: "Prompt Engineering",
    category: "AI & LLM Integration",
    icon: "Brain",
  },

  // Payments & Integrations
  { name: "Stripe", category: "Payments & Integrations", icon: "Zap" },
  { name: "Apple IAP", category: "Payments & Integrations", icon: "Zap" },
  { name: "Firebase", category: "Payments & Integrations", icon: "Zap" },

  // Testing & Quality
  { name: "Vitest", category: "Testing & Quality", icon: "Code2" },
  {
    name: "React Testing Library",
    category: "Testing & Quality",
    icon: "Code2",
  },
  { name: "Supertest", category: "Testing & Quality", icon: "Code2" },

  // Cloud & DevOps
  { name: "Docker", category: "Cloud & DevOps", icon: "Cloud" },
  { name: "CI/CD (GitHub Actions)", category: "Cloud & DevOps", icon: "Cloud" },
  { name: "Vercel", category: "Cloud & DevOps", icon: "Cloud" },
  { name: "Render", category: "Cloud & DevOps", icon: "Cloud" },
  { name: "Railway", category: "Cloud & DevOps", icon: "Cloud" },

  // Tools & Practices
  { name: "Git & GitHub", category: "Tools & Practices", icon: "Box" },
  { name: "Postman", category: "Tools & Practices", icon: "Terminal" },
  { name: "Cursor", category: "Tools & Practices", icon: "Terminal" },
  { name: "Claude Code", category: "Tools & Practices", icon: "Brain" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I had the pleasure of working with Rimsha on a web application project, and she consistently demonstrated strong technical expertise and professionalism. She has a solid understanding of modern web technologies including React, Next.js, Node.js, and TypeScript, and she's reliable, detail-oriented, and communicates effectively. She approaches challenges with a problem-solving mindset and delivers high-quality, scalable solutions. I highly recommend her to anyone looking for a skilled Full-Stack Software Engineer.",
    name: "Faseeh Hayat",
    title: "Full-Stack Developer | Building Scalable SaaS Products",
    context: "Client — DevNDev project",
    link: "https://dev-n-dev-work.vercel.app/",
  },
  {
    quote:
      "Working with Rimsha was an excellent experience. She is a highly dedicated and talented Full Stack Developer who approaches every task with professionalism and precision. Throughout our project, she consistently delivered clean, efficient solutions and collaborated effectively with the team. Her technical skills, reliability, and positive attitude make her someone I would gladly work with again and confidently recommend to any organization or client.",
    name: "Muhammad Noman",
    title:
      "UI/UX & Product Designer helping businesses with High-End Websites, Web Apps & Mobile Apps",
    context: "Worked together on the Morphix Project",
    link: "https://morphix-3d.vercel.app/",
  },
];
