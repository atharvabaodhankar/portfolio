import { useEffect } from 'react';

const Navbar = ({ navActive, setNavActive }) => {
  useEffect(() => {
    const handleNavClick = () => {
      setNavActive(false);
    };

    const navBtns = document.querySelectorAll(".nav-btn");
    navBtns.forEach((btn) => {
      btn.addEventListener("click", handleNavClick);
    });

    return () => {
      navBtns.forEach((btn) => {
        btn.removeEventListener("click", handleNavClick);
      });
    };
  }, [setNavActive]);

  const handleMenuClick = () => {
    setNavActive(true);
    
    if (window.gsap) {
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
    }
  };

  const handleCloseClick = () => {
    setNavActive(false);
  };

  return (
    <>
      <nav className={`nav non-hover ${navActive ? 'active' : ''}`}>
        <div className="nav-menu btn-underline" onClick={handleCloseClick}>
          Close
        </div>
        <div className="nav-img">
          <img className="img" src="/imgs/Web_Photo_Editor.jpg" alt="hero" />
        </div>
        <div className="nav-ul">
          <ul>
            <li><a className="nav-btn" href="#hero"><span>Home</span><span>Home</span></a></li>
            <li><a className="nav-btn" href="#aboutme"><span>AboutMe</span><span>AboutMe</span></a></li>
            <li><a className="nav-btn" href="#projects"><span>Projects</span><span>Projects</span></a></li>
            <li><a className="nav-btn" href="#work"><span>ContactMe</span><span>ContactMe</span></a></li>
          </ul>
        </div>
      </nav>
      <div className="navbar">
        <div className="logo">
          <a href="#hero" className="btn-underline non-hover">ATHARVA</a>
        </div>
        <div className="menu btn-underline non-hover" onClick={handleMenuClick}>
          Menu
        </div>
      </div>
    </>
  );
};

export default Navbar;