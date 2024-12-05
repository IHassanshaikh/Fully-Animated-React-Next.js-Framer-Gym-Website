"use client";
import { useEffect, useRef } from "react";
import ParallaxPhoneCarousel from "./ParallaxPhoneCarousel";
import image5 from "../../../../public/images/picture5.png";
import image6 from "../../../../public/images/picture6.png";
import image7 from "../../../../public/images/picture7.png";
import Downloadsvg from "../../../../public/svg/download.svg";
import { animatePhoneCarousel } from "./phoneCarouselAnimations"; // Import the animation
import { animatePhoneCarouselLaptop } from "./phoneCarouselAnimationslaptop"; // Import the animation

const PhoneCarousel = () => {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const paragraphsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {

      if (window.innerWidth > 1300) {
        animatePhoneCarouselLaptop(imagesRef, paragraphsRef, titleRowRef); // Large screen animation

      }
      else if (window.innerWidth <= 1300) {
        animatePhoneCarousel(imagesRef, paragraphsRef, titleRowRef); // Small screen animation

      }
    };

    // Initial check
    handleResize();

    // Add event listener for resizing the window
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section id="phone-carousel" className="section">
        {/* Title Row */}
        <div
          className="title-row"
          ref={titleRowRef} // Assigning the reference to the title row
        >
          <h2>And There's more</h2>
        </div>
        <div className="features-section hidden-carousel">
          <div className="Carousel-images">
            <div
              className="Carousel-image"
              ref={(el) => {
                imagesRef.current[0] = el;
              }}
            >
              <img src={image5.src} alt="Image 5" />
            </div>
            <div
              className="Carousel-image"
              ref={(el) => {
                imagesRef.current[1] = el;
              }}
            >
              <img src={image6.src} alt="Image 6" />
            </div>
            <div
              className="Carousel-image"
              ref={(el) => {
                imagesRef.current[2] = el;
              }}
            >
              <img src={image7.src} alt="Image 7" />
            </div>
          </div>
          {/* TEXT */}
          <div className="Carousel-paragraph">
            <div className="feature-text">
              <div
                className="text-block"
                ref={(el) => {
                  paragraphsRef.current[0] = el;
                }}
              >
                <h3>AI sugestions based on your data</h3>
                <p>
                  Our AI understands your unique progress and goals. Whether
                  it's suggesting new workouts, optimizing your routine, or even
                  predicting potential plateaus, BVBBLZ's AI ensures that every
                  step of your fitness journey is precisely tailored to your
                  needs.
                </p>
              </div>
            </div>
            <div className="feature-text">
              <div
                className="text-block"
                ref={(el) => {
                  paragraphsRef.current[1] = el;
                }}
              >
                <h3>Start free, upgrade at any point</h3>
                <p>
                  Start your fitness journey with us absolutely free. No strings attached. Explore the app, track your workouts, and experience the power of our community without any initial commitment. And when you're ready to unlock even more premium features and personalized training options, upgrading is just a tap away.
                </p>
                <div className="download-button2">
                  <button>
                    Download app{" "}
                    <Downloadsvg />
                  </button>
                </div>
              </div>
            </div>
            <div className="feature-text">
              <div
                className="text-block"
                ref={(el) => {
                  paragraphsRef.current[2] = el;
                }}
              >
                <h3>Pro packages from Experts</h3>
                <p>
                  Our premium trainers, renowned for their expertise, create specialized packages to help you reach your fitness goals faster and more effectively. From personalized workout plans to nutrition guides, you'll have the tools and knowledge you need for exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ParallaxPhoneCarousel">
        <div className="feature-text">
          <div className="text-block AI-para">
            <h3>AI sugestions based on your data</h3>
            <p>
              Our AI understands your unique progress and goals. Whether it's
              suggesting new workouts, optimizing your routine, or even
              predicting potential plateaus, BVBBLZ's AI ensures that every step
              of your fitness journey is precisely tailored to your needs.
            </p>
          </div>
        </div>
        <div>
          <ParallaxPhoneCarousel />
        </div>
      </div>
    </>
  );
};

export default PhoneCarousel;
