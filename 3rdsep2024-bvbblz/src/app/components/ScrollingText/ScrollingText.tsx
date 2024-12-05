"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollingText = () => {
  const textRef = useRef<HTMLHeadingElement>(null); // Specify type here

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;

      // Define animations based on screen width
      ScrollTrigger.matchMedia({
        // For screens wider than 400px
        "(min-width: 401px)": () => {
          gsap.to(textRef.current, {
            x: -textWidth / 2.5, // Move left by half of its width
            duration: 10,
            ease: "power4.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 68%", // Start animation at 68% viewport height
              end: "bottom top", // End animation when the bottom of the text reaches the top of the viewport
              scrub: 1.5, // Smooth scrolling effect
            },
          });
        },

        // For screens up to 400px wide
        "(max-width: 400px)": () => {
          gsap.to(textRef.current, {
            x: -textWidth / 1.7, // Adjust left movement for smaller screens
            duration: 8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%", // Adjust start position for smaller screens
              end: "bottom 20%",
              scrub: 1, // Adjust scrub speed for smaller screens
            },
          });
        },
      });
    }
  }, []);

  return (
    <section id="scrolling-text" className="section">
      <h1 ref={textRef} className="framer-text framer-text2">
        bvbblz
      </h1>
    </section>
  );
};

export default ScrollingText;
