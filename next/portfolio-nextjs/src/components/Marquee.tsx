'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Marquee() {
  useEffect(() => {
    const { gsap } = require('gsap');

    let currentScroll = 0;
    let isScrollingDown = true;
    const arrows = document.querySelectorAll(".arrow");

    const tween = gsap
      .to(".marquee_part", {
        xPercent: -100,
        repeat: -1,
        duration: 5,
        ease: "linear",
      })
      .totalProgress(0.5);
    
    gsap.set(".marquee_inner", { xPercent: -50 });

    const handleScroll = () => {
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }
      
      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      arrows.forEach((arrow) => {
        if (isScrollingDown) {
          arrow.classList.remove("active");
        } else {
          arrow.classList.add("active");
        }
      });

      currentScroll = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="marquee">
      <div className="marquee_inner">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="marquee_part">
            modern web designs
            <div className="arrow">
              <Image src="/arrow.svg" alt="" width={80} height={60} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}