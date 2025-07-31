'use client';

import Image from 'next/image';

export default function Ferro() {
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
              data-tilt 
              data-tilt-full-page-listening 
              alt="ferro" 
              width={400}
              height={300}
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