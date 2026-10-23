'use client';

import React, { useEffect, useRef } from 'react';

/**
 * PetalNode
 * A botanical flower petal that unfurls outward from the flower center based on --petal-unfold.
 */
function PetalNode({
  dx,
  dy,
  r = 6,
  fill = '#D48B9E',
  stroke = '#B86B7E',
}: {
  dx: number;
  dy: number;
  r?: number;
  fill?: string;
  stroke?: string;
}) {
  return (
    <g
      className="botanical-petal"
      style={{ '--dx': `${dx}px`, '--dy': `${dy}px` } as React.CSSProperties}
    >
      <circle
        cx="0"
        cy="0"
        r={r}
        fill={fill}
        fillOpacity="0.68"
        stroke={stroke}
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />
    </g>
  );
}

/**
 * BotanicalCornerSpray
 * Delicate arched branch with sage stems, soft leaves, buds, and dusty-pink bougainvillea blossoms.
 * Reacts to scroll: stem grows, leaves unfurl, buds swell, and petals bloom.
 */
function BotanicalCornerSpray({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 320"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Primary Arching Stem */}
      <path
        d="M 10 10 C 65 30, 115 75, 155 130 C 190 180, 210 240, 225 315"
        stroke="#6E8E64"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.75"
        pathLength="100"
        className="botanical-stem"
      />
      {/* Secondary Offshoot Stem */}
      <path
        d="M 95 55 C 130 50, 170 65, 200 95 C 225 120, 240 150, 250 185"
        stroke="#6E8E64"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.65"
        pathLength="100"
        className="botanical-stem"
      />
      {/* Tertiary Bud Stem */}
      <path
        d="M 145 115 C 175 105, 200 115, 220 135"
        stroke="#6E8E64"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.6"
        pathLength="100"
        className="botanical-stem"
      />

      {/* Leaves with Sage Fill and Pale Ivory Veining */}
      <g className="botanical-leaf">
        <path
          d="M 52 24 C 44 10, 60 4, 74 16 C 72 28, 59 30, 52 24 Z"
          fill="#8FA886"
          fillOpacity="0.55"
          stroke="#527249"
          strokeWidth="0.9"
          strokeOpacity="0.6"
        />
        <path d="M 54 22 Q 62 15 70 16" stroke="#FAF8F2" strokeWidth="0.8" strokeOpacity="0.8" />
      </g>

      <g className="botanical-leaf">
        <path
          d="M 88 50 C 78 36, 94 26, 110 38 C 107 50, 95 56, 88 50 Z"
          fill="#8FA886"
          fillOpacity="0.55"
          stroke="#527249"
          strokeWidth="0.9"
          strokeOpacity="0.6"
        />
        <path d="M 90 48 Q 100 38 106 38" stroke="#FAF8F2" strokeWidth="0.8" strokeOpacity="0.8" />
      </g>

      <g className="botanical-leaf">
        <path
          d="M 125 85 C 114 74, 130 58, 148 74 C 144 88, 132 93, 125 85 Z"
          fill="#8FA886"
          fillOpacity="0.58"
          stroke="#527249"
          strokeWidth="0.9"
          strokeOpacity="0.6"
        />
        <path d="M 127 83 Q 137 72 144 73" stroke="#FAF8F2" strokeWidth="0.8" strokeOpacity="0.8" />
      </g>

      <g className="botanical-leaf">
        <path
          d="M 160 62 C 170 48, 188 54, 186 72 C 175 78, 161 74, 160 62 Z"
          fill="#8FA886"
          fillOpacity="0.5"
          stroke="#527249"
          strokeWidth="0.9"
          strokeOpacity="0.6"
        />
      </g>

      <g className="botanical-leaf">
        <path
          d="M 180 160 C 166 148, 180 130, 202 144 C 198 164, 186 168, 180 160 Z"
          fill="#8FA886"
          fillOpacity="0.55"
          stroke="#527249"
          strokeWidth="0.9"
          strokeOpacity="0.6"
        />
      </g>

      <g className="botanical-leaf">
        <path
          d="M 205 225 C 192 212, 208 194, 228 208 C 224 228, 212 232, 205 225 Z"
          fill="#8FA886"
          fillOpacity="0.5"
          stroke="#527249"
          strokeWidth="0.9"
          strokeOpacity="0.6"
        />
      </g>

      {/* Dusty-Pink Blossom 1 (Mid upper) with Unfolding Petals */}
      <g transform="translate(116, 64)" className="botanical-blossom">
        <PetalNode dx={-6.5} dy={-2.5} r={6} />
        <PetalNode dx={2.5} dy={-7.5} r={6} />
        <PetalNode dx={7.5} dy={-1.5} r={6} />
        <PetalNode dx={4.5} dy={6.5} r={6} />
        <PetalNode dx={-4.5} dy={5.5} r={6} />
        <circle cx="0.5" cy="0.5" r="2.5" fill="#FFFDF8" fillOpacity="0.95" />
        <circle cx="0.5" cy="0.5" r="1.3" fill="#A85165" fillOpacity="0.8" />
      </g>

      {/* Dusty-Pink Blossom 2 (Terminal Branch) with Unfolding Petals */}
      <g transform="translate(240, 140) scale(0.9)" className="botanical-blossom">
        <PetalNode dx={-5.5} dy={-2} r={5.5} />
        <PetalNode dx={2} dy={-6.5} r={5.5} />
        <PetalNode dx={6.5} dy={-1} r={5.5} />
        <PetalNode dx={3.5} dy={5.5} r={5.5} />
        <PetalNode dx={-3.5} dy={4.5} r={5.5} />
        <circle cx="0.5" cy="0.5" r="2.2" fill="#FFFDF8" fillOpacity="0.95" />
        <circle cx="0.5" cy="0.5" r="1.1" fill="#A85165" fillOpacity="0.8" />
      </g>

      {/* Developing Flower Buds */}
      <g transform="translate(215, 130)" className="botanical-bud">
        <ellipse cx="0" cy="0" rx="4" ry="6" fill="#D48B9E" fillOpacity="0.75" transform="rotate(35)" />
        <path d="M -2.5 3 Q 0 -4 2.5 3" stroke="#6E8E64" strokeWidth="0.9" fill="none" />
      </g>
      <g transform="translate(246, 180)" className="botanical-bud">
        <ellipse cx="0" cy="0" rx="3.5" ry="5.5" fill="#D48B9E" fillOpacity="0.7" transform="rotate(55)" />
      </g>
    </svg>
  );
}

