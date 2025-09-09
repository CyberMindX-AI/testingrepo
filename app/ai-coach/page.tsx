"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Lightbulb,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  Brain
} from "lucide-react"
import { useState } from "react"

export default function AICoachPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hi! I'm your AI Coach. I'm here to help you grow your channel and create better content. What would you like to work on today?",
      timestamp: new Date()
    }
  ])

  // TODO: Connect to AI Coach API
  const handleSendMessage = () => {
    if (!message.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setMessage("")

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        content: "That's a great question! Based on current trends in your niche, I'd recommend focusing on AI automation content. This topic is seeing 300% growth this month. Would you like me to suggest some specific video ideas?",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const quickActions = [
    {
      title: "Analyze My Channel",
      description: "Get insights on your channel performance",
      icon: BarChart3,
      color: "bg-blue-500"
    },
    {
      title: "Content Strategy",
      description: "Build a winning content strategy",
      icon: Target,
      color: "bg-green-500"
    },
    {
      title: "Trending Topics",
      description: "Discover what's trending in your niche",
      icon: TrendingUp,
      color: "bg-purple-500"
    },
    {
      title: "Optimization Tips",
      description: "Improve your video performance",
      icon: Zap,
      color: "bg-yellow-500"
    }
  ]

  const coachingAreas = [
    {
      title: "Content Strategy",
      description: "Develop a comprehensive content plan",
      sessions: 12,
      icon: Target
    },
    {
      title: "SEO Optimization",
      description: "Improve your video discoverability",
      sessions: 8,
      icon: TrendingUp
    },
    {
      title: "Audience Growth",
      description: "Strategies to grow your subscriber base",
      sessions: 15,
      icon: BarChart3
    },
    {
      title: "Monetization",
      description: "Turn your content into revenue",
      sessions: 10,
      icon: Lightbulb
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
          title="AI Coach"
          description="Your personal AI mentor for content creation and channel growth"
          imageUrl="/images/hero-background-new.jpeg"
        />

        <section className="py-8 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Chat Interface */}
              <div className="lg:col-span-2">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <Card className="h-[600px] flex flex-col">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback className="bg-blue-600 text-white">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">AI Coach</h3>
                          <p className="text-sm text-green-600">Online</p>
                        </div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          {msg.type === 'bot' && (
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-blue-600 text-white">
                                <Bot className="h-4 w-4" />
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              msg.type === 'user'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                            }`}
                          >
                            <p className="text-sm">{msg.content}</p>
                          </div>
                          {msg.type === 'user' && (
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-gray-600 text-white">
                                <User className="h-4 w-4" />
                              </AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Ask your AI coach anything..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          className="flex-1"
                        />
                        <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Quick Actions */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.1 }}
                >
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      {quickActions.map((action, index) => (
                        <button
                          key={index}
                          className="w-full flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                        >
                          <div className={`p-2 rounded-lg ${action.color} text-white`}>
                            <action.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium text-sm text-gray-900 dark:text-white">
                              {action.title}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {action.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* Coaching Areas */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Coaching Areas
                    </h3>
                    <div className="space-y-4">
                      {coachingAreas.map((area, index) => (
                        <div key={index} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <div className="flex items-start gap-3">
                            <area.icon className="h-5 w-5 text-blue-600 mt-1" />
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                {area.title}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                {area.description}
                              </p>
                              <Badge variant="secondary" className="text-xs">
                                {area.sessions} sessions available
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* AI Coach Stats */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Your Progress
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Sessions Completed</span>
                        <span className="font-semibold text-gray-900 dark:text-white">12/20</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Goals Achieved</span>
                        <span className="font-semibold text-gray-900 dark:text-white">8</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Improvement Score</span>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          +45%
                        </Badge>
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