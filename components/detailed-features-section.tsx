"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion" // Import motion

export function DetailedFeaturesSection() {
  const detailedFeatures = [
    {
      title: "Advanced AI Trend Prediction",
      description:
        "Our proprietary AI algorithms analyze billions of data points from social media platforms to identify emerging trends with unparalleled accuracy. Get a competitive edge by knowing what's next.",
    },
    {
      title: "Comprehensive Analytics Dashboard",
      description:
        "Visualize your content performance and trend insights with an intuitive, customizable dashboard. Track key metrics, identify growth opportunities, and make data-driven decisions effortlessly.",
    },
    {
      title: "Personalized Niche Discovery",
      description:
        "Receive tailored recommendations for trending niches that align with your content style and audience demographics. Expand your reach and connect with new communities.",
    },
    {
      title: "Real-time Alerts & Notifications",
      description:
        "Never miss a viral moment with instant alerts for fast-rising trends and breaking topics. Be the first to create content that captures attention.",
    },
    {
      title: "Competitor Benchmarking",
      description:
        "Understand your position in the market by comparing your content performance against competitors. Identify strengths, weaknesses, and strategies for improvement.",
    },
    {
      title: "Multi-Platform Integration",
      description:
        "Seamlessly connect your YouTube and TikTok accounts to get a holistic view of trends and performance across your most important social media channels.",
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section
      id="detailed-features-section"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900 scroll-mt-16"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Dive Deeper into NexTrend's Capabilities
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Explore the powerful features that make NexTrend your ultimate content growth partner.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-start transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
