"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Eye, Heart, Share2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const router = useRouter()

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleEmailContinue = () => {
    console.log("Continuing with email:", email)
    router.push("/home-dashboard")
  }

  const handleSocialLogin = (provider) => {
    console.log("Continuing with", provider)
    router.push("/home-dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative">
      {/* Glassy background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-pink-900/20 backdrop-blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        {/* Header */}
        <div className="flex items-center justify-between w-full px-6 py-4 fixed top-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            </div>
            <span className="text-xl font-semibold text-blue-500">NexTrend</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="/auth/signup" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              Sign Up
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
        <div className="max-w-md mx-auto px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-2xl font-bold mb-6">Welcome </h1>
          </motion.div>

          {/* Email Input */}
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-8 mb-8 shadow-2xl">
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={onEmailChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailContinue}
                className="w-full mt-4 bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Continue with Email
              </motion.button>

              {/* Social Login Options */}
              <div className="space-y-3 mt-6">
                {/* Gmail */}
                <button
                  onClick={() => handleSocialLogin("Gmail")}
                  className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-lg transition-all backdrop-blur-sm"
                >
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v9.273L12 8.09l6.545 4.91V3.821h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">Continue with Gmail</span>
                </button>

                {/* TikTok */}
                <button
                  onClick={() => handleSocialLogin("TikTok")}
                  className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-lg transition-all backdrop-blur-sm"
                >
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">Continue with TikTok</span>
                </button>

                {/* YouTube */}
                <button
                  onClick={() => handleSocialLogin("YouTube")}
                  className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-lg transition-all backdrop-blur-sm"
                >
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">Continue with YouTube</span>
                </button>
              </div>

              <div className="mt-6 text-center">
                <button className="text-white hover:underline text-sm transition-colors">
                  Show other options
                </button>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm mt-6">
              Don’t have an account?{" "}
              <a href="/auth/signup" className="text-blue-400 hover:underline">Sign Up</a>
            </p>
            <p className="text-center text-gray-400 text-xs mt-2">
              <a href="#" className="text-gray-400 hover:underline">Terms</a> <a href="#" className="text-gray-400 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}