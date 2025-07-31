'use client';

import { useEffect } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Skills from '@/components/Skills';
import Created from '@/components/Created';
import AboutMe from '@/components/AboutMe';
import Ferro from '@/components/Ferro';
import Projects from '@/components/Projects';
import Work from '@/components/Work';
import Footer from '@/components/Footer';
import { initializeAnimations } from '@/utils/animations';

export default function Home() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <>
      <Loader />
      <section id="main">
        <Navbar />
        <Hero />
        <Marquee />
        <Skills />
        <Created />
        <AboutMe />
        <Ferro />
        <Projects />
        <Work />
        <Footer />
      </section>
    </>
  );
}