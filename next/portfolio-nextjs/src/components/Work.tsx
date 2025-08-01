'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const workLeftRef = useRef<HTMLDivElement>(null);
  const workImgRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<HTMLElement[]>([]);
  const listItemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const workLeft = workLeftRef.current;
    const workImg = workImgRef.current;

    if (!section || !workLeft || !workImg) return;

    // Check if it's desktop for parallax effect
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      gsap.fromTo(
        workImg.querySelector('img'),
        { y: "-9vw" },
        { 
          y: "9vw", 
          scrollTrigger: { 
            trigger: workImg, 
            scrub: 3 
          } 
        }
      );
    } else {
      gsap.from(workImg.querySelector('img'), {
        opacity: 0,
        rotate: 10,
        y: 10,
        skewY: -10,
        ease: "ease",
        scrollTrigger: {
          trigger: workImg,
          start: "0% 60%",
          end: "20% 60%",
          scrub: 2,
        },
      });
    }

    gsap.from(titleRefs.current, {
      opacity: 0,
      stagger: 0.1,
      y: 100,
      skewX: 10,
      ease: "ease",
      scrollTrigger: {
        trigger: workLeft,
        start: "0% 80%",
        end: "30% 80%",
        scrub: 2,
      },
    });

    gsap.from(listItemsRef.current, {
      opacity: 0,
      stagger: 0.1,
      x: 100,
      ease: "ease",
      scrollTrigger: {
        trigger: workLeft,
        start: "0% 50%",
        end: "20% 50%",
        scrub: 2,
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