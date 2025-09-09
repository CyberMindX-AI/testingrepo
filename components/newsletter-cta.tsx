"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { motion } from "framer-motion" // Import motion

export function NewsletterCTA() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubscribe = () => {
    if (email.trim() === "" || !email.includes("@")) {
      setMessage("Please enter a valid email address.")
      setIsSuccess(false)
      return
    }

    // Frontend Simulation: Simulate newsletter subscription.
    // For backend integration: Replace this with an API call to your newsletter service.
    // Example: await fetch('/api/subscribe-newsletter', { method: 'POST', body: JSON.stringify({ email }) });
    console.log(`Subscribing email: ${email}`)
    setMessage("Thank you for subscribing! Check your inbox for a confirmation.")
    setIsSuccess(true)
    setEmail("") // Clear the input field
    setTimeout(() => setMessage(""), 5000) // Clear message after 5 seconds
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-white scroll-mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Generate one content a day for free</h2>
        <p className="mt-3 text-lg text-gray-400">Sign up for our newsletter to get started.</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:ring-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault() // Prevent form submission
                handleSubscribe()
              }
            }}
          />
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3"
            onClick={handleSubscribe}
          >
            Subscribe
          </Button>
        </div>
        {message && <p className={`mt-4 text-sm ${isSuccess ? "text-green-400" : "text-red-400"}`}>{message}</p>}
      </div>
    </motion.section>
  )
}
