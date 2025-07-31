'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const { gsap } = require('gsap');

    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav");
    const closeBtn = document.querySelector(".nav-menu");
    const navBtns = document.querySelectorAll(".nav-btn");

    const handleMenuClick = () => {
      setIsNavOpen(true);
      nav?.classList.add("active");
      
      gsap.from(".nav-img", {
        opacity: 0,
        xPercent: -100,
        duration: 2,
        ease: "power4.inOut",
      });

      gsap.from(".nav-ul li a", {
        opacity: 0,
        skewY: 60,
        yPercent: -360,
        stagger: 0.2,
        duration: 1,
        ease: "easeIn",
      });
    };

    const handleCloseClick = () => {
      setIsNavOpen(false);
      nav?.classList.remove("active");
    };

    navBtns.forEach((btn) => {
      btn.addEventListener("click", handleCloseClick);
    });

    menu?.addEventListener("click", handleMenuClick);
    closeBtn?.addEventListener("click", handleCloseClick);

    return () => {
      menu?.removeEventListener("click", handleMenuClick);
      closeBtn?.removeEventListener("click", handleCloseClick);
      navBtns.forEach((btn) => {
        btn.removeEventListener("click", handleCloseClick);
      });
    };
  }, []);

  return (
    <>
      <nav className={`nav ${isNavOpen ? 'active' : ''}`}>
        <div className="nav-menu btn-underline">
          Close
        </div>
        <div className="nav-img">
          <Image 
            className="img" 
            src="/imgs/Web_Photo_Editor.jpg" 
            alt="hero" 
            width={800}
            height={600}
          />
        </div>
        <div className="nav-ul">
          <ul>
            <li><a className="nav-btn" href="#hero"><span>Home</span><span>Home</span></a></li>
            <li><a className="nav-btn" href="#aboutme"><span>AboutMe</span><span>AboutMe</span></a></li>
            <li><a className="nav-btn" href="#projects"><span>Projects</span><span>Projects</span></a></li>
            <li><a className="nav-btn" href="#work"><span>ContactMe</span><span>ContactMe</span></a></li>
          </ul>
        </div>
      </nav>
      <div className="navbar">
        <div className="logo">
          <a href="#hero" className="btn-underline non-hover">ATHARVA</a>
        </div>
        <div className="menu btn-underline non-hover">
          Menu
        </div>
      </div>
    </>
  );
}