/**
 * BotanicalMarginStem
 * Slender vertical climbing stem with alternating leaves and small floral nodes.
 */
function BotanicalMarginStem({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 460"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Primary Climbing Stem */}
      <path
        d="M 35 10 C 18 85, 52 155, 30 235 C 12 305, 42 375, 22 455"
        stroke="#6E8E64"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.7"
        pathLength="100"
        className="botanical-stem"
      />
      {/* Offshoot Sprigs */}
      <path d="M 32 100 Q 58 95 74 110" stroke="#6E8E64" strokeWidth="1" strokeOpacity="0.6" pathLength="100" className="botanical-stem" />
      <path d="M 38 215 Q 64 220 78 240" stroke="#6E8E64" strokeWidth="1" strokeOpacity="0.6" pathLength="100" className="botanical-stem" />
      <path d="M 22 325 Q -2 330 -14 350" stroke="#6E8E64" strokeWidth="1" strokeOpacity="0.6" pathLength="100" className="botanical-stem" />

      {/* Alternating Leaves */}
      <g className="botanical-leaf">
        <path
          d="M 28 55 C 12 44, 6 60, 14 74 C 25 76, 34 65, 28 55 Z"
          fill="#8FA886"
          fillOpacity="0.5"
          stroke="#527249"
          strokeWidth="0.8"
          strokeOpacity="0.55"
        />
      </g>
      <g className="botanical-leaf">
        <path
          d="M 36 135 C 54 126, 60 142, 52 154 C 40 156, 32 145, 36 135 Z"
          fill="#8FA886"
          fillOpacity="0.52"
          stroke="#527249"
          strokeWidth="0.8"
          strokeOpacity="0.55"
        />
      </g>
      <g className="botanical-leaf">
        <path
          d="M 24 185 C 8 176, 4 192, 12 204 C 24 206, 30 195, 24 185 Z"
          fill="#8FA886"
          fillOpacity="0.48"
          stroke="#527249"
          strokeWidth="0.8"
          strokeOpacity="0.55"
        />
      </g>
      <g className="botanical-leaf">
        <path
          d="M 29 275 C 48 266, 54 284, 44 296 C 32 298, 24 287, 29 275 Z"
          fill="#8FA886"
          fillOpacity="0.52"
          stroke="#527249"
          strokeWidth="0.8"
          strokeOpacity="0.55"
        />
      </g>

      {/* Blossom 1 with Unfolding Petals */}
      <g transform="translate(70, 110) scale(0.85)" className="botanical-blossom">
        <PetalNode dx={-5} dy={-2} r={5.2} />
        <PetalNode dx={2} dy={-6} r={5.2} />
        <PetalNode dx={6} dy={-1} r={5.2} />
        <PetalNode dx={3} dy={5} r={5.2} />
        <PetalNode dx={-3} dy={4} r={5.2} />
        <circle cx="0.5" cy="0" r="2" fill="#FFFDF8" fillOpacity="0.95" />
        <circle cx="0.5" cy="0" r="1" fill="#A85165" fillOpacity="0.8" />
      </g>

      {/* Blossom 2 with Unfolding Petals */}
      <g transform="translate(74, 240) scale(0.8)" className="botanical-blossom">
        <PetalNode dx={-5} dy={-2} r={5} />
        <PetalNode dx={2} dy={-6} r={5} />
        <PetalNode dx={6} dy={-1} r={5} />
        <PetalNode dx={3} dy={5} r={5} />
        <PetalNode dx={-3} dy={4} r={5} />
        <circle cx="0.5" cy="0" r="2" fill="#FFFDF8" fillOpacity="0.95" />
      </g>

      {/* Terminal Bud */}
      <g transform="translate(26, 445)" className="botanical-bud">
        <ellipse cx="0" cy="0" rx="3.2" ry="4.8" fill="#D48B9E" fillOpacity="0.7" transform="rotate(-20)" />
      </g>
    </svg>
  );
}

