import React, { useState } from "react";
import { motion } from "framer-motion";
import { heroData } from "../data/landingPageData";
import { cn } from "../utils/cn";
import HeroScreenshotCarousel from "./HeroScreenshotCarousel";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "hero-email-capture",
          email: email,
        }).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
      setTimeout(() => setSubmitError(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/GIF Container */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-background via-background-surface to-background-secondary opacity-90" />
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-green/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 section-padding container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-40 md:py-20">
          {/* Left Side - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">{heroData.headline}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-8 max-w-xl lg:mx-0 mx-auto"
            >
              {heroData.subheadline}
            </motion.p>

            {/* Email Capture Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-md lg:mx-0 mx-auto mb-6"
            >
              <form
                name="hero-email-capture"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleEmailSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                {/* Hidden form name input for Netlify */}
                <input
                  type="hidden"
                  name="form-name"
                  value="hero-email-capture"
                />

                {/* Honeypot field for spam protection */}
                <input type="hidden" name="bot-field" />

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 rounded-lg bg-background-surface border border-border text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitted || isSubmitting}
                  className={cn(
                    "btn-primary whitespace-nowrap min-w-[140px]",
                    isSubmitted && "bg-primary-green hover:bg-primary-green",
                    isSubmitting && "opacity-75 cursor-not-allowed"
                  )}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : isSubmitted
                    ? "✓ Subscribed!"
                    : heroData.ctaText}
                </button>
              </form>

              {/* Error Message */}
              {submitError && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary-red text-sm mt-2 text-center lg:text-left"
                >
                  {submitError}
                </motion.p>
              )}
            </motion.div>

            {/* Secondary CTA */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button
                onClick={() => scrollToSection("demo-video")}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                {heroData.secondaryCtaText}
              </button>
            </motion.div> */}
          </motion.div>

          {/* Right Side - Screenshot Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-start lg:pl-20"
          >
            <HeroScreenshotCarousel className="w-full max-w-sm lg:max-w-md" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
