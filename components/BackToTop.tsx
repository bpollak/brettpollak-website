'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show only once the reader is well down a long page (two screens), so the
      // button isn't floating over content that is still near the top.
      if (window.scrollY > window.innerHeight * 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility(); // Check on mount

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Phones already have the sticky header one thumb-reach away; the floating
  // button is hidden below md so it never covers content on small screens.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 hidden rounded-full bg-ink/85 p-2.5 text-white shadow-md backdrop-blur transition-all duration-300 hover:bg-ink hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 hover:-translate-y-0.5 md:block"
      aria-label="Back to top"
    >
      <svg aria-hidden="true"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
