/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Values from './components/Values';
import Mission from './components/Mission';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import FAQSection from './components/FAQSection';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="w-full min-h-screen bg-cream text-charcoal selection:bg-charcoal selection:text-cream">
      <Header />
      <Hero />
      <Values />
      <Mission />
      <Process />
      <Portfolio />
      <FAQSection />
      <Contact />
    </main>
  );
}
