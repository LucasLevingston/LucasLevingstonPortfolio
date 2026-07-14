import type React from 'react'

export type SectionVariant = 'primary' | 'secondary' | 'ghost'

export interface SectionRootProps {
  children: React.ReactNode
  id?: string
  className?: string
  variant?: SectionVariant
}

export interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export interface SectionContentProps {
  children: React.ReactNode
  className?: string
}

export interface SectionProps {
  children: React.ReactNode
  title?: string
  className?: string
  id?: string
  variant?: SectionVariant
}
