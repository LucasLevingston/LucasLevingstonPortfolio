export interface ProjectVersion {
  name?: string
  description?: string
  images?: string[]
  repositoryUrl?: string
  frontEndRepositoryUrl?: string
  backEndRepositoryUrl?: string
  link?: string
  technologies: string[]
  startsDate?: string
  endsDate?: string
}

export interface ProjectType {
  title: string

  favorite?: boolean
  description: string
  about?: string
  images?: string[]
  technologies: string[]
  link?: string
  repositoryUrl?: string
  frontEndRepositoryUrl?: string
  backEndRepositoryUrl?: string
  isMobile?: boolean
  versions?: ProjectVersion[]
  showEvolution?: boolean
  isDeveloping?: boolean
  startsDate?: string
  endsDate?: string
}
