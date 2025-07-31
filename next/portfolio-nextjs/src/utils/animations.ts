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

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};