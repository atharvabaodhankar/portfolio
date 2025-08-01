'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/hooks/useGSAP';
import Image from 'next/image';

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const workLeftRef = useRef<HTMLDivElement>(null);
  const workImgRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<HTMLElement[]>([]);
  const listItemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    const workLeft = workLeftRef.current;
    const workImg = workImgRef.current;

    if (!section || !workLeft || !workImg) return;

    // Check if it's desktop for parallax effect
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const imgElement = workImg.querySelector('img');

    if (imgElement) {
      if (isDesktop) {
        gsap.fromTo(
          imgElement,
          { y: "-9vw" },
          { 
            y: "9vw", 
            ease: "none",
            scrollTrigger: { 
              trigger: workImg, 
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            } 
          }
        );
      } else {
        gsap.set(imgElement, { opacity: 0, rotate: 10, y: 10, skewY: -10 });
        gsap.to(imgElement, {
          opacity: 1,
          rotate: 0,
          y: 0,
          skewY: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: workImg,
            start: "0% 80%",
            end: "30% 60%",
            scrub: 1,
          },
        });
      }
    }

    // Set initial states
    gsap.set(titleRefs.current, { opacity: 0, y: 100, skewX: 10 });
    gsap.set(listItemsRef.current, { opacity: 0, x: 100 });

    gsap.to(titleRefs.current, {
      opacity: 1,
      y: 0,
      skewX: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: workLeft,
        start: "0% 80%",
        end: "40% 60%",
        scrub: 1,
      },
    });

    gsap.to(listItemsRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: workLeft,
        start: "20% 80%",
        end: "60% 60%",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToTitleRefs = (el: HTMLElement | null) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  const addToListRefs = (el: HTMLLIElement | null) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el);
    }
  };

  return (
    <section id="work" ref={sectionRef}>
      <div className="work-left" ref={workLeftRef}>
        <h2 ref={addToTitleRefs}>Let&apos;s Work Together</h2>
        <h1 ref={addToTitleRefs}>Contact Me</h1>
        <ul className="social-media-list">
          <li ref={addToListRefs}>
            <a href="https://github.com/atharvabaodhankar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li ref={addToListRefs}>
            <a href="https://linkedin.com/in/atharvabaodhankar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li ref={addToListRefs}>
            <a href="https://twitter.com/atharvabaodhankar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li ref={addToListRefs}>
            <a href="https://instagram.com/atharvabaodhankar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li ref={addToListRefs}>
            <a href="mailto:atharvabaodhankar@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li ref={addToListRefs}>
            <a href="tel:+1234567890">
              <i className="fas fa-phone"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="work-img" ref={workImgRef}>
        <Image 
          src="/imgs/navBar-img.jpg" 
          alt="Contact" 
          width={400}
          height={500}
          style={{ objectFit: 'cover', position: 'absolute', width: '100%', height: 'calc(100% + 2vw)', top: '-7vw', left: 0 }}
        />
      </div>
    </section>
  );
};

export default Work;