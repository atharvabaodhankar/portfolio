'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Work() {
  useEffect(() => {
    const { gsap } = require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');

    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(min-width: 768px)").matches) {
      gsap.fromTo(
        ".work-img img",
        { y: "-9vw" },
        { 
          y: "9vw", 
          scrollTrigger: { 
            trigger: ".work-img", 
            scrub: 3 
          } 
        }
      );
    } else {
      gsap.from(".work-img img", {
        opacity: 0,
        rotate: 10,
        y: 10,
        skewY: -10,
        ease: "ease",
        scrollTrigger: {
          trigger: ".work-img",
          start: "0% 60%",
          end: "20% 60%",
          scrub: 2,
        },
      });
    }

    gsap.from(".work-left h2, .work-left h1", {
      opacity: 0,
      stagger: 0.1,
      y: 100,
      skewX: 10,
      ease: "ease",
      scrollTrigger: {
        trigger: ".work-left",
        start: "0% 80%",
        end: "30% 80%",
        scrub: 2,
      },
    });

    gsap.from(".work-left ul li", {
      opacity: 0,
      stagger: 0.1,
      x: 100,
      ease: "ease",
      scrollTrigger: {
        trigger: ".work-left",
        start: "0% 50%",
        end: "20% 50%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <section id="work">
      <div className="work-left">
        <h2>Let&apos;s work together</h2>
        <h1>Contact Me</h1>
        <ul className="social-media-list">
          <li>
            <a href="https://github.com/atharvabaodhankar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/atharvabaodhankar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/atharvabaodhankar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/atharvabaodhankar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="mailto:atharvabaodhankar@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="work-img non-hover">
        <Image 
          src="/imgs/navBar-img.jpg" 
          alt="" 
          width={400} 
          height={500}
        />
      </div>
    </section>
  );
}