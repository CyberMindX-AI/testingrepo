"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Gift } from "lucide-react"
import { useState } from "react"

export default function DonatePage() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [currency, setCurrency] = useState("USD")
  const [amount, setAmount] = useState("")

  const handleDonate = () => {
    // Frontend-only: log the payload and close
    console.log("Donation submitted:", { name, email, currency, amount })
    setOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              Support us financially <span className="text-yellow-400">🎁</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              NexTrend is built with passion to help creators grow. Your donation, regardless of size, helps us
              improve features, maintain infrastructure, and expand our reach to more users worldwide.
            </p>

            <div className="mt-10 flex justify-center">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="rounded-full border-2 px-6 py-6 text-base">
                    <Gift className="h-5 w-5 mr-2" /> Donate
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-white border border-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-white">Make a Donation</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-4 mt-2">
                    <div className="text-left">
                      <Label htmlFor="fullName" className="text-gray-200">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-2 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="text-left">
                      <Label htmlFor="email" className="text-gray-200">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-left">
                      <div className="col-span-1">
                        <Label className="text-gray-200">Currency</Label>
                        <Select value={currency} onValueChange={setCurrency}>
                          <SelectTrigger className="mt-2 bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-700 text-white">
                            <SelectItem value="USD">USD $</SelectItem>
                            <SelectItem value="EUR">EUR €</SelectItem>
                            <SelectItem value="GBP">GBP £</SelectItem>
                            <SelectItem value="NGN">NGN ₦</SelectItem>
                            <SelectItem value="GHS">GHS ₵</SelectItem>
                            <SelectItem value="KES">KES KSh</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="amount" className="text-gray-200">Donation Amount</Label>
                        <Input
                          id="amount"
                          type="number"
                          min="1"
                          placeholder="Enter amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="mt-2 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Button
                        variant="ghost"
                        className="text-gray-300 hover:text-white"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="bg-pink-600 hover:bg-pink-700"
                        onClick={handleDonate}
                        disabled={!name.trim() || !email.trim() || !amount}
                      >
                        Donate Now
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Optional: small reassurance line */}
            <div className="mt-6 text-sm text-gray-400">
              This is a demo flow. No payment will be charged.
            </div>
          </div>
        </section>

        {/* Decorative divider and highlight section (simple card) */}
        <section className="pb-16 bg-gray-950">
          <div className="container mx-auto max-w-5xl px-4">
            <Card className="bg-gray-900 border-gray-800 p-8 text-center">
              <h2 className="text-2xl font-semibold mb-2 text-white">Why donate?</h2>
              <p className="text-gray-300">
                Your support helps us keep NexTrend fast, stable and packed with features you love. Thank you for helping
                creators worldwide.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
