import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={typeof window !== 'undefined' && window.innerWidth > 1024 ? "hover" : ""}
      whileTap="tap"
      onClick={toggleTheme}
      className="p-3 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] lg:hover:bg-black/[0.04] dark:lg:hover:bg-white/[0.04] lg:hover:border-black/20 dark:lg:hover:border-white/20 transition-all duration-300 relative overflow-hidden group cursor-pointer"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.9, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 30 }}
            variants={{
              hover: { rotate: 45, scale: 1.1 },
              tap: { scale: 0.95 }
            }}
            transition={{ 
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative z-10"
          >
            <Sun size={17} strokeWidth={1.5} className="text-black/60 lg:group-hover:text-amber-500 transition-colors duration-500" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.9, x: 3 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -3 }}
            variants={{
              hover: { rotate: -12, scale: 1.08 },
              tap: { scale: 0.95 }
            }}
            transition={{ 
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative z-10"
          >
            <Moon size={17} strokeWidth={1.5} className="text-white/60 lg:group-hover:text-indigo-400 transition-colors duration-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
