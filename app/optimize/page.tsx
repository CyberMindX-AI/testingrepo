"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Eye, 
  ThumbsUp, 
  MessageSquare, 
  Share2,
  Clock,
  Target,
  BarChart3,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  ArrowUp,
  ArrowDown
} from "lucide-react"
import Image from "next/image"

export default function OptimizePage() {
  // TODO: Connect to backend API for video optimization data
  const videoData = {
    title: "X_mari_ AI Live Stream",
    thumbnail: "/images/content-example-1.jpeg",
    views: "1,234",
    likes: "89",
    comments: "12",
    shares: "5",
    uploadDate: "2 days ago",
    duration: "15:32",
    tags: ["AI", "Live Stream", "Technology"]
  }

  const optimizationScore = 67
  const suggestions = [
    {
      type: "critical",
      icon: AlertTriangle,
      title: "Improve Thumbnail",
      description: "Your thumbnail could be more eye-catching. Consider adding bright colors and clear text.",
      impact: "High",
      color: "text-red-600"
    },
    {
      type: "warning",
      icon: TrendingUp,
      title: "Add Trending Keywords",
      description: "Include keywords like 'AI automation' and 'machine learning' in your title and description.",
      impact: "Medium",
      color: "text-yellow-600"
    },
    {
      type: "success",
      icon: CheckCircle,
      title: "Good Video Length",
      description: "Your video length is optimal for engagement in your niche.",
      impact: "Low",
      color: "text-green-600"
    }
  ]

  const performanceMetrics = [
    { label: "Views", value: "1,234", change: "+12%", trend: "up", icon: Eye },
    { label: "Likes", value: "89", change: "+8%", trend: "up", icon: ThumbsUp },
    { label: "Comments", value: "12", change: "-3%", trend: "down", icon: MessageSquare },
    { label: "Shares", value: "5", change: "+25%", trend: "up", icon: Share2 }
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
          title="Optimize"
          description="Optimize your content for maximum engagement and reach"
          imageUrl="/images/docs-header.jpeg"
        />

        <section className="py-8 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Video Overview */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <Card className="p-6">
                    <div className="flex gap-6">
                      <Image
                        src={videoData.thumbnail}
                        alt={videoData.title}
                        width={200}
                        height={112}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {videoData.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {videoData.views} views
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {videoData.duration}
                          </span>
                          <span>{videoData.uploadDate}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {videoData.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Optimize Now
                          </Button>
                          <Button size="sm" variant="outline">
                            View Analytics
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Optimization Score */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Optimization Score
                      </h3>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {optimizationScore}/100
                      </Badge>
                    </div>
                    <Progress value={optimizationScore} className="h-3 mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">
                      Your video has good potential but could benefit from some improvements.
                    </p>
                  </Card>
                </motion.div>

                {/* Performance Metrics */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Performance Metrics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {performanceMetrics.map((metric, index) => (
                        <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <metric.icon className="h-6 w-6 mx-auto mb-2 text-gray-600 dark:text-gray-400" />
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {metric.value}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {metric.label}
                          </p>
                          <div className={`flex items-center justify-center gap-1 text-xs ${
                            metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {metric.trend === 'up' ? (
                              <ArrowUp className="h-3 w-3" />
                            ) : (
                              <ArrowDown className="h-3 w-3" />
                            )}
                            {metric.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* Optimization Tabs */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="p-6">
                    <Tabs defaultValue="suggestions" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                        <TabsTrigger value="keywords">Keywords</TabsTrigger>
                        <TabsTrigger value="competitors">Competitors</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="suggestions" className="mt-6">
                        <div className="space-y-4">
                          {suggestions.map((suggestion, index) => (
                            <div key={index} className="flex gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                              <suggestion.icon className={`h-6 w-6 ${suggestion.color} flex-shrink-0 mt-1`} />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-medium text-gray-900 dark:text-white">
                                    {suggestion.title}
                                  </h4>
                                  <Badge variant="outline" className="text-xs">
                                    {suggestion.impact} Impact
                                  </Badge>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                  {suggestion.description}
                                </p>
                              </div>
                              <Button size="sm" variant="outline">
                                Apply
                              </Button>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="keywords" className="mt-6">
                        <div className="text-center py-8">
                          <Lightbulb className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                          <p className="text-gray-600 dark:text-gray-400">
                            Keyword analysis coming soon. This will show trending keywords for your niche.
                          </p>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="competitors" className="mt-6">
                        <div className="text-center py-8">
                          <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                          <p className="text-gray-600 dark:text-gray-400">
                            Competitor analysis coming soon. Compare your performance with similar channels.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </Card>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="p-6 sticky top-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <Target className="h-4 w-4 mr-2" />
                        Optimize Title
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Improve Thumbnail
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Add Keywords
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        View Analytics
                      </Button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                        Optimization Tips
                      </h4>
                      <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                        <p>• Upload consistently for better algorithm performance</p>
                        <p>• Use trending hashtags in your niche</p>
                        <p>• Engage with comments within the first hour</p>
                        <p>• Create compelling thumbnails with faces</p>
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