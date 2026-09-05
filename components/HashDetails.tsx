'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/** Keep a collapsed reference section reachable by its permanent anchor. */
export default function HashDetails({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    function revealTarget() {
      let hash: string;
      try { hash = decodeURIComponent(location.hash.slice(1)); } catch { return; }
      const target = document.getElementById(hash);
      if (target && ref.current?.contains(target)) {
        ref.current.open = true;
        requestAnimationFrame(() => target.scrollIntoView());
      }
    }
    revealTarget();
    window.addEventListener('hashchange', revealTarget);
    return () => window.removeEventListener('hashchange', revealTarget);
  }, []);
  return <details ref={ref} id={id} className="border border-line bg-paper-strong p-5 md:p-8">
    <summary className="cursor-pointer text-lg font-semibold text-signal-blue">{label}</summary>
    <div className="mt-6">{children}</div>
  </details>;
}
