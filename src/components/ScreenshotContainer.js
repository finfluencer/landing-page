import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const ScreenshotContainer = ({
  imageSrc,
  alt,
  className = "",
  showFrame = true,
  animate = true,
  delay = 0,
  scale = 1,
}) => {
  const MotionDiv = animate ? motion.div : "div";
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 30, scale: 0.95 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        transition: { delay, duration: 0.6, ease: "easeOut" },
        viewport: { once: true, margin: "-50px" },
      }
    : {};

  if (!showFrame) {
    return (
      <MotionDiv
        {...animationProps}
        className={cn("relative", className)}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          width: `${scale * 100}%`,
          height: `${scale * 100}%`,
        }}
      >
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-auto rounded-2xl shadow-2xl"
          loading="lazy"
        />
      </MotionDiv>
    );
  }

  return (
    <MotionDiv
      {...animationProps}
      className={cn("relative", className)}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        width: `${scale * 100}%`,
        height: `${scale * 100}%`,
      }}
    >
      {/* Mobile Phone Frame */}
      <div className="relative mx-auto max-w-sm">
        {/* Phone Outer Frame */}
        <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
          {/* Phone Inner Frame */}
          <div className="relative bg-gray-900 rounded-[2rem] p-1">
            {/* Screen Container */}
            <div className="relative bg-white rounded-[1.75rem] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-black rounded-b-2xl w-32 h-6 flex items-center justify-center">
                  <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                </div>
              </div>

              {/* Status Bar */}
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

              {/* Screenshot */}
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-auto display-block"
                loading="lazy"
                onError={(e) => {
                  console.error(`Failed to load image: ${imageSrc}`);
                  e.target.style.display = "none";
                }}
              />

              {/* Home Indicator */}
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
    </MotionDiv>
  );
};

// Alternative simpler phone frame for smaller use cases
export const SimplePhoneFrame = ({
  imageSrc,
  alt,
  className = "",
  animate = true,
  delay = 0,
}) => {
  const MotionDiv = animate ? motion.div : "div";
  const animationProps = animate
    ? {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { delay, duration: 0.5 },
        viewport: { once: true },
      }
    : {};

  return (
    <MotionDiv
      {...animationProps}
      className={cn("relative max-w-xs mx-auto", className)}
    >
      <div className="bg-black rounded-3xl p-1 shadow-2xl">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-auto rounded-2xl"
          loading="lazy"
          onError={(e) => {
            console.error(`Failed to load image: ${imageSrc}`);
            e.target.style.display = "none";
          }}
        />
      </div>
    </MotionDiv>
  );
};

export default ScreenshotContainer;
