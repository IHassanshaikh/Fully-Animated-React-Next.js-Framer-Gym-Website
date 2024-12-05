"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Prev from "../../../../public/svg/prev.svg";
import Next from "../../../../public/svg/next.svg";
import Downloadsvg from "../../../../public/svg/download.svg";
import blob from "../../../../public/images/blob2.png";

const textItems = [
  {
    heading: "Track your progress like never before",
    body: "Monitor your workouts, set goals, and record your achievements AND take it a step further with powerful AI analytics. Receive in-depth insights into your performance, discover patterns, and receive personalized recommendations.",
  },
  {
    heading: "World renowned Trainers on a sub",
    body: "Choose from a roster of globally acclaimed trainers, each offering personalized regimens tailored to your goals. Whether you're aiming for strength, agility, or a complete body transformation, the subscription unlocks a world of expertise.",
  },
  {
    heading: "Real Stories, Real Results",
    body: "But don't take our word for it. Hear the stories of users just like you, who've embarked on their fitness journeys and achieved remarkable results. Read and share your own experiences, providing valuable insights and motivation to the BVBBLZ fitness family.",
  },
  {
    heading: "Live & Async sessions to suit all your needs",
    body: "Join live workouts led by expert trainers, immerse yourself in real-time motivation, and interact with a community OR dive into our library of asynchronous sessions, available whenever and wherever you need them.",
  },
];

const slideVariants = {
  // Entering animation: Slow at the end when getting closer to its position
  enter: (direction: number) => ({
    y: direction === 1 ? "-130%" : "130%",
    opacity: 1,
    transition: {
      duration: 1, // Slower initial movement
      ease: [0.5, 0.4, 0.2, 0], // Slower to start and ease into place
    },
  }),
  // Element is in its final resting position
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6, // Moderate speed to ease into the final position
      ease: [0.4, 0.5, 0.8, 1], // Smooth, ease into place
    },
  },
  // Exiting animation: Fast exit
  exit: (direction: number) => ({
    y: direction === 1 ? "130%" : "-130%",
    opacity: 1,
    transition: {
      duration: 0.35, // Fast exit
      ease: [0.2, 0.3, 0.05, 0.01], // Fast start and finish
    },
  }),
};


const TextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);
  };

  const handleNext = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? textItems.length - 1 : prevIndex - 1));
  };

  return (
    <section id="text-carousel" className="section hidden-1200px">
      <div className="text-carousel-main" style={{ position: "relative", overflow: "hidden" }}>
        <AnimatePresence initial={false} custom={direction} >
          <motion.div
            key={currentIndex} // Unique key to trigger animation
            variants={slideVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            className="text-content"
            style={{ position: "absolute" }}
          >
            <h3 className="Text-carousel-heading">{textItems[currentIndex].heading}</h3>
            <p className="Text-carousel-body">{textItems[currentIndex].body}</p>
          </motion.div>
        </AnimatePresence>.

        <div className="pagination-controls">
          <button type="button" className="prev-svg" aria-label="Previous" onClick={handlePrev}>
            <Next
              className="rotated-prev-svg"
              alt="Back Arrow"
              width={30}
              height={30}
            />
          </button>

          <button type="button" className="next-svg" aria-label="Next" onClick={handleNext}>
            <Prev
              className="rotated-next-svg"
              alt="Back Arrow"
              width={30}
              height={30}
            />          
          </button>
        </div>
      </div>

      <div className="download-button">
        <button>
          Download app
          <Downloadsvg />
        </button>
      </div>

      <div className="framer-blob-2">
        <img src={blob.src} alt="Blob Background" sizes="467px" />
      </div>
    </section>
  );
};

export default TextCarousel;
