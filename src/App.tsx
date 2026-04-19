/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Mission from './components/Mission';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';

interface NavLink {
  label: string;
  ariaLabel: string;
  href: string;
}

interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

const NAVIGATION_CONFIG: readonly NavItem[] = [
  {
    label: "Trabalhos", 
    bgColor: "#111111",
    textColor: "#FFFFFF",
    links: [
      { label: "Projetos Selecionados", ariaLabel: "Projetos em Destaque", href: "#portfolio" },
      { label: "Serviços", ariaLabel: "Nossos Serviços", href: "#services" }
    ]
  },
  {
    label: "Sobre",
    bgColor: "#000000",
    textColor: "#FFFFFF",
    links: [
      { label: "Quem Somos", ariaLabel: "Quem Somos", href: "#mission" },
      { label: "Valores", ariaLabel: "Nossos Valores", href: "#values" }
    ]
  },
  {
    label: "Contato",
    bgColor: "#222222", 
    textColor: "#FFFFFF",
    links: [
      { label: "E-mail", ariaLabel: "Envie um e-mail", href: "mailto:hello@formosastudios.com" },
      { label: "Instagram", ariaLabel: "Siga-nos no Instagram", href: "#" }
    ]
  }
];

export default function App() {
  return (
    <main className="w-full min-h-screen bg-cream text-charcoal selection:bg-charcoal selection:text-cream">
      <SmoothScroll />
      <Navbar 
        items={NAVIGATION_CONFIG}
        logoText="Formosa"
      />
      <Hero />
      <Portfolio />
      <Process />
      <Mission />
      <Values />
      <Contact />
      <Footer />
    </main>
  );
}
