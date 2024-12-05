"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gymimage1 from "../../../../public/images/gymimage4.png";
import gymimage2 from "../../../../public/images/gymimage5.png";
import gymimage3 from "../../../../public/images/gymimage6.png";
import Next from "../../../../public/svg/next.svg";
import Prev from "../../../../public/svg/prev.svg";

gsap.registerPlugin(ScrollTrigger);

interface TextItem {
  body: string;
  author: string;
}

const textItems: TextItem[] = [
  {
    body: `"As a busy professional, BVBBLZ's flexibility is a game-changer. I can choose when and how to work out, and the Advanced plan's nutrition guidance has been a game-changer for my health. This app has truly improved my life."`,
    author: "Mark, Financial analyst",
  },
  {
    body: `"I was skeptical at first, but the Basic plan's tracking and community features helped me regain my lost motivation. Now, I can't imagine my fitness journey without BVBBLZ. It's made staying active fun and rewarding."`,
    author: "Lisa, Graphic designer",
  },
  {
    body: `"BVBBLZ has transformed my fitness routine. The AI recommendations helped me break through plateaus, and the live sessions made workouts feel like a community event. I've never been more motivated to stay active."`,
    author: "Sarah, Marketing consultant",
  },
];

const Variants = {
  hidden: (directions: number) => ({
    y: directions === 1 ? "100%" : "-100%", // Slide fully out of view
    opacity: 0,
    zIndex: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
  visible: {
    y: "0%", // Visible in place
    opacity: 1,
    zIndex: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: (directions: number) => ({
    y: directions === 1 ? "-100%" : "100%", // Exit fully out of view
    opacity: 0,
    zIndex: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};




const Review: React.FC = () => {
  const [currentIndexs, setCurrentIndexs] = useState(0);
  const [directions, setDirections] = useState(1);

  const image1Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".carousel2",
        start: "top center",
        end: "bottom top",
        scrub: 2,
      },
    });

    // Parallax effect for images
    tl.to(image1Ref.current, { y: "-10%", ease: "power1.out" })
      .to(image3Ref.current, { y: "25%", ease: "power1.out" }, "<");

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handlePrevious = () => {
    setDirections(1); // Slide down
    setCurrentIndexs((prevIndex) => (prevIndex + 1) % textItems.length);
  };

  const handleNextt = () => {
    setDirections(-1); // Slide up
    setCurrentIndexs((prevIndex) => (prevIndex === 0 ? textItems.length - 1 : prevIndex - 1));
  };

  const [headingText, setHeadingText] = useState('Some more thoughts about bvbblz, from real people');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 810) {
        setHeadingText('What our lovely users say');
      } else {
        setHeadingText('Some more thoughts about bvbblz, from real people');
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check when the component mounts
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="text-carousel2" className="section">
      <div className="carousel2">
        <div className="textpara">
          <h3 className="Text-carousel-heading2">
            {headingText}
          </h3>
          <div className="text-carousel-main2">
            <AnimatePresence initial={false} custom={directions}>
              {/* Animate only one text element */}
              <motion.div
                key={currentIndexs}
                variants={Variants}
                custom={directions}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-content2"
                style={{
                  position: 'absolute',
                }}
              >
                <p className="Text-carousel-body2">{textItems[currentIndexs].body}</p>
                <p className="Text-carousel-author">{textItems[currentIndexs].author}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="pagination-controls2">
            <button
              type="button"
              className="prev-svg"
              aria-label="Previous"
              onClick={handlePrevious}
            >
              <Prev
                className="rotated-prev-svg"
                alt="Back Arrow"
                width={30}
                height={30}
              />
            </button>

            <button
              type="button"
              className="next-svg"
              aria-label="Next"
              onClick={handleNextt}
            >
         <Next
              className="rotated-next-svg"
              alt="Back Arrow"
              width={30}
              height={30}
            />
            </button>
          </div>
        </div>
        <div className="framer-zvurl8 hidden-ydxqv1 hidden-1mh95iy">
          <div className="framer-hdhvtk image-frames"
            data-border="true"
            ref={image1Ref}
          >
            <div
              className="imageframe"
              data-framer-background-image-wrapper="true"
            >
              <img
                src={gymimage1.src}
                alt=""
                sizes="max(((min(100vw - 120px, 1400px) - 60px) * 0.4 - 353px) / 2, 0px)"
                className="gymimg1"
                loading="lazy"
              />
            </div>
          </div>

          <div className="framer-16h958m" data-border="true" >
            <div className="imageframe"
              data-framer-background-image-wrapper="true"
            >
              <img
                src={gymimage3.src}
                alt=""
                sizes="max(((min(100vw - 120px, 1400px) - 60px) * 0.4 - 353px) / 2, 0px)"
                className="gymimg1"
                loading="lazy"
              />
            </div>
          </div>

          <div
            className="framer-9x5m9y image-frames2"
            data-border="true"
            ref={image3Ref}
          >
            <div
              className="imageframe"
              data-framer-background-image-wrapper="true"
            >
              <img
                src={gymimage2.src}
                alt=""
                sizes="max(((min(100vw - 120px, 1400px) - 60px) * 0.4 - 353px) / 2, 0px)"
                className="gymimg1"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
