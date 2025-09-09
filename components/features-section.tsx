"use client"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, LineChart, TrendingUp, Bell, Target, LayoutDashboard } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { FeatureDetail } from "./types"
import { motion } from "framer-motion" // Import motion

export function FeaturesSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null)

  const features: FeatureDetail[] = [
    {
      icon: Brain,
      title: "AI-powered trend prediction (YouTube)",
      description: "Leverage advanced AI to predict emerging trends on YouTube before they go mainstream.",
      longDescription:
        "Our sophisticated AI models analyze vast amounts of YouTube data, including video views, engagement rates, search queries, and emerging creator content, to identify nascent trends. This allows you to create content that resonates with a growing audience before the competition catches up.",
    },
    {
      icon: TrendingUp,
      title: "Real-time trend tracking (YouTube)",
      description: "Monitor trending topics and content in real-time to stay ahead of the curve.",
      longDescription:
        "Stay updated with live data feeds and instant notifications on trending topics. Our real-time tracking ensures you never miss a viral opportunity, providing you with the freshest insights to inform your content strategy.",
    },
    {
      icon: LayoutDashboard,
      title: "User dashboard with visual analytics",
      description: "Access an intuitive dashboard with visual analytics for comprehensive insights into trends.",
      longDescription:
        "Our user-friendly dashboard presents complex data in easy-to-understand visual formats. Track your content performance, monitor trend progression, and gain actionable insights through interactive charts and graphs, all in one place.",
    },
    {
      icon: Target,
      title: "Personalized niche recommendations (YouTube)",
      description: "Receive tailored niche recommendations based on your content style and audience.",
      longDescription:
        "NexTrend's AI learns from your content, audience demographics, and performance data to suggest highly personalized niche opportunities. Discover untapped markets and content angles that align perfectly with your brand and audience interests.",
    },
    {
      icon: Bell,
      title: "Trend alerts for TikTok",
      description: "Get instant alerts for fast-rising trends and viral content on TikTok.",
      longDescription:
        "Receive immediate notifications directly to your device or email when new trends emerge on TikTok. Our alerts are designed to give you a head start, allowing you to jump on viral content opportunities as they happen.",
    },
    {
      icon: LineChart,
      title: "Performance benchmarking for TikTok",
      description: "Compare your TikTok content performance against competitors and industry benchmarks.",
      longDescription:
        "Understand where your TikTok content stands against industry leaders and direct competitors. Our benchmarking tools provide detailed comparisons on engagement, reach, and growth metrics, helping you identify areas for improvement and strategic advantage.",
    },
  ]

  const openFeatureDialog = (feature: FeatureDetail) => {
    setSelectedFeature(feature)
    setIsDialogOpen(true)
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="features-section" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Features never seen before
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            AI-driven insights to boost your content strategy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className="flex flex-col items-center text-center p-6 shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </CardDescription>
                <Button
                  variant="outline"
                  className="mt-auto border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900 bg-transparent transition-colors duration-200"
                  onClick={() => openFeatureDialog(feature)}
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedFeature && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[600px] bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedFeature.title}</DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-400">
                {selectedFeature.description}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-gray-800 dark:text-gray-200">{selectedFeature.longDescription}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
