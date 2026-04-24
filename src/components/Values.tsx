import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
    <section id="values" ref={containerRef} className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white text-charcoal overflow-hidden">
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
        
        <div className="flex-grow flex flex-col justify-center items-start mt-12 md:mt-0">
          <ul className="values-list space-y-8 md:space-y-12 w-full max-w-xl" aria-label="Core Values List">
            {[
              { title: 'Engenharia de Ponta', desc: 'Sistemas arquitetados para performance extrema e escalabilidade infinita.' },
              { title: 'Design Editorial', desc: 'Estética de alto padrão que comunica autoridade e eleva o valor percebido da sua marca.' },
              { title: 'Precisão Absoluta', desc: 'Atenção obsessiva aos mínimos detalhes, em cada linha de código e em cada pixel da tela.' }
            ].map((item, i) => (
              <li 
                key={i}
                className="value-item flex flex-col md:flex-row gap-4 md:gap-8 border-b border-charcoal/10 pb-8 group"
              >
                <span className="text-xs font-bold tracking-widest text-charcoal/30 pt-1 shrink-0" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal mb-3 group-hover:opacity-70 transition-opacity">
                    {item.title}
                  </h3>
                  <p className="font-light text-sm md:text-base text-charcoal/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
