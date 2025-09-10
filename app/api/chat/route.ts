import { NextRequest, NextResponse } from "next/server"
export const runtime = "nodejs"

// Simple intent router
function detectIntent(text: string, hint?: string) {
  const t = `${hint ?? ""} ${text}`.toLowerCase()
  if (t.includes("feedback")) return "feedback"
  if (t.includes("bug") || t.includes("issue") || t.includes("problem")) return "issue"
  if (t.includes("contact") || t.includes("owner") || t.includes("urgent")) return "contact"
  if (t.includes("guide") || t.includes("how") || t.includes("help")) return "guide"
  if (t.includes("lead") || t.includes("demo") || t.includes("pricing")) return "lead"
  return "faq"
}

async function callGemini(systemPrompt: string, userText: string) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    // No API key: strictly disable AI (no mock replies)
    throw new Error("GEMINI_UNAVAILABLE")
  }

  // Minimal REST call to Gemini 1.5 via Google AI Studio endpoint
  try {
    const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite-preview:generateContent";

    const res = await fetch(`${endpoint}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: `${systemPrompt}\n\nUser: ${userText}` }] },
        ],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 512,
        },
      }),
    })
    if (!res.ok) throw new Error(await res.text())
    const data = await res.json()
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response."
    return text
  } catch (e: any) {
    console.error("Gemini error", e?.message || e)
    return "I had trouble generating a response just now. Please try again."
  }
}

export async function POST(req: NextRequest) {
  const { message, intent: hinted } = await req.json()
  const text: string = String(message ?? "").slice(0, 4000)
  const intent = detectIntent(text, hinted)

  const CONTACT_PAGE = "/contact"
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL || ""

  // Lightweight site map to help the assistant link users directly.
  const siteMap = [
    { label: "Home Dashboard", path: "/home-dashboard" },
    { label: "Discover", path: "/discover" },
    { label: "Keywords", path: "/keywords" },
    { label: "AI Trend", path: "/ai-trend" },
    { label: "Upgrade", path: "/upgrade" },
    { label: "Donate", path: "/donate" },
    { label: "Login", path: "/auth/login" },
    { label: "Sign Up", path: "/auth/signup" },
    { label: "About", path: "/about" },
    { label: "Docs", path: "/docs" },
    { label: "Contact", path: CONTACT_PAGE },
  ]

  const system = `You are the NexTrend website assistant. Answer ONLY questions about the NexTrend website and its features. If a request is outside NexTrend scope (personal, unrelated topics, general chit-chat, other products), reply with: \"I can only help with NexTrend topics.\" Do NOT invent data, links, or promises. Use ONLY these routes.\n\nCapabilities:\n- Collect feedback & report issues.\n- If the issue sounds severe/urgent, provide the owner's contact link: ${CONTACT_PAGE}${CONTACT_EMAIL ? ` and email: ${CONTACT_EMAIL}` : ""}.\n- Guide users step-by-step on using features.\n- Answer FAQs with short actionable steps.\n- If the user looks like a potential lead, ask for name, email, and what they're interested in.\n- When the user asks for a page, always include a direct link using one of these routes: ${siteMap
    .map((s) => `${s.label}: ${s.path}`)
    .join(", ")}.\n\nAlways keep answers under 120 words and use bullet points when helpful. Prefer direct links (just provide the path).`

  // Pre-bias the prompt a bit based on intent
  const prefaceMap: Record<string, string> = {
    feedback: "User wants to share product feedback.",
    issue: "User reports a bug/problem. Ask for steps, expected vs actual, device/browser.",
    contact: "User wants to reach the owner fast. Provide contact link immediately.",
    guide: "User needs a how-to guide for NexTrend features.",
    faq: "User has a general question.",
    lead: "User might be a lead. Politely ask name, email, and needs.",
  }

  const preface = prefaceMap[intent] || prefaceMap.faq
  let reply: string
  try {
    reply = await callGemini(`${system}\n\nContext: ${preface}`, text)
  } catch (err: any) {
    if (String(err?.message) === "GEMINI_UNAVAILABLE") {
      return NextResponse.json(
        { intent, reply: "The assistant is temporarily unavailable. Please try again later or contact us at /contact." },
        { status: 503 }
      )
    }
    return NextResponse.json(
      { intent, reply: "I had trouble replying. Please try again." },
      { status: 500 }
    )
  }

  // Minimal analytics placeholder
  console.log("chat_analytics", { intent, text: text.slice(0, 200) })

  return NextResponse.json({ intent, reply })
}

export async function GET() {
  return NextResponse.json({ ok: true })
}
