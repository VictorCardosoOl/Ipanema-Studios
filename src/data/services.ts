// ─────────────────────────────────────────────────────────────────────────────
// ESPECIALIDADES TÉCNICAS — Victor Cardoso
// Fonte de verdade consumida pelo componente Services.tsx
// ─────────────────────────────────────────────────────────────────────────────

export interface Specialty {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  deliverables: string[];
}

export const specialties: Specialty[] = [
  {
    id: '01',
    title: 'Frontend Avançado',
    description:
      'Construção de interfaces web interativas e de alta performance, com animações complexas, scroll cinematográfico e experiências de usuário que impressionam. Cada detalhe é controlado — do primeiro frame ao último pixel.',
    technologies: ['React', 'TypeScript', 'GSAP', 'Lenis Scroll'],
    deliverables: ['SPA / SSR', 'Animações Scroll-Triggered', 'Componentes Acessíveis', 'Design System'],
  },
  {
    id: '02',
    title: 'Soluções Web para Negócios',
    description:
      'Landing Pages e sistemas web otimizados para SEO e conversão. Desenvolvimento com foco em alavancar o negócio de pequenas empresas — rápido, responsivo e construído para rankear no Google.',
    technologies: ['Next.js', 'Node.js', 'Vite', 'TailwindCSS'],
    deliverables: ['Landing Pages', 'Sites Institucionais', 'SEO Técnico', 'Deploy & Hospedagem'],
  },
  {
    id: '03',
    title: 'Design de Sistemas',
    description:
      'Da identidade visual ao código: criação de Design Systems coerentes, componentizados e escaláveis. Transformo arquivos Figma em interfaces React robustas, mantendo fidelidade ao design e consistência entre telas.',
    technologies: ['Figma', 'Storybook', 'Radix UI', 'CVA'],
    deliverables: ['Figma-to-Code', 'Biblioteca de Componentes', 'Tokens de Design', 'Documentação'],
  },
  {
    id: '04',
    title: 'Integrações & Infraestrutura',
    description:
      'Conectar o front-end ao mundo real — APIs REST, autenticação, formulários inteligentes e deploy automatizado. Entrego a solução completa, do repositório à produção, com CI/CD e boas práticas de segurança.',
    technologies: ['Node.js', 'REST APIs', 'Vercel / Railway', 'GitHub Actions'],
    deliverables: ['Integração de APIs', 'Autenticação (Auth.js)', 'CI/CD Pipeline', 'Monitoramento'],
  },
];
