"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gymimage1 from "../../../../public/images/gymimage1.png";
import gymimage2 from "../../../../public/images/gymimage2.png";
import gymimage3 from "../../../../public/images/gymimage3.png";
import Comma from "../../../../public/svg/comma.svg";

gsap.registerPlugin(ScrollTrigger);

const Quote: React.FC = () => {
  const image1Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null); // Ref for the container

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: testimonialsRef.current, // Use the ref for the trigger
        start: "top center",
        end: "bottom top",
        scrub: 2, // Smoothness of the scroll effect
      },
    });

    // Parallax effect for images
    tl.to(image1Ref.current, { y: "-10%", ease: "power1.out" })
      .to(image3Ref.current, { y: "25%", ease: "power1.out" }, "<");

    // Clean up on unmount
    return () => {
      tl.kill(); // Clean up GSAP timeline
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up all triggers
    };
  }, []);

  return (
    <div
      className="framer-1ykzmo7 hidden-ydxqv1 hidden-1mh95iy"
      data-framer-name="ft testimonial row"
      id="testimonials-1"
      ref={testimonialsRef} // Attach ref to the container
    >
      <div className="framer-13j9z6x">
        <div className="framer-14kni3p" data-framer-name="text column">
          <div
            className="framer-1qjr688 quote"
            data-framer-component-type="RichTextContainer"
          >
            <h3 className="framer-text framer-styles-preset-d2lk6b" data-styles-preset="yXgP0vOrY">
              bvbblz helped me get back on track
            </h3>
          </div>
        </div>
        <div className="framer-1h6y8ea-container">
          <div>
            <Comma />
          </div>
        </div>
      </div>
      <div className="framer-16t9heh">
        <div className="framer-q8jn9f" data-framer-name="text column">
          <div className="framer-favc1m-container">
            <div className="framer-jQgHc framer-9hciL framer-Gn9ul framer-v-8hn0vo" tabIndex={0}>
              <div className="framer-8hn0vo quote-text" data-framer-name="Desktop">
                <div
                  className="framer-a4150h text-para"
                  data-framer-component-type="RichTextContainer"
                >
                  <p className="framer-text framer-styles-preset-1xj97t8" data-styles-preset="wkgY2aSbH">
                    I started using BVBBLZ during the first lockdown. I had no motivation whatsoever to stay active, and the live sessions were a game-changer, offering a sense of community and motivation I desperately needed. Thanks to BVBBLZ, I not only got back on track but surpassed my fitness goals. This app has been a lifeline during these challenging times, and I can't recommend it enough.
                  </p>
                </div>
                <div
                  className="framer-1jk9l5q text-para"
                  data-framer-component-type="RichTextContainer"
                >
                  <p className="framer-text framer-styles-preset-1dsmivd authorname" data-styles-preset="E6Mg24LLB">
                    Marie, English teacher
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1t1y8pt">
            <div className="framer-1tbdutc gymimage" data-border="true" ref={image1Ref}>
              <div className="imageframe" data-framer-background-image-wrapper="true">
                <img className="gymimg1" src={gymimage1.src} alt="" loading="lazy" />
              </div>
            </div>
            <div className="framer-8vltmy" data-border="true">
              <div className="imageframe" data-framer-background-image-wrapper="true">
                <img src={gymimage3.src} alt="" className="gymimg1" loading="lazy" />
              </div>
            </div>
            <div className="framer-o5909d gymimage3" data-border="true" ref={image3Ref}>
              <div className="imageframe" data-framer-background-image-wrapper="true">
                <img src={gymimage2.src} alt="" className="gymimg1" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
