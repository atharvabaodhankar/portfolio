const lenis = new Lenis({
  lerp: 0.05,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

Shery.makeMagnet(".hero-img , .logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

var hero = document.querySelector("#hero");

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

// Navbar

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
var close = document.querySelector(".nav-menu");

close.addEventListener("click", () => {
  nav.classList.remove("active");
  let menuTl = gsap.timeline();
});

menu.addEventListener("click", () => {
  nav.classList.add("active");
  gsap.from(".nav-img", {
    opacity: 0,
    xPercent: -100,
    duration: 2,
    ease: "easeIn",
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

// Marquee

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

// Skills

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
  skillsTl.to("#api", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#css", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#tw", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#git", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#html", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#discord", {
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
  skillsTl.to("#ae", {
    filter: "blur(0px)",
    opacity: 1,
  });
  skillsTl.to("#gs", {
    filter: "blur(0px)",
    opacity: 1,
  });

  if (window.matchMedia("(min-width: 768px)").matches) {
    Shery.imageEffect(".skills-img", {
      style: 3,
      preset: "./presets/wigglewobble.json",
    });
  }

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

// Created

function createdSection() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    Shery.makeMagnet(".aboutme-img" /* Element to target.*/, {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });

    let cursor = new MouseFollower();
    let nonHover = document.querySelectorAll(".non-hover");

    nonHover.forEach((ele) => {
      ele.addEventListener("mouseenter", () => {
        cursor.hide();
      });
      ele.addEventListener("mouseleave", () => {
        cursor.show();
      });
    });

    Shery.imageEffect(".created-img", {
      style: 6,
      preset: "./presets/wigglewobble.json",
    });
    let el = document.querySelector(".created");
    el.addEventListener("mouseenter", () => {
      cursor.setImg("./photo1720331840.jpeg");
    });

    el.addEventListener("mouseleave", () => {
      cursor.removeImg();
    });

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
  } else {
    gsap.from(".created-img", {
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
    gsap.from(".created h1", {
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
    skewX : 40,
    ease: "ease",
  });
  
}

// Swiper

function swiperSection() {
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
      slideShadows: true
    },
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 60
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 60
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 60
      },
      2300: {
        slidesPerView: 5,
        spaceBetween: 60
      },
      2900: {
        slidesPerView: 6,
        spaceBetween: 60
      }
    }
  });
  
}

// Function Calls

marquee();
skillsSection();
createdSection();
swiperSection();





