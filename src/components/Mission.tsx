import { motion } from 'motion/react';

export default function Mission() {
  return (
    <section id="mission" className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-cream text-charcoal">
      {/* Left Panel */}
      <div className="p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen">
        <div className="flex justify-between text-sm">
          <h2 className="font-medium tracking-tight">Ipanema Studios</h2>
          <span className="opacity-70">Nossa Missão</span>
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
                <span className="absolute -left-4 top-0 text-charcoal/50" aria-hidden="true">•</span>
                At Ipanema Studios, we don't just build websites; we craft digital experiences that resonate. Our mission is to bridge the gap between aesthetic elegance and robust engineering, delivering platforms that not only look stunning but perform flawlessly under pressure.
              </p>
              <p className="relative">
                <span className="absolute -left-4 top-0 text-charcoal/50" aria-hidden="true">•</span>
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
                <span className="absolute -left-4 top-0 text-charcoal/50" aria-hidden="true">•</span>
                Our approach is holistic. We don't just look at the immediate requirements; we anticipate future needs, ensuring that the solutions we build today are scalable for tomorrow's challenges.
              </p>
              <p className="relative">
                <span className="absolute -left-4 top-0 text-charcoal/50" aria-hidden="true">•</span>
                We are partners in your digital journey, committed to transparency, excellence, and the relentless pursuit of perfection in every project we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen">
        <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-70">
          <span>Perfil da Agência</span>
          <span>2026</span>
          <span>03 / 06</span>
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
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
