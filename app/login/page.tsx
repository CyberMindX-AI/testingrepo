"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  useEffect(() => {
    router.push("/auth/login")
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300">
      Redirecting to login...
    </div>
  )
}
