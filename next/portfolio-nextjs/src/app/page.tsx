'use client';

import { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Marquee from '@/components/Marquee';
import Skills from '@/components/Skills';
import Created from '@/components/Created';
import Ferro from '@/components/Ferro';
import Projects from '@/components/Projects';
import Work from '@/components/Work';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize smooth scrolling
  useSmoothScroll();

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      
      {!isLoading && (
        <section id="main">
          <Navbar />
          <Hero />
          <AboutMe />
          <Marquee />
          <Skills />
          <Created />
          <Ferro />
          <Projects />
          <Work />
          <Footer />
        </section>
      )}
    </>
  );
}