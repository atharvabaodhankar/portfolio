'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Parallax } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/parallax';

export default function Projects() {
  useEffect(() => {
    const { gsap } = require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');

    gsap.registerPlugin(ScrollTrigger);

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
  }, []);

  const projects = [
    {
      image: "/sites/shoetopia.png",
      title: "Shoetopia",
      subtitle: "The revamped version of the classic",
      description: "Shoetopia is my project to help underfunded startups build legendary brands. We're a venture firm and digital agency offering both traditional payment and a venture partnership model where we invest and share in the success. This lets us help startups with great ideas overcome funding challenges.",
      link: "https://atharvabaodhankar.github.io/shoetopia/"
    },
    {
      image: "/sites/wellhall.png",
      title: "Wellhall",
      subtitle: "The best place to be",
      description: "Welcome to your luxurious home away from home. Wellhall hotel is a luxurious hotel that offers a unique experience. We offer a range of services from luxurious rooms to a range of restaurants and a spa. We also offer a range of events and activities to keep you entertained.",
      link: "https://atharvabaodhankar.github.io/Wellhall/"
    },
    {
      image: "/sites/BusinessEvent.png",
      title: "Business Event",
      subtitle: "The Event Organizers",
      description: "Business Event is a platform that helps you find the best event organizers for your business. We offer a range of services from event planning to event management. We also offer a range of events and activities to keep you entertained.",
      link: "https://atharvabaodhankar.github.io/BusinessEvent/"
    },
    {
      image: "/sites/rejouice.png",
      title: "Rejouice",
      subtitle: "The ultimate remake of the classic",
      description: "Want to build a legendary brand but unsure about funding? We've got you covered. We're a venture firm and digital agency duo, transforming visions into reality. Choose traditional pay or share in the success with our Venture Model - you decide! Let's make your brand dream a reality.",
      link: "https://atharvabaodhankar.github.io/rejouice"
    },
    {
      image: "/sites/polystudi.png",
      title: "Polystudi",
      subtitle: "Students Hub",
      description: "Polystudi is more than just a website, it's a movement. We're passionate about empowering polytechnic students to achieve their academic dreams. So, what are you waiting for? Join the Polystudi fam, crank up your learning curve, and watch your potential explode!",
      link: "https://polystudi.com"
    },
    {
      image: "/sites/cars.png",
      title: "Cars",
      subtitle: "Luxury of car",
      description: "Finding the Perfect Car Insurance Fit. Price is a big factor, but it's not the only one! We explore what matters when choosing car insurance. From comparing quotes to evaluating customer service, we'll help you find the company that protects your car and your peace of mind.",
      link: "https://atharvabaodhankar.github.io/cars/"
    },
    {
      image: "/sites/fips.png",
      title: "Fips",
      subtitle: "Comfort of life",
      description: "We craft furniture for lives well-lived. Comfort isn't a luxury, it's a necessity. That's why quality is our obsession. Handcrafted with meticulous detail, our furniture becomes an extension of your home, offering lasting comfort and timeless style.",
      link: "https://atharvabaodhankar.github.io/fips/"
    },
    {
      image: "/sites/TrainingStudio.png",
      title: "Training Studio",
      subtitle: "Fit and Strong",
      description: "Unleash your potential. Our gym makes it simple to achieve your fitness goals. We offer a supportive environment with everything you need to WORK HARDER and GET STRONGER - all conveniently at your fingertips.",
      link: "https://atharvabaodhankar.github.io/trainingstudio/"
    },
    {
      image: "/sites/glassm5.png",
      title: "Glass M5",
      subtitle: "Transparency of glass",
      description: "Welcome to a world of transparency in corporate governance. glassM5 leverages the power of glassmorphism design to create a clear and open environment. Our team of experts is dedicated to empowering businesses with the tools and knowledge they need to build strong governance practices.",
      link: "https://atharvabaodhankar.github.io/GlassM5-/"
    },
    {
      image: "/sites/cofffee.png",
      title: "Coffee",
      subtitle: "Focus on Ambiance",
      description: "Cafe & Restaurant Est.2023: Your haven for delicious eats & coffee. Savor hand-crafted dishes and barista-brewed beverages in our warm and inviting atmosphere. From mouthwatering brunch options to perfectly roasted coffee, we fuel your day with flavor.",
      link: "https://atharvabaodhankar.github.io/cofffee/"
    },
    {
      image: "/sites/elvo.png",
      title: "Elvo",
      subtitle: "Built for you",
      description: "Elvo Construction: Built by me, built for you. This website is more than just code and design - it's a testament to the dedication and expertise that goes into every Elvo project. Since 1998, I've poured my passion for construction into building dreams, and now I'm making it easier than ever for you to be a part of that process.",
      link: "https://atharvabaodhankar.github.io/elvo/"
    },
    {
      image: "/sites/dotcom.png",
      title: "DotCom",
      subtitle: "Ignite your brand",
      description: "Ignite your brand with Creative Agency. Our passionate team transforms brands with creative muscle - crafting captivating stories and designing cutting-edge digital experiences. We offer a full suite of services, from user-friendly websites to strategic marketing campaigns. Let's partner to unlock your brand's true potential and create something remarkable together.",
      link: "https://atharvabaodhankar.github.io/dotcom/"
    },
    {
      image: "/sites/lendo.png",
      title: "Lendo",
      subtitle: "Focus on what matters",
      description: "We're a leading provider of top-tier technology and exceptional service, empowering companies to reach their full potential. Our comprehensive solutions encompass cutting-edge technology to streamline operations and a dedicated team committed to exceeding your expectations. Partner with us and unlock a world of possibilities.",
      link: "https://atharvabaodhankar.github.io/lendo/"
    }
  ];

  return (
    <section id="projects">
      <div className="projects-header">
        <h1>MY ART</h1>
      </div>
      <article className="project-article non-hover">
        <section className="sectionWrapper">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Parallax]}
            direction="horizontal"
            loop={false}
            speed={1500}
            slidesPerView={4}
            spaceBetween={60}
            parallax={true}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 40,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
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
            }}
            className="swiper"
          >
            <div className="parallax-bg" data-swiper-parallax="600" data-swiper-parallax-scale="0.85"></div>
            
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="cardPopout" 
                  data-swiper-parallax="30" 
                  data-swiper-parallax-scale="0.9"
                  data-swiper-parallax-opacity="0.8" 
                  data-swiper-parallax-duration="1000"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    data-swiper-parallax="80"
                    data-swiper-parallax-duration="2000"
                  />

                  <h2 
                    className="title" 
                    data-swiper-parallax="80" 
                    data-swiper-parallax-duration="1000"
                  >
                    {project.title}
                  </h2>

                  <h4 
                    className="subtitle" 
                    data-swiper-parallax="80" 
                    data-swiper-parallax-duration="1500"
                  >
                    {project.subtitle}
                  </h4>

                  <figcaption data-swiper-parallax="80" data-swiper-parallax-duration="1250">
                    <p>{project.description}</p>
                  </figcaption>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Visit Now"
                    data-swiper-parallax="80" 
                    data-swiper-parallax-opacity="0.2" 
                    data-swiper-parallax-duration="1750"
                  >
                    Visit Now
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </article>
    </section>
  );
}