import React, { useState } from "react";
import { motion } from "framer-motion";
import { heroData } from "../data/landingPageData";
import { cn } from "../utils/cn";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend/email service
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
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
                onSubmit={handleEmailSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-background-surface border border-border text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={cn(
                    "btn-primary whitespace-nowrap",
                    isSubmitted && "bg-primary-green hover:bg-primary-green"
                  )}
                >
                  {isSubmitted ? "✓ Subscribed!" : heroData.ctaText}
                </button>
              </form>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
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
            </motion.div>
          </motion.div>

          {/* Right Side - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Dashboard Container - Partially Cropped */}
            <div className="relative overflow-hidden">
              {/* Main Dashboard */}
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 20 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="bg-background-surface border border-border rounded-2xl p-6 shadow-2xl w-[120%] glow-effect"
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-text-primary">
                    Portfolio
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
                    <span className="text-sm text-text-secondary">Live</span>
                  </div>
                </div>

                {/* Portfolio Value */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-text-primary mb-1">
                    ₹12,78,340.52
                  </div>
                  <div className="text-primary-green text-sm flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    +12.4% (₹1,41,280.32) Today
                  </div>
                </div>

                {/* Stock Holdings */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-xs font-bold">
                        RIL
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary">
                          RELIANCE
                        </div>
                        <div className="text-xs text-text-secondary">
                          234 shares
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-text-primary">
                        ₹2,34,500
                      </div>
                      <div className="text-primary-green text-sm">+2.3%</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-purple rounded-full flex items-center justify-center text-xs font-bold">
                        TCS
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary">
                          TCS
                        </div>
                        <div className="text-xs text-text-secondary">
                          47 shares
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-text-primary">
                        ₹1,89,200
                      </div>
                      <div className="text-primary-green text-sm">+0.8%</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center text-xs font-bold">
                        INF
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary">
                          INFY
                        </div>
                        <div className="text-xs text-text-secondary">
                          112 shares
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-text-primary">
                        ₹3,12,000
                      </div>
                      <div className="text-primary-green text-sm">+5.7%</div>
                    </div>
                  </div>
                </div>

                {/* AI Insights Panel */}
                <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-lg p-4 border border-primary-blue/20">
                  <h4 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center">
                      <span className="text-xs">🤖</span>
                    </div>
                    AI Insights
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-primary-green">
                      <div className="w-2 h-2 bg-primary-green rounded-full" />
                      Strong Buy Signal: HDFC - 87% confidence
                    </div>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      Market volatility detected in banking sector
                    </div>
                    <div className="flex items-center gap-2 text-primary-blue">
                      <div className="w-2 h-2 bg-primary-blue rounded-full" />
                      Consider taking profits on INFY position
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile App Mockup - Floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-8 -left-16 z-10"
              >
                <div className="bg-black rounded-3xl p-2 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <div className="bg-background-surface rounded-2xl p-4 w-64 h-80 overflow-hidden">
                    {/* Mobile App Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-bold text-text-primary">
                        Finfluencer
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-primary-green rounded-full" />
                        <div className="w-1 h-1 bg-primary-green rounded-full" />
                        <div className="w-1 h-1 bg-primary-green rounded-full" />
                      </div>
                    </div>

                    {/* Notification */}
                    <div className="bg-primary-blue/20 border border-primary-blue/40 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-primary-blue rounded-full" />
                        <span className="text-xs font-semibold text-primary-blue">
                          Buy Alert
                        </span>
                      </div>
                      <div className="text-sm text-text-primary font-semibold">
                        HDFC Bank
                      </div>
                      <div className="text-xs text-text-secondary">
                        AI Confidence: 92%
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-background rounded-lg p-2">
                        <div className="text-xs text-text-secondary">
                          Today's P&L
                        </div>
                        <div className="text-sm font-bold text-primary-green">
                          +₹14,128
                        </div>
                      </div>
                      <div className="bg-background rounded-lg p-2">
                        <div className="text-xs text-text-secondary">
                          Signals
                        </div>
                        <div className="text-sm font-bold text-text-primary">
                          3 Active
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-2">
                      <button className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white text-sm py-2 rounded-lg transition-colors">
                        Execute Trade
                      </button>
                      <button className="w-full bg-background-secondary hover:bg-background text-text-primary text-sm py-2 rounded-lg transition-colors">
                        View Analysis
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
