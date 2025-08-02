export const initializeAnimations = async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  const { Lenis } = await import('lenis');

  gsap.registerPlugin(ScrollTrigger);

  // Initialize Lenis smooth scrolling
  const lenis = new Lenis({
    lerp: 0.05,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Navbar scroll behavior
  let lastScroll = 0;
  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      document.body.classList.remove("scroll-down");
    }

    if (currentScroll > lastScroll && !document.body.classList.contains("scroll-down")) {
      document.body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && document.body.classList.contains("scroll-down")) {
      document.body.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);

  // Work section animations
  const initWorkAnimations = () => {
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

  // Initialize work animations after a short delay to ensure DOM is ready
  setTimeout(initWorkAnimations, 100);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    ScrollTrigger.killAll();
  };
};