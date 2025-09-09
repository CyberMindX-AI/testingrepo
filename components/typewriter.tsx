"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  lines: string[]
  className?: string
  speed?: number
  pauseBetweenLines?: number
  loop?: boolean
}

export function Typewriter({ 
  lines, 
  className = "", 
  speed = 100, 
  pauseBetweenLines = 2000,
  loop = true 
}: TypewriterProps) {
  const [currentText, setCurrentText] = useState("")
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Accessible: respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setCurrentText(lines[0] || "")
      setIsComplete(true)
      return
    }

    const currentLine = lines[currentLineIndex] || ""
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentLine.length) {
          setCurrentText(currentLine.substring(0, currentText.length + 1))
        } else {
          // Line complete, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseBetweenLines)
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(currentLine.substring(0, currentText.length - 1))
        } else {
          // Deletion complete, move to next line
          setIsDeleting(false)
          if (currentLineIndex < lines.length - 1) {
            setCurrentLineIndex(currentLineIndex + 1)
          } else if (loop) {
            setCurrentLineIndex(0)
          } else {
            setIsComplete(true)
          }
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentText, currentLineIndex, isDeleting, lines, speed, pauseBetweenLines, loop])

  return (
    <span className={className}>
      {currentText}
      {!isComplete && <span className="animate-pulse ml-1">|</span>}
    </span>
  )
}