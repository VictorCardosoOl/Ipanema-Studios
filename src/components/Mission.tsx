import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from './ui/Image';
import { Button } from './ui/Button';
import { Heading } from './ui/Heading';

const posts = [
  {
    date: "JANEIRO 06, 2026",
    title: "Isaac Turner — Acessibilidade na engenharia de design",
    description: "Por que o design inclusivo é a pedra angular de produtos digitais de sucesso.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
  },
  {
    date: "JANEIRO 05, 2026",
    title: "Isaac Turner — Otimizando UI/UX para performance",
    description: "Técnicas para projetar interfaces que são rápidas, responsivas e amigáveis.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    date: "JANEIRO 03, 2026",
    title: "Emma Carter — A arte de equilibrar beleza e função",
    description: "Como abordar a engenharia de design para entregar produtos visualmente impressionantes e funcionais.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
  },
  {
    date: "JANEIRO 02, 2026",
    title: "David Lee — Criando experiências com precisão",
    description: "Explorando a interseção da engenharia e design para criar interfaces de usuário intuitivas.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mission-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mission" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 3xl:px-24 bg-cream text-charcoal">
      <div className="max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
        
        {/* Top Text */}
        <div className="max-w-5xl mb-24 md:mb-32">
          <Heading size="h2" weight="light" className="mission-reveal">
            Bem-vindo ao Estúdio Formosa, onde a criatividade encontra a engenharia. Junte-se a nós em uma jornada de design inovador e desenvolvimento de ponta que explora os limites das experiências digitais —
          </Heading>
        </div>

        {/* Section Header */}
        <div className="mission-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6">
          <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-charcoal">
            Nossos Artigos Mais Populares
          </h3>
          <Button variant="default" size="sm" className="self-start sm:self-auto">
            Ler todos
          </Button>
        </div>

        {/* Divider */}
        <hr className="mission-reveal border-charcoal/20 mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="mission-reveal flex flex-col group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm p-2 -m-2">
              <div className="w-full aspect-square overflow-hidden mb-6 bg-charcoal/5">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-charcoal/60 font-bold mb-3">
                  {post.date}
                </span>
                <h4 className="text-sm md:text-base font-bold font-sans text-charcoal mb-2 leading-snug">
                  {post.title}
                </h4>
                <p className="text-sm font-sans text-charcoal/70 leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
