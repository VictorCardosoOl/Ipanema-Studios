/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroPortfolio from './components/HeroPortfolio';
import Process from './components/Process';
import AboutMe from './components/AboutMe';
import Values from './components/Values';
import Contact from './components/Contact';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import { Preloader } from './components/ui/Preloader';
import { motion, useScroll } from 'motion/react';
import { useState } from 'react';

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
      { label: "E-mail", ariaLabel: "Envie um e-mail", href: "mailto:hello@formosastudios.com" },
      { label: "Agendar Diagnóstico", ariaLabel: "Agendar Reunião", href: "#contact" }
    ]
  }
];

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <main className="w-full min-h-screen bg-cream text-charcoal selection:bg-charcoal selection:text-cream">
      {/* Wayfinding: Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-charcoal z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      <SmoothScroll />
      <Navbar 
        items={NAVIGATION_CONFIG}
        logoText="Formosa"
      />
      
      {/* Esconde o conteúdo até o preloader acabar para não vazar layout */}
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 h-[100vh] overflow-hidden'}`}>
        <HeroPortfolio />
        <Process />
        <AboutMe />
        <Values />
        <FAQSection />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
