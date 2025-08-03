import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.from(".footer-left , .footer-right ", {
        yPercent: -100,
        opacity: 0.7,
        scrollTrigger: {
          scroller: "body",
          trigger: "#footer",
          scrub: 3,
          start: "top 80%",
          end: "40% 80%",
        },
      });

      window.gsap.from(".footer-text h2", {
        y: -100,
        opacity: 0,
        skewY: 10,
        ease: "ease",
        scrollTrigger: {
          scroller: "body",
          trigger: ".footer",
          scrub: 3,
          start: "40% 80%",
          end: "60% 80%",
        },
      });
    }
  }, []);

  return (
    <section id="footer" className="non-hover">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000" fillOpacity="1"
          d="M0,96L48,80C96,64,192,32,288,58.7C384,85,480,171,576,224C672,277,768,299,864,277.3C960,256,1056,192,1152,165.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
      <div className="footer">
        <div className="footer-left">
          <h1>Get in touch.</h1>
          <p>Crafting beautiful & engaging websites. Let's collaborate!</p>
          <a href="#work" className="capsule-btn"><span>Explore Now</span> <span>Explore Now</span></a>
        </div>
        <div className="footer-right">
          <ul>
            <li><a href="#hero" className="nav-btn">Home</a></li>
            <li><a href="#aboutme" className="nav-btn">AboutMe</a></li>
            <li><a href="#projects" className="nav-btn">Projects</a></li>
            <li><a href="#work" className="nav-btn">ContactMe</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-logo">
        <div className="footer-text">
          <h2>ATHARVA</h2>
          <h2>ATHARVA</h2>
        </div>
      </div>
    </section>
  );
};

export default Footer;