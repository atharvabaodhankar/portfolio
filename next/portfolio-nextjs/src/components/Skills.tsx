'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/hooks/useGSAP';
import Image from 'next/image';

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
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    const title = titleRef.current;
    const img = imgRef.current;

    if (!section || !title || !img) return;

    // Set initial states for skills
    skills.forEach((skill) => {
      const skillElement = document.getElementById(skill.id);
      if (skillElement) {
        gsap.set(skillElement, { filter: "blur(10px)", opacity: 0 });
      }
    });

    // Skills animation timeline
    const skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "40% 80%",
        end: "60% 50%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const skillsToShow = Math.floor(progress * skills.length);
          
          skills.forEach((skill, index) => {
            const skillElement = document.getElementById(skill.id);
            if (skillElement && index <= skillsToShow) {
              gsap.to(skillElement, {
                filter: "blur(0px)",
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });
        }
      },
    });

    // Title animation
    gsap.fromTo(title, 
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "20% 80%",
          end: "40% 50%",
          scrub: 1,
        },
      }
    );

    // Image animation
    gsap.fromTo(img,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "10% 80%",
          end: "30% 50%",
          scrub: 1,
        },
      }
    );

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