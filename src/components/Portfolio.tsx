import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Github, Linkedin, ExternalLink, ArrowUpRight,
  Server, Layers, Zap, Brain, Code2, Globe, Navigation, Database, Box, Cloud, Terminal,
  Sun, Moon, Menu, X
} from 'lucide-react';
import { Project, Technology } from '../types';
import { ThemeToggle } from './ThemeToggle';
import { AnimatePresence } from 'motion/react';
import { ContactForm } from './ContactForm';

const IconMap: Record<string, any> = {
  Server, Layers, Zap, Brain, Code2, Globe, Navigation, Database, Box, Cloud
};

export function Navbar() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['overview', 'projects', 'expertise', 'about', 'connect'];
    const observers = sections.map(id => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { 
          threshold: 0.5,
          rootMargin: "-10% 0px -80% 0px"
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs?.disconnect());
    };
  }, []);

  const navItems = ['Overview', 'Projects', 'Expertise', 'Experience', 'About', 'Connect'];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center transition-colors duration-500 ${
      isMenuOpen 
        ? 'bg-transparent' 
        : 'bg-white/10 dark:bg-[#0A0A0A]/10 backdrop-blur-xl lg:bg-transparent lg:dark:bg-transparent'
    }`}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase dark:text-white relative z-[90]"
      >
        RS
      </motion.div>
      
      <div className="flex items-center gap-6 md:gap-12 relative z-[90]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden lg:flex gap-8"
        >
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            
            return (
              <a 
                key={item}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className="relative py-2 px-1 rounded-full flex items-center justify-center group"
              >
                <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 relative z-10 ${
                  isActive ? 'text-black dark:text-white' : 'text-black/40 dark:text-white/40 lg:group-hover:text-black/80 dark:lg:group-hover:text-white/80'
                }`}>
                  {item}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute bottom-1 left-0 right-0 h-[1.2px] bg-black dark:bg-white"
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 35,
                      mass: 1,
                      restDelta: 0.001
                    }}
                  />
                )}
              </a>
            );
          })}
        </motion.div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center relative z-[100] rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-md transition-all active:scale-95"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              <motion.span 
                animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-6 h-[1.2px] bg-black dark:bg-white rounded-full"
              />
              <motion.span 
                animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-6 h-[1.2px] bg-black dark:bg-white rounded-full"
              />
              <motion.span 
                animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-6 h-[1.2px] bg-black dark:bg-white rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-[100px] z-[80] flex flex-col items-center justify-start lg:hidden pt-40"
          >
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-8 md:gap-12"
            >
              {navItems.map((item, index) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      delay: index * 0.08 + 0.15,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className="relative group py-1 active:scale-95 transition-transform"
                  >
                    <span className={`text-2xl md:text-4xl font-light tracking-tight transition-all duration-700 ${
                      isActive ? 'text-black dark:text-white' : 'text-black/30 dark:text-white/30'
                    }`}>
                      {item}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeNavMobile"
                        className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-black dark:bg-white origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Hero() {
  return (
    <motion.section 
      id="overview" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="pt-40 pb-20 px-6 md:px-12 flex flex-col items-center text-center max-w-7xl mx-auto"
    >
      <div className="max-w-4xl w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase opacity-40 mb-8 dark:text-white"
        >
          Full-Stack Developer
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[32px] sm:text-[60px] md:text-[80px] leading-tight font-light tracking-tighter mb-8 dark:text-white whitespace-nowrap"
        >
          {"RIMSHA SHAFIQUE".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.5 + index * 0.1,
                ease: "easeIn"
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block w-[2px] h-[0.8em] bg-black dark:bg-white ml-1 align-middle"
          />
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed opacity-80 dark:opacity-60 max-w-2xl mb-8 dark:text-white"
        >
          Skilled in building production SaaS products, understanding business journeys, and delivering practical, high-impact solutions through scalable, maintainable full-stack code.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex gap-6 mb-12"
        >
          <a href="https://github.com/rimshashafique99" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center lg:hover:bg-black dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black transition-all group">
            <Github size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://linkedin.com/in/rimshashafique" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center lg:hover:bg-black dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black transition-all group" aria-label="LinkedIn">
            <Linkedin size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="mailto:rimshashafique1997@gmail.com" className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center lg:hover:bg-black dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black transition-all group" aria-label="Email">
            <Mail size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <motion.a 
            href="#connect" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold tracking-widest uppercase rounded-full lg:hover:bg-black/90 dark:lg:hover:bg-white/90 transition-all duration-300 shadow-xl"
          >
            Hire Me
          </motion.a>
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border border-black/10 dark:border-white/10 text-black dark:text-white text-[10px] font-bold tracking-widest uppercase rounded-full lg:hover:bg-black dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black transition-all duration-300"
          >
            View Projects
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] leading-tight font-mono opacity-30 tracking-widest"
        >
          OPEN FOR OPPORTUNITIES
        </motion.div>
      </div>
    </motion.section>
  );
}

export function ProjectCard({ project, index }: { project: Project, index: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
      className="group relative border-t border-black/10 dark:border-white/10 pt-12 pb-16 flex flex-col md:flex-row items-center md:items-start gap-10 last:border-b max-w-5xl mx-auto"
    >
      <div className="text-[10px] font-mono opacity-40 dark:opacity-60 absolute left-0 top-12 hidden lg:block">0{index + 1}</div>
      
      {/* Project Image with Subtle Parallax/Zoom */}
      <div className={`w-full md:w-64 lg:w-80 h-44 md:h-48 lg:h-56 overflow-hidden flex-shrink-0 relative lg:group-hover:shadow-2xl transition-shadow duration-500 rounded-lg ${project.imageFit === 'contain' ? 'bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-950 p-3' : 'bg-gray-100 dark:bg-gray-900'}`}>
        {imageFailed ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <span className="text-xs font-mono uppercase tracking-widest opacity-40 dark:text-white px-4 text-center">
              {project.title}
            </span>
          </div>
        ) : (
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            onError={() => setImageFailed(true)}
            style={{ objectPosition: project.imagePosition }}
            initial={{ scale: project.imageFit === 'contain' ? 1 : 1.1 }}
            whileHover={{
              scale: project.imageFit === 'contain' ? 1.05 : 1.15,
              y: -5,
              transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
            }}
            className={`w-full h-full grayscale lg:group-hover:grayscale-0 transition-all duration-700 ${project.imageFit === 'contain' ? 'object-contain rounded-md' : 'object-cover'}`}
            referrerPolicy="no-referrer"
          />
        )}
      </div>

      <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <h3 className="text-3xl lg:text-4xl font-light tracking-tight dark:text-white">{project.title}</h3>
          <span className="text-[9px] uppercase tracking-widest px-2.5 py-0.5 border border-black/10 dark:border-white/10 rounded-full opacity-60 dark:text-white">
            {project.category}
          </span>
        </div>
        <p className="text-sm md:text-base opacity-60 dark:opacity-40 max-w-md leading-relaxed mb-8">
          {project.description}
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="text-[10px] uppercase font-bold tracking-widest opacity-30 dark:opacity-50 dark:text-white">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-4 mt-6 md:mt-2">
        {project.liveUrl && project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live`}
            className="w-14 h-14 rounded-full border border-black dark:border-white flex items-center justify-center lg:hover:bg-black dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black transition-all group/btn"
          >
            <ArrowUpRight size={18} className="lg:group-hover/btn:translate-x-0.5 lg:group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}
        {project.repoUrl && project.repoUrl !== '#' && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source on GitHub`}
            className="w-14 h-14 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center lg:hover:bg-black dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black transition-all"
          >
            <Github size={18} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function Stack({ technologies }: { technologies: Technology[] }) {
  const categoryOrder = [
    "Languages",
    "Frameworks & Libraries",
    "APIs & Auth",
    "AI & Dev Tools",
    "Databases",
    "Cloud & Tools"
  ];

  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);

  // Filter and sort based on ordered list, then add any remaining categories
  const sortedCategories = [
    ...categoryOrder.filter(cat => groupedTech[cat]),
    ...Object.keys(groupedTech).filter(cat => !categoryOrder.includes(cat))
  ];

  return (
    <section id="expertise" className="py-32 px-6 md:px-12 border-t border-black/5 dark:border-white/5 max-w-7xl mx-auto flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-24 max-w-2xl"
        >
          <div className="uppercase text-[10px] font-bold tracking-[0.2em] opacity-40 dark:opacity-60 mb-8 dark:text-white">Expertise</div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter leading-none mb-6 dark:text-white">Professional<br/><span className="italic font-display">Skills</span></h2>
          <p className="text-sm md:text-base opacity-60 dark:opacity-40 max-w-md mx-auto dark:text-white">
            A comprehensive look at my technical toolkit, from core languages to AI-driven development.
          </p>
        </motion.div>
        
        <div className="w-full max-w-5xl flex flex-col gap-12 md:gap-16">
          {sortedCategories.map((category, index) => {
            const techs = groupedTech[category];
            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="group border-t border-black/5 dark:border-white/5 pt-12 first:border-0 first:pt-0"
              >
                <div className="flex flex-col items-center text-center gap-8">
                  <div className="flex-shrink-0 transition-colors">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 group-hover:opacity-100 dark:group-hover:opacity-100 transition-opacity dark:text-white">
                      {category}
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 w-full">
                    {techs.map((tech, techIndex) => {
                      const Icon = IconMap[tech.icon || ''] || Terminal;
                      return (
                        <motion.span 
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          whileHover="hover"
                          viewport={{ once: true }}
                          transition={{ 
                            delay: (index * 0.05) + (techIndex * 0.03),
                            duration: 0.5,
                            ease: "easeOut"
                          }}
                          className="px-5 py-2.5 border border-black/5 dark:border-white/5 text-[12px] font-medium rounded-full lg:hover:border-black dark:lg:hover:border-white transition-all bg-white/50 dark:bg-white/5 flex items-center gap-2 group/tech cursor-default dark:text-white"
                        >
                          <motion.div
                            variants={{
                              hover: { 
                                scale: 1.15, 
                                rotate: 8,
                                y: -2
                              }
                            }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 300, 
                              damping: 20
                            }}
                          >
                            <Icon size={14} className="opacity-40 group-hover/tech:opacity-100 transition-opacity" />
                          </motion.div>
                          {tech.name}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  const focuses = [
    {
      title: "SaaS Development",
      desc: "Architecting end-to-end production SaaS products with robust backends and intuitive user journeys for maximum impact.",
      tag: "FULL STACK"
    },
    {
      title: "Real-time Interactivity",
      desc: "Implementing low-latency communication systems using Socket.IO and WebRTC for chats, marketplaces, and notifications.",
      tag: "COMMUNICATIONS"
    },
    {
      title: "Secure Integrations",
      desc: "Integrating enterprise-grade billing systems (Stripe) and dual authentication (Apple/OTP) with secure webhook handling.",
      tag: "INFRASTRUCTURE"
    }
  ];

  return (
    <section id="capabilities" className="py-32 px-6 md:px-12 bg-white dark:bg-[#111111] flex flex-col items-center">
      <div className="w-full flex flex-col items-center max-w-7xl">
        <div className="w-full max-w-4xl flex flex-col gap-12">
          {focuses.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/5 dark:border-white/5 pt-12 first:border-0 first:pt-0"
            >
              <div className="text-center md:text-left">
                <span className="text-[9px] uppercase tracking-widest font-bold opacity-30 dark:opacity-50 block mb-2 dark:text-white">{f.tag} — 0{i + 1}</span>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight dark:text-white">{f.title}</h3>
              </div>
              <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left">
                <p className="text-sm opacity-60 dark:opacity-40 leading-relaxed mb-6 dark:text-white">{f.desc}</p>
                <div className="w-8 h-[1px] bg-black/10 dark:bg-white/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const experiences = [
    {
      company: "Alpha Hive AI",
      role: "MERN Stack Developer",
      duration: "July 2025 – Present",
      achievements: [
        "Built and shipped backend systems for multiple client products across web and mobile platforms:",
"99min — Architected the full backend for a task marketplace from scratch, implementing a layered service structure, JWT-based auth with OTP and RBAC, real-time Socket.IO chat and notifications, cron-based task expiry, and end-to-end Stripe subscription billing with webhook signature verification.",
"Unflappable — Built the core authentication system (Email OTP + Apple Sign In) and mission engine powering daily missions and streak logic; integrated Firebase FCM for timezone-aware push notifications and Apple IAP for in-app purchase management.",
"Rent AI — Developed a full-stack property management platform for landlords covering tenant tracking and rent scheduling, improving booking efficiency by 40%.",
"TalkType AI — Built a multi-language audio-to-text SaaS product with AI API integration and Stripe subscription billing."
      ]
    },
    {
      company: "Octathorn Technologies",
      role: "MERN Stack Intern",
      duration: "Jul 2024 – Oct 2024",
      achievements: [
        "Built a real-time chat app with WebSockets for instant messaging and file sharing.",
        "Created a video chat app using WebRTC for live peer-to-peer communication."
      ]
    },
    {
      company: "Echo Technologies",
      role: "WordPress Developer",
      duration: "Aug 2023 – April 2024",
      achievements: [
        "Developed and maintained WordPress websites with custom themes and plugins for enhanced functionality and UX."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="uppercase text-[10px] font-bold tracking-[0.2em] opacity-40 mb-8 dark:text-white">Professional Path</div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 dark:text-white">Professional<br/><span className="italic font-display dark:text-white">Experience</span></h2>
        </motion.div>
      </div>

      <div className="w-full max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, i) => (
          <motion.div 
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-black/5 dark:border-white/5 first:border-0 pt-0"
          >
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 dark:text-white/40 mb-2">{exp.duration}</span>
              <h3 className="text-xl font-medium dark:text-white">{exp.company}</h3>
              <p className="text-xs uppercase tracking-widest opacity-40 mt-1 dark:text-white/60">{exp.role}</p>
            </div>
            <div className="md:col-span-2">
              <ul className="space-y-4">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="text-sm md:text-base opacity-60 dark:opacity-40 leading-relaxed flex gap-4">
                    <span className="flex-shrink-0 w-1 h-1 rounded-full bg-black dark:bg-white mt-2.5 opacity-20" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-40 px-6 md:px-12 bg-white dark:bg-[#111111] text-black dark:text-white border-t border-black/5 dark:border-white/5 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 max-w-2xl"
        >
          <div className="uppercase text-[10px] font-bold tracking-[0.2em] opacity-40 mb-8 dark:text-white/60">Profile</div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter leading-none mb-6">The<br/><span className="italic font-display">Architect</span></h2>
        </motion.div>
        
        <div className="w-full max-w-4xl flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col gap-16"
          >
            <p className="text-2xl md:text-4xl font-light leading-relaxed max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              I am a full-stack developer focused on building 
              <span className="text-black dark:text-white italic"> practical, high-impact</span> solutions. My work lives at 
              the intersection of business logic and scalable software architecture.
            </p>
            
            <div className="pt-20 border-t border-black/10 dark:border-white/10 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center max-w-xl"
              >
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-40 dark:text-white/60">Background</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  With 1+ year of hands-on experience in production environments, I have delivered features end-to-end, 
                  collaborating with cross-functional teams to translate complex needs into maintainable code.
                </p>
              </motion.div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12 pt-12 items-center justify-center">
               <div className="flex flex-col items-center text-center">
                  <span className="text-[10px] uppercase tracking-widest opacity-40 mb-2 dark:text-white/60">Education</span>
                  <span className="text-sm font-medium">B.S. Computer Science — CUST (2019–2023)</span>
               </div>
               <div className="hidden md:block w-px h-8 bg-black/10 dark:border-white/10" />
               <div className="flex flex-col items-center text-center">
                  <span className="text-[10px] uppercase tracking-widest opacity-40 mb-2 dark:text-white/60">Languages</span>
                  <span className="text-sm font-medium">English, Urdu</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="connect" className="py-15 px-12 md:px-24">
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="uppercase text-[10px] font-bold tracking-[0.4em] opacity-40 mb-12"
        >
            Start a Conversation
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="text-6xl md:text-8xl font-light tracking-tighter mb-16 dark:text-white"
        >
          Let&apos;s build <br/> something <span className="italic font-display">unseen</span>.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <motion.button 
            onClick={() => setIsFormOpen(true)}
            whileHover={window.innerWidth > 1024 ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-[#111111] dark:bg-white text-white dark:text-black text-[10px] font-bold tracking-[0.3em] uppercase rounded-full shadow-2xl lg:hover:shadow-black/20 dark:lg:hover:shadow-white/20 transition-all cursor-none"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="px-6 md:px-24 py-3 bg-[#FDFDFC] dark:bg-[#0A0A0A] border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left Side: Name and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-[10px] font-bold tracking-[0.4em] uppercase dark:text-white">
              RIMSHA SHAFIQUE
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 dark:text-white/60">
                © {currentYear} All Rights Reserved
              </span>
            </div>
          </div>
          
          {/* Right Side: Social Links */}
          <div className="flex gap-10">
            <a href="https://github.com/rimshashafique99" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <Github size={18} className="opacity-40 group-hover:opacity-100 transition-opacity dark:text-white" />
              <span className="text-[9px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-40 transition-opacity dark:text-white">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/rimshashafique" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <Linkedin size={18} className="opacity-40 group-hover:opacity-100 transition-opacity dark:text-white" />
              <span className="text-[9px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-40 transition-opacity dark:text-white">LinkedIn</span>
            </a>
            <a href="mailto:rimshashafique1997@gmail.com" className="group flex flex-col items-center gap-2">
              <Mail size={18} className="opacity-40 group-hover:opacity-100 transition-opacity dark:text-white" />
              <span className="text-[9px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-40 transition-opacity dark:text-white">Mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
