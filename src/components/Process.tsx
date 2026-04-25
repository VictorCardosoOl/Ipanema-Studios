import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '../data/services';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const [activeService, setActiveService] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animação de entrada do Header
      gsap.fromTo(".services-header", 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // Animação stagger para as linhas do acordeão
      gsap.fromTo(".service-row", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-list-container",
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const setHoveredService = (index: number | null) => {
    setActiveService(index);
  };

  return (
    <section id="services" ref={containerRef} className="w-full bg-[#0a0a0a] text-[#f5f5f0] py-16 md:py-24 flex flex-col relative overflow-hidden">
      
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-12 md:mb-20 relative z-10 services-header flex flex-col md:flex-row md:items-end justify-between gap-8">
         <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-sans font-bold uppercase tracking-tighter leading-[0.85]">
           Serviços
         </h2>
         <div className="md:w-1/3 md:pb-2">
           <p className="text-base md:text-xl opacity-70 font-light leading-relaxed">
              Soluções sob medida para <strong className="text-white font-medium">Empresas de Pequeno Porte</strong>. Focamos em resultado, visibilidade e tranquilidade para a sua operação digital.
           </p>
         </div>
      </div>

      {/* Accordion List (Full Width) */}
      <div className="w-full services-list-container relative z-10">
         <div className="border-t border-white/10">
           {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                 <div 
                   key={service.id}
                   className="service-row w-full border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.02] group"
                   onMouseEnter={() => setHoveredService(index)}
                   onMouseLeave={() => setHoveredService(null)}
                 >
                    <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8 md:py-10 flex flex-col">
                       {/* Header do Item */}
                       <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
                          <div className="flex items-center gap-6 md:gap-12">
                             <span className={`text-sm md:text-xl font-mono font-bold transition-opacity duration-300 ${isActive ? 'opacity-80 text-white' : 'opacity-30 group-hover:opacity-60'}`}>
                               {service.id}
                             </span>
                             <h3 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>
                               {service.title}
                             </h3>
                          </div>
                          
                          {/* Ícone de Mais/Menos Animado */}
                          <div className="hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full border border-white/20 transition-all duration-500 group-hover:border-white/50" 
                               style={{ transform: isActive ? 'rotate(135deg)' : 'rotate(0)' }}>
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                               <line x1="12" y1="5" x2="12" y2="19"></line>
                               <line x1="5" y1="12" x2="19" y2="12"></line>
                             </svg>
                          </div>
                       </div>
                       
                       {/* Corpo do Acordeão (Expansível) */}
                       <div className={`grid transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'grid-rows-[1fr] mt-6 md:mt-10 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'}`}>
                          <div className="overflow-hidden">
                             <div className="flex flex-col xl:flex-row xl:items-start gap-8 md:pl-[4.5rem] lg:pl-[6.5rem]">
                                <p className="text-lg md:text-2xl font-light leading-relaxed max-w-3xl text-white/80">
                                   {service.description}
                                </p>
                                
                                <div className="mt-4 xl:mt-0 xl:ml-auto">
                                   <a href="#contact" className="inline-block uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                                      Discutir Projeto
                                   </a>
                                </div>
                             </div>
                          </div>
                       </div>
                       
                    </div>
                 </div>
              )
           })}
         </div>
      </div>
      
    </section>
  );
}
