'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero">
        <h1 className="hero-hover">ATHARVA</h1>
        <div className="hero-img non-hover">
          <Image 
            src="/imgs/hero-img.jpg" 
            alt="hero" 
            width={400}
            height={300}
          />
        </div>
        <h2 className="hero-hover">BAODHANKAR</h2>
        <p>Web Designer and Video Editor</p>
      </div>
    </section>
  );
}