"use client"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Twitter, Youtube, PlayIcon, BookmarkIcon } from "lucide-react"
import { motion } from "framer-motion" // Import motion

export function ContentExamples() {
  const examples = [
    {
      image: "/images/content-example-1.jpeg",
      title: "How to structure your IG posts",
      description: "Bringing you the best tips and tricks for Instagram posts that get more likes and comments.",
      socials: [
        { Icon: Twitter, link: "https://x.com/nextrenda12025" },
        { Icon: Youtube, link: "https://www.tiktok.com/@nextrendai" },
      ],
    },
    {
      image: "/images/content-example-2.jpeg",
      title: "Tell me why I should post here",
      description: "Learn the benefits of posting on various platforms and how to tailor your content for each.",
      socials: [
        { Icon: Twitter, link: "https://x.com/nextrenda12025" },
        { Icon: Youtube, link: "https://www.tiktok.com/@nextrendai" },
      ],
    },
    {
      image: "/images/content-example-3.jpeg",
      title: "EQ Techno",
      description: "A deep dive into the technology behind EQ Techno and its impact on modern vehicles.",
      socials: [
        { Icon: Twitter, link: "https://x.com/nextrenda12025" },
        { Icon: Youtube, link: "https://www.tiktok.com/@nextrendai" },
      ],
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Our content examples
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            See how NexTrend helps you create engaging content.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                <div className="relative w-full h-48">
                  <Image
                    src={example.image || "/placeholder.svg"}
                    alt={example.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <PlayIcon className="h-12 w-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {example.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                    {example.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {example.socials.map((social, i) => (
                        <a key={i} href={social.link} target="_blank" rel="noopener noreferrer">
                          <social.Icon className="h-5 w-5 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200" />
                        </a>
                      ))}
                    </div>
                    <BookmarkIcon className="h-5 w-5 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200" />
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
