import { Project, Technology } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '99min',
    description: 'A robust task marketplace featuring a layered architecture, real-time in-app chat via Socket.IO, and automated task expiry systems.',
    technologies: ['Node.js', 'Express', 'Socket.IO', 'Stripe', 'JWT'],
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop',
    liveUrl: '#',
    repoUrl: '#',
    category: 'Full Stack'
  },
  {
    id: '2',
    title: 'Unflappable',
    description: 'Mission-driven platform with dual authentication (Apple/OTP), timezone-aware push notifications, and integrated Apple In-App Purchases.',
    technologies: ['React Native', 'Firebase', 'Apple IAP', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2000&auto=format&fit=crop',
    liveUrl: '#',
    repoUrl: '#',
    category: 'Mobile'
  },
  {
    id: '3',
    title: 'Rent AI',
    description: 'Comprehensive property management platform for landlords, streamlining tenant tracking and rent scheduling, improving efficiency by 40%.',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Supabase'],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop',
    liveUrl: '#',
    repoUrl: '#',
    category: 'Web'
  },
  {
    id: '4',
    title: 'TalkType AI',
    description: 'Multi-language audio-to-text SaaS integration with AI APIs for transcription and Stripe subscription management.',
    technologies: ['React', 'AI API', 'Stripe', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop',
    liveUrl: '#',
    repoUrl: '#',
    category: 'AI'
  },
  {
    id: '5',
    title: 'Cosmetic Recommender',
    description: 'E-commerce platform featuring a user review-based recommendation system designed to enhance user selection accuracy.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop',
    liveUrl: '#',
    repoUrl: '#',
    category: 'E-Commerce'
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
