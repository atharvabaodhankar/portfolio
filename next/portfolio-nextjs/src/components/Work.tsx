import React from 'react'

const Work = () => {
  return (
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
          <li>Solapur, Maharashtra </li>
          <li>+91 9373924727</li>
          <li>baodhankaratharva@.gmail.com</li>
        </ul>
      </div>
      <div className="work-img non-hover">
        <img src="./imgs/navBar-img.jpg" alt="" />
      </div>
    </section>
  )
}

export default Work