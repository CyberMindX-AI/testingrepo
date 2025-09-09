"use client"

import { useEffect, useRef, useState } from "react"

interface UseCountUpOptions {
  end: number
  duration?: number
  start?: number
  decimals?: number
  suffix?: string
  prefix?: string
  triggerOnce?: boolean
}

export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  suffix = "",
  prefix = "",
  triggerOnce = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start)
  const ref = useRef<HTMLSpanElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          let startTime: number | null = null
          const animateCount = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = (currentTime - startTime) / duration
            const currentCount = Math.min(progress, 1) * (end - start) + start
            setCount(Number.parseFloat(currentCount.toFixed(decimals)))

            if (progress < 1) {
              requestAnimationFrame(animateCount)
            }
          }
          requestAnimationFrame(animateCount)
        }
      },
      { threshold: 0.5 }, // Trigger when 50% of the element is visible
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end, duration, start, decimals, triggerOnce])

  return {
    value: `${prefix}${count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`,
    ref,
  }
}
