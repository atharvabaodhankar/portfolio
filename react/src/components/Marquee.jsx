import { useEffect } from 'react';

const Marquee = () => {
  useEffect(() => {
    if (window.gsap) {
      let currentScroll = 0;
      let isScrollingDown = true;
      let arrows = document.querySelectorAll(".arrow");

      let tween = window.gsap
        .to(".marquee_part", {
          xPercent: -100,
          repeat: -1,
          duration: 5,
          ease: "linear",
        })
        .totalProgress(0.5);
      
      window.gsap.set(".marquee_inner", { xPercent: -50 });

      const handleScroll = () => {
        if (window.pageYOffset > currentScroll) {
          isScrollingDown = true;
        } else {
          isScrollingDown = false;
        }
        
        window.gsap.to(tween, {
          timeScale: isScrollingDown ? 1 : -1,
        });

        arrows.forEach((arrow) => {
          if (isScrollingDown) {
            arrow.classList.remove("active");
          } else {
            arrow.classList.add("active");
          }
        });

        currentScroll = window.pageYOffset;
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <section id="marquee">
      <div className="marquee_inner">
        <div className="marquee_part">
          modern web designs
          <div className="arrow">
            <img src="/arrow.svg" alt="" />
          </div>
        </div>
        <div className="marquee_part">
          modern web designs
          <div className="arrow">
            <img src="/arrow.svg" alt="" />
          </div>
        </div>
        <div className="marquee_part">
          modern web designs
          <div className="arrow">
            <img src="/arrow.svg" alt="" />
          </div>
        </div>
        <div className="marquee_part">
          modern web designs
          <div className="arrow">
            <img src="/arrow.svg" alt="" />
          </div>
        </div>
        <div className="marquee_part">
          modern web designs
          <div className="arrow">
            <img src="/arrow.svg" alt="" />
          </div>
        </div>
        <div className="marquee_part">
          modern web designs
          <div className="arrow">
            <img src="/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;