import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const animatePhoneCarousel = (imagesRef, paragraphsRef, titleRowRef) => {
  // GSAP Animation for the title row
  if (titleRowRef.current) {
    gsap.fromTo(
      titleRowRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRowRef.current,
          start: "top 95%",
          end: "top 75%",
          toggleActions: "play none none reverse",
           },
      }
    );
  }

  // GSAP Animation for Images
  imagesRef.current.forEach((image, index) => {
    if (image) {
      if (index !== 0) { // for 2nd and 3rd images to come from left
        gsap.fromTo(
          image,
          { x: "-50%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: image,
              start: "top 65%",
              end: "top 65.5%",
              scrub: 1,
              toggleActions: "play reverse play reverse",
              immediateRender: false,
            },
          }
        );
      }
      // gsap.to(image, { //space between mobile screens 
      //   y: "-5%",
      //   ease: "power1.in",
      //   scrollTrigger: {
      //     trigger: image,
      //     start: "center 50%",
      //     end: "bottom 49%",
      //     // scrub: 1,
      //   },
      // });
      if (index !== 0) {
        gsap.to(image, {
          x: "-100%",
          opacity: 0,
          duration: 0.1,
          ease: "power1.in",
          scrollTrigger: {
            trigger: image,
            start: "bottom 38%",
            end: "bottom 0%",
            toggleActions: "play reverse play reverse",
            immediateRender: false,
          },
        });
      }
      if (index === 0) { //first image come from left
        gsap.fromTo(
          image,
          { x: "-50%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 0.2,
            ease: "power1.out",
            scrollTrigger: {
              trigger: image,
              start: "top 97%",
              end: "top 96%",
              scrub: 0.1,
              toggleActions: "play reverse play reverse",
              immediateRender: false,

            },
          }
        );
      }
    }
  });

  // Set up the text block animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".Carousel-paragraph",
      start: "top 12%",
      end: "bottom 58%",
      pin: true,
    },
  });

  // Fade-in and fade-out animation for the first text block
  const firstTextBlock = paragraphsRef.current[0];
  if (firstTextBlock) {
    gsap.fromTo(
      firstTextBlock,
      { opacity: 0 }, // Initial state: hidden and slightly below
      {
        opacity: 1,
        y: 0,
        duration: 1.5, // Fade-in duration
        ease: "power2.out",
        scrollTrigger: {
          trigger: firstTextBlock,
          start: "top 100%",
          end: "top 50%",
          scrub: 1, // Smooth scroll effect
          toggleActions: "play reverse play reverse",
        },
      }
    );

  }

  // Staggered animations for the remaining text blocks
  paragraphsRef.current.slice(1).forEach((textBlock, index) => {
    if (textBlock) {
      tl.fromTo(
        textBlock,
        { opacity: 0 },
        { ease: "power1.inOut" },
      ).to(
        textBlock,
        { ease: "power1.inOut" },
        "+=0.5"
      );
    }
  });

  // Scroll-triggered visibility updates for text blocks
  ScrollTrigger.create({
    trigger: ".Carousel-paragraph",
    start: "top 50%",
    end: "bottom 40%",
    scrub: 1,
    onUpdate: (self) => {
      const totalBlocks = paragraphsRef.current.length;
      const activeIndex = Math.min(
        Math.floor(self.progress * totalBlocks),
        totalBlocks - 1
      );

      paragraphsRef.current.forEach((block, index) => {
        if (block) {
          if (index === activeIndex) {
            gsap.set(block, { visibility: "visible", opacity: 1 });
          } else {
            gsap.set(block, { visibility: "hidden", opacity: 0 });
          }
        }
      });
    },
  });

  ScrollTrigger.refresh();
};
