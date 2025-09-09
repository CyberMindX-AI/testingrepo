"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { motion } from "framer-motion" // Import motion

export default function DocsPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Documentation"
          description="Find comprehensive guides and API references for NexTrend."
          imageUrl="/images/docs-header.jpeg"
        />

        <motion.section
          className="py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 scroll-mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8">
            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">Getting Started</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Welcome to the NexTrend documentation! This section will guide you through the initial setup and how
                  to start using our platform.
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Creating your account</li>
                  <li>Connecting your social media platforms</li>
                  <li>Understanding your dashboard</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">
                  Features Deep Dive
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Explore the full capabilities of NexTrend, from AI-powered trend prediction to personalized niche
                  recommendations.
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
                  <li>AI-powered trend prediction (YouTube)</li>
                  <li>Real-time trend tracking (YouTube)</li>
                  <li>User dashboard with visual analytics</li>
                  <li>Personalized niche recommendations (YouTube)</li>
                  <li>Trend alerts for TikTok</li>
                  <li>Performance benchmarking for TikTok</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">API Reference</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  For developers, our API allows for seamless integration of NexTrend's insights into your own
                  applications.
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Authentication</li>
                  <li>Trend data endpoints</li>
                  <li>Content generation endpoints</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
