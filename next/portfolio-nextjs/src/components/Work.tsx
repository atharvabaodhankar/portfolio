import React, { useEffect } from 'react'

const Work = () => {
  useEffect(() => {
    const initWorkAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      // Check if elements exist before animating
      const workImg = document.querySelector('.work-img img');
      const workLeft = document.querySelector('.work-left');
      const workHeadings = document.querySelectorAll('.work-left h2, .work-left h1');
      const workListItems = document.querySelectorAll('.work-left ul li');

      if (workImg && workLeft) {
        // Different animations for desktop and mobile
        if (window.matchMedia("(min-width: 768px)").matches) {
          gsap.fromTo(
            ".work-img img",
            { y: "-9vw" },
            { 
              y: "9vw", 
              scrollTrigger: { 
                trigger: ".work-img", 
                scrub: 3 
              } 
            }
          );
        } else {
          gsap.from(".work-img img", {
            opacity: 0,
            rotate: 10,
            y: 10,
            skewY: -10,
            ease: "ease",
            scrollTrigger: {
              trigger: ".work-img",
              start: "0% 60%",
              end: "20% 60%",
              scrub: 2,
            },
          });
        }

        // Animate headings
        if (workHeadings.length > 0) {
          gsap.from(".work-left h2, .work-left h1", {
            opacity: 0,
            stagger: 0.1,
            y: 100,
            skewX: 10,
            ease: "ease",
            scrollTrigger: {
              trigger: ".work-left",
              start: "0% 80%",
              end: "30% 80%",
              scrub: 2,
            },
          });
        }

        // Animate list items
        if (workListItems.length > 0) {
          gsap.from(".work-left ul li", {
            opacity: 0,
            stagger: 0.1,
            x: 100,
            ease: "ease",
            scrollTrigger: {
              trigger: ".work-left",
              start: "0% 50%",
              end: "20% 50%",
              scrub: 2,
            },
          });
        }
      }
    };

    initWorkAnimations();

    return () => {
      // Cleanup ScrollTrigger instances
      const { ScrollTrigger } = require('gsap/ScrollTrigger');
      ScrollTrigger.getAll().forEach((trigger: any) => {
        if (trigger.trigger && (
          trigger.trigger.classList?.contains('work-img') || 
          trigger.trigger.classList?.contains('work-left')
        )) {
          trigger.kill();
        }
      });
    };
  }, []);
  return (
    <section id="work">
      <div className="work-left">
        <h2>Atharva Baodhankar</h2>
        <h1>WORK <br /> WITH ME</h1>

        <div className="social-media-list">
          <a href="https://github.com/atharvabaodhankar" target="_blank" className="contact-icon">
            <li>
              <i className="fa-brands fa-github"></i>
            </li>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100069517304222" target="_blank" className="contact-icon">
            <li>
              <i className="fa-brands fa-facebook-f"></i>
            </li>
          </a>

          <a href="https://www.instagram.com/op_athu_/" target="_blank" className="contact-icon">
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
          </a>
          
          <a href="https://www.linkedin.com/in/atharva-baodhankar" target="_blank" className="contact-icon">
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
          </a>
        </div>

        <ul>
          <li>Solapur, Maharashtra </li>
          <li>+91 9373924727</li>
          <li>baodhankaratharva@.gmail.com</li>
        </ul>
      </div>
      <div className="work-img non-hover">
        <img src="./imgs/navBar-img.jpg" alt="" />
      </div>
    </section>
  )
}

export default Work