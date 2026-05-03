// ─────────────────────────────────────────────────────────────────────────────
// PORTFÓLIO DE PROJETOS — Victor Cardoso
// ─────────────────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technicalChallenge: string;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  image: string;
  year: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 'termique',
    title: 'Tērmique',
    description: 'Brand strategy, visual identity & digital experience for a premium wellness brand.',
    fullDescription:
      'Sistema de identidade visual completo para uma marca de bem-estar premium, abrangendo estratégia de marca, naming, tipografia editorial e a presença digital flagship.',
    technicalChallenge:
      'Implementar uma experiência de scroll horizontal com GSAP ScrollTrigger pinning preciso, garantindo fluidez em resoluções de 1080p a 4K sem causar layout shift perceptível.',
    techStack: ['React', 'TypeScript', 'GSAP', 'ScrollTrigger', 'TailwindCSS'],
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop',
    year: '2026',
    category: 'Branding & Web',
  },
  {
    id: 'lumina',
    title: 'Lumina',
    description: 'Real estate platform with immersive UI, 3D rendering integration & digital marketing.',
    fullDescription:
      'Plataforma imobiliária com UX imersiva, integração de renderizações 3D em tempo real e painel administrativo para gestão de unidades. Foco em conversão e autoridade de marca.',
    technicalChallenge:
      'Arquitetura de renderização otimizada para assets de alta resolução (renders 3D) com lazy loading progressivo e skeleton states, mantendo o Core Web Vitals (LCP < 2.5s) mesmo em conexões lentas.',
    techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'Node.js', 'Prisma'],
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop',
    year: '2025',
    category: 'Produto Web',
  },
  {
    id: 'aura',
    title: 'Aura',
    description: 'E-commerce experience, packaging design, brand identity & art direction.',
    fullDescription:
      'Experiência de e-commerce end-to-end para uma marca de cosméticos independente: identidade visual, design de embalagens e loja online com checkout otimizado.',
    technicalChallenge:
      'Construção de um carrinho de compras com estado global (Zustand) persistido no localStorage, integrado ao gateway de pagamento Stripe com webhooks para atualização de estoque em tempo real.',
    techStack: ['Next.js', 'Stripe', 'Zustand', 'Sanity CMS', 'TailwindCSS'],
    repoUrl: 'https://github.com/VictorCardosoOl',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1615397323758-1e0e4179323c?q=80&w=2000&auto=format&fit=crop',
    year: '2025',
    category: 'E-Commerce',
  },
  {
    id: 'vanguard',
    title: 'Vanguard',
    description: 'Mobile application, fintech UI, design system & interactive prototyping.',
    fullDescription:
      'Aplicativo fintech mobile-first para controle de gastos pessoais, com dashboard analítico, gráficos interativos e Design System próprio documentado em Storybook.',
    technicalChallenge:
      'Implementação de gráficos SVG animados sem dependências pesadas (Recharts customizado), com performance garantida via memoização granular (useMemo/React.memo) e virtualization de listas longas.',
    techStack: ['React', 'TypeScript', 'Recharts', 'Storybook', 'Radix UI'],
    repoUrl: 'https://github.com/VictorCardosoOl',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    year: '2024',
    category: 'App & Design System',
  },
];
