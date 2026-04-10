import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
      gsap.from(".mission-text p", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mission-text",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Image reveal with scale and blur
      gsap.from(".mission-image-container", {
        scale: 0.9,
        filter: 'blur(10px)',
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".mission-image-container",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mission" ref={containerRef} className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-cream text-charcoal overflow-hidden">
      {/* Left Panel */}
      <div className="p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen">
        <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-80 font-bold mb-8">
          <h2 className="font-medium tracking-tight">Ipanema Studios</h2>
          <span className="opacity-90">Nossa Missão</span>
        </div>
        
        <div className="flex-grow flex flex-col justify-end pb-12 md:pb-24 max-w-xl">
          <div className="mission-text grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-sm leading-relaxed font-medium opacity-90">
            <div>
              <p className="mb-6 relative">
                <span className="absolute -left-4 top-0 text-charcoal/70" aria-hidden="true">•</span>
                Na Ipanema Studios, não apenas construímos sites; criamos experiências digitais que ressoam. Nossa missão é unir elegância estética e engenharia robusta, entregando plataformas que não apenas impressionam visualmente, mas funcionam perfeitamente sob pressão.
              </p>
              <p className="relative">
                <span className="absolute -left-4 top-0 text-charcoal/70" aria-hidden="true">•</span>
                Acreditamos que cada pixel importa e cada linha de código deve servir a um propósito. Combinando pensamento estratégico com tecnologia de ponta, capacitamos marcas a estabelecerem uma presença dominante no cenário digital.
              </p>
            </div>
            
            <div>
              <p className="mb-6 relative">
                <span className="absolute -left-4 top-0 text-charcoal/70" aria-hidden="true">•</span>
                Nossa abordagem é holística. Não olhamos apenas para os requisitos imediatos; antecipamos necessidades futuras, garantindo que as soluções que construímos hoje sejam escaláveis para os desafios de amanhã.
              </p>
              <p className="relative">
                <span className="absolute -left-4 top-0 text-charcoal/70" aria-hidden="true">•</span>
                Somos parceiros em sua jornada digital, comprometidos com a transparência, a excelência e a busca incessante pela perfeição em cada projeto que realizamos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen">
        <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-80 font-bold">
          <span>Perfil da Agência</span>
          <span>2026</span>
          <span>03 / 06</span>
        </div>
        
        <div className="flex-grow flex items-center justify-center p-8 md:p-16">
          <div className="mission-image-container w-full max-w-md aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1000&auto=format&fit=crop" 
              alt="Abstract minimal" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
