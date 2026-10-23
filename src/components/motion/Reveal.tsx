'use client';

import React, { useEffect, useRef, ElementType } from 'react';

interface RevealProps {
  as?: ElementType;
  index?: number;
  className?: string;
  children: React.ReactNode;
}

export function Reveal({
  as: Component = 'div',
  index = 0,
  className = '',
  children,
  ...props
}: RevealProps & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (!inViewport) {
      el.setAttribute('data-reveal', 'pending');
      el.style.setProperty('--i', String(Math.min(index, 5)));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.setAttribute('data-reveal', 'shown');
              observer.unobserve(el);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -8% 0px',
        }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }
  }, [index]);

  return (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  );
}
