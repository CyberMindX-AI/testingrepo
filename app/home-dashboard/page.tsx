"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Video, 
  Eye, 
  Users, 
  Search, 
  Lightbulb, 
  Target,
  BarChart3,
  Scissors,
  Lock,
  ArrowRight
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function HomeDashboardPage() {
  const [trendScore, setTrendScore] = useState(0)

  useEffect(() => {
    // Animate trend score on load
    const timer = setTimeout(() => setTrendScore(87), 500)
    return () => clearTimeout(timer)
  }, [])

  // TODO: Connect to backend API for user data and trending insights
  const quickActions = [
    {
      title: "Find Trending Keywords",
      description: "Discover high-potential keywords for your niche",
      icon: Search,
      color: "bg-blue-500",
      href: "/keywords"
    },
    {
      title: "Trend prediction system  ",
      description: "AI-powered trends prediction system ",
      icon: Lightbulb,
      color: "bg-yellow-500",
      href: "/ai-trends"
    },
    {
      title: "Find Trending Videos",
      description: "Explore viral content in your category",
      icon: TrendingUp,
      color: "bg-green-500",
      href: "/discover"
    },
  ]

  const optimizeVideos = [
    {
      title: "X_mari_ AI Live Stream",
      views: "1 views",
      timeAgo: "a month ago",
      thumbnail: "/images/content-example-1.jpeg",
      tags: ["Generata scoria", "+"]
    }
  ]

  const dailyIdeas = [
    {
      title: "AI Automation Trends",
      description: "Explore the latest in AI automation tools and techniques",
      thumbnail: "/images/content-example-2.jpeg",
      category: "Technology"
    },
    {
      title: "Content Creation Tips",
      description: "Best practices for creating engaging video content",
      thumbnail: "/images/content-example-3.jpeg",
      category: "Education"
    }
  ]

  const tools = [
    { name: "Keywords", icon: Search, description: "Find trending keywords" },
    { name: "Subscribers", icon: Users, description: "Track subscriber growth" },
    { name: "Daily video ", icon: BarChart3, description: "Fresh content ideas daily" },
    { name: "Daily trends prediction", icon: Lightbulb, description: "AI powered trends prediction system  " },
  
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
          title="Today"
          description="What would you like to do today?"
          imageUrl="/images/hero-background-new.jpeg"
        />

        <section className="py-8 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Trend Score and Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Trend Score */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                  >
                    <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
                      <div className="text-center space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          What would you like to do today?
                        </h3>
                        <div className="relative w-32 h-32 mx-auto">
                          <div className="absolute inset-0 rounded-full border-8 border-gray-200 dark:border-gray-700"></div>
                          <div 
                            className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-500 border-r-yellow-500 border-b-red-500 border-l-blue-500"
                            style={{
                              transform: `rotate(${(trendScore / 100) * 360}deg)`,
                              transition: 'transform 1s ease-out'
                            }}
                          ></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{trendScore}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Very High
                        </Badge>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Quick Actions Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {quickActions.map((action, index) => (
                      <motion.div
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link href={action.href}>
                          <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                            <div className="flex flex-col items-center text-center space-y-2">
                              <div className={`p-3 rounded-lg ${action.color} text-white group-hover:scale-110 transition-transform`}>
                                <action.icon className="h-6 w-6" />
                              </div>
                              <h4 className="font-medium text-sm text-gray-900 dark:text-white">
                                {action.title}
                              </h4>
                            </div>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Optimize Your Latest Video */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Optimize Your Latest Video
                      </h3>
                      <Link href="/optimize">
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                          View All <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                    
                    {optimizeVideos.map((video, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          width={120}
                          height={68}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                            {video.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {video.views} • {video.timeAgo}
                          </p>
                          <div className="flex gap-2">
                            {video.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Optimize
                        </Button>
                      </div>
                    ))}
                  </Card>
                </motion.div>

                {/* Daily Video Ideas */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Daily trending videos 
                      </h3>
                      <Link href="/discover">
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                          View All <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {dailyIdeas.map((idea, index) => (
                        <div key={index} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <Image
                            src={idea.thumbnail}
                            alt={idea.title}
                            width={80}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <Badge variant="secondary" className="text-xs mb-2">
                              {idea.category}
                            </Badge>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                              {idea.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {idea.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Tools Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="p-6 sticky top-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Tools
                    </h3>
                    <div className="space-y-3">
                      {tools.map((tool, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <tool.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm text-gray-900 dark:text-white">
                              {tool.name}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                      ))}
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