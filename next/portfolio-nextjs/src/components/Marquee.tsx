'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/hooks/useGSAP';

const Marquee = () => {
  const marqueeRef = useRef<HTMLElement>(null);
  const arrowsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let currentScroll = 0;
    let isScrollingDown = true;

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const marqueeInner = document.querySelector(".marquee_inner");
      const marqueeParts = document.querySelectorAll(".marquee_part");

      if (!marqueeInner || marqueeParts.length === 0) return;

      const tween = gsap
        .to(marqueeParts, {
          xPercent: -100,
          repeat: -1,
          duration: 5,
          ease: "none",
        })
        .totalProgress(0.5);

      gsap.set(marqueeInner, { xPercent: -50 });

      const handleScroll = () => {
        const newScroll = window.pageYOffset;
        isScrollingDown = newScroll > currentScroll;

        gsap.to(tween, {
          timeScale: isScrollingDown ? 1 : -1,
          duration: 0.3,
          ease: "power2.out"
        });

        arrowsRef.current.forEach((arrow) => {
          if (isScrollingDown) {
            arrow.classList.remove("active");
          } else {
            arrow.classList.add("active");
          }
        });

        currentScroll = newScroll;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        tween.kill();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const addToArrowRefs = (el: HTMLDivElement | null) => {
    if (el && !arrowsRef.current.includes(el)) {
      arrowsRef.current.push(el);
    }
  };

  const MarqueePart = () => (
    <div className="marquee_part">
      modern web designs
      <div className="arrow" ref={addToArrowRefs}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );

  return (
    <section id="marquee" ref={marqueeRef}>
      <div className="marquee_inner">
        <MarqueePart />
        <MarqueePart />
        <MarqueePart />
        <MarqueePart />
        <MarqueePart />
        <MarqueePart />
      </div>
    </section>
  );
};

export default Marquee;