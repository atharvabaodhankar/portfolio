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
// const cursor = new MouseFollower();

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
    delay : 1,
    opacity: 0,
  },
  "HeroH1H2"
);
heroTl.from(
  ".hero h2",
  {
    skewY: -10,
    delay : 1.3,
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
    if (currentScroll <= 0)
    {
        document.body.classList.remove("scroll-down");
    }

    if (currentScroll > lastScroll && !document.body.classList.contains("scroll-down")) {
        {
            document.body.classList.add("scroll-down");
        }
    }

    if (currentScroll < lastScroll && document.body.classList.contains("scroll-down")) 
    {
        document.body.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
    
    
})
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
    ease : "easeIn",
  })

  gsap.from(".nav-ul li a", {
    opacity: 0,
    skewY : 60,
    yPercent: -360,
    stagger: 0.2,
    duration: 1,
    ease : "easeIn",
  })
});

function marquee()
{
  let currentScroll = 0;
  let isScrollingDown = true;
  let arrows = document.querySelectorAll(".arrow");

  let tween = gsap.to(".marquee_part", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease : "linear"
  })
    .totalProgress(0.5);
  gsap.set(".marquee_inner", { xPercent: -50 });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > currentScroll)
    {
      isScrollingDown = true;
    }
    else
    {
      isScrollingDown = false;
    }
    gsap.to(tween, {
      timeScale: isScrollingDown ? 1 : -1
    });

    arrows.forEach((arrow) => {
      if (isScrollingDown)
      {
        arrow.classList.remove("active");
      }
      else
      {
        arrow.classList.add("active");
        }
    })
   

    currentScroll = window.pageYOffset;

  })
}

marquee()



