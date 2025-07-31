'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Skills() {
  useEffect(() => {
    const { gsap } = require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');

    gsap.registerPlugin(ScrollTrigger);

    const skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "40% 50%",
        end: "50% 50%",
        scrub: 2,
      },
    });

    const skills = [
      "#js", "#react", "#tw", "#mysql", "#bs", "#gs", "#solidity",
      "#node", "#express", "#python", "#jquery", "#supabase", "#firebase", "#php"
    ];

    skills.forEach(skill => {
      skillsTl.to(skill, {
        filter: "blur(0px)",
        opacity: 1,
      });
    });

    gsap.from(".skills-left h1", {
      opacity: 0,
      yPercent: -100,
      duration: 2,
      ease: "easeIn",
      scrollTrigger: {
        trigger: "#skills",
        start: "40% 50%",
        end: "55% 50%",
        scrub: 2,
      },
    });

    gsap.from(".skills-img", {
      scale: 0.5,
      duration: 1.5,
      opacity: 0,
      ease: "easeIn",
      scrollTrigger: {
        trigger: "#skills",
        start: "0 50%",
        end: "50% 50%",
        scrub: 2,
      },
    });
  }, []);

  const skills = [
    { id: "js", name: "JAVASCRIPT" },
    { id: "bs", name: "BOOTSTRAP" },
    { id: "tw", name: "TAILWIND" },
    { id: "gs", name: "GSAP" },
    { id: "mysql", name: "MY SQL" },
    { id: "solidity", name: "SOLIDITY" },
    { id: "react", name: "REACT" },
    { id: "node", name: "NODE.JS" },
    { id: "express", name: "EXPRESS.JS" },
    { id: "python", name: "PYTHON" },
    { id: "jquery", name: "JQUERY" },
    { id: "php", name: "PHP" },
    { id: "firebase", name: "FIREBASE" },
    { id: "supabase", name: "SUPABASE" },
  ];

  return (
    <section id="skills">
      <div className="skills-left">
        <h1>Skills & <br /> Expertise</h1>
        <div className="skills-img non-hover">
          <Image src="/imgs/skills.png" alt="" width={500} height={250} />
        </div>
      </div>
      <div className="skills-right">
        {skills.map((skill) => (
          <span key={skill.id} id={skill.id}>
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}