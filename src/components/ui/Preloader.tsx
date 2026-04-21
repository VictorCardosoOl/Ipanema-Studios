import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [counter, setCounter] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = 'hidden'; // Evita scroll inicial

    const countObj = { val: 0 };
    gsap.to(countObj, {
      val: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => setCounter(Math.floor(countObj.val)),
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          opacity: 0,
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => {
            body.style.overflow = '';
            onComplete();
          }
        });
      }
    });

    return () => {
      body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[999] bg-cream flex flex-col items-center justify-center text-charcoal font-serif font-semibold tracking-tighter"
      aria-hidden="true"
    >
      <div className="text-8xl md:text-[9rem] opacity-20">
        {counter}%
      </div>
      <div className="absolute bottom-12 text-sm font-sans tracking-widest uppercase font-bold opacity-50">
        Formosa Studios
      </div>
    </div>
  );
}
