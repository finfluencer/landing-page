import React from "react";
import { motion } from "framer-motion";
import { howItWorksSteps } from "../data/landingPageData";

const HowItWorks = () => {
  return (
    <section className="py-20 section-padding bg-background-surface/30">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get started with AI-powered trading in three simple steps
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative text-center"
            >
              {/* Step Card */}
              <div className="card hover:glow-effect transition-all duration-300 group">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connection Arrow (hidden on mobile) */}
              {index < howItWorksSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <svg
                    className="w-12 h-6 text-text-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-6">
            Ready to transform your trading experience?
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
