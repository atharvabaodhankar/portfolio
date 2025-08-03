import { useEffect } from 'react';

const Created = () => {
  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        if (window.Shery) {
          window.Shery.makeMagnet(".aboutme-img", {
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            duration: 1,
          });

          window.Shery.imageEffect(".created-img", {
            style: 6,
            preset: "./presets/wigglewobble.json",
          });
        }

        if (window.Ferro) {
          window.Ferro.mouseFollower(1, "12px", true, ["h1", ".nav-btn", ".hero-hover", ".ferro-c1 p", ".ferro-btn"], 3);
        }

        window.gsap.from(".created-img", {
          opacity: 0,
          xPercent: -150,
          skewY: 10,
          duration: 2,
          ease: "ease",
          scrollTrigger: {
            trigger: "#created",
            start: "30% 50%",
            end: "55% 50%",
            scrub: 2,
          },
        });
        
        window.gsap.from(".created h1", {
          opacity: 0,
          xPercent: -100,
          skewY: 10,
          delay: 1,
          duration: 2,
          ease: "ease",
          scrollTrigger: {
            trigger: "#created",
            start: "30% 50%",
            end: "55% 50%",
            scrub: 2,
          },
        });
      } else {
        window.gsap.from(".created-img", {
          opacity: 0,
          skewY: 10,
          ease: "ease",
          scrollTrigger: {
            trigger: "#created",
            start: "30% 50%",
            end: "55% 50%",
            scrub: 2,
          },
        });
        
        window.gsap.from(".created h1", {
          opacity: 0,
          y: 100,
          skewY: 10,
          ease: "ease",
          scrollTrigger: {
            trigger: "#created",
            start: "30% 50%",
            end: "55% 50%",
            scrub: 2,
          },
        });
      }
    }
  }, []);

  return (
    <section id="created">
      <div className="created">
        <h1>I WAS <br /> <span>CODED</span>
          <div className="created-img-1 created-img">
            <img src="/imgs/created-img-1.jpg" alt="" />
          </div>
          <br />
          <div className="created-img-2 created-img">
            <img src="/imgs/created-img-2.png" alt="" />
          </div>
          TO <span>DESIGN</span>
        </h1>
      </div>
    </section>
  );
};

export default Created;