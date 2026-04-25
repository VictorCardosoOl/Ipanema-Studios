import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { services } from '../data/services';
import Image from './ui/Image';

export default function Process() {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const floatingImageRef = useRef<HTMLDivElement>(null);

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
            trigger: listRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  // Floating Image Mouse Follower Logic
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const moveImage = (e: MouseEvent) => {
      if (floatingImageRef.current) {
         // Center the floating image on the cursor (assuming image width is 400px and height is 500px)
         gsap.to(floatingImageRef.current, {
            x: e.clientX,
            y: e.clientY,
            xPercent: -50,
            yPercent: -50,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto"
         });
      }
    };

    const handleMouseEnter = () => {
      gsap.to(floatingImageRef.current, { scale: 1, autoAlpha: 1, duration: 0.5, ease: "power3.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(floatingImageRef.current, { scale: 0.8, autoAlpha: 0, duration: 0.5, ease: "power3.out" });
    };

    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener('mousemove', moveImage);
      listElement.addEventListener('mouseenter', handleMouseEnter);
      listElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (listElement) {
        listElement.removeEventListener('mousemove', moveImage);
        listElement.removeEventListener('mouseenter', handleMouseEnter);
        listElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Animação de troca de imagem (Parallax / Blur interno)
  useLayoutEffect(() => {
    const images = gsap.utils.toArray('.floating-img');
    images.forEach((img: any, idx: number) => {
      if (idx === activeService) {
        gsap.fromTo(img, 
          { scale: 1.2, opacity: 0, filter: "blur(10px)" }, 
          { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out", zIndex: 10 }
        );
      } else {
        gsap.to(img, { opacity: 0, scale: 0.9, duration: 0.5, zIndex: 0 });
      }
    });
  }, [activeService]);

  return (
    <section id="services" ref={containerRef} className="min-h-screen w-full bg-[#0a0a0a] text-[#f5f5f0] py-24 md:py-32 flex flex-col relative overflow-hidden">
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

        {/* Content Area */}
        <div className="w-full relative">
          
          {/* List - Full Width on Desktop to allow mouse-follow */}
          <div ref={listRef} className="w-full lg:w-3/4 mx-auto services-list flex flex-col pb-32 z-20 relative">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <div 
                  key={service.id} 
                  className={`service-item group relative cursor-pointer flex flex-col border-b border-white/10 py-10 first:pt-0 last:border-b-0 transition-colors duration-500 hover:border-white/40`}
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 w-full">
                    {/* Number */}
                    <span className={`text-sm md:text-xl font-mono font-bold shrink-0 mt-2 transition-opacity duration-500 ${isActive ? 'opacity-100 text-white' : 'opacity-40 group-hover:opacity-70'}`}>
                      {service.id}
                    </span>
                    
                    {/* Title & Mobile Image */}
                    <div className="flex flex-col w-full">
                      <h3 className={`text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter transition-all duration-500 ease-out ${isActive ? 'translate-x-4 text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                        {service.title}
                      </h3>
                      
                      {/* Mobile Image (Visible only on small screens) */}
                      <div className={`block lg:hidden w-full h-[40vh] mt-6 overflow-hidden rounded-lg transition-all duration-700 ${isActive ? 'max-h-[40vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                         <Image 
                           src={service.image} 
                           alt={service.title}
                           className="w-full h-full object-cover grayscale"
                         />
                      </div>

                      {/* Expanded description */}
                      <div 
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${isActive ? 'max-h-[400px] opacity-100 mt-6 lg:mt-8' : 'max-h-0 opacity-0 mt-0'}`}
                      >
                        <div className="pl-0 lg:pl-6">
                          <p className="text-base md:text-xl lg:text-3xl opacity-80 max-w-3xl font-light leading-relaxed">
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

        </div>
      </div>

      {/* Floating Image (Follows Mouse on Desktop) */}
      <div 
        ref={floatingImageRef} 
        className="hidden lg:block fixed top-0 left-0 w-[450px] aspect-[4/5] pointer-events-none z-10 opacity-0 scale-75 overflow-hidden rounded-xl shadow-2xl bg-stone-900"
      >
        {services.map((service, idx) => (
          <Image 
            key={idx}
            src={service.image} 
            alt={service.title}
            className="floating-img absolute inset-0 w-full h-full object-cover grayscale opacity-0"
          />
        ))}
        {/* Tag on floating image */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end mix-blend-difference text-white z-20">
           <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-90">
             Index / {services[activeService]?.id}
           </div>
           <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-90 text-right">
             {services[activeService]?.title}
           </div>
        </div>
      </div>

    </section>
  );
}
