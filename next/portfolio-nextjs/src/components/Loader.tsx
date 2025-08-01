'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/hooks/useGSAP';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const textSpansRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loading = loadingRef.current;
    const loader = loaderRef.current;

    if (!loading || !loader) return;

    // Set initial states
    gsap.set(loading, { yPercent: 100 });
    gsap.set(textSpansRef.current, { y: 130, skewY: 10 });
    gsap.set(loader, { rotate: -360, scale: 4 });

    const tl = gsap.timeline();

    // Initial loading animation
    tl.to(loading, {
      yPercent: 0,
      ease: "power3.inOut",
      duration: 1,
    });

    tl.to(
      textSpansRef.current,
      {
        duration: 0.8,
        y: 0,
        skewY: 0,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.to(
      loader,
      {
        rotate: 0,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      },
      "-=0.8"
    );

    // Exit animation after minimum time
    const minPreloaderTime = 3000;

    setTimeout(() => {
      const exitTl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            onComplete();
          }, 200);
        },
      });

      exitTl.to(loading, {
        yPercent: -100,
        duration: 1.25,
        ease: "power4.inOut",
      });
    }, minPreloaderTime);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !textSpansRef.current.includes(el)) {
      textSpansRef.current.push(el);
    }
  };

  return (
    <>
      <section id="loader">
      </section>
      <div className="loading" ref={loadingRef}>
        <div className="loading-main">
          <div className="loader-box" ref={loaderRef}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="loading-text">
            <h1><span ref={addToRefs}>Building &nbsp;</span></h1>
            <h1><span ref={addToRefs}>your &nbsp;</span></h1>
            <h1><span ref={addToRefs}>experience </span></h1>
            <h1><span ref={addToRefs}>...</span></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;