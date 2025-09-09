"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { 
  Video, 
  Image as ImageIcon, 
  FileText, 
  Wand2, 
  Download,
  Play,
  Palette,
  Type,
  Layers,
  Sparkles,
  Camera,
  Edit3
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function CreatePage() {
  const [selectedTool, setSelectedTool] = useState("video-ideas")
  const [prompt, setPrompt] = useState("")
  const [generatedContent, setGeneratedContent] = useState<any[]>([])

  // TODO: Connect to backend API for content generation
  const tools = [
    {
      id: "video-ideas",
      title: "Video Ideas",
      description: "Generate trending video concepts",
      icon: Video,
      color: "bg-blue-500"
    },
    {
      id: "scripts",
      title: "Scripts",
      description: "AI-powered script writing",
      icon: FileText,
      color: "bg-purple-500"
    },
    {
      id: "titles",
      title: "Titles",
      description: "Catchy title suggestions",
      icon: Type,
      color: "bg-yellow-500"
    }
  ]

  const videoIdeas = [
    {
      title: "10 AI Tools That Will Replace Your Job in 2024",
      description: "Explore the latest AI automation tools that are changing the workforce",
      category: "Technology",
      trending: true,
      estimatedViews: "50K-100K"
    },
    {
      title: "I Built a $10K/Month Business Using Only AI",
      description: "Step-by-step guide to creating a profitable AI-powered business",
      category: "Business",
      trending: true,
      estimatedViews: "100K-500K"
    },
    {
      title: "ChatGPT vs Claude vs Gemini: Ultimate AI Comparison",
      description: "Comprehensive comparison of the top AI language models",
      category: "Technology",
      trending: false,
      estimatedViews: "25K-75K"
    }
  ]

  const thumbnailTemplates = [
    {
      id: 1,
      title: "Tech Review",
      preview: "/images/content-example-1.jpeg",
      style: "Modern"
    },
    {
      id: 2,
      title: "Tutorial",
      preview: "/images/content-example-2.jpeg",
      style: "Educational"
    },
    {
      id: 3,
      title: "Comparison",
      preview: "/images/content-example-3.jpeg",
      style: "VS Style"
    }
  ]

  const handleGenerate = () => {
    // TODO: Connect to AI generation API
    console.log("Generating content for:", selectedTool, "with prompt:", prompt)
    // Simulate API call
    setGeneratedContent(videoIdeas)
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Create"
          description="AI-powered content creation tools for your next viral video"
          imageUrl="/images/hero-background-new.jpeg"
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
                      Creation Tools
                    </h3>
                    <div className="space-y-3">
                      {tools.map((tool) => (
                        <button
                          key={tool.id}
                          onClick={() => setSelectedTool(tool.id)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                            selectedTool === tool.id
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
                  </Card>
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Input Section */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.1 }}
                >
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Wand2 className="h-5 w-5 text-blue-600" />
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {tools.find(t => t.id === selectedTool)?.title} Generator
                        </h2>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900 dark:text-white">
                            Niche/Category
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your niche" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="entertainment">Entertainment</SelectItem>
                              <SelectItem value="lifestyle">Lifestyle</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900 dark:text-white">
                            Content Type
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select content type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tutorial">Tutorial</SelectItem>
                              <SelectItem value="review">Review</SelectItem>
                              <SelectItem value="comparison">Comparison</SelectItem>
                              <SelectItem value="tips">Tips & Tricks</SelectItem>
                              <SelectItem value="news">News & Updates</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-900 dark:text-white">
                          Describe your idea (optional)
                        </label>
                        <Textarea
                          placeholder="Tell us more about what you want to create..."
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button 
                        onClick={handleGenerate}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        size="lg"
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Generate {tools.find(t => t.id === selectedTool)?.title}
                      </Button>
                    </div>
                  </Card>
                </motion.div>

                {/* Results Section */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="p-6">
                    <Tabs value={selectedTool} className="w-full">
                      <TabsContent value="video-ideas">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Generated Video Ideas
                          </h3>
                          <div className="grid gap-4">
                            {videoIdeas.map((idea, index) => (
                              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-medium text-gray-900 dark:text-white">
                                    {idea.title}
                                  </h4>
                                  {idea.trending && (
                                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                      Trending
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                  {idea.description}
                                </p>
                                <div className="flex justify-between items-center">
                                  <div className="flex gap-2">
                                    <Badge variant="secondary">{idea.category}</Badge>
                                    <Badge variant="outline">{idea.estimatedViews} views</Badge>
                                  </div>
                                  <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                      <Edit3 className="h-4 w-4 mr-1" />
                                      Edit
                                    </Button>
                                    <Button size="sm">
                                      <Download className="h-4 w-4 mr-1" />
                                      Use
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="thumbnails">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Thumbnail Templates
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {thumbnailTemplates.map((template) => (
                              <div key={template.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                <Image
                                  src={template.preview}
                                  alt={template.title}
                                  width={300}
                                  height={169}
                                  className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                                    {template.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    {template.style}
                                  </p>
                                  <div className="flex gap-2">
                                    <Button size="sm" variant="outline" className="flex-1">
                                      <Palette className="h-4 w-4 mr-1" />
                                      Customize
                                    </Button>
                                    <Button size="sm" className="flex-1">
                                      <Download className="h-4 w-4 mr-1" />
                                      Use
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="scripts">
                        <div className="text-center py-12">
                          <FileText className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Script Generator Coming Soon
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            AI-powered script writing will be available soon. Generate engaging scripts for your videos.
                          </p>
                        </div>
                      </TabsContent>

                      <TabsContent value="titles">
                        <div className="text-center py-12">
                          <Type className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Title Generator Coming Soon
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Generate catchy, SEO-optimized titles that drive clicks and views.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
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