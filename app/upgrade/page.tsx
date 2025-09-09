"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Rocket,
  TrendingUp,
  Eye,
  Brain,
  Target,
  Sparkles
} from "lucide-react"

export default function UpgradePage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "1 content idea per day",
        "Basic trend insights",
        "Community support",
        "Limited video analysis"
      ],
      limitations: [
        "No AI coach access",
        "No advanced analytics",
        "No priority support"
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline" as const,
      popular: false,
      icon: Star
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For serious content creators",
      features: [
        "Unlimited content ideas",
        "Advanced trend analysis",
        "AI coach access",
        "Detailed video optimization",
        "Competitor analysis",
        "Priority support",
        "Custom thumbnails",
        "SEO optimization"
      ],
      limitations: [],
      buttonText: "Upgrade to Pro",
      buttonVariant: "default" as const,
      popular: true,
      icon: Zap
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For teams and agencies",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "White-label reports",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics",
        "Bulk operations"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false,
      icon: Crown
    }
  ]

  const features = [
    {
      title: "AI-Powered Insights",
      description: "Get personalized recommendations based on your niche and audience",
      icon: Brain,
      color: "text-blue-600"
    },
    {
      title: "Trend Prediction",
      description: "Stay ahead with our advanced trend prediction algorithms",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Performance Analytics",
      description: "Deep dive into your content performance with detailed analytics",
      icon: Eye,
      color: "text-purple-600"
    },
    {
      title: "Content Optimization",
      description: "Optimize your titles, thumbnails, and descriptions for maximum reach",
      icon: Target,
      color: "text-yellow-600"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tech YouTuber",
      content: "NexTrend Pro helped me increase my views by 300% in just 2 months!",
      avatar: "/images/content-creator.jpg"
    },
    {
      name: "Mike Chen",
      role: "Business Coach",
      content: "The AI coach feature is like having a personal mentor available 24/7.",
      avatar: "/images/social-media-marketer.jpg"
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
          title="Upgrade Your Content Game"
          description="Unlock the full power of AI-driven content creation and optimization"
          imageUrl="/images/hero-background-new.jpeg"
        />

        <section className="py-12 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            {/* Pricing Plans */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Select the perfect plan to accelerate your content creation journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`relative p-6 h-full ${
                    plan.popular 
                      ? 'border-2 border-blue-500 shadow-xl scale-105' 
                      : 'border border-gray-200 dark:border-gray-700'
                  }`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                        Most Popular
                      </Badge>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className={`inline-flex p-3 rounded-full mb-4 ${
                        plan.popular ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        <plan.icon className={`h-6 w-6 ${
                          plan.popular ? 'text-blue-600' : 'text-gray-600 dark:text-gray-400'
                        }`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {plan.name}
                      </h3>
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 ml-1">
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {plan.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant={plan.buttonVariant}
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : ''
                      }`}
                      size="lg"
                    >
                      {plan.buttonText}
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Features Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Upgrade to Pro?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Unlock powerful features that will transform your content strategy
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6 text-center">
                    <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What Our Users Say
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <Rocket className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Supercharge Your Content?
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Join thousands of creators who are already using NexTrend Pro to grow their channels
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Demo
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}