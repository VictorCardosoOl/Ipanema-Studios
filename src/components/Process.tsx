import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
    <section id="process" ref={containerRef} className="min-h-screen grid grid-cols-1 md:grid-cols-12 bg-cream text-charcoal border-t border-charcoal/10">
      {/* Image Column (Left) */}
      <div className="md:col-span-4 relative h-[50vh] md:h-screen bg-sage overflow-hidden">
        {/* Top Left Label */}
        <div className="absolute top-8 left-8 z-20 text-[10px] uppercase tracking-widest font-bold opacity-90">
          Bastidores do Estúdio
        </div>
        
        {/* Moodboard Composition */}
        <div className="absolute inset-0 p-8 pt-24 flex items-center justify-center" aria-hidden="true">
           {/* Background texture */}
           <img 
              src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
              referrerPolicy="no-referrer"
              loading="lazy"
           />
           
           {/* Main framed image */}
           <div className="process-image relative w-[80%] aspect-[3/4] bg-white p-4 shadow-2xl z-10 border border-charcoal/5">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" 
                alt="" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
           </div>

           {/* A&C Card */}
           <div className="process-card absolute left-4 top-1/3 bg-white p-4 shadow-lg z-20 w-32 aspect-square flex flex-col border border-charcoal/5">
              <span className="font-serif text-xl font-bold">A&C</span>
              <div className="mt-auto border-t border-charcoal/20 pt-2 text-[8px] uppercase tracking-wider">
                Design Studio
              </div>
           </div>
        </div>
      </div>

      {/* Vertical Title Column (Middle) */}
      <div className="md:col-span-2 border-y md:border-y-0 md:border-r border-charcoal/10 flex items-center justify-center py-16 md:py-0 bg-cream">
        <h2 
          className="text-7xl md:text-8xl lg:text-[10rem] font-sans font-bold tracking-[0.15em] uppercase text-charcoal opacity-20"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Processo
        </h2>
      </div>

      {/* Content Column (Right) */}
      <div className="md:col-span-6 flex flex-col min-h-[50vh] md:min-h-screen bg-cream relative">
        {/* Top Right Label */}
        <div className="absolute top-8 right-8 text-[10px] 3xl:text-xs uppercase tracking-widest font-bold opacity-90">
          Página 04 / 06
        </div>
        
        {/* Text Grid at the bottom */}
        <div className="flex-grow flex items-end p-8 md:p-16 3xl:p-32 pb-16 md:pb-24 3xl:pb-32">
          <div className="process-steps-container grid grid-cols-1 md:grid-cols-2 gap-x-12 3xl:gap-x-24 gap-y-16 3xl:gap-y-24 w-full max-w-3xl 3xl:max-w-5xl">
            
            <div className="process-step">
              <h3 className="text-[10px] 3xl:text-xs font-bold tracking-widest uppercase mb-4 3xl:mb-6 border-b border-charcoal/10 pb-2 3xl:pb-4">01 / Descoberta & Visão</h3>
              <p className="text-sm 3xl:text-lg leading-relaxed opacity-90 text-justify font-medium">
                Começamos entendendo a identidade central da sua marca, público-alvo e objetivos principais. Esse mergulho profundo garante que nossa direção estratégica esteja perfeitamente alinhada com seus objetivos de negócios.
              </p>
            </div>

            <div className="process-step">
              <h3 className="text-[10px] 3xl:text-xs font-bold tracking-widest uppercase mb-4 3xl:mb-6 border-b border-charcoal/10 pb-2 3xl:pb-4">02 / Escopo Técnico</h3>
              <p className="text-sm 3xl:text-lg leading-relaxed opacity-90 text-justify font-medium">
                Em seguida, mapeamos os requisitos funcionais. Desde preferências de CMS e integrações de terceiros até benchmarks de performance, definimos a arquitetura técnica que impulsionará sua plataforma.
              </p>
            </div>

            <div className="process-step">
              <h3 className="text-[10px] 3xl:text-xs font-bold tracking-widest uppercase mb-4 3xl:mb-6 border-b border-charcoal/10 pb-2 3xl:pb-4">03 / Direção Estética</h3>
              <p className="text-sm 3xl:text-lg leading-relaxed opacity-90 text-justify font-medium">
                Curamos moodboards e referências visuais para estabelecer a identidade visual. Esta fase colaborativa nos ajuda a definir a tipografia, paletas de cores e a vibração editorial geral antes do início do design.
              </p>
            </div>

            <div className="process-step">
              <h3 className="text-[10px] 3xl:text-xs font-bold tracking-widest uppercase mb-4 3xl:mb-6 border-b border-charcoal/10 pb-2 3xl:pb-4">04 / Cronograma & Proposta</h3>
              <p className="text-sm 3xl:text-lg leading-relaxed opacity-90 text-justify font-medium">
                Por fim, sintetizamos nossas descobertas em um cronograma de projeto abrangente. Você receberá um cronograma detalhado, entregáveis claros e um plano estruturado descrevendo exatamente como daremos vida à sua visão.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
