/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-cream text-charcoal selection:bg-charcoal selection:text-cream">
      
      {/* Section 1: Introduction */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left Panel - Cream */}
        <div className="bg-cream p-8 md:p-12 flex flex-col justify-between min-h-[50vh] md:min-h-screen">
          <header>
            <h1 className="text-xl font-medium tracking-tight">Ipanema Studios</h1>
          </header>
          
          <div className="w-full max-w-md mt-24 md:mt-0">
            <ul className="text-sm font-medium tracking-wide">
              {[
                { name: 'about', page: '03' },
                { name: 'services', page: '09' },
                { name: 'portfolio', page: '16' },
                { name: 'approach', page: '19' },
                { name: 'team', page: '22' },
                { name: 'contact', page: '24' },
              ].map((item, i) => (
                <li key={i} className="flex justify-between py-3 border-b border-charcoal/30 last:border-0">
                  <span>{item.name}</span>
                  <span>{item.page}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Panel - Charcoal */}
        <div className="bg-charcoal text-cream p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen relative">
          <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-70">
            <span>Agency Profile</span>
            <span>2026</span>
            <span>01 / 03</span>
          </div>
          
          <div className="flex-grow flex items-center justify-center p-8 md:p-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm aspect-[3/4]"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                alt="Minimalist Architecture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Overlapping smaller image for editorial feel */}
              <div className="absolute -bottom-12 -left-12 w-2/3 aspect-square border-4 border-charcoal">
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" 
                  alt="Design Details" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Keywords */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-charcoal text-cream">
        {/* Left Panel */}
        <div className="p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen">
          <div className="flex justify-between text-sm">
            <h2 className="font-medium tracking-tight">Ipanema Studios</h2>
            <span className="opacity-70">Core Values</span>
          </div>
          
          <div className="flex-grow flex items-center justify-center p-8 md:p-16">
             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full max-w-sm aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop" 
                alt="Team working" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen">
          <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-70">
            <span>Agency Profile</span>
            <span>2026</span>
            <span>02 / 03</span>
          </div>
          
          <div className="flex-grow flex flex-col justify-center items-end text-right">
            <ul className="space-y-2 md:space-y-4">
              {[
                'Strategy', 'Engineering', 'Design', 'Performance', 
                'Scalability', 'Innovation', 'Elegance', 'Precision', 
                'Reliability', 'Vision', 'Impact'
              ].map((keyword, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream/90 hover:text-cream transition-colors cursor-default"
                >
                  <span className="text-xs md:text-sm align-top mr-2 md:mr-4 opacity-50 font-sans tracking-widest">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  {keyword}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Mission */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-cream text-charcoal">
        {/* Left Panel */}
        <div className="p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen">
          <div className="flex justify-between text-sm">
            <h2 className="font-medium tracking-tight">Ipanema Studios</h2>
            <span className="opacity-70">Our Mission</span>
          </div>
          
          <div className="flex-grow flex flex-col justify-end pb-12 md:pb-24 max-w-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-sm leading-relaxed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="mb-6 relative">
                  <span className="absolute -left-4 top-0 text-charcoal/50">•</span>
                  At Ipanema Studios, we don't just build websites; we craft digital experiences that resonate. Our mission is to bridge the gap between aesthetic elegance and robust engineering, delivering platforms that not only look stunning but perform flawlessly under pressure.
                </p>
                <p className="relative">
                  <span className="absolute -left-4 top-0 text-charcoal/50">•</span>
                  We believe that every pixel matters and every line of code should serve a purpose. By combining strategic thinking with cutting-edge technology, we empower brands to establish a commanding presence in the digital landscape.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="mb-6 relative">
                  <span className="absolute -left-4 top-0 text-charcoal/50">•</span>
                  Our approach is holistic. We don't just look at the immediate requirements; we anticipate future needs, ensuring that the solutions we build today are scalable for tomorrow's challenges.
                </p>
                <p className="relative">
                  <span className="absolute -left-4 top-0 text-charcoal/50">•</span>
                  We are partners in your digital journey, committed to transparency, excellence, and the relentless pursuit of perfection in every project we undertake.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen">
          <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-70">
            <span>Agency Profile</span>
            <span>2026</span>
            <span>03 / 03</span>
          </div>
          
          <div className="flex-grow flex items-center justify-center p-8 md:p-16">
            <motion.div 
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-md aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1000&auto=format&fit=crop" 
                alt="Abstract minimal" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Process */}
      <section className="min-h-screen flex flex-col md:flex-row bg-sage text-charcoal border-t border-charcoal/20">
        {/* Image Column */}
        <div className="w-full md:w-[25%] h-[40vh] md:h-screen">
          <img 
            src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop" 
            alt="Studio moodboard" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Vertical Title Column */}
        <div className="w-full md:w-[15%] border-b md:border-b-0 md:border-r border-charcoal/20 flex items-center justify-center py-12 md:py-0">
          <h2 
            className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-widest uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Process
          </h2>
        </div>

        {/* Content Column */}
        <div className="w-full md:w-[60%] flex flex-col min-h-[50vh] md:min-h-screen">
          <div className="flex justify-between p-8 md:p-12 text-[10px] uppercase tracking-widest opacity-70">
            <span>Studio Insider</span>
            <span>Page 04</span>
          </div>
          
          <div className="flex-grow flex items-end p-8 md:p-12 pb-12 md:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <h3 className="text-xs font-bold tracking-widest uppercase mb-4">01 / Discovery & Vision</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  We start by understanding your brand's core identity, target audience, and primary objectives. This deep dive ensures our strategic direction aligns perfectly with your business goals.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
                <h3 className="text-xs font-bold tracking-widest uppercase mb-4">02 / Technical Scoping</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  Next, we map out the functional requirements. From CMS preferences and third-party integrations to performance benchmarks, we define the technical architecture that will power your platform.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                <h3 className="text-xs font-bold tracking-widest uppercase mb-4">03 / Aesthetic Direction</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  We curate moodboards and visual references to establish the look and feel. This collaborative phase helps us lock in the typography, color palettes, and overall editorial vibe before design begins.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
                <h3 className="text-xs font-bold tracking-widest uppercase mb-4">04 / Roadmap & Proposal</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  Finally, we synthesize our findings into a comprehensive project roadmap. You'll receive a detailed timeline, clear deliverables, and a structured plan outlining exactly how we will bring your vision to life.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
