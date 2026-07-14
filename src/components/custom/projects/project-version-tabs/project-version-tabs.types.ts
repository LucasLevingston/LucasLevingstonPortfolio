import type { ProjectVersion } from '@/types/ProjectType'

export interface ProjectVersionTabsProps {
  versions: ProjectVersion[]
  isMobile?: boolean
  paginationImages?: string[]
}
