import type React from "react"
export interface PageHeaderProps {
  title: string
  description: string
  imageUrl?: string
}

export interface FeatureDetail {
  title: string
  description: string
  longDescription: string
  icon: React.ElementType
}
