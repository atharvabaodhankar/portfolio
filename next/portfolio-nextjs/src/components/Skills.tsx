'use client';

import Image from 'next/image';

export default function Skills() {
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

  return (
    <section id="skills">
      <div className="skills-left">
        <h1>Skills & <br /> Expertise</h1>
        <div className="skills-img non-hover">
          <Image 
            src="/imgs/skills.png" 
            alt="skills" 
            width={500}
            height={250}
          />
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