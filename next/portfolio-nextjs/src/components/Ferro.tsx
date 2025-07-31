'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Ferro() {
  useEffect(() => {
    const { gsap } = require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".ferro-c1", {
      xPercent: -200,
      ease: "none",
      scrollTrigger: {
        scroller: "body",
        trigger: "#ferro",
        scrub: true,
        start: "top top",
        end: "+300% top",
        pin: true,
      },
    });
  }, []);

  return (
    <section id="ferro">
      <div className="ferro-header">
        <h1>&nbsp;</h1>
      </div>
      <div className="ferro-container">
        <div className="ferro-c1 ferro-section-1">
          <div className="ferro-section-1-text">
            <h1 className="ferro-h1">What is Ferro.Js?</h1>
            <h2 className="ferro-h2">A Dynamic JavaScript Animation Library</h2>
          </div>
        </div>
        <div className="ferro-c1 ferro-section-2">
          <div className="ferro-img">
            <Image 
              src="/imgs/ferro.png" 
              alt="" 
              width={600} 
              height={400}
              data-tilt 
              data-tilt-full-page-listening 
            />
          </div>
          <p>
            Ferro.js is a versatile JavaScript library I developed to enhance web design with engaging, interactive
            animations. Built on top of the powerful GSAP (GreenSock Animation Platform), Ferro.js offers a suite of
            customizable effects designed to bring elements like headings, buttons, images, and more to life. Whether
            you&apos;re aiming for subtle animations or eye-catching interactions, Ferro.js provides the tools to create a
            unique user experience.
          </p>
        </div>
        <div className="ferro-c1 ferro-section-3">
          <div className="ferro-section-1-text">
            <h1 className="ferro-h1">Elevate Your Web Experience with Interactive Animations</h1>
            <a href="https://www.npmjs.com/package/ferro-js" className="ferro-btn">Visit NPM</a>
            <a href="https://github.com/atharvabaodhankar/ferro.js" className="ferro-btn">Visit GITHUB</a>
          </div>
        </div>
      </div>
    </section>
  );
}