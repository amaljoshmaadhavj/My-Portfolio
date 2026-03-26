import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Primary Dot - Weighted feel */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full z-[9999] pointer-events-none mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: 1
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          mass: 0.5
        }}
      />
      
      {/* Subtle Outer Ring - Delayed follow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/20 rounded-full z-[9998] pointer-events-none"
        style={{
          translateX: useSpring(cursorX, { damping: 40, stiffness: 150 }),
          translateY: useSpring(cursorY, { damping: 40, stiffness: 150 }),
          x: -10,
          y: -10
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1
        }}
      />
    </>
  );
};
