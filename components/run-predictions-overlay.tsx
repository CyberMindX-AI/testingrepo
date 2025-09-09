"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Brain, 
  Zap, 
  Sparkles, 
  TrendingUp,
  Clock,
  Target,
  ArrowUp,
  Loader2
} from "lucide-react"

interface RunPredictionsOverlayProps {
  className?: string
}

export function RunPredictionsOverlay({ className = "" }: RunPredictionsOverlayProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [progress, setProgress] = useState(0)

  const runPredictions = async () => {
    setIsRunning(true)
    setProgress(0)
    
    // TODO: Replace below stub with backend POST /api/ai/predict call
    // Simulate API call with progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setIsRunning(false)
          setShowResults(true)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const mockPredictionResults = [
    {
      topic: "AI Automation Tools",
      confidence: 96,
      timeframe: "Next 1-2 weeks",
      growth: "+245%",
      category: "Technology"
    },
    {
      topic: "Minimalist Lifestyle",
      confidence: 89,
      timeframe: "Next 2-3 weeks", 
      growth: "+127%",
      category: "Lifestyle"
    },
    {
      topic: "Cryptocurrency Analysis",
      confidence: 84,
      timeframe: "Next 3-4 weeks",
      growth: "+98%",
      category: "Finance"
    }
  ]

  return (
    <div className={`relative ${className}`}>
      {/* Main Overlay Button */}
      <motion.div
        className="absolute top-4 right-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={runPredictions}
          disabled={isRunning}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3"
          size="lg"
        >
          {isRunning ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Running Predictions...
            </>
          ) : (
            <>
              <Brain className="h-5 w-5 mr-2" />
              Run Predictions
            </>
          )}
        </Button>
      </motion.div>

      {/* Progress Modal */}
      <AnimatePresence>
        {isRunning && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="relative">
                    <Brain className="h-12 w-12 text-blue-600 animate-pulse" />
                    <Sparkles className="h-6 w-6 text-purple-600 absolute -top-1 -right-1 animate-bounce" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Analyzing Trends...
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Our AI is processing millions of data points to predict the next big trends
                </p>
                
                <div className="space-y-2">
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {progress}% Complete
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Modal */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Fresh Predictions Generated!
                    </h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowResults(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </Button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Mock Results:</strong> Predictions will run once backend is connected. 
                    Real AI analysis will process social media data, engagement patterns, and trending topics.
                  </p>
                </div>

                <div className="space-y-4">
                  {mockPredictionResults.map((prediction, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border-l-4 border-l-green-500">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                  {prediction.topic}
                                </h4>
                                <Badge variant="secondary">
                                  {prediction.category}
                                </Badge>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>
                                  <p className="text-gray-500 dark:text-gray-400">Confidence</p>
                                  <p className="font-medium text-green-600">
                                    {prediction.confidence}%
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-500 dark:text-gray-400">Timeframe</p>
                                  <p className="font-medium">
                                    {prediction.timeframe}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-500 dark:text-gray-400">Growth</p>
                                  <p className="font-medium text-green-600 flex items-center gap-1">
                                    <ArrowUp className="h-3 w-3" />
                                    {prediction.growth}
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-4 w-4 text-green-500" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowResults(false)}>
                    Close
                  </Button>
                  <Button>
                    Export Results
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}