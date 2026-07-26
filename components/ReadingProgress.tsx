'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    // Coalesce to one measurement per frame. Reading scrollY and writing state
    // on every scroll event forced a layout read plus a React re-render per
    // event, which is well above one per frame during a fast scroll.
    let frame = 0;

    const measure = () => {
      frame = 0;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion(Math.min(100, (window.scrollY / scrollHeight) * 100));
      }
    };

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    measure();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-signal-blue to-signal-gold transition-all duration-150 ease-out"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}