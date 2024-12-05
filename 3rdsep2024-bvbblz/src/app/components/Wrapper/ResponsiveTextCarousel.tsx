"use client";
import React, { useState, useEffect } from "react";
import TextCarousel from "../TextCarousel/TextCarousel";
import ParallaxDuo from "../ParallaxDuo/ParallaxDuo";

// Define the type for window size
type Size = {
  width: number; // Type as number
  height: number; // Type as number
};

function useWindowSize() {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 }); // Initialize with default values

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Set the initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

function ResponsiveTextCarousel() {
  const { width } = useWindowSize(); // Use the hook to get window width
  const isLargeScreen = width >= 1300; // No need to check if width is defined

  return (
    <div>
      {/* Use a fragment to ensure the same structure is returned */}
      {isLargeScreen ? (
        <>
          <TextCarousel />
          <ParallaxDuo />
        </>
      ) : (
        <>
          <ParallaxDuo />
          <TextCarousel />
        </>
      )}
    </div>
  );
}

export default ResponsiveTextCarousel;
