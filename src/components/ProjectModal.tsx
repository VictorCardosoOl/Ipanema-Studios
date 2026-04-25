import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import Lenis from 'lenis';
import { X } from 'lucide-react';
import Image from './ui/Image';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const scopedLenisRef = useRef<Lenis | null>(null);

  // Lógica de Scroll Isolado (Lenis)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Trava body
      
      // Inicia Lenis apenas no Modal após mount
      const timeout = setTimeout(() => {
        if (modalContainerRef.current && modalContentRef.current) {
            const scopedLenis = new Lenis({
                wrapper: modalContainerRef.current,
                content: modalContentRef.current,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease Out Quart
                orientation: 'vertical',
                touchMultiplier: 2,
            });
            scopedLenisRef.current = scopedLenis;
            
            function raf(time: number) {
                scopedLenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }
      }, 300); // Delay para permitir animação de entrada

      return () => {
         clearTimeout(timeout);
         document.body.style.overflow = '';
         scopedLenisRef.current?.destroy();
      };
    } else {
      document.body.style.overflow = '';
      scopedLenisRef.current?.destroy();
    }
  }, [isOpen]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            onClick={onClose} 
            className="fixed inset-0 bg-black/90 z-[9998]" 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            exit={{opacity:0}} 
          />
          
          <motion.div
            layoutId={`modal-container-${project.id || project.title}`}
            initial={{ y: "100%" }}
            animate={{ y: "2%", transition: { type: "spring", damping: 30, stiffness: 300 } }}
            exit={{ y: "100%", transition: { duration: 0.4, ease: "easeInOut" } }} // Tween na saída
            className="fixed inset-0 z-[9999] bg-[#0a0a0a] text-[#f5f5f0] rounded-t-[2rem] h-[98vh] overflow-hidden shadow-2xl"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) onClose();
            }}
          >
            {/* Container de Scroll para o Lenis */}
            <div ref={modalContainerRef} className="h-full w-full overflow-y-auto hidden-scrollbar">
               <div ref={modalContentRef} className="pb-32">
                  
                  {/* Hero Image do Modal com layoutId */}
                  <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
                     <motion.div layoutId={`image-${project.id || project.title}`} className="absolute inset-0 w-full h-full">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                     </motion.div>
                     <div className="absolute inset-0 bg-black/40" />
                  </div>

                  {/* Detalhes (Reveal Animado) */}
                  <div className="container mx-auto px-6 md:px-12 lg:px-24 -mt-20 md:-mt-32 relative z-10">
                     <motion.h2 
                       layoutId={`title-${project.id || project.title}`} 
                       className="text-6xl sm:text-7xl md:text-[9rem] font-serif font-bold uppercase leading-none tracking-tighter"
                     >
                        {project.title}
                     </motion.h2>

                     <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-12"
                     >
                        <div className="md:col-span-4 flex flex-col gap-8 border-t border-white/10 pt-8">
                           <div>
                              <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Cliente</h4>
                              <p className="text-lg font-medium">{project.title} Corp</p>
                           </div>
                           <div>
                              <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Serviços</h4>
                              <p className="text-lg font-medium">Design System, UX/UI</p>
                           </div>
                           <div>
                              <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Ano</h4>
                              <p className="text-lg font-medium">2026</p>
                           </div>
                        </div>
                        <div className="md:col-span-8 border-t border-white/10 pt-8">
                           <p className="text-xl md:text-3xl font-light leading-relaxed opacity-90 mb-8">
                              {project.description}
                           </p>
                           <p className="text-lg opacity-70 leading-relaxed font-light">
                              Neste projeto, o desafio foi traduzir a complexidade da operação em uma interface brutalmente minimalista e eficiente. Criamos uma arquitetura de navegação inovadora, aliada a um sistema de design que prioriza o espaço negativo e o contraste profundo.
                           </p>
                        </div>
                     </motion.div>
                  </div>

               </div>
            </div>
            
            {/* Botão Fechar Flutuante */}
            <button 
               onClick={onClose} 
               className="absolute top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md"
            >
               <X size={20} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
