import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const contextRef = useRef<gsap.Context>();

  useEffect(() => {
    contextRef.current = gsap.context(() => {});
    
    return () => {
      contextRef.current?.revert();
    };
  }, []);

  return contextRef.current;
};

export { gsap, ScrollTrigger };