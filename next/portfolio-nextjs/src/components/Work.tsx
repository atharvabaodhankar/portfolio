import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Work = () => {
  const workRef = useRef<HTMLElement>(null)
  const workImgRef = useRef<HTMLDivElement>(null)
  const workLeftRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)

      const ctx = gsap.context(() => {
        // Set initial states to prevent flash
        gsap.set('.work-left h2, .work-left h1', { opacity: 0, y: 100, skewX: 10 })
        gsap.set('.work-left ul li', { opacity: 0, x: 100 })
        gsap.set('.work-img img', { opacity: 0, rotate: 10, y: 10, skewY: -10 })

        // Different animations for desktop and mobile
        if (window.matchMedia("(min-width: 768px)").matches) {
          // Desktop parallax effect
          gsap.set('.work-img img', { opacity: 1, rotate: 0, y: "-9vw", skewY: 0 })
          gsap.fromTo(
            ".work-img img",
            { y: "-9vw" },
            { 
              y: "9vw", 
              scrollTrigger: { 
                trigger: ".work-img", 
                scrub: 3,
                start: "top bottom",
                end: "bottom top"
              } 
            }
          )
        } else {
          // Mobile entrance animation
          gsap.to(".work-img img", {
            opacity: 1,
            rotate: 0,
            y: 0,
            skewY: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".work-img",
              start: "0% 60%",
              end: "20% 60%",
              scrub: 2,
            },
          })
        }

        // Animate headings
        gsap.to(".work-left h2, .work-left h1", {
          opacity: 1,
          stagger: 0.1,
          y: 0,
          skewX: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".work-left",
            start: "0% 80%",
            end: "30% 80%",
            scrub: 2,
          },
        })

        // Animate list items
        gsap.to(".work-left ul li", {
          opacity: 1,
          stagger: 0.1,
          x: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".work-left",
            start: "0% 50%",
            end: "20% 50%",
            scrub: 2,
          },
        })

      }, workRef)

      return () => {
        ctx.revert()
      }
    }
  }, [])
  return (
    <section id="work" ref={workRef}>
      <div className="work-left" ref={workLeftRef}>
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
      <div className="work-img non-hover" ref={workImgRef}>
        <img src="./imgs/navBar-img.jpg" alt="" />
      </div>
    </section>
  )
}

export default Work