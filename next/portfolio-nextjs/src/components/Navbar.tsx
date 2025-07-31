'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav className={`nav ${isNavOpen ? 'active' : ''} non-hover`}>
        <div className="nav-menu btn-underline" onClick={closeNav}>
          Close
        </div>
        <div className="nav-img">
          <Image 
            className="img" 
            src="/imgs/Web_Photo_Editor.jpg" 
            alt="hero" 
            width={500}
            height={600}
          />
        </div>
        <div className="nav-ul">
          <ul>
            <li>
              <a className="nav-btn" href="#hero" onClick={closeNav}>
                <span>Home</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a className="nav-btn" href="#aboutme" onClick={closeNav}>
                <span>AboutMe</span>
                <span>AboutMe</span>
              </a>
            </li>
            <li>
              <a className="nav-btn" href="#projects" onClick={closeNav}>
                <span>Projects</span>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a className="nav-btn" href="#work" onClick={closeNav}>
                <span>ContactMe</span>
                <span>ContactMe</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      <div className="navbar">
        <div className="logo">
          <a href="#hero" className="btn-underline non-hover">ATHARVA</a>
        </div>
        <div className="menu btn-underline non-hover" onClick={toggleNav}>
          Menu
        </div>
      </div>
    </>
  );
}