import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-cream text-charcoal py-24 px-8 md:px-12 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left: Copy */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight mb-6">Let's build<br/>something<br/>exceptional.</h2>
            <p className="text-sm opacity-80 max-w-sm leading-relaxed">
              Whether you're launching a new brand or reimagining an existing platform, our team is ready to bring your vision to life with precision and elegance.
            </p>
          </div>
          
          <div className="mt-16 md:mt-0">
            <div className="text-[10px] uppercase tracking-widest opacity-50 mb-2">Contact</div>
            <a href="mailto:hello@ipanemastudios.com" className="text-lg hover:opacity-70 transition-opacity">hello@ipanemastudios.com</a>
          </div>
        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-charcoal text-cream p-8 md:p-12"
        >
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[10px] uppercase tracking-widest opacity-70">Name</label>
              <input type="text" id="name" className="bg-transparent border-b border-cream/30 pb-2 focus:outline-none focus:border-cream transition-colors text-sm" placeholder="Jane Doe" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[10px] uppercase tracking-widest opacity-70">Email</label>
              <input type="email" id="email" className="bg-transparent border-b border-cream/30 pb-2 focus:outline-none focus:border-cream transition-colors text-sm" placeholder="jane@example.com" required />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-[10px] uppercase tracking-widest opacity-70">Budget</label>
              <select id="budget" className="bg-transparent border-b border-cream/30 pb-2 focus:outline-none focus:border-cream transition-colors text-sm appearance-none rounded-none">
                <option value="" className="bg-charcoal text-cream">Select a range</option>
                <option value="10k-25k" className="bg-charcoal text-cream">$10k - $25k</option>
                <option value="25k-50k" className="bg-charcoal text-cream">$25k - $50k</option>
                <option value="50k+" className="bg-charcoal text-cream">$50k+</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="text-[10px] uppercase tracking-widest opacity-70">Project Details</label>
              <textarea id="details" rows={3} className="bg-transparent border-b border-cream/30 pb-2 focus:outline-none focus:border-cream transition-colors text-sm resize-none" placeholder="Tell us about your vision..." required></textarea>
            </div>

            <button type="submit" className="mt-4 border border-cream rounded-full px-8 py-3 text-sm hover:bg-cream hover:text-charcoal transition-colors self-start">
              Submit Inquiry
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
