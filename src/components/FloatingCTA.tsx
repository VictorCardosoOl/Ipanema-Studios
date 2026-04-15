import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past the hero section (approx 80vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 bg-charcoal text-cream px-6 py-4 rounded-full flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-widest font-bold shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-black focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream outline-none ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Iniciar Projeto"
    >
      Iniciar Projeto <ArrowRight size={14} />
    </a>
  );
}
