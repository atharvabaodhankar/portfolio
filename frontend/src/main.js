import './style.css'

// Load external libraries dynamically
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// Load all required libraries
Promise.all([
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'),
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'),
  loadScript('https://unpkg.com/lenis@1.1.13/dist/lenis.min.js'),
  loadScript('https://unpkg.com/sheryjs/dist/Shery.js'),
  loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'),
  loadScript('https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js'),
  loadScript('https://cdn.jsdelivr.net/gh/atharvabaodhankar/ferro.js@master/ferro.js'),
  loadScript('/tilt.js')
]).then(() => {
  // Register ScrollTrigger plugin
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
  }
  
  // Initialize portfolio after all libraries are loaded
  initializePortfolio()
}).catch(error => {
  console.error('Failed to load libraries:', error)
  // Try to initialize anyway in case some libraries loaded
  setTimeout(initializePortfolio, 1000)
})



function initializePortfolio() {
  // Check if required libraries are loaded
  if (typeof gsap === 'undefined' || typeof Lenis === 'undefined') {
    console.log('Waiting for libraries to load...')
    setTimeout(initializePortfolio, 100)
    return
  }
  
  console.log('Initializing portfolio...')

  // Initialize Lenis smooth scrolling
  const lenis = new Lenis({
    lerp: 0.05,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  Ferro.mouseFollower(1, "12px", true, ["h1", ".nav-btn" , ".hero-hover" , ".ferro-c1 p",".ferro-btn",".menu"], 3);

  // Navbar functionality
  const menu = document.querySelector(".menu");
  var navbar = document.querySelector(".navbar");
  var lastScroll = 0;
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      document.body.classList.remove("scroll-down");
    }

    if (
      currentScroll > lastScroll &&
      !document.body.classList.contains("scroll-down")
    ) {
      {
        document.body.classList.add("scroll-down");
      }
    }

    if (
      currentScroll < lastScroll &&
      document.body.classList.contains("scroll-down")
    ) {
      document.body.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
  });

  var nav = document.querySelector(".nav");
  var closeBtn = document.querySelector(".nav-menu");
  var navBtns = document.querySelectorAll(".nav-btn");

  navBtns.forEach((ele) => {
    ele.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
  });

  menu.addEventListener("click", () => {
    nav.classList.add("active");
    gsap.from(".nav-img", {
      opacity: 0,
      xPercent: -100,
      duration: 2,
      ease: "power4.inOut",
    });

    gsap.from(".nav-ul li a", {
      opacity: 0,
      skewY: 60,
      yPercent: -360,
      stagger: 0.2,
      duration: 1,
      ease: "easeIn",
    });
  });

  Ferro.button(".ferro-btn", 0.5, "ease");

  // Initialize all sections
  marquee();
  skillsSection();
  createdSection();
  swiperSection();
  aboutmeSection();
  projectSection();
  footerSection();
  ferroSection();
  loaderSection();
}

// All the animation functions
function marquee() {
  let currentScroll = 0;
  let isScrollingDown = true;
  let arrows = document.querySelectorAll(".arrow");

  let tween = gsap
    .to(".marquee_part", {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: "linear",
    })
    .totalProgress(0.5);
  gsap.set(".marquee_inner", { xPercent: -50 });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > currentScroll) {
      isScrollingDown = true;
    } else {
      isScrollingDown = false;
    }
    gsap.to(tween, {
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

function skillsSection() {
  let skillsTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#skills",
      start: "40% 50%",
      end: "50% 50%",
      scrub: 2,
    },
  });

  skillsTl.to("#js", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#react", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#tw", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#mysql", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#bs", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#gs", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#solidity", {
    filter: "blur(0px)", 
    opacity: 1,
  });
  skillsTl.to("#node", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#express", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#python", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#jquery", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#supabase", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#firebase", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#php", {
    filter: "blur(0px)",
    opacity: 1,
  });

  gsap.from(".skills-left h1", {
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
  gsap.from(".skills-img", {
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

function createdSection() {
  gsap.from(".created-img", {
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
  gsap.from(".created h1", {
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
}

function aboutmeSection() {
  let aboutMeTl = gsap.timeline({
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

function swiperSection() {
  // Check if Swiper is loaded
  if (typeof Swiper === 'undefined') {
    setTimeout(swiperSection, 100)
    return
  }

  const swiper = new Swiper(".swiper", {
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
      0: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
      2300: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
      2900: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
    },
  });

  gsap.from(".projects-header h1", {
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
  gsap.from(".project-article", {
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

  gsap.from(".work-left h2 , .work-left h1", {
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

function footerSection() {
  gsap.from(".footer-left , .footer-right ", {
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

  gsap.from(".footer-text h2", {
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
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          const loadingElement = document.querySelector(".loading");
          const loader = document.querySelector("#loader");
          if (loadingElement) {
            loadingElement.remove();
            loader.remove();
          }
        }, 500);
      },
    });
    tl.from(".loading", {
      yPercent: 100,
      ease: "power3.inOut",
      duration: 1,
    });
    tl.from(
      ".loading-text h1 span",
      {
        duration: 0.6,
        delay: -0.3,
        y: 130,
        skewY: 10,
        stagger: 0.4,
        ease: "Power3.easeOut",
      },
      "loader-same"
    );
    tl.from(
      ".loader-box",
      {
        rotate: -360,
        scale: 4,
        duration: 2,
        ease: "ease",
      },
      "loader-same"
    );
  }

  const entranceAnimation = () => {
    const tl = gsap.timeline();
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
      gsap.to("#loader", {
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
  var heroTl = gsap.timeline();

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

function ferroSection() {
  gsap.to(".ferro-c1", {
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
  })
}