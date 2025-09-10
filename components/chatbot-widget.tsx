"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { HelpCircle, Send, MessageCircle, Bug, BookOpenText, PhoneCall, Sparkles } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { motion, AnimatePresence } from "framer-motion"

// Simple message type
type ChatMsg = { role: "user" | "assistant"; content: string }

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: "assistant", content: "Hi! I can help with feedback, issues, guides, FAQs and leads. How can I help?" },
  ])
  const [loading, setLoading] = useState(false)
  const [showBugForm, setShowBugForm] = useState(false)
  const [bugName, setBugName] = useState("")
  const [bugEmail, setBugEmail] = useState("")
  const [bugDesc, setBugDesc] = useState("")
  const [bugUrgent, setBugUrgent] = useState(false)
  const [showNudge, setShowNudge] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [open, messages])

  // Show a greeting nudge on every visit (each page load)
  useEffect(() => {
    const timer = setTimeout(() => setShowNudge(true), 1200)
    const autoHide = setTimeout(() => setShowNudge(false), 8000)
    return () => {
      clearTimeout(timer)
      clearTimeout(autoHide)
    }
  }, [])

  const send = async (text: string, intent?: string) => {
    if (!text.trim()) return
    const userMsg: ChatMsg = { role: "user", content: text }
    setMessages((m) => [...m, userMsg])
    setInput("")
    setLoading(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, intent }),
      })
      const data = await res.json()
      const reply = data?.reply || "Thanks for your message!"
      setMessages((m) => [...m, { role: "assistant", content: reply }])
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Sorry, I had trouble replying right now. Please try again." },
      ])
    } finally {
      setLoading(false)
      console.log("analytics:message", { text, intent })
    }
  }

  const quickActions = [
    { label: "Give feedback", icon: MessageSquare, prompt: "I want to share feedback:", intent: "feedback" },
    { label: "Report an issue", icon: Bug, prompt: "", intent: "issue" },
    { label: "How to use NexTrend", icon: BookOpenText, prompt: "Guide me on how to use the site.", intent: "guide" },
    { label: "Contact the owner", icon: PhoneCall, prompt: "This is urgent. Contact the owner.", intent: "contact" },
    { label: "Ask a question", icon: HelpCircle, prompt: "Here's my question:", intent: "faq" },
    { label: "I want to become a lead", icon: Sparkles, prompt: "My name is ..., email is ... and I'm interested in ...", intent: "lead" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet
        open={open}
        onOpenChange={(v) => {
          setOpen(v)
          if (v) setShowNudge(false)
        }}
      >
        <SheetTrigger asChild>
          <motion.button
            aria-label="Open chat"
            className="h-12 w-12 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="h-5 w-5" />
          </motion.button>
        </SheetTrigger>
        {/* Greeting nudge bubble */}
        <AnimatePresence>
          {showNudge && !open && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-14 right-0 max-w-[260px] rounded-full bg-gray-900/95 backdrop-blur text-white text-xs px-3 py-2 border border-gray-800 shadow-lg"
            >
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
                <span className="whitespace-nowrap">Hello! How may I help you today?</span>
              </span>
              <span className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-gray-800"></span>
            </motion.div>
          )}
        </AnimatePresence>
        <SheetContent side="right" className="p-0 bg-gray-900 text-white border-l border-gray-800 w-[320px] sm:w-[360px]">
          <SheetHeader className="px-4 pt-4 pb-2">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-white">NexTrend Assistant</SheetTitle>
              <div className="flex items-center gap-2">
                <a
                  href="/contact"
                  className="inline-flex items-center text-xs px-3 py-1 rounded-md bg-pink-600 hover:bg-pink-700"
                >
                  <PhoneCall className="h-3 w-3 mr-1" /> Contact owner now
                </a>
              </div>
            </div>
          </SheetHeader>

          {/* Quick intents */}
          <motion.div
            className="px-4 pb-3 grid grid-cols-2 gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {quickActions.map((qa) => (
              <motion.button
                key={qa.label}
                className="justify-start bg-gray-800 border border-gray-700 hover:bg-gray-700 h-9 rounded-md px-3 text-sm flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (qa.intent === "issue") {
                    setShowBugForm(true)
                  } else {
                    send(qa.prompt, qa.intent)
                  }
                }}
              >
                <qa.icon className="h-4 w-4 mr-2" /> {qa.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Messages or Bug Form */}
          <div ref={scrollRef} className="px-4 space-y-3 h-64 overflow-y-auto">
            <AnimatePresence mode="wait">
              {!showBugForm ? (
                <motion.div
                  key="messages"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  {messages.map((m: ChatMsg, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                        m.role === "user"
                          ? "ml-auto bg-blue-600/90"
                          : "mr-auto bg-gray-800 border border-gray-700"
                      }`}
                    >
                      {m.content}
                    </motion.div>
                  ))}
                  {loading && (
                    <div className="mr-auto bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm animate-pulse">
                      Thinking…
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="bugform"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="text-sm text-gray-300">Report an issue</div>
                  <Input
                    placeholder="Full name"
                    value={bugName}
                    onChange={(e) => setBugName(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Email address"
                    type="email"
                    value={bugEmail}
                    onChange={(e) => setBugEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                  <Textarea
                    placeholder="Describe the issue, steps to reproduce, expected vs actual"
                    value={bugDesc}
                    onChange={(e) => setBugDesc(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-h-28"
                  />
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 mr-auto text-sm">
                      <Switch id="urgent" checked={bugUrgent} onCheckedChange={setBugUrgent} />
                      <label htmlFor="urgent" className="text-gray-300 select-none">Mark as urgent</label>
                    </div>
                    <Button
                      variant="outline"
                      className="bg-gray-800 border border-gray-500 text-gray-100 hover:bg-gray-800/80"
                      onClick={() => setShowBugForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={!bugName.trim() || !bugEmail.trim() || !bugDesc.trim()}
                      onClick={async () => {
                        try {
                          const res = await fetch("/api/feedback", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ name: bugName, email: bugEmail, description: bugDesc, type: "issue", severity: bugUrgent ? "urgent" : "normal" }),
                          })
                          const data = await res.json()
                          setShowBugForm(false)
                          setBugName("")
                          setBugEmail("")
                          setBugDesc("")
                          setBugUrgent(false)
                          setMessages((m) => {
                            const base = [
                              ...m,
                              { role: "assistant", content: "Thanks! We received your report and will look into it." },
                            ]
                            if (data && data.ok && data.delivered === false && data.preview) {
                              base.push({
                                role: "assistant",
                                content: `Email preview (not delivered yet):\nTo: ${data.preview.to}\nSubject: ${data.preview.subject}\n---\n${data.preview.text}`,
                              })
                            }
                            return base
                          })
                        } catch (e) {
                          setMessages((m) => [
                            ...m,
                            { role: "assistant", content: "Couldn't submit the report right now. Please try again." },
                          ])
                        }
                      }}
                    >
                      Submit report
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input */}
          <form
            className="flex gap-2 p-4 border-t border-gray-800"
            onSubmit={(e) => {
              e.preventDefault()
              if (showBugForm) return // disable text send while form is open
              send(input)
            }}
          >
            <Input
              placeholder={showBugForm ? "Close the form to continue chat" : "Type your message…"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={showBugForm}
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
            <Button type="submit" disabled={loading || !input.trim() || showBugForm} className="bg-blue-600 hover:bg-blue-700">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  )
}
