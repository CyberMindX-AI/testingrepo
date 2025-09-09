"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MockupVideoProps {
  className?: string
  posterImage?: string
}

export function MockupVideo({ className = "", posterImage = "/images/hero-background-new.jpeg" }: MockupVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying)
    // TODO: Replace with production mockup video asset
    console.log("Video play/pause toggled:", !isPlaying)
  }

  return (
    <div className={`relative w-full aspect-video bg-black/30 rounded-lg flex items-center justify-center overflow-hidden ${className}`}>
      {/* Poster/Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${posterImage})` }}
      />
      
      {/* Video Overlay */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <Button
          onClick={handlePlayToggle}
          size="lg"
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/30 rounded-full h-16 w-16 p-0"
          variant="outline"
        >
          {isPlaying ? (
            <Pause className="h-8 w-8" />
          ) : (
            <Play className="h-8 w-8 ml-1" />
          )}
        </Button>
        
        <p className="text-white/90 text-sm font-medium">
          {isPlaying ? "Playing Demo Video" : "Watch Product Demo"}
        </p>
      </div>

      {/* Mock Video Element - Hidden for now */}
      {/* TODO: Replace with actual video once available */}
      <video 
        className="absolute inset-0 w-full h-full object-cover hidden"
        poster={posterImage}
        controls={false}
        muted
        autoPlay={isPlaying}
      >
        <source src="/placeholder-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}