import { useEffect, useRef, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Skills from './components/Skills'
import Created from './components/Created'
import AboutMe from './components/AboutMe'
import Ferro from './components/Ferro'
import Projects from './components/Projects'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [navActive, setNavActive] = useState(false)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    if (window.Lenis) {
      const lenis = new window.Lenis({
        lerp: 0.05,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Initialize GSAP ScrollTrigger
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }

    // Initialize VanillaTilt
    if (window.VanillaTilt) {
      window.VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
    }

    // Navbar scroll behavior
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

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onComplete={handleLoadingComplete} />}
      <section id="main">
        <Navbar navActive={navActive} setNavActive={setNavActive} />
        <Hero />
        <AboutMe />
        <Marquee />
        <Skills />
        <Created />
        <Ferro />
        <Projects />
        <Work />
        <Footer />
      </section>
    </>
  )
}

export default App