import React from "react";

// Image imports
import discoverInfluencersImg from "../images/discover-influencers.jpeg";
import newsVideosShortsImg from "../images/news-videos-shorts.jpeg";
import discoverThemesImg from "../images/discover-themes.jpeg";
import portfolioAIRecommendationsImg from "../images/portfolio-AI-recommnedations.jpeg";
import portfolioHealthImg from "../images/portfolio-health.jpeg";

// Hero Section Data
export const heroData = {
  headline: "India's Personal Finance Influencer in Your Pocket",
  subheadline:
    "Get the best investment ideas, news, and influencer insights—summarized for you. No jargon, just actionable ideas.",
  ctaText: "Get Early Access",
  secondaryCtaText: "Watch Demo",
};

// How It Works Data
export const howItWorksSteps = [
  {
    icon: "🔗",
    title: "Connect or Follow",
    description: "Link your broker or just follow along—no experience needed.",
  },
  {
    icon: "📰",
    title: "Get Curated Summaries",
    description:
      "Receive daily digests of market news, YouTube videos, and top influencer picks.",
  },
  {
    icon: "💡",
    title: "Act on Insights",
    description:
      "See simple, actionable ideas and execute trades in one tap (if you want).",
  },
];

// Sample Signal/Insight Data
export const sampleSignal = {
  symbol: "WIPRO",
  direction: "INFLUENCER PICK",
  confidence: 92,
  time: "Today",
  price: "₹1,650.20",
  change: "+1.8%",
  summary:
    "3 top YouTubers, including Akshat Shrivastava and Rachna Ranade, recommend Wipro this week. Key reason: Strong Q4 results and digital growth.",
};

export const featuresData = [
  {
    title: "Influencer Insights",
    description:
      "Get summarized picks from India's top finance YouTubers like Akshat Shrivastava and Rachna Ranade. No need to watch every video—get the gist in seconds.",
    icon: "📊",
    imageSrc: discoverInfluencersImg,
    bullets: [
      "Summarized picks from India's top finance YouTubers",
      "See what Akshat Shrivastava, Rachna Ranade, and more are recommending",
      "No need to watch every video—get the gist in seconds",
    ],
  },
  {
    title: "News Digest",
    description:
      "Stay informed with 1-minute summaries of the day's most important financial news. Understand market moves and government policies.",
    icon: "📰",
    imageSrc: newsVideosShortsImg,
    bullets: [
      "1-minute summaries of the day's most important financial news",
      "Understand market moves and government policies",
      "Stay ahead with curated, plain-English updates",
    ],
  },
  {
    title: "Theme Explorer",
    description:
      "Discover trending sectors like EV, IT, Banking, and Green Energy with simple explanations. Spot investment opportunities before the crowd.",
    icon: "🎯",
    imageSrc: discoverThemesImg,
    bullets: [
      "Discover trending sectors: EV, IT, Banking, Green Energy, etc.",
      "Learn why these themes matter—explained simply",
      "Spot opportunities before the crowd",
    ],
  },
  {
    title: "Easy Execution",
    description:
      "Connect your broker like Zerodha, Upstox, or Groww to act on investment ideas instantly. You can also just learn and follow.",
    icon: "⚡",
    imageSrc: portfolioAIRecommendationsImg,
    bullets: [
      "Connect your broker (Zerodha, Upstox, Groww, etc.)",
      "Act on ideas instantly, or just learn and follow",
      "No pressure—trade only if you want to",
    ],
  },
];

export const benefitsData = [
  {
    icon: "🧠",
    title: "No Jargon, Just Insights",
    description:
      "We explain every idea in plain English—perfect for beginners.",
  },
  {
    icon: "⏱️",
    title: "Save Hours Every Week",
    description:
      "Get all the research, news, and influencer picks in one place.",
  },
  {
    icon: "📈",
    title: "Learn as You Go",
    description: "Simple explanations for every insight and theme.",
  },
  {
    icon: "🔔",
    title: "Never Miss an Opportunity",
    description: "Stay ahead of market trends and influencer recommendations.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description: "Your data is protected with bank-level security.",
  },
  {
    icon: "🇮🇳",
    title: "Made for India",
    description: "Curated for Indian investors, by Indian experts.",
  },
];

export const testimonials = [
  {
    id: 1,
    avatar: "RJ",
    name: "Rajesh Jain",
    designation: "Financial Advisor",
    text: "This concept could revolutionize how beginners approach investing. Having all the best financial influencers' insights in one place would save countless hours of research.",
    rating: 5,
  },
  {
    id: 2,
    avatar: "PS",
    name: "Priya Singh",
    designation: "Investment Enthusiast",
    text: "I spend hours watching different YouTubers for market insights. An app that summarizes the best picks from trusted influencers would be incredibly valuable for wealth building.",
    rating: 5,
  },
  {
    id: 3,
    avatar: "AK",
    name: "Amit Kumar",
    designation: "Working Professional",
    text: "As someone who's too busy to follow all the financial news and influencer content, this concept addresses exactly what I need—curated, actionable insights for smart investing.",
    rating: 5,
  },
  {
    id: 4,
    avatar: "SK",
    name: "Sneha Kapoor",
    designation: "Finance Student",
    text: "Learning from India's top financial minds in bite-sized summaries would accelerate anyone's investment journey. This could democratize quality financial education.",
    rating: 5,
  },
];

export const faqData = [
  {
    question: "Do I need to know about stocks?",
    answer:
      "No! We explain everything in plain English. You can just follow along and learn as you go.",
  },
  {
    question: "Can I trade from the app?",
    answer:
      "You can connect your broker (Zerodha, Upstox, Groww, etc.) and execute trades, but you don't have to. You can just use the app for insights and learning.",
  },
  {
    question: "Where do the insights come from?",
    answer:
      "We summarize news, YouTube videos, and influencer recommendations using AI. Influencers include Akshat Shrivastava, Rachna Ranade, and more.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use bank-level encryption and security protocols. Your trading data is protected with 256-bit SSL encryption and we're fully compliant with Indian regulations.",
  },
  {
    question: "What's free vs premium?",
    answer:
      "Free tier includes daily news and influencer summaries. Premium adds advanced analytics, theme tracking, and unlimited insights starting at ₹149/month.",
  },
  {
    question: "Can I paper trade first?",
    answer:
      "Absolutely! We offer a paper trading mode so you can test ideas with virtual money before risking real capital.",
  },
];

export const deepDiveData = {
  title: "Portfolio Health at a Glance",
  subtitle: "Complete Investment Overview",
  description:
    "Track your entire investment portfolio with real-time insights, performance analytics, and AI-powered recommendations tailored for Indian markets.",
  imageSrc: portfolioHealthImg,
  features: [
    {
      title: "Real-time Portfolio Tracking",
      description: "Monitor your investments across all brokers in one place",
      icon: "📊",
    },
    {
      title: "Performance Analytics",
      description: "Detailed insights into your portfolio performance",
      icon: "📈",
    },
    {
      title: "Risk Assessment",
      description: "AI-powered risk analysis and diversification suggestions",
      icon: "🛡️",
    },
    {
      title: "Tax Optimization",
      description: "Smart tax-saving strategies for Indian investors",
      icon: "��",
    },
  ],
};
