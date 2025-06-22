import React from "react";
import { motion } from "framer-motion";
import { deepDiveData } from "../data/landingPageData";

const DeepDive = () => {
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
            <span className="gradient-text">Portfolio Health at a Glance</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Advanced analytics and insights to keep your portfolio optimized
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Phone/App Mockup */}
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-3 shadow-2xl">
                <div className="bg-background rounded-2xl overflow-hidden relative aspect-[9/16]">
                  {/* Mock Portfolio Health Screen */}
                  <div className="absolute inset-0 p-6">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-text-primary mb-2">
                        Portfolio Health
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                        <span className="text-sm text-text-secondary">
                          Excellent
                        </span>
                      </div>
                    </div>

                    {/* Portfolio Value */}
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-text-primary mb-1">
                        $127,543.21
                      </div>
                      <div className="text-sm text-primary-green">
                        +$2,143.50 (+1.71%)
                      </div>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="mb-6 h-32 bg-gradient-to-r from-primary-blue/20 via-primary-purple/20 to-primary-green/20 rounded-lg flex items-end justify-around p-2">
                      {[40, 60, 35, 80, 45, 70, 90].map((height, i) => (
                        <div
                          key={i}
                          className={`bg-primary-blue/60 rounded-t`}
                          style={{ height: `${height}%`, width: "8px" }}
                        />
                      ))}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="card text-center">
                        <div className="text-lg font-bold text-text-primary">
                          8.7
                        </div>
                        <div className="text-xs text-text-secondary">
                          Health Score
                        </div>
                      </div>
                      <div className="card text-center">
                        <div className="text-lg font-bold text-text-primary">
                          12
                        </div>
                        <div className="text-xs text-text-secondary">
                          Positions
                        </div>
                      </div>
                      <div className="card text-center">
                        <div className="text-lg font-bold text-text-primary">
                          4.2%
                        </div>
                        <div className="text-xs text-text-secondary">
                          Risk Level
                        </div>
                      </div>
                      <div className="card text-center">
                        <div className="text-lg font-bold text-text-primary">
                          89%
                        </div>
                        <div className="text-xs text-text-secondary">
                          Diversified
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-4 -right-4 backdrop-blur-card rounded-lg p-3 max-w-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-text-primary">
                    AI Insight
                  </span>
                </div>
                <p className="text-xs text-text-secondary">
                  Consider rebalancing tech positions for better diversification
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Callouts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {deepDiveData.callouts.map((callout, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                {/* Number Badge */}
                <div className="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {callout.point}
                </div>

                {/* Callout Content */}
                <div className="flex-1">
                  <p className="text-text-primary leading-relaxed">
                    {callout.text}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Additional Feature Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="card mt-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-green rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-text-primary">
                  Smart Alerts
                </h4>
              </div>
              <p className="text-text-secondary text-sm">
                Get notified instantly when your portfolio needs attention or
                when new opportunities arise
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-card rounded-2xl p-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Take Control of Your Portfolio
            </h3>
            <p className="text-text-secondary mb-6">
              Advanced portfolio analytics made simple and actionable
            </p>
            <button className="btn-primary">Explore Portfolio Features</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeepDive;
