"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RunPredictionsOverlay } from "@/components/run-predictions-overlay"
import { motion } from "framer-motion"
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Target,
  BarChart3,
  Lightbulb,
  Sparkles,
  ArrowUp,
  ArrowDown,
  Clock
} from "lucide-react"
import Image from "next/image"

export default function AITrendPage() {
  // TODO: Connect to backend API for AI trend data
  const trendPredictions = [
    {
      topic: "AI Video Generation",
      confidence: 94,
      timeframe: "Next 2 weeks",
      category: "Technology",
      growth: "+156%",
      description: "AI-powered video creation tools are gaining massive traction",
      thumbnail: "/images/content-example-1.jpeg"
    },
    {
      topic: "Sustainable Fashion",
      confidence: 87,
      timeframe: "Next 3 weeks", 
      category: "Lifestyle",
      growth: "+89%",
      description: "Eco-friendly fashion content is trending upward",
      thumbnail: "/images/content-example-2.jpeg"
    },
    {
      topic: "Remote Work Productivity",
      confidence: 76,
      timeframe: "Next 4 weeks",
      category: "Business", 
      growth: "+67%",
      description: "Work-from-home optimization content is rising",
      thumbnail: "/images/content-example-3.jpeg"
    }
  ]

  const aiInsights = [
    {
      title: "Peak Engagement Times",
      value: "2-4 PM EST",
      change: "+12%",
      trend: "up",
      icon: Clock
    },
    {
      title: "Optimal Video Length",
      value: "8-12 minutes",
      change: "+8%", 
      trend: "up",
      icon: Target
    },
    {
      title: "Trending Hashtags",
      value: "#AITools",
      change: "+156%",
      trend: "up", 
      icon: TrendingUp
    },
    {
      title: "Content Format",
      value: "Tutorial Style",
      change: "+34%",
      trend: "up",
      icon: BarChart3
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="AI Trend Predictions"
          description="Advanced AI insights for future content trends and opportunities"
          imageUrl="/images/hero-background-new.jpeg"
        />

        <section className="py-8 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* AI Predictions */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="relative"
                >
                  <Card className="p-6 relative">
                    <RunPredictionsOverlay />
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          AI Trend Predictions
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                          Powered by advanced machine learning algorithms
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {trendPredictions.map((prediction, index) => (
                        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <div className="flex gap-4">
                            <Image
                              src={prediction.thumbnail}
                              alt={prediction.topic}
                              width={80}
                              height={60}
                              className="rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                  {prediction.topic}
                                </h3>
                                <Badge 
                                  className={
                                    prediction.confidence >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                    prediction.confidence >= 80 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                  }
                                >
                                  {prediction.confidence}% confidence
                                </Badge>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                {prediction.description}
                              </p>
                              <div className="flex justify-between items-center">
                                <div className="flex gap-3 text-sm">
                                  <Badge variant="outline">{prediction.category}</Badge>
                                  <span className="text-green-600 font-medium">{prediction.growth}</span>
                                  <span className="text-gray-500">{prediction.timeframe}</span>
                                </div>
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                  Create Content
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* AI Insights */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.1 }}
                >
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      AI-Generated Insights
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {aiInsights.map((insight, index) => (
                        <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <insight.icon className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                          <p className="text-lg font-bold text-gray-900 dark:text-white">
                            {insight.value}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {insight.title}
                          </p>
                          <div className={`flex items-center justify-center gap-1 text-xs ${
                            insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {insight.trend === 'up' ? (
                              <ArrowUp className="h-3 w-3" />
                            ) : (
                              <ArrowDown className="h-3 w-3" />
                            )}
                            {insight.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* Trend Analysis */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Trend Analysis
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="h-5 w-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900 dark:text-white">AI Recommendation</h4>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          Based on current data patterns, content about "AI automation tools" is predicted to see 
                          significant growth in the next 2-3 weeks. Consider creating tutorials or reviews in this space.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">Rising Fast</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">AI Tools, Automation</p>
                        </div>
                        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">Stable Growth</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Productivity, Remote Work</p>
                        </div>
                        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">Declining</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Crypto News, NFTs</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="p-6 sticky top-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      AI Model Status
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Model Accuracy</span>
                        <span className="font-semibold text-gray-900 dark:text-white">94.2%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Data Freshness</span>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Live
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Last Update</span>
                        <span className="text-sm text-gray-900 dark:text-white">2 min ago</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                        Quick Actions
                      </h4>
                      <div className="space-y-2">
                        <Button className="w-full justify-start" variant="outline" size="sm">
                          <Lightbulb className="h-4 w-4 mr-2" />
                          Get Content Ideas
                        </Button>
                        <Button className="w-full justify-start" variant="outline" size="sm">
                          <BarChart3 className="h-4 w-4 mr-2" />
                          Analyze Trends
                        </Button>
                        <Button className="w-full justify-start" variant="outline" size="sm">
                          <Target className="h-4 w-4 mr-2" />
                          Set Alerts
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}