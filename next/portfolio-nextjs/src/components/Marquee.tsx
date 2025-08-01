'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Marquee = () => {
  const marqueeRef = useRef<HTMLElement>(null);
  const arrowsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    const tween = gsap
      .to(".marquee_part", {
        xPercent: -100,
        repeat: -1,
        duration: 5,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set(".marquee_inner", { xPercent: -50 });

    const handleScroll = () => {
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      arrowsRef.current.forEach((arrow) => {
        if (isScrollingDown) {
          arrow.classList.remove("active");
        } else {
          arrow.classList.add("active");
        }
      });

      currentScroll = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      tween.kill();
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