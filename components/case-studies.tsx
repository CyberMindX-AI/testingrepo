"use client"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { PlayIcon } from "lucide-react" // Import PlayIcon from lucide-react
import { useCountUp } from "@/hooks/use-count-up"
import { motion } from "framer-motion" // Import motion

export function CaseStudies() {
  const studies = [
    {
      logo: "/images/case-study-1.jpeg",
      title: "Revolutionizing Social Media for Umearth: From Content Challenges to 45% Engagement Boost",
      description:
        "Learn how a global brand used NexTrend's AI-driven marketing solutions to overcome content challenges and achieve a significant engagement boost.",
      metrics: [
        { label: "Engagement", value: 45, suffix: "%" },
        { label: "Reach", value: 83, suffix: "%" },
        { label: "Conversions", value: 30, suffix: "%" },
        { label: "ROI", value: 2.5, suffix: "x", decimals: 1 },
      ],
      bgColor: "bg-green-950", // Dark green as per image
      textColor: "text-green-200",
    },
    {
      logo: "/images/case-study-2.jpeg",
      title: "Scaling Content Creation for a Tech Startup: 300% Growth in 6 Months",
      description:
        "Discover how a fast-growing tech startup leveraged NexTrend to scale their content creation efforts and achieve rapid audience growth.",
      metrics: [
        { label: "Growth", value: 300, suffix: "%" },
        { label: "Audience", value: 200, suffix: "%" },
        { label: "Leads", value: 150, suffix: "%" },
        { label: "Efficiency", value: 70, suffix: "%" },
      ],
      bgColor: "bg-blue-950", // Dark blue as per image
      textColor: "text-blue-200",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const metricsCountUp = studies
    .flatMap((study) => study.metrics)
    .map((metric) => ({
      end: metric.value,
      suffix: metric.suffix,
      decimals: metric.decimals,
    }))

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Our case studies
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Real-world success stories powered by NexTrend.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studies.map((study, studyIndex) => {
            const startIndex = studies.slice(0, studyIndex).reduce((acc, s) => acc + s.metrics.length, 0)

            return (
              <motion.div
                key={studyIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card
                  className={`overflow-hidden rounded-lg shadow-lg ${study.bgColor} text-white transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl`}
                >
                  <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="relative w-full md:w-1/3 h-48 md:h-auto flex items-center justify-center rounded-lg overflow-hidden">
                      <Image
                        src={study.logo || "/placeholder.svg"}
                        alt="Company Logo"
                        width={150}
                        height={60}
                        objectFit="cover" // Changed to cover for better fit
                        className="rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <PlayIcon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <CardTitle className="text-2xl font-bold leading-tight">{study.title}</CardTitle>
                      <CardDescription className={`${study.textColor} text-base`}>{study.description}</CardDescription>
                      <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                        {study.metrics.map((metric, metricIndex) => {
                          const { value, ref } = useCountUp(metricsCountUp[startIndex + metricIndex])
                          return (
                            <div key={metricIndex} className="flex flex-col">
                              <span ref={ref} className="text-3xl font-bold text-white">
                                {value}
                              </span>
                              <span className={`${study.textColor}`}>{metric.label}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
