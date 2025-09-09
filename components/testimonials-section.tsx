"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Creators don’t know what to post and want help finding trending ideas relevant to their niche and region.",
      name: "Content Creator",
      role: "YouTube & TikTok",
      avatar: "/images/content-creator.jpg", // ✅ real image
    },
    {
      quote:
        "Many struggle with growing their audience and want performance benchmarking to see how they compare to others.",
      name: "Social Media Marketer",
      role: "Brand Strategist",
      avatar: "/images/social-media-marketer.jpg", // ✅ real image
    },
    {
      quote:
        "Editing is seen as difficult and time-consuming, especially without tools optimized for mobile and trends. Requests for competitor analysis.",
      name: "Digital Product Creator",
      role: "Entrepreneur",
      avatar: "/images/digital-product-creator.jpg", // ✅ real image
    },
    {
      quote:
        "Creators feel isolated and want a space to connect, collaborate, and learn from other African creators.",
      name: "Trend Researcher",
      role: "Analyst",
      avatar: "/images/trend-researcher.jpg", // ✅ real image
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Our partners speak louder than us
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Hear what our users have to say about NexTrend.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className="p-6 shadow-lg bg-white dark:bg-gray-800 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 object-cover"
                />
                <CardContent className="p-0">
                  <p className="text-lg italic text-gray-800 dark:text-gray-200 mb-4">
                    {testimonial.quote}
                  </p>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {testimonial.role}
                  </p>
                  <div className="flex justify-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
