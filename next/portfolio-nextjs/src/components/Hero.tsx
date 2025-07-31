'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  useEffect(() => {
    const { gsap } = require('gsap');

    const heroLoad = () => {
      const heroTl = gsap.timeline();

      heroTl.from(
        ".hero-img",
        {
          height: 0,
          scale: 0.8,
          ease: "elastic",
          duration: 3,
        },
        "HeroH1H2"
      );
      
      heroTl.from(
        ".hero h1",
        {
          skewY: -10,
          delay: 1,
          opacity: 0,
        },
        "HeroH1H2"
      );
      
      heroTl.from(
        ".hero h2",
        {
          skewY: -10,
          delay: 1.3,
          opacity: 0,
        },
        "HeroH1H2"
      );
      
      heroTl.from(".hero p", {
        y: 20,
        opacity: 0,
      });
    };

    // Delay hero animation to run after loader
    setTimeout(heroLoad, 3000);
  }, []);

  return (
    <section id="hero">
      <div className="hero">
        <h1 className="hero-hover">ATHARVA</h1>
        <div className="hero-img non-hover">
          <Image 
            src="/imgs/hero-img.jpg" 
            alt="hero" 
            width={800}
            height={600}
            priority
          />
        </div>
        <h2 className="hero-hover">BAODHANKAR</h2>
        <p>Web Designer and Video Editor</p>
      </div>
    </section>
  );
}