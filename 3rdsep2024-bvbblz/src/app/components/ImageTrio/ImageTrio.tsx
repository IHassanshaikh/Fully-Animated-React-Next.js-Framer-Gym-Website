import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../../../../public/images/picture1.png";
import image2 from "../../../../public/images/picture2.png";
import image3 from "../../../../public/images/picture3.png";

gsap.registerPlugin(ScrollTrigger);

const Trio = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the container

  useEffect(() => {
    const animateImages = () => {
      try {
        const container = containerRef.current;
        if (!container) return;

        const images = Array.from(container.querySelectorAll(".framer_hero_img_container")) as HTMLElement[];

        // Base animation for initial fade-in effect
        gsap.fromTo(
          ".framer_hero_img",
          { opacity: 0, y: 2300, visibility: "hidden" }, // Start position (off-screen down, hidden)
          {
            opacity: 1,
            y: 0,
            visibility: "visible", // Set visibility to visible when animation starts
            duration: 0.8,
            ease: "power2.out", // Duration of the animation
          }
        );

        // Set up responsive animations
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1300px)", () => {
          // Large screen animations (greater than 1300px)
          images.forEach((image, index) => {
            gsap.fromTo(
              image,
              { y: index % 2 === 0 ? 40 : -30, opacity: 1, visibility: "visible" }, // Ensure visibility is set
              {
                y: index % 2 === 0 ? -30 : 20,
                opacity: 1,
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top bottom",
                  end: "bottom +=30%",
                },
              }
            );
          });
        });

        mm.add("(max-width: 1299px) and (min-width: 500px)", () => {
          // Medium screen animations (between 500px and 1300px)
          images.forEach((image, index) => {
            gsap.fromTo(
              image,
              { y: index % 2 === 0 ? 70 : -85, opacity: 1, visibility: "visible" }, // Ensure visibility is set
              {
                y: index % 2 === 0 ? -55 : 30,
                opacity: 1,
                scrollTrigger: {
                  trigger: image,
                  scrub: 0.6,
                  start: "top bottom",
                  end: "bottom +=30%",
                },
              }
            );
          });
        });

        mm.add("(max-width: 499px)", () => {
          // Small screen animations (less than 500px)
          images.forEach((image, index) => {
            gsap.fromTo(
              image,
              { y: index % 2 === 0 ? 230 : -80, opacity: 1, visibility: "visible" },
              {
                y: index % 2 === 0 ? 23 : 32,
                opacity: 1,
                scrollTrigger: {
                  trigger: image,
                  scrub: 1.5,
                  start: "top bottom",
                  end: "30%",
                },
              }
            );
          });
        });
      } catch (error) {
        console.error("Animation error:", error);
      }
    };

    animateImages();
  }, []);

  const imageUrls = [image1, image2, image3]; // Image URLs

  return (
    <div
      ref={containerRef}
      data-framer-name="image column"
      className="framer_image_col"
    >
      {imageUrls.map((url, i) => (
        <motion.div
          key={i}
          data-framer-name="featured image"
          className={`framer_hero_img_container ${i === 1 ? "special_style" : ""}`}
          style={i === 1 ? { position: "relative", zIndex: 100 } : { position: "relative" }}
        >
          <div data-framer-background-image-wrapper="true">
            <img
              className={`framer_hero_img framer_hero_img${i + 1}`}
              src={url.src}
              alt={`Image ${i + 1}`}
              loading="lazy"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Trio;
