"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Downloadsvg from "../../../../public/svg/download.svg";

gsap.registerPlugin(ScrollTrigger);

const StickyNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null); // Ref for the navbar

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const triggerPoint = window.innerHeight / 2.5;

    const scrollHandler = () => {
      const scrollY = window.scrollY;

      if (navRef.current) {
        if (scrollY > triggerPoint && scrollY < lastScrollY) {
          // Show navbar
          gsap.to(navRef.current, {
            y: "0%",
            opacity: 1,
            duration: 0.1,
          });
          setIsVisible(true);
        } else {
          // Hide navbar
          gsap.to(navRef.current, {
            y: "-160%",
            opacity: 1,
            duration: 0.1,
          });
          setIsVisible(false);
        }
      }

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      // Set initial state for navbar
      gsap.set(navRef.current, { y: "-150%", opacity: 0 });
    }
  }, []);

  return (
    <div
      ref={navRef}
      className={`sticky-nav ${isVisible ? "fixed" : ""}`}
    >
      <div className="navlogo">
        <a href="/">bvbblz</a>
      </div>
      <div className="nav">
        <ul className="navlist">
          <li><a className="features" href="#">Features</a></li>
          <li><a href="#">Upgrade</a></li>
          <li><a href="#">Blog</a></li>
          <li>
            <a
              className="icon-link"
              href="https://odsgns.lemonsqueezy.com/checkout/buy/ebb7dc99-431c-4f11-a080-6b75de4b9c51"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-container">
                <Downloadsvg fill="white" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StickyNav;
