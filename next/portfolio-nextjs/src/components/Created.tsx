'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Created() {
  useEffect(() => {
    const { gsap } = require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');

    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(min-width: 768px)").matches) {
      gsap.from(".created-img", {
        opacity: 0,
        xPercent: -150,
        skewY: 10,
        duration: 2,
        ease: "ease",
        scrollTrigger: {
          trigger: "#created",
          start: "30% 50%",
          end: "55% 50%",
          scrub: 2,
        },
      });
      
      gsap.from(".created h1", {
        opacity: 0,
        xPercent: -100,
        skewY: 10,
        delay: 1,
        duration: 2,
        ease: "ease",
        scrollTrigger: {
          trigger: "#created",
          start: "30% 50%",
          end: "55% 50%",
          scrub: 2,
        },
      });
    } else {
      gsap.from(".created-img", {
        opacity: 0,
        skewY: 10,
        ease: "ease",
        scrollTrigger: {
          trigger: "#created",
          start: "30% 50%",
          end: "55% 50%",
          scrub: 2,
        },
      });
      
      gsap.from(".created h1", {
        opacity: 0,
        y: 100,
        skewY: 10,
        ease: "ease",
        scrollTrigger: {
          trigger: "#created",
          start: "30% 50%",
          end: "55% 50%",
          scrub: 2,
        },
      });
    }
  }, []);

  return (
    <section id="created">
      <div className="created">
        <h1>
          I WAS <br /> 
          <span>CODED</span>
          <div className="created-img-1 created-img">
            <Image src="/imgs/created-img-1.jpg" alt="" width={250} height={100} />
          </div>
          <br />
          <div className="created-img-2 created-img">
            <Image src="/imgs/created-img-2.png" alt="" width={250} height={100} />
          </div>
          TO <span>DESIGN</span>
        </h1>
      </div>
    </section>
  );
}