'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const textSpansRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const loading = loadingRef.current;
    const loader = loaderRef.current;

    if (!loading || !loader) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          onComplete();
        }, 500);
      },
    });

    // Initial loading animation
    tl.from(loading, {
      yPercent: 100,
      ease: "power3.inOut",
      duration: 1,
    });

    tl.from(
      textSpansRef.current,
      {
        duration: 0.6,
        delay: -0.3,
        y: 130,
        skewY: 10,
        stagger: 0.4,
        ease: "Power3.easeOut",
      },
      "loader-same"
    );

    tl.from(
      loader,
      {
        rotate: -360,
        scale: 4,
        duration: 2,
        ease: "ease",
      },
      "loader-same"
    );

    // Exit animation
    const minPreloaderTime = 2000;
    const startTime = Date.now();

    setTimeout(() => {
      const exitTl = gsap.timeline();
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