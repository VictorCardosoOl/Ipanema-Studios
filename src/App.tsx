/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Values from './components/Values';
import Mission from './components/Mission';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import FAQSection from './components/FAQSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CardNav from './components/CardNav';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  const navItems = [
    {
      label: "Sobre",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Nossa História", ariaLabel: "Sobre a Empresa", href: "#about" },
        { label: "Missão", ariaLabel: "Nossa Missão", href: "#mission" },
        { label: "Valores", ariaLabel: "Nossos Valores", href: "#values" }
      ]
    },
    {
      label: "Projetos", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Destaques", ariaLabel: "Projetos em Destaque", href: "#portfolio" },
        { label: "Processo", ariaLabel: "Nosso Processo", href: "#process" }
      ]
    },
    {
      label: "Contato",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "E-mail", ariaLabel: "Envie um e-mail", href: "mailto:hello@ipanemastudios.com" },
        { label: "FAQ", ariaLabel: "Dúvidas Frequentes", href: "#faq" },
        { label: "Instagram", ariaLabel: "Siga-nos no Instagram", href: "#" }
      ]
    }
  ];

  return (
    <main className="w-full min-h-screen bg-cream text-charcoal selection:bg-charcoal selection:text-cream">
      <SmoothScroll />
      <CardNav 
        items={navItems}
        logoText="Ipanema"
        baseColor="#F2EFE9"
        menuColor="#3A3532"
        buttonBgColor="#3A3532"
        buttonTextColor="#F2EFE9"
      />
      <Hero />
      <Values />
      <Mission />
      <Process />
      <Portfolio />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
}