/**
 * BotanicalFlourish
 * Gentle clustered floral accent with soft leaf rosette and open blossoms.
 */
function BotanicalFlourish({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 180"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 10 115 C 38 92, 75 88, 110 102 C 140 115, 165 138, 185 168"
        stroke="#6E8E64"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.7"
        pathLength="100"
        className="botanical-stem"
      />
      <g className="botanical-leaf">
        <path
          d="M 52 94 C 46 80, 64 72, 76 84 C 72 96, 60 100, 52 94 Z"
          fill="#8FA886"
          fillOpacity="0.5"
          stroke="#527249"
          strokeWidth="0.8"
          strokeOpacity="0.55"
        />
      </g>
      <g className="botanical-leaf">
        <path
          d="M 114 104 C 108 90, 126 82, 138 94 C 134 106, 122 110, 114 104 Z"
          fill="#8FA886"
          fillOpacity="0.5"
          stroke="#527249"
          strokeWidth="0.8"
          strokeOpacity="0.55"
        />
      </g>

      {/* Open Blossom with Unfolding Petals */}
      <g transform="translate(105, 98)" className="botanical-blossom">
        <PetalNode dx={-6} dy={-2.5} r={5.8} />
        <PetalNode dx={2.5} dy={-7} r={5.8} />
        <PetalNode dx={7} dy={-1} r={5.8} />
        <PetalNode dx={4} dy={6} r={5.8} />
        <PetalNode dx={-4} dy={5} r={5.8} />
        <circle cx="0.5" cy="0.5" r="2.4" fill="#FFFDF8" fillOpacity="0.95" />
        <circle cx="0.5" cy="0.5" r="1.2" fill="#A85165" fillOpacity="0.8" />
      </g>

      {/* Developing Bud */}
      <g transform="translate(182, 165)" className="botanical-bud">
        <ellipse cx="0" cy="0" rx="3.6" ry="5.2" fill="#D48B9E" fillOpacity="0.7" transform="rotate(45)" />
      </g>
    </svg>
  );
}

/**
 * FloralBackground
 * 
 * Scroll-reactive botanical background component.
 * Drives stem growth, bud development, and petal unfolding continuously as the reader scrolls.
 * Scrolling down advances the floral growth; scrolling up reverses it smoothly.
 */
