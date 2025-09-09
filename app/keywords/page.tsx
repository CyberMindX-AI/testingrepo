"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { Search, Filter, TrendingUp, Users, Eye, BarChart3 } from "lucide-react"
import { useState } from "react"

export default function KeywordsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // TODO: Connect to backend API for keywords data
  const trendingKeywords = [
    {
      keyword: "AI automation",
      volume: "125K",
      trend: "+45%",
      difficulty: "Medium",
      category: "Technology"
    },
    {
      keyword: "sustainable living",
      volume: "89K", 
      trend: "+32%",
      difficulty: "Low",
      category: "Lifestyle"
    },
    {
      keyword: "crypto trading",
      volume: "156K",
      trend: "+67%", 
      difficulty: "High",
      category: "Finance"
    },
    {
      keyword: "home workouts",
      volume: "78K",
      trend: "+23%",
      difficulty: "Medium", 
      category: "Fitness"
    },
    {
      keyword: "plant-based recipes",
      volume: "92K",
      trend: "+38%",
      difficulty: "Low",
      category: "Food"
    },
    {
      keyword: "remote work tips",
      volume: "67K",
      trend: "+29%",
      difficulty: "Medium",
      category: "Business"
    }
  ]

  const tools = [
    {
      id: "keywords",
      title: "Keywords",
      description: "Find trending keywords",
      icon: Search,
      color: "bg-blue-500"
    },
    {
      id: "subscribers", 
      title: "Subscribers",
      description: "Track subscriber growth",
      icon: Users,
      color: "bg-green-500"
    },
    {
      id: "competitors",
      title: "Competitors", 
      description: "Analyze competitor performance",
      icon: BarChart3,
      color: "bg-purple-500"
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
          title="Find Trending Keywords"
          description="Discover high-potential keywords and topics for your content"
          imageUrl="/images/docs-header.jpeg"
        />

        <section className="py-8 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Tool Selection Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <Card className="p-6 sticky top-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Research Tools
                    </h3>
                    <div className="space-y-3">
                      {tools.map((tool) => (
                        <button
                          key={tool.id}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                            tool.id === 'keywords' 
                              ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500' 
                              : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${tool.color} text-white`}>
                            <tool.icon className="h-4 w-4" />
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-sm text-gray-900 dark:text-white">
                              {tool.title}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {tool.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                        Quick Stats
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Keywords Analyzed</span>
                          <span className="font-medium text-gray-900 dark:text-white">1,247</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Trending Now</span>
                          <span className="font-medium text-gray-900 dark:text-white">89</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Success Rate</span>
                          <span className="font-medium text-green-600">94%</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Search and Filters */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.1 }}
                >
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Search className="h-5 w-5 text-blue-600" />
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Advanced Keyword Analysis
                        </h2>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex-1 relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            placeholder="Search for keywords..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                          />
                        </div>
                        <Select>
                          <SelectTrigger className="bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600">
                            <SelectValue placeholder="Select Platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="youtube">YouTube</SelectItem>
                            <SelectItem value="tiktok">TikTok</SelectItem>
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="all">All Platforms</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="entertainment">Entertainment</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Difficulty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Levels</SelectItem>
                            <SelectItem value="low">Low Competition</SelectItem>
                            <SelectItem value="medium">Medium Competition</SelectItem>
                            <SelectItem value="high">High Competition</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Filter className="h-4 w-4" />
                          Advanced Filters
                        </Button>
                      </div>

                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        size="lg"
                      >
                        <Search className="h-4 w-4 mr-2" />
                        Analyze Keywords
                      </Button>
                    </div>
                  </Card>
                </motion.div>

                {/* Keywords Results */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Trending Keywords
                      </h3>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Updated 2 hours ago
                      </Badge>
                    </div>

                    <div className="grid gap-4">
                      {trendingKeywords.map((keyword, index) => (
                        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                                {keyword.keyword}
                              </h4>
                              <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                                <span className="flex items-center gap-1">
                                  <Eye className="h-4 w-4" />
                                  {keyword.volume} searches
                                </span>
                                <span className="flex items-center gap-1">
                                  <TrendingUp className="h-4 w-4" />
                                  {keyword.trend}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <Badge 
                                variant="secondary"
                                className={
                                  keyword.difficulty === 'Low' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                  keyword.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                }
                              >
                                {keyword.difficulty}
                              </Badge>
                              <Badge variant="outline">
                                {keyword.category}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              View Details
                            </Button>
                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                              Use Keyword
                            </Button>
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