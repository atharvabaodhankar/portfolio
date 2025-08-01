'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/hooks/useGSAP';
import Image from 'next/image';

const Created = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const createdRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    const created = createdRef.current;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const text = textRef.current;

    if (!section || !created || !img1 || !img2 || !text) return;

    // Check if it's desktop
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    // Set initial states
    gsap.set([img1, img2, text], { opacity: 0 });

    if (isDesktop) {
      gsap.set([img1, img2], { x: -200, skewY: 10 });
      gsap.set(text, { x: -100, skewY: 10 });

      gsap.to([img1, img2], {
        opacity: 1,
        x: 0,
        skewY: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "30% 80%",
          end: "60% 50%",
          scrub: 1,
        },
      });

      gsap.to(text, {
        opacity: 1,
        x: 0,
        skewY: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "40% 80%",
          end: "70% 50%",
          scrub: 1,
        },
      });
    } else {
      gsap.set([img1, img2], { skewY: 10 });
      gsap.set(text, { y: 100, skewY: 10 });

      gsap.to([img1, img2], {
        opacity: 1,
        skewY: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "30% 80%",
          end: "60% 50%",
          scrub: 1,
        },
      });

      gsap.to(text, {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "40% 80%",
          end: "70% 50%",
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="created" ref={sectionRef}>
      <div className="created" ref={createdRef}>
        <h1 ref={textRef}>
          I WAS <br />
          <span>CODED</span>
          <div className="created-img-1 created-img" ref={img1Ref}>
            <Image
              src="/imgs/created-img-1.jpg"
              alt="Created Image 1"
              width={250}
              height={100}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <br />
          <div className="created-img-2 created-img" ref={img2Ref}>
            <Image
              src="/imgs/created-img-2.png"
              alt="Created Image 2"
              width={250}
              height={100}
              style={{ objectFit: 'cover' }}
            />
          </div>
          TO <span>DESIGN</span>
        </h1>
      </div>
    </section>
  );
};

export default Created;