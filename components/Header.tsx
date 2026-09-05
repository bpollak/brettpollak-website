'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const primaryLinks = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Projects' },
  { href: '/tritongpt', label: 'TritonAI' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/media', label: 'Media' },
  { href: '/contact', label: 'Contact' },
];
const noteLinks = [
  { href: '/now', label: 'Current focus' },
  { href: '/ai-agent-architecture', label: 'AI architecture' },
  { href: '/ai-digest', label: 'AI Digest' },
  { href: '/ucsd-ai-news', label: 'UCSD AI Weekly' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/linkedin', label: 'LinkedIn' },
];

export default function Header() {
  const pathname = usePathname().replace(/\/$/, '') || '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const notesRef = useRef<HTMLDivElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const notesButton = useRef<HTMLButtonElement>(null);
  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const close = () => { setMobileOpen(false); setNotesOpen(false); };

  useEffect(() => {
    function keydown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      if (mobileOpen) { setMobileOpen(false); mobileButton.current?.focus(); }
      if (notesOpen) { setNotesOpen(false); notesButton.current?.focus(); }
    }
    function outside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setMobileOpen(false);
      if (!notesRef.current?.contains(event.target as Node)) setNotesOpen(false);
    }
    function breakpoint() { setMobileOpen(false); setNotesOpen(false); }
    const desktop = matchMedia('(min-width: 1024px)');
    document.addEventListener('keydown', keydown);
    document.addEventListener('pointerdown', outside);
    desktop.addEventListener('change', breakpoint);
    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('pointerdown', outside);
      desktop.removeEventListener('change', breakpoint);
    };
  }, [mobileOpen, notesOpen]);

  // Back/forward navigation should close a disclosure just as a link click does.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMobileOpen(false); setNotesOpen(false); }, [pathname]);

  const linkClass = (href: string) => `rounded-sm px-3 py-3 font-medium transition-colors ${active(href) ? 'text-ink bg-wash-green' : 'text-body hover:bg-wash-green hover:text-ink'}`;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-line bg-[#f7f9f5]/95 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto max-w-7xl px-4 sm:px-6">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white">Skip to main content</a>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Link href="/" onClick={close} className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap font-[family-name:var(--font-display)] text-xl font-semibold text-ink sm:text-2xl">
            <span aria-hidden="true" className="flex h-6 w-[5px] flex-col overflow-hidden rounded-full">
              <span className="flex-1 bg-[#b8503f]" /><span className="flex-1 bg-[#c97712]" /><span className="flex-1 bg-[#366c5a]" />
            </span>
            Brett Pollak
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            {primaryLinks.map(link => <Link key={link.href} href={link.href} onClick={close} aria-current={active(link.href) ? 'page' : undefined} className={linkClass(link.href)}>{link.label}</Link>)}
            <div ref={notesRef} className="relative" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setNotesOpen(false); }}>
              <button ref={notesButton} type="button" aria-expanded={notesOpen} aria-controls="notes-navigation" onClick={() => setNotesOpen(!notesOpen)} className={linkClass('/notes')}>
                Notes <span aria-hidden="true">{notesOpen ? '−' : '+'}</span>
              </button>
              {notesOpen && <div id="notes-navigation" className="absolute right-0 mt-2 w-56 border border-line bg-paper-strong p-2 shadow-lg">
                {noteLinks.map(link => <Link key={link.href} href={link.href} onClick={close} aria-current={active(link.href) ? 'page' : undefined} className={`block ${linkClass(link.href)}`}>{link.label}</Link>)}
              </div>}
            </div>
          </div>
          <button ref={mobileButton} type="button" className="inline-flex min-h-11 items-center gap-2 rounded-sm px-3 text-sm font-semibold hover:bg-wash-green lg:hidden" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? 'Close menu' : 'Menu'} <span aria-hidden="true">{mobileOpen ? '×' : '☰'}</span>
          </button>
        </div>
        {mobileOpen && <div id="mobile-navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-line py-3 lg:hidden">
          {primaryLinks.map(link => <Link key={link.href} href={link.href} onClick={close} aria-current={active(link.href) ? 'page' : undefined} className={`block ${linkClass(link.href)}`}>{link.label}</Link>)}
          <p className="rule-label px-3 pt-5 pb-2">Notes</p>
          {noteLinks.map(link => <Link key={link.href} href={link.href} onClick={close} aria-current={active(link.href) ? 'page' : undefined} className={`block ${linkClass(link.href)}`}>{link.label}</Link>)}
        </div>}
      </nav>
    </header>
  );
}
