'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

/**
 * Wraps a block so it fades/rises into view as it enters the viewport.
 * Content is rendered visible by default and only "armed" (hidden, ready to
 * animate) once JS runs — so no-JS and reduced-motion users never lose content.
 */
export default function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      // No observation possible / motion suppressed: leave content fully visible.
      setShown(true);
      return;
    }
    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    // Arm the hidden state only now that JS is running (no-JS users see content).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setArmed(true);
    if (alreadyInView) {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [armed ? 'reveal' : '', shown ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={classes || undefined}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
