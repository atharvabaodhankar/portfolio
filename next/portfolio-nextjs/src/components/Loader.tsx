'use client';

import { useEffect } from 'react';

export default function Loader() {
  useEffect(() => {
    const loadingAnimation = () => {
      const { gsap } = require('gsap');
      
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            const loadingElement = document.querySelector(".loading");
            const loader = document.querySelector("#loader");
            if (loadingElement) {
              loadingElement.remove();
              loader?.remove();
            }
          }, 500);
        },
      });
      
      tl.from(".loading", {
        yPercent: 100,
        ease: "power3.inOut",
        duration: 1,
      });
      
      tl.from(
        ".loading-text h1 span",
        {
          duration: 0.6,
          delay: -0.3,
          y: 130,
          skewY: 10,
          stagger: 0.4,
          ease: "Power3.easeOut",
        },
        "loader-same"
      );
      
      tl.from(
        ".loader-box",
        {
          rotate: -360,
          scale: 4,
          duration: 2,
          ease: "ease",
        },
        "loader-same"
      );
    };

    const entranceAnimation = () => {
      const { gsap } = require('gsap');
      const tl = gsap.timeline();
      tl.to(".loading", {
        yPercent: -100,
        duration: 1.25,
        ease: "power4.inOut",
      });
    };

    const images = document.querySelectorAll("img");
    let loadedCount = 0;
    const minPreloaderTime = 2000;
    let allImagesLoaded = false;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        allImagesLoaded = true;
        checkAndRunEntranceAnimation();
      }
    };

    const checkAndRunEntranceAnimation = () => {
      if (allImagesLoaded && Date.now() - startTime >= minPreloaderTime) {
        entranceAnimation();
      }
    };

    loadingAnimation();

    const startTime = Date.now();

    setTimeout(() => {
      if (allImagesLoaded) {
        entranceAnimation();
        const { gsap } = require('gsap');
        gsap.to("#loader", {
          yPercent: -100,
          backgroundColor: "#EDECE7",
          duration: 1.5,
          ease: "power4.inOut",
        });
      }
    }, minPreloaderTime);

    for (const image of images) {
      if (image.complete) {
        handleImageLoad();
      } else {
        image.addEventListener("load", handleImageLoad);
      }
    }
  }, []);

  return (
    <>
      <section id="loader"></section>
      <div className="loading">
        <div className="loading-main">
          <div className="loader-box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="loading-text">
            <h1><span>Building &nbsp;</span></h1>
            <h1><span>your &nbsp;</span></h1>
            <h1><span>experience </span></h1>
            <h1><span>...</span></h1>
          </div>
        </div>
      </div>
    </>
  );
}