"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger animation for the Navbar
    gsap.to(navbarRef.current, {
      y: -200, // Moves up by 200px (adjust this as needed)
      ease: 'power2.out', // Ease for smooth animation
      scrollTrigger: {
        trigger: navbarRef.current,
        start: 'top top', // Starts the animation when the top of the navbar hits the top of the viewport
        scrub: 1, // Allows smooth scrubbing, adding an inertia-like feel
        end: '+=500', // End after 500px of scrolling (adjust as needed)
      },
    });
  }, []);

  return (
    <div ref={navbarRef}>
      <Hero />
    </div>
  );
};

export default Navbar;
