import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is NexTrend?",
      answer:
        "NexTrend is an AI-powered platform that identifies trending niches and topics across social media platforms like YouTube and TikTok. It helps creators, marketers, and businesses discover fast-rising trends before they go mainstream.",
    },
    {
      question: "How does NexTrend identify trends?",
      answer:
        "NexTrend uses advanced AI models to analyze vast amounts of data from social media platforms, identifying patterns and predicting emerging trends before they become widely popular.",
    },
    {
      question: "Which platforms does NexTrend support?",
      answer:
        "Currently, NexTrend supports YouTube and TikTok for trend identification and tracking. We plan to expand to more platforms in the future.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free tier that allows you to generate one content idea per day. You can sign up for our newsletter to get started.",
    },
    {
      question: "How can I get personalized niche recommendations?",
      answer:
        "Our AI analyzes your content style and audience engagement to provide personalized niche recommendations directly within your user dashboard.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Here's to all your interesting questions
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about NexTrend.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
