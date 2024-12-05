"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FramerComponent from "../Discount/Discount";
import Downloadsvg from "../../../../public/svg/download.svg"
import Tick from "../../../../public/svg/tick.svg"
import blob from "../../../../public/images/blob3.png"


gsap.registerPlugin(ScrollTrigger);

const SubscriptionPlans: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Monthly" | "Yearly">("Monthly");
  const priceRef = useRef<HTMLParagraphElement | null>(null);

   const headingRef = useRef(null);

    useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom",   // Trigger the animation when the top of the element hits the center of the viewport
          end: "top 80%",      // Fade out as it reaches 100px from the top of the viewport
          scrub: true,           // Smooth scroll effect
        },
      }
    );
  }, []);

  useEffect(() => {
    // Animation for blob-wrapper
    const blobWrapper = document.querySelector(".blob-wrapper");
    if (blobWrapper) {
      gsap.fromTo(
        blobWrapper,
        { y: 100, opacity: 0 }, // Start position (right) and opacity (light)
        {
          y: -50, // End position (left)
          opacity: 1, // End opacity (dark)
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blob-wrapper",
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );
    }
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    // Animate pointvalue elements when activeTab changes
    const pointValues = document.querySelectorAll(".pointvalue");
    pointValues.forEach((el) => {
      gsap.fromTo(
        el,
        { x: -50, opacity: 0 }, // Start position (left) and opacity (light)
        {
          x: 0, // End position (original)
          opacity: 1, // End opacity (dark)
          duration: 0.6, // Animation duration
          ease: "power3.out",
        }
      );
    });
  }, [activeTab]); // Trigger animation when activeTab changes

  return (
    <section id="subscription-plans" className="section">
      <div data-framer-name="blob" className="blob-wrapper">
        <div
          data-framer-background-image-wrapper="true"
          className="framer-blob-3"
        >
          <img
            src={blob.src}
            sizes="450px"
            alt="Blob background"
          />
        </div>
      </div>

      <div data-framer-name="pricing" className="pricing">
        <div data-framer-name="text column" className="pricing-text">
          <h2 ref={headingRef} className="Text-heading">Thoughtful pricing designed for you</h2>
          <div className="discount">
            <p className="Text-body">
              Start free upgrade anytime. Transparent pricing that empowers you
              to achieve your goals, your way.
            </p>
            <div className="monthlyyearly">
              <FramerComponent setActiveTab={setActiveTab} />
            </div>
          </div>
        </div>
        <div className="frammer-plans">
          <div className="basic_plan">
            <p className="plan">Basic plan</p>
            <p className="price">
              $ FREE <span>forever</span>
            </p>
            <a className="plans-download-button">
              DOWNLOAD APP
              <Downloadsvg fill="white" />
            </a>
            <div className="plan-features">
              <div className="plan-feature-svg">
                <Tick width="24px"
                  fill="#c5fa75"
                  stroke="#c5fa75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <p className="plan-features-para">
                  Effortlessly track your workouts and set goals
                </p>
              </div>
              <div className="plan-feature-svg">
                <Tick
                  width="24px"
                  fill="#c5fa75"
                  stroke="#c5fa75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <p className="plan-features-para">Join our vibrant fitness community</p>
              </div>
              <div className="plan-feature-svg">
                <Tick width="24px"
                  fill="#c5fa75"
                  stroke="#c5fa75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <p className="plan-features-para">
                  Get insights from basic AI analysis of your workout data
                </p>
              </div>
              <div className="plan-feature-svg  ">
                <Tick width="24px"
                  fill="#c5fa75"
                  stroke="#c5fa75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  className="svg1"
                />
                <p className="plan-features-para">
                  Participate in a selection of live workouts for real-time
                  motivation
                </p>
              </div>
            </div>
          </div>
          <div className="advance_plan">
            <div className="discountcomponent">
              <FramerComponent setActiveTab={setActiveTab} />
            </div>
            <p className="plan">Advanced plan</p>
            <p className="price" ref={priceRef}>
              {activeTab === "Monthly" ? (
                <>
                  $ 12.
                  <span className="pointvalue">99</span>
                  <span className="calendar" style={{ fontSize: '18px' }}> /month</span>
                </>
              ) : (
                <>
                  $ 124.
                  <span className="pointvalue">70</span>
                  <span className="calendar" style={{ fontSize: '18px' }}> /month</span>
                </>
              )}
            </p>
            <a className="plans-download-button">
              DOWNLOAD APP
              <Downloadsvg fill="white" />
            </a>
            <div className="plan-features">
              <div className="plan-feature-svg">
                <Tick width="24px"
                  fill="#c5fa75"
                  stroke="#c5fa75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <p className="plan-features-para">Get customized, goal-focused workouts</p>
              </div>
              <div className="plan-feature-svg">
                <Tick width="24px"
                  fill="#c5fa75"
                  stroke="#c5fa75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  className="svg2"
                />
                <p className="plan-features-para">
                  Enjoy unlimited access to live workout sessions led by top-tier trainers
                </p>
              </div>
              <div className="plan-feature-svg">
                <Tick width="24px"
                  fill="#c5fa75"
                  stroke="#c5fa75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <p className="plan-features-para">Receive personalized nutrition advice</p>
              </div>
              <div className="plan-feature-svg" >
                <Tick width="24px"
                  fill="#c5fa75"
                  stroke="#c5fa75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <p className="plan-features-para">Dive deep into data with advanced AI insights</p>
              </div>
              <div className="plan-feature-svg">
                <Tick width="24px"
                  fill="#c5fa75"
                  stroke="#c5fa75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  className="svg2"
                />
                <p className="plan-features-para">
                  Attend exclusive online workshops and seminars hosted by renowned fitness
                  trainers
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
