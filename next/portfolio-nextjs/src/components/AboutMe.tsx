"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGSAP";
import Image from "next/image";

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgOuterRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftTitleRef = useRef<HTMLHeadingElement>(null);
  const textSpansRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    const imgOuter = imgOuterRef.current;
    const title = titleRef.current;
    const leftTitle = leftTitleRef.current;

    if (!section || !imgOuter || !title || !leftTitle) return;

    // Set initial states
    gsap.set([imgOuter, title, leftTitle, ...textSpansRef.current], {
      opacity: 0,
    });
    gsap.set(imgOuter, { y: 100 });
    gsap.set(title, { x: -100 });
    gsap.set([leftTitle, ...textSpansRef.current], { x: 100, skewX: 20 });

    const aboutMeTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "10% 80%",
        end: "60% 50%",
        scrub: 1,
      },
    });

    aboutMeTl.to(
      imgOuter,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      0
    );

    aboutMeTl.to(
      title,
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      },
      0.2
    );

    aboutMeTl.to(
      [leftTitle, ...textSpansRef.current],
      {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      },
      0.4
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
            I&apos;m a passionate web designer with over 50+ websites under my
            belt. I bring sites to life with clean, user-friendly interfaces and
            a knack for captivating animations. My toolbox overflows with
            expertise in JavaScript and its libraries, allowing me to push the
            boundaries of web design.
          </span>
          <br /> <br />
          <span ref={addToTextRefs}>
            But my skills don&apos;t stop there. I&apos;m a tech enthusiast who
            thrives on learning and integrating the latest advancements. Whether
            it&apos;s video editing or exploring cutting-edge tools, I&apos;m
            always up for a challenge.
          </span>
          <br /> <br />
          <span ref={addToTextRefs}>
            I believe in the power of websites to not just look good, but to
            truly engage and connect with users. Let&apos;s collaborate and
            bring your vision to life!
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
