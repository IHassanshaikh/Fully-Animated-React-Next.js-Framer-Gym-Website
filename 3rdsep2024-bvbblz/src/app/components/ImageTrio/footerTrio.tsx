import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../../../../public/images/picture1.png";
import image2 from "../../../../public/images/picture2.png";
import image3 from "../../../../public/images/picture3.png";

gsap.registerPlugin(ScrollTrigger);

const Trio = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Ref for the entire container
  const imageRefs = useRef<HTMLDivElement[]>([]); // Ref array for individual image containers

  useEffect(() => {
    const animateImages = () => {
      try {
        const container = containerRef.current;
        const images = imageRefs.current;

        if (!container || images.length === 0) return;

        // Animate all images up together
        gsap.fromTo(
          images,
          { opacity: 0, y: 4000, visibility: "hidden" }, // Start position (off-screen down, hidden)
          {
            opacity: 1,
            y: 0,
            visibility: "visible", // Set visibility to visible when animation starts
            duration: 0.8,
            ease: "power2.out", // Duration of the animation
            stagger: 0.2, // Optional stagger effect for images
          }
        );

        // GSAP Parallax Scroll Animation
        images.forEach((image, index) => {
          gsap.fromTo(
            image,
            { y: index % 2 === 0 ? 20 : -20, opacity: 1, visibility: "visible" }, // Ensure visibility is set
            {
              y: index % 2 === 0 ? -20 : 20,
              opacity: 1,
              scrollTrigger: {
                trigger: image,
                scrub: 0.8,
                start: "top bottom",
                end: "bottom +=40%",
              },
            }
          );
        });
      } catch (error) {
        console.error("Animation error:", error);
      }
    };

    animateImages();
  }, []);

  const imageUrls = [image1, image2, image3]; // Image URLs

  return (
    <div ref={containerRef} data-framer-name="image column" className="framer_image_col trio2">
      {imageUrls.map((url, i) => (
        <motion.div
          key={i}
          ref={(el) => {
            if (el) imageRefs.current[i] = el; // Assign the image container to the ref array
          }}
          data-framer-name="featured image"
          className={`framer_hero_img_container2 ${i === 1 ? "special_style" : ""}`}
          style={i === 1 ? { position: "relative", zIndex: 100 } : { position: "relative" }}
        >
          <div data-framer-background-image-wrapper="true">
            <img
              className={`framer_hero_img framer2_hero_img${i + 1}`}
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
