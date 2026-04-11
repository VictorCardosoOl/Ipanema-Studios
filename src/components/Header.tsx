import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollDirection } from '../hooks/useScrollDirection';

export default function Header() {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const headerRef = useRef<HTMLElement>(null);

  // Hide if scrolling down and not at the very top
  const isHidden = scrollDirection === 'down' && !isAtTop;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 3xl:px-24 3xl:py-12 mix-blend-difference text-cream pointer-events-none transition-transform duration-300 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="text-xl 3xl:text-3xl font-medium tracking-tight pointer-events-auto">Formosa Studios</div>
      <a 
        href="#contact" 
        className="pointer-events-auto border border-cream rounded-full px-6 py-2 3xl:px-10 3xl:py-4 text-sm 3xl:text-lg hover:bg-cream hover:text-charcoal transition-colors focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal outline-none"
      >
        Iniciar um Projeto
      </a>
    </header>
  );
}
