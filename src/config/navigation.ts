export interface NavLink {
  label: string;
  ariaLabel: string;
  href: string;
}

export interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

export const NAVIGATION_CONFIG: readonly NavItem[] = [
  {
    label: "Casos de Estudo", 
    bgColor: "#111111",
    textColor: "#FFFFFF",
    links: [
      { label: "Projetos Selecionados", ariaLabel: "Projetos em Destaque", href: "#portfolio" }
    ]
  },
  {
    label: "Engenharia & Design",
    bgColor: "#000000",
    textColor: "#FFFFFF",
    links: [
      { label: "Serviços", ariaLabel: "Nossos Serviços", href: "#services" },
      { label: "Quem Somos", ariaLabel: "Quem Somos", href: "#aboutme" },
      { label: "Valores", ariaLabel: "Nossos Valores", href: "#values" }
    ]
  },
  {
    label: "Iniciar Projeto",
    bgColor: "#222222", 
    textColor: "#FFFFFF",
    links: [
      { label: "E-mail", ariaLabel: "Envie um e-mail", href: "mailto:hello@victorcardoso.com" },
      { label: "Agendar Diagnóstico", ariaLabel: "Agendar Reunião", href: "#contact" }
    ]
  }
];
