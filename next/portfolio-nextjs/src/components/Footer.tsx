'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const footerLeftRef = useRef<HTMLDivElement>(null);
  const footerRightRef = useRef<HTMLDivElement>(null);
  const footerTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const footer = footerRef.current;
    const footerLeft = footerLeftRef.current;
    const footerRight = footerRightRef.current;
    const footerText = footerTextRef.current;

    if (!section || !footer || !footerLeft || !footerRight || !footerText) return;

    gsap.from([footerLeft, footerRight], {
      yPercent: -100,
      opacity: 0.7,
      scrollTrigger: {
        trigger: section,
        scrub: 3,
        start: "top 80%",
        end: "40% 80%",
      },
    });

    gsap.from(footerText.querySelectorAll('h2'), {
      y: -100,
      opacity: 0,
      skewY: 10,
      ease: "ease",
      scrollTrigger: {
        trigger: footer,
        scrub: 3,
        start: "40% 80%",
        end: "60% 80%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="footer" ref={sectionRef}>
      <svg width="100%" height="50" viewBox="0 0 100 50" preserveAspectRatio="none">
        <path d="M0,50 Q50,0 100,50 L100,50 L0,50 Z" fill="#000"/>
      </svg>
      
      <div className="footer" ref={footerRef}>
        <div className="footer-left" ref={footerLeftRef}>
          <h1>Let&apos;s Connect</h1>
          <p>
            Ready to bring your vision to life? I&apos;m always excited to work on new projects 
            and collaborate with creative minds. Let&apos;s build something amazing together.
          </p>
        </div>
        <div className="footer-right" ref={footerRightRef}>
          <ul>
            <li>
              <a 
                className="nav-btn" 
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#hero');
                }}
              >
                <span>Home</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a 
                className="nav-btn" 
                href="#aboutme"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#aboutme');
                }}
              >
                <span>About Me</span>
                <span>About Me</span>
              </a>
            </li>
            <li>
              <a 
                className="nav-btn" 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#projects');
                }}
              >
                <span>Projects</span>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a 
                className="nav-btn" 
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#work');
                }}
              >
                <span>Contact</span>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-logo">
        <div className="footer-text" ref={footerTextRef}>
          <h2>ATHARVA</h2>
          <h2>ATHARVA</h2>
        </div>
      </div>
    </section>
  );
};

export default Footer;