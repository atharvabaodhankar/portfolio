'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgOuterRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftTitleRef = useRef<HTMLHeadingElement>(null);
  const textSpansRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const imgOuter = imgOuterRef.current;
    const title = titleRef.current;
    const leftTitle = leftTitleRef.current;

    if (!section || !imgOuter || !title || !leftTitle) return;

    const aboutMeTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "10% 50%",
        end: "50% 50%",
        scrub: 2,
      },
    });

    aboutMeTl.from(imgOuter, {
      opacity: 0,
      y: 100,
      ease: "ease",
    });

    aboutMeTl.from(title, {
      opacity: 0,
      x: -100,
      ease: "ease",
    });

    aboutMeTl.from([leftTitle, ...textSpansRef.current], {
      opacity: 0,
      x: 100,
      stagger: 0.2,
      skewX: 40,
      ease: "ease",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToTextRefs = (el: HTMLSpanElement | null) => {
    if (el && !textSpansRef.current.includes(el)) {
      textSpansRef.current.push(el);
    }
  };

  return (
    <section id="aboutme" ref={sectionRef}>
      <div className="aboutme-right">
        <h1 ref={titleRef}>About Me</h1>
        <div className="aboutmeimg-outer" ref={imgOuterRef}>
          <div className="aboutme-img non-hover">
            <Image 
              src="/imgs/aboutme-img.jpeg" 
              alt="About Me" 
              width={300}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
      <div className="aboutme-left">
        <h1 className="aboutme-left-text-h1" ref={leftTitleRef}>
          Bringing websites to life, one pixel at a time.
        </h1>
        <p className="aboutme-left-text-p">
          <span ref={addToTextRefs}>
            I&apos;m a passionate web designer with over 50+ websites under my belt. I bring
            sites to life with clean, user-friendly interfaces and a knack for captivating animations. My toolbox
            overflows with expertise in JavaScript and its libraries, allowing me to push the boundaries of web
            design.
          </span> 
          <br /> <br />

          <span ref={addToTextRefs}>
            But my skills don&apos;t stop there. I&apos;m a tech enthusiast who thrives on learning and integrating the latest
            advancements. Whether it&apos;s video editing or exploring cutting-edge tools, I&apos;m always up for a
            challenge.
          </span>
          <br /> <br />

          <span ref={addToTextRefs}>
            I believe in the power of websites to not just look good, but to truly engage and connect with users.
            Let&apos;s collaborate and bring your vision to life!
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;