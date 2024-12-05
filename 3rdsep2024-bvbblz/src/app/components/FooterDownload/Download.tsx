"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Trio2 from "../ImageTrio/footerTrio";
import Downloadsvg from "../../../../public/svg/download.svg";
import blob from "../../../../public/images/blob1.png";

gsap.registerPlugin(ScrollTrigger);

const Triplex = () => {
  const controls = useAnimation();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen width on load and resize
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsLargeScreen(window.innerWidth > 1300);
    };

    checkScreenWidth(); // Initial check
    window.addEventListener("resize", checkScreenWidth); // Listen for resize events

    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  // Animation properties for large screens only
  const animationProps = isLargeScreen
    ? {
        initial: { y: 100, opacity: 0 }, // Start below the viewport with opacity 0
        whileInView: { y: 0, opacity: 1 }, // Move up to y:0 when in the viewport
        viewport: { once: true, amount: 0.5 }, // Trigger animation when 50% in view
        transition: { duration: 0.6 }, // Animation duration
      }
    : {};

  return (
    <section id="download2" className="section">
      <div data-framer-name="header" className="header">
        <div data-framer-name="row" className="framer_hero_main2">
          <motion.div
            className="framer_hero_para2"
            {...animationProps} // Apply animation only if screen is large
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
                <button
                  className="framer_hero_button2"
                  data-styles-preset="GCDcz2Fxo"
                >
                  Download app
                  <Downloadsvg />
                </button>
              </div>
            </div>
          </motion.div>
          <div>
            <Trio2 />
          </div>
        </div>
      </div>
      <div data-framer-name="blob" className="blob-4">
        <div data-framer-background-image-wrapper="true" className="framer-blob-4">
          <img src={blob.src} sizes="450px" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Triplex;
