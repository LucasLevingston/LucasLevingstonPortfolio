export interface ProjectVersion {
  backEndRepositoryUrl?: string
  description?: string
  docsUrl?: string
  endsDate?: string
  features?: string[]
  frontEndRepositoryUrl?: string
  images?: string[]
  link?: string
  name?: string
  repositoryUrl?: string
  startsDate?: string
  technologies: string[]
}

export interface ProjectType {
  about?: string
  backEndRepositoryUrl?: string
  description: string
  endsDate?: string

  favorite?: boolean
  features?: string[]
  frontEndRepositoryUrl?: string
  images?: string[]
  isDeveloping?: boolean
  isMobile?: boolean
  link?: string
  repositoryUrl?: string
  showEvolution?: boolean
  startsDate?: string
  technologies: string[]
  thumbnail?: string
  title: string
  versions?: ProjectVersion[]
}
