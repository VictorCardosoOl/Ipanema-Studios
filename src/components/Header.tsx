import { motion } from 'motion/react';
import { useScrollDirection } from '../hooks/useScrollDirection';

export default function Header() {
  const { scrollDirection, isAtTop } = useScrollDirection();

  // Hide if scrolling down and not at the very top
  const isHidden = scrollDirection === 'down' && !isAtTop;

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-cream pointer-events-none transition-transform duration-300 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="text-xl font-medium tracking-tight pointer-events-auto">Ipanema Studios</div>
      <a 
        href="#contact" 
        className="pointer-events-auto border border-cream rounded-full px-6 py-2 text-sm hover:bg-cream hover:text-charcoal transition-colors"
      >
        Iniciar um Projeto
      </a>
    </motion.header>
  );
}
