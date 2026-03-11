"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FadeInObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElems = document.querySelectorAll('.fade-in');
    fadeElems.forEach(el => observer.observe(el));

    return () => {
      fadeElems.forEach(el => observer.unobserve(el));
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}
