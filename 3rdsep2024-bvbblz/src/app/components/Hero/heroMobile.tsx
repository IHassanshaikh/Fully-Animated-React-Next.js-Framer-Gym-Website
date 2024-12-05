"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./title";
import Image from "next/image";
import Downloadsvg from "../../../../public/svg/download.svg"

gsap.registerPlugin(ScrollTrigger);

const Heromobile = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null); // Ref for #hero


  useEffect(() => {
    const titleElement = titleRef.current;

    if (heroRef.current) {
      // Animation to move Hero down on page load
      gsap.fromTo(
        heroRef.current,
        { y: "-100%", opacity: 0, visibility: "hidden" },  // Start position (above the viewport)
        { y: "0%", opacity: 1, duration: 0.6, ease: "power2.in", visibility: "visible", scrub: true } // End position (in viewport)
      );
    }
  }, []);

  useEffect(() => {
    const titleElement = titleRef.current;

    if (titleElement) {
      const handleResize = () => {
        const titleWidth = titleElement.offsetWidth;

        gsap.to(titleElement, {
          x: window.innerWidth - titleWidth - 40,
          ease: "power2.out", // Maintain smooth easing
          duration: 0.8, // Reduced duration for faster animation
          scrollTrigger: {
            trigger: titleElement,
            start: "+=130",
            scrub: 2, // Faster scroll interaction
            end: "+=20", // Quick ending for faster scroll speed
          },
        });
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        gsap.killTweensOf(titleElement);
      };
    }
  }, []);

  return (
    <section
      id="hero"
      className="framer-1hkre34 heromobile"
      ref={heroRef}
    >
      <div
        className="framer-u1nzgi framer-hero-nav"
        data-framer-name="header"
      >
        <nav className="framer-1e6v8z8" data-framer-name="nav + title">
          <ul
            className="framer-kqee-container"
            id="nav"
          >
            <li className="hiddentab">
              <a href="./#features-1" className="framer-text">
                Features
              </a>
            </li>
            <li className="hiddentab">
              <a href="./#pricing-title" className="framer-text">
                Upgrade
              </a>
            </li>
            <li>
              <a href="./blog" className="framer-text">
                Blog
              </a>
            </li>
            <li>
              <a
                className="framer-1jmujw0 framer-14z4lmo"
                href="https://odsgns.lemonsqueezy.com/checkout/buy/ebb7dc99-431c-4f11-a080-6b75de4b9c51"
                target="_blank"
                rel="noopener"
              >
                <Image src="/svg/download.svg" alt="svg" width={25} height={25} />
              </a>
            </li>
          </ul>
        </nav>

        <div
          className="title"
          ref={titleRef}       >
          <Title />
        </div>
      </div>
    </section>
  );
};

export default Heromobile;
