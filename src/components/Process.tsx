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
      gsap.from(".service-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-list",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
      
      gsap.from(".services-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (imageRef.current) {
       gsap.fromTo(imageRef.current, 
         { scale: 1.1, opacity: 0.4, filter: "blur(10px)" }, 
         { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out", overwrite: "auto" }
       );
    }
  }, [activeService]);

  return (
    <section id="services" ref={containerRef} className="min-h-screen w-full bg-cream text-charcoal py-24 md:py-32 overflow-hidden flex flex-col">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex-grow flex flex-col">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 services-title">
          <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-sans font-bold uppercase tracking-tighter leading-none">
            Serviços
          </h2>
          <div className="md:w-1/3">
            <p className="text-sm md:text-base opacity-70 font-medium">
              Soluções sob medida para Empresas de Pequeno Porte (EPPs). 
              Focamos em resultado, visibilidade e tranquilidade para a sua operação digital.
            </p>
          </div>
        </div>

        {/* Content Split */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* List - Left Side */}
          <div className="lg:col-span-7 services-list flex flex-col gap-6 md:gap-10">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-item group relative cursor-pointer flex flex-col md:flex-row md:items-start gap-4 md:gap-8 transition-opacity duration-500 border-b border-charcoal/10 pb-6 md:pb-10 last:border-b-0 ${activeService === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                onMouseEnter={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
              >
                {/* Number */}
                <span className="text-sm md:text-lg font-mono font-bold opacity-50 shrink-0 mt-2">
                  {service.id}
                </span>
                
                {/* Title & Description */}
                <div className="flex flex-col gap-2 md:gap-4 w-full">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">
                    {service.title}
                  </h3>
                  
                  {/* Expanded description on active */}
                  <div 
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${activeService === index ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
                  >
                    <p className="text-sm md:text-base lg:text-lg opacity-80 max-w-xl font-light">
                      {service.description}
                    </p>
                    
                    {/* Botão sutil para planos/contato */}
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest cursor-pointer hover:opacity-70 transition-opacity">
                      <span>Saiba mais</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image - Right Side */}
          <div className="lg:col-span-5 h-[40vh] md:h-[60vh] lg:h-[75vh] w-full relative block overflow-hidden rounded-sm bg-charcoal/5">
            <div ref={imageRef} className="absolute inset-0 w-full h-full">
               <Image 
                  src={services[activeService].image} 
                  alt={services[activeService].title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </div>
            {/* Overlay premium */}
            <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply pointer-events-none" />
            
            {/* Pequeno detalhe decorativo */}
            <div className="absolute bottom-6 right-6 text-[10px] uppercase tracking-widest font-bold opacity-90 text-white mix-blend-difference">
              Index / {services[activeService].id}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
