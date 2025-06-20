import React from "react";
import Hero from "../components/Hero";
import FeatureCarousel from "../components/FeatureCarousel";
import DemoVideo from "../components/DemoVideo";
import HowItWorks from "../components/HowItWorks";
import LiveSignalWidget from "../components/LiveSignalWidget";
import BenefitGrid from "../components/BenefitGrid";
import Testimonials from "../components/Testimonials";
import DeepDive from "../components/DeepDive";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero Section */}
      <Hero />

      {/* Feature Spotlight Carousel */}
      <section id="feature-carousel">
        <FeatureCarousel />
      </section>

      {/* 60-Second Demo Video */}
      <DemoVideo />

      {/* How It Works Steps */}
      <HowItWorks />

      {/* Live Signal Widget */}
      <LiveSignalWidget />

      {/* Benefit Grid */}
      <BenefitGrid />

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Deep-Dive Screenshot Section */}
      <DeepDive />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Footer with Modals */}
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Finfluencer - AI-Powered Trading Insights</title>
    <meta
      name="description"
      content="Never miss a market move with AI-powered buy/sell alerts and plain-English insights. Transform your trading with Finfluencer."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      property="og:title"
      content="Finfluencer - AI-Powered Trading Insights"
    />
    <meta
      property="og:description"
      content="Never miss a market move with AI-powered buy/sell alerts and plain-English insights."
    />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Finfluencer - AI-Powered Trading Insights"
    />
    <meta
      name="twitter:description"
      content="Never miss a market move with AI-powered buy/sell alerts and plain-English insights."
    />
  </>
);
