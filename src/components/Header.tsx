import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-cream pointer-events-none"
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
