'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const heroH1Ref = useRef<HTMLHeadingElement>(null);
  const heroH2Ref = useRef<HTMLHeadingElement>(null);
  const heroPRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const heroImg = heroImgRef.current;
    const heroH1 = heroH1Ref.current;
    const heroH2 = heroH2Ref.current;
    const heroP = heroPRef.current;

    if (!heroImg || !heroH1 || !heroH2 || !heroP) return;

    const heroTl = gsap.timeline();

    heroTl.from(
      heroImg,
      {
        height: 0,
        scale: 0.8,
        ease: "elastic",
        duration: 3,
      },
      "HeroH1H2"
    );

    heroTl.from(
      heroH1,
      {
        skewY: -10,
        delay: 1,
        opacity: 0,
      },
      "HeroH1H2"
    );

    heroTl.from(
      heroH2,
      {
        skewY: -10,
        delay: 1.3,
        opacity: 0,
      },
      "HeroH1H2"
    );

    heroTl.from(heroP, {
      y: 20,
      opacity: 0,
    });

    return () => {
      heroTl.kill();
    };
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero">
        <h1 className="hero-hover" ref={heroH1Ref}>ATHARVA</h1>
        <div className="hero-img non-hover" ref={heroImgRef}>
          <Image 
            src="/imgs/hero-img.jpg" 
            alt="hero" 
            width={400}
            height={300}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <h2 className="hero-hover" ref={heroH2Ref}>BAODHANKAR</h2>
        <p ref={heroPRef}>Web Designer and Video Editor</p>
      </div>
    </section>
  );
};

export default Hero;