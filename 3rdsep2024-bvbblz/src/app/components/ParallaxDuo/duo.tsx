import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import picture1 from "../../../../public/images/picture2.png";
import picture2 from "../../../../public/images/picture1.png";

gsap.registerPlugin(ScrollTrigger);

const Duo = () => {
  // Create refs for the two images
  const imageRef1 = useRef<HTMLImageElement | null>(null);
  const imageRef2 = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Animate first image
    gsap.fromTo(
      imageRef1.current,
      { y: -10 },
      {
        y: 30, // Moves the first image down by 20px
        ease: "power2.out", // Easing function for inertia effect
        scrollTrigger: {
          trigger: '.phones-row',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        }
      }
    );

    // Animate second image
    gsap.fromTo(
      imageRef2.current,
      { y: 0 },
      {
        y: -20, // Moves the second image up by 20px
        ease: "power2.out", // Easing function for inertia effect
        scrollTrigger: {
          trigger: '.phones-row',
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        }
      }
    );
  }, []);

  return (
    <>
      <div className="phones-row">
        <div className="image-column">
          <div className="featured-image1">
            <div className="background-image-wrapper">
              <img
                ref={imageRef1} // Attach ref to the first image
                className='parallaxduoimg1'
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
                ref={imageRef2} // Attach ref to the second image
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

export default Duo;
