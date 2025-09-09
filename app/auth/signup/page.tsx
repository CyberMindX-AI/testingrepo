"use client"
import React, { useState, useEffect, ChangeEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Eye, Heart, Share2, TrendingUp, Users, Zap, BarChart3 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [currentFact, setCurrentFact] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState<"hobby" | "pro" | null>(null)
  const [name, setName] = useState("")
  const [showSocialLogin, setShowSocialLogin] = useState(false)
  const [showEmailOptions, setShowEmailOptions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const contentFacts = [
    { icon: Play, text: "Videos under 60 seconds get 2.3x more engagement", stat: "2.3x" },
    { icon: Eye, text: "Content with visuals gets 94% more views", stat: "94%" },
    { icon: Heart, text: "Posts with hashtags get 12.6% more engagement", stat: "12.6%" },
    { icon: Share2, text: "Live videos generate 6x more interactions", stat: "6x" },
    { icon: TrendingUp, text: "Consistent posting increases reach by 4x", stat: "4x" },
    { icon: Users, text: "Community posts get 3x more comments", stat: "3x" },
    { icon: Zap, text: "AI-optimized content performs 2.5x better", stat: "2.5x" },
    { icon: BarChart3, text: "Data-driven creators grow 5x faster", stat: "5x" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % contentFacts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleContinue = async () => {
    if (!selectedPlan || !name.trim()) return
    
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setShowSocialLogin(true)
    console.log("Continuing with plan:", selectedPlan, "and name:", name)
  }

  const handleEmailClick = () => {
    setShowSocialLogin(false)
    setShowEmailOptions(true)
    console.log("Switching to email signup")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative">
      {/* Glassy background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-pink-900/20 backdrop-blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">

            </div>
            <span className="text-xl font-semibold text-blue-500">NexTrend</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="/auth/login" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              Log In
            </a>
            <button
              aria-label="Close"
              title="Close"
              onClick={() => router.back()}
              className="w-9 h-9 grid place-items-center rounded-lg border border-gray-700/60 bg-gray-900/50 hover:bg-gray-800/60 transition-colors"
            >
              <span className="text-xl leading-none">×</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-md mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl font-bold mb-6">
              {showEmailOptions ? "Sign up for NexTrend" : showSocialLogin ? "Let's create your account" : "Your first content creation journey is just a sign-up away."}
            </h1>
          </motion.div>

          {/* Step 1: Plan Selection */}
          {!showSocialLogin && !showEmailOptions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-8 mb-8 shadow-2xl"
            >
              <h2 className="text-lg font-medium text-gray-300 mb-6">Plan Type</h2>
              
              <div className="space-y-4">
                {/* Hobby Plan */}
                <div 
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all backdrop-blur-sm ${
                    selectedPlan === "hobby" 
                      ? "border-gray-600/50 bg-gray-800/30" 
                      : "border-gray-700/50 hover:border-gray-600/50 bg-gray-800/10"
                  }`}
                  onClick={() => setSelectedPlan("hobby")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedPlan === "hobby" 
                          ? "border-white bg-white" 
                          : "border-gray-500"
                      }`}>
                        {selectedPlan === "hobby" && (
                          <div className="w-2 h-2 bg-black rounded-full mx-auto mt-0.5" />
                        )}
                      </div>
                      <span className="text-white font-medium">I'm am an experienced content creator</span>
                    </div>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      Hobby
                    </span>
                  </div>
                </div>

                {/* Pro Plan */}
                <div 
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all backdrop-blur-sm ${
                    selectedPlan === "pro" 
                      ? "border-gray-600/50 bg-gray-800/30" 
                      : "border-gray-700/50 hover:border-gray-600/50 bg-gray-800/10"
                  }`}
                  onClick={() => setSelectedPlan("pro")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedPlan === "pro" 
                          ? "border-white bg-white" 
                          : "border-gray-500"
                      }`}>
                        {selectedPlan === "pro" && (
                          <div className="w-2 h-2 bg-black rounded-full mx-auto mt-0.5" />
                        )}
                      </div>
                      <span className="text-white font-medium">I'm a beginner in content creation</span>
                    </div>
                    <span className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full">
                      Pro
                    </span>
                  </div>
                </div>
              </div>

              {/* Name Input - Appears after plan selection */}
              <AnimatePresence>
                {selectedPlan && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mt-6"
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={onNameChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Continue Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContinue}
                disabled={isLoading || !selectedPlan || !name.trim()}
                className="w-full mt-8 bg-white text-black font-medium py-4 px-6 rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating Account..." : "Continue"}
              </motion.button>

              {/* Terms */}
              <p className="text-center text-gray-400 text-sm mt-6">
                By joining, you agree to our{" "}
                <a href="#" className="text-white hover:underline">Terms of Service</a>{" "}
                and{" "}
                <a href="#" className="text-white hover:underline">Privacy Policy</a>
              </p>
            </motion.div>
          )}

          {/* Step 2: Social Login Options */}
          {showSocialLogin && !showEmailOptions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-8 mb-8 shadow-2xl"
            >
              <div className="space-y-3">
                {/* Google */}
                <button onClick={() => router.push("/home-dashboard")} className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-lg transition-all backdrop-blur-sm">
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">Continue with Google</span>
                </button>

                {/* YouTube */}
                <button onClick={() => router.push("/home-dashboard")} className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-lg transition-all backdrop-blur-sm">
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">Continue with YouTube</span>
                </button>

                {/* TikTok */}
                <button onClick={() => router.push("/home-dashboard")} className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-lg transition-all backdrop-blur-sm">
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">Continue with TikTok</span>
                </button>

                {/* Gmail */}
                <button onClick={() => router.push("/home-dashboard")} className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-lg transition-all backdrop-blur-sm">
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v9.273L12 8.09l6.545 4.91V3.821h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">Continue with Gmail</span>
                </button>
              </div>

              <div className="mt-6 text-center">
                <button 
                  onClick={handleEmailClick}
                  className="text-white hover:underline text-sm transition-colors"
                >
                  Continue with Email →
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Email Signup Form */}
          {showEmailOptions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-8 mb-8 shadow-2xl"
            >
              <h2 className="text-xl font-bold text-white mb-6 text-center">Sign up for NexTrend</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all backdrop-blur-sm"
                  />
                </div>
                
                <button onClick={() => router.push("/home-dashboard")} className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-600">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <span>Continue with Email</span>
                </button>
              </div>

              <div className="mt-6 text-center">
                <button 
                  onClick={() => {
                    setShowEmailOptions(false)
                    setShowSocialLogin(true)
                    console.log("Returning to social login options")
                  }}
                  className="text-white hover:underline text-sm transition-colors"
                >
                  ← Other Sign Up options
                </button>
              </div>
            </motion.div>
          )}

          {/* Clean Content Facts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-center"
          >
            <div className="relative h-16 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFact}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex items-center space-x-3"
                >
                  <div className="text-2xl font-bold text-white">
                    {contentFacts[currentFact].stat}
                  </div>
                  <div className="text-white text-sm">
                    {contentFacts[currentFact].text}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {contentFacts.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentFact 
                      ? "bg-white w-6" 
                      : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}