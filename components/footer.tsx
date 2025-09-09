import Link from "next/link"
import { Twitter, Youtube } from "lucide-react" // Changed to Youtube for TikTok icon

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white" prefetch={false}>
            NexTrend
          </Link>
          <p className="text-sm">
            NexTrend is an AI-powered platform that identifies trending niches and topics across social media platforms.
          </p>
          <div className="flex gap-4">
            <Link href="https://x.com/nextrenda12025" className="hover:text-white" target="_blank" prefetch={false}>
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@nextrendai"
              className="hover:text-white"
              target="_blank"
              prefetch={false}
            >
              <Youtube className="h-5 w-5" /> {/* Using Youtube icon for TikTok */}
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-white">Company</h3>
          <nav className="space-y-2">
            <Link href="/about" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              About Us
            </Link>
            <Link href="/docs" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Docs
            </Link>
            <Link href="/contact" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-white">Resources</h3>
          <nav className="space-y-2">
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Case Studies
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Support
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-white">Legal</h3>
          <nav className="space-y-2">
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
      <div className="container text-center text-sm mt-8 border-t border-gray-800 pt-8 px-4 md:px-6">
        <p>&copy; 2025 NexTrend. All rights reserved.</p>
      </div>
    </footer>
  )
}
