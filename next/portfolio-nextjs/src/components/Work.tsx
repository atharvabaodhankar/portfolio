'use client';

import Image from 'next/image';

export default function Work() {
  return (
    <section id="work">
      <div className="work-left">
        <h2>Let&apos;s work together</h2>
        <h1>Contact Me</h1>
        <ul className="social-media-list">
          <li>
            <a href="https://www.instagram.com/atharva_baodhankar/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/atharva-baodhankar/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/atharvabaodhankar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/atharva_baodh" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="mailto:atharvab2005@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="work-img">
        <Image 
          src="/imgs/navBar-img.jpg" 
          alt="contact" 
          width={400}
          height={500}
        />
      </div>
    </section>
  );
}