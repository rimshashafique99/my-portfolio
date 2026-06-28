import { Project, Technology, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Job Copilot',
    description: 'An AI-powered job-search assistant that automates the application workflow generating tailored resumes and cover letters with AI and tracking every application from a single dashboard.',
    technologies: ['React.js', 'TypeScript', 'AI API', 'Tailwind CSS'],
    imageUrl: '/projects/ai-job-copilot.png',
    liveUrl: 'https://ai-job-copilot-red.vercel.app',
    repoUrl: 'https://github.com/rimshashafique99/ai-job-copilot',
    category: 'AI'
  },
  {
    id: '2',
    title: 'Morphix',
    description: 'A Next.js character studio where users customize playful 3D characters — choosing avatars, poses, and backgrounds — then preview and export high-resolution PNGs straight from the dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/projects/morphix.png',
    liveUrl: 'https://morphix-3d.vercel.app/',
    repoUrl: 'https://github.com/rimshashafique99/morphix',
    category: 'Web'
  },
  {
    id: '6',
    title: 'DevNDev',
    description: 'A multi-page agency website built in Next.js — fully responsive, with service, team, and contact pages, an animated technology marquee, and a testimonial carousel. Built for premium design and performance.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/projects/devndev.png',
    imageFit: 'cover',
    imagePosition: 'top center',
    liveUrl: 'https://dev-n-dev-work.vercel.app/',
    category: 'Web'
  },
  {
    id: '3',
    title: '99min',
    description: 'A real-time task marketplace where users post short gigs and get them done fast. Built on a layered Node.js architecture with Socket.IO live chat, Stripe-powered payments, and an automated task-expiry engine that keeps listings fresh.',
    technologies: ['Node.js', 'Express', 'Socket.IO', 'Stripe', 'JWT'],
    imageUrl: '/projects/99min.png',
    imageFit: 'cover',
    imagePosition: 'left center',
    liveUrl: 'https://99min-frontend-one.vercel.app/',
    category: 'Full Stack'
  },
  {
    id: '4',
    title: 'Unflappable',
    description: 'A clean, scalable Node.js backend powering the Unflappable wellness app handling Apple and OTP authentication, timezone-aware push notifications, mission progress tracking, and Apple In-App Purchase subscriptions.',
    technologies: ['Node.js', 'Express', 'Apple IAP', 'JWT'],
    imageUrl: '/projects/unflappable.png',
    imageFit: 'contain',
    repoUrl: 'https://github.com/rimshashafique99/unflappable_app_backend',
    category: 'Backend'
  },
  {
    id: '5',
    title: 'TalkType AI',
    description: 'A multi-language speech-to-text SaaS that turns audio into accurate transcripts using AI APIs, with Stripe-managed subscription tiers and a smooth upload-to-text workflow.',
    technologies: ['React', 'AI API', 'Stripe', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop',
    category: 'AI'
  }
];

export const TECHNOLOGIES: Technology[] = [
  // Languages
  { name: 'TypeScript', category: 'Languages', icon: 'Code2' },
  { name: 'JavaScript', category: 'Languages', icon: 'Code2' },
  { name: 'HTML5/CSS3', category: 'Languages', icon: 'Layers' },

  // Frameworks & Libraries
  { name: 'React.js', category: 'Frameworks & Libraries', icon: 'Globe' },
  { name: 'Next.js', category: 'Frameworks & Libraries', icon: 'Globe' },
  { name: 'Node.js', category: 'Frameworks & Libraries', icon: 'Server' },
  { name: 'Express.js', category: 'Frameworks & Libraries', icon: 'Server' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', icon: 'Layers' },
  { name: 'ShadCN UI', category: 'Frameworks & Libraries', icon: 'Box' },
  { name: 'Framer Motion', category: 'Frameworks & Libraries', icon: 'Zap' },

  // APIs & Authentication
  { name: 'REST APIs', category: 'APIs & Auth', icon: 'Zap' },
  { name: 'Stripe API', category: 'APIs & Auth', icon: 'Zap' },
  { name: 'JWT & OAuth', category: 'APIs & Auth', icon: 'Zap' },
  { name: 'Apple IAP', category: 'APIs & Auth', icon: 'Zap' },
  { name: 'AI API Integration', category: 'APIs & Auth', icon: 'Brain' },

  // AI & Dev Tools
  { name: 'Claude', category: 'AI & Dev Tools', icon: 'Brain' },
  { name: 'Cursor', category: 'AI & Dev Tools', icon: 'Terminal' },
  { name: 'AntiGravity', category: 'AI & Dev Tools', icon: 'Zap' },
  { name: 'Lovable', category: 'AI & Dev Tools', icon: 'Globe' },
  { name: 'GitHub', category: 'AI & Dev Tools', icon: 'Box' },

  // Databases
  { name: 'MongoDB', category: 'Databases', icon: 'Database' },
  { name: 'PostgreSQL', category: 'Databases', icon: 'Database' },
  { name: 'Supabase', category: 'Databases', icon: 'Database' },

  // Cloud & Deployment
  { name: 'Vercel', category: 'Cloud & Tools', icon: 'Cloud' },
  { name: 'Render', category: 'Cloud & Tools', icon: 'Cloud' },
  { name: 'Railway', category: 'Cloud & Tools', icon: 'Cloud' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I had the pleasure of working with Rimsha on a web application project, and she consistently demonstrated strong technical expertise and professionalism. She has a solid understanding of modern web technologies including React, Next.js, Node.js, and TypeScript, and she's reliable, detail-oriented, and communicates effectively. She approaches challenges with a problem-solving mindset and delivers high-quality, scalable solutions. I highly recommend her to anyone looking for a skilled Full-Stack Software Engineer.",
    name: 'Faseeh Hayat',
    title: 'Full-Stack Developer | Building Scalable SaaS Products',
    context: 'Client — DevNDev project',
    link: 'https://dev-n-dev-work.vercel.app/'
  }
];
