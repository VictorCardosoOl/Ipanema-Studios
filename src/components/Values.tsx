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
      <div className="p-8 md:p-12 3xl:p-24 4xl:p-32 flex flex-col min-h-[50vh] md:min-h-screen">
        <div className="flex justify-between text-[10px] 3xl:text-xs uppercase tracking-widest opacity-80 font-bold mb-8">
          <h2 className="font-medium tracking-tight">Formosa Studios</h2>
          <span className="opacity-90">Valores Fundamentais</span>
        </div>
        
        <div className="flex-grow flex items-center justify-center p-8 md:p-16 3xl:p-24">
           <div className="w-full max-w-sm 3xl:max-w-lg 4xl:max-w-2xl aspect-[4/5] overflow-hidden">
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
      <div className="p-8 md:p-12 3xl:p-24 4xl:p-32 flex flex-col min-h-[50vh] md:min-h-screen">
        <div className="flex justify-between text-[10px] 3xl:text-xs uppercase tracking-widest opacity-80 font-bold">
          <span>Perfil da Agência</span>
          <span>2026</span>
          <span>05 / 06</span>
        </div>
        
        <div className="flex-grow flex flex-col justify-center items-end text-right">
          <ul className="values-list space-y-2 md:space-y-4 3xl:space-y-6" aria-label="Core Values List">
            {[
              'Estratégia', 'Engenharia', 'Design', 'Desempenho', 
              'Escalabilidade', 'Inovação', 'Elegância', 'Precisão', 
              'Confiabilidade', 'Visão', 'Impacto'
            ].map((keyword, i) => (
              <li 
                key={i}
                className="value-item font-serif text-3xl md:text-5xl lg:text-6xl 3xl:text-8xl text-cream hover:text-cream/70 transition-colors cursor-default"
              >
                <span className="text-xs md:text-sm 3xl:text-lg align-top mr-2 md:mr-4 opacity-70 font-sans tracking-widest font-medium" aria-hidden="true">
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
