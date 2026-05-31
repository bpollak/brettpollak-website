'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseInViewOptions {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

/**
 * SSR-safe IntersectionObserver hook. Returns a ref to attach and whether the
 * element has entered the viewport. Under reduced-motion (or when the API is
 * unavailable) it reports `inView` immediately so enhancements settle to their
 * final state with no animation.
 */
export function useInView<T extends Element>(
  options: UseInViewOptions = {},
): { ref: RefObject<T | null>; inView: boolean } {
  const { once = true, threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}
