"use client"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion" // Import motion

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    // Frontend Simulation: Simulate fetching search results based on the query.
    // For backend integration: Replace this with an API call to your backend search service
    // that can query content from all pages (About, Docs, Contact, etc.).
    const allWebsiteContent = [
      {
        title: `About NexTrend: Our Mission`,
        description: `Learn about NexTrend's mission to provide AI-driven insights for content creators.`,
        link: "/about",
      },
      {
        title: `Docs: Getting Started with NexTrend`,
        description: `A guide to setting up your account and connecting social media platforms.`,
        link: "/docs",
      },
      {
        title: `Contact Us: Reach Out to NexTrend Support`,
        description: `Find our contact information and send us a message.`,
        link: "/contact",
      },
      {
        title: `Features: AI-powered trend prediction`,
        description: `Discover how our AI predicts emerging trends on YouTube.`,
        link: "/#features-section",
      },
      {
        title: `Case Study: Revolutionizing Social Media`,
        description: `A success story about boosting engagement with NexTrend.`,
        link: "/#case-studies-section", // Assuming you add an ID to CaseStudies section
      },
      {
        title: `FAQ: What is NexTrend?`,
        description: `Find answers to common questions about our platform.`,
        link: "/#faq-section", // Assuming you add an ID to FAQSection
      },
      {
        title: `Login to your NexTrend Account`,
        description: `Access your personalized dashboard.`,
        link: "/auth/login",
      },
      {
        title: `Sign Up for NexTrend`,
        description: `Create a new account to get started with NexTrend.`,
        link: "/auth/signup",
      },
    ]

    const simulatedResults = allWebsiteContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    )

    setTimeout(() => {
      setResults(simulatedResults)
      setLoading(false)
    }, 1000) // Simulate network delay
  }, [query])

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title={`Search Results for "${query}"`}
          description="Find relevant information and content ideas across NexTrend."
          imageUrl="/images/docs-header.jpeg" // Reusing docs header image for search
        />

        <motion.section
          className="py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 scroll-mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8">
            {loading ? (
              <div className="text-center text-gray-600 dark:text-gray-400">Loading search results...</div>
            ) : results.length > 0 ? (
              <div className="grid gap-6">
                {results.map((result, index) => (
                  <motion.div key={index} variants={cardVariants}>
                    <Card className="bg-gray-50 dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md">
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        <Link href={result.link} className="hover:underline">
                          {result.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        {result.description}
                      </CardDescription>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-600 dark:text-gray-400">
                No results found for "{query}". Please try a different search term.
              </div>
            )}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
