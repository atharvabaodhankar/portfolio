'use client';

import Image from 'next/image';

export default function AboutMe() {
  return (
    <section id="aboutme">
      <div className="aboutme-right">
        <h1>About Me</h1>
        <div className="aboutmeimg-outer">
          <div className="aboutme-img non-hover">
            <Image 
              src="/imgs/aboutme-img.jpeg" 
              alt="about me" 
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="aboutme-left">
        <h1 className="aboutme-left-text-h1">
          Bringing websites to life, one pixel at a time.
        </h1>
        <p className="aboutme-left-text-p">
          <span>
            I&apos;m a passionate web designer with over 50+ websites under my belt. I bring
            sites to life with clean, user-friendly interfaces and a knack for captivating animations. My toolbox
            overflows with expertise in JavaScript and its libraries, allowing me to push the boundaries of web
            design.
          </span> 
          <br /> <br />
          <span>
            But my skills don&apos;t stop there. I&apos;m a tech enthusiast who thrives on learning and integrating the latest
            advancements. Whether it&apos;s video editing or exploring cutting-edge tools, I&apos;m always up for a
            challenge.
          </span>
          <br /> <br />
          <span>
            I believe in the power of websites to not just look good, but to truly engage and connect with users.
            Let&apos;s collaborate and bring your vision to life!
          </span>
        </p>
      </div>
    </section>
  );
}