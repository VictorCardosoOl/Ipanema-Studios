import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [counter, setCounter] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Bloqueia o scroll enquanto o preloader está ativo
    document.body.style.overflow = 'hidden';

    // Anima o contador de 0 a 100
    const countObj = { val: 0 };
    gsap.to(countObj, {
      val: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => setCounter(Math.floor(countObj.val)),
      onComplete: () => {
        // Fade out e slide up do preloader
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: () => {
            document.body.style.overflow = '';
            onComplete();
          }
        });
      }
    });
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center text-charcoal font-serif font-semibold tracking-tighter"
    >
      <div className="text-8xl md:text-[9rem] opacity-20">
        {counter}%
      </div>
      <div className="absolute bottom-12 text-sm font-sans tracking-widest uppercase font-bold opacity-50">
        Engenharia & Design
      </div>
    </div>
  );
}
