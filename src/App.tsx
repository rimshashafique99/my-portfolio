/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar, Hero, ProjectCard, Stack, Capabilities, About, Experience, Contact, Footer } from './components/Portfolio';
import { PROJECTS, TECHNOLOGIES } from './constants';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black pt-24 lg:pt-0 bg-[#FDFDFC] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#EEEEEE] min-h-screen">
      <CustomCursor />
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-black dark:bg-white origin-left z-[60]" 
        style={{ scaleX }} 
      />

      <Navbar />
      
      <Hero />

      <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 dark:text-white">Selected<br/><span className="italic font-display dark:text-white">Projects</span></h2>
            <p className="text-sm md:text-base opacity-60 dark:opacity-40 max-w-md mx-auto dark:text-white">
              A collection of production SaaS products and technical demonstrations.
            </p>
          </motion.div>
        </div>

        <div className="w-full">
          <div className="flex flex-col">
              {PROJECTS.map((project, index) => (
                <div key={project.id}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>
      </section>

      <Stack technologies={TECHNOLOGIES} />

      <Capabilities />

      <Experience />

      <About />
      
      <Contact />
      
      <Footer />

      {/* Side Label */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 text-[10px] uppercase font-bold tracking-[0.5em] vertical-rl transform rotate-180 mix-blend-difference select-none pointer-events-none opacity-20">
        <span>Curated Exhibition / 01</span>
      </div>
    </main>
  );
}

