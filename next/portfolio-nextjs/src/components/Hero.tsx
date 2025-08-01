'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/hooks/useGSAP';
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const heroH1Ref = useRef<HTMLHeadingElement>(null);
  const heroH2Ref = useRef<HTMLHeadingElement>(null);
  const heroPRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const heroImg = heroImgRef.current;
    const heroH1 = heroH1Ref.current;
    const heroH2 = heroH2Ref.current;
    const heroP = heroPRef.current;

    if (!heroImg || !heroH1 || !heroH2 || !heroP) return;

    // Set initial states
    gsap.set([heroImg, heroH1, heroH2, heroP], { opacity: 0 });
    gsap.set(heroImg, { height: 0, scale: 0.8 });
    gsap.set([heroH1, heroH2], { skewY: -10 });
    gsap.set(heroP, { y: 20 });

    const heroTl = gsap.timeline({ delay: 0.5 });

    heroTl.to(
      heroImg,
      {
        height: "auto",
        scale: 1,
        opacity: 1,
        ease: "elastic.out(1, 0.3)",
        duration: 2,
      },
      "start"
    );

    heroTl.to(
      heroH1,
      {
        skewY: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "start+=0.5"
    );

    heroTl.to(
      heroH2,
      {
        skewY: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "start+=0.8"
    );

    heroTl.to(heroP, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }, "start+=1");

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