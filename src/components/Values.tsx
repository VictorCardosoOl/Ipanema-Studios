import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for the image
      gsap.to(".values-image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Staggered entrance for keywords
      gsap.from(".value-item", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-list",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="values" ref={containerRef} className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-charcoal text-cream overflow-hidden">
      {/* Left Panel */}
      <div className="p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen">
        <div className="flex justify-between text-sm">
          <h2 className="font-medium tracking-tight">Ipanema Studios</h2>
          <span className="opacity-70">Valores Fundamentais</span>
        </div>
        
        <div className="flex-grow flex items-center justify-center p-8 md:p-16">
           <div className="w-full max-w-sm aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop" 
              alt="Team working" 
              className="values-image w-full h-full object-cover opacity-90 scale-110 grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen">
        <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-70">
          <span>Perfil da Agência</span>
          <span>2026</span>
          <span>02 / 06</span>
        </div>
        
        <div className="flex-grow flex flex-col justify-center items-end text-right">
          <ul className="values-list space-y-2 md:space-y-4" aria-label="Core Values List">
            {[
              'Estratégia', 'Engenharia', 'Design', 'Desempenho', 
              'Escalabilidade', 'Inovação', 'Elegância', 'Precisão', 
              'Confiabilidade', 'Visão', 'Impacto'
            ].map((keyword, i) => (
              <li 
                key={i}
                className="value-item font-serif text-3xl md:text-5xl lg:text-6xl text-cream/90 hover:text-cream transition-colors cursor-default"
              >
                <span className="text-xs md:text-sm align-top mr-2 md:mr-4 opacity-50 font-sans tracking-widest" aria-hidden="true">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                {keyword}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
