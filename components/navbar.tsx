"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Gift } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const pathname = usePathname()
  const isWorkspaceRoute = (p?: string | null) => {
    if (!p) return false
    return (
      p.startsWith("/home-dashboard") ||
      p.startsWith("/discover") ||
      p.startsWith("/keywords") ||
      p.startsWith("/ai-trend") ||
      p.startsWith("/upgrade")
    )
  }
  const isWorkspace = isWorkspaceRoute(pathname)

  const workspaceLinks = [
    { href: "/discover", label: "Discover" },
    { href: "/keywords", label: "Keywords" },
    { href: "/ai-trend", label: "AI Trend" },
    { href: "/upgrade", label: "Upgrade" },
  ]

  const defaultLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/docs", label: "Docs" },
    { href: "/contact", label: "Contact" },
  ]

  const links = isWorkspace ? workspaceLinks : defaultLinks
  const linkBaseClass = isWorkspace
    ? "text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium"
    : "text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium"

  return (
    <nav className={`${isWorkspace ? "bg-gray-900 border-b border-gray-800" : "bg-white dark:bg-gray-900 border-b"} shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className={`text-2xl font-bold ${isWorkspace ? "text-white" : "text-blue-600"}`}>NexTrend</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={linkBaseClass}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons & Theme Toggle */}
          {!isWorkspace && (
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/donate">
                <Button variant="outline" size="sm" className="rounded-full border-2">
                  <Gift className="h-4 w-4 mr-2" /> Donate
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`${isWorkspace ? "text-white hover:text-white/80" : "text-gray-700 hover:text-blue-600"} block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={toggleMenu}
                >
                  {l.label}
                </Link>
              ))}
              {!isWorkspace && (
                <div className="flex flex-col space-y-2 pt-4">
                  <div className="flex justify-center pb-2">
                    <ThemeToggle />
                  </div>
                  <Link href="/donate">
                    <Button variant="outline" size="sm" className="w-full rounded-full border-2">
                      <Gift className="h-4 w-4 mr-2" /> Donate
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button variant="outline" size="sm" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button size="sm" className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}