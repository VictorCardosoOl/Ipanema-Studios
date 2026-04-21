import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Adicione a classe 'cursor-explore' nos elementos onde o cursor deve expandir
      if (target.closest('.cursor-explore')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center rounded-full bg-charcoal text-cream font-sans text-[10px] uppercase font-bold tracking-widest hidden md:flex"
      animate={{
        x: position.x - (isHovering ? 40 : 8),
        y: position.y - (isHovering ? 40 : 8),
        width: isHovering ? 80 : 16,
        height: isHovering ? 80 : 16,
        opacity: 1
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.1
      }}
    >
      {isHovering ? 'Explorar' : ''}
    </motion.div>
  );
}