export function FloralBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const branch1Ref = useRef<HTMLDivElement>(null);
  const branch2Ref = useRef<HTMLDivElement>(null);
  const branch3Ref = useRef<HTMLDivElement>(null);
  const branch4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion: if active, branches stay in calm static full bloom
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    // Helper to apply botanical sub-progress to a branch element
    const updateBranch = (el: HTMLElement | null, p: number) => {
      if (!el) return;
      const stemProg = Math.min(1, Math.max(0, p / 0.52));
      const leafProg = Math.min(1, Math.max(0, (p - 0.22) / 0.45));
      const budProg = Math.min(1, Math.max(0, (p - 0.35) / 0.35));
      const bloomProg = Math.min(1, Math.max(0, (p - 0.52) / 0.48));
      const petalProg = Math.min(1, Math.max(0, (p - 0.58) / 0.42));

      el.style.setProperty('--stem-dash', `${(100 * (1 - stemProg)).toFixed(1)}px`);
      el.style.setProperty('--leaf-scale', leafProg.toFixed(3));
      el.style.setProperty('--bud-scale', budProg.toFixed(3));
      el.style.setProperty('--bloom-scale', bloomProg.toFixed(3));
      el.style.setProperty('--petal-unfold', petalProg.toFixed(3));
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const vh = window.innerHeight;
          const mainEl = container.parentElement;
          const mainHeight = mainEl ? mainEl.offsetHeight : 4000;
          const mainTop = mainEl ? mainEl.offsetTop : 0;

          // Branch 1: Top Arch Crest (Hero -> Services transition)
          // Starts with gentle stem and bud (0.35) and fully blooms by scroll 600px
          const p1 = Math.min(1, Math.max(0, 0.35 + (scrollY / 600) * 0.65));
          updateBranch(branch1Ref.current, p1);

          // Branch 2: Mid-Page Climber (Services -> Gardens)
          const y2 = mainTop + mainHeight * 0.28;
          const d2 = y2 - scrollY;
          const p2 = Math.min(1, Math.max(0, 1 - (d2 - vh * 0.20) / (vh * 0.65)));
          updateBranch(branch2Ref.current, p2);

          // Branch 3: Lower-Page Flourish (Films -> About)
          const y3 = mainTop + mainHeight * 0.64;
          const d3 = y3 - scrollY;
          const p3 = Math.min(1, Math.max(0, 1 - (d3 - vh * 0.20) / (vh * 0.65)));
          updateBranch(branch3Ref.current, p3);

          // Branch 4: Field Nursery Sprig (About -> Contact)
          const y4 = mainTop + mainHeight * 0.90;
          const d4 = y4 - scrollY;
          const p4 = Math.min(1, Math.max(0, 1 - (d4 - vh * 0.25) / (vh * 0.60)));
          updateBranch(branch4Ref.current, p4);

          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial calculation on mount
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Page Top-End Corner Crest (Desktop / Tablet only) */}
      <div
        ref={branch1Ref}
        className="botanical-sway-a hidden md:block absolute top-0 end-0 md:top-1 md:end-2 lg:end-6 w-40 md:w-52 lg:w-60 h-auto opacity-65 rtl:scale-x-[-1]"
        style={{ transformOrigin: 'top right' }}
      >
        <BotanicalCornerSpray className="w-full h-auto drop-shadow-[0_2px_6px_rgba(20,32,26,0.04)]" />
      </div>

      {/* 2. Mid-Page Margin Flank (Services / Gardens boundary) */}
      <div
        ref={branch2Ref}
        className="botanical-sway-b absolute top-[28%] start-0 -translate-x-6 md:-translate-x-4 lg:start-0 w-20 md:w-28 lg:w-32 h-auto opacity-45 max-md:opacity-25 max-md:scale-75 rtl:scale-x-[-1]"
        style={{ transformOrigin: 'bottom left' }}
      >
        <BotanicalMarginStem className="w-full h-auto drop-shadow-[0_2px_6px_rgba(20,32,26,0.04)]" />
      </div>

      {/* 3. Lower-Page Flank (Films / About transition) */}
      <div
        ref={branch3Ref}
        className="botanical-sway-c absolute top-[64%] end-0 translate-x-6 md:translate-x-4 lg:end-0 w-24 md:w-32 lg:w-36 h-auto opacity-50 max-md:opacity-25 max-md:scale-75 rtl:scale-x-[-1]"
        style={{ transformOrigin: 'center right' }}
      >
        <BotanicalFlourish className="w-full h-auto drop-shadow-[0_2px_6px_rgba(20,32,26,0.04)]" />
      </div>

      {/* 4. Contact Section Margin Sprig (Desktop / Tablet only) */}
      <div
        ref={branch4Ref}
        className="botanical-sway-a hidden md:block absolute bottom-8 start-0 -translate-x-4 md:start-2 lg:start-6 w-28 md:w-36 lg:w-44 h-auto opacity-50"
        style={{ transformOrigin: 'bottom left' }}
      >
        <BotanicalCornerSpray className="w-full h-auto drop-shadow-[0_2px_6px_rgba(20,32,26,0.04)]" />
      </div>
    </div>
  );
}
