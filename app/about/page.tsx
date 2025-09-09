"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Darasimi",
      role: "Product Lead & AI/Data Systems",
      description:
        "Leads product vision, builds the AI models, manages trend prediction systems, and handles all data aggregation and analysis tasks.",
      avatar: "/images/darasimi.jpg", // ✅ Updated
    },
    {
      name: "Jerry",
      role: "App Developer",
      description:
        "Responsible for building and maintaining the mobile and web applications, integrating AI features into the frontend, and ensuring smooth user experience across devices.",
      avatar: "/images/jerry.jpg", // ✅ Updated
    },
  ]

  const plannedEnhancements = [
    "Add video creation tools for creators",
    "Expand platform coverage beyond YouTube and TikTok",
    "Performance benchmarking",
    "Include monetization strategy guidance",
  ]

  const nextSteps = [
    "Implement user-suggested features",
    "Test real-time trend detection accuracy",
    "Expand dataset coverage",
    "Prepare for launch and early-access beta",
  ]

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="About NexTrend"
          description="Learn more about our mission, vision, and the team behind the AI-powered trend prediction platform."
          imageUrl="/images/about-header.jpeg"
        />

        <motion.section
          className="py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 scroll-mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-12">
            {/* Objective */}
            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">Our Objective</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  To provide users with real-time, AI-driven insights on what's trending across platforms, enabling them
                  to make data-backed content and marketing decisions.
                </p>
              </div>
            </motion.div>

            {/* Target Users */}
            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">Target Users</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Content creators</li>
                  <li>Social media marketers</li>
                  <li>Trend researchers</li>
                  <li>Entrepreneurs and digital product creators</li>
                </ul>
              </div>
            </motion.div>

            {/* Enhancements */}
            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">
                  Planned Enhancements
                </h2>
                <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
                  {plannedEnhancements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Status */}
            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">Project Status</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Currently in collecting feedback from users before going into the development process.
                </p>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">Next Steps</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
                  {nextSteps.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Team */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter text-center text-gray-900 dark:text-white">
                Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={itemVariants}
                  >
                    <div className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="rounded-full mb-4 object-cover"
                      />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-2">{member.role}</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{member.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
