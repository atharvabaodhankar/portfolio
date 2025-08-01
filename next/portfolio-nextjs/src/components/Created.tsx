'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Created = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const createdRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const created = createdRef.current;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const text = textRef.current;

    if (!section || !created || !img1 || !img2 || !text) return;

    // Check if it's desktop
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      gsap.from([img1, img2], {
        opacity: 0,
        xPercent: -150,
        skewY: 10,
        duration: 2,
        ease: "ease",
        scrollTrigger: {
          trigger: section,
          start: "30% 50%",
          end: "55% 50%",
          scrub: 2,
        },
      });

      gsap.from(text, {
        opacity: 0,
        xPercent: -100,
        skewY: 10,
        delay: 1,
        duration: 2,
        ease: "ease",
        scrollTrigger: {
          trigger: section,
          start: "30% 50%",
          end: "55% 50%",
          scrub: 2,
        },
      });
    } else {
      gsap.from([img1, img2], {
        opacity: 0,
        skewY: 10,
        ease: "ease",
        scrollTrigger: {
          trigger: section,
          start: "30% 50%",
          end: "55% 50%",
          scrub: 2,
        },
      });

      gsap.from(text, {
        opacity: 0,
        y: 100,
        skewY: 10,
        ease: "ease",
        scrollTrigger: {
          trigger: section,
          start: "30% 50%",
          end: "55% 50%",
          scrub: 2,
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