import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const initializeHero = () => {
      if (window.Shery) {
        window.Shery.makeMagnet(".hero-img , .logo", {
          ease: "cubic-bezier(0.23, 1, 0.320, 1)",
          duration: 1,
        });
      }

      if (window.gsap) {
        const heroTl = window.gsap.timeline();

        heroTl.from(
          ".hero-img",
          {
            height: 0,
            scale: 0.8,
            ease: "elastic",
            duration: 3,
          },
          "HeroH1H2"
        );
        
        heroTl.from(
          ".hero h1",
          {
            skewY: -10,
            delay: 1,
            opacity: 0,
          },
          "HeroH1H2"
        );
        
        heroTl.from(
          ".hero h2",
          {
            skewY: -10,
            delay: 1.3,
            opacity: 0,
          },
          "HeroH1H2"
        );
        
        heroTl.from(".hero p", {
          y: 20,
          opacity: 0,
        });
      }
    };

    // Delay initialization to ensure loader is complete
    setTimeout(initializeHero, 3000);
  }, []);

  return (
    <section id="hero">
      <div className="hero">
        <h1 className="hero-hover">ATHARVA</h1>
        <div className="hero-img non-hover">
          <img src="/imgs/hero-img.jpg" alt="hero" />
        </div>
        <h2 className="hero-hover">BAODHANKAR</h2>
        <p>Web Designer and Video Editor</p>
      </div>
    </section>
  );
};

export default Hero;