import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featureSlides } from "../data/features";
import { cn } from "../utils/cn";

const FeatureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

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
    <section className="py-20 section-padding bg-background-surface/50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Everything you need to make smarter trading decisions in one
            intuitive platform
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Main Slide Display */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl bg-background-surface border border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-between p-8"
              >
                {/* Left Side - Image/Mockup */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative">
                    {/* Phone mockup frame */}
                    <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                      <div className="w-full h-full bg-background rounded-2xl overflow-hidden relative">
                        {/* Mockup placeholder - replace with actual screenshots */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-primary-purple/20 to-primary-green/20 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">
                              {featureSlides[currentSlide].title.includes(
                                "Dashboard"
                              )
                                ? "📊"
                                : featureSlides[currentSlide].title.includes(
                                    "News"
                                  )
                                ? "📰"
                                : featureSlides[currentSlide].title.includes(
                                    "Discover"
                                  )
                                ? "🔍"
                                : "💼"}
                            </div>
                            <p className="text-sm text-text-secondary">
                              {featureSlides[currentSlide].title} Screen
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 pl-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold mb-6 text-text-primary">
                      {featureSlides[currentSlide].title}
                    </h3>

                    <div className="space-y-4">
                      {featureSlides[currentSlide].bullets.map(
                        (bullet, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.3 + index * 0.1,
                              duration: 0.5,
                            }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-primary-blue rounded-full" />
                            <p className="text-text-secondary text-lg">
                              {bullet}
                            </p>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background-surface border border-border rounded-full flex items-center justify-center hover:bg-background-secondary transition-all duration-200 z-10"
          >
            <svg
              className="w-6 h-6 text-text-primary"
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
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background-surface border border-border rounded-full flex items-center justify-center hover:bg-background-secondary transition-all duration-200 z-10"
          >
            <svg
              className="w-6 h-6 text-text-primary"
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
          <div className="flex justify-center mt-8 gap-2">
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
          <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary-blue"
              initial={{ width: "0%" }}
              animate={{
                width: `${((currentSlide + 1) / featureSlides.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
