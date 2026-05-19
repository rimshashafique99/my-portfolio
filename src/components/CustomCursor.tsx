import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid motion
  const cursorSpringConfig = { damping: 30, stiffness: 300 };
  const trailSpringConfig = { damping: 25, stiffness: 150 };
  
  const cursorX = useSpring(mouseX, cursorSpringConfig);
  const cursorY = useSpring(mouseY, cursorSpringConfig);
  
  const trailX = useSpring(mouseX, trailSpringConfig);
  const trailY = useSpring(mouseY, trailSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], .cursor-pointer, input, textarea');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Trailing Circle */}
      <motion.div
        className="absolute rounded-full border border-black/20 dark:border-white/20"
        style={{
          left: trailX,
          top: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 60 : 32,
          height: isHovering ? 60 : 32,
          backgroundColor: isHovering ? 'rgba(0,0,0,0.02)' : 'rgba(0,0,0,0)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      />

      {/* Main Cursor Icon */}
      <motion.div
        className="absolute text-black dark:text-white"
        style={{
          left: cursorX,
          top: cursorY,
          translateX: '-4px', // Aligning the actual pointer tip
          translateY: '-4px',
        }}
        animate={{
          scale: isHovering ? 0.85 : 1,
          opacity: isHovering ? 0.6 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="22" 
          height="22" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M13.943 13.013l5.016 -1.957c1.445 -.563 1.367 -2.633 -.116 -3.087l-12.727 -3.895c-1.253 -.384 -2.426 .79 -2.042 2.042l3.895 12.727c.454 1.483 2.524 1.56 3.087 .116l1.957 -5.017c.166 -.426 .503 -.763 .93 -.929" />
          <path d="M20 15l-3.151 1.064a1.25 1.25 0 0 0 -.785 .785l-1.064 3.151" />
        </svg>
      </motion.div>
    </div>
  );
}
