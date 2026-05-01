import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from './ui/Image';
import { Button } from './ui/Button';
import { Heading } from './ui/Heading';

const aboutMe = [
  {
    role: "PERFIL PROFISSIONAL",
    name: "Análise de Sistemas",
    description: "Especialista em transformar complexidade técnica em eficiência de negócio.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    role: "HARD SKILLS",
    name: "Lógica & Banco de Dados",
    description: "Sólidos conhecimentos em SQL, Configuração de Hardware e Ferramentas de Suporte Remoto.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
  },
  {
    role: "MANAGEMENT",
    name: "Liderança Operacional",
    description: "Gestão de KPIs, liderança de equipes e treinamento corporativo com visão estratégica.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
  }
];

export default function AboutMe() {
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
    <section id="aboutme" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 3xl:px-24 bg-cream text-charcoal">
      <div className="max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
        
        {/* Top Text */}
        <div className="max-w-5xl mb-24 md:mb-32">
          <Heading size="h3" weight="light" className="leading-tight flex flex-wrap gap-x-2 md:gap-x-3">
            {"Sou Victor Cardoso, especialista em Análise de Sistemas e Liderança Operacional. Transformo complexidade técnica em eficiência de negócio, unindo habilidades analíticas e estratégia para entregar resultados reais.".split(' ').map((word, i) => {
              const isBold = ['Victor', 'Cardoso,', 'Análise', 'Sistemas', 'Liderança', 'Operacional.', 'complexidade', 'eficiência', 'resultados'].includes(word);
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
            Sobre Mim
          </h3>
          <Button variant="default" size="sm" className="self-start sm:self-auto">
            Baixar CV Completo
          </Button>
        </div>

        {/* Divider */}
        <hr className="mission-reveal border-charcoal/20 mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {aboutMe.map((item, index) => (
            <div key={index} className="flex flex-col group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm p-2 -m-2">
              <div className="w-full aspect-square overflow-hidden mb-6 bg-charcoal/5">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-charcoal/60 font-bold mb-3">
                  {item.role}
                </span>
                <h4 className="text-lg md:text-xl font-bold font-sans text-charcoal mb-2 leading-snug">
                  {item.name}
                </h4>
                <p className="text-sm font-sans text-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
