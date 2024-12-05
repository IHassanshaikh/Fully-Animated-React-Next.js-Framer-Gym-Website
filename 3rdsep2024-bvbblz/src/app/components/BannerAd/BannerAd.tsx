"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface BannerAdProps {
  bannerImage1: StaticImageData;
  bannerImage2: StaticImageData;
  text1: string;
  text2: string;
  id: string;
}

const BannerAd: React.FC<BannerAdProps> = ({ bannerImage1, bannerImage2, text1, text2, id }) => {
  const bannerTextRef = useRef<HTMLDivElement>(null);
  const firstImageRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Text animation
    if (bannerTextRef.current) {
      gsap.fromTo(
        bannerTextRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: bannerTextRef.current,
            start: "top 98%",
            end: "bottom 60%",
            scrub: 2,
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // First Image Animation
    if (firstImageRef.current) {
      gsap.to(firstImageRef.current, {
        yPercent: id === "banner1" ? 10 : 10,
        ease: "power2.out",
        scrollTrigger: {
          trigger: firstImageRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 2,
        },
      });
    }

    // Second Image Animation
    if (secondImageRef.current) {
      gsap.to(secondImageRef.current, {
        yPercent: id === "banner1" ? -20 : -20,
        ease: "power2.out",
        scrollTrigger: {
          trigger: secondImageRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 2,
        },
      });
    }
  }, [id]);

  return (
    <section id={`banner-ad-${id}`} className="banner-section">
      <div className="content">
        <div className="framer-yhy6q5" data-framer-name="accent row">
          <div className={`framer-tjlozw`} id={`accent-box-${id}`}>
            {/* First Image */}
            <div
              ref={firstImageRef}
              className={`framer-1ji9i5w pImage hidden-ydxqv1 hidden-1mh95iy`}
              data-border="true"
            >
              <div className="bannerimg1" data-framer-background-image-wrapper="true">
                <img className="img1" src={bannerImage1.src} alt="Banner Image" loading="lazy" />
              </div>
            </div>
            {/* Text */}
            <div className="framer-4kya1m" data-framer-component-type="RichTextContainer" 
            ref={bannerTextRef}>
              <p className="framer-styles-preset-1dsmivd banner-text text1">
                {text1}
              </p>
            </div>
            <div className="framer-4b3y9" data-framer-component-type="RichTextContainer">
              <h2 className="framer-styles-preset-8d7qqc banner-text text2">
                {text2}
              </h2>
            </div>
            {/* Second Image */}
            <div
              ref={secondImageRef}
              className={`framer-105fkbp pImage hidden-ydxqv1 hidden-1mh95iy`}
              data-border="true"
            >
              <div className="bannerimg2" data-framer-background-image-wrapper="true">
                <img className="img1" src={bannerImage2.src} alt="Banner Image" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAd;
