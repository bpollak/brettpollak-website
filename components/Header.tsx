'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

// Five destinations up top; everything published lives under Writing. Contact
// is the one call to action, so it renders as a button rather than a link.
const primaryLinks = [
  { href: '/products', label: 'Projects' },
  { href: '/tritongpt', label: 'TritonAI' },
];
const secondaryLinks = [
  { href: '/speaking', label: 'Speaking' },
  { href: '/about', label: 'About' },
];
const writingLinks = [
  { href: '/ai-digest', label: 'The AI Digest' },
  { href: '/ucsd-ai-news', label: 'UCSD AI Weekly' },
  { href: '/media', label: 'Media & press' },
  { href: '/ai-agent-architecture', label: 'AI architecture' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/linkedin', label: 'LinkedIn' },
  { href: '/now', label: 'Current focus' },
];

export default function Header() {
  const pathname = usePathname().replace(/\/$/, '') || '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [writingOpen, setWritingOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const writingRef = useRef<HTMLDivElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const writingButton = useRef<HTMLButtonElement>(null);
  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const writingActive = writingLinks.some(link => active(link.href));
  const close = () => { setMobileOpen(false); setWritingOpen(false); };

  useEffect(() => {
    function keydown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      if (mobileOpen) { setMobileOpen(false); mobileButton.current?.focus(); }
      if (writingOpen) { setWritingOpen(false); writingButton.current?.focus(); }
    }
    function outside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setMobileOpen(false);
      if (!writingRef.current?.contains(event.target as Node)) setWritingOpen(false);
    }
    function breakpoint() { setMobileOpen(false); setWritingOpen(false); }
    const desktop = matchMedia('(min-width: 1024px)');
    document.addEventListener('keydown', keydown);
    document.addEventListener('pointerdown', outside);
    desktop.addEventListener('change', breakpoint);
    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('pointerdown', outside);
      desktop.removeEventListener('change', breakpoint);
    };
  }, [mobileOpen, writingOpen]);

  // Back/forward navigation should close a disclosure just as a link click does.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMobileOpen(false); setWritingOpen(false); }, [pathname]);

  // The current section gets an ink label and a blue underline instead of a tint.
  const linkClass = (on: boolean) => `inline-flex min-h-11 items-center px-3.5 text-[15px] font-medium transition-colors ${on ? 'text-ink shadow-[inset_0_-2px_0_var(--signal-blue)]' : 'text-body hover:text-ink'}`;
  const menuLinkClass = (href: string) => `block rounded-sm px-3 py-2.5 text-[15px] transition-colors ${active(href) ? 'bg-wash-blue font-semibold text-ink' : 'text-body hover:bg-wash-blue hover:text-ink'}`;
  const navLink = (link: { href: string; label: string }) => (
    <Link key={link.href} href={link.href} onClick={close} aria-current={active(link.href) ? 'page' : undefined} className={linkClass(active(link.href))}>{link.label}</Link>
  );
  const mobileLink = (link: { href: string; label: string }) => (
    <Link key={link.href} href={link.href} onClick={close} aria-current={active(link.href) ? 'page' : undefined} className={menuLinkClass(link.href)}>{link.label}</Link>
  );

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-line bg-[#f7f9f5]/95 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto max-w-7xl px-4 sm:px-6">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white">Skip to main content</a>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.75rem]">
          <Link href="/" onClick={close} className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap font-[family-name:var(--font-display)] text-xl font-medium text-ink sm:text-2xl">
            <span aria-hidden="true" className="flex h-6 w-[5px] flex-col overflow-hidden rounded-full">
              <span className="flex-1 bg-signal-blue" /><span className="flex-1 bg-signal-blue/60" /><span className="flex-1 bg-signal-blue/30" />
            </span>
            Brett Pollak
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            {primaryLinks.map(navLink)}
            <div ref={writingRef} className="relative" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setWritingOpen(false); }}>
              <button ref={writingButton} type="button" aria-expanded={writingOpen} aria-controls="writing-navigation" onClick={() => setWritingOpen(!writingOpen)} className={`${linkClass(writingActive)} gap-1.5`}>
                Writing
                <svg aria-hidden="true" className={`h-3.5 w-3.5 transition-transform ${writingOpen ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l4 4 4-4" /></svg>
              </button>
              {writingOpen && <div id="writing-navigation" className="absolute left-0 mt-2 w-60 rounded-sm border border-line bg-paper-strong p-2 shadow-lg">
                {writingLinks.map(mobileLink)}
              </div>}
            </div>
            {secondaryLinks.map(navLink)}
            <Link href="/contact" onClick={close} aria-current={active('/contact') ? 'page' : undefined} className="ml-3 inline-flex min-h-11 items-center rounded-sm bg-signal-blue px-[18px] text-[15px] font-semibold text-white transition-colors hover:bg-ink">Contact</Link>
          </div>
          <button ref={mobileButton} type="button" className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-line bg-paper-strong px-3 text-sm font-semibold lg:hidden" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{mobileOpen ? '×' : '☰'}</span>
          </button>
        </div>
        {mobileOpen && <div id="mobile-navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-line py-3 lg:hidden">
          {[...primaryLinks, ...secondaryLinks, { href: '/contact', label: 'Contact' }].map(mobileLink)}
          <p className="rule-label px-3 pt-5 pb-2">Writing</p>
          {writingLinks.map(mobileLink)}
        </div>}
      </nav>
    </header>
  );
}
