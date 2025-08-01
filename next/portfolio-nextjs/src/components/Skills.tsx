'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLSpanElement[]>([]);

  const skills = [
    { id: 'js', name: 'JAVASCRIPT' },
    { id: 'bs', name: 'BOOTSTRAP' },
    { id: 'tw', name: 'TAILWIND' },
    { id: 'gs', name: 'GSAP' },
    { id: 'mysql', name: 'MY SQL' },
    { id: 'solidity', name: 'SOLIDITY' },
    { id: 'react', name: 'REACT' },
    { id: 'node', name: 'NODE.JS' },
    { id: 'express', name: 'EXPRESS.JS' },
    { id: 'python', name: 'PYTHON' },
    { id: 'jquery', name: 'JQUERY' },
    { id: 'php', name: 'PHP' },
    { id: 'firebase', name: 'FIREBASE' },
    { id: 'supabase', name: 'SUPABASE' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const img = imgRef.current;

    if (!section || !title || !img) return;

    // Skills animation timeline
    const skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "40% 50%",
        end: "50% 50%",
        scrub: 2,
      },
    });

    // Animate skills one by one
    skills.forEach((skill, index) => {
      const skillElement = document.getElementById(skill.id);
      if (skillElement) {
        skillsTl.to(skillElement, {
          filter: "blur(0px)",
          opacity: 1,
        }, index * 0.1);
      }
    });

    // Title animation
    gsap.from(title, {
      opacity: 0,
      yPercent: -100,
      duration: 2,
      ease: "easeIn",
      scrollTrigger: {
        trigger: section,
        start: "40% 50%",
        end: "55% 50%",
        scrub: 2,
      },
    });

    // Image animation
    gsap.from(img, {
      scale: 0.5,
      duration: 1.5,
      opacity: 0,
      ease: "easeIn",
      scrollTrigger: {
        trigger: section,
        start: "0 50%",
        end: "50% 50%",
        scrub: 2,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToSkillsRefs = (el: HTMLSpanElement | null) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

  return (
    <section id="skills" ref={sectionRef}>
      <div className="skills-left">
        <h1 ref={titleRef}>Skills & <br /> Expertise</h1>
        <div className="skills-img non-hover" ref={imgRef}>
          <Image 
            src="/imgs/skills.png" 
            alt="Skills" 
            width={500}
            height={250}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </div>
      <div className="skills-right">
        {skills.map((skill) => (
          <span
            key={skill.id}
            id={skill.id}
            ref={addToSkillsRefs}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;