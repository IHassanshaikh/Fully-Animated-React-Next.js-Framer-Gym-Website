import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animatePhoneCarouselLaptop = (imagesRef, paragraphsRef, titleRowRef) => {

  if (titleRowRef.current) {
    gsap.fromTo(
      titleRowRef.current,
      { opacity: 0 }, // Initial state: hidden and slightly below
      {
        opacity: 1,
        duration: 1, // Duration of the fade-in effect
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRowRef.current,
          start: "top 95%", // Start the animation when the top of the title row is 80% from the top of the viewport
          toggleActions: "play none none reverse", // Play the animation on scroll and reverse when scrolling back
        },
      }
    );
  }
  // GSAP Animation for Images
  imagesRef.current.forEach((image, index) => {
    if (image) {
      if (index !== 0) {
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
              start: "top 55%",
              end: "top 55.5%",
              scrub: 0.5,
              toggleActions: "play reverse play reverse",
              immediateRender: false,
            },
          }
        );
      }
      gsap.to(image, {
        y: "-10%",
        ease: "power1.in",
        scrollTrigger: {
          trigger: image,
          start: "center 40%",
          end: "bottom 25%",
          scrub: 0.5,
        },
      });
      if (index !== 0) {
        gsap.to(image, {
          x: "-100%",
          opacity: 0,
          duration: 0.1,
          ease: "power1.in",
          scrollTrigger: {
            trigger: image,
            start: "bottom 60%",
            end: "bottom 0%",
            toggleActions: "play reverse play reverse",
            immediateRender: false,
          },
        });
      }
      if (index === 0) {
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
              start: "top 95%",
              end: "top 94%",
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
      start: "top 3%", // Start earlier so the text block shows in time
      end: "bottom 100%",
      pin: true,
    },
  });

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
        { ease: "power1.inOut" }
      ).to(
        textBlock,
        { ease: "power1.inOut" },
        "+=1"
      );
    }
  });

  // Handle instant text block changes
  ScrollTrigger.create({
    trigger: ".Carousel-paragraph",
    start: "top 50%",
    end: "bottom 40%",
    scrub: 1,
    onUpdate: (self) => {
      const totalBlocks = paragraphsRef.current.length;

      // Get the index of the currently active text block
      const activeIndex = Math.min(
        Math.floor(self.progress * totalBlocks),
        totalBlocks - 1
      );

      // Loop through all text blocks
      paragraphsRef.current.forEach((block, index) => {
        if (block) {
          // Instantly show the active block and hide the others
          if (index === activeIndex) {
            gsap.set(block, { visibility: "visible", opacity: 1 }); // Show the active block
          } else {
            gsap.set(block, { visibility: "hidden", opacity: 0 }); // Instantly hide the others
          }
        }
      });
    },
  });


  ScrollTrigger.refresh();
}; 
