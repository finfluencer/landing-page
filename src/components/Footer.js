import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showFeatureModal, setShowFeatureModal] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with newsletter service
    console.log("Newsletter subscription:", email);
    setIsNewsletterSubscribed(true);
    setTimeout(() => setIsNewsletterSubscribed(false), 3000);
    setEmail("");
  };

  const openModal = (modalType) => {
    switch (modalType) {
      case "contact":
        setShowContactModal(true);
        break;
      case "feature":
        setShowFeatureModal(true);
        break;
      case "waitlist":
        setShowWaitlistModal(true);
        break;
    }
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowContactModal(false);
    setShowFeatureModal(false);
    setShowWaitlistModal(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <footer className="bg-background-secondary border-t border-border">
        <div className="section-padding container-max">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand Column */}
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold gradient-text mb-4">
                    Finfluencer
                  </h3>
                  <p className="text-text-secondary mb-6 max-w-md">
                    AI-powered trading insights that help you make smarter
                    investment decisions. Never miss a market move again.
                  </p>

                  {/* Newsletter Signup */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3">
                      Stay Updated
                    </h4>
                    <form
                      onSubmit={handleNewsletterSubmit}
                      className="flex gap-2"
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-4 py-2 rounded-lg bg-background-surface border border-border text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      />
                      <button
                        type="submit"
                        disabled={isNewsletterSubscribed}
                        className="px-6 py-2 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-lg font-medium transition-all duration-200"
                      >
                        {isNewsletterSubscribed ? "✓" : "Subscribe"}
                      </button>
                    </form>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-background-surface border border-border rounded-lg flex items-center justify-center hover:bg-background-secondary hover:border-primary-blue/50 transition-all duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-background-surface border border-border rounded-lg flex items-center justify-center hover:bg-background-secondary hover:border-primary-blue/50 transition-all duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-background-surface border border-border rounded-lg flex items-center justify-center hover:bg-background-secondary hover:border-primary-blue/50 transition-all duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h4 className="font-semibold text-text-primary mb-4">
                  Product
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-primary-blue transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-primary-blue transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-primary-blue transition-colors"
                    >
                      API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-primary-blue transition-colors"
                    >
                      Integration
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Support Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className="font-semibold text-text-primary mb-4">
                  Support
                </h4>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => openModal("contact")}
                      className="text-text-secondary hover:text-primary-blue transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openModal("feature")}
                      className="text-text-secondary hover:text-primary-blue transition-colors"
                    >
                      Suggest a Feature
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openModal("waitlist")}
                      className="text-text-secondary hover:text-primary-blue transition-colors"
                    >
                      Join Waitlist
                    </button>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-primary-blue transition-colors"
                    >
                      Help Center
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="border-t border-border pt-8 pb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-text-muted text-sm">
                © 2024 Finfluencer. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a
                  href="#"
                  className="text-text-muted hover:text-primary-blue transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-text-muted hover:text-primary-blue transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-text-muted hover:text-primary-blue transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {/* Contact Modal */}
        {showContactModal && (
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
              className="bg-background-surface border border-border rounded-2xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-text-primary">
                  Contact Us
                </h3>
                <button
                  onClick={closeModal}
                  className="text-text-muted hover:text-text-primary"
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
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-blue">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Press</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary-blue resize-none"
                ></textarea>
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Feature Suggestion Modal */}
        {showFeatureModal && (
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
              className="bg-background-surface border border-border rounded-2xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-text-primary">
                  Suggest a Feature
                </h3>
                <button
                  onClick={closeModal}
                  className="text-text-muted hover:text-text-primary"
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
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Feature Title"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
                <textarea
                  placeholder="Describe your feature idea..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary-blue resize-none"
                ></textarea>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="px-3 py-1 text-sm bg-primary-blue/20 text-primary-blue rounded-full"
                  >
                    📊 Analytics
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-sm bg-primary-green/20 text-primary-green rounded-full"
                  >
                    🤖 AI
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-sm bg-primary-purple/20 text-primary-purple rounded-full"
                  >
                    📱 Mobile
                  </button>
                </div>
                <button type="submit" className="w-full btn-primary">
                  Submit Suggestion
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Waitlist Modal */}
        {showWaitlistModal && (
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
              className="bg-background-surface border border-border rounded-2xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-text-primary">
                  Join Waitlist
                </h3>
                <button
                  onClick={closeModal}
                  className="text-text-muted hover:text-text-primary"
                >
                  <svg
                    className="w-6"
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
              </div>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-blue">
                  <option>I'm interested in...</option>
                  <option>Early Access</option>
                  <option>Beta Testing</option>
                  <option>Product Updates</option>
                  <option>All Features</option>
                </select>
                <button type="submit" className="w-full btn-primary">
                  Notify Me
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
