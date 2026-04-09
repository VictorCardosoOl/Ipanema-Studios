import { motion } from 'motion/react';

export default function Process() {
  return (
    <section id="process" className="min-h-screen grid grid-cols-1 md:grid-cols-12 bg-sage text-charcoal border-t border-charcoal/20">
      {/* Image Column (Left) */}
      <div className="md:col-span-4 relative h-[50vh] md:h-screen bg-[#dcdcd2] overflow-hidden">
        {/* Top Left Label */}
        <div className="absolute top-8 left-8 z-20 text-[9px] uppercase tracking-widest font-medium opacity-80">
          Studio Insider
        </div>
        
        {/* Moodboard Composition */}
        <div className="absolute inset-0 p-8 pt-24 flex items-center justify-center" aria-hidden="true">
           {/* Background texture */}
           <img 
              src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply"
              referrerPolicy="no-referrer"
              loading="lazy"
           />
           
           {/* Main framed image */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="relative w-[80%] aspect-[3/4] bg-white p-4 shadow-xl z-10"
           >
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" 
                alt="" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
           </motion.div>

           {/* A&C Card */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="absolute left-4 top-1/3 bg-[#f4f4f0] p-4 shadow-lg z-20 w-32 aspect-square flex flex-col"
           >
              <span className="font-serif text-xl font-bold">A&C</span>
              <div className="mt-auto border-t border-charcoal/20 pt-2 text-[8px] uppercase tracking-wider">
                Design Studio
              </div>
           </motion.div>
        </div>
      </div>

      {/* Vertical Title Column (Middle) */}
      <div className="md:col-span-2 border-y md:border-y-0 md:border-r border-charcoal/20 flex items-center justify-center py-16 md:py-0 bg-sage">
        <h2 
          className="text-7xl md:text-8xl lg:text-[10rem] font-sans font-medium tracking-[0.15em] uppercase text-charcoal"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Process
        </h2>
      </div>

      {/* Content Column (Right) */}
      <div className="md:col-span-6 flex flex-col min-h-[50vh] md:min-h-screen bg-sage relative">
        {/* Top Right Label */}
        <div className="absolute top-8 right-8 text-[9px] uppercase tracking-widest font-medium opacity-80">
          Page 04 / 06
        </div>
        
        {/* Text Grid at the bottom */}
        <div className="flex-grow flex items-end p-8 md:p-16 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full max-w-3xl">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4">01 / Discovery & Vision</h3>
              <p className="text-xs leading-relaxed opacity-80 text-justify">
                We start by understanding your brand's core identity, target audience, and primary objectives. This deep dive ensures our strategic direction aligns perfectly with your business goals.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4">02 / Technical Scoping</h3>
              <p className="text-xs leading-relaxed opacity-80 text-justify">
                Next, we map out the functional requirements. From CMS preferences and third-party integrations to performance benchmarks, we define the technical architecture that will power your platform.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4">03 / Aesthetic Direction</h3>
              <p className="text-xs leading-relaxed opacity-80 text-justify">
                We curate moodboards and visual references to establish the look and feel. This collaborative phase helps us lock in the typography, color palettes, and overall editorial vibe before design begins.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4">04 / Roadmap & Proposal</h3>
              <p className="text-xs leading-relaxed opacity-80 text-justify">
                Finally, we synthesize our findings into a comprehensive project roadmap. You'll receive a detailed timeline, clear deliverables, and a structured plan outlining exactly how we will bring your vision to life.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
