import type React from 'react'

export interface RecommendationType {
  comments: string
  company: string
  date: string
  linkedinImageUrl: string
  linkedinUrl: string
  name: string
  position: string
}

export interface SectionItemRootProps {
  children: React.ReactNode
  className?: string
}

export interface SectionItemHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface SectionItemTitleProps {
  children: React.ReactNode
  className?: string
  subtitle?: string
}

export interface SectionItemAvatarProps {
  className?: string
  fallback?: string
  imageUrl?: string
}

export interface SectionItemLinkedInProps {
  className?: string
  recommendation: RecommendationType
}

export interface SectionItemContentProps {
  children: React.ReactNode
  className?: string
}

export interface SectionItemProps {
  children: React.ReactNode
  className?: string
  recommendation?: RecommendationType
  title?: string | React.ReactNode
}
