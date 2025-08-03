import { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      let skillsTl = window.gsap.timeline({
        scrollTrigger: {
          trigger: "#skills",
          start: "40% 50%",
          end: "50% 50%",
          scrub: 2,
        },
      });

      skillsTl.to("#js", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#react", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#tw", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#mysql", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#bs", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#gs", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#solidity", {
        filter: "blur(0px)", 
        opacity: 1,
      });
      skillsTl.to("#node", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#express", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#python", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#jquery", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#supabase", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#firebase", {
        filter: "blur(0px)",
        opacity: 1,
      });
      skillsTl.to("#php", {
        filter: "blur(0px)",
        opacity: 1,
      });

      if (window.matchMedia("(min-width: 768px)").matches && window.Shery) {
        window.Shery.imageEffect(".skills-img", {
          style: 3,
          preset: "./presets/wigglewobble.json",
        });
      }

      window.gsap.from(".skills-left h1", {
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
      
      window.gsap.from(".skills-img", {
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
    }
  }, []);

  return (
    <section id="skills">
      <div className="skills-left">
        <h1>Skills & <br /> Expertise</h1>
        <div className="skills-img non-hover">
          <img src="/imgs/skills.png" alt="" />
        </div>
      </div>
      <div className="skills-right">
        <span id="js">JAVASCRIPT</span>
        <span id="bs">BOOTSTRAP</span>
        <span id="tw">TAILWIND</span>
        <span id="gs">GSAP</span>
        <span id="mysql">MY SQL</span>
        <span id="solidity">SOLIDITY</span>
        <span id="react">REACT</span>
        <span id="node">NODE.JS</span>
        <span id="express">EXPRESS.JS</span>
        <span id="python">PYTHON</span>
        <span id="jquery">JQUERY</span>
        <span id="php">PHP</span>
        <span id="firebase">FIREBASE</span>
        <span id="supabase">SUPABASE</span>
      </div>
    </section>
  );
};

export default Skills;