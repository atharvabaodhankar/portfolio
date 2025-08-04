import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [navActive, setNavActive] = useState(false)

  useEffect(() => {
    // Wait a bit for all scripts to load
    setTimeout(() => {
      if (!window.gsap || !window.ScrollTrigger || !window.Lenis || !window.Swiper) {
        console.log('Libraries not loaded yet');
        return;
      }

      // EXACT COPY OF YOUR SCRIPT.JS
      const lenis = new window.Lenis({
        lerp: 0.05,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Register ScrollTrigger
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Navbar
      let lastScroll = 0;
      window.addEventListener("scroll", () => {
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
      });

      // Marquee
      function marquee() {
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

        window.addEventListener("scroll", () => {
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
        });
      }

      // Skills
      function skillsSection() {
        let skillsTl = window.gsap.timeline({
          scrollTrigger: {
            trigger: "#skills",
            start: "40% 50%",
            end: "50% 50%",
            scrub: 2,
          },
        });

        skillsTl.to("#js", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#react", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#tw", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#mysql", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#bs", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#gs", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#solidity", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#node", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#express", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#python", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#jquery", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#supabase", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#firebase", { filter: "blur(0px)", opacity: 1 });
        skillsTl.to("#php", { filter: "blur(0px)", opacity: 1 });

        if (window.matchMedia("(min-width: 768px)").matches && window.Shery) {
          window.Shery.imageEffect(".skills-img", {
            style: 3,
            preset: "./presets/wigglewobble.json",
          });
        }

        window.gsap.from(".skills-left h1", {
          opacity: 0,
          yPercent: -100,
          duration: 2,
          ease: "easeIn",
          scrollTrigger: {
            trigger: "#skills",
            start: "40% 50%",
            end: "55% 50%",
            scrub: 2,
          },
        });
        
        window.gsap.from(".skills-img", {
          scale: 0.5,
          duration: 1.5,
          opacity: 0,
          ease: "easeIn",
          scrollTrigger: {
            trigger: "#skills",
            start: "0 50%",
            end: "50% 50%",
            scrub: 2,
          },
        });
      }

      // Created
      function createdSection() {
        if (window.matchMedia("(min-width: 768px)").matches) {
          if (window.Shery) {
            window.Shery.makeMagnet(".aboutme-img", {
              ease: "cubic-bezier(0.23, 1, 0.320, 1)",
              duration: 1,
            });

            if (window.Ferro) {
              window.Ferro.mouseFollower(1, "12px", true, ["h1", ".nav-btn", ".hero-hover", ".ferro-c1 p", ".ferro-btn"], 3);
            }

            window.Shery.imageEffect(".created-img", {
              style: 6,
              preset: "./presets/wigglewobble.json",
            });
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

      // Aboutme
      function aboutmeSection() {
        let aboutMeTl = window.gsap.timeline({
          scrollTrigger: {
            trigger: "#aboutme",
            start: "10% 50%",
            end: "50% 50%",
            scrub: 2,
          },
        });

        aboutMeTl.from(".aboutmeimg-outer", {
          opacity: 0,
          y: 100,
          ease: "ease",
        });

        aboutMeTl.from(".aboutme-right h1", {
          opacity: 0,
          x: -100,
          ease: "ease",
        });

        aboutMeTl.from(".aboutme-left-text-h1 ,.aboutme-left-text-p span", {
          opacity: 0,
          x: 100,
          stagger: 0.2,
          skewX: 40,
          ease: "ease",
        });
      }

      // Swiper and Project section
      function swiperSection() {
        const swiper = new window.Swiper(".swiper", {
          direction: "horizontal",
          loop: false,
          speed: 1500,
          slidesPerView: 4,
          spaceBetween: 60,
          parallax: true,
          centeredSlides: true,
          effect: "coverflow",
          coverflowEffect: {
            rotate: 40,
            slideShadows: true,
          },
          autoplay: {
            delay: 2000,
            pauseOnMouseEnter: true,
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 60 },
            600: { slidesPerView: 2, spaceBetween: 60 },
            1000: { slidesPerView: 3, spaceBetween: 60 },
            1400: { slidesPerView: 4, spaceBetween: 60 },
            2300: { slidesPerView: 5, spaceBetween: 60 },
            2900: { slidesPerView: 6, spaceBetween: 60 },
          },
        });
        
        window.gsap.from(".projects-header h1", {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          ease: "ease",
          scrollTrigger: {
            trigger: ".projects-header",
            start: "0% 80%",
            end: "40% 50%",
            scrub: 2,
          },
        });
        
        window.gsap.from(".project-article", {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          ease: "ease",
          scrollTrigger: {
            trigger: ".project-article",
            start: "0% 80%",
            end: "40% 50%",
            scrub: 2,
          },
        });
      }

      function projectSection() {
        if (window.matchMedia("(min-width: 768px)").matches) {
          window.gsap.fromTo(
            ".work-img img",
            { y: "-9vw" },
            { y: "9vw ", scrollTrigger: { trigger: ".work-img", scrub: 3 } }
          );
        } else {
          window.gsap.from(".work-img img", {
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
        
        window.gsap.from(".work-left h2 , .work-left h1", {
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
        
        window.gsap.from(".work-left ul li", {
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

      function footerSection() {
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

      function loaderSection() {
        function loadingAnimation() {
          const tl = window.gsap.timeline({
            onComplete: () => {
              setTimeout(() => {
                setIsLoading(false);
              }, 500);
            },
          });
          
          tl.from(".loading", {
            yPercent: 100,
            ease: "power3.inOut",
            duration: 1,
          });
          
          tl.from(".loading-text h1 span", {
            duration: 0.6,
            delay: -0.3,
            y: 130,
            skewY: 10,
            stagger: 0.4,
            ease: "Power3.easeOut",
          }, "loader-same");
          
          tl.from(".loader-box", {
            rotate: -360,
            scale: 4,
            duration: 2,
            ease: "ease",
          }, "loader-same");
        }

        const entranceAnimation = () => {
          const tl = window.gsap.timeline();
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
            window.gsap.to("#loader", {
              yPercent: -100,
              backgroundColor: "#EDECE7",
              duration: 1.5,
              ease: "power4.inOut",
            });
            setTimeout(heroLoad, 500);
          }
        }, minPreloaderTime);

        for (const image of images) {
          if (image.complete) {
            handleImageLoad();
          } else {
            image.addEventListener("load", handleImageLoad);
          }
        }
      }

      function heroLoad() {
        if (window.Shery) {
          window.Shery.makeMagnet(".hero-img , .logo", {
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            duration: 1,
          });
        }

        const heroTl = window.gsap.timeline();
        heroTl.from(".hero-img", {
          height: 0,
          scale: 0.8,
          ease: "elastic",
          duration: 3,
        }, "HeroH1H2");
        
        heroTl.from(".hero h1", {
          skewY: -10,
          delay: 1,
          opacity: 0,
        }, "HeroH1H2");
        
        heroTl.from(".hero h2", {
          skewY: -10,
          delay: 1.3,
          opacity: 0,
        }, "HeroH1H2");
        
        heroTl.from(".hero p", {
          y: 20,
          opacity: 0,
        });
      }

      function ferroSection() {
        window.gsap.to(".ferro-c1", {
          xPercent: -200,
          ease: "none",
          scrollTrigger: {
            scroller: "body",
            trigger: "#ferro",
            scrub: true,
            start: "top top",
            end: "+300% top",
            pin: true,
          },
        });

        if (window.Ferro) {
          window.Ferro.button(".ferro-btn", 0.5, "ease");
        }
      }

      // Initialize VanillaTilt
      if (window.VanillaTilt) {
        window.VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
      }

      // Function Calls - EXACTLY like your original
      loaderSection();
      marquee();
      skillsSection();
      createdSection();
      swiperSection();
      aboutmeSection();
      projectSection();
      footerSection();
      ferroSection();

    }, 1000); // Wait 1 second for all libraries to load
  }, []);

  const handleNavToggle = () => {
    setNavActive(!navActive);
    
    if (!navActive && window.gsap) {
      setTimeout(() => {
        window.gsap.from(".nav-img", {
          opacity: 0,
          xPercent: -100,
          duration: 2,
          ease: "power4.inOut",
        });

        window.gsap.from(".nav-ul li a", {
          opacity: 0,
          skewY: 60,
          yPercent: -360,
          stagger: 0.2,
          duration: 1,
          ease: "easeIn",
        });
      }, 100);
    }
  };

  const handleNavLinkClick = () => {
    setNavActive(false);
  };

  return (
    <>
      {isLoading && (
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
      )}
      
      <section id="main">
        <nav className={`nav ${navActive ? 'active' : ''} non-hover`}>
          <div className="nav-menu btn-underline" onClick={handleNavToggle}>
            Close
          </div>
          <div className="nav-img">
            <img className="img" src="/imgs/Web_Photo_Editor.jpg" alt="hero" />
          </div>
          <div className="nav-ul">
            <ul>
              <li><a className="nav-btn" href="#hero" onClick={handleNavLinkClick}><span>Home</span><span>Home</span></a></li>
              <li><a className="nav-btn" href="#aboutme" onClick={handleNavLinkClick}><span>AboutMe</span><span>AboutMe</span></a></li>
              <li><a className="nav-btn" href="#projects" onClick={handleNavLinkClick}><span>Projects</span><span>Projects</span></a></li>
              <li><a className="nav-btn" href="#work" onClick={handleNavLinkClick}><span>ContactMe</span><span>ContactMe</span></a></li>
            </ul>
          </div>
        </nav>
        
        <div className="navbar">
          <div className="logo">
            <a href="#hero" className="btn-underline non-hover">ATHARVA</a>
          </div>
          <div className="menu btn-underline non-hover" onClick={handleNavToggle}>
            Menu
          </div>
        </div> 
       
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
        
        <section id="aboutme">
          <div className="aboutme-right">
            <h1>About Me</h1>
            <div className="aboutmeimg-outer">
              <div className="aboutme-img non-hover">
                <img src="/imgs/aboutme-img.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div className="aboutme-left">
            <h1 className="aboutme-left-text-h1">Bringing websites to life, one pixel at a time.</h1>
            <p className="aboutme-left-text-p">
              <span>I'm a passionate web designer with over 50+ websites under my belt. I bring sites to life with clean, user-friendly interfaces and a knack for captivating animations. My toolbox overflows with expertise in JavaScript and its libraries, allowing me to push the boundaries of web design.</span>
              <br /><br />
              <span>But my skills don't stop there. I'm a tech enthusiast who thrives on learning and integrating the latest advancements. Whether it's video editing or exploring cutting-edge tools, I'm always up for a challenge.</span>
              <br /><br />
              <span>I believe in the power of websites to not just look good, but to truly engage and connect with users. Let's collaborate and bring your vision to life!</span>
            </p>
          </div>
        </section>
        
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
     
        <section id="skills">
          <div className="skills-left">
            <h1>Skills & <br /> Expertise</h1>
            <div className="skills-img non-hover">
              <img src="/imgs/skills.png" alt="" />
            </div>
          </div>
          <div className="skills-right">
            <span id="js">JAVASCRIPT</span>
            <span id="bs">BOOTSTRAP</span>
            <span id="tw">TAILWIND</span>
            <span id="gs">GSAP</span>
            <span id="mysql">MY SQL</span>
            <span id="solidity">SOLIDITY</span>
            <span id="react">REACT</span>
            <span id="node">NODE.JS</span>
            <span id="express">EXPRESS.JS</span>
            <span id="python">PYTHON</span>
            <span id="jquery">JQUERY</span>
            <span id="php">PHP</span>
            <span id="firebase">FIREBASE</span>
            <span id="supabase">SUPABASE</span>
          </div>
        </section>
        
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
        
        <section id="ferro">
          <div className="ferro-header">
            <h1>&nbsp;</h1>
          </div>
          <div className="ferro-container">
            <div className="ferro-c1 ferro-section-1">
              <div className="ferro-section-1-text">
                <h1 className="ferro-h1">What is Ferro.Js?</h1>
                <h2 className="ferro-h2">A Dynamic JavaScript Animation Library</h2>
              </div>
            </div>
            <div className="ferro-c1 ferro-section-2">
              <div className="ferro-img">
                <img src="/imgs/ferro.png" data-tilt data-tilt-full-page-listening alt="" />
              </div>
              <p>Ferro.js is a versatile JavaScript library I developed to enhance web design with engaging, interactive animations. Built on top of the powerful GSAP (GreenSock Animation Platform), Ferro.js offers a suite of customizable effects designed to bring elements like headings, buttons, images, and more to life. Whether you're aiming for subtle animations or eye-catching interactions, Ferro.js provides the tools to create a unique user experience.</p>
            </div>
            <div className="ferro-c1 ferro-section-3">
              <div className="ferro-section-1-text">
                <h1 className="ferro-h1">Elevate Your Web Experience with Interactive Animations</h1>
                <a href="https://www.npmjs.com/package/ferro-js" className="ferro-btn">Visit NPM</a>
                <a href="https://github.com/atharvabaodhankar/ferro.js" className="ferro-btn">Visit GITHUB</a>
              </div>
            </div>
          </div>
        </section>       
 
        <section id="projects">
          <div className="projects-header">
            <h1>MY ART</h1>
          </div>
          <article className="project-article non-hover">
            <section className="sectionWrapper">
              <section className="swiper">
                <div className="parallax-bg" data-swiper-parallax="600" data-swiper-parallax-scale="0.85"></div>
                <div className="swiper-wrapper">
                  
                  <figure className="swiper-slide">
                    <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9"
                      data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">
                      <img src="/sites/shoetopia.png" alt="shoetopia" width="800" height="400" data-swiper-parallax="80"
                        data-swiper-parallax-duration="2000" />
                      <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                        Shoetopia
                      </h2>
                      <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
                        The revamped version of the classic
                      </h4>
                      <figcaption data-swiper-parallax="80" data-swiper-parallax-duration="1250">
                        <p>
                          Shoetopia is my project to help underfunded startups build legendary brands. We're a venture firm and digital agency offering both traditional payment and a venture partnership model where we invest and share in the success. This lets us help startups with great ideas overcome funding challenges.
                        </p>
                      </figcaption>
                      <a href="https://atharvabaodhankar.github.io/shoetopia/" target="_blank" title="Visit Now"
                        data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                        Visit Now
                      </a>
                    </div>
                  </figure>

                  <figure className="swiper-slide">
                    <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9"
                      data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">
                      <img src="/sites/wellhall.png" alt="wellhall" width="800" height="400" data-swiper-parallax="80"
                        data-swiper-parallax-duration="2000" />
                      <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                        Wellhall
                      </h2>
                      <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
                        The best place to be
                      </h4>
                      <figcaption data-swiper-parallax="80" data-swiper-parallax-duration="1250">
                        <p>
                          Welcome to your luxurious home away from home. Wellhall hotel is a luxurious hotel that offers a unique experience. We offer a range of services from luxurious rooms to a range of restaurants and a spa. We also offer a range of events and activities to keep you entertained.
                        </p>
                      </figcaption>
                      <a href="https://atharvabaodhankar.github.io/Wellhall/" target="_blank" title="Visit Now"
                        data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                        Visit Now
                      </a>
                    </div>
                  </figure>

                  <figure className="swiper-slide">
                    <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9"
                      data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">
                      <img src="/sites/rejouice.png" alt="rejouice" width="800" height="400" data-swiper-parallax="80"
                        data-swiper-parallax-duration="2000" />
                      <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                        Rejouice
                      </h2>
                      <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
                        The ultimate remake of the classic
                      </h4>
                      <figcaption data-swiper-parallax="80" data-swiper-parallax-duration="1250">
                        <p>
                          Want to build a legendary brand but unsure about funding? We've got you covered. We're a venture firm and digital agency duo, transforming visions into reality. Choose traditional pay or share in the success with our Venture Model - you decide! Let's make your brand dream a reality.
                        </p>
                      </figcaption>
                      <a href="https://atharvabaodhankar.github.io/rejouice" target="_blank" title="Visit Now"
                        data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                        Visit Now
                      </a>
                    </div>
                  </figure>

                </div>
              </section>
            </section>
          </article>
        </section>     
   
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
              <li>Solapur, Maharashtra</li>
              <li>+91 9373924727</li>
              <li>baodhankaratharva@gmail.com</li>
            </ul>
          </div>
          <div className="work-img non-hover">
            <img src="/imgs/navBar-img.jpg" alt="" />
          </div>
        </section>
        
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
      </section>
    </>
  )
}

export default App