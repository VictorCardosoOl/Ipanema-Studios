import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Quanto tempo leva para desenvolver um site?",
    answer: "O cronograma varia conforme a complexidade, mas um projeto padrão de landing page editorial leva entre 3 a 5 semanas, desde a descoberta até o lançamento final."
  },
  {
    id: 2,
    question: "Vocês fazem manutenção após o lançamento?",
    answer: "Sim, oferecemos planos de suporte contínuo que incluem atualizações de segurança, otimização de performance e ajustes de conteúdo para garantir que sua plataforma permaneça impecável."
  },
  {
    id: 3,
    question: "O site será otimizado para o Google (SEO)?",
    answer: "Absolutamente. Todos os nossos projetos são construídos com as melhores práticas de SEO técnico, garantindo indexação rápida, alta performance (Core Web Vitals) e acessibilidade."
  },
  {
    id: 4,
    question: "Como funciona o suporte técnico?",
    answer: "Nosso suporte é direto e humano. Você terá um canal exclusivo para dúvidas e solicitações, com tempos de resposta rápidos para garantir a continuidade do seu negócio."
  },
  {
    id: 5,
    question: "Quais tecnologias vocês utilizam?",
    answer: "Utilizamos o que há de mais moderno no mercado: React, Next.js, Tailwind CSS e GSAP para animações. Focamos em tecnologias que oferecem a melhor experiência para o usuário e facilidade de escala."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Sticky Header Reveal
      gsap.from(".sticky-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out"
      });

      // 2. Waterfall List
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3 // Delay to create hierarchy
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="faq"
      ref={containerRef} 
      className="py-32 px-6 bg-[#EBE9E4] dark:bg-[#0a0a0a] text-charcoal dark:text-cream transition-colors duration-500"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* COLUNA ESQUERDA (Sticky) */}
        <div className="lg:col-span-4 relative">
          <div className="sticky-content lg:sticky lg:top-32">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block opacity-60">Suporte</span>
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.85] mb-8">
              Dúvidas <br/> 
              <span className="italic opacity-50">Frequentes</span>
            </h2>
            <p className="text-sm max-w-xs mb-10 opacity-70 leading-relaxed">
              Encontre respostas para as perguntas mais comuns sobre nosso processo criativo e técnico.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 border border-charcoal/20 dark:border-cream/20 rounded-full px-8 py-4 text-xs uppercase tracking-widest hover:bg-charcoal hover:text-cream dark:hover:bg-cream dark:hover:text-charcoal transition-all group"
            >
              Falar com Especialista
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* ESPAÇO NEGATIVO (Gap) - Coluna 5 vazia no desktop */}
        <div className="hidden lg:block lg:col-span-1"></div>

        {/* COLUNA DIREITA (Lista) */}
        <div ref={listRef} className="lg:col-span-7">
          {FAQ_ITEMS.map((item, idx) => (
            <div 
              key={item.id} 
              className="faq-item border-b border-charcoal/10 dark:border-white/10 last:border-0"
            >
              <button 
                onClick={() => toggleItem(idx)}
                className="w-full py-10 flex justify-between items-center text-left group outline-none"
                aria-expanded={openIndex === idx}
              >
                <h3 className={`text-2xl md:text-3xl font-serif transition-all duration-500 flex items-start gap-4 ${
                  openIndex === idx ? 'translate-x-4 text-charcoal dark:text-cream' : 'text-charcoal/60 dark:text-cream/60'
                }`}>
                  <span className="text-xs font-sans tracking-widest mt-2 opacity-40">{(idx + 1).toString().padStart(2, '0')}</span>
                  {item.question}
                </h3>
                <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-500 ${openIndex === idx ? 'rotate-45' : ''}`}>
                   <Plus size={24} strokeWidth={1.5} />
                </div>
              </button>
              
              {/* Área de Resposta (Expandable) */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100 pb-10' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-12">
                  <p className="text-base md:text-lg opacity-70 max-w-2xl leading-relaxed font-sans">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
