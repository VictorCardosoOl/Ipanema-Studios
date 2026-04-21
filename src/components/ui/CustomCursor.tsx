import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Esconde o cursor nativo
    document.body.style.cursor = 'none';

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.cursor-explore')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full bg-charcoal text-cream font-sans text-[10px] uppercase font-bold tracking-widest hidden md:flex overflow-hidden"
      animate={{
        x: position.x - (isHovering ? 40 : 8),
        y: position.y - (isHovering ? 40 : 8),
        width: isHovering ? 80 : 16,
        height: isHovering ? 80 : 16,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.1
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="whitespace-nowrap"
      >
        Explorar
      </motion.span>
    </motion.div>
  );
}
