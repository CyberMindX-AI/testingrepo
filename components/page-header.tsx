"use client"
import Image from "next/image"
import type { PageHeaderProps } from "./types"

export function PageHeader({ title, description, imageUrl }: PageHeaderProps) {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 flex items-center justify-center text-white overflow-hidden">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 to-gray-950/70 z-10" />
      <div className="relative z-20 container px-4 md:px-6 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">{title}</h1>
        <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl mt-4">{description}</p>
      </div>
    </section>
  )
}
