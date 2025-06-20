import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sampleSignal } from "../data/landingPageData";

const LiveSignalWidget = () => {
  const [currentSignal, setCurrentSignal] = useState(sampleSignal);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock signal variations
  const mockSignals = [
    {
      symbol: "AAPL",
      direction: "BUY",
      confidence: 87,
      time: "2 min ago",
      price: "$185.42",
      change: "+2.3%",
    },
    {
      symbol: "TSLA",
      direction: "SELL",
      confidence: 92,
      time: "1 min ago",
      price: "$234.67",
      change: "-1.8%",
    },
    {
      symbol: "NVDA",
      direction: "BUY",
      confidence: 84,
      time: "3 min ago",
      price: "$498.23",
      change: "+4.1%",
    },
    {
      symbol: "MSFT",
      direction: "BUY",
      confidence: 79,
      time: "4 min ago",
      price: "$412.89",
      change: "+1.5%",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRefreshing(true);

      setTimeout(() => {
        const randomSignal =
          mockSignals[Math.floor(Math.random() * mockSignals.length)];
        setCurrentSignal(randomSignal);
        setLastUpdate(new Date());
        setIsRefreshing(false);
      }, 500);
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToFeatures = () => {
    document
      .getElementById("feature-carousel")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 85) return "text-primary-green";
    if (confidence >= 70) return "text-primary-blue";
    return "text-text-secondary";
  };

  const getDirectionColor = (direction) => {
    return direction === "BUY" ? "text-primary-green" : "text-primary-red";
  };

  return (
    <section className="py-20 section-padding">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Live AI Signals</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            See real-time trading signals powered by our AI algorithm
          </p>
        </motion.div>

        {/* Signal Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card relative overflow-hidden">
            {/* Refresh Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  isRefreshing
                    ? "bg-primary-blue animate-pulse"
                    : "bg-primary-green"
                }`}
              />
              <span className="text-xs text-text-muted">
                {isRefreshing ? "Updating..." : "Live"}
              </span>
            </div>

            {/* Signal Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary">
                  AI Trading Signal
                </h3>
                <span className="text-sm text-text-muted">
                  {currentSignal.time}
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSignal.symbol + currentSignal.time}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Stock Symbol and Direction */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-background-secondary rounded-xl flex items-center justify-center">
                      <span className="font-bold text-primary-blue">
                        {currentSignal.symbol}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-bold text-lg ${getDirectionColor(
                            currentSignal.direction
                          )}`}
                        >
                          {currentSignal.direction}
                        </span>
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            currentSignal.direction === "BUY"
                              ? "bg-primary-green/20 text-primary-green"
                              : "bg-primary-red/20 text-primary-red"
                          }`}
                        >
                          {currentSignal.direction}
                        </div>
                      </div>
                      <p className="text-sm text-text-secondary">
                        Price: {currentSignal.price}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className={`text-lg font-bold ${
                        currentSignal.change.startsWith("+")
                          ? "text-primary-green"
                          : "text-primary-red"
                      }`}
                    >
                      {currentSignal.change}
                    </div>
                  </div>
                </div>

                {/* Confidence Meter */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">
                      AI Confidence
                    </span>
                    <span
                      className={`font-bold ${getConfidenceColor(
                        currentSignal.confidence
                      )}`}
                    >
                      {currentSignal.confidence}%
                    </span>
                  </div>

                  <div className="w-full bg-background-secondary rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${
                        currentSignal.confidence >= 85
                          ? "bg-primary-green"
                          : currentSignal.confidence >= 70
                          ? "bg-primary-blue"
                          : "bg-text-muted"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${currentSignal.confidence}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 btn-primary">Execute Trade</button>
                  <button
                    onClick={scrollToFeatures}
                    className="flex-1 btn-secondary"
                  >
                    See More Signals
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-purple rounded-full blur-2xl" />
            </div>
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xs text-text-muted text-center mt-4"
          >
            * This is a demo signal for illustration purposes. Past performance
            does not guarantee future results.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveSignalWidget;
