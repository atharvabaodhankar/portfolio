'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/hooks/useGSAP';
import Image from 'next/image';

const Ferro = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const ferroSections = document.querySelectorAll(".ferro-c1");
      
      if (ferroSections.length === 0) return;

      // Horizontal scroll animation
      gsap.to(ferroSections, {
        xPercent: -200,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: 1,
          start: "top top",
          end: "+=300%",
          pin: true,
          anticipatePin: 1,
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="ferro" ref={sectionRef}>
      <div className="ferro-header">
        <h1>&nbsp;</h1>
      </div>
      <div className="ferro-container" ref={containerRef}>
        <div className="ferro-c1 ferro-section-1">
          <div className="ferro-section-1-text">
            <h1 className="ferro-h1">What is Ferro.Js?</h1>
            <h2 className="ferro-h2">A Dynamic JavaScript Animation Library</h2>
          </div>
        </div>
        
        <div className="ferro-c1 ferro-section-2">
          <div className="ferro-img">
            <Image 
              src="/imgs/ferro.png" 
              alt="Ferro.js" 
              width={400}
              height={300}
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            />
          </div>
          <p>
            Ferro.js is a versatile JavaScript library I developed to enhance web design with engaging, interactive
            animations. Built on top of the powerful GSAP (GreenSock Animation Platform), Ferro.js offers a suite of
            customizable effects designed to bring elements like headings, buttons, images, and more to life. Whether
            you&apos;re aiming for subtle animations or eye-catching interactions, Ferro.js provides the tools to create a
            unique user experience.
          </p>
        </div>
        
        <div className="ferro-c1 ferro-section-3">
          <div className="ferro-section-1-text">
            <h1 className="ferro-h1">Elevate Your Web Experience with Interactive Animations</h1>
            <a href="https://www.npmjs.com/package/ferro-js" className="ferro-btn" target="_blank" rel="noopener noreferrer">
              Visit NPM
            </a>
            <a href="https://github.com/atharvabaodhankar/ferro.js" className="ferro-btn" target="_blank" rel="noopener noreferrer">
              Visit GITHUB
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ferro;