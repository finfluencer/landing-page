import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featureSlides } from "../data/features";
import { cn } from "../utils/cn";
import ScreenshotContainer from "./ScreenshotContainer";

const FeatureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images to prevent flicker
  useEffect(() => {
    const imagePromises = featureSlides.map((slide) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = slide.imageSrc;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Still show carousel even if some images fail
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featureSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featureSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featureSlides.length) % featureSlides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-12 md:py-16 section-padding bg-background-surface/50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Everything you need to make smarter investment decisions with
            curated insights from India's top financial influencers
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {!imagesLoaded && (
            <div className="flex items-center justify-center min-h-[280px] md:min-h-[320px] rounded-2xl bg-background-surface border border-border">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
            </div>
          )}

          {imagesLoaded && (
            <>
              {/* Main Slide Display */}
              <div className="relative h-auto min-h-[280px] md:min-h-[320px] overflow-hidden rounded-2xl bg-background-surface border border-border">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-1 md:gap-4 items-center p-2 md:p-3 min-h-[280px] md:min-h-[320px]"
                  >
                    {/* Left Side - Image/Mockup */}
                    <div className="flex items-center justify-center order-2 md:order-1">
                      <ScreenshotContainer
                        imageSrc={featureSlides[currentSlide].imageSrc}
                        alt={`${featureSlides[currentSlide].title} app screenshot`}
                        animate={false}
                        scale={0.7}
                        className="w-full max-w-full"
                      />
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex flex-col justify-center order-1 md:order-2 space-y-3">
                      <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-text-primary pt-10 md:pt-0">
                          {featureSlides[currentSlide].title}
                        </h3>

                        {/* Mobile: Paragraph Description */}
                        <div className="block md:hidden">
                          <p className="text-text-secondary text-sm leading-relaxed max-w-lg mx-auto">
                            {featureSlides[currentSlide].description}
                          </p>
                        </div>

                        {/* Desktop: Bullet Points */}
                        <div className="hidden md:block space-y-2 max-w-lg mx-auto md:mx-0">
                          {featureSlides[currentSlide].bullets.map(
                            (bullet, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0" />
                                <p className="text-text-secondary text-sm md:text-base leading-snug">
                                  {bullet}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-background-surface/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-background-secondary transition-all duration-200 z-20 shadow-lg"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-background-surface/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-background-secondary transition-all duration-200 z-20 shadow-lg"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center mt-5 gap-2">
                {featureSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-200",
                      currentSlide === index
                        ? "bg-primary-blue w-8"
                        : "bg-text-light hover:bg-text-muted"
                    )}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-3 h-1 bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary-blue"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${
                      ((currentSlide + 1) / featureSlides.length) * 100
                    }%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
