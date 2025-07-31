'use client';

import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const { gsap } = require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".footer-left, .footer-right", {
      yPercent: -100,
      opacity: 0.7,
      scrollTrigger: {
        scroller: "body",
        trigger: "#footer",
        scrub: 3,
        start: "top 80%",
        end: "40% 80%",
      },
    });

    gsap.from(".footer-text h2", {
      y: -100,
      opacity: 0,
      skewY: 10,
      ease: "ease",
      scrollTrigger: {
        scroller: "body",
        trigger: ".footer",
        scrub: 3,
        start: "40% 80%",
        end: "60% 80%",
      },
    });
  }, []);

  return (
    <section id="footer">
      <svg
        width="100%"
        height="100"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0L1200 0V100C1200 100 600 0 0 100V0Z"
          fill="#000000"
        />
      </svg>
      <div className="footer">
        <div className="footer-left">
          <h1>Let&apos;s Connect</h1>
          <p>
            Ready to bring your vision to life? Whether you need a stunning website, 
            captivating animations, or innovative web solutions, I&apos;m here to help. 
            Let&apos;s collaborate and create something extraordinary together.
          </p>
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <a className="nav-btn" href="#hero">
                <span>Home</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a className="nav-btn" href="#aboutme">
                <span>About Me</span>
                <span>About Me</span>
              </a>
            </li>
            <li>
              <a className="nav-btn" href="#projects">
                <span>Projects</span>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a className="nav-btn" href="#work">
                <span>Contact</span>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-logo">
        <div className="footer-text">
          <h2>ATHARVA</h2>
          <h2>ATHARVA</h2>
        </div>
      </div>
    </section>
  );
}