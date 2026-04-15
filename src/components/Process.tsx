import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { services } from '../data/services';

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-image", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-image",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".process-card", {
        x: -40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-card",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".process-step", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-steps-container",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="h-[100dvh] w-full grid grid-cols-1 md:grid-cols-12 bg-cream text-charcoal border-t border-charcoal/10 overflow-hidden">
      {/* Image Column (Left) - Made narrower (col-span-3 instead of 4) */}
      <div className="md:col-span-3 relative h-[40vh] md:h-full bg-sage overflow-hidden min-h-0">
        {/* Top Left Label */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 text-[10px] uppercase tracking-widest font-bold opacity-90">
          Nossas Especialidades
        </div>
        
        {/* Moodboard Composition */}
        <div className="absolute inset-0 p-6 pt-16 md:p-8 md:pt-24 flex items-center justify-center" aria-hidden="true">
           {/* Background texture */}
           <img 
              src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
              referrerPolicy="no-referrer"
              loading="lazy"
           />
           
           {/* Main framed image */}
           <div className="process-image relative w-[85%] max-w-[200px] md:max-w-none md:w-[80%] aspect-[3/4] bg-white p-3 md:p-4 shadow-2xl z-10 border border-charcoal/5">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" 
                alt="" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
           </div>

           {/* A&C Card */}
           <div className="process-card absolute left-2 md:left-4 top-1/4 md:top-1/3 bg-white p-3 md:p-4 shadow-lg z-20 w-24 md:w-32 aspect-square flex flex-col border border-charcoal/5">
              <span className="font-serif text-lg md:text-xl font-bold">A&C</span>
              <div className="mt-auto border-t border-charcoal/20 pt-2 text-[8px] uppercase tracking-wider">
                Design Studio
              </div>
           </div>
        </div>
      </div>

      {/* Vertical Title Column (Middle) - Adjusted font size */}
      <div className="md:col-span-2 border-y md:border-y-0 md:border-r border-charcoal/10 flex items-center justify-center py-8 md:py-0 bg-cream min-h-0">
        <h2 
          className="text-5xl md:text-6xl lg:text-[7rem] font-sans font-bold tracking-[0.15em] uppercase text-charcoal opacity-20"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Serviços
        </h2>
      </div>

      {/* Content Column (Right) - Made wider (col-span-7 instead of 6) */}
      <div className="md:col-span-7 flex flex-col h-full bg-cream relative min-h-0">
        {/* Top Right Label */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 text-[10px] 3xl:text-xs uppercase tracking-widest font-bold opacity-90">
          Página 03 / 06
        </div>
        
        {/* Text Grid at the bottom */}
        <div className="flex-grow flex items-center md:items-end p-6 md:p-12 lg:p-16 3xl:p-24 pb-8 md:pb-16 3xl:pb-24 min-h-0 overflow-y-auto md:overflow-visible">
          <div className="process-steps-container grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 3xl:gap-x-24 gap-y-8 lg:gap-y-12 3xl:gap-y-16 w-full max-w-4xl 3xl:max-w-5xl">
            
            {services.map((service) => (
              <div key={service.id} className="process-step">
                <h3 className="text-[10px] 3xl:text-xs font-bold tracking-widest uppercase mb-2 md:mb-4 3xl:mb-6 border-b border-charcoal/10 pb-2 3xl:pb-4">
                  {service.id} / {service.title}
                </h3>
                <p className="text-xs lg:text-sm 3xl:text-lg leading-relaxed opacity-90 text-justify font-medium">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
