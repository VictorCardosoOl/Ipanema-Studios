import { motion } from 'motion/react';

export default function Values() {
  return (
    <section id="values" className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-charcoal text-cream">
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
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen">
        <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-70">
          <span>Agency Profile</span>
          <span>2026</span>
          <span>02 / 06</span>
        </div>
        
        <div className="flex-grow flex flex-col justify-center items-end text-right">
          <ul className="space-y-2 md:space-y-4" aria-label="Core Values List">
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
                <span className="text-xs md:text-sm align-top mr-2 md:mr-4 opacity-50 font-sans tracking-widest" aria-hidden="true">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                {keyword}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
