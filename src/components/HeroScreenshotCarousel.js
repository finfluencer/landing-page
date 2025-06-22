import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScreenshotContainer from "./ScreenshotContainer";

// Image imports
import dashboardLandingImg from "../images/dashboard-landing.jpeg";
import portfolioHealthImg from "../images/portfolio-health.jpeg";
import portfolioAIRecommendationsImg from "../images/portfolio-AI-recommnedations.jpeg";
import dashboardHeadlinesImg from "../images/dashboard-headlines.jpeg";
import dashboardFinancialGoalsImg from "../images/dashboard-financial-goals.jpeg";
import discoverInfluencersImg from "../images/discover-influencers.jpeg";

const screenshots = [
  {
    id: 1,
    src: dashboardLandingImg,
    alt: "Dashboard Landing View",
  },
  {
    id: 2,
    src: portfolioHealthImg,
    alt: "Portfolio Health Overview",
  },
  {
    id: 3,
    src: portfolioAIRecommendationsImg,
    alt: "AI-Powered Recommendations",
  },
  {
    id: 4,
    src: dashboardHeadlinesImg,
    alt: "Market Headlines Dashboard",
  },
  {
    id: 5,
    src: dashboardFinancialGoalsImg,
    alt: "Financial Goals Tracking",
  },
  {
    id: 6,
    src: discoverInfluencersImg,
    alt: "Discover Influencers",
  },
];

const HeroScreenshotCarousel = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images to prevent flicker
  useEffect(() => {
    const imagePromises = screenshots.map((screenshot) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = screenshot.src;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Still show carousel even if some images fail
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!imagesLoaded) return; // Don't start auto-scroll until images are loaded

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [screenshots.length, imagesLoaded]);

  return (
    <div className={`relative ${className}`}>
      {/* Fixed iPhone Frame with Changing Screenshots */}
      <div className="relative w-full max-w-xs mx-auto">
        {/* Mobile Phone Frame - Responsive Scaling */}
        <div className="relative mx-auto max-w-xs transform scale-75 lg:scale-100">
          {/* Phone Outer Frame */}
          <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
            {/* Phone Inner Frame */}
            <div className="relative bg-gray-900 rounded-[2rem] p-1">
              {/* Screen Container */}
              <div className="relative bg-white rounded-[1.75rem] overflow-hidden">
                {/* Notch - Fixed */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-black rounded-b-2xl w-32 h-6 flex items-center justify-center">
                    <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                </div>

                {/* Status Bar - Fixed */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/20 to-transparent h-12 flex items-start justify-between px-6 pt-2">
                  <div className="flex items-center gap-1 text-xs text-white font-medium">
                    <span>9:41</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 border border-white/50 rounded-sm">
                      <div className="w-full h-full bg-white/80 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Loading State */}
                {!imagesLoaded && (
                  <div className="flex items-center justify-center min-h-[500px] bg-gray-100">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
                  </div>
                )}

                {/* Changing Screenshots */}
                {imagesLoaded && (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={screenshots[currentIndex].src}
                      alt={screenshots[currentIndex].alt}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-full h-auto display-block"
                      loading="eager"
                      onError={(e) => {
                        console.error(
                          `Failed to load image: ${screenshots[currentIndex].src}`
                        );
                        e.target.style.display = "none";
                      }}
                    />
                  </AnimatePresence>
                )}

                {/* Home Indicator - Fixed */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-32 h-1 bg-black/30 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Phone Highlights */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Phone Shadow */}
          <div className="absolute inset-0 rounded-[2.5rem] shadow-2xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreenshotCarousel;
