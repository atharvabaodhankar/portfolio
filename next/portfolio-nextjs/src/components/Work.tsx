'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/hooks/useGSAP';
import Image from 'next/image';

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const workLeftRef = useRef<HTMLDivElement>(null);
  const workImgRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<HTMLElement[]>([]);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);

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
    gsap.set([contactInfoRef.current, socialIconsRef.current], { opacity: 0, x: 100 });

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

    gsap.to([contactInfoRef.current, socialIconsRef.current], {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.2,
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

  return (
    <section id="work" ref={sectionRef}>
      <div className="work-left" ref={workLeftRef}>
        <h2 ref={addToTitleRefs}>Atharva Baodhankar</h2>
        <h1 ref={addToTitleRefs}>WORK <br /> WITH ME</h1>

        <div className="social-media-list" ref={socialIconsRef}>
          <a href="https://github.com/atharvabaodhankar" target="_blank" className="contact-icon">
            <li>
              <i className="fa-brands fa-github"></i>
            </li>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100069517304222" target="_blank" className="contact-icon">
            <li>
              <i className="fa-brands fa-facebook-f"></i>
            </li>
          </a>

          <a href="https://www.instagram.com/op_athu_/" target="_blank" className="contact-icon">
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
          </a>
          
          <a href="https://www.linkedin.com/in/atharva-baodhankar" target="_blank" className="contact-icon">
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
          </a>
        </div>

        <ul ref={contactInfoRef}>
          <li>Solapur, Maharashtra</li>
          <li>+91 9373924727</li>
          <li>baodhankaratharva@gmail.com</li>
        </ul>
      </div>
      
      <div className="work-img non-hover" ref={workImgRef}>
        <Image 
          src="/imgs/navBar-img.jpg" 
          alt="" 
          width={500}
          height={600}
          style={{ 
            objectFit: 'cover', 
            width: '100%', 
            height: '100%'
          }}
        />
      </div>
    </section>
  );
};

export default Work;