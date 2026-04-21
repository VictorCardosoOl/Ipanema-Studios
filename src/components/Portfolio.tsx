import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolio';
import Image from './ui/Image';
import { Button } from './ui/Button';
import { Heading } from './ui/Heading';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const totalWidth = container.scrollWidth - window.innerWidth;

      const horizontalAnim = gsap.to(container, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        }
      });

      // Animação de revelação do texto para cada projeto
      gsap.utils.toArray<HTMLElement>('.portfolio-card').forEach((card) => {
        const textElements = card.querySelectorAll('.portfolio-text-reveal');
        gsap.from(textElements, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalAnim,
            start: "left 85%",
            toggleActions: "play none none none"
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef} 
      className="relative w-full h-[100dvh] bg-white text-charcoal overflow-hidden"
    >
      {/* Background static texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <Image src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop" alt="" className="w-full h-full object-cover grayscale" />
      </div>

      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
        <h2 className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-80">Trabalhos / Backstage</h2>
      </div>

      <div 
        ref={scrollContainerRef} 
        className="flex h-full w-max items-center px-[10vw] relative z-10"
      >
        {projects.map((project, idx) => (
          <div key={idx} className="portfolio-card w-[80vw] md:w-[60vw] lg:w-[45vw] h-[70vh] mr-[5vw] flex flex-col group relative">
            <div className="w-full h-[60%] overflow-hidden bg-stone-900 relative">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                <Button variant="whiteOutline" size="lg" className="backdrop-blur-sm bg-white/10" onClick={() => alert("Abrir Modal de Backstage: Desafios, Arquitetura, Impacto")}>
                  Ver Backstage Técnico
                </Button>
              </div>
            </div>
            <div className="mt-8 portfolio-text-reveal">
              <span className="text-[10px] uppercase tracking-widest text-charcoal/50 mb-2 block border-b border-charcoal/10 pb-2">
                0{idx + 1} &mdash; {project.title}
              </span>
              <Heading size="h3" weight="normal" className="mt-4 leading-tight group-hover:text-charcoal/80 transition-colors duration-300">
                {project.title}
              </Heading>
              <p className="mt-3 text-sm md:text-base font-sans font-light tracking-wide text-charcoal/70 max-w-sm line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
        {/* Extra spacing at the end */}
        <div className="w-[10vw] h-full flex-shrink-0" />
      </div>
    </section>
  );
}
