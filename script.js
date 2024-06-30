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
});

menu.addEventListener("click", () => {
  nav.classList.add("active");
});
