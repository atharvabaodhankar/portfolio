'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/hooks/useGSAP';
import Image from 'next/image';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navImgRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        document.body.classList.remove("scroll-down");
      }

      if (
        currentScroll > lastScroll &&
        !document.body.classList.contains("scroll-down")
      ) {
        document.body.classList.add("scroll-down");
      }

      if (
        currentScroll < lastScroll &&
        document.body.classList.contains("scroll-down")
      ) {
        document.body.classList.remove("scroll-down");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openNav = () => {
    if (typeof window === 'undefined') return;
    
    setIsNavOpen(true);
    if (navRef.current) {
      navRef.current.classList.add("active");
    }

    // Set initial states
    gsap.set(navImgRef.current, { opacity: 0, x: "-100%" });
    gsap.set(navLinksRef.current, { opacity: 0, skewY: 60, y: "-100%" });

    // Animate in
    gsap.to(navImgRef.current, {
      opacity: 1,
      x: "0%",
      duration: 1.5,
      ease: "power4.inOut",
    });

    gsap.to(navLinksRef.current, {
      opacity: 1,
      skewY: 0,
      y: "0%",
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
    });
  };

  const closeNav = () => {
    setIsNavOpen(false);
    if (navRef.current) {
      navRef.current.classList.remove("active");
    }
  };

  const handleNavClick = (href: string) => {
    closeNav();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToNavRefs = (el: HTMLAnchorElement | null) => {
    if (el && !navLinksRef.current.includes(el)) {
      navLinksRef.current.push(el);
    }
  };

  return (
    <>
      <div className="navbar" ref={navbarRef}>
        <div className="logo">
          <a href="#hero" className="btn-underline non-hover">ATHARVA</a>
        </div>
        <div className="menu btn-underline non-hover" onClick={openNav}>
          Menu
        </div>
      </div>

      <nav className="nav non-hover" ref={navRef}>
        <div className="nav-menu btn-underline" onClick={closeNav}>
          Close
        </div>
        <div className="nav-img" ref={navImgRef}>
          <Image 
            className="img" 
            src="/imgs/Web_Photo_Editor.jpg" 
            alt="hero" 
            width={500}
            height={600}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <div className="nav-ul">
          <ul>
            <li>
              <a 
                className="nav-btn" 
                href="#hero" 
                ref={addToNavRefs}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#hero');
                }}
              >
                <span>Home</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a 
                className="nav-btn" 
                href="#aboutme" 
                ref={addToNavRefs}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#aboutme');
                }}
              >
                <span>AboutMe</span>
                <span>AboutMe</span>
              </a>
            </li>
            <li>
              <a 
                className="nav-btn" 
                href="#projects" 
                ref={addToNavRefs}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#projects');
                }}
              >
                <span>Projects</span>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a 
                className="nav-btn" 
                href="#work" 
                ref={addToNavRefs}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#work');
                }}
              >
                <span>ContactMe</span>
                <span>ContactMe</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;