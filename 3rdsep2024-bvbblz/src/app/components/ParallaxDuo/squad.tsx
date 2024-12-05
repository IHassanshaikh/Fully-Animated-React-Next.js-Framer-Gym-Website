import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from "../../../../public/images/picture1.png";
import image2 from "../../../../public/images/picture2.png";
import image3 from "../../../../public/images/picture3.png";
import image4 from "../../../../public/images/picture4.png";


gsap.registerPlugin(ScrollTrigger);


const Squad = () => {

   useEffect(() => {
    gsap.utils.toArray('.featured-image').forEach((image, i) => {
      const element = image as HTMLElement;
      gsap.to(element, {
       
        y: (i % 2 === 0) ? 40 : -20,  // Adjust the vertical movement
        ease: 'power1.out', 
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          scrub: 2,  // Longer scrub duration for smoother animation
        },
      });
    });
  }, []);


  return (
    <>
         <div className="phones-row">
        <div className="image-column">
          <div className="featured-image"> 
            <div className="background-image-wrapper custon-image-wrapper">
              <img
                src={image2.src}
                sizes="max((min(100vw - 120px, 800px) * 0.8 - 30px) / 2, 0px)"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="image-column">
          <div className="featured-image">
            <div className="background-image-wrapper">
              <img
                src={image1.src}
                sizes="max((min(100vw - 120px, 800px) * 0.8 - 30px) / 2, 0px)"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="image-column ">
          <div className="featured-image"> 
            <div className="background-image-wrapper custon-image-wrapper">
              <img
                src={image4.src}
                alt=""
                sizes="max((min(100vw - 120px, 1400px) - 90px) / 4, 0px)"
              />
            </div>
          </div>
        </div>
        <div className="image-column ">
          <div className="featured-image"> 
            <div className="background-image-wrapper ">
              <img
                src={image3.src}
                alt=""
                sizes="max((min(100vw - 120px, 1400px) - 90px) / 4, 0px)"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Squad
