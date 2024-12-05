"use client";

import React, { useEffect , useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./title";
import Downloadsvg from "../../../../public/svg/download.svg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null); // Add useRef for #hero

  useEffect(() => {
    if (heroRef.current) {
      // Animation to move Hero down on page load
      gsap.fromTo(
        heroRef.current,
         { y: "-100%", opacity: 0,  visibility: "hidden" },  // Start position (above the viewport)
      { y: "0%", opacity: 1, duration: 0.6, ease: "power2.in", visibility: "visible", scrub: true} // End position (in viewport)
    );
  }
  }, []);


  return (
    <section id="hero" className="framer-1hkre34 desktophidden "  ref={heroRef}>
      <div
        className="framer-u1nzgi framer-hero-nav navbar"
        data-framer-name="header"
      >
        <div className="framer-1e6v8z8" data-framer-name="nav + title">
          <div className="framer-kqee-container" id="nav">
            <div
              className="framer-4l2iB framer-hnPjn framer-d1MIn framer-20DLF framer-Fs2MN framer-v-1p6twwj"
              tabIndex={0}
            >
              <div
                className="framer-1p6twwj"
                data-framer-name="Desktop"
              >
                <div
                  className="framer-10o8csg hiddentab"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-9pq5zi"
                    data-styles-preset="GCDcz2Fxo"
                  >
                    <a
                      className="framer-text framer-styles-preset-179fkj7"
                      data-styles-preset="EBCHUJFjS"
                      href="./#features-1"
                    >
                      Features
                    </a>
                  </p>
                </div>
                <div
                  className="framer-nwdkx4 hiddentab"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-9pq5zi"
                    data-styles-preset="GCDcz2Fxo"
                  >
                    <a
                      className="framer-text framer-styles-preset-179fkj7"
                      data-styles-preset="EBCHUJFjS"
                      href="./#pricing-title"
                    >
                      Upgrade
                    </a>
                  </p>
                </div>
                <div
                  className="framer-23dyrf"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-9pq5zi"
                    data-styles-preset="GCDcz2Fxo"
                  >
                    <a
                      className="framer-text framer-styles-preset-179fkj7"
                      data-styles-preset="EBCHUJFjS"
                      href="./blog"
                    >
                      Blog
                    </a>
                  </p>
                </div>
                <a
                  className="framer-1jmujw0 framer-14z4lmo"
                  data-framer-name="icon link"
                  href="https://odsgns.lemonsqueezy.com/checkout/buy/ebb7dc99-431c-4f11-a080-6b75de4b9c51"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="framer-16mwlug-container">
                    <div>
                      <Downloadsvg />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Title />
      </div>
    </section>
  );
};

export default Hero;
