"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Prev from "../../../../public/svg/prev.svg";

const Footer = () => {
  const [showScrollCircle, setShowScrollCircle] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowScrollCircle(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of the footer is visible
      }
    );

    const footerElement = document.querySelector("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-column">
            <h4>Info</h4>
            <a href="./terms">Terms &amp; Conditions</a>
            <a href="./privacy">Privacy Policy</a>
            <a
              href="https://odsgns.lemonsqueezy.com/checkout/buy/ebb7dc99-431c-4f11-a080-6b75de4b9c51"
              target="_blank"
              rel="noopener"
            >
              iPhone Download
            </a>
            <a
              href="https://odsgns.lemonsqueezy.com/checkout/buy/ebb7dc99-431c-4f11-a080-6b75de4b9c51"
              target="_blank"
              rel="noopener"
            >
              Android Download
            </a>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <a href="mailto:">Press Enquiries</a>
            <a href="mailto:">Support</a>
            <a href="mailto:">Email Us</a>
          </div>
          <div className="footer-column">
            <h4>Other</h4>
            <a href="https://indeed.com/" target="_blank" rel="noopener">
              Careers
            </a>
            <a href="./blog">Blog</a>
            <a href="./#pricing-title">Pricing</a>
          </div>
        </div>

        <div className="footer-right">
          <div className="icons" >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
            >
              <div>
                <svg
                  className="socialmedia-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="rgb(0, 16, 30)"
                >
                  <g
                    fill="none"
                    stroke="rgb(0, 16, 30)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  >
                    <path d="M128,88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32.26239,32.2625A128.00746,128.00746,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,87.9862,48Z" />
                  </g>
                </svg>
              </div>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener"
            >
              <div>
                <svg
                  className="socialmedia-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="rgb(0, 16, 30)"
                >
                  <g
                    fill="none"
                    stroke="rgb(0, 16, 30)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  >
                    <circle cx="128" cy="128" r="34" />
                    <rect x="32" y="32" width="192" height="192" rx="48" />
                    <circle cx="180" cy="76" r="16" />
                  </g>
                </svg>
              </div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
            >
              <div>
                <svg
                  className="socialmedia-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="rgb(0, 16, 30)"
                >
                  <g
                    fill="none"
                    stroke="rgb(0, 16, 30)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  >
                    <circle cx="128" cy="128" r="96" />
                    <path d="M168,88.00094H152a24,24,0,0,0-24,24v112" />
                    <line x1="96" y1="144.00094" x2="160" y2="144.00094" />
                  </g>
                </svg>
              </div>
            </a>
          </div>

          {/* Newsletter Form */}
          <div className="Newsletter-form"
          >
            <form
              method="POST"
            >
              <input
                type="email"
                name="email"
                placeholder="myemail@odsgns.com"
                className="footer_input"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
              <div className="getnewsbutton">
                <input
                  className="getnews"
                  type="submit"
                  value="GET NEWS"
                />
              </div>
            </form>
            <p
              className="footer_p"
            >
              Receive updates from our blog, app & offers directly to your inbox.
            </p>
          </div>
        </div>
      </div>

      {showScrollCircle && (
        <div
          onClick={handleScrollToTop}
          className={`scroll-circle-container ${showScrollCircle ? 'scroll-circle' : ''}`}
        >
          <button type="button" className="prev-svg" aria-label="Previous">
            <Prev
            className="rotated-prev-svg"
              alt="Back Arrow"
              width={30}
              height={30}
            /></button>
        </div>
      )}
      <div className="mark">
        <div className="copyright">© 2023 BVBBLZ all rights reserved</div>
        <div className="maker">Designed by odsgns.com 🎨</div>
      </div>
    </footer>
  );
};

export default Footer;
