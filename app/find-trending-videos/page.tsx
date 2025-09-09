"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Calendar, Eye, TrendingUp, PlayCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function FindTrendingVideosPage() {
  // TODO: Connect to backend API for trending videos data
  const [selectedOutlierScore, setSelectedOutlierScore] = useState("")
  const [selectedViews, setSelectedViews] = useState("")
  const [selectedDateRange, setSelectedDateRange] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const trendingVideos = [
    {
      id: 1,
      title: "DON'T Sell AI Agents, Sell AI Micro-Apps Instead! (n8n, lovable)",
      thumbnail: "/images/content-example-1.jpeg",
      views: "55,772",
      timeAgo: "18 days ago",
      channel: "Duncan Rogoff | AI Automation",
      subscribers: "12K",
      outlierScore: "100x+",
      engagement: "Good",
      viewsPerHour: 45,
      tags: ["AI", "Automation", "Business"]
    },
    {
      id: 2,
      title: "AI at UBP - Expert Insights",
      thumbnail: "/images/content-example-2.jpeg",
      views: "8,234",
      timeAgo: "5 days ago",
      channel: "Tech Insights",
      subscribers: "45K",
      outlierScore: "11x",
      engagement: "Very High",
      viewsPerHour: 120,
      tags: ["AI", "Finance", "Expert"]
    },
    {
      id: 3,
      title: "Which AI Can Make The Best Roblox Game?",
      thumbnail: "/images/content-example-3.jpeg",
      views: "267,891",
      timeAgo: "2 days ago",
      channel: "AI Gaming",
      subscribers: "89K",
      outlierScore: "42x",
      engagement: "Excellent",
      viewsPerHour: 89,
      tags: ["Gaming", "AI", "Roblox"]
    },
    {
      id: 4,
      title: "The Future of AI Content Creation",
      thumbnail: "/images/content-example-1.jpeg",
      views: "125,432",
      timeAgo: "1 week ago",
      channel: "Creative Tech",
      subscribers: "67K",
      outlierScore: "23x",
      engagement: "Excellent",
      viewsPerHour: 78,
      tags: ["AI", "Content", "Future"]
    }
  ]

  // TODO: Apply actual filters to video data
  const filteredVideos = trendingVideos.filter(video => {
    const matchesSearch = searchQuery === "" || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesSearch
  })

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Trending Videos"
          description="Discover the hottest trending videos across platforms with advanced filtering"
          imageUrl="/images/docs-header.jpeg"
        />

        <section className="py-8 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            
            {/* Filters Section */}
            <div className="mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Filters
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Search */}
                  <div className="lg:col-span-2 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search trending videos..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                    />
                  </div>

                  {/* Outlier Score Filter */}
                  <Select value={selectedOutlierScore} onValueChange={setSelectedOutlierScore}>
                    <SelectTrigger className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-gray-500" />
                        <SelectValue placeholder="Outlier Score" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Scores</SelectItem>
                      <SelectItem value="high">High (50x+)</SelectItem>
                      <SelectItem value="medium">Medium (10x-50x)</SelectItem>
                      <SelectItem value="low">Low (10x-)</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Views Filter */}
                  <Select value={selectedViews} onValueChange={setSelectedViews}>
                    <SelectTrigger className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-gray-500" />
                        <SelectValue placeholder="Views" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Views</SelectItem>
                      <SelectItem value="1m+">1M+ Views</SelectItem>
                      <SelectItem value="500k+">500K+ Views</SelectItem>
                      <SelectItem value="100k+">100K+ Views</SelectItem>
                      <SelectItem value="10k+">10K+ Views</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Publishing Date Filter - Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
                    <SelectTrigger className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <SelectValue placeholder="Publishing Date" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="3months">Last 3 Months</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="md:col-span-2 flex justify-end items-center gap-2">
                    <Button variant="outline" onClick={() => {
                      setSelectedOutlierScore("")
                      setSelectedViews("")
                      setSelectedDateRange("")
                      setSearchQuery("")
                    }}>
                      Clear Filters
                    </Button>
                    <Button>
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {filteredVideos.length} Trending Videos Found
                </h2>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Updated 5 minutes ago
                </div>
              </div>

              {/* Video Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group">
                      <div className="relative">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          width={400}
                          height={225}
                          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
                          <PlayCircle className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-red-500 text-white">
                            {video.outlierScore}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 text-sm">
                            {video.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span>{video.channel}</span>
                            <span>•</span>
                            <span>{video.subscribers}</span>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <span>{video.views} views</span>
                              <span>•</span>
                              <span>{video.timeAgo}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {video.engagement}
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap gap-1">
                            {video.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-2">
                            <Link href={`/videos/${video.id}`}>
                              <Button size="sm" variant="outline">
                                View Details
                              </Button>
                            </Link>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              Analyze
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}