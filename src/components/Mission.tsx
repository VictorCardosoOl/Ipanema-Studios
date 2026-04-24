import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from './ui/Image';
import { Button } from './ui/Button';
import { Heading } from './ui/Heading';

const founders = [
  {
    role: "DIRETOR DE DESIGN",
    name: "Lucas Formosa",
    description: "Especialista em criar interfaces minimalistas e experiências de usuário memoráveis.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    role: "LÍDER DE ENGENHARIA",
    name: "Rafael Silva",
    description: "Arquiteto de software focado em performance, escalabilidade e código limpo.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
  },
  {
    role: "ESTRATEGISTA / CEO",
    name: "Marina Costa",
    description: "Visão de negócios e estratégia de produto para conectar marcas aos seus clientes.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mission-word", {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".mission-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mission-reveal",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mission" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 3xl:px-24 bg-cream text-charcoal">
      <div className="max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
        
        {/* Top Text */}
        <div className="max-w-5xl mb-24 md:mb-32">
          <Heading size="h3" weight="light" className="leading-tight flex flex-wrap gap-x-2 md:gap-x-3">
            {"Nossa agência nasceu da obsessão por escalabilidade e design de vanguarda. Preenchemos a lacuna entre a estética editorial e a engenharia de software profunda, compilando plataformas digitais complexas que convertem e dominam seus respectivos mercados.".split(' ').map((word, i) => {
              const isBold = ['escalabilidade', 'design', 'vanguarda.', 'estética', 'editorial', 'engenharia', 'software'].includes(word);
              return (
                <span key={i} className="overflow-hidden inline-flex pb-1">
                  <span className={`mission-word inline-block ${isBold ? 'font-serif font-semibold text-charcoal' : ''}`}>
                    {word}
                  </span>
                </span>
              );
            })}
          </Heading>
        </div>

        {/* Section Header */}
        <div className="mission-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6">
          <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-charcoal">
            Nossos Fundadores
          </h3>
          <Button variant="default" size="sm" className="self-start sm:self-auto">
            Conheça a equipe
          </Button>
        </div>

        {/* Divider */}
        <hr className="mission-reveal border-charcoal/20 mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm p-2 -m-2">
              <div className="w-full aspect-square overflow-hidden mb-6 bg-charcoal/5">
                <Image 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-charcoal/60 font-bold mb-3">
                  {founder.role}
                </span>
                <h4 className="text-lg md:text-xl font-bold font-sans text-charcoal mb-2 leading-snug">
                  {founder.name}
                </h4>
                <p className="text-sm font-sans text-charcoal/70 leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
