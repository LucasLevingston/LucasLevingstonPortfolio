import type React from 'react'

export interface ProjectStatusIconsProps {
  backEndRepositoryUrl?: string
  /** Extra status indicators, appended after the built-in ones (composition
   * over modification: new indicators don't require editing this component). */
  children?: React.ReactNode
  className?: string
  frontEndRepositoryUrl?: string
  images?: string[]
  isDeveloping?: boolean
  link?: string
  repositoryUrl?: string
}
