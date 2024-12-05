import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import picture1 from "../../../../public/images/picture5.png";
import picture2 from "../../../../public/images/picture7.png";

gsap.registerPlugin(ScrollTrigger);

const ParallaxPhoneCarousel = () => {
  // Create refs for the two images and the row container
  const imgRef1 = useRef<HTMLImageElement | null>(null);
  const imgRef2 = useRef<HTMLImageElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null); // Reference for the row container

  useEffect(() => {
    gsap.fromTo(
      imgRef1.current,
      { y: 0 },
      {
        y: 10, // Moves the first image down by 10px
        ease: "power2.out",
        scrollTrigger: {
          trigger: rowRef.current, // Use the ref for the row container
          start: "top bottom", // Start the animation when the top of the row enters the bottom of the viewport
          end: "bottom top", // Animation will end when the bottom of the row leaves the top of the viewport
          scrub: 1, // Smooth scrolling effect
        },
      }
    );

    gsap.fromTo(
      imgRef2.current,
      { y: 0 },
      {
        y: -25, // Moves the second image up by 30px
        ease: "power2.out",
        scrollTrigger: {
          trigger: rowRef.current, // Use the ref for the row container
          start: "top bottom", // Start the animation when the top of the row enters the bottom of the viewport
          end: "bottom top", // Animation will end when the bottom of the row leaves the top of the viewport
          scrub: 1, // Smooth scrolling effect
        },
      }
    );
  }, []);

  return (
    <>
      <div className="phones-row row2" ref={rowRef}> {/* Attach ref to the row container */}
        <div className="image-column">
          <div className="featured-image1">
            <div className="background-image-wrapper">
              <img
                ref={imgRef1} // Attach ref to the first image
                src={picture1.src}
                sizes="max((min(100vw - 120px, 800px) * 0.8 - 30px) / 2, 0px)"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="image-column">
          <div className="featured-image2">
            <div className="background-image-wrapper">
              <img
                ref={imgRef2} // Attach ref to the second image
                src={picture2.src}
                sizes="max((min(100vw - 120px, 800px) * 0.8 - 30px) / 2, 0px)"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallaxPhoneCarousel;
