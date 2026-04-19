import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Set initial
    setScrollY(window.scrollY);

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Update isAtTop state
      setIsAtTop(currentScrollY < 50);

      // Determine direction
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      // Only update state if direction changes and we've scrolled a bit (threshold to avoid jitter)
      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 5) {
        setScrollDirection(direction);
      }
      
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]);

  return { scrollDirection, isAtTop, scrollY };
}
