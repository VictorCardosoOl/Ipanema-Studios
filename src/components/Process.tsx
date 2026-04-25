import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { services } from '../data/services';
import Image from './ui/Image';

export default function Process() {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.fromTo(".services-title", 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // Animação da lista
      gsap.fromTo(".service-item", 
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-list",
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (imageRef.current) {
       gsap.fromTo(imageRef.current, 
         { scale: 1.15, opacity: 0, filter: "blur(20px)" }, 
         { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "expo.out", overwrite: "auto" }
       );
    }
  }, [activeService]);

  return (
    <section id="services" ref={containerRef} className="min-h-screen w-full bg-[#0a0a0a] text-[#f5f5f0] py-24 md:py-32 flex flex-col relative overflow-x-hidden">
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex-grow flex flex-col relative z-10">
        
        {/* Header Inspirado em Koto / Akaru */}
        <div className="mb-16 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12 services-title">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-sans font-bold uppercase tracking-tighter leading-[0.85]">
            Serviços
          </h2>
          <div className="md:w-1/3 md:pb-4">
            <p className="text-lg md:text-xl opacity-70 font-light leading-relaxed">
              Soluções sob medida para <strong className="text-white font-medium">Empresas de Pequeno Porte</strong>. Focamos em resultado, visibilidade e tranquilidade para a sua operação digital.
            </p>
          </div>
        </div>

        {/* Content Split */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start relative">
          
          {/* List - Left Side */}
          <div className="lg:col-span-7 services-list flex flex-col w-full pb-32">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <div 
                  key={service.id} 
                  className={`service-item group relative cursor-pointer flex flex-col border-b border-white/10 py-8 first:pt-0 last:border-b-0 transition-all duration-700`}
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 w-full">
                    {/* Number */}
                    <span className={`text-sm md:text-lg font-mono font-bold shrink-0 mt-2 transition-opacity duration-500 ${isActive ? 'opacity-100 text-white' : 'opacity-40 group-hover:opacity-70'}`}>
                      {service.id}
                    </span>
                    
                    {/* Title */}
                    <div className="flex flex-col w-full">
                      <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight transition-all duration-500 ease-out ${isActive ? 'translate-x-4 text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                        {service.title}
                      </h3>
                      
                      {/* Expanded description */}
                      <div 
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${isActive ? 'max-h-[400px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}
                      >
                        <div className="pl-0 md:pl-4">
                          <p className="text-base md:text-xl lg:text-2xl opacity-80 max-w-2xl font-light leading-relaxed">
                            {service.description}
                          </p>
                          
                          {/* Botão de Ação */}
                          <div className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] cursor-pointer group/btn">
                            <span className="relative overflow-hidden">
                              <span className="inline-block transition-transform duration-500 group-hover/btn:-translate-y-full">Explorar Solução</span>
                              <span className="absolute top-0 left-0 inline-block transition-transform duration-500 translate-y-full group-hover/btn:translate-y-0 text-white">Explorar Solução</span>
                            </span>
                            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors duration-500">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image - Right Side (Sticky) */}
          <div className="lg:col-span-5 h-[50vh] lg:h-[70vh] w-full block overflow-hidden rounded-xl bg-[#111] sticky top-[15vh]">
            <div ref={imageRef} className="absolute inset-0 w-full h-full">
               <Image 
                  src={services[activeService].image} 
                  alt={services[activeService].title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
               />
            </div>
            {/* Overlay Gradient for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
            
            {/* Tag/Label */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end mix-blend-difference text-white">
              <div className="text-xs uppercase tracking-[0.3em] font-bold opacity-90">
                Index / {services[activeService].id}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold opacity-90 text-right max-w-[50%]">
                {services[activeService].title}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
