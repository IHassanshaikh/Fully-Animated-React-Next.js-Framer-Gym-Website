"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Trio from "../ImageTrio/ImageTrio";
import Openinapp from "../../../../public/svg/app.svg";
import Downloadsvg from "../../../../public/svg/download.svg";
import logos from '../../../../public/svg/logo'; // Adjust the path based on your folder structure
import blob from "../../../../public/images/blob1.png";

gsap.registerPlugin(ScrollTrigger);

const Download = () => {

 const blobRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
   const mediaQuery = window.matchMedia('(max-width: 800px)'); // Check if screen width is 400px or less
    const isMobile = mediaQuery.matches;

if (blobRef.current) {
      // Common animation for larger screens
      gsap.fromTo(
        blobRef.current.querySelector("img"),
        {
          y: -40, // Initial position
        },
        {
          y: -70, // Move up when scrolling
          scrollTrigger: {
            trigger: blobRef.current,
            start: "top 80%", // When the top of the blob reaches 80% of the viewport height
            end: "bottom 50%", // When the bottom of the blob reaches 50% of the viewport height
            scrub: 1, // Smooth scroll animation
            toggleActions: "play none none reverse", // Start the animation when scrolling down, reverse on scroll up
          },
        }
      );

      if (isMobile) {
        // Animation for mobile screens (400px width or less)
        gsap.fromTo(
          blobRef.current.querySelector("img"),
          {
            y: 0, // Initial position for mobile
          },
          {
            y: -50, // Move up when scrolling on mobile
            scrollTrigger: {
              trigger: blobRef.current,
              start: "top bottom",
              end: "bottom 50%",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }
  }, []);


  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateScreenSize = () => {
        const screenWidth = window.innerWidth;
        setIsLargeScreen(screenWidth > 1300);
      };

      const handleScroll = () => {
        if (isLargeScreen) {
          const scrollY = window.scrollY;
          controls.start({
            opacity: Math.min(scrollY / 500, 1),
            y: Math.max(-scrollY / 2, -100),
          });
        } else {
          controls.start({ opacity: 1, y: 0 });
        }
      };

      updateScreenSize();
      window.addEventListener("resize", updateScreenSize);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("resize", updateScreenSize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [controls, isLargeScreen]);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <section id="download" className="section download">
      <div data-framer-name="header" className="header">
        <div data-framer-name="row" className="framer_hero_main">
          <motion.div
            className="framer_hero_para"
            initial={isLargeScreen ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }}
            animate={isLargeScreen ? controls : {}}
            transition={isLargeScreen ? spring : {}}
          >
            <div>
              <p data-styles-preset="wkgY2aSbH">
                Seamlessly combining workout tracking, personalized trainer
                connections, and cutting-edge AI analysis, the app empowers you
                to elevate your fitness journey like never before.
              </p>
            </div>
            <div tabIndex={0}>
              <div>
                <button className="framer_hero_button" data-styles-preset="GCDcz2Fxo">
                  {isLargeScreen ? "OPEN ON PHONE" : "DOWNLOAD APP"}
                  {isLargeScreen ? <Openinapp /> : <Downloadsvg />}
                </button>
              </div>
            </div>
          </motion.div>
          <div className="trio">
            <Trio />
          </div>
        </div>
        <div className="framer-carousel">
          <div className="framer-carousel-text">
            <p>The app featured in:</p>
          </div>
        </div>
        <div tabIndex={0}>
          <section className="logo-carousel">
            <ul className="logo-list">
              {logos.map((logo, index) => (
                <li key={index}>
                  <img className="framer-logo-img" src={logo} alt={`Logo ${index + 1}`} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <div className="blob" ref={blobRef}>
        <img src={blob.src} width="420px" alt="Blob" />
      </div>
    </section>
  );
};

export default Download;
