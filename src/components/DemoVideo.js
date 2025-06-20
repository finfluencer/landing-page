import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

const DemoVideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="demo-video" className="py-20 section-padding">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">See It In Action</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Watch how Finfluencer transforms complex market data into actionable
            insights
          </p>
        </motion.div>

        {/* Phone Mockup with Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
              {/* Screen */}
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                {/* Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 via-primary-purple/30 to-primary-green/30 flex items-center justify-center">
                  {!isPlaying ? (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 group"
                    >
                      <svg
                        className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.button>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {/* Simulated video content */}
                      <div className="text-center">
                        <div className="animate-pulse mb-4">
                          <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4" />
                          <div className="space-y-2">
                            <div className="h-2 bg-text-muted rounded w-3/4 mx-auto" />
                            <div className="h-2 bg-text-muted rounded w-1/2 mx-auto" />
                          </div>
                        </div>
                        <p className="text-text-secondary text-sm">
                          Demo Playing...
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="backdrop-blur-card rounded-lg p-3">
                    <p className="text-sm text-text-secondary text-center">
                      60-Second Product Walkthrough
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Details */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
              <div className="absolute top-4 right-6 w-2 h-2 bg-gray-600 rounded-full" />
            </div>

            {/* Floating Action Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 btn-primary flex items-center gap-2 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Play Full Walkthrough
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video bg-background-surface rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Video Container */}
              <div className="w-full h-full bg-gradient-to-br from-primary-blue/20 via-primary-purple/20 to-primary-green/20 flex items-center justify-center">
                {/* Placeholder for actual video embed */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    Full Product Demo
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Complete walkthrough of Finfluencer's features
                  </p>
                  <p className="text-sm text-text-muted">
                    YouTube/Vimeo embed would go here
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DemoVideo;
