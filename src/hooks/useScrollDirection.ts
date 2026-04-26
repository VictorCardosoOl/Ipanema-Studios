import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | null;

interface ScrollState {
  scrollDirection: ScrollDirection;
  isAtTop: boolean;
  scrollY: number;
}

export function useScrollDirection(): ScrollState {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    setScrollY(window.scrollY);

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsAtTop(currentScrollY < 50);

      const direction: ScrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 5) {
        setScrollDirection(direction);
      }
      
      lastScrollY = Math.max(currentScrollY, 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]);

  return { scrollDirection, isAtTop, scrollY };
}